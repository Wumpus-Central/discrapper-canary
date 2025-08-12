n.d(t, { p: () => m });
var r = n(255367),
    i = n(120356),
    l = n.n(i),
    o = n(481060),
    s = n(377171),
    a = n(804932),
    c = n(725739),
    u = n(370774),
    d = n(334426),
    h = n(982183),
    p = n(388032),
    f = n(603706);
let g = (e) => (e === h.V5.ALL ? p.intl.string(p.t["2pAkDA"]) : p.intl.string(p.t.HcoRu7));
function m(e) {
    let { className: t } = e,
        n = (0, a.fJ)(),
        i = (0, u.ux)(),
        { selectedFilter: p, setSelectedFilter: m } = (0, c.Z)(),
        b = (0, d.d)((e) => e.setInboxReadState);
    if (!i) return null;
    let O = () => {
            let e = p === h.V5.ALL ? h.V5.BOOKMARKS : h.V5.ALL;
            m(e),
                e === h.V5.ALL && b(!1),
                (0, a.RZ)({
                    section: e,
                    enabled: !0,
                    viewId: n,
                });
        },
        _ = g(p);
    return (0, r.jsx)(o.ua7, {
        position: "bottom",
        text: _,
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
                        className: l()(t, f.headerButton, { [f.enabled]: p === h.V5.BOOKMARKS }),
                        "aria-label": _,
                        onClick: O,
                        children:
                            p === h.V5.BOOKMARKS
                                ? (0, r.jsx)(o.plf, {
                                      size: "xs",
                                      color: s.Z.ICON_DEFAULT,
                                  })
                                : (0, r.jsx)(o.gt9, {
                                      size: "xs",
                                      color: s.Z.ICON_TERTIARY,
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
