n.d(t, { Z: () => B }), n(539854), n(472816), n(794429);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(160404),
    c = n(592125),
    u = n(70956),
    d = n(709054),
    f = n(977258),
    p = n(819553),
    _ = n(290511);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = {},
    y = {},
    O = {},
    v = !1;
function S() {
    v = !0;
}
function I() {
    (v = !1), (b = {});
}
function T(e, t, n) {
    let r = !1,
        i = [];
    for (let t = 0; t < e.options.length; t++) {
        let a = e.options[t],
            o = null == n[a.id];
        o && (r = !0), i.push(E(h({}, a), { isUnseen: o }));
    }
    return E(h({}, e), {
        options: i,
        hasNewAnswers: r,
        isNew: null == t[e.id],
    });
}
function C(e, t, n) {
    return e.map((e) => T(e, t, n));
}
function A(e) {
    let {
        guildId: t,
        prompts: n,
        defaultChannelIds: r,
        enabled: i,
        responses: a,
        onboardingPromptsSeen: o,
        onboardingResponsesSeen: s,
        mode: l,
        belowRequirements: c,
        connections: u,
    } = e;
    v = !1;
    let d = p.ZP.getOnboardingStatus(t) === p.uX.READY,
        _ = C(n, o, s);
    (b[t] = {
        enabled: i,
        mode: l,
        belowRequirements: c,
        prompts: _,
        onboardingPrompts: _.filter((e) => e.inOnboarding),
        defaultChannelIds: r.filter((e) => (0, f.s)(t, e)),
        responses: d ? [] : a,
        onboardingPromptsSeen: o,
        onboardingResponsesSeen: s,
        connections: null != u ? u : [],
    }),
        d || D(t, a),
        (O[t] = Date.now());
}
function N() {
    v = !1;
}
function P(e) {
    var t, n, r, i, a, o, s, l, c;
    let { guildId: u, updates: d } = e,
        f =
            null !=
            (a = null != (i = d.onboardingPromptsSeen) ? i : null == (t = b[u]) ? void 0 : t.onboardingPromptsSeen)
                ? a
                : {},
        p =
            null !=
            (s = null != (o = d.onboardingResponsesSeen) ? o : null == (n = b[u]) ? void 0 : n.onboardingResponsesSeen)
                ? s
                : {},
        _ = C(null != (c = null != (l = d.prompts) ? l : null == (r = b[u]) ? void 0 : r.prompts) ? c : [], f, p);
    b[u] = E(h({}, b[u], d), { prompts: _ });
}
function R(e) {
    let { guildId: t, optionId: n, selected: r, removedOptionIds: i } = e;
    return (
        !!l.Z.isFullServerPreview(t) ||
        (null != b[t] &&
            (null != i && i.length > 0 && a().pullAll(b[t].responses, i),
            r ? b[t].responses.push(n) : a().pull(b[t].responses, n),
            null == y[t] && (y[t] = {}),
            (y[t][n] = r),
            null != i && i.forEach((e) => (y[t][e] = !1)),
            (y[t] = h({}, y[t])),
            !0))
    );
}
function D(e, t) {
    if (null == y[e]) return;
    let n = {};
    Object.keys(y[e]).forEach((r) => {
        !t.includes(r) && y[e][r] ? (n[r] = !0) : t.includes(r) && !1 === y[e][r] && (n[r] = !1);
    }),
        (y[e] = n);
    let r = t.filter((e) => null == n[e] || !0 === n[e]);
    Object.keys(n).forEach((e) => {
        !0 !== n[e] || t.includes(e) || r.push(e);
    }),
        (b[e] = E(h({}, b[e]), { responses: r }));
}
function w(e) {
    let { guildId: t, options: n, prompts_seen: r, options_seen: i } = e;
    D(t, n);
    let a = b[t];
    if (null == a) return !1;
    let o = C(a.prompts, r, i);
    b[t] = E(h({}, a), {
        prompts: o,
        onboardingPrompts: o.filter((e) => e.inOnboarding),
        onboardingPromptsSeen: r,
        onboardingResponsesSeen: i,
    });
}
function x(e) {
    let { guildId: t, channelIds: n } = e;
    b[t] = E(h({}, b[t]), { defaultChannelIds: n });
}
function L(e) {
    let { guildId: t, connections: n } = e;
    if (null == b[t]) return !1;
    b[t] = E(h({}, b[t]), { connections: n });
}
function j(e) {
    let { guildId: t, mode: n } = e,
        r = b[t];
    null != r && (r.mode = n);
}
let M = [],
    k = [],
    U = [],
    G = [];
class Z extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, p.ZP, l.Z);
    }
    getOnboardingPromptsForOnboarding(e) {
        var t, n;
        return null != (n = null == (t = b[e]) ? void 0 : t.onboardingPrompts) ? n : M;
    }
    getOnboardingPrompts(e) {
        var t, n;
        return null != (n = null == (t = b[e]) ? void 0 : t.prompts) ? n : M;
    }
    getOnboardingResponses(e) {
        var t, n, r;
        return l.Z.isFullServerPreview(e)
            ? Array.from(null != (n = l.Z.getOnboardingResponses(e)) ? n : k)
            : null != (r = null == (t = b[e]) ? void 0 : t.responses)
              ? r
              : k;
    }
    getSelectedOptions(e) {
        let t = this.getOnboardingResponses(e);
        return this.getOnboardingPrompts(e)
            .map((e) => e.options)
            .flat()
            .filter((e) => t.includes(e.id));
    }
    getOnboardingResponsesForPrompt(e, t) {
        let n = b[e];
        if (null == n) return k;
        let r = n.prompts.find((e) => e.id === t);
        return null == r
            ? k
            : a().intersection(
                  r.options.map((e) => e.id),
                  this.getOnboardingResponses(e),
              );
    }
    getEnabledOnboardingPrompts(e) {
        var t, n;
        let r = b[e];
        return l.Z.isFullServerPreview(e)
            ? null != (t = null == r ? void 0 : r.prompts)
                ? t
                : M
            : null != r && r.enabled && null != (n = r.prompts)
              ? n
              : M;
    }
    getDefaultChannelIds(e) {
        var t, n;
        return null != (n = null == (t = b[e]) ? void 0 : t.defaultChannelIds) ? n : U;
    }
    getEnabled(e) {
        var t, n;
        return l.Z.isFullServerPreview(e) ? null != b[e] : null != (n = null == (t = b[e]) ? void 0 : t.enabled) && n;
    }
    getOnboardingPrompt(e) {
        return Object.values(b)
            .map((e) => e.prompts)
            .flat()
            .find((t) => t.id === e);
    }
    isLoading() {
        return v;
    }
    shouldFetchPrompts(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Z.Millis.HOUR;
        if (v) return !1;
        let n = O[e];
        return null == n || Date.now() - n > t;
    }
    getPendingResponseOptions(e) {
        return y[e];
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
        return O[e];
    }
    isAdvancedMode(e) {
        var t;
        return null != e && (null == (t = b[e]) ? void 0 : t.mode) === _.Un.ONBOARDING_ADVANCED;
    }
    getConnections(e) {
        var t, n;
        return null != (n = null == (t = b[e]) ? void 0 : t.connections) ? n : G;
    }
}
m(Z, "displayName", "GuildOnboardingPromptsStore");
let B = new Z(s.Z, {
    CONNECTION_OPEN: I,
    GUILD_ONBOARDING_PROMPTS_FETCH_START: S,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: A,
    GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: N,
    GUILD_ONBOARDING_SELECT_OPTION: R,
    GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: w,
    GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: P,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: P,
    GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: x,
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_SUCCESS: L,
    GUILD_SETTINGS_ONBOARDING_SET_MODE: j,
});
