n.d(t, { Z: () => l });
var r = n(255367),
    i = n(73800),
    s = n(481060),
    o = n(377171),
    a = n(332173);
let l = i.forwardRef(function (e, t) {
    let { isInventory: n, style: i, children: l } = e;
    return (0, r.jsxs)('div', {
        ref: t,
        className: a.desktopTooltip,
        style: (function (e) {
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
        })({ marginTop: 8 * !!n }, i),
        children: [
            (0, r.jsx)(s.d3s, {
                size: 'custom',
                className: a.infoIcon,
                height: n ? 16 : 12,
                width: n ? 16 : 12,
                color: n ? o.Z.TEXT_MUTED : o.Z.WHITE
            }),
            (0, r.jsx)(s.Text, {
                color: n ? 'text-muted' : 'always-white',
                variant: n ? 'text-xs/normal' : 'text-xxs/normal',
                children: l
            })
        ]
    });
});
