t.d(n, {
    Z: function () {
        return u;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(16084),
    s = t(86040),
    a = t(51499),
    c = t(614277),
    o = t(282544);
function u() {
    let [e, n] = l.useState(!1),
        t = async () => {
            n(!0), await (0, r.xA)();
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.Z, {}),
            (0, i.jsx)(c.C3, {
                children: (0, i.jsx)(s.C, {
                    className: o.body,
                    isEmailResent: e,
                    resendEmail: t
                })
            }),
            (0, i.jsx)(c.O3, { children: (0, i.jsx)(s.N, {}) })
        ]
    });
}
