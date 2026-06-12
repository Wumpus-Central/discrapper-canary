"use strict";
n.d(t, { A: () => C }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(164956),
    l = n(734057),
    u = n(927813),
    c = n(935208),
    d = n(112389),
    _ = n(713125),
    h = n(539916);
let f = {},
    p = {},
    E = {},
    m = !1;
function g(e, t, n) {
    return e.map((e) =>
        (function (e, t, n) {
            let i = !1,
                r = [];
            for (let t = 0; t < e.options.length; t++) {
                let s = e.options[t],
                    a = null == n[s.id];
                a && (i = !0), r.push({ ...s, isUnseen: a });
            }
            return { ...e, options: r, hasNewAnswers: i, isNew: null == t[e.id] };
        })(e, t, n),
    );
}
function A(e) {
    let { guildId: t, updates: n } = e,
        i = n.onboardingPromptsSeen ?? f[t]?.onboardingPromptsSeen ?? {},
        r = n.onboardingResponsesSeen ?? f[t]?.onboardingResponsesSeen ?? {},
        s = g(n.prompts ?? f[t]?.prompts ?? [], i, r);
    f[t] = { ...f[t], ...n, prompts: s };
}
function I(e, t) {
    if (null == p[e]) return;
    let n = {};
    Object.keys(p[e]).forEach((i) => {
        !t.includes(i) && p[e][i] ? (n[i] = !0) : t.includes(i) && !1 === p[e][i] && (n[i] = !1);
    }),
        (p[e] = n);
    let i = t.filter((e) => null == n[e] || !0 === n[e]);
    Object.keys(n).forEach((e) => {
        !0 !== n[e] || t.includes(e) || i.push(e);
    }),
        (f[e] = { ...f[e], responses: i });
}
let T = [],
    S = [],
    y = [],
    N = [];
class v extends s.Ay.Store {
    static displayName = "GuildOnboardingPromptsStore";
    initialize() {
        this.waitFor(l.A, _.Ay, o.A);
    }
    getOnboardingPromptsForOnboarding(e) {
        return f[e]?.onboardingPrompts ?? T;
    }
    getOnboardingPrompts(e) {
        return f[e]?.prompts ?? T;
    }
    getOnboardingResponses(e) {
        return o.A.isFullServerPreview(e) ? Array.from(o.A.getOnboardingResponses(e) ?? S) : (f[e]?.responses ?? S);
    }
    getSelectedOptions(e) {
        let t = this.getOnboardingResponses(e);
        return this.getOnboardingPrompts(e)
            .map((e) => e.options)
            .flat()
            .filter((e) => t.includes(e.id));
    }
    getOnboardingResponsesForPrompt(e, t) {
        let n = f[e];
        if (null == n) return S;
        let i = n.prompts.find((e) => e.id === t);
        return null == i
            ? S
            : r().intersection(
                  i.options.map((e) => e.id),
                  this.getOnboardingResponses(e),
              );
    }
    getEnabledOnboardingPrompts(e) {
        let t = f[e];
        return o.A.isFullServerPreview(e) ? (t?.prompts ?? T) : null != t && t.enabled ? (t.prompts ?? T) : T;
    }
    getDefaultChannelIds(e) {
        return f[e]?.defaultChannelIds ?? y;
    }
    getEnabled(e) {
        return o.A.isFullServerPreview(e) ? null != f[e] : (f[e]?.enabled ?? !1);
    }
    getOnboardingPrompt(e) {
        return Object.values(f)
            .map((e) => e.prompts)
            .flat()
            .find((t) => t.id === e);
    }
    isLoading() {
        return m;
    }
    shouldFetchPrompts(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.A.Millis.HOUR;
        if (m) return !1;
        let n = E[e];
        return null == n || Date.now() - n > t;
    }
    getPendingResponseOptions(e) {
        return p[e];
    }
    ackIdForGuild(e) {
        let t = this.getEnabledOnboardingPrompts(e),
            n = "0";
        return (
            t.forEach((e) => {
                e.options.forEach((e) => {
                    c.default.compare(e.id, n) > 0 && (n = e.id);
                }),
                    c.default.compare(e.id, n) > 0 && (n = e.id);
            }),
            n
        );
    }
    lastFetchedAt(e) {
        return E[e];
    }
    isAdvancedMode(e) {
        return null != e && f[e]?.mode === h.SD.ONBOARDING_ADVANCED;
    }
    getConnections(e) {
        return f[e]?.connections ?? N;
    }
}
let C = new v(a.h, {
    CONNECTION_OPEN: function () {
        (m = !1), (f = {});
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete f[t.id], delete p[t.id], delete E[t.id];
    },
    GUILD_ONBOARDING_PROMPTS_FETCH_START: function () {
        m = !0;
    },
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function (e) {
        let {
            guildId: t,
            prompts: n,
            defaultChannelIds: i,
            enabled: r,
            responses: s,
            onboardingPromptsSeen: a,
            onboardingResponsesSeen: o,
            mode: l,
            belowRequirements: u,
            connections: c,
        } = e;
        m = !1;
        let h = _.Ay.getOnboardingStatus(t) === _.$o.READY,
            p = g(n, a, o);
        (f[t] = {
            enabled: r,
            mode: l,
            belowRequirements: u,
            prompts: p,
            onboardingPrompts: p.filter((e) => e.inOnboarding),
            defaultChannelIds: i.filter((e) => (0, d.S)(t, e)),
            responses: h ? [] : s,
            onboardingPromptsSeen: a,
            onboardingResponsesSeen: o,
            connections: c ?? [],
        }),
            h || I(t, s),
            (E[t] = Date.now());
    },
    GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function () {
        m = !1;
    },
    GUILD_ONBOARDING_SELECT_OPTION: function (e) {
        let { guildId: t, optionId: n, selected: i, removedOptionIds: s } = e;
        return (
            !!o.A.isFullServerPreview(t) ||
            (null != f[t] &&
                (null != s && s.length > 0 && r().pullAll(f[t].responses, s),
                i ? f[t].responses.push(n) : r().pull(f[t].responses, n),
                null == p[t] && (p[t] = {}),
                (p[t][n] = i),
                null != s && s.forEach((e) => (p[t][e] = !1)),
                (p[t] = { ...p[t] }),
                !0))
        );
    },
    GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: function (e) {
        let { guildId: t, options: n, prompts_seen: i, options_seen: r } = e;
        I(t, n);
        let s = f[t];
        if (null == s) return !1;
        let a = g(s.prompts, i, r);
        f[t] = {
            ...s,
            prompts: a,
            onboardingPrompts: a.filter((e) => e.inOnboarding),
            onboardingPromptsSeen: i,
            onboardingResponsesSeen: r,
        };
    },
    GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: A,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: A,
    GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: function (e) {
        let { guildId: t, channelIds: n } = e;
        f[t] = { ...f[t], defaultChannelIds: n };
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_SUCCESS: function (e) {
        let { guildId: t, connections: n } = e;
        if (null == f[t]) return !1;
        f[t] = { ...f[t], connections: n };
    },
    GUILD_SETTINGS_ONBOARDING_SET_MODE: function (e) {
        let { guildId: t, mode: n } = e,
            i = f[t];
        null != i && (i.mode = n);
    },
});
