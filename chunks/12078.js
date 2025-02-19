n.d(t, { Z: () => f });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(950104),
    c = n(481060),
    d = n(434404),
    u = n(999382),
    m = n(570911),
    p = n(388032),
    g = n(39205),
    h = n(541946);
function f(e) {
    let { guild: t } = e,
        n = t.id,
        s = (0, l.e7)([u.Z], () => u.Z.getGuildProfile()),
        f = i.useCallback(
            (e, t) => () => {
                d.Z.updateGuildProfile(n, { brandColorPrimary: t });
            },
            [n]
        );
    return (0, r.jsxs)(c.hjN, {
        className: h.section,
        children: [
            (0, r.jsxs)('div', {
                className: h.sectionHeader,
                children: [
                    (0, r.jsx)(c.vwX, { children: p.NW.string(p.t.BSVog4) }),
                    (0, r.jsx)(c.R94, {
                        type: c.geA.DESCRIPTION,
                        children: p.NW.string(p.t['93S9Gx'])
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: g.grid,
                children: m.cb.map((e) => {
                    let { name: t, color: n } = e,
                        i = (0, o.DT)(n, 1.75),
                        l = 'radial-gradient(105.43% 127.05% at 50.1% 127.05%, '.concat(i, ' 20.65%, ').concat(n, ' 85.16%)');
                    return (0, r.jsx)(
                        c.ua7,
                        {
                            text: t,
                            children: (e) => {
                                var i, o;
                                return (0, r.jsx)(
                                    c.P3F,
                                    ((i = (function (e) {
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
                                    (o = o =
                                        {
                                            'aria-label': t,
                                            onClick: f(t, n),
                                            style: { background: l },
                                            className: g.itemContainer,
                                            children: (0, r.jsx)('div', { className: a()({ [g.itemSelected]: (null == s ? void 0 : s.brandColorPrimary) === n }) })
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(o)).forEach(function (e) {
                                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                                          }),
                                    i)
                                );
                            }
                        },
                        t
                    );
                })
            })
        ]
    });
}
