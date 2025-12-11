a.d(t, { default: () => b });
var s = a(54381),
    n = a(473749),
    r = a(120356),
    i = a.n(r),
    c = a(704215),
    o = a(159691),
    l = a(481060),
    d = a(605236),
    u = a(626135),
    x = a(164670),
    m = a(705338),
    f = a(981631),
    h = a(921944),
    g = a(231338),
    j = a(388032),
    p = a(383749),
    v = a(867709),
    N = a(157443);
function b(e) {
    let { transitionState: t, returnRef: a, onClose: r } = e;
    n.useEffect(() => {
        u.default.track(f.rMx.OPEN_MODAL, { type: "Social Layer Storefront Announcement Modal" }),
            (0, d.bj)(c.z.GAME_SHOP_ANNOUNCEMENT_MODAL, { dismissAction: h.L.AUTO_DISMISS });
    }, []);
    let b = n.useCallback(() => {
            (0, m.eagerNavigateToSocialLayerStorefront)({ guildId: (0, x.ac)() });
        }, []),
        k = n.useCallback(() => {
            (0, m.default)({ guildId: (0, x.ac)() }), r();
        }, [r]);
    return (0, s.jsx)(o.f6W, {
        theme: g.BR.DARK,
        children: (e) =>
            (0, s.jsx)(l.Y0X, {
                transitionState: t,
                parentComponent: "SocialLayerStorefrontAnnouncementModal",
                size: l.CgR.DYNAMIC,
                className: i()(e, p.modal),
                returnRef: a,
                children: (0, s.jsxs)(l.hzk, {
                    className: p.content,
                    children: [
                        (0, s.jsx)("div", {
                            className: p.closeButton,
                            children: (0, s.jsx)(l.olH, { onClick: r }),
                        }),
                        (0, s.jsx)("div", { className: p.artwork }),
                        (0, s.jsx)(o.X6q, {
                            variant: "display-md",
                            color: "text-strong",
                            children: j.intl.string(j.t.to0E8U),
                        }),
                        (0, s.jsx)(o.X6q, {
                            variant: "display-md",
                            color: "text-strong",
                            children: j.intl.string(j.t.BKEkBd),
                        }),
                        (0, s.jsx)(o.X6q, {
                            variant: "heading-md/medium",
                            color: "text-muted",
                            children: j.intl.string(j.t.SiXpR2),
                        }),
                        (0, s.jsxs)("div", {
                            className: p.features,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: p.feature,
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: p.featureIcon,
                                            children: (0, s.jsx)("img", {
                                                src: N,
                                                alt: "",
                                            }),
                                        }),
                                        (0, s.jsxs)("div", {
                                            className: p.featureCopy,
                                            children: [
                                                (0, s.jsx)(o.X6q, {
                                                    variant: "heading-md/semibold",
                                                    color: "text-strong",
                                                    children: j.intl.string(j.t["5hRbeH"]),
                                                }),
                                                (0, s.jsx)(o.xvT, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: j.intl.string(j.t["72sDuh"]),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, s.jsxs)("div", {
                                    className: p.feature,
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: p.featureIcon,
                                            children: (0, s.jsx)("img", {
                                                src: v,
                                                alt: "",
                                            }),
                                        }),
                                        (0, s.jsxs)("div", {
                                            className: p.featureCopy,
                                            children: [
                                                (0, s.jsx)(o.X6q, {
                                                    variant: "heading-md/semibold",
                                                    color: "text-strong",
                                                    children: j.intl.string(j.t.MO4ASw),
                                                }),
                                                (0, s.jsx)(o.xvT, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: j.intl.string(j.t.o4i2Wx),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)(o.zxk, {
                            variant: "primary",
                            text: j.intl.string(j.t.CekBHq),
                            onClick: k,
                            onMouseDown: b,
                        }),
                    ],
                }),
            }),
    });
}
