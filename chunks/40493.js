t.d(n, { A: () => p });
var i = t(477900),
    l = t(582128),
    a = t(17928),
    r = t(206248),
    o = t(597770),
    s = t(406810),
    c = t(475743),
    u = t(421108),
    d = t(807098),
    g = t(412260),
    C = t(860300),
    f = t(49999),
    m = t(375708);
function p(e) {
    let { onComplete: n, onCheckItOutClick: t, markAsDismissed: p, coachmarkConfig: A, children: b } = e,
        h = (0, d.T)(A?.asset),
        { enabled: I } = C.J.useConfig({ location: "GiftPromotionPopout" }),
        T = (0, a.bG)([g.A], () => g.A.getGiftPromotion()),
        N = (0, u.dA)(T?.endDate),
        k = null != N,
        j = (0, c.Ay)(k),
        x = l.useRef(null);
    l.useEffect(() => {
        !0 !== j || k || (n(), p(f.i.AUTO_DISMISS));
    }, [j, k, n, p]);
    let y = {
        text: m.intl.string(m.t.Ve9Ge6),
        icon: o.GiftIcon,
        onClick: () => {
            (t(), n(), p(f.i.TAKE_ACTION));
        },
    };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: x, children: b }),
            (0, i.jsx)(r.H, {
                targetElementRef: x,
                shouldShow: !0,
                disableMediaViewer: !0,
                position: "top",
                align: "center",
                title: A?.header ?? "",
                body: A?.body ?? "",
                assetUrl: h ?? "",
                badge:
                    I && null != N ? { type: { text: N.toUpperCase() }, variant: "brand", icon: s.ClockIcon } : void 0,
                action: y,
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    (n(), p(f.i.USER_DISMISS));
                },
            }),
        ],
    });
}
