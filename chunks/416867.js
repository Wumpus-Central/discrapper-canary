r.d(t, { B: () => h });
var n = r(200651);
r(192379);
var i = r(481060),
    s = r(313201),
    o = r(192635),
    l = r(388032),
    a = r(274970);
function c(e) {
    let { transitionState: t, Icon: r, title: c, body: h, onClose: v } = e,
        u = (0, s.Dt)();
    return (0, n.jsxs)(i.Y0X, {
        className: a.container,
        transitionState: t,
        'aria-labelledby': u,
        children: [
            (0, n.jsxs)(i.hzk, {
                children: [
                    (0, n.jsx)(o.Z, { Icon: r }),
                    (0, n.jsx)(i.LZC, { size: 24 }),
                    (0, n.jsx)(i.X6q, {
                        id: u,
                        className: a.__invalid_title,
                        variant: 'heading-xl/semibold',
                        children: c
                    }),
                    (0, n.jsx)(i.LZC, { size: 8 }),
                    (0, n.jsx)(i.Text, {
                        className: a.body,
                        variant: 'text-sm/normal',
                        children: h
                    })
                ]
            }),
            (0, n.jsx)(i.LZC, { size: 24 }),
            (0, n.jsx)(i.zxk, {
                size: i.zxk.Sizes.MEDIUM,
                grow: !1,
                onClick: v,
                children: l.NW.string(l.t['NX+WJC'])
            })
        ]
    });
}
function h(e) {
    (0, i.h7j)((t) =>
        (0, n.jsx)(
            c,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })
                        )),
                        n.forEach(function (t) {
                            var n;
                            (n = r[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = n);
                        });
                }
                return e;
            })({}, t, e)
        )
    );
}
