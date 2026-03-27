"use strict";
n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var i = n(993401),
    s = n(784886),
    a = n(985018),
    o = n(886308);
function l(e) {
    let { user: t, hideMessageInput: n, hideExampleButton: l } = e;
    return n
        ? l
            ? null
            : (0, r.jsx)("div", {
                  className: o.qr,
                  children: (0, r.jsx)(i.FD, {
                      variant: "primary",
                      text: a.intl.string(a.t.hZkfwY),
                      onClick: () => {},
                      fullWidth: !0,
                  }),
              })
        : (0, r.jsx)("div", { className: o.qr, inert: !0, children: (0, r.jsx)(s.A, { user: t }) });
}
