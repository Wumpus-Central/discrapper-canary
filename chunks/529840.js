r.d(t, { Z: () => d });
var a = r(255367);
r(73800);
var s = r(120356),
    i = r.n(s),
    n = r(481060),
    l = r(518950),
    o = r(675465);
function d(e) {
    var t;
    let { user: r, checked: s, onChange: d, disabled: C } = e,
        { avatarSrc: c, eventHandlers: u } = (0, l.Z)({
            userId: null == r ? void 0 : r.id,
            size: n.EFr.SIZE_32
        }),
        p = null != (t = r.globalName) ? t : r.username;
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
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (a = a.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        })
                                    )),
                                    a.forEach(function (t) {
                                        var a;
                                        ((a = r[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: a,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = a));
                                    }));
                            }
                            return e;
                        })(
                            {
                                className: i()({ [o.muted]: C }),
                                src: c,
                                'aria-label': p,
                                size: n.EFr.SIZE_32
                            },
                            u
                        )
                    ),
                    (0, a.jsx)(n.Text, {
                        color: C ? 'text-muted' : 'text-default',
                        variant: 'text-md/semibold',
                        children: p
                    })
                ]
            }),
            (0, a.jsx)('div', {
                className: o.checkbox,
                children: (0, a.jsx)(n.XZJ, {
                    disabled: C,
                    value: s,
                    onChange: (e, t) => d(r, t)
                })
            })
        ]
    });
}
