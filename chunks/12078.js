n.d(t, { Z: () => g });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(950104),
    o = n(481060),
    c = n(434404),
    d = n(570911),
    u = n(388032),
    m = n(39205),
    p = n(541946);
function g(e) {
    let { profile: t } = e,
        n = t.id,
        s = i.useCallback(
            (e, t) => () => {
                c.Z.updateGuildProfile(n, { brandColorPrimary: t });
            },
            [n]
        );
    return (0, r.jsxs)(o.hjN, {
        className: p.section,
        children: [
            (0, r.jsxs)('div', {
                className: p.sectionHeader,
                children: [
                    (0, r.jsx)(o.vwX, { children: u.NW.string(u.t.BSVog4) }),
                    (0, r.jsx)(o.R94, {
                        type: o.geA.DESCRIPTION,
                        children: u.NW.string(u.t['93S9Gx'])
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: m.grid,
                children: d.cb.map((e) => {
                    let { name: n, color: i } = e,
                        c = (0, l.DT)(i, 1.75),
                        d = 'radial-gradient(105.43% 127.05% at 50.1% 127.05%, '.concat(c, ' 20.65%, ').concat(i, ' 85.16%)');
                    return (0, r.jsx)(
                        o.ua7,
                        {
                            text: n,
                            children: (e) => {
                                var l, c;
                                return (0, r.jsx)(
                                    o.P3F,
                                    ((l = (function (e) {
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
                                    })({}, e)),
                                    (c = c =
                                        {
                                            'aria-label': n,
                                            onClick: s(n, i),
                                            style: { background: d },
                                            className: m.itemContainer,
                                            children: (0, r.jsx)('div', { className: a()({ [m.itemSelected]: (null == t ? void 0 : t.brandColorPrimary) === i }) })
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(c))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(c)).forEach(function (e) {
                                              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(c, e));
                                          }),
                                    l)
                                );
                            }
                        },
                        n
                    );
                })
            })
        ]
    });
}
