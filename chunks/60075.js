l.d(t, {
    D5: () => g,
    Ec: () => b,
    KF: () => T,
    LF: () => m,
    NA: () => x,
    Z1: () => h,
    lz: () => j,
    t$: () => p,
    yJ: () => C,
    yi: () => S,
    z_: () => _,
});
var a = l(627968),
    n = l(64700),
    r = l(311907),
    i = l(397927),
    o = l(252561),
    s = l(287809),
    d = l(652215),
    c = l(339984),
    u = l(788868);
function p() {
    let e = n.useCallback(() => {
        (0, i.mMO)(async () => {
            let { default: e } = await Promise.resolve().then(l.bind(l, 32605));
            return (t) => (0, a.jsx)(e, { analyticsSource: {}, ...t });
        });
    }, []);
    return (0, a.jsx)(o.LB, {
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
            let { default: e } = await l.e("22540").then(l.bind(l, 530951));
            return (t) => (0, a.jsx)(e, { source: {}, ...t });
        });
    }, []);
    return (0, a.jsx)(o.LB, {
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
    return (0, a.jsx)(o.LB, {
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
    return (0, a.jsx)(o.LB, {
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
    return (0, a.jsx)(o.LB, {
        children: (0, a.jsx)(i.Button, {
            onClick: t,
            variant: "primary",
            size: "md",
            text: "Open Premium Message Length Roadblock Upsell",
        }),
    });
}
let y = [
        { id: "avatar_decoration", label: "Avatar Decoration", value: u.e.AVATAR_DECORATION_MODAL_UPSELL },
        { id: "profile_effect", label: "Profile Effect", value: u.e.PROFILE_EFFECT_MODAL_UPSELL },
        { id: "nameplate", label: "Nameplate", value: u.e.NAMEPLATE_MODAL_UPSELL },
    ],
    f = {
        [u.e.AVATAR_DECORATION_MODAL_UPSELL]: {
            title: "Express Yourself with Avatar Decorations",
            body: "Stand out with unique avatar decorations exclusive to Nitro subscribers.",
            glowUp: "Stand out with unique avatar decorations exclusive to Nitro subscribers.",
        },
        [u.e.PROFILE_EFFECT_MODAL_UPSELL]: {
            title: "Animate Your Profile with Profile Effects",
            body: "Add dynamic effects to your profile with Nitro.",
            glowUp: "Add dynamic effects to your profile with Nitro.",
        },
        [u.e.NAMEPLATE_MODAL_UPSELL]: {
            title: "Personalize with a Nameplate",
            body: "Show off your style with a custom nameplate, available with Nitro.",
            glowUp: "Show off your style with a custom nameplate, available with Nitro.",
        },
    };
function g() {
    let [e, t] = n.useState(u.e.AVATAR_DECORATION_MODAL_UPSELL),
        r = n.useCallback(() => {
            let { title: t, body: n, glowUp: r } = f[e];
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
    return (0, a.jsxs)(o.LB, {
        children: [
            (0, a.jsx)(o.MG, {
                children: (0, a.jsx)(i.l6P, {
                    label: "Upsell Type",
                    placeholder: "Select type",
                    onSelectionChange: (e) => t(e),
                    value: e,
                    options: y,
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
    { id: "at_limit", label: "At Limit (100 guilds)", value: d.qlD },
];
function _() {
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
    return (0, a.jsxs)(o.LB, {
        children: [
            (0, a.jsx)(o.MG, {
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
let E = [
    { id: "avatar", label: "Avatar", value: c.HL.AVATAR },
    { id: "banner", label: "Banner", value: c.HL.BANNER },
];
function C() {
    let [e, t] = n.useState(c.HL.AVATAR),
        d = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
        u = n.useCallback(() => {
            null != d &&
                (0, i.mMO)(async () => {
                    let { default: t } = await Promise.all([l.e("59701"), l.e("79149")]).then(l.bind(l, 688796));
                    return (l) =>
                        (0, a.jsx)(t, { user: d, uploadType: e, analyticsSource: {}, analyticsLocation: {}, ...l });
                });
        }, [d, e]);
    return (0, a.jsxs)(o.LB, {
        children: [
            (0, a.jsx)(o.MG, {
                children: (0, a.jsx)(i.l6P, {
                    label: "Upload Type",
                    placeholder: "Select type",
                    onSelectionChange: (e) => t(e),
                    value: e,
                    options: E,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            }),
            (0, a.jsx)(i.Button, { onClick: u, variant: "primary", size: "md", text: "Open Animated Profile Upsell" }),
        ],
    });
}
function j() {
    let e = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
        t = n.useCallback(() => {
            null != e &&
                (0, i.mMO)(async () => {
                    let { default: t } = await l.e("97674").then(l.bind(l, 407217));
                    return (l) => (0, a.jsx)(t, { user: e, analyticsSource: {}, analyticsLocation: {}, ...l });
                });
        }, [e]);
    return (0, a.jsx)(o.LB, {
        children: (0, a.jsx)(i.Button, {
            onClick: t,
            variant: "primary",
            size: "md",
            text: "Open Try It Out Profile Upsell",
        }),
    });
}
function S() {
    let e = n.useCallback(() => {
        (0, i.mMO)(async () => {
            let { default: e } = await l.e("95743").then(l.bind(l, 210402));
            return (t) => (0, a.jsx)(e, { analyticsSource: {}, ...t });
        });
    }, []);
    return (0, a.jsx)(o.LB, {
        children: (0, a.jsx)(i.Button, {
            onClick: e,
            variant: "primary",
            size: "md",
            text: "Open Video Backgrounds Upsell",
        }),
    });
}
function T() {
    let e = n.useCallback(() => {
        (0, i.mMO)(async () => {
            let { default: e } = await l.e("65281").then(l.bind(l, 547352));
            return (t) => (0, a.jsx)(e, { source: {}, ...t });
        });
    }, []);
    return (0, a.jsx)(o.LB, {
        children: (0, a.jsx)(i.Button, {
            onClick: e,
            variant: "primary",
            size: "md",
            text: "Open Guild Member Profile Upsell",
        }),
    });
}
