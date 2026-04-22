"use strict";
n.d(t, { A: () => R }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(164956),
    l = n(734057),
    u = n(927813),
    d = n(661191),
    c = n(112389),
    _ = n(713125),
    f = n(539916);
let E = {},
    h = {},
    p = {},
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
        r = n.onboardingPromptsSeen ?? E[t]?.onboardingPromptsSeen ?? {},
        i = n.onboardingResponsesSeen ?? E[t]?.onboardingResponsesSeen ?? {},
        s = g(n.prompts ?? E[t]?.prompts ?? [], r, i);
    E[t] = { ...E[t], ...n, prompts: s };
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
        (E[e] = { ...E[e], responses: r });
}
let T = [],
    S = [],
    y = [],
    N = [];
class O extends s.Ay.Store {
    static displayName = "GuildOnboardingPromptsStore";
    initialize() {
        this.waitFor(l.A, _.Ay, o.A);
    }
    getOnboardingPromptsForOnboarding(e) {
        return E[e]?.onboardingPrompts ?? T;
    }
    getOnboardingPrompts(e) {
        return E[e]?.prompts ?? T;
    }
    getOnboardingResponses(e) {
        return o.A.isFullServerPreview(e) ? Array.from(o.A.getOnboardingResponses(e) ?? S) : (E[e]?.responses ?? S);
    }
    getSelectedOptions(e) {
        let t = this.getOnboardingResponses(e);
        return this.getOnboardingPrompts(e)
            .map((e) => e.options)
            .flat()
            .filter((e) => t.includes(e.id));
    }
    getOnboardingResponsesForPrompt(e, t) {
        let n = E[e];
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
        let t = E[e];
        return o.A.isFullServerPreview(e) ? (t?.prompts ?? T) : null != t && t.enabled ? (t.prompts ?? T) : T;
    }
    getDefaultChannelIds(e) {
        return E[e]?.defaultChannelIds ?? y;
    }
    getEnabled(e) {
        return o.A.isFullServerPreview(e) ? null != E[e] : (E[e]?.enabled ?? !1);
    }
    getOnboardingPrompt(e) {
        return Object.values(E)
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
        let n = p[e];
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
                    d.default.compare(e.id, n) > 0 && (n = e.id);
                }),
                    d.default.compare(e.id, n) > 0 && (n = e.id);
            }),
            n
        );
    }
    lastFetchedAt(e) {
        return p[e];
    }
    isAdvancedMode(e) {
        return null != e && E[e]?.mode === f.SD.ONBOARDING_ADVANCED;
    }
    getConnections(e) {
        return E[e]?.connections ?? N;
    }
}
let R = new O(a.h, {
    CONNECTION_OPEN: function () {
        (m = !1), (E = {});
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete E[t.id], delete h[t.id], delete p[t.id];
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
            connections: d,
        } = e;
        m = !1;
        let f = _.Ay.getOnboardingStatus(t) === _.$o.READY,
            h = g(n, a, o);
        (E[t] = {
            enabled: i,
            mode: l,
            belowRequirements: u,
            prompts: h,
            onboardingPrompts: h.filter((e) => e.inOnboarding),
            defaultChannelIds: r.filter((e) => (0, c.S)(t, e)),
            responses: f ? [] : s,
            onboardingPromptsSeen: a,
            onboardingResponsesSeen: o,
            connections: d ?? [],
        }),
            f || I(t, s),
            (p[t] = Date.now());
    },
    GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function () {
        m = !1;
    },
    GUILD_ONBOARDING_SELECT_OPTION: function (e) {
        let { guildId: t, optionId: n, selected: r, removedOptionIds: s } = e;
        return (
            !!o.A.isFullServerPreview(t) ||
            (null != E[t] &&
                (null != s && s.length > 0 && i().pullAll(E[t].responses, s),
                r ? E[t].responses.push(n) : i().pull(E[t].responses, n),
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
        let s = E[t];
        if (null == s) return !1;
        let a = g(s.prompts, r, i);
        E[t] = {
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
        E[t] = { ...E[t], defaultChannelIds: n };
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_SUCCESS: function (e) {
        let { guildId: t, connections: n } = e;
        if (null == E[t]) return !1;
        E[t] = { ...E[t], connections: n };
    },
    GUILD_SETTINGS_ONBOARDING_SET_MODE: function (e) {
        let { guildId: t, mode: n } = e,
            r = E[t];
        null != r && (r.mode = n);
    },
});
