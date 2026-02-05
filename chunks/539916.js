"use strict";
n.d(t, {
    Bu: () => g,
    D1: () => h,
    Ii: () => x,
    Kd: () => m,
    Km: () => y,
    ME: () => A,
    Mc: () => S,
    QY: () => c,
    Q_: () => u,
    SA: () => C,
    SD: () => I,
    Sq: () => L,
    Uh: () => N,
    a5: () => v,
    fs: () => _,
    hv: () => R,
    iD: () => d,
    kq: () => l,
    n4: () => P,
    pA: () => f,
    qC: () => E,
    sd: () => p,
    tb: () => O,
    vK: () => w,
    wZ: () => T,
}),
    n(321073);
var r = n(812729),
    i = n.n(r),
    a = n(240248),
    s = n(652215),
    o = n(985018);
let l = 100,
    u = 50,
    c = 100,
    d = 15,
    _ = 50,
    f = 10,
    p = 100,
    h = 4,
    m = 1,
    g = 13;
var E = (function (e) {
        return (e[(e.CUSTOMIZE = 0)] = "CUSTOMIZE"), (e[(e.BROWSE = 1)] = "BROWSE"), e;
    })({}),
    A = (function (e) {
        return (e[(e.MULTIPLE_CHOICE = 0)] = "MULTIPLE_CHOICE"), (e[(e.DROPDOWN = 1)] = "DROPDOWN"), e;
    })({}),
    I = (function (e) {
        return (
            (e[(e.ONBOARDING_DEFAULT = 0)] = "ONBOARDING_DEFAULT"),
            (e[(e.ONBOARDING_ADVANCED = 1)] = "ONBOARDING_ADVANCED"),
            e
        );
    })({}),
    T = (function (e) {
        return (
            (e[(e.APPLICATION = 0)] = "APPLICATION"),
            (e[(e.PROVIDER_CONNECTED_ACCOUNT = 1)] = "PROVIDER_CONNECTED_ACCOUNT"),
            e
        );
    })({});
function y(e) {
    if (e.options.length > 0) return !1;
    let { id: t, ...n } = S(),
        { id: r, ...a } = e;
    return i()(n, a);
}
function S() {
    return {
        id: String(Date.now()),
        title: o.intl.string(o.t.vY91C9),
        options: [],
        singleSelect: !1,
        required: !1,
        inOnboarding: !0,
        type: 0,
    };
}
function v(e) {
    return { id: String(Date.now()), title: "", options: [], singleSelect: !1, required: !1, inOnboarding: e, type: 0 };
}
function C(e) {
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
function b(e) {
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
function N(e) {
    return {
        prompts: e.prompts.map(b),
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
function R(e) {
    return null == e || (null == e.id && null == e.name);
}
let O = new Set([
        s.fg2.PLAYSTATION_STAGING,
        s.fg2.CONTACTS,
        s.fg2.DOMAIN,
        s.fg2.TWITTER_LEGACY,
        s.fg2.MASTODON,
        s.fg2.INSTAGRAM,
        s.fg2.LEAGUE_OF_LEGENDS,
        s.fg2.SKYPE,
    ]),
    D = Object.values(s.fg2).filter((e) => !O.has(e));
function L(e) {
    return 0 === e.connection_type ? `app:${e.application_id}` : `provider:${e.provider_id}`;
}
function w(e) {
    let [t, n] = e.split(":");
    return "app" === t && void 0 !== n && "" !== n
        ? { type: 0, applicationId: n }
        : "provider" === t && void 0 !== n && "" !== n
          ? { type: 1, providerId: n }
          : null;
}
function x(e) {
    let t = [];
    return (
        0 !== e.connection_type && 1 !== e.connection_type
            ? t.push("Invalid connection type")
            : (0 === e.connection_type
                  ? ((0, a.uJ)(e.application_id) && t.push("Application ID is required for application connections"),
                    (0, a.uJ)(e.provider_id) || t.push("Platform ID not allowed for application connections"))
                  : 1 === e.connection_type &&
                    ((0, a.uJ)(e.provider_id)
                        ? t.push("Platform ID is required for platform connections")
                        : D.includes(e.provider_id) || t.push("Invalid platform ID"),
                    (0, a.uJ)(e.application_id) || t.push("Application ID not allowed for platform connections")),
              null != e.description &&
                  e.description.length > p &&
                  t.push(`Description must be ${p} characters or less`)),
        t
    );
}
function P(e) {
    let t = [],
        n = new Set();
    for (let [r, i] of e.entries()) {
        let e = x(i);
        t.push(...e.map((e) => `Connection ${r + 1}: ${e}`));
        let a = L(i);
        n.has(a) && t.push("Duplicate connection configuration"), n.add(a);
    }
    return t;
}
