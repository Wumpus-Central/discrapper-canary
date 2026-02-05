"use strict";
n.d(t, { A: () => U }), n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(73153),
    o = n(164956),
    l = n(734057),
    u = n(927813),
    c = n(661191),
    d = n(112389),
    _ = n(713125),
    f = n(539916);
let p = {},
    h = {},
    m = {},
    g = !1;
function E() {
    g = !0;
}
function A() {
    (g = !1), (p = {});
}
function I(e, t, n) {
    let r = !1,
        i = [];
    for (let t = 0; t < e.options.length; t++) {
        let a = e.options[t],
            s = null == n[a.id];
        s && (r = !0), i.push({ ...a, isUnseen: s });
    }
    return { ...e, options: i, hasNewAnswers: r, isNew: null == t[e.id] };
}
function T(e, t, n) {
    return e.map((e) => I(e, t, n));
}
function y(e) {
    let {
        guildId: t,
        prompts: n,
        defaultChannelIds: r,
        enabled: i,
        responses: a,
        onboardingPromptsSeen: s,
        onboardingResponsesSeen: o,
        mode: l,
        belowRequirements: u,
        connections: c,
    } = e;
    g = !1;
    let f = _.Ay.getOnboardingStatus(t) === _.$o.READY,
        h = T(n, s, o);
    (p[t] = {
        enabled: i,
        mode: l,
        belowRequirements: u,
        prompts: h,
        onboardingPrompts: h.filter((e) => e.inOnboarding),
        defaultChannelIds: r.filter((e) => (0, d.S)(t, e)),
        responses: f ? [] : a,
        onboardingPromptsSeen: s,
        onboardingResponsesSeen: o,
        connections: c ?? [],
    }),
        f || b(t, a),
        (m[t] = Date.now());
}
function S() {
    g = !1;
}
function v(e) {
    let { guildId: t, updates: n } = e,
        r = n.onboardingPromptsSeen ?? p[t]?.onboardingPromptsSeen ?? {},
        i = n.onboardingResponsesSeen ?? p[t]?.onboardingResponsesSeen ?? {},
        a = T(n.prompts ?? p[t]?.prompts ?? [], r, i);
    p[t] = { ...p[t], ...n, prompts: a };
}
function C(e) {
    let { guildId: t, optionId: n, selected: r, removedOptionIds: a } = e;
    return (
        !!o.A.isFullServerPreview(t) ||
        (null != p[t] &&
            (null != a && a.length > 0 && i().pullAll(p[t].responses, a),
            r ? p[t].responses.push(n) : i().pull(p[t].responses, n),
            null == h[t] && (h[t] = {}),
            (h[t][n] = r),
            null != a && a.forEach((e) => (h[t][e] = !1)),
            (h[t] = { ...h[t] }),
            !0))
    );
}
function b(e, t) {
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
function N(e) {
    let { guildId: t, options: n, prompts_seen: r, options_seen: i } = e;
    b(t, n);
    let a = p[t];
    if (null == a) return !1;
    let s = T(a.prompts, r, i);
    p[t] = {
        ...a,
        prompts: s,
        onboardingPrompts: s.filter((e) => e.inOnboarding),
        onboardingPromptsSeen: r,
        onboardingResponsesSeen: i,
    };
}
function R(e) {
    let { guildId: t, channelIds: n } = e;
    p[t] = { ...p[t], defaultChannelIds: n };
}
function O(e) {
    let { guildId: t, connections: n } = e;
    if (null == p[t]) return !1;
    p[t] = { ...p[t], connections: n };
}
function D(e) {
    let { guildId: t, mode: n } = e,
        r = p[t];
    null != r && (r.mode = n);
}
function L(e) {
    let { guild: t } = e;
    delete p[t.id], delete h[t.id], delete m[t.id];
}
let w = [],
    x = [],
    P = [],
    M = [];
class k extends a.Ay.Store {
    static displayName = "GuildOnboardingPromptsStore";
    initialize() {
        this.waitFor(l.A, _.Ay, o.A);
    }
    getOnboardingPromptsForOnboarding(e) {
        return p[e]?.onboardingPrompts ?? w;
    }
    getOnboardingPrompts(e) {
        return p[e]?.prompts ?? w;
    }
    getOnboardingResponses(e) {
        return o.A.isFullServerPreview(e) ? Array.from(o.A.getOnboardingResponses(e) ?? x) : (p[e]?.responses ?? x);
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
        if (null == n) return x;
        let r = n.prompts.find((e) => e.id === t);
        return null == r
            ? x
            : i().intersection(
                  r.options.map((e) => e.id),
                  this.getOnboardingResponses(e),
              );
    }
    getEnabledOnboardingPrompts(e) {
        let t = p[e];
        return o.A.isFullServerPreview(e) ? (t?.prompts ?? w) : null != t && t.enabled ? (t.prompts ?? w) : w;
    }
    getDefaultChannelIds(e) {
        return p[e]?.defaultChannelIds ?? P;
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
        return g;
    }
    shouldFetchPrompts(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.A.Millis.HOUR;
        if (g) return !1;
        let n = m[e];
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
        return m[e];
    }
    isAdvancedMode(e) {
        return null != e && p[e]?.mode === f.SD.ONBOARDING_ADVANCED;
    }
    getConnections(e) {
        return p[e]?.connections ?? M;
    }
}
let U = new k(s.h, {
    CONNECTION_OPEN: A,
    GUILD_DELETE: L,
    GUILD_ONBOARDING_PROMPTS_FETCH_START: E,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: y,
    GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: S,
    GUILD_ONBOARDING_SELECT_OPTION: C,
    GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: N,
    GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: v,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: v,
    GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: R,
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_SUCCESS: O,
    GUILD_SETTINGS_ONBOARDING_SET_MODE: D,
});
