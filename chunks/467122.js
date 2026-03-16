"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    s = n(830382),
    a = n(771887),
    o = n(69494),
    l = n(482132),
    u = n(988912);
function c() {
    let [e, t] = i.useState(!1),
        n = async () => {
            t(!0), await (0, s.lo)();
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.A, {}),
            (0, r.jsx)(l.dZ, { children: (0, r.jsx)(a.$, { className: u.r, isEmailResent: e, resendEmail: n }) }),
            (0, r.jsx)(l.UX, { children: (0, r.jsx)(a.A, {}) }),
        ],
    });
}
