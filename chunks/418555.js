"use strict";
n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var i = n(993401),
    a = n(784886),
    s = n(985018),
    o = n(183959);
function l(e) {
    let { user: t, hideMessageInput: n, hideExampleButton: l } = e;
    return n
        ? l
            ? null
            : (0, r.jsx)("div", {
                  className: o.qr,
                  children: (0, r.jsx)(i.FD, {
                      variant: "primary",
                      text: s.intl.string(s.t.hZkfwY),
                      onClick: () => {},
                      fullWidth: !0,
                  }),
              })
        : (0, r.jsx)("div", { className: o.qr, inert: !0, children: (0, r.jsx)(a.A, { user: t }) });
}
