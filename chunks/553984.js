n.d(t, { p: () => g });
var r = n(951288),
    i = n(120356),
    l = n.n(i),
    o = n(481060),
    a = n(377171),
    s = n(804932),
    c = n(725739),
    u = n(370774),
    d = n(334426),
    p = n(982183),
    h = n(388032),
    f = n(567843);
function g(e) {
    let { className: t } = e,
        n = (0, s.fJ)(),
        i = (0, u.ux)(),
        { selectedFilter: g, setSelectedFilter: m } = (0, c.Z)(),
        b = (0, d.d)((e) => e.setInboxReadState);
    if (!i) return null;
    let O = () => {
            let e = g === p.V5.ALL ? p.V5.BOOKMARKS : p.V5.ALL;
            m(e),
                e === p.V5.ALL && b(!1),
                (0, s.RZ)({
                    section: e,
                    enabled: !0,
                    viewId: n,
                });
        },
        y = g === p.V5.ALL ? h.intl.string(h.t["2pAkDA"]) : h.intl.string(h.t.HcoRu7);
    return (0, r.jsx)(o.ua7, {
        position: "bottom",
        text: y,
        children: (e) => {
            var n, i;
            return (0, r.jsx)(
                o.P3F,
                ((n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, e)),
                (i = i =
                    {
                        className: l()(t, f.headerButton, { [f.enabled]: g === p.V5.BOOKMARKS }),
                        "aria-label": y,
                        onClick: O,
                        children:
                            g === p.V5.BOOKMARKS
                                ? (0, r.jsx)(o.plf, {
                                      size: "xs",
                                      color: a.Z.ICON_DEFAULT,
                                  })
                                : (0, r.jsx)(o.gt9, {
                                      size: "xs",
                                      color: a.Z.ICON_TERTIARY,
                                  }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                n),
            );
        },
    });
}
