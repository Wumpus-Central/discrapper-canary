"use strict";
n.d(t, { A: () => p });
var l = n(477900),
    i = n(582128),
    s = n(17928),
    r = n(338854),
    a = n(597770),
    o = n(406810),
    u = n(475743),
    c = n(421108),
    d = n(807098),
    h = n(412260),
    m = n(49999),
    f = n(375708);
function p(e) {
    let { onComplete: t, onCheckItOutClick: n, markAsDismissed: p, coachmarkConfig: g, children: x } = e,
        A = (0, d.T)(g?.asset),
        E = (0, s.bG)([h.A], () => h.A.getGiftPromotion()),
        C = (0, c.dA)(E?.endDate),
        I = null != C,
        y = (0, u.Ay)(I),
        S = i.useRef(null);
    i.useEffect(() => {
        !0 !== y || I || (t(), p(m.i.AUTO_DISMISS));
    }, [y, I, t, p]);
    let N = {
        text: f.intl.string(f.t.Ve9Ge6),
        icon: a.GiftIcon,
        onClick: () => {
            n(), t(), p(m.i.TAKE_ACTION);
        },
    };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { ref: S, children: x }),
            (0, l.jsx)(r.H, {
                targetElementRef: S,
                shouldShow: !0,
                disableMediaViewer: !0,
                position: "top",
                align: "center",
                title: g?.header ?? "",
                body: g?.body ?? "",
                assetUrl: A ?? "",
                badge: null != C ? { type: { text: C.toUpperCase() }, variant: "brand", icon: o.ClockIcon } : void 0,
                action: N,
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    t(), p(m.i.USER_DISMISS);
                },
            }),
        ],
    });
}
