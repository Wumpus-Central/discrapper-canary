"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    r = n(64700),
    s = n(338854),
    a = n(807098),
    o = n(49999),
    l = n(375708);
function u(e) {
    let { onComplete: t, onCheckItOutClick: n, markAsDismissed: u, coachmarkConfig: c, children: d } = e,
        _ = (0, a.T)(c?.asset),
        h = r.useRef(null),
        f = {
            text: l.intl.string(l.t.RzWDqY),
            onClick: () => {
                n(), t(), u(o.i.TAKE_ACTION);
            },
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: h, children: d }),
            (0, i.jsx)(s.H, {
                targetElementRef: h,
                shouldShow: !0,
                position: "top",
                align: "center",
                title: c?.header ?? "",
                body: c?.body ?? "",
                assetUrl: _ ?? "",
                action: f,
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    t(), u(o.i.USER_DISMISS);
                },
            }),
        ],
    });
}
