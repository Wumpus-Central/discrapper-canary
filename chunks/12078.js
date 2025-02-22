n.d(t, { Z: () => g });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(686369),
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
    return (0, r.jsxs)(l.hjN, {
        className: p.section,
        children: [
            (0, r.jsxs)('div', {
                className: p.sectionHeader,
                children: [
                    (0, r.jsx)(l.vwX, { children: u.NW.string(u.t.BSVog4) }),
                    (0, r.jsx)(l.R94, {
                        type: l.geA.DESCRIPTION,
                        children: u.NW.string(u.t['93S9Gx'])
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: m.grid,
                children: d.cb.map((e) => {
                    let { name: n, color: i } = e;
                    return (0, r.jsx)(
                        l.ua7,
                        {
                            text: n,
                            children: (e) => {
                                var c, d;
                                return (0, r.jsx)(
                                    l.P3F,
                                    ((c = (function (e) {
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
                                    (d = d =
                                        {
                                            'aria-label': n,
                                            onClick: s(n, i),
                                            style: { background: (0, o.d)(i) },
                                            className: m.itemContainer,
                                            children: (0, r.jsx)('div', { className: a()({ [m.itemSelected]: (null == t ? void 0 : t.brandColorPrimary) === i }) })
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(d))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(d)).forEach(function (e) {
                                              Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(d, e));
                                          }),
                                    c)
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
