n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(855986),
    s = n(73153),
    l = n(164956),
    o = n(734057),
    d = n(927813),
    c = n(811091),
    u = n(112389),
    _ = n(713125),
    E = n(539916);
let A = {},
    f = {},
    h = {},
    I = !1;
function p(e, t, n) {
    return e.map((e) =>
        (function (e, t, n) {
            let i = !1,
                r = [];
            for (let t = 0; t < e.options.length; t++) {
                let a = e.options[t],
                    s = null == n[a.id];
                (s && (i = !0), r.push({ ...a, isUnseen: s }));
            }
            return { ...e, options: r, hasNewAnswers: i, isNew: null == t[e.id] };
        })(e, t, n),
    );
}
function m(e) {
    let { guildId: t, updates: n } = e,
        i = n.onboardingPromptsSeen ?? A[t]?.onboardingPromptsSeen ?? {},
        r = n.onboardingResponsesSeen ?? A[t]?.onboardingResponsesSeen ?? {},
        a = p(n.prompts ?? A[t]?.prompts ?? [], i, r);
    A[t] = { ...A[t], ...n, prompts: a };
}
function T(e, t) {
    if (null == f[e]) return;
    let n = {};
    (Object.keys(f[e]).forEach((i) => {
        !t.includes(i) && f[e][i] ? (n[i] = !0) : t.includes(i) && !1 === f[e][i] && (n[i] = !1);
    }),
        (f[e] = n));
    let i = t.filter((e) => null == n[e] || !0 === n[e]);
    (Object.keys(n).forEach((e) => {
        !0 !== n[e] || t.includes(e) || i.push(e);
    }),
        (A[e] = { ...A[e], responses: i }));
}
let g = [],
    S = [],
    N = [],
    C = [];
class O extends a.Ay.Store {
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
        return I;
    }
    shouldFetchPrompts(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.A.Millis.HOUR;
        if (I) return !1;
        let n = h[e];
        return null == n || Date.now() - n > t;
    }
    getPendingResponseOptions(e) {
        return f[e];
    }
    ackIdForGuild(e) {
        let t = this.getEnabledOnboardingPrompts(e),
            n = "0";
        return (
            t.forEach((e) => {
                (e.options.forEach((e) => {
                    c.default.compare(e.id, n) > 0 && (n = e.id);
                }),
                    c.default.compare(e.id, n) > 0 && (n = e.id));
            }),
            n
        );
    }
    lastFetchedAt(e) {
        return h[e];
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
let R = new O(s.h, {
    CONNECTION_OPEN: function () {
        ((I = !1), (A = {}));
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        (delete A[t.id], delete f[t.id], delete h[t.id]);
    },
    GUILD_ONBOARDING_PROMPTS_FETCH_START: function () {
        I = !0;
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
        I = !1;
        let f = _.Ay.getOnboardingStatus(t) === _.$o.READY,
            m = p(n, s, l);
        ((A[t] = {
            enabled: r,
            mode: o,
            belowRequirements: d,
            prompts: m,
            onboardingPrompts: m.filter((e) => e.inOnboarding),
            defaultChannelIds: i.filter((e) => (0, u.S)(t, e)),
            responses: f ? [] : a,
            onboardingPromptsSeen: s,
            onboardingResponsesSeen: l,
            connections: c ?? [],
            additionalConnections: E ?? [],
        }),
            f || T(t, a),
            (h[t] = Date.now()));
    },
    GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function () {
        I = !1;
    },
    GUILD_ONBOARDING_SELECT_OPTION: function (e) {
        let { guildId: t, optionId: n, selected: i, removedOptionIds: a } = e;
        return (
            !!l.A.isFullServerPreview(t) ||
            (null != A[t] &&
                (null != a && a.length > 0 && r().pullAll(A[t].responses, a),
                i ? A[t].responses.push(n) : r().pull(A[t].responses, n),
                null == f[t] && (f[t] = {}),
                (f[t][n] = i),
                null != a && a.forEach((e) => (f[t][e] = !1)),
                (f[t] = { ...f[t] }),
                !0))
        );
    },
    GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: function (e) {
        let { guildId: t, options: n, prompts_seen: i, options_seen: r } = e;
        T(t, n);
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
    GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: m,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: m,
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
n.d(t, {}, { A: R });
