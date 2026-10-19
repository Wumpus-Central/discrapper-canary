t.d(n, { A: () => A });
var i = t(477900),
    l = t(582128),
    a = t(17928),
    o = t(206248),
    r = t(597770),
    s = t(406810),
    c = t(475743),
    u = t(421108),
    d = t(807098),
    f = t(412260),
    g = t(860300),
    C = t(49999),
    m = t(105292);
function A(e) {
    let { onComplete: n, onCheckItOutClick: t, markAsDismissed: A, coachmarkConfig: p, children: b } = e,
        I = (0, d.T)(p?.asset),
        { enabled: T } = g.J.useConfig({ location: "GiftPromotionPopout" }),
        h = (0, a.bG)([f.A], () => f.A.getGiftPromotion()),
        N = (0, u.dA)(h?.endDate),
        k = null != N,
        j = (0, c.Ay)(k),
        _ = l.useRef(null);
    l.useEffect(() => {
        !0 !== j || k || (n(), A(C.i.AUTO_DISMISS));
    }, [j, k, n, A]);
    let y = {
        text: m.intl.string(m.t.Ve9Ge6),
        icon: r.GiftIcon,
        onClick: () => {
            (t(), n(), A(C.i.TAKE_ACTION));
        },
    };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: _, children: b }),
            (0, i.jsx)(o.H, {
                targetElementRef: _,
                shouldShow: !0,
                disableMediaViewer: !0,
                position: "top",
                align: "center",
                title: p?.header ?? "",
                body: p?.body ?? "",
                assetUrl: I ?? "",
                badge:
                    T && null != N
                        ? { type: { text: N.toUpperCase() }, variant: "primary", icon: s.ClockIcon }
                        : void 0,
                action: y,
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    (n(), A(C.i.USER_DISMISS));
                },
            }),
        ],
    });
}
