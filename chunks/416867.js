n.d(t, { B: () => u });
var s = n(200651);
n(192379);
var r = n(481060),
    i = n(313201),
    o = n(192635),
    c = n(388032),
    a = n(135991);
function l(e) {
    let { transitionState: t, Icon: n, title: l, body: u, onClose: d } = e,
        p = (0, i.Dt)();
    return (0, s.jsxs)(r.Y0X, {
        className: a.container,
        transitionState: t,
        'aria-labelledby': p,
        children: [
            (0, s.jsxs)(r.hzk, {
                children: [
                    (0, s.jsx)(o.Z, { Icon: n }),
                    (0, s.jsx)(r.LZC, { size: 24 }),
                    (0, s.jsx)(r.X6q, {
                        id: p,
                        className: a.__invalid_title,
                        variant: 'heading-xl/semibold',
                        children: l
                    }),
                    (0, s.jsx)(r.LZC, { size: 8 }),
                    (0, s.jsx)(r.Text, {
                        className: a.body,
                        variant: 'text-sm/normal',
                        children: u
                    })
                ]
            }),
            (0, s.jsx)(r.LZC, { size: 24 }),
            (0, s.jsx)(r.zxk, {
                size: r.zxk.Sizes.MEDIUM,
                grow: !1,
                onClick: d,
                children: c.NW.string(c.t['NX+WJC'])
            })
        ]
    });
}
function u(e) {
    (0, r.h7j)((t) =>
        (0, s.jsx)(
            l,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        s = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (s = s.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        s.forEach(function (t) {
                            var s;
                            (s = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: s,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = s);
                        });
                }
                return e;
            })({}, t, e)
        )
    );
}
