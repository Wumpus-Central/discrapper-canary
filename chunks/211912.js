a.d(t, { default: () => b });
var r = a(54381),
    s = a(473749),
    n = a(120356),
    i = a.n(n),
    c = a(704215),
    l = a(159691),
    o = a(481060),
    d = a(605236),
    u = a(626135),
    m = a(164670),
    f = a(705338),
    x = a(981631),
    h = a(921944),
    p = a(231338),
    j = a(388032),
    v = a(487373),
    g = a(867709),
    N = a(157443);
function b(e) {
    let { transitionState: t, returnRef: a, onClose: n } = e;
    s.useEffect(() => {
        u.default.track(x.rMx.OPEN_MODAL, { type: "Social Layer Storefront Announcement Modal" }),
            (0, d.bj)(c.z.GAME_SHOP_ANNOUNCEMENT_MODAL, { dismissAction: h.L.AUTO_DISMISS });
    }, []);
    let b = s.useCallback(() => {
            (0, f.eagerNavigateToSocialLayerStorefront)({ guildId: (0, m.ac)() });
        }, []),
        k = s.useCallback(() => {
            (0, f.default)({ guildId: (0, m.ac)() }), n();
        }, [n]);
    return (0, r.jsx)(l.f6W, {
        theme: p.BR.DARK,
        children: (e) =>
            (0, r.jsx)(o.Y0X, {
                transitionState: t,
                parentComponent: "SocialLayerStorefrontAnnouncementModal",
                size: o.CgR.DYNAMIC,
                className: i()(e, v.modal),
                returnRef: a,
                children: (0, r.jsxs)(o.hzk, {
                    className: v.content,
                    children: [
                        (0, r.jsx)("div", {
                            className: v.closeButton,
                            children: (0, r.jsx)(o.olH, { onClick: n }),
                        }),
                        (0, r.jsx)("div", { className: v.artwork }),
                        (0, r.jsx)(l.X6q, {
                            variant: "display-md",
                            color: "header-primary",
                            children: j.intl.string(j.t.to0E8U),
                        }),
                        (0, r.jsx)(l.X6q, {
                            variant: "display-md",
                            color: "header-primary",
                            children: j.intl.string(j.t.BKEkBd),
                        }),
                        (0, r.jsx)(l.X6q, {
                            variant: "heading-md/medium",
                            color: "header-muted",
                            children: j.intl.string(j.t.SiXpR2),
                        }),
                        (0, r.jsxs)("div", {
                            className: v.features,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: v.feature,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: v.featureIcon,
                                            children: (0, r.jsx)("img", {
                                                src: N,
                                                alt: "",
                                            }),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: v.featureCopy,
                                            children: [
                                                (0, r.jsx)(l.X6q, {
                                                    variant: "heading-md/semibold",
                                                    color: "header-primary",
                                                    children: j.intl.string(j.t["5hRbeH"]),
                                                }),
                                                (0, r.jsx)(l.xvT, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: j.intl.string(j.t["72sDuh"]),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: v.feature,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: v.featureIcon,
                                            children: (0, r.jsx)("img", {
                                                src: g,
                                                alt: "",
                                            }),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: v.featureCopy,
                                            children: [
                                                (0, r.jsx)(l.X6q, {
                                                    variant: "heading-md/semibold",
                                                    color: "header-primary",
                                                    children: j.intl.string(j.t.MO4ASw),
                                                }),
                                                (0, r.jsx)(l.xvT, {
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
                        (0, r.jsx)(l.zxk, {
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
