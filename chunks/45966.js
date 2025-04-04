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
    _ = n(819553),
    p = n(290511);
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
let b = {},
    y = {},
    v = {},
    O = !1;
function I() {
    O = !0;
}
function S() {
    (O = !1), (b = {});
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
    let u = _.ZP.getOnboardingStatus(t) === _.uX.READY,
        d = N(n, a, s);
    (b[t] = {
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
        (v[t] = Date.now());
}
function C() {
    O = !1;
}
function R(e) {
    var t, n, r, i, o, a, s, l, c;
    let { guildId: u, updates: d } = e,
        f = null != (o = null != (i = d.onboardingPromptsSeen) ? i : null == (t = b[u]) ? void 0 : t.onboardingPromptsSeen) ? o : {},
        _ = null != (s = null != (a = d.onboardingResponsesSeen) ? a : null == (n = b[u]) ? void 0 : n.onboardingResponsesSeen) ? s : {},
        p = N(null != (c = null != (l = d.prompts) ? l : null == (r = b[u]) ? void 0 : r.prompts) ? c : [], f, _);
    b[u] = E(m({}, b[u], d), { prompts: p });
}
function P(e) {
    let { guildId: t, optionId: n, selected: r, removedOptionIds: i } = e;
    return !!l.Z.isFullServerPreview(t) || (null != b[t] && (null != i && i.length > 0 && o().pullAll(b[t].responses, i), r ? b[t].responses.push(n) : o().pull(b[t].responses, n), null == y[t] && (y[t] = {}), (y[t][n] = r), null != i && i.forEach((e) => (y[t][e] = !1)), (y[t] = m({}, y[t])), !0));
}
function w(e, t) {
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
        (b[e] = E(m({}, b[e]), { responses: r }));
}
function D(e) {
    let { guildId: t, options: n, prompts_seen: r, options_seen: i } = e;
    w(t, n);
    let o = b[t];
    if (null == o) return !1;
    let a = N(o.prompts, r, i);
    b[t] = E(m({}, o), {
        prompts: a,
        onboardingPrompts: a.filter((e) => e.inOnboarding),
        onboardingPromptsSeen: r,
        onboardingResponsesSeen: i
    });
}
function L(e) {
    let { guildId: t, channelIds: n } = e;
    b[t] = E(m({}, b[t]), { defaultChannelIds: n });
}
function x(e) {
    let { guildId: t, mode: n } = e,
        r = b[t];
    null != r && (r.mode = n);
}
let M = [],
    k = [],
    j = [];
class U extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, _.ZP, l.Z);
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
        return l.Z.isFullServerPreview(e) ? Array.from(null != (n = l.Z.getOnboardingResponses(e)) ? n : k) : null != (r = null == (t = b[e]) ? void 0 : t.responses) ? r : k;
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
            : o().intersection(
                  r.options.map((e) => e.id),
                  this.getOnboardingResponses(e)
              );
    }
    getEnabledOnboardingPrompts(e) {
        var t, n;
        let r = b[e];
        return l.Z.isFullServerPreview(e) ? (null != (t = null == r ? void 0 : r.prompts) ? t : M) : null != r && r.enabled && null != (n = r.prompts) ? n : M;
    }
    getDefaultChannelIds(e) {
        var t, n;
        return null != (n = null == (t = b[e]) ? void 0 : t.defaultChannelIds) ? n : j;
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
        return O;
    }
    shouldFetchPrompts(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Z.Millis.HOUR;
        if (O) return !1;
        let n = v[e];
        return null == n || Date.now() - n > t;
    }
    getPendingResponseOptions(e) {
        return y[e];
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
        return v[e];
    }
    isAdvancedMode(e) {
        var t;
        return null != e && (null == (t = b[e]) ? void 0 : t.mode) === p.Un.ONBOARDING_ADVANCED;
    }
}
h(U, 'displayName', 'GuildOnboardingPromptsStore');
let G = new U(s.Z, {
    CONNECTION_OPEN: S,
    GUILD_ONBOARDING_PROMPTS_FETCH_START: I,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: A,
    GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: C,
    GUILD_ONBOARDING_SELECT_OPTION: P,
    GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: D,
    GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: R,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: R,
    GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: L,
    GUILD_SETTINGS_ONBOARDING_SET_MODE: x
});
