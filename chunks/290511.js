n.d(t, {
    FN: () => g,
    M$: () => c,
    NE: () => o,
    NO: () => l,
    Oq: () => A,
    RF: () => v,
    Un: () => E,
    X: () => p,
    YW: () => u,
    ae: () => y,
    b3: () => f,
    cf: () => S,
    dr: () => T,
    fY: () => h,
    iU: () => s,
    l7: () => m,
    md: () => _,
    qm: () => d,
    yZ: () => I
});
var i = n(348327),
    r = n.n(i),
    a = n(388032);
let s = 100,
    o = 50,
    l = 100,
    u = 15,
    c = 12,
    d = 50,
    f = 4,
    _ = 7,
    p = 5,
    h = 13;
var m = (function (e) {
        return (e[(e.CUSTOMIZE = 0)] = 'CUSTOMIZE'), (e[(e.BROWSE = 1)] = 'BROWSE'), e;
    })({}),
    g = (function (e) {
        return (e[(e.MULTIPLE_CHOICE = 0)] = 'MULTIPLE_CHOICE'), (e[(e.DROPDOWN = 1)] = 'DROPDOWN'), e;
    })({}),
    E = (function (e) {
        return (e[(e.ONBOARDING_DEFAULT = 0)] = 'ONBOARDING_DEFAULT'), (e[(e.ONBOARDING_ADVANCED = 1)] = 'ONBOARDING_ADVANCED'), e;
    })({});
function v(e) {
    if (e.options.length > 0) return !1;
    let { id: t, ...n } = y(),
        { id: i, ...a } = e;
    return r()(n, a);
}
function y() {
    return {
        id: String(Date.now()),
        title: a.intl.string(a.t.vY91Cw),
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
function T(e) {
    return {
        id: e.id,
        options: e.options.map((e) => {
            var t, n, i;
            return {
                id: e.id,
                channel_ids: e.channelIds,
                role_ids: e.roleIds,
                emoji: e.emoji,
                emoji_id: null === (t = e.emoji) || void 0 === t ? void 0 : t.id,
                emoji_name: null === (n = e.emoji) || void 0 === n ? void 0 : n.name,
                emoji_animated: null === (i = e.emoji) || void 0 === i ? void 0 : i.animated,
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
function b(e) {
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
                description: null !== (t = e.description) && void 0 !== t ? t : ''
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
function S(e) {
    var t, n, i;
    return {
        prompts: e.prompts.map(b),
        defaultChannelIds: e.default_channel_ids,
        responses: null !== (t = e.responses) && void 0 !== t ? t : [],
        mode: e.mode,
        enabled: e.enabled,
        onboardingPromptsSeen: null !== (n = e.onboarding_prompts_seen) && void 0 !== n ? n : {},
        onboardingResponsesSeen: null !== (i = e.onboarding_responses_seen) && void 0 !== i ? i : {},
        belowRequirements: e.below_requirements
    };
}
function A(e) {
    return null == e || (null == e.id && null == e.name);
}
