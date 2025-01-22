r.d(n, {
    FN: function () {
        return a;
    },
    M$: function () {
        return h;
    },
    NE: function () {
        return d;
    },
    NO: function () {
        return f;
    },
    Oq: function () {
        return C;
    },
    RF: function () {
        return y;
    },
    Un: function () {
        return o;
    },
    X: function () {
        return E;
    },
    YW: function () {
        return p;
    },
    ae: function () {
        return b;
    },
    b3: function () {
        return m;
    },
    cf: function () {
        return A;
    },
    dr: function () {
        return T;
    },
    fY: function () {
        return v;
    },
    iU: function () {
        return c;
    },
    l7: function () {
        return i;
    },
    md: function () {
        return g;
    },
    qm: function () {
        return _;
    },
    yZ: function () {
        return I;
    }
});
var i,
    a,
    o,
    s = r(348327),
    l = r.n(s),
    u = r(388032);
let c = 100,
    d = 50,
    f = 100,
    p = 15,
    h = 12,
    _ = 50,
    m = 4,
    g = 7,
    E = 5,
    v = 13;
function y(e) {
    if (e.options.length > 0) return !1;
    let { id: n, ...r } = b(),
        { id: i, ...a } = e;
    return l()(r, a);
}
function b() {
    return {
        id: String(Date.now()),
        title: u.intl.string(u.t.vY91Cw),
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
            var n, r, i;
            return {
                id: e.id,
                channel_ids: e.channelIds,
                role_ids: e.roleIds,
                emoji: e.emoji,
                emoji_id: null === (n = e.emoji) || void 0 === n ? void 0 : n.id,
                emoji_name: null === (r = e.emoji) || void 0 === r ? void 0 : r.name,
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
function S(e) {
    return {
        id: e.id,
        options: e.options.map((e) => {
            var n;
            return {
                id: e.id,
                channelIds: e.channel_ids,
                roleIds: e.role_ids,
                emoji: e.emoji,
                title: e.title,
                description: null !== (n = e.description) && void 0 !== n ? n : ''
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
function A(e) {
    var n, r, i;
    return {
        prompts: e.prompts.map(S),
        defaultChannelIds: e.default_channel_ids,
        responses: null !== (n = e.responses) && void 0 !== n ? n : [],
        mode: e.mode,
        enabled: e.enabled,
        onboardingPromptsSeen: null !== (r = e.onboarding_prompts_seen) && void 0 !== r ? r : {},
        onboardingResponsesSeen: null !== (i = e.onboarding_responses_seen) && void 0 !== i ? i : {},
        belowRequirements: e.below_requirements
    };
}
function C(e) {
    return null == e || (null == e.id && null == e.name);
}
!(function (e) {
    (e[(e.CUSTOMIZE = 0)] = 'CUSTOMIZE'), (e[(e.BROWSE = 1)] = 'BROWSE');
})(i || (i = {})),
    !(function (e) {
        (e[(e.MULTIPLE_CHOICE = 0)] = 'MULTIPLE_CHOICE'), (e[(e.DROPDOWN = 1)] = 'DROPDOWN');
    })(a || (a = {})),
    !(function (e) {
        (e[(e.ONBOARDING_DEFAULT = 0)] = 'ONBOARDING_DEFAULT'), (e[(e.ONBOARDING_ADVANCED = 1)] = 'ONBOARDING_ADVANCED');
    })(o || (o = {}));
