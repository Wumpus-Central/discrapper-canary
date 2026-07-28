"use strict";
n.d(t, { A: () => d });
var i = n(477900),
    r = n(582128),
    a = n(338854),
    s = n(807098),
    l = n(49999),
    o = n(375708);
function d(e) {
    let { onComplete: t, onCheckItOutClick: n, markAsDismissed: d, coachmarkConfig: c, children: u } = e,
        _ = (0, s.T)(c?.asset),
        E = r.useRef(null),
        A = {
            text: o.intl.string(o.t.RzWDqY),
            onClick: () => {
                n(), t(), d(l.i.TAKE_ACTION);
            },
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: E, children: u }),
            (0, i.jsx)(a.H, {
                targetElementRef: E,
                shouldShow: !0,
                position: "top",
                align: "center",
                title: c?.header ?? "",
                body: c?.body ?? "",
                assetUrl: _ ?? "",
                action: A,
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    t(), d(l.i.USER_DISMISS);
                },
            }),
        ],
    });
}
