s.d(t, { B: () => u });
var r = s(200651);
s(192379);
var n = s(481060),
    i = s(313201),
    o = s(192635),
    l = s(388032),
    a = s(274970);
function c(e) {
    let { transitionState: t, Icon: s, title: c, body: u, onClose: d } = e,
        p = (0, i.Dt)();
    return (0, r.jsxs)(n.Y0X, {
        className: a.container,
        transitionState: t,
        'aria-labelledby': p,
        children: [
            (0, r.jsxs)(n.hzk, {
                children: [
                    (0, r.jsx)(o.Z, { Icon: s }),
                    (0, r.jsx)(n.LZC, { size: 24 }),
                    (0, r.jsx)(n.X6q, {
                        id: p,
                        className: a.__invalid_title,
                        variant: 'heading-xl/semibold',
                        children: c
                    }),
                    (0, r.jsx)(n.LZC, { size: 8 }),
                    (0, r.jsx)(n.Text, {
                        className: a.body,
                        variant: 'text-sm/normal',
                        children: u
                    })
                ]
            }),
            (0, r.jsx)(n.LZC, { size: 24 }),
            (0, r.jsx)(n.zxk, {
                size: n.zxk.Sizes.MEDIUM,
                grow: !1,
                onClick: d,
                children: l.NW.string(l.t['NX+WJC'])
            })
        ]
    });
}
function u(e) {
    (0, n.h7j)((t) =>
        (0, r.jsx)(
            c,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(s);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(s).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(s, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = s[t]),
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
