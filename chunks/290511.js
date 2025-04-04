n.d(t, {
    FN: () => b,
    M$: () => f,
    NE: () => c,
    NO: () => u,
    Oq: () => A,
    RF: () => v,
    Un: () => y,
    X: () => m,
    YW: () => d,
    ae: () => O,
    b3: () => p,
    cf: () => N,
    dr: () => S,
    fY: () => g,
    iU: () => l,
    l7: () => E,
    md: () => h,
    qm: () => _,
    yZ: () => I
}),
    n(266796);
var r = n(348327),
    i = n.n(r),
    o = n(388032);
function a(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = s(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function s(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let l = 100,
    c = 50,
    u = 100,
    d = 15,
    f = 12,
    _ = 50,
    p = 4,
    h = 7,
    m = 5,
    g = 13;
var E = (function (e) {
        return (e[(e.CUSTOMIZE = 0)] = 'CUSTOMIZE'), (e[(e.BROWSE = 1)] = 'BROWSE'), e;
    })({}),
    b = (function (e) {
        return (e[(e.MULTIPLE_CHOICE = 0)] = 'MULTIPLE_CHOICE'), (e[(e.DROPDOWN = 1)] = 'DROPDOWN'), e;
    })({}),
    y = (function (e) {
        return (e[(e.ONBOARDING_DEFAULT = 0)] = 'ONBOARDING_DEFAULT'), (e[(e.ONBOARDING_ADVANCED = 1)] = 'ONBOARDING_ADVANCED'), e;
    })({});
function v(e) {
    if (e.options.length > 0) return !1;
    let t = O(),
        { id: n } = t,
        r = a(t, ['id']),
        { id: o } = e,
        s = a(e, ['id']);
    return i()(r, s);
}
function O() {
    return {
        id: String(Date.now()),
        title: o.NW.string(o.t.vY91Cw),
        options: [],
        singleSelect: !1,
        required: !1,
        inOnboarding: !0,
        type: 0
    };
}
function I(e) {
    return {
        id: String(Date.now()),
        title: '',
        options: [],
        singleSelect: !1,
        required: !1,
        inOnboarding: e,
        type: 0
    };
}
function S(e) {
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
                description: e.description
            };
        }),
        title: e.title,
        single_select: e.singleSelect,
        disabled: e.disabled,
        required: e.required,
        in_onboarding: e.inOnboarding,
        type: e.type
    };
}
function T(e) {
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
                description: null != (t = e.description) ? t : ''
            };
        }),
        title: e.title,
        singleSelect: e.single_select,
        disabled: e.disabled,
        required: e.required,
        inOnboarding: e.in_onboarding,
        type: e.type
    };
}
function N(e) {
    var t, n, r;
    return {
        prompts: e.prompts.map(T),
        defaultChannelIds: e.default_channel_ids,
        responses: null != (t = e.responses) ? t : [],
        mode: e.mode,
        enabled: e.enabled,
        onboardingPromptsSeen: null != (n = e.onboarding_prompts_seen) ? n : {},
        onboardingResponsesSeen: null != (r = e.onboarding_responses_seen) ? r : {},
        belowRequirements: e.below_requirements
    };
}
function A(e) {
    return null == e || (null == e.id && null == e.name);
}
