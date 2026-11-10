var i = t(477900),
    l = t(582128),
    a = t(855986),
    r = t(206248),
    o = t(597770),
    s = t(406810),
    u = t(475743),
    c = t(421108),
    d = t(807098),
    A = t(412260),
    C = t(860300),
    _ = t(49999),
    N = t(792996);
t.d(
    n,
    {},
    {
        A: function (e) {
            let { onComplete: n, onCheckItOutClick: t, markAsDismissed: f, coachmarkConfig: g, children: I } = e,
                T = (0, d.T)(g?.asset),
                { enabled: R } = C.J.useConfig({ location: "GiftPromotionPopout" }),
                O = (0, a.bG)([A.A], () => A.A.getGiftPromotion()),
                m = (0, c.dA)(O?.endDate),
                E = null != m,
                M = (0, u.Ay)(E),
                G = l.useRef(null);
            l.useEffect(() => {
                !0 !== M || E || (n(), f(_.i.AUTO_DISMISS));
            }, [M, E, n, f]);
            let b = {
                text: N.intl.string(N.t.Ve9Ge6),
                icon: o.GiftIcon,
                onClick: () => {
                    (t(), n(), f(_.i.TAKE_ACTION));
                },
            };
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", { ref: G, children: I }),
                    (0, i.jsx)(r.H, {
                        targetElementRef: G,
                        shouldShow: !0,
                        disableMediaViewer: !0,
                        position: "top",
                        align: "center",
                        title: g?.header ?? "",
                        body: g?.body ?? "",
                        assetUrl: T ?? "",
                        badge:
                            R && null != m
                                ? { type: { text: m.toUpperCase() }, variant: "primary", icon: s.ClockIcon }
                                : void 0,
                        action: b,
                        caretConfig: { align: "center" },
                        onRequestClose: function () {
                            (n(), f(_.i.USER_DISMISS));
                        },
                    }),
                ],
            });
        },
    },
);
