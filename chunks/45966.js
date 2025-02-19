n.d(t, { Z: () => G }), n(653041), n(86693), n(536091);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(160404),
    c = n(592125),
    u = n(70956),
    d = n(709054),
    f = n(977258),
    p = n(819553),
    _ = n(290511);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
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
let v = {},
    b = {},
    y = {},
    O = !1;
function S() {
    O = !0;
}
function I() {
    (O = !1), (v = {});
}
function T(e, t, n) {
    let r = !1,
        i = [];
    for (let t = 0; t < e.options.length; t++) {
        let o = e.options[t],
            a = null == n[o.id];
        a && (r = !0), i.push(E(m({}, o), { isUnseen: a }));
    }
    return E(m({}, e), {
        options: i,
        hasNewAnswers: r,
        isNew: null == t[e.id]
    });
}
function N(e, t, n) {
    return e.map((e) => T(e, t, n));
}
function A(e) {
    let { guildId: t, prompts: n, defaultChannelIds: r, enabled: i, responses: o, onboardingPromptsSeen: a, onboardingResponsesSeen: s, mode: l, belowRequirements: c } = e;
    O = !1;
    let u = p.ZP.getOnboardingStatus(t) === p.uX.READY,
        d = N(n, a, s);
    (v[t] = {
        enabled: i,
        mode: l,
        belowRequirements: c,
        prompts: d,
        onboardingPrompts: d.filter((e) => e.inOnboarding),
        defaultChannelIds: r.filter((e) => (0, f.s)(t, e)),
        responses: u ? [] : o,
        onboardingPromptsSeen: a,
        onboardingResponsesSeen: s
    }),
        u || w(t, o),
        (y[t] = Date.now());
}
function C() {
    O = !1;
}
function R(e) {
    var t, n, r, i, o, a, s, l, c;
    let { guildId: u, updates: d } = e,
        f = null !== (o = null !== (i = d.onboardingPromptsSeen) && void 0 !== i ? i : null === (t = v[u]) || void 0 === t ? void 0 : t.onboardingPromptsSeen) && void 0 !== o ? o : {},
        p = null !== (s = null !== (a = d.onboardingResponsesSeen) && void 0 !== a ? a : null === (n = v[u]) || void 0 === n ? void 0 : n.onboardingResponsesSeen) && void 0 !== s ? s : {},
        _ = N(null !== (c = null !== (l = d.prompts) && void 0 !== l ? l : null === (r = v[u]) || void 0 === r ? void 0 : r.prompts) && void 0 !== c ? c : [], f, p);
    v[u] = E(m({}, v[u], d), { prompts: _ });
}
function P(e) {
    let { guildId: t, optionId: n, selected: r, removedOptionIds: i } = e;
    return !!l.Z.isFullServerPreview(t) || (null != v[t] && (null != i && i.length > 0 && o().pullAll(v[t].responses, i), r ? v[t].responses.push(n) : o().pull(v[t].responses, n), null == b[t] && (b[t] = {}), (b[t][n] = r), null != i && i.forEach((e) => (b[t][e] = !1)), (b[t] = m({}, b[t])), !0));
}
function w(e, t) {
    if (null == b[e]) return;
    let n = {};
    Object.keys(b[e]).forEach((r) => {
        !t.includes(r) && b[e][r] ? (n[r] = !0) : t.includes(r) && !1 === b[e][r] && (n[r] = !1);
    }),
        (b[e] = n);
    let r = t.filter((e) => null == n[e] || !0 === n[e]);
    Object.keys(n).forEach((e) => {
        !0 !== n[e] || t.includes(e) || r.push(e);
    }),
        (v[e] = E(m({}, v[e]), { responses: r }));
}
function D(e) {
    let { guildId: t, options: n, prompts_seen: r, options_seen: i } = e;
    w(t, n);
    let o = v[t];
    if (null == o) return !1;
    let a = N(o.prompts, r, i);
    v[t] = E(m({}, o), {
        prompts: a,
        onboardingPrompts: a.filter((e) => e.inOnboarding),
        onboardingPromptsSeen: r,
        onboardingResponsesSeen: i
    });
}
function x(e) {
    let { guildId: t, channelIds: n } = e;
    v[t] = E(m({}, v[t]), { defaultChannelIds: n });
}
function L(e) {
    let { guildId: t, mode: n } = e,
        r = v[t];
    null != r && (r.mode = n);
}
let M = [],
    k = [],
    j = [];
class U extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, p.ZP, l.Z);
    }
    getOnboardingPromptsForOnboarding(e) {
        var t, n;
        return null !== (n = null === (t = v[e]) || void 0 === t ? void 0 : t.onboardingPrompts) && void 0 !== n ? n : M;
    }
    getOnboardingPrompts(e) {
        var t, n;
        return null !== (n = null === (t = v[e]) || void 0 === t ? void 0 : t.prompts) && void 0 !== n ? n : M;
    }
    getOnboardingResponses(e) {
        var t, n, r;
        return l.Z.isFullServerPreview(e) ? Array.from(null !== (n = l.Z.getOnboardingResponses(e)) && void 0 !== n ? n : k) : null !== (r = null === (t = v[e]) || void 0 === t ? void 0 : t.responses) && void 0 !== r ? r : k;
    }
    getSelectedOptions(e) {
        let t = this.getOnboardingResponses(e);
        return this.getOnboardingPrompts(e)
            .map((e) => e.options)
            .flat()
            .filter((e) => t.includes(e.id));
    }
    getOnboardingResponsesForPrompt(e, t) {
        let n = v[e];
        if (null == n) return k;
        let r = n.prompts.find((e) => e.id === t);
        return null == r
            ? k
            : o().intersection(
                  r.options.map((e) => e.id),
                  this.getOnboardingResponses(e)
              );
    }
    getEnabledOnboardingPrompts(e) {
        var t, n;
        let r = v[e];
        return l.Z.isFullServerPreview(e) ? (null !== (t = null == r ? void 0 : r.prompts) && void 0 !== t ? t : M) : null != r && r.enabled && null !== (n = r.prompts) && void 0 !== n ? n : M;
    }
    getDefaultChannelIds(e) {
        var t, n;
        return null !== (n = null === (t = v[e]) || void 0 === t ? void 0 : t.defaultChannelIds) && void 0 !== n ? n : j;
    }
    getEnabled(e) {
        var t, n;
        return l.Z.isFullServerPreview(e) ? null != v[e] : null !== (n = null === (t = v[e]) || void 0 === t ? void 0 : t.enabled) && void 0 !== n && n;
    }
    getOnboardingPrompt(e) {
        return Object.values(v)
            .map((e) => e.prompts)
            .flat()
            .find((t) => t.id === e);
    }
    isLoading() {
        return O;
    }
    shouldFetchPrompts(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Z.Millis.HOUR;
        if (O) return !1;
        let n = y[e];
        return null == n || Date.now() - n > t;
    }
    getPendingResponseOptions(e) {
        return b[e];
    }
    ackIdForGuild(e) {
        let t = this.getEnabledOnboardingPrompts(e),
            n = '0';
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
        return y[e];
    }
    isAdvancedMode(e) {
        var t;
        return null != e && (null === (t = v[e]) || void 0 === t ? void 0 : t.mode) === _.Un.ONBOARDING_ADVANCED;
    }
}
h(U, 'displayName', 'GuildOnboardingPromptsStore');
let G = new U(s.Z, {
    CONNECTION_OPEN: I,
    GUILD_ONBOARDING_PROMPTS_FETCH_START: S,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: A,
    GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: C,
    GUILD_ONBOARDING_SELECT_OPTION: P,
    GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: D,
    GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: R,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: R,
    GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: x,
    GUILD_SETTINGS_ONBOARDING_SET_MODE: L
});
