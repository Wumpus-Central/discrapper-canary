n.d(t, { S: () => m });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(540059),
    c = n(593214),
    u = n(981631),
    d = n(388032),
    p = n(761168),
    h = n(714509),
    f = n(375613);
function g() {
    return (0, r.jsx)('div', {
        className: o()(h.row, h.rowGuildName),
        children: (0, r.jsx)('span', {
            className: o()(h.guildNameText, h.guildNameTextLimitedSize, p.tooltipText),
            children: d.NW.string(d.t['4tSWQk'])
        })
    });
}
let m = i.memo(function (e) {
    let { 'aria-label': t = !1, children: n } = e,
        l = (0, s.Q3)('FavoritesAddedTooltip'),
        o = (function () {
            let { favoriteAdded: e, clearFavoriteAdded: t } = (0, c.up)();
            return (
                i.useEffect(() => {
                    if (e) {
                        let e = setTimeout(() => {
                            t();
                        }, 1500);
                        return () => {
                            t(), clearTimeout(e);
                        };
                    }
                }, [e, t]),
                e
            );
        })();
    return (0, r.jsx)(a.ua7, {
        forceOpen: o,
        color: a.FGA.GREEN,
        hideOnClick: !0,
        spacing: l ? 12 : 20,
        position: 'right',
        align: 'center',
        text: (0, r.jsx)(g, {}),
        'aria-label': t,
        tooltipClassName: f.listItemTooltip,
        children: (e) => {
            var t, i;
            return (0, r.jsx)(
                'div',
                ((t = (function (e) {
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
                (i = i =
                    {
                        onMouseEnter: u.dG4,
                        onMouseLeave: u.dG4,
                        children: n
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                t)
            );
        }
    });
});
