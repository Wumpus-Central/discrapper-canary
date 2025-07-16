n.d(t, { B: () => d });
var r = n(255367);
n(73800);
var i = n(755721),
    s = n(481060),
    l = n(313201),
    o = n(192635),
    a = n(388032),
    c = n(274970);
function u(e) {
    let { transitionState: t, Icon: n, title: u, body: d, onClose: f } = e,
        p = (0, l.Dt)();
    return (0, r.jsxs)(s.Y0X, {
        className: c.container,
        transitionState: t,
        'aria-labelledby': p,
        parentComponent: 'ActionCompletedSuccessModal',
        children: [
            (0, r.jsxs)(s.hzk, {
                children: [
                    (0, r.jsx)(o.Z, { Icon: n }),
                    (0, r.jsx)(s.LZC, { size: 24 }),
                    (0, r.jsx)(s.X6q, {
                        id: p,
                        className: c.__invalid_title,
                        variant: 'heading-xl/semibold',
                        children: u
                    }),
                    (0, r.jsx)(s.LZC, { size: 8 }),
                    (0, r.jsx)(s.Text, {
                        className: c.body,
                        variant: 'text-sm/normal',
                        children: d
                    })
                ]
            }),
            (0, r.jsx)(s.LZC, { size: 24 }),
            (0, r.jsx)(i.zx, {
                size: i.zx.Sizes.MEDIUM,
                grow: !1,
                onClick: f,
                children: a.intl.string(a.t['NX+WJC'])
            })
        ]
    });
}
function d(e) {
    (0, s.h7j)((t) =>
        (0, r.jsx)(
            u,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            ((r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r));
                        }));
                }
                return e;
            })({}, t, e)
        )
    );
}
