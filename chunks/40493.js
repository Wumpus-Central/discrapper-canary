"use strict";
n.d(t, { A: () => A });
var i = n(477900),
    r = n(582128),
    a = n(17928),
    s = n(338854),
    l = n(406810),
    o = n(475743),
    d = n(421108),
    c = n(807098),
    u = n(528464),
    _ = n(49999),
    E = n(375708);
function A(e) {
    let { onComplete: t, onCheckItOutClick: n, markAsDismissed: A, coachmarkConfig: h, children: I } = e,
        f = (0, c.T)(h?.asset),
        p = (0, a.bG)([u.A], () => u.A.getGiftPromotion()),
        T = (0, d.dA)(p?.endDate),
        m = null != T,
        g = (0, o.Ay)(m),
        S = r.useRef(null);
    r.useEffect(() => {
        !0 !== g || m || (t(), A(_.i.AUTO_DISMISS));
    }, [g, m, t, A]);
    let N = {
        text: E.intl.string(E.t.RzWDqY),
        onClick: () => {
            n(), t(), A(_.i.TAKE_ACTION);
        },
    };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: S, children: I }),
            (0, i.jsx)(s.H, {
                targetElementRef: S,
                shouldShow: !0,
                position: "top",
                align: "center",
                title: h?.header ?? "",
                body: h?.body ?? "",
                assetUrl: f ?? "",
                badge: null != T ? { type: { text: T.toUpperCase() }, variant: "brand", icon: l.O } : void 0,
                action: N,
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    t(), A(_.i.USER_DISMISS);
                },
            }),
        ],
    });
}
