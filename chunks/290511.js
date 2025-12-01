n.d(t, {
    BN: () => j,
    FN: () => v,
    NE: () => d,
    NO: () => f,
    Ni: () => D,
    Oq: () => w,
    RF: () => T,
    Un: () => S,
    X: () => b,
    YW: () => p,
    a4: () => L,
    ae: () => A,
    b3: () => g,
    cf: () => R,
    dr: () => N,
    fY: () => y,
    iU: () => u,
    kk: () => h,
    l7: () => O,
    md: () => E,
    qm: () => _,
    rZ: () => k,
    t9: () => M,
    yZ: () => C,
    yx: () => m,
    zz: () => I,
}),
    n(953529),
    n(388685),
    n(35282),
    n(539854);
var r = n(348327),
    i = n.n(r),
    a = n(624138),
    o = n(981631),
    s = n(388032);
function l(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = c(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let u = 100,
    d = 50,
    f = 100,
    p = 15,
    _ = 50,
    m = 10,
    h = 100,
    g = 4,
    E = 7,
    b = 5,
    y = 13;
var O = (function (e) {
        return (e[(e.CUSTOMIZE = 0)] = "CUSTOMIZE"), (e[(e.BROWSE = 1)] = "BROWSE"), e;
    })({}),
    v = (function (e) {
        return (e[(e.MULTIPLE_CHOICE = 0)] = "MULTIPLE_CHOICE"), (e[(e.DROPDOWN = 1)] = "DROPDOWN"), e;
    })({}),
    S = (function (e) {
        return (
            (e[(e.ONBOARDING_DEFAULT = 0)] = "ONBOARDING_DEFAULT"),
            (e[(e.ONBOARDING_ADVANCED = 1)] = "ONBOARDING_ADVANCED"),
            e
        );
    })({}),
    I = (function (e) {
        return (
            (e[(e.APPLICATION = 0)] = "APPLICATION"),
            (e[(e.PROVIDER_CONNECTED_ACCOUNT = 1)] = "PROVIDER_CONNECTED_ACCOUNT"),
            e
        );
    })({});
function T(e) {
    if (e.options.length > 0) return !1;
    let t = A(),
        { id: n } = t,
        r = l(t, ["id"]),
        { id: a } = e,
        o = l(e, ["id"]);
    return i()(r, o);
}
function A() {
    return {
        id: String(Date.now()),
        title: s.intl.string(s.t.vY91C9),
        options: [],
        singleSelect: !1,
        required: !1,
        inOnboarding: !0,
        type: 0,
    };
}
function C(e) {
    return {
        id: String(Date.now()),
        title: "",
        options: [],
        singleSelect: !1,
        required: !1,
        inOnboarding: e,
        type: 0,
    };
}
function N(e) {
    return {
        id: e.id,
        options: e.options.map((e) => {
            var t, n, r;
            return {
                id: e.id,
                channel_ids: e.channelIds,
                role_ids: e.roleIds,
                emoji: e.emoji,
                emoji_id: null == (t = e.emoji) ? void 0 : t.id,
                emoji_name: null == (n = e.emoji) ? void 0 : n.name,
                emoji_animated: null == (r = e.emoji) ? void 0 : r.animated,
                title: e.title,
                description: e.description,
            };
        }),
        title: e.title,
        single_select: e.singleSelect,
        disabled: e.disabled,
        required: e.required,
        in_onboarding: e.inOnboarding,
        type: e.type,
    };
}
function P(e) {
    return {
        id: e.id,
        options: e.options.map((e) => {
            var t;
            return {
                id: e.id,
                channelIds: e.channel_ids,
                roleIds: e.role_ids,
                emoji: e.emoji,
                title: e.title,
                description: null != (t = e.description) ? t : "",
            };
        }),
        title: e.title,
        singleSelect: e.single_select,
        disabled: e.disabled,
        required: e.required,
        inOnboarding: e.in_onboarding,
        type: e.type,
    };
}
function R(e) {
    var t, n, r, i;
    return {
        prompts: e.prompts.map(P),
        defaultChannelIds: e.default_channel_ids,
        responses: null != (t = e.responses) ? t : [],
        mode: e.mode,
        enabled: e.enabled,
        onboardingPromptsSeen: null != (n = e.onboarding_prompts_seen) ? n : {},
        onboardingResponsesSeen: null != (r = e.onboarding_responses_seen) ? r : {},
        belowRequirements: e.below_requirements,
        connections: null != (i = e.connections) ? i : [],
    };
}
function w(e) {
    return null == e || (null == e.id && null == e.name);
}
let D = new Set([
        o.ABu.PLAYSTATION_STAGING,
        o.ABu.CONTACTS,
        o.ABu.DOMAIN,
        o.ABu.TWITTER_LEGACY,
        o.ABu.MASTODON,
        o.ABu.INSTAGRAM,
        o.ABu.LEAGUE_OF_LEGENDS,
        o.ABu.SKYPE,
    ]),
    x = Object.values(o.ABu).filter((e) => !D.has(e));
function L(e) {
    return 0 === e.connection_type ? "app:".concat(e.application_id) : "provider:".concat(e.provider_id);
}
function j(e) {
    let [t, n] = e.split(":");
    return "app" === t && void 0 !== n && "" !== n
        ? {
              type: 0,
              applicationId: n,
          }
        : "provider" === t && void 0 !== n && "" !== n
          ? {
                type: 1,
                providerId: n,
            }
          : null;
}
function M(e) {
    let t = [];
    return (
        0 !== e.connection_type && 1 !== e.connection_type
            ? t.push("Invalid connection type")
            : (0 === e.connection_type
                  ? ((0, a.Ew)(e.application_id) && t.push("Application ID is required for application connections"),
                    (0, a.Ew)(e.provider_id) || t.push("Platform ID not allowed for application connections"))
                  : 1 === e.connection_type &&
                    ((0, a.Ew)(e.provider_id)
                        ? t.push("Platform ID is required for platform connections")
                        : x.includes(e.provider_id) || t.push("Invalid platform ID"),
                    (0, a.Ew)(e.application_id) || t.push("Application ID not allowed for platform connections")),
              null != e.description &&
                  e.description.length > h &&
                  t.push("Description must be ".concat(h, " characters or less"))),
        t
    );
}
function k(e) {
    let t = [],
        n = new Set();
    for (let [r, i] of e.entries()) {
        let e = M(i);
        t.push(...e.map((e) => "Connection ".concat(r + 1, ": ").concat(e)));
        let a = L(i);
        n.has(a) && t.push("Duplicate connection configuration"), n.add(a);
    }
    return t;
}
