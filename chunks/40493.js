var i = t(477900),
    l = t(582128),
    a = t(855986),
    r = t(206248),
    o = t(597770),
    s = t(406810),
    u = t(475743),
    c = t(421108),
    d = t(807098),
    f = t(412260),
    C = t(860300),
    g = t(49999),
    m = t(792996);
t.d(
    n,
    {},
    {
        A: function (e) {
            let { onComplete: n, onCheckItOutClick: t, markAsDismissed: A, coachmarkConfig: b, children: h } = e,
                p = (0, d.T)(b?.asset),
                { enabled: I } = C.J.useConfig({ location: "GiftPromotionPopout" }),
                k = (0, a.bG)([f.A], () => f.A.getGiftPromotion()),
                T = (0, c.dA)(k?.endDate),
                N = null != T,
                j = (0, u.Ay)(N),
                x = l.useRef(null);
            l.useEffect(() => {
                !0 !== j || N || (n(), A(g.i.AUTO_DISMISS));
            }, [j, N, n, A]);
            let v = {
                text: m.intl.string(m.t.Ve9Ge6),
                icon: o.GiftIcon,
                onClick: () => {
                    (t(), n(), A(g.i.TAKE_ACTION));
                },
            };
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", { ref: x, children: h }),
                    (0, i.jsx)(r.H, {
                        targetElementRef: x,
                        shouldShow: !0,
                        disableMediaViewer: !0,
                        position: "top",
                        align: "center",
                        title: b?.header ?? "",
                        body: b?.body ?? "",
                        assetUrl: p ?? "",
                        badge:
                            I && null != T
                                ? { type: { text: T.toUpperCase() }, variant: "primary", icon: s.ClockIcon }
                                : void 0,
                        action: v,
                        caretConfig: { align: "center" },
                        onRequestClose: function () {
                            (n(), A(g.i.USER_DISMISS));
                        },
                    }),
                ],
            });
        },
    },
);
