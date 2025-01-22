r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(16084),
    l = r(86040),
    u = r(51499),
    c = r(614277),
    d = r(282544);
function f() {
    let [e, n] = o.useState(!1),
        r = async () => {
            n(!0), await (0, s.xA)();
        };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(u.Z, {}),
            (0, a.jsx)(c.C3, {
                children: (0, a.jsx)(l.C, {
                    className: d.body,
                    isEmailResent: e,
                    resendEmail: r
                })
            }),
            (0, a.jsx)(c.O3, { children: (0, a.jsx)(l.N, {}) })
        ]
    });
}
