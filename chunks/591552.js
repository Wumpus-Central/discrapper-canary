"use strict";
n.d(t, { A: () => O }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(164956),
    l = n(734057),
    d = n(927813),
    _ = n(935208),
    u = n(112389),
    c = n(713125),
    E = n(539916);
let h = {},
    m = {},
    f = {},
    g = !1;
function p(e, t, n) {
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
        i = n.onboardingPromptsSeen ?? h[t]?.onboardingPromptsSeen ?? {},
        r = n.onboardingResponsesSeen ?? h[t]?.onboardingResponsesSeen ?? {},
        s = p(n.prompts ?? h[t]?.prompts ?? [], i, r);
    h[t] = { ...h[t], ...n, prompts: s };
}
function I(e, t) {
    if (null == m[e]) return;
    let n = {};
    Object.keys(m[e]).forEach((i) => {
        !t.includes(i) && m[e][i] ? (n[i] = !0) : t.includes(i) && !1 === m[e][i] && (n[i] = !1);
    }),
        (m[e] = n);
    let i = t.filter((e) => null == n[e] || !0 === n[e]);
    Object.keys(n).forEach((e) => {
        !0 !== n[e] || t.includes(e) || i.push(e);
    }),
        (h[e] = { ...h[e], responses: i });
}
let T = [],
    S = [],
    N = [],
    C = [];
class R extends s.Ay.Store {
    static displayName = "GuildOnboardingPromptsStore";
    initialize() {
        this.waitFor(l.A, c.Ay, o.A);
    }
    getOnboardingPromptsForOnboarding(e) {
        return h[e]?.onboardingPrompts ?? T;
    }
    getOnboardingPrompts(e) {
        return h[e]?.prompts ?? T;
    }
    getOnboardingResponses(e) {
        return o.A.isFullServerPreview(e) ? Array.from(o.A.getOnboardingResponses(e) ?? S) : (h[e]?.responses ?? S);
    }
    getSelectedOptions(e) {
        let t = this.getOnboardingResponses(e);
        return this.getOnboardingPrompts(e)
            .map((e) => e.options)
            .flat()
            .filter((e) => t.includes(e.id));
    }
    getOnboardingResponsesForPrompt(e, t) {
        let n = h[e];
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
        let t = h[e];
        return o.A.isFullServerPreview(e) ? (t?.prompts ?? T) : null != t && t.enabled ? (t.prompts ?? T) : T;
    }
    getDefaultChannelIds(e) {
        return h[e]?.defaultChannelIds ?? N;
    }
    getEnabled(e) {
        return o.A.isFullServerPreview(e) ? null != h[e] : (h[e]?.enabled ?? !1);
    }
    getOnboardingPrompt(e) {
        return Object.values(h)
            .map((e) => e.prompts)
            .flat()
            .find((t) => t.id === e);
    }
    isLoading() {
        return g;
    }
    shouldFetchPrompts(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.A.Millis.HOUR;
        if (g) return !1;
        let n = f[e];
        return null == n || Date.now() - n > t;
    }
    getPendingResponseOptions(e) {
        return m[e];
    }
    ackIdForGuild(e) {
        let t = this.getEnabledOnboardingPrompts(e),
            n = "0";
        return (
            t.forEach((e) => {
                e.options.forEach((e) => {
                    _.default.compare(e.id, n) > 0 && (n = e.id);
                }),
                    _.default.compare(e.id, n) > 0 && (n = e.id);
            }),
            n
        );
    }
    lastFetchedAt(e) {
        return f[e];
    }
    isAdvancedMode(e) {
        return null != e && h[e]?.mode === E.SD.ONBOARDING_ADVANCED;
    }
    getConnections(e) {
        return h[e]?.connections ?? C;
    }
}
let O = new R(a.h, {
    CONNECTION_OPEN: function () {
        (g = !1), (h = {});
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete h[t.id], delete m[t.id], delete f[t.id];
    },
    GUILD_ONBOARDING_PROMPTS_FETCH_START: function () {
        g = !0;
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
            belowRequirements: d,
            connections: _,
        } = e;
        g = !1;
        let E = c.Ay.getOnboardingStatus(t) === c.$o.READY,
            m = p(n, a, o);
        (h[t] = {
            enabled: r,
            mode: l,
            belowRequirements: d,
            prompts: m,
            onboardingPrompts: m.filter((e) => e.inOnboarding),
            defaultChannelIds: i.filter((e) => (0, u.S)(t, e)),
            responses: E ? [] : s,
            onboardingPromptsSeen: a,
            onboardingResponsesSeen: o,
            connections: _ ?? [],
        }),
            E || I(t, s),
            (f[t] = Date.now());
    },
    GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function () {
        g = !1;
    },
    GUILD_ONBOARDING_SELECT_OPTION: function (e) {
        let { guildId: t, optionId: n, selected: i, removedOptionIds: s } = e;
        return (
            !!o.A.isFullServerPreview(t) ||
            (null != h[t] &&
                (null != s && s.length > 0 && r().pullAll(h[t].responses, s),
                i ? h[t].responses.push(n) : r().pull(h[t].responses, n),
                null == m[t] && (m[t] = {}),
                (m[t][n] = i),
                null != s && s.forEach((e) => (m[t][e] = !1)),
                (m[t] = { ...m[t] }),
                !0))
        );
    },
    GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: function (e) {
        let { guildId: t, options: n, prompts_seen: i, options_seen: r } = e;
        I(t, n);
        let s = h[t];
        if (null == s) return !1;
        let a = p(s.prompts, i, r);
        h[t] = {
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
        h[t] = { ...h[t], defaultChannelIds: n };
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_SUCCESS: function (e) {
        let { guildId: t, connections: n } = e;
        if (null == h[t]) return !1;
        h[t] = { ...h[t], connections: n };
    },
    GUILD_SETTINGS_ONBOARDING_SET_MODE: function (e) {
        let { guildId: t, mode: n } = e,
            i = h[t];
        null != i && (i.mode = n);
    },
});
