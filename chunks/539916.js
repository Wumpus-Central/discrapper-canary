"use strict";
n.d(t, {
    Bu: () => T,
    D1: () => A,
    Ii: () => k,
    Kd: () => I,
    Km: () => v,
    ME: () => N,
    Mc: () => O,
    QY: () => h,
    Q_: () => f,
    SA: () => b,
    SD: () => y,
    Sq: () => x,
    Uh: () => L,
    a5: () => R,
    fs: () => E,
    hv: () => w,
    iD: () => p,
    kq: () => _,
    n4: () => G,
    pA: () => m,
    qC: () => S,
    sd: () => g,
    tb: () => M,
    vK: () => U,
    wZ: () => C,
}),
    n(321073);
var i,
    r,
    s,
    a,
    o = n(812729),
    l = n.n(o),
    u = n(240248),
    c = n(652215),
    d = n(375708);
let _ = 100,
    f = 50,
    h = 100,
    p = 15,
    E = 50,
    m = 10,
    g = 100,
    A = 4,
    I = 1,
    T = 13;
var S = (((i = {})[(i.CUSTOMIZE = 0)] = "CUSTOMIZE"), (i[(i.BROWSE = 1)] = "BROWSE"), i),
    N = (((r = {})[(r.MULTIPLE_CHOICE = 0)] = "MULTIPLE_CHOICE"), (r[(r.DROPDOWN = 1)] = "DROPDOWN"), r),
    y =
        (((s = {})[(s.ONBOARDING_DEFAULT = 0)] = "ONBOARDING_DEFAULT"),
        (s[(s.ONBOARDING_ADVANCED = 1)] = "ONBOARDING_ADVANCED"),
        s),
    C =
        (((a = {})[(a.APPLICATION = 0)] = "APPLICATION"),
        (a[(a.PROVIDER_CONNECTED_ACCOUNT = 1)] = "PROVIDER_CONNECTED_ACCOUNT"),
        a);
function v(e) {
    if (e.options.length > 0) return !1;
    let { id: t, ...n } = O(),
        { id: i, ...r } = e;
    return l()(n, r);
}
function O() {
    return {
        id: String(Date.now()),
        title: d.intl.string(d.t.vY91C9),
        options: [],
        singleSelect: !1,
        required: !1,
        inOnboarding: !0,
        type: 0,
    };
}
function R(e) {
    return { id: String(Date.now()), title: "", options: [], singleSelect: !1, required: !1, inOnboarding: e, type: 0 };
}
function b(e) {
    return {
        id: e.id,
        options: e.options.map((e) => ({
            id: e.id,
            channel_ids: e.channelIds,
            role_ids: e.roleIds,
            emoji: e.emoji,
            emoji_id: e.emoji?.id,
            emoji_name: e.emoji?.name,
            emoji_animated: e.emoji?.animated,
            title: e.title,
            description: e.description,
        })),
        title: e.title,
        single_select: e.singleSelect,
        disabled: e.disabled,
        required: e.required,
        in_onboarding: e.inOnboarding,
        type: e.type,
    };
}
function D(e) {
    return {
        id: e.id,
        options: e.options.map((e) => ({
            id: e.id,
            channelIds: e.channel_ids,
            roleIds: e.role_ids,
            emoji: e.emoji,
            title: e.title,
            description: e.description ?? "",
        })),
        title: e.title,
        singleSelect: e.single_select,
        disabled: e.disabled,
        required: e.required,
        inOnboarding: e.in_onboarding,
        type: e.type,
    };
}
function L(e) {
    return {
        prompts: e.prompts.map(D),
        defaultChannelIds: e.default_channel_ids,
        responses: e.responses ?? [],
        mode: e.mode,
        enabled: e.enabled,
        onboardingPromptsSeen: e.onboarding_prompts_seen ?? {},
        onboardingResponsesSeen: e.onboarding_responses_seen ?? {},
        belowRequirements: e.below_requirements,
        connections: e.connections ?? [],
    };
}
function w(e) {
    return null == e || (null == e.id && null == e.name);
}
let M = new Set([
        c.fg2.PLAYSTATION_STAGING,
        c.fg2.CONTACTS,
        c.fg2.DOMAIN,
        c.fg2.TWITTER_LEGACY,
        c.fg2.MASTODON,
        c.fg2.INSTAGRAM,
        c.fg2.LEAGUE_OF_LEGENDS,
        c.fg2.SKYPE,
    ]),
    P = Object.values(c.fg2).filter((e) => !M.has(e));
function x(e) {
    return 0 === e.connection_type ? `app:${e.application_id}` : `provider:${e.provider_id}`;
}
function U(e) {
    let [t, n] = e.split(":");
    return "app" === t && void 0 !== n && "" !== n
        ? { type: 0, applicationId: n }
        : "provider" === t && void 0 !== n && "" !== n
          ? { type: 1, providerId: n }
          : null;
}
function k(e) {
    let t = [];
    return (
        0 !== e.connection_type && 1 !== e.connection_type
            ? t.push("Invalid connection type")
            : (0 === e.connection_type
                  ? ((0, u.uJ)(e.application_id) && t.push("Application ID is required for application connections"),
                    (0, u.uJ)(e.provider_id) || t.push("Platform ID not allowed for application connections"))
                  : 1 === e.connection_type &&
                    ((0, u.uJ)(e.provider_id)
                        ? t.push("Platform ID is required for platform connections")
                        : P.includes(e.provider_id) || t.push("Invalid platform ID"),
                    (0, u.uJ)(e.application_id) || t.push("Application ID not allowed for platform connections")),
              null != e.description &&
                  e.description.length > g &&
                  t.push(`Description must be ${g} characters or less`)),
        t
    );
}
function G(e) {
    let t = [],
        n = new Set();
    for (let [i, r] of e.entries()) {
        let e = k(r);
        t.push(...e.map((e) => `Connection ${i + 1}: ${e}`));
        let s = x(r);
        n.has(s) && t.push("Duplicate connection configuration"), n.add(s);
    }
    return t;
}
