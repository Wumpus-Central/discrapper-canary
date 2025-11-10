n.d(t, { S: () => g });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(593214),
    c = n(981631),
    u = n(388032),
    d = n(448213),
    p = n(132789),
    h = n(78480);
function f() {
    return (0, r.jsx)("div", {
        className: o()(p.row, p.rowGuildName),
        children: (0, r.jsx)("span", {
            className: o()(p.guildNameText, p.guildNameTextLimitedSize, d.tooltipText),
            children: u.intl.string(u.t["4tSWQg"]),
        }),
    });
}
let g = i.memo(function (e) {
    let { "aria-label": t = !1, children: n } = e,
        l = (function () {
            let { favoriteAdded: e, clearFavoriteAdded: t } = (0, s.up)();
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
    return (0, r.jsx)(a.aML, {
        forceOpen: l,
        color: a.r6K.GREEN,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        align: "center",
        text: (0, r.jsx)(f, {}),
        "aria-label": t,
        tooltipClassName: h.listItemTooltip,
        children: (e) => {
            var t, i;
            return (0, r.jsx)(
                "div",
                ((t = (function (e) {
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
                        onMouseEnter: c.dG4,
                        onMouseLeave: c.dG4,
                        children: n,
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
                t),
            );
        },
    });
});
