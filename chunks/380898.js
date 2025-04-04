n.d(t, { Z: () => u }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(16084),
    a = n(86040),
    s = n(51499),
    l = n(614277),
    c = n(775486);
function u() {
    let [e, t] = i.useState(!1),
        n = async () => {
            t(!0), await (0, o.xA)();
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.Z, {}),
            (0, r.jsx)(l.C3, {
                children: (0, r.jsx)(a.C, {
                    className: c.body,
                    isEmailResent: e,
                    resendEmail: n
                })
            }),
            (0, r.jsx)(l.O3, { children: (0, r.jsx)(a.N, {}) })
        ]
    });
}
