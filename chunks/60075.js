l.d(t, {
    D5: () => _,
    Ec: () => v,
    IQ: () => k,
    KF: () => I,
    LF: () => h,
    NA: () => y,
    WC: () => A,
    Z1: () => x,
    lz: () => T,
    t$: () => b,
    yJ: () => j,
    yi: () => P,
    z_: () => C,
});
var a = l(627968),
    n = l(64700),
    r = l(311907),
    i = l(192308),
    o = l(821609),
    s = l(691885),
    d = l(252561),
    c = l(287809),
    u = l(652215),
    p = l(339984),
    m = l(788868);
function b() {
    let e = n.useCallback(() => {
        (0, i.openModalLazy)(async () => {
            let { default: e } = await Promise.resolve().then(l.bind(l, 32605));
            return (t) => (0, a.jsx)(e, { analyticsSource: {}, ...t });
        });
    }, []);
    return (0, a.jsx)(d.LB, {
        children: (0, a.jsx)(o.$, { onClick: e, variant: "primary", size: "md", text: "Open Burst Reactions Upsell" }),
    });
}
function h() {
    let e = n.useCallback(() => {
        (0, i.openModalLazy)(async () => {
            let { default: e } = await l.e("22540").then(l.bind(l, 530951));
            return (t) => (0, a.jsx)(e, { ...t });
        });
    }, []);
    return (0, a.jsx)(d.LB, {
        children: (0, a.jsx)(o.$, {
            onClick: e,
            variant: "primary",
            size: "md",
            text: "Open Premium For Later Upsell",
        }),
    });
}
function x() {
    let e = n.useCallback(() => {
        (0, i.openModalLazy)(async () => {
            let { default: e } = await l.e("32482").then(l.bind(l, 861177));
            return (t) => (0, a.jsx)(e, { source: {}, ...t });
        });
    }, []);
    return (0, a.jsx)(d.LB, {
        children: (0, a.jsx)(o.$, { onClick: e, variant: "primary", size: "md", text: "Open Premium Profile Upsell" }),
    });
}
function y() {
    let e = n.useCallback(() => {
        (0, i.openModalLazy)(async () => {
            let { default: e } = await l.e("66920").then(l.bind(l, 220763));
            return (t) => (0, a.jsx)(e, { ...t });
        });
    }, []);
    return (0, a.jsx)(d.LB, {
        children: (0, a.jsx)(o.$, {
            onClick: e,
            variant: "primary",
            size: "md",
            text: "Open Premium Message Length Upsell",
        }),
    });
}
function v() {
    let [e] = n.useState("This is a sample long message that exceeds the character limit."),
        t = n.useCallback(() => {
            (0, i.openModalLazy)(async () => {
                let { default: t } = await l.e("76725").then(l.bind(l, 798612));
                return (l) => (0, a.jsx)(t, { channel: null, content: e, ...l });
            });
        }, [e]);
    return (0, a.jsx)(d.LB, {
        children: (0, a.jsx)(o.$, {
            onClick: t,
            variant: "primary",
            size: "md",
            text: "Open Premium Message Length Roadblock Upsell",
        }),
    });
}
let g = [
        { id: "avatar_decoration", label: "Avatar Decoration", value: m.e.AVATAR_DECORATION_MODAL_UPSELL },
        { id: "profile_effect", label: "Profile Effect", value: m.e.PROFILE_EFFECT_MODAL_UPSELL },
        { id: "nameplate", label: "Nameplate", value: m.e.NAMEPLATE_MODAL_UPSELL },
    ],
    f = {
        [m.e.AVATAR_DECORATION_MODAL_UPSELL]: {
            title: "Express Yourself with Avatar Decorations",
            body: "Stand out with unique avatar decorations exclusive to Nitro subscribers.",
        },
        [m.e.PROFILE_EFFECT_MODAL_UPSELL]: {
            title: "Animate Your Profile with Profile Effects",
            body: "Add dynamic effects to your profile with Nitro.",
        },
        [m.e.NAMEPLATE_MODAL_UPSELL]: {
            title: "Personalize with a Nameplate",
            body: "Show off your style with a custom nameplate, available with Nitro.",
        },
    };
function _() {
    let [e, t] = n.useState(m.e.AVATAR_DECORATION_MODAL_UPSELL),
        r = n.useCallback(() => {
            let { title: t, body: n } = f[e];
            (0, i.openModalLazy)(async () => {
                let { default: r } = await l.e("64864").then(l.bind(l, 948265));
                return (l) =>
                    (0, a.jsx)(r, {
                        premiumUpsellType: e,
                        title: t,
                        body: n,
                        onSecondaryClick: () => l.onClose(),
                        ...l,
                    });
            });
        }, [e]);
    return (0, a.jsxs)(d.LB, {
        children: [
            (0, a.jsx)(d.MG, {
                children: (0, a.jsx)(s.l, {
                    label: "Upsell Type",
                    placeholder: "Select type",
                    onSelectionChange: (e) => t(e),
                    value: e,
                    options: g,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            }),
            (0, a.jsx)(o.$, { onClick: r, variant: "primary", size: "md", text: "Open Profile Decoration Upsell" }),
        ],
    });
}
let E = [
    { id: "near_limit", label: "Near Limit (99 guilds)", value: 99 },
    { id: "at_limit", label: "At Limit (100 guilds)", value: u.qlD },
];
function C() {
    let [e, t] = n.useState(100),
        r = n.useCallback(() => {
            (0, i.openModalLazy)(async () => {
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
    return (0, a.jsxs)(d.LB, {
        children: [
            (0, a.jsx)(d.MG, {
                children: (0, a.jsx)(s.l, {
                    label: "Guild Count State",
                    placeholder: "Select state",
                    onSelectionChange: (e) => t(e),
                    value: e,
                    options: E,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            }),
            (0, a.jsx)(o.$, { onClick: r, variant: "primary", size: "md", text: "Open Guild Cap Upsell" }),
        ],
    });
}
let S = [
    { id: "avatar", label: "Avatar", value: p.HL.AVATAR },
    { id: "banner", label: "Banner", value: p.HL.BANNER },
];
function j() {
    let [e, t] = n.useState(p.HL.AVATAR),
        u = (0, r.bG)([c.default], () => c.default.getCurrentUser()),
        m = n.useCallback(() => {
            null != u &&
                (0, i.openModalLazy)(async () => {
                    let { default: t } = await l.e("79149").then(l.bind(l, 688796));
                    return (l) => (0, a.jsx)(t, { uploadType: e, ...l });
                });
        }, [u, e]);
    return (0, a.jsxs)(d.LB, {
        children: [
            (0, a.jsx)(d.MG, {
                children: (0, a.jsx)(s.l, {
                    label: "Upload Type",
                    placeholder: "Select type",
                    onSelectionChange: (e) => t(e),
                    value: e,
                    options: S,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            }),
            (0, a.jsx)(o.$, { onClick: m, variant: "primary", size: "md", text: "Open Animated Profile Upsell" }),
        ],
    });
}
function T() {
    let e = (0, r.bG)([c.default], () => c.default.getCurrentUser()),
        t = n.useCallback(() => {
            null != e &&
                (0, i.openModalLazy)(async () => {
                    let { default: e } = await l.e("97674").then(l.bind(l, 407217));
                    return (t) => (0, a.jsx)(e, { ...t });
                });
        }, [e]);
    return (0, a.jsx)(d.LB, {
        children: (0, a.jsx)(o.$, {
            onClick: t,
            variant: "primary",
            size: "md",
            text: "Open Try It Out Profile Upsell",
        }),
    });
}
function P() {
    let e = n.useCallback(() => {
        (0, i.openModalLazy)(async () => {
            let { default: e } = await l.e("95743").then(l.bind(l, 210402));
            return (t) => (0, a.jsx)(e, { analyticsSource: {}, ...t });
        });
    }, []);
    return (0, a.jsx)(d.LB, {
        children: (0, a.jsx)(o.$, {
            onClick: e,
            variant: "primary",
            size: "md",
            text: "Open Video Backgrounds Upsell",
        }),
    });
}
function I() {
    let e = n.useCallback(() => {
        (0, i.openModalLazy)(async () => {
            let { default: e } = await l.e("65281").then(l.bind(l, 547352));
            return (t) => (0, a.jsx)(e, { source: {}, ...t });
        });
    }, []);
    return (0, a.jsx)(d.LB, {
        children: (0, a.jsx)(o.$, {
            onClick: e,
            variant: "primary",
            size: "md",
            text: "Open Guild Member Profile Upsell",
        }),
    });
}
function A() {
    let e = n.useCallback(() => {
        (0, i.openModalLazy)(async () => {
            let { default: e } = await l.e("31746").then(l.bind(l, 182681));
            return (t) => (0, a.jsx)(e, { handleLearnMore: () => {}, ...t });
        });
    }, []);
    return (0, a.jsx)(d.LB, {
        children: (0, a.jsx)(o.$, { onClick: e, variant: "primary", size: "md", text: "Open HD Streaming Roadblock" }),
    });
}
function k() {
    let e = n.useCallback(() => {
        (0, i.openModalLazy)(async () => {
            let [{ default: e }, { EmojiIntention: t }] = await Promise.all([
                Promise.resolve().then(l.bind(l, 148361)),
                Promise.resolve().then(l.bind(l, 307731)),
            ]);
            return (l) =>
                (0, a.jsx)(e, {
                    onLearnMore: () => {},
                    onClose: l.onClose,
                    channel: null,
                    emojiDescriptor: void 0,
                    pickerIntention: t.CHAT,
                    analyticsLocation: {},
                });
        });
    }, []);
    return (0, a.jsx)(d.LB, {
        children: (0, a.jsx)(o.$, {
            onClick: e,
            variant: "primary",
            size: "md",
            text: "Open Emoji Picker Premium Upsell",
        }),
    });
}
