r.d(t, { Z: () => C });
var a = r(200651);
r(192379);
var s = r(120356),
    i = r.n(s),
    n = r(481060),
    l = r(518950),
    o = r(675465);
function C(e) {
    var t;
    let { user: r, checked: s, onChange: C, disabled: d } = e,
        { avatarSrc: c, eventHandlers: x } = (0, l.Z)({
            user: r,
            size: n.EFr.SIZE_32
        }),
        f = null != (t = r.globalName) ? t : r.username;
    return (0, a.jsxs)('div', {
        className: o.container,
        children: [
            (0, a.jsxs)('div', {
                className: o.user,
                children: [
                    (0, a.jsx)(
                        n.qEK,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    a = Object.keys(r);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (a = a.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        })
                                    )),
                                    a.forEach(function (t) {
                                        var a;
                                        (a = r[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: a,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = a);
                                    });
                            }
                            return e;
                        })(
                            {
                                className: i()({ [o.muted]: d }),
                                src: c,
                                'aria-label': f,
                                size: n.EFr.SIZE_32
                            },
                            x
                        )
                    ),
                    (0, a.jsx)(n.Text, {
                        color: d ? 'text-muted' : 'text-normal',
                        variant: 'text-md/semibold',
                        children: f
                    })
                ]
            }),
            (0, a.jsx)('div', {
                className: o.checkbox,
                children: (0, a.jsx)(n.XZJ, {
                    disabled: d,
                    value: s,
                    onChange: (e, t) => C(r, t)
                })
            })
        ]
    });
}
