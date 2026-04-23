"use strict";
n.d(t, { A: () => C }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(164956),
    l = n(734057),
    u = n(927813),
    c = n(661191),
    d = n(112389),
    _ = n(713125),
    f = n(539916);
let p = {},
    h = {},
    E = {},
    m = !1;
function g(e, t, n) {
    return e.map((e) =>
        (function (e, t, n) {
            let r = !1,
                i = [];
            for (let t = 0; t < e.options.length; t++) {
                let s = e.options[t],
                    a = null == n[s.id];
                a && (r = !0), i.push({ ...s, isUnseen: a });
            }
            return { ...e, options: i, hasNewAnswers: r, isNew: null == t[e.id] };
        })(e, t, n),
    );
}
function A(e) {
    let { guildId: t, updates: n } = e,
        r = n.onboardingPromptsSeen ?? p[t]?.onboardingPromptsSeen ?? {},
        i = n.onboardingResponsesSeen ?? p[t]?.onboardingResponsesSeen ?? {},
        s = g(n.prompts ?? p[t]?.prompts ?? [], r, i);
    p[t] = { ...p[t], ...n, prompts: s };
}
function I(e, t) {
    if (null == h[e]) return;
    let n = {};
    Object.keys(h[e]).forEach((r) => {
        !t.includes(r) && h[e][r] ? (n[r] = !0) : t.includes(r) && !1 === h[e][r] && (n[r] = !1);
    }),
        (h[e] = n);
    let r = t.filter((e) => null == n[e] || !0 === n[e]);
    Object.keys(n).forEach((e) => {
        !0 !== n[e] || t.includes(e) || r.push(e);
    }),
        (p[e] = { ...p[e], responses: r });
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
        return p[e]?.onboardingPrompts ?? T;
    }
    getOnboardingPrompts(e) {
        return p[e]?.prompts ?? T;
    }
    getOnboardingResponses(e) {
        return o.A.isFullServerPreview(e) ? Array.from(o.A.getOnboardingResponses(e) ?? S) : (p[e]?.responses ?? S);
    }
    getSelectedOptions(e) {
        let t = this.getOnboardingResponses(e);
        return this.getOnboardingPrompts(e)
            .map((e) => e.options)
            .flat()
            .filter((e) => t.includes(e.id));
    }
    getOnboardingResponsesForPrompt(e, t) {
        let n = p[e];
        if (null == n) return S;
        let r = n.prompts.find((e) => e.id === t);
        return null == r
            ? S
            : i().intersection(
                  r.options.map((e) => e.id),
                  this.getOnboardingResponses(e),
              );
    }
    getEnabledOnboardingPrompts(e) {
        let t = p[e];
        return o.A.isFullServerPreview(e) ? (t?.prompts ?? T) : null != t && t.enabled ? (t.prompts ?? T) : T;
    }
    getDefaultChannelIds(e) {
        return p[e]?.defaultChannelIds ?? y;
    }
    getEnabled(e) {
        return o.A.isFullServerPreview(e) ? null != p[e] : (p[e]?.enabled ?? !1);
    }
    getOnboardingPrompt(e) {
        return Object.values(p)
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
        return h[e];
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
        return null != e && p[e]?.mode === f.SD.ONBOARDING_ADVANCED;
    }
    getConnections(e) {
        return p[e]?.connections ?? N;
    }
}
let C = new v(a.h, {
    CONNECTION_OPEN: function () {
        (m = !1), (p = {});
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete p[t.id], delete h[t.id], delete E[t.id];
    },
    GUILD_ONBOARDING_PROMPTS_FETCH_START: function () {
        m = !0;
    },
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function (e) {
        let {
            guildId: t,
            prompts: n,
            defaultChannelIds: r,
            enabled: i,
            responses: s,
            onboardingPromptsSeen: a,
            onboardingResponsesSeen: o,
            mode: l,
            belowRequirements: u,
            connections: c,
        } = e;
        m = !1;
        let f = _.Ay.getOnboardingStatus(t) === _.$o.READY,
            h = g(n, a, o);
        (p[t] = {
            enabled: i,
            mode: l,
            belowRequirements: u,
            prompts: h,
            onboardingPrompts: h.filter((e) => e.inOnboarding),
            defaultChannelIds: r.filter((e) => (0, d.S)(t, e)),
            responses: f ? [] : s,
            onboardingPromptsSeen: a,
            onboardingResponsesSeen: o,
            connections: c ?? [],
        }),
            f || I(t, s),
            (E[t] = Date.now());
    },
    GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function () {
        m = !1;
    },
    GUILD_ONBOARDING_SELECT_OPTION: function (e) {
        let { guildId: t, optionId: n, selected: r, removedOptionIds: s } = e;
        return (
            !!o.A.isFullServerPreview(t) ||
            (null != p[t] &&
                (null != s && s.length > 0 && i().pullAll(p[t].responses, s),
                r ? p[t].responses.push(n) : i().pull(p[t].responses, n),
                null == h[t] && (h[t] = {}),
                (h[t][n] = r),
                null != s && s.forEach((e) => (h[t][e] = !1)),
                (h[t] = { ...h[t] }),
                !0))
        );
    },
    GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: function (e) {
        let { guildId: t, options: n, prompts_seen: r, options_seen: i } = e;
        I(t, n);
        let s = p[t];
        if (null == s) return !1;
        let a = g(s.prompts, r, i);
        p[t] = {
            ...s,
            prompts: a,
            onboardingPrompts: a.filter((e) => e.inOnboarding),
            onboardingPromptsSeen: r,
            onboardingResponsesSeen: i,
        };
    },
    GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: A,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: A,
    GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: function (e) {
        let { guildId: t, channelIds: n } = e;
        p[t] = { ...p[t], defaultChannelIds: n };
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_SUCCESS: function (e) {
        let { guildId: t, connections: n } = e;
        if (null == p[t]) return !1;
        p[t] = { ...p[t], connections: n };
    },
    GUILD_SETTINGS_ONBOARDING_SET_MODE: function (e) {
        let { guildId: t, mode: n } = e,
            r = p[t];
        null != r && (r.mode = n);
    },
});
