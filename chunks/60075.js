l.d(t, {
    D5: () => f,
    Ec: () => b,
    KF: () => A,
    LF: () => m,
    NA: () => x,
    Z1: () => h,
    lz: () => T,
    mi: () => R,
    n2: () => k,
    s2: () => P,
    t$: () => p,
    yJ: () => j,
    yi: () => C,
    z_: () => E,
});
var a = l(627968),
    n = l(64700),
    r = l(311907),
    i = l(397927),
    s = l(252561),
    o = l(287809),
    u = l(652215),
    c = l(339984),
    d = l(788868);
function p() {
    let e = n.useCallback(() => {
        (0, i.mMO)(async () => {
            let { default: e } = await Promise.resolve().then(l.bind(l, 32605));
            return (t) => (0, a.jsx)(e, { analyticsSource: {}, ...t });
        });
    }, []);
    return (0, a.jsx)(s.LB, {
        children: (0, a.jsx)(i.Button, {
            onClick: e,
            variant: "primary",
            size: "md",
            text: "Open Burst Reactions Upsell",
        }),
    });
}
function m() {
    let e = n.useCallback(() => {
        (0, i.mMO)(async () => {
            let { default: e } = await l.e("159").then(l.bind(l, 530951));
            return (t) => (0, a.jsx)(e, { source: {}, ...t });
        });
    }, []);
    return (0, a.jsx)(s.LB, {
        children: (0, a.jsx)(i.Button, {
            onClick: e,
            variant: "primary",
            size: "md",
            text: "Open Premium For Later Upsell",
        }),
    });
}
function h() {
    let e = n.useCallback(() => {
        (0, i.mMO)(async () => {
            let { default: e } = await l.e("32482").then(l.bind(l, 861177));
            return (t) => (0, a.jsx)(e, { source: {}, ...t });
        });
    }, []);
    return (0, a.jsx)(s.LB, {
        children: (0, a.jsx)(i.Button, {
            onClick: e,
            variant: "primary",
            size: "md",
            text: "Open Premium Profile Upsell",
        }),
    });
}
function x() {
    let e = n.useCallback(() => {
        (0, i.mMO)(async () => {
            let { default: e } = await l.e("66920").then(l.bind(l, 220763));
            return (t) => (0, a.jsx)(e, { channel: null, ...t });
        });
    }, []);
    return (0, a.jsx)(s.LB, {
        children: (0, a.jsx)(i.Button, {
            onClick: e,
            variant: "primary",
            size: "md",
            text: "Open Premium Message Length Upsell",
        }),
    });
}
function b() {
    let [e] = n.useState("This is a sample long message that exceeds the character limit."),
        t = n.useCallback(() => {
            (0, i.mMO)(async () => {
                let { default: t } = await l.e("76725").then(l.bind(l, 798612));
                return (l) => (0, a.jsx)(t, { channel: null, content: e, ...l });
            });
        }, [e]);
    return (0, a.jsx)(s.LB, {
        children: (0, a.jsx)(i.Button, {
            onClick: t,
            variant: "primary",
            size: "md",
            text: "Open Premium Message Length Roadblock Upsell",
        }),
    });
}
let g = [
        { id: "avatar_decoration", label: "Avatar Decoration", value: d.e.AVATAR_DECORATION_MODAL_UPSELL },
        { id: "profile_effect", label: "Profile Effect", value: d.e.PROFILE_EFFECT_MODAL_UPSELL },
        { id: "nameplate", label: "Nameplate", value: d.e.NAMEPLATE_MODAL_UPSELL },
    ],
    y = {
        [d.e.AVATAR_DECORATION_MODAL_UPSELL]: {
            title: "Express Yourself with Avatar Decorations",
            body: "Stand out with unique avatar decorations exclusive to Nitro subscribers.",
            glowUp: "Stand out with unique avatar decorations exclusive to Nitro subscribers.",
        },
        [d.e.PROFILE_EFFECT_MODAL_UPSELL]: {
            title: "Animate Your Profile with Profile Effects",
            body: "Add dynamic effects to your profile with Nitro.",
            glowUp: "Add dynamic effects to your profile with Nitro.",
        },
        [d.e.NAMEPLATE_MODAL_UPSELL]: {
            title: "Personalize with a Nameplate",
            body: "Show off your style with a custom nameplate, available with Nitro.",
            glowUp: "Show off your style with a custom nameplate, available with Nitro.",
        },
    };
function f() {
    let [e, t] = n.useState(d.e.AVATAR_DECORATION_MODAL_UPSELL),
        r = n.useCallback(() => {
            let { title: t, body: n, glowUp: r } = y[e];
            (0, i.mMO)(async () => {
                let { default: i } = await Promise.all([l.e("59701"), l.e("64864")]).then(l.bind(l, 948265));
                return (l) =>
                    (0, a.jsx)(i, {
                        premiumUpsellType: e,
                        title: t,
                        body: n,
                        glowUp: r,
                        analyticsSource: {},
                        onSecondaryClick: () => l.onClose(),
                        ...l,
                    });
            });
        }, [e]);
    return (0, a.jsxs)(s.LB, {
        children: [
            (0, a.jsx)(s.MG, {
                children: (0, a.jsx)(i.l6P, {
                    label: "Upsell Type",
                    placeholder: "Select type",
                    onSelectionChange: (e) => t(e),
                    value: e,
                    options: g,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            }),
            (0, a.jsx)(i.Button, {
                onClick: r,
                variant: "primary",
                size: "md",
                text: "Open Profile Decoration Upsell",
            }),
        ],
    });
}
let v = [
    { id: "near_limit", label: "Near Limit (99 guilds)", value: 99 },
    { id: "at_limit", label: "At Limit (100 guilds)", value: u.qlD },
];
function E() {
    let [e, t] = n.useState(100),
        r = n.useCallback(() => {
            (0, i.mMO)(async () => {
                let { default: t } = await l.e("45990").then(l.bind(l, 307794));
                return (l) =>
                    (0, a.jsx)(t, {
                        guildCount: e,
                        analyticsSource: {},
                        analyticsLocation: {},
                        analyticsLocations: [],
                        ...l,
                    });
            });
        }, [e]);
    return (0, a.jsxs)(s.LB, {
        children: [
            (0, a.jsx)(s.MG, {
                children: (0, a.jsx)(i.l6P, {
                    label: "Guild Count State",
                    placeholder: "Select state",
                    onSelectionChange: (e) => t(e),
                    value: e,
                    options: v,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            }),
            (0, a.jsx)(i.Button, { onClick: r, variant: "primary", size: "md", text: "Open Guild Cap Upsell" }),
        ],
    });
}
let S = [
    { id: "avatar", label: "Avatar", value: c.HL.AVATAR },
    { id: "banner", label: "Banner", value: c.HL.BANNER },
];
function j() {
    let [e, t] = n.useState(c.HL.AVATAR),
        u = (0, r.bG)([o.default], () => o.default.getCurrentUser()),
        d = n.useCallback(() => {
            null != u &&
                (0, i.mMO)(async () => {
                    let { default: t } = await Promise.all([l.e("59701"), l.e("79149")]).then(l.bind(l, 688796));
                    return (l) =>
                        (0, a.jsx)(t, { user: u, uploadType: e, analyticsSource: {}, analyticsLocation: {}, ...l });
                });
        }, [u, e]);
    return (0, a.jsxs)(s.LB, {
        children: [
            (0, a.jsx)(s.MG, {
                children: (0, a.jsx)(i.l6P, {
                    label: "Upload Type",
                    placeholder: "Select type",
                    onSelectionChange: (e) => t(e),
                    value: e,
                    options: S,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            }),
            (0, a.jsx)(i.Button, { onClick: d, variant: "primary", size: "md", text: "Open Animated Profile Upsell" }),
        ],
    });
}
function T() {
    let e = (0, r.bG)([o.default], () => o.default.getCurrentUser()),
        t = n.useCallback(() => {
            null != e &&
                (0, i.mMO)(async () => {
                    let { default: t } = await l.e("97674").then(l.bind(l, 407217));
                    return (l) => (0, a.jsx)(t, { user: e, analyticsSource: {}, analyticsLocation: {}, ...l });
                });
        }, [e]);
    return (0, a.jsx)(s.LB, {
        children: (0, a.jsx)(i.Button, {
            onClick: t,
            variant: "primary",
            size: "md",
            text: "Open Try It Out Profile Upsell",
        }),
    });
}
function C() {
    let e = n.useCallback(() => {
        (0, i.mMO)(async () => {
            let { default: e } = await l.e("95743").then(l.bind(l, 210402));
            return (t) => (0, a.jsx)(e, { analyticsSource: {}, ...t });
        });
    }, []);
    return (0, a.jsx)(s.LB, {
        children: (0, a.jsx)(i.Button, {
            onClick: e,
            variant: "primary",
            size: "md",
            text: "Open Video Backgrounds Upsell",
        }),
    });
}
function P() {
    let e = n.useCallback(() => {
        (0, i.mMO)(async () => {
            let { default: e } = await l.e("90617").then(l.bind(l, 663072));
            return (t) => (0, a.jsx)(e, { analyticsSource: {}, analyticsLocation: {}, ...t });
        });
    }, []);
    return (0, a.jsx)(s.LB, {
        children: (0, a.jsx)(i.Button, {
            onClick: e,
            variant: "primary",
            size: "md",
            text: "Open Voice Filters Upsell",
        }),
    });
}
function A() {
    let e = n.useCallback(() => {
        (0, i.mMO)(async () => {
            let { default: e } = await l.e("65281").then(l.bind(l, 547352));
            return (t) => (0, a.jsx)(e, { source: {}, ...t });
        });
    }, []);
    return (0, a.jsx)(s.LB, {
        children: (0, a.jsx)(i.Button, {
            onClick: e,
            variant: "primary",
            size: "md",
            text: "Open Guild Member Profile Upsell",
        }),
    });
}
function R() {
    let e = n.useCallback(() => {
        (0, i.mMO)(async () => {
            let { default: e } = await l.e("31852").then(l.bind(l, 219732));
            return (t) => (0, a.jsx)(e, { handleLearnMore: t.onClose, ...t });
        });
    }, []);
    return (0, a.jsx)(s.LB, {
        children: (0, a.jsx)(i.Button, { onClick: e, variant: "primary", size: "md", text: "Open File Upload Upsell" }),
    });
}
let _ = [
    { id: "ended", label: "Reverse Trial Ended", value: d.e.REVERSE_TRIAL_ENDED_UPSELL },
    { id: "followup", label: "Reverse Trial Followup", value: d.e.REVERSE_TRIAL_FOLLOWUP_UPSELL },
];
function k() {
    let [e, t] = n.useState(d.e.REVERSE_TRIAL_ENDED_UPSELL),
        r = n.useCallback(() => {
            (0, i.mMO)(async () => {
                let { default: t } = await l.e("78723").then(l.bind(l, 199630));
                return (l) => (0, a.jsx)(t, { upsellType: e, ...l });
            });
        }, [e]);
    return (0, a.jsxs)(s.LB, {
        children: [
            (0, a.jsx)(s.MG, {
                children: (0, a.jsx)(i.l6P, {
                    label: "Upsell Type",
                    placeholder: "Select type",
                    onSelectionChange: (e) => t(e),
                    value: e,
                    options: _,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            }),
            (0, a.jsx)(i.Button, { onClick: r, variant: "primary", size: "md", text: "Open Reverse Trial Upsell" }),
        ],
    });
}
