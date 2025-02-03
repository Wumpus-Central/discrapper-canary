n.d(t, { Z: () => k }), n(653041), n(536091);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(160404),
    u = n(592125),
    c = n(70956),
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
let m = {},
    g = {},
    E = {},
    v = !1;
function y() {
    v = !0;
}
function I() {
    (v = !1), (m = {});
}
function b(e, t, n) {
    let i = !1,
        r = [];
    for (let t = 0; t < e.options.length; t++) {
        let a = e.options[t],
            s = null == n[a.id];
        s && (i = !0),
            r.push({
                ...a,
                isUnseen: s
            });
    }
    return {
        ...e,
        options: r,
        hasNewAnswers: i,
        isNew: null == t[e.id]
    };
}
function T(e, t, n) {
    return e.map((e) => b(e, t, n));
}
function S(e) {
    let { guildId: t, prompts: n, defaultChannelIds: i, enabled: r, responses: a, onboardingPromptsSeen: s, onboardingResponsesSeen: o, mode: l, belowRequirements: u } = e;
    v = !1;
    let c = _.ZP.getOnboardingStatus(t) === _.uX.READY,
        d = T(n, s, o);
    (m[t] = {
        enabled: r,
        mode: l,
        belowRequirements: u,
        prompts: d,
        onboardingPrompts: d.filter((e) => e.inOnboarding),
        defaultChannelIds: i.filter((e) => (0, f.s)(t, e)),
        responses: c ? [] : a,
        onboardingPromptsSeen: s,
        onboardingResponsesSeen: o
    }),
        c || R(t, a),
        (E[t] = Date.now());
}
function A() {
    v = !1;
}
function N(e) {
    var t, n, i, r, a, s, o, l, u;
    let { guildId: c, updates: d } = e,
        f = null !== (a = null !== (r = d.onboardingPromptsSeen) && void 0 !== r ? r : null === (t = m[c]) || void 0 === t ? void 0 : t.onboardingPromptsSeen) && void 0 !== a ? a : {},
        _ = null !== (o = null !== (s = d.onboardingResponsesSeen) && void 0 !== s ? s : null === (n = m[c]) || void 0 === n ? void 0 : n.onboardingResponsesSeen) && void 0 !== o ? o : {},
        p = T(null !== (u = null !== (l = d.prompts) && void 0 !== l ? l : null === (i = m[c]) || void 0 === i ? void 0 : i.prompts) && void 0 !== u ? u : [], f, _);
    m[c] = {
        ...m[c],
        ...d,
        prompts: p
    };
}
function C(e) {
    let { guildId: t, optionId: n, selected: i, removedOptionIds: r } = e;
    return !!l.Z.isFullServerPreview(t) || (null != m[t] && (null != r && r.length > 0 && a().pullAll(m[t].responses, r), i ? m[t].responses.push(n) : a().pull(m[t].responses, n), null == g[t] && (g[t] = {}), (g[t][n] = i), null != r && r.forEach((e) => (g[t][e] = !1)), (g[t] = { ...g[t] }), !0));
}
function R(e, t) {
    if (null == g[e]) return;
    let n = {};
    Object.keys(g[e]).forEach((i) => {
        !t.includes(i) && g[e][i] ? (n[i] = !0) : t.includes(i) && !1 === g[e][i] && (n[i] = !1);
    }),
        (g[e] = n);
    let i = t.filter((e) => null == n[e] || !0 === n[e]);
    Object.keys(n).forEach((e) => {
        !0 !== n[e] || t.includes(e) || i.push(e);
    }),
        (m[e] = {
            ...m[e],
            responses: i
        });
}
function O(e) {
    let { guildId: t, options: n, prompts_seen: i, options_seen: r } = e;
    R(t, n);
    let a = m[t];
    if (null == a) return !1;
    let s = T(a.prompts, i, r);
    m[t] = {
        ...a,
        prompts: s,
        onboardingPrompts: s.filter((e) => e.inOnboarding),
        onboardingPromptsSeen: i,
        onboardingResponsesSeen: r
    };
}
function D(e) {
    let { guildId: t, channelIds: n } = e;
    m[t] = {
        ...m[t],
        defaultChannelIds: n
    };
}
function x(e) {
    let { guildId: t, mode: n } = e,
        i = m[t];
    null != i && (i.mode = n);
}
let L = [],
    P = [],
    w = [];
class M extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, _.ZP, l.Z);
    }
    getOnboardingPromptsForOnboarding(e) {
        var t, n;
        return null !== (n = null === (t = m[e]) || void 0 === t ? void 0 : t.onboardingPrompts) && void 0 !== n ? n : L;
    }
    getOnboardingPrompts(e) {
        var t, n;
        return null !== (n = null === (t = m[e]) || void 0 === t ? void 0 : t.prompts) && void 0 !== n ? n : L;
    }
    getOnboardingResponses(e) {
        var t, n, i;
        return l.Z.isFullServerPreview(e) ? Array.from(null !== (n = l.Z.getOnboardingResponses(e)) && void 0 !== n ? n : P) : null !== (i = null === (t = m[e]) || void 0 === t ? void 0 : t.responses) && void 0 !== i ? i : P;
    }
    getSelectedOptions(e) {
        let t = this.getOnboardingResponses(e);
        return this.getOnboardingPrompts(e)
            .map((e) => e.options)
            .flat()
            .filter((e) => t.includes(e.id));
    }
    getOnboardingResponsesForPrompt(e, t) {
        let n = m[e];
        if (null == n) return P;
        let i = n.prompts.find((e) => e.id === t);
        return null == i
            ? P
            : a().intersection(
                  i.options.map((e) => e.id),
                  this.getOnboardingResponses(e)
              );
    }
    getEnabledOnboardingPrompts(e) {
        var t, n;
        let i = m[e];
        return l.Z.isFullServerPreview(e) ? (null !== (t = null == i ? void 0 : i.prompts) && void 0 !== t ? t : L) : null != i && i.enabled && null !== (n = i.prompts) && void 0 !== n ? n : L;
    }
    getDefaultChannelIds(e) {
        var t, n;
        return null !== (n = null === (t = m[e]) || void 0 === t ? void 0 : t.defaultChannelIds) && void 0 !== n ? n : w;
    }
    getEnabled(e) {
        var t, n;
        return l.Z.isFullServerPreview(e) ? null != m[e] : null !== (n = null === (t = m[e]) || void 0 === t ? void 0 : t.enabled) && void 0 !== n && n;
    }
    getOnboardingPrompt(e) {
        return Object.values(m)
            .map((e) => e.prompts)
            .flat()
            .find((t) => t.id === e);
    }
    isLoading() {
        return v;
    }
    shouldFetchPrompts(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Z.Millis.HOUR;
        if (v) return !1;
        let n = E[e];
        return null == n || Date.now() - n > t;
    }
    getPendingResponseOptions(e) {
        return g[e];
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
        return E[e];
    }
    isAdvancedMode(e) {
        var t;
        return null != e && (null === (t = m[e]) || void 0 === t ? void 0 : t.mode) === p.Un.ONBOARDING_ADVANCED;
    }
}
h(M, 'displayName', 'GuildOnboardingPromptsStore');
let k = new M(o.Z, {
    CONNECTION_OPEN: I,
    GUILD_ONBOARDING_PROMPTS_FETCH_START: y,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: S,
    GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: A,
    GUILD_ONBOARDING_SELECT_OPTION: C,
    GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: O,
    GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: N,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: N,
    GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: D,
    GUILD_SETTINGS_ONBOARDING_SET_MODE: x
});
