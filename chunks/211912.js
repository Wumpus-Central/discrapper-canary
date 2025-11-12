s.d(t, { default: () => v });
var r = s(951288),
    a = s(647438),
    i = s(120356),
    n = s.n(i),
    c = s(704215),
    l = s(159691),
    d = s(481060),
    o = s(266454),
    m = s(705338),
    u = s(582113),
    f = s(231338),
    x = s(388032),
    h = s(487373),
    p = s(867709),
    j = s(157443);
function v(e) {
    let { transitionState: t, returnRef: s, onClose: i } = e;
    a.useEffect(() => {
        (0, o.Q3)(c.z.GAME_SHOP_ANNOUNCEMENT_MODAL);
    }, []);
    let v = a.useCallback(() => {
        (0, m.Z)({ guildId: u.ON }), i();
    }, [i]);
    return (0, r.jsx)(l.f6W, {
        theme: f.BR.DARK,
        children: (e) =>
            (0, r.jsx)(d.Y0X, {
                transitionState: t,
                parentComponent: "SocialLayerStorefrontAnnouncementModal",
                size: d.CgR.DYNAMIC,
                className: n()(e, h.modal),
                returnRef: s,
                children: (0, r.jsxs)(d.hzk, {
                    className: h.content,
                    children: [
                        (0, r.jsx)("div", {
                            className: h.closeButton,
                            children: (0, r.jsx)(l.olH, {}),
                        }),
                        (0, r.jsx)("div", { className: h.artwork }),
                        (0, r.jsx)(l.X6q, {
                            variant: "display-md",
                            color: "header-primary",
                            children: x.intl.string(x.t.to0E8U),
                        }),
                        (0, r.jsx)(l.X6q, {
                            variant: "display-md",
                            color: "header-primary",
                            children: x.intl.string(x.t.BKEkBd),
                        }),
                        (0, r.jsx)(l.X6q, {
                            variant: "heading-md/medium",
                            color: "header-muted",
                            children: x.intl.string(x.t.SiXpR2),
                        }),
                        (0, r.jsxs)("div", {
                            className: h.features,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: h.feature,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: h.featureIcon,
                                            children: (0, r.jsx)("img", {
                                                src: j,
                                                alt: "",
                                            }),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: h.featureCopy,
                                            children: [
                                                (0, r.jsx)(l.X6q, {
                                                    variant: "heading-md/semibold",
                                                    color: "header-primary",
                                                    children: x.intl.string(x.t["5hRbeH"]),
                                                }),
                                                (0, r.jsx)(l.xvT, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: x.intl.string(x.t["72sDuh"]),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: h.feature,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: h.featureIcon,
                                            children: (0, r.jsx)("img", {
                                                src: p,
                                                alt: "",
                                            }),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: h.featureCopy,
                                            children: [
                                                (0, r.jsx)(l.X6q, {
                                                    variant: "heading-md/semibold",
                                                    color: "header-primary",
                                                    children: x.intl.string(x.t.MO4ASw),
                                                }),
                                                (0, r.jsx)(l.xvT, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: x.intl.string(x.t.o4i2Wx),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(l.zxk, {
                            variant: "expressive",
                            text: x.intl.string(x.t.CekBHq),
                            onClick: v,
                        }),
                    ],
                }),
            }),
    });
}
