n.d(t, { Z: () => g }), n(388685);
var a = n(951288),
    r = n(647438),
    i = n(120356),
    l = n.n(i),
    s = n(793030),
    o = n(442837),
    c = n(481060),
    d = n(678717),
    u = n(715495),
    m = n(928518),
    p = n(538645),
    h = n(383036),
    x = n(981631),
    f = n(440543);
let b = (e) => {
        let { setTab: t } = e,
            n = (0, o.e7)([m.Z], () => m.Z.getWindowOpen(x.KJ3.DEVTOOLS_POPOUT));
        return (0, a.jsxs)("div", {
            className: f.content,
            children: [
                (0, a.jsx)(c.P3F, {
                    onClick: () => {
                        t(1);
                    },
                    children: (0, a.jsx)("div", {
                        className: l()(f.banner, f.pfxBanner),
                        children: (0, a.jsx)(s.xvT, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Profile Effects",
                        }),
                    }),
                }),
                (0, a.jsx)(c.P3F, {
                    onClick: () => {
                        t(2);
                    },
                    children: (0, a.jsx)("div", {
                        className: l()(f.banner, f.nameplateBanner),
                        children: (0, a.jsx)(s.xvT, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Nameplates",
                        }),
                    }),
                }),
                (0, a.jsx)(c.P3F, {
                    onClick: () => {
                        t(3);
                    },
                    children: (0, a.jsx)("div", {
                        className: l()(f.banner, f.bundlesBanner),
                        children: (0, a.jsx)(s.xvT, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Product Preview Tool",
                        }),
                    }),
                }),
                !n &&
                    (0, a.jsx)(c.ToO, {
                        className: f.notice,
                        type: c.Dd5.WARNING,
                        title: "Not enough space?",
                        body: (0, a.jsxs)("div", {
                            className: f.noticeBody,
                            children: [
                                (0, a.jsx)("span", {
                                    children: " You can pop out the DevTools to see the full layout. ",
                                }),
                                (0, a.jsx)(c.zxk, {
                                    size: "sm",
                                    icon: s.rgF,
                                    variant: "secondary",
                                    onClick: d.openDevToolsPopout,
                                    text: "Popout DevTools",
                                }),
                            ],
                        }),
                    }),
            ],
        });
    },
    g = () => {
        let [e, t] = r.useState(0);
        return (0, a.jsxs)(s.zJl, {
            className: f.wrapper,
            children: [
                (0, a.jsxs)("div", {
                    className: f.nav,
                    children: [
                        (0, a.jsx)(s.X6q, {
                            variant: "heading-xxl/medium",
                            children: "ShopKeeper",
                        }),
                        0 !== e &&
                            (0, a.jsx)(c.zxk, {
                                variant: "primary",
                                onClick: () => t(0),
                                text: "Back",
                            }),
                    ],
                }),
                (() => {
                    switch (e) {
                        case 1:
                            return (0, a.jsx)(p.Z, {});
                        case 2:
                            return (0, a.jsx)(u.Z, {});
                        case 3:
                            return (0, a.jsx)(h.Z, {});
                        default:
                            return (0, a.jsx)(b, { setTab: t });
                    }
                })(),
            ],
        });
    };
