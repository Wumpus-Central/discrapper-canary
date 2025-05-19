n.d(t, { B: () => u });
var r = n(255367);
n(73800);
var i = n(481060),
    s = n(313201),
    o = n(192635),
    a = n(388032),
    l = n(274970);
function c(e) {
    let { transitionState: t, Icon: n, title: c, body: u, onClose: d } = e,
        p = (0, s.Dt)();
    return (0, r.jsxs)(i.Y0X, {
        className: l.container,
        transitionState: t,
        'aria-labelledby': p,
        children: [
            (0, r.jsxs)(i.hzk, {
                children: [
                    (0, r.jsx)(o.Z, { Icon: n }),
                    (0, r.jsx)(i.LZC, { size: 24 }),
                    (0, r.jsx)(i.X6q, {
                        id: p,
                        className: l.__invalid_title,
                        variant: 'heading-xl/semibold',
                        children: c
                    }),
                    (0, r.jsx)(i.LZC, { size: 8 }),
                    (0, r.jsx)(i.Text, {
                        className: l.body,
                        variant: 'text-sm/normal',
                        children: u
                    })
                ]
            }),
            (0, r.jsx)(i.LZC, { size: 24 }),
            (0, r.jsx)(i.zxk, {
                size: i.zxk.Sizes.MEDIUM,
                grow: !1,
                onClick: d,
                children: a.intl.string(a.t['NX+WJC'])
            })
        ]
    });
}
function u(e) {
    (0, i.h7j)((t) =>
        (0, r.jsx)(
            c,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, t, e)
        )
    );
}
