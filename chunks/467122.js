n.d(t, { A: () => c });
var l = n(627968),
    i = n(64700),
    a = n(830382),
    r = n(771887),
    s = n(69494),
    o = n(482132),
    u = n(599961);
function c() {
    let [e, t] = i.useState(!1),
        n = async () => {
            t(!0), await (0, a.lo)();
        };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(s.A, {}),
            (0, l.jsx)(o.dZ, { children: (0, l.jsx)(r.$, { className: u.r, isEmailResent: e, resendEmail: n }) }),
            (0, l.jsx)(o.UX, { children: (0, l.jsx)(r.A, {}) }),
        ],
    });
}
