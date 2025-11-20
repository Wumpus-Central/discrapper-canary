a.d(t, { default: () => g });
var r = a(54381),
    s = a(473749),
    n = a(120356),
    i = a.n(n),
    c = a(704215),
    l = a(159691),
    o = a(481060),
    d = a(266454),
    m = a(626135),
    u = a(705338),
    f = a(582113),
    x = a(981631),
    h = a(231338),
    p = a(388032),
    j = a(487373),
    v = a(867709),
    N = a(157443);
function g(e) {
    let { transitionState: t, returnRef: a, onClose: n } = e;
    s.useEffect(() => {
        m.default.track(x.rMx.OPEN_MODAL, { type: "Social Layer Storefront Announcement Modal" }),
            (0, d.Q3)(c.z.GAME_SHOP_ANNOUNCEMENT_MODAL);
    }, []);
    let g = s.useCallback(() => {
        (0, u.Z)({ guildId: f.ON }), n();
    }, [n]);
    return (0, r.jsx)(l.f6W, {
        theme: h.BR.DARK,
        children: (e) =>
            (0, r.jsx)(o.Y0X, {
                transitionState: t,
                parentComponent: "SocialLayerStorefrontAnnouncementModal",
                size: o.CgR.DYNAMIC,
                className: i()(e, j.modal),
                returnRef: a,
                children: (0, r.jsxs)(o.hzk, {
                    className: j.content,
                    children: [
                        (0, r.jsx)("div", {
                            className: j.closeButton,
                            children: (0, r.jsx)(o.olH, { onClick: n }),
                        }),
                        (0, r.jsx)("div", { className: j.artwork }),
                        (0, r.jsx)(l.X6q, {
                            variant: "display-md",
                            color: "header-primary",
                            children: p.intl.string(p.t.to0E8U),
                        }),
                        (0, r.jsx)(l.X6q, {
                            variant: "display-md",
                            color: "header-primary",
                            children: p.intl.string(p.t.BKEkBd),
                        }),
                        (0, r.jsx)(l.X6q, {
                            variant: "heading-md/medium",
                            color: "header-muted",
                            children: p.intl.string(p.t.SiXpR2),
                        }),
                        (0, r.jsxs)("div", {
                            className: j.features,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: j.feature,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: j.featureIcon,
                                            children: (0, r.jsx)("img", {
                                                src: N,
                                                alt: "",
                                            }),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: j.featureCopy,
                                            children: [
                                                (0, r.jsx)(l.X6q, {
                                                    variant: "heading-md/semibold",
                                                    color: "header-primary",
                                                    children: p.intl.string(p.t["5hRbeH"]),
                                                }),
                                                (0, r.jsx)(l.xvT, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: p.intl.string(p.t["72sDuh"]),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: j.feature,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: j.featureIcon,
                                            children: (0, r.jsx)("img", {
                                                src: v,
                                                alt: "",
                                            }),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: j.featureCopy,
                                            children: [
                                                (0, r.jsx)(l.X6q, {
                                                    variant: "heading-md/semibold",
                                                    color: "header-primary",
                                                    children: p.intl.string(p.t.MO4ASw),
                                                }),
                                                (0, r.jsx)(l.xvT, {
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
                        (0, r.jsx)(l.zxk, {
                            variant: "primary",
                            text: p.intl.string(p.t.CekBHq),
                            onClick: g,
                        }),
                    ],
                }),
            }),
    });
}
