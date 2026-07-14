"use strict";
n.d(t, { A: () => O }), n(321073);
var i = n(735438),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(164956),
    o = n(734057),
    d = n(927813),
    c = n(935208),
    u = n(112389),
    _ = n(713125),
    E = n(539916);
let A = {},
    h = {},
    I = {},
    f = !1;
function p(e, t, n) {
    return e.map((e) =>
        (function (e, t, n) {
            let i = !1,
                r = [];
            for (let t = 0; t < e.options.length; t++) {
                let a = e.options[t],
                    s = null == n[a.id];
                s && (i = !0), r.push({ ...a, isUnseen: s });
            }
            return { ...e, options: r, hasNewAnswers: i, isNew: null == t[e.id] };
        })(e, t, n),
    );
}
function T(e) {
    let { guildId: t, updates: n } = e,
        i = n.onboardingPromptsSeen ?? A[t]?.onboardingPromptsSeen ?? {},
        r = n.onboardingResponsesSeen ?? A[t]?.onboardingResponsesSeen ?? {},
        a = p(n.prompts ?? A[t]?.prompts ?? [], i, r);
    A[t] = { ...A[t], ...n, prompts: a };
}
function m(e, t) {
    if (null == h[e]) return;
    let n = {};
    Object.keys(h[e]).forEach((i) => {
        !t.includes(i) && h[e][i] ? (n[i] = !0) : t.includes(i) && !1 === h[e][i] && (n[i] = !1);
    }),
        (h[e] = n);
    let i = t.filter((e) => null == n[e] || !0 === n[e]);
    Object.keys(n).forEach((e) => {
        !0 !== n[e] || t.includes(e) || i.push(e);
    }),
        (A[e] = { ...A[e], responses: i });
}
let g = [],
    S = [],
    N = [],
    C = [];
class R extends a.Ay.Store {
    static displayName = "GuildOnboardingPromptsStore";
    initialize() {
        this.waitFor(o.A, _.Ay, l.A);
    }
    getOnboardingPromptsForOnboarding(e) {
        return A[e]?.onboardingPrompts ?? g;
    }
    getOnboardingPrompts(e) {
        return A[e]?.prompts ?? g;
    }
    getOnboardingResponses(e) {
        return l.A.isFullServerPreview(e) ? Array.from(l.A.getOnboardingResponses(e) ?? S) : (A[e]?.responses ?? S);
    }
    getSelectedOptions(e) {
        let t = this.getOnboardingResponses(e);
        return this.getOnboardingPrompts(e)
            .map((e) => e.options)
            .flat()
            .filter((e) => t.includes(e.id));
    }
    getOnboardingResponsesForPrompt(e, t) {
        let n = A[e];
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
        let t = A[e];
        return l.A.isFullServerPreview(e) ? (t?.prompts ?? g) : null != t && t.enabled ? (t.prompts ?? g) : g;
    }
    getDefaultChannelIds(e) {
        return A[e]?.defaultChannelIds ?? N;
    }
    getEnabled(e) {
        return l.A.isFullServerPreview(e) ? null != A[e] : (A[e]?.enabled ?? !1);
    }
    getOnboardingPrompt(e) {
        return Object.values(A)
            .map((e) => e.prompts)
            .flat()
            .find((t) => t.id === e);
    }
    isLoading() {
        return f;
    }
    shouldFetchPrompts(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.A.Millis.HOUR;
        if (f) return !1;
        let n = I[e];
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
        return I[e];
    }
    isAdvancedMode(e) {
        return null != e && A[e]?.mode === E.SD.ONBOARDING_ADVANCED;
    }
    getConnections(e) {
        return A[e]?.connections ?? C;
    }
    getOnboardingConnections(e) {
        let t = A[e];
        if (null == t) return C;
        let n = t.additionalConnections ?? [];
        return 0 === n.length ? (t.connections ?? C) : [...(t.connections ?? []), ...n];
    }
}
let O = new R(s.h, {
    CONNECTION_OPEN: function () {
        (f = !1), (A = {});
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete A[t.id], delete h[t.id], delete I[t.id];
    },
    GUILD_ONBOARDING_PROMPTS_FETCH_START: function () {
        f = !0;
    },
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function (e) {
        let {
            guildId: t,
            prompts: n,
            defaultChannelIds: i,
            enabled: r,
            responses: a,
            onboardingPromptsSeen: s,
            onboardingResponsesSeen: l,
            mode: o,
            belowRequirements: d,
            connections: c,
            additionalConnections: E,
        } = e;
        f = !1;
        let h = _.Ay.getOnboardingStatus(t) === _.$o.READY,
            T = p(n, s, l);
        (A[t] = {
            enabled: r,
            mode: o,
            belowRequirements: d,
            prompts: T,
            onboardingPrompts: T.filter((e) => e.inOnboarding),
            defaultChannelIds: i.filter((e) => (0, u.S)(t, e)),
            responses: h ? [] : a,
            onboardingPromptsSeen: s,
            onboardingResponsesSeen: l,
            connections: c ?? [],
            additionalConnections: E ?? [],
        }),
            h || m(t, a),
            (I[t] = Date.now());
    },
    GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function () {
        f = !1;
    },
    GUILD_ONBOARDING_SELECT_OPTION: function (e) {
        let { guildId: t, optionId: n, selected: i, removedOptionIds: a } = e;
        return (
            !!l.A.isFullServerPreview(t) ||
            (null != A[t] &&
                (null != a && a.length > 0 && r().pullAll(A[t].responses, a),
                i ? A[t].responses.push(n) : r().pull(A[t].responses, n),
                null == h[t] && (h[t] = {}),
                (h[t][n] = i),
                null != a && a.forEach((e) => (h[t][e] = !1)),
                (h[t] = { ...h[t] }),
                !0))
        );
    },
    GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: function (e) {
        let { guildId: t, options: n, prompts_seen: i, options_seen: r } = e;
        m(t, n);
        let a = A[t];
        if (null == a) return !1;
        let s = p(a.prompts, i, r);
        A[t] = {
            ...a,
            prompts: s,
            onboardingPrompts: s.filter((e) => e.inOnboarding),
            onboardingPromptsSeen: i,
            onboardingResponsesSeen: r,
        };
    },
    GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: T,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: T,
    GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: function (e) {
        let { guildId: t, channelIds: n } = e;
        A[t] = { ...A[t], defaultChannelIds: n };
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_SUCCESS: function (e) {
        let { guildId: t, connections: n } = e;
        if (null == A[t]) return !1;
        A[t] = { ...A[t], connections: n };
    },
    GUILD_SETTINGS_ONBOARDING_SET_MODE: function (e) {
        let { guildId: t, mode: n } = e,
            i = A[t];
        null != i && (i.mode = n);
    },
});
