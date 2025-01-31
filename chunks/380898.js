n.d(t, { Z: () => c }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(16084),
    s = n(86040),
    o = n(51499),
    l = n(614277),
    u = n(282544);
function c() {
    let [e, t] = r.useState(!1),
        n = async () => {
            t(!0), await (0, a.xA)();
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.Z, {}),
            (0, i.jsx)(l.C3, {
                children: (0, i.jsx)(s.C, {
                    className: u.body,
                    isEmailResent: e,
                    resendEmail: n
                })
            }),
            (0, i.jsx)(l.O3, { children: (0, i.jsx)(s.N, {}) })
        ]
    });
}
