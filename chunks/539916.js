n.d(t, {
    Bu: () => p,
    D1: () => N,
    Ii: () => x,
    Kd: () => f,
    Km: () => g,
    ME: () => O,
    Mc: () => L,
    QY: () => A,
    Q_: () => u,
    SA: () => b,
    SD: () => C,
    Sq: () => G,
    Uh: () => P,
    a5: () => D,
    fs: () => T,
    hv: () => U,
    iD: () => I,
    kq: () => E,
    n4: () => V,
    pA: () => h,
    qC: () => m,
    sd: () => S,
    tb: () => v,
    vK: () => w,
    wZ: () => R,
}),
    n(321073);
var i,
    a,
    r,
    s,
    l = n(812729),
    o = n.n(l),
    d = n(240248),
    c = n(652215),
    _ = n(985018);
let E = 100,
    u = 50,
    A = 100,
    I = 15,
    T = 50,
    h = 10,
    S = 100,
    N = 4,
    f = 1,
    p = 13;
var m = (((i = {})[(i.CUSTOMIZE = 0)] = "CUSTOMIZE"), (i[(i.BROWSE = 1)] = "BROWSE"), i),
    O = (((a = {})[(a.MULTIPLE_CHOICE = 0)] = "MULTIPLE_CHOICE"), (a[(a.DROPDOWN = 1)] = "DROPDOWN"), a),
    C =
        (((r = {})[(r.ONBOARDING_DEFAULT = 0)] = "ONBOARDING_DEFAULT"),
        (r[(r.ONBOARDING_ADVANCED = 1)] = "ONBOARDING_ADVANCED"),
        r),
    R =
        (((s = {})[(s.APPLICATION = 0)] = "APPLICATION"),
        (s[(s.PROVIDER_CONNECTED_ACCOUNT = 1)] = "PROVIDER_CONNECTED_ACCOUNT"),
        s);
function g(e) {
    if (e.options.length > 0) return !1;
    let { id: t, ...n } = L(),
        { id: i, ...a } = e;
    return o()(n, a);
}
function L() {
    return {
        id: String(Date.now()),
        title: _.intl.string(_.t.vY91C9),
        options: [],
        singleSelect: !1,
        required: !1,
        inOnboarding: !0,
        type: 0,
    };
}
function D(e) {
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
function M(e) {
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
function P(e) {
    return {
        prompts: e.prompts.map(M),
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
function U(e) {
    return null == e || (null == e.id && null == e.name);
}
let v = new Set([
        c.fg2.PLAYSTATION_STAGING,
        c.fg2.CONTACTS,
        c.fg2.DOMAIN,
        c.fg2.TWITTER_LEGACY,
        c.fg2.MASTODON,
        c.fg2.INSTAGRAM,
        c.fg2.LEAGUE_OF_LEGENDS,
        c.fg2.SKYPE,
    ]),
    y = Object.values(c.fg2).filter((e) => !v.has(e));
function G(e) {
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
                  ? ((0, d.uJ)(e.application_id) && t.push("Application ID is required for application connections"),
                    (0, d.uJ)(e.provider_id) || t.push("Platform ID not allowed for application connections"))
                  : 1 === e.connection_type &&
                    ((0, d.uJ)(e.provider_id)
                        ? t.push("Platform ID is required for platform connections")
                        : y.includes(e.provider_id) || t.push("Invalid platform ID"),
                    (0, d.uJ)(e.application_id) || t.push("Application ID not allowed for platform connections")),
              null != e.description &&
                  e.description.length > S &&
                  t.push(`Description must be ${S} characters or less`)),
        t
    );
}
function V(e) {
    let t = [],
        n = new Set();
    for (let [i, a] of e.entries()) {
        let e = x(a);
        t.push(...e.map((e) => `Connection ${i + 1}: ${e}`));
        let r = G(a);
        n.has(r) && t.push("Duplicate connection configuration"), n.add(r);
    }
    return t;
}
