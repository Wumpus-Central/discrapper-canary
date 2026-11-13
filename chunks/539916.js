n(321073);
var i,
    r,
    a,
    s,
    l = n(812729),
    o = n.n(l),
    d = n(240248),
    c = n(652215),
    u = n(792996),
    _ = (((i = {})[(i.CUSTOMIZE = 0)] = "CUSTOMIZE"), (i[(i.BROWSE = 1)] = "BROWSE"), i),
    E = (((r = {})[(r.MULTIPLE_CHOICE = 0)] = "MULTIPLE_CHOICE"), (r[(r.DROPDOWN = 1)] = "DROPDOWN"), r),
    A =
        (((a = {})[(a.ONBOARDING_DEFAULT = 0)] = "ONBOARDING_DEFAULT"),
        (a[(a.ONBOARDING_ADVANCED = 1)] = "ONBOARDING_ADVANCED"),
        a),
    f =
        (((s = {})[(s.APPLICATION = 0)] = "APPLICATION"),
        (s[(s.PROVIDER_CONNECTED_ACCOUNT = 1)] = "PROVIDER_CONNECTED_ACCOUNT"),
        s);
function h() {
    return {
        id: String(Date.now()),
        title: u.intl.string(u.t.vY91C9),
        options: [],
        singleSelect: !1,
        required: !1,
        inOnboarding: !0,
        type: 0,
    };
}
function I(e) {
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
let p = new Set([
        c.fg2.PLAYSTATION_STAGING,
        c.fg2.CONTACTS,
        c.fg2.DOMAIN,
        c.fg2.TWITTER_LEGACY,
        c.fg2.MASTODON,
        c.fg2.INSTAGRAM,
        c.fg2.LEAGUE_OF_LEGENDS,
        c.fg2.SKYPE,
    ]),
    m = Object.values(c.fg2).filter((e) => !p.has(e));
function T(e) {
    return 0 === e.connection_type ? `app:${e.application_id}` : `provider:${e.provider_id}`;
}
function g(e) {
    let t = [];
    switch (e.connection_type) {
        case 0:
            ((0, d.uJ)(e.application_id) && t.push("Application ID is required for application connections"),
                (0, d.uJ)(e.provider_id) || t.push("Platform ID not allowed for application connections"));
            break;
        case 1:
            ((0, d.uJ)(e.provider_id)
                ? t.push("Platform ID is required for platform connections")
                : m.includes(e.provider_id) || t.push("Invalid platform ID"),
                (0, d.uJ)(e.application_id) || t.push("Application ID not allowed for platform connections"));
            break;
        default:
            return (e.connection_type, t.push("Invalid connection type"), t);
    }
    return (
        null != e.description && e.description.length > 100 && t.push("Description must be 100 characters or less"), t
    );
}
n.d(
    t,
    {},
    {
        Ii: g,
        Km: function (e) {
            if (e.options.length > 0) return !1;
            let { id: t, ...n } = h(),
                { id: i, ...r } = e;
            return o()(n, r);
        },
        ME: E,
        Mc: h,
        SA: function (e) {
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
        },
        SD: A,
        Sq: T,
        Uh: function (e) {
            return {
                prompts: e.prompts.map(I),
                defaultChannelIds: e.default_channel_ids,
                responses: e.responses ?? [],
                mode: e.mode,
                enabled: e.enabled,
                onboardingPromptsSeen: e.onboarding_prompts_seen ?? {},
                onboardingResponsesSeen: e.onboarding_responses_seen ?? {},
                belowRequirements: e.below_requirements,
                connections: e.connections ?? [],
                additionalConnections: e.additional_connections ?? [],
            };
        },
        a5: function (e) {
            return {
                id: String(Date.now()),
                title: "",
                options: [],
                singleSelect: !1,
                required: !1,
                inOnboarding: e,
                type: 0,
            };
        },
        hv: function (e) {
            return null == e || (null == e.id && null == e.name);
        },
        n4: function (e) {
            let t = [],
                n = new Set();
            for (let [i, r] of e.entries()) {
                let e = g(r);
                t.push(...e.map((e) => `Connection ${i + 1}: ${e}`));
                let a = T(r);
                (n.has(a) && t.push("Duplicate connection configuration"), n.add(a));
            }
            return t;
        },
        qC: _,
        tb: p,
        vK: function (e) {
            let [t, n] = e.split(":");
            return "app" === t && void 0 !== n && "" !== n
                ? { type: 0, applicationId: n }
                : "provider" === t && void 0 !== n && "" !== n
                  ? { type: 1, providerId: n }
                  : null;
        },
        wZ: f,
    },
);
