"use strict";
n.d(t, { A: () => f });
var l = n(477900),
    i = n(582128),
    s = n(17928),
    r = n(338854),
    a = n(406810),
    o = n(475743),
    u = n(421108),
    c = n(807098),
    d = n(412260),
    h = n(49999),
    m = n(375708);
function f(e) {
    let { onComplete: t, onCheckItOutClick: n, markAsDismissed: f, coachmarkConfig: p, children: g } = e,
        x = (0, c.T)(p?.asset),
        A = (0, s.bG)([d.A], () => d.A.getGiftPromotion()),
        E = (0, u.dA)(A?.endDate),
        C = null != E,
        I = (0, o.Ay)(C),
        y = i.useRef(null);
    i.useEffect(() => {
        !0 !== I || C || (t(), f(h.i.AUTO_DISMISS));
    }, [I, C, t, f]);
    let S = {
        text: m.intl.string(m.t.RzWDqY),
        onClick: () => {
            n(), t(), f(h.i.TAKE_ACTION);
        },
    };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { ref: y, children: g }),
            (0, l.jsx)(r.H, {
                targetElementRef: y,
                shouldShow: !0,
                position: "top",
                align: "center",
                title: p?.header ?? "",
                body: p?.body ?? "",
                assetUrl: x ?? "",
                badge: null != E ? { type: { text: E.toUpperCase() }, variant: "brand", icon: a.ClockIcon } : void 0,
                action: S,
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    t(), f(h.i.USER_DISMISS);
                },
            }),
        ],
    });
}
