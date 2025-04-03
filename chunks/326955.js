n.d(t, { Z: () => b });
var r = n(200651),
    s = n(192379),
    o = n(442837),
    a = n(359013),
    i = n(120421),
    c = n(702319),
    l = n(763283),
    u = n(944548),
    d = n(477839),
    f = n(622802),
    p = n(388032),
    m = n(18536);
let g = (e) => {
    let { id: t } = e,
        n = (0, d.w2)()[t],
        s = (0, a.Tw)(t);
    return (0, r.jsx)(
        u.Z,
        {
            borderColor: 'red',
            text: (0, r.jsxs)('div', {
                className: m.tooltipContent,
                children: [
                    (0, r.jsx)(l.Z, {
                        variant: 'text-sm/normal',
                        children: n.name.toLocaleLowerCase()
                    }),
                    (0, r.jsx)(l.Z, {
                        variant: 'text-sm/normal',
                        className: m.tooltipCounter,
                        children: p.NW.format(f.Z.VN4aTU, {
                            points: Math.abs(s),
                            grassIconHook: c.Z
                        })
                    })
                ]
            }),
            'aria-label': n.name,
            tooltipClassName: m.tooltip,
            spacing: -16,
            position: 'bottom',
            children: (e) =>
                (0, r.jsx)(
                    'img',
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
                    })(
                        {
                            src: n.purchaseIconSrc,
                            alt: '',
                            className: m.debuff
                        },
                        e
                    )
                )
        },
        t
    );
};
function b() {
    let e = (0, o.e7)([i.Z], () => i.Z.purchasedItems),
        t = (0, s.useMemo)(() => d.ZJ.filter((t) => null != e[t.id] && (null == t.neutralizerId || !i.Z.hasPurchasedUpgrade(t.id, t.neutralizerId))), [e]);
    return (0, r.jsx)('div', {
        className: m.container,
        children: t.map((e) => (0, r.jsx)(g, { id: e.id }, e.id))
    });
}
