n.d(t, { A: () => g });
var l = n(477900),
    i = n(582128),
    s = n(17928),
    r = n(206248),
    a = n(597770),
    o = n(406810),
    u = n(475743),
    c = n(421108),
    d = n(807098),
    m = n(412260),
    h = n(860300),
    p = n(49999),
    f = n(375708);
function g(e) {
    let { onComplete: t, onCheckItOutClick: n, markAsDismissed: g, coachmarkConfig: x, children: A } = e,
        C = (0, d.T)(x?.asset),
        { enabled: E } = h.J.useConfig({ location: "GiftPromotionPopout" }),
        I = (0, s.bG)([m.A], () => m.A.getGiftPromotion()),
        y = (0, c.dA)(I?.endDate),
        S = null != y,
        v = (0, u.Ay)(S),
        N = i.useRef(null);
    i.useEffect(() => {
        !0 !== v || S || (t(), g(p.i.AUTO_DISMISS));
    }, [v, S, t, g]);
    let _ = {
        text: f.intl.string(f.t.Ve9Ge6),
        icon: a.GiftIcon,
        onClick: () => {
            (n(), t(), g(p.i.TAKE_ACTION));
        },
    };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { ref: N, children: A }),
            (0, l.jsx)(r.H, {
                targetElementRef: N,
                shouldShow: !0,
                disableMediaViewer: !0,
                position: "top",
                align: "center",
                title: x?.header ?? "",
                body: x?.body ?? "",
                assetUrl: C ?? "",
                badge:
                    E && null != y ? { type: { text: y.toUpperCase() }, variant: "brand", icon: o.ClockIcon } : void 0,
                action: _,
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    (t(), g(p.i.USER_DISMISS));
                },
            }),
        ],
    });
}
