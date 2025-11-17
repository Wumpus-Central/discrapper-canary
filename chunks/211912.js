r.d(t, { default: () => g });
var a = r(54381),
    s = r(473749),
    n = r(120356),
    i = r.n(n),
    c = r(704215),
    l = r(159691),
    d = r(481060),
    o = r(266454),
    u = r(626135),
    m = r(705338),
    f = r(582113),
    x = r(981631),
    h = r(231338),
    p = r(388032),
    j = r(487373),
    v = r(867709),
    N = r(157443);
function g(e) {
    let { transitionState: t, returnRef: r, onClose: n } = e;
    s.useEffect(() => {
        u.default.track(x.rMx.OPEN_MODAL, { type: "Social Layer Storefront Announcement Modal" }),
            (0, o.Q3)(c.z.GAME_SHOP_ANNOUNCEMENT_MODAL);
    }, []);
    let g = s.useCallback(() => {
        (0, m.Z)({ guildId: f.ON }), n();
    }, [n]);
    return (0, a.jsx)(l.f6W, {
        theme: h.BR.DARK,
        children: (e) =>
            (0, a.jsx)(d.Y0X, {
                transitionState: t,
                parentComponent: "SocialLayerStorefrontAnnouncementModal",
                size: d.CgR.DYNAMIC,
                className: i()(e, j.modal),
                returnRef: r,
                children: (0, a.jsxs)(d.hzk, {
                    className: j.content,
                    children: [
                        (0, a.jsx)("div", {
                            className: j.closeButton,
                            children: (0, a.jsx)(d.olH, { onClick: n }),
                        }),
                        (0, a.jsx)("div", { className: j.artwork }),
                        (0, a.jsx)(l.X6q, {
                            variant: "display-md",
                            color: "header-primary",
                            children: p.intl.string(p.t.to0E8U),
                        }),
                        (0, a.jsx)(l.X6q, {
                            variant: "display-md",
                            color: "header-primary",
                            children: p.intl.string(p.t.BKEkBd),
                        }),
                        (0, a.jsx)(l.X6q, {
                            variant: "heading-md/medium",
                            color: "header-muted",
                            children: p.intl.string(p.t.SiXpR2),
                        }),
                        (0, a.jsxs)("div", {
                            className: j.features,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: j.feature,
                                    children: [
                                        (0, a.jsx)("div", {
                                            className: j.featureIcon,
                                            children: (0, a.jsx)("img", {
                                                src: N,
                                                alt: "",
                                            }),
                                        }),
                                        (0, a.jsxs)("div", {
                                            className: j.featureCopy,
                                            children: [
                                                (0, a.jsx)(l.X6q, {
                                                    variant: "heading-md/semibold",
                                                    color: "header-primary",
                                                    children: p.intl.string(p.t["5hRbeH"]),
                                                }),
                                                (0, a.jsx)(l.xvT, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: p.intl.string(p.t["72sDuh"]),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: j.feature,
                                    children: [
                                        (0, a.jsx)("div", {
                                            className: j.featureIcon,
                                            children: (0, a.jsx)("img", {
                                                src: v,
                                                alt: "",
                                            }),
                                        }),
                                        (0, a.jsxs)("div", {
                                            className: j.featureCopy,
                                            children: [
                                                (0, a.jsx)(l.X6q, {
                                                    variant: "heading-md/semibold",
                                                    color: "header-primary",
                                                    children: p.intl.string(p.t.MO4ASw),
                                                }),
                                                (0, a.jsx)(l.xvT, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: p.intl.string(p.t.o4i2Wx),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)(l.zxk, {
                            variant: "expressive",
                            text: p.intl.string(p.t.CekBHq),
                            onClick: g,
                        }),
                    ],
                }),
            }),
    });
}
