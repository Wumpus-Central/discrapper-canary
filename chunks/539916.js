n.d(t, {
    Bu: () => f,
    D1: () => O,
    Ii: () => w,
    Kd: () => R,
    Km: () => D,
    ME: () => p,
    Mc: () => h,
    QY: () => I,
    Q_: () => u,
    SA: () => b,
    SD: () => m,
    Sq: () => v,
    Uh: () => P,
    a5: () => g,
    fs: () => T,
    hv: () => M,
    iD: () => A,
    kq: () => c,
    n4: () => F,
    pA: () => S,
    qC: () => C,
    sd: () => N,
    tb: () => y,
    vK: () => B,
    wZ: () => L,
}),
    n(321073);
var i,
    r,
    a,
    s,
    _ = n(812729),
    l = n.n(_),
    o = n(240248),
    E = n(652215),
    d = n(985018);
let c = 100,
    u = 50,
    I = 100,
    A = 15,
    T = 50,
    S = 10,
    N = 100,
    O = 4,
    R = 1,
    f = 13;
var C = (((i = {})[(i.CUSTOMIZE = 0)] = "CUSTOMIZE"), (i[(i.BROWSE = 1)] = "BROWSE"), i),
    p = (((r = {})[(r.MULTIPLE_CHOICE = 0)] = "MULTIPLE_CHOICE"), (r[(r.DROPDOWN = 1)] = "DROPDOWN"), r),
    m =
        (((a = {})[(a.ONBOARDING_DEFAULT = 0)] = "ONBOARDING_DEFAULT"),
        (a[(a.ONBOARDING_ADVANCED = 1)] = "ONBOARDING_ADVANCED"),
        a),
    L =
        (((s = {})[(s.APPLICATION = 0)] = "APPLICATION"),
        (s[(s.PROVIDER_CONNECTED_ACCOUNT = 1)] = "PROVIDER_CONNECTED_ACCOUNT"),
        s);
function D(e) {
    if (e.options.length > 0) return !1;
    let { id: t, ...n } = h(),
        { id: i, ...r } = e;
    return l()(n, r);
}
function h() {
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
function g(e) {
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
function U(e) {
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
        prompts: e.prompts.map(U),
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
function M(e) {
    return null == e || (null == e.id && null == e.name);
}
let y = new Set([
        E.fg2.PLAYSTATION_STAGING,
        E.fg2.CONTACTS,
        E.fg2.DOMAIN,
        E.fg2.TWITTER_LEGACY,
        E.fg2.MASTODON,
        E.fg2.INSTAGRAM,
        E.fg2.LEAGUE_OF_LEGENDS,
        E.fg2.SKYPE,
    ]),
    G = Object.values(E.fg2).filter((e) => !y.has(e));
function v(e) {
    return 0 === e.connection_type ? `app:${e.application_id}` : `provider:${e.provider_id}`;
}
function B(e) {
    let [t, n] = e.split(":");
    return "app" === t && void 0 !== n && "" !== n
        ? { type: 0, applicationId: n }
        : "provider" === t && void 0 !== n && "" !== n
          ? { type: 1, providerId: n }
          : null;
}
function w(e) {
    let t = [];
    return (
        0 !== e.connection_type && 1 !== e.connection_type
            ? t.push("Invalid connection type")
            : (0 === e.connection_type
                  ? ((0, o.uJ)(e.application_id) && t.push("Application ID is required for application connections"),
                    (0, o.uJ)(e.provider_id) || t.push("Platform ID not allowed for application connections"))
                  : 1 === e.connection_type &&
                    ((0, o.uJ)(e.provider_id)
                        ? t.push("Platform ID is required for platform connections")
                        : G.includes(e.provider_id) || t.push("Invalid platform ID"),
                    (0, o.uJ)(e.application_id) || t.push("Application ID not allowed for platform connections")),
              null != e.description &&
                  e.description.length > N &&
                  t.push(`Description must be ${N} characters or less`)),
        t
    );
}
function F(e) {
    let t = [],
        n = new Set();
    for (let [i, r] of e.entries()) {
        let e = w(r);
        t.push(...e.map((e) => `Connection ${i + 1}: ${e}`));
        let a = v(r);
        n.has(a) && t.push("Duplicate connection configuration"), n.add(a);
    }
    return t;
}
