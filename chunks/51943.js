n.d(t, { A: () => g });
var r = n(627968);
n(64700);
var l = n(827734),
    i = n(3026),
    a = n(582754),
    s = n(397927),
    o = n(442433),
    c = n(263063),
    u = n(562153),
    d = n(939496),
    f = n(518477),
    p = n(996988),
    h = n(7319);
let b = (0, s.FT9)(s._3J.SIZE_16);
function g(e) {
    let { user: t, guild: g, nick: m, onSelect: A } = e,
        { theme: y, themeType: O } = (0, d.E)(),
        j = t.hasAvatarForGuild(g.id);
    return (0, r.jsxs)(s.DUT, {
        focusProps:
            O === p.d.MODAL_V2
                ? {
                      offset: {
                          top: 4,
                          right: 4,
                          left: 4,
                      },
                  }
                : { offset: { right: 8 } },
        className: h.nM,
        onClick: A,
        onContextMenu: (e) => {
            (0, o.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("49681"),
                    n.e("68587"),
                    n.e("43600"),
                    n.e("28136"),
                    n.e("63379"),
                    n.e("56026"),
                    n.e("16301"),
                    n.e("22191"),
                    n.e("25961"),
                    n.e("21968"),
                    n.e("35894"),
                    n.e("50796"),
                    n.e("49862"),
                    n.e("8458"),
                    n.e("8018"),
                    n.e("47841"),
                    n.e("59541"),
                    n.e("60989"),
                    n.e("24202"),
                    n.e("94503"),
                    n.e("14360"),
                    n.e("59735"),
                    n.e("54469"),
                    n.e("68605"),
                ]).then(n.bind(n, 544676));
                return (t) => {
                    var n, l;
                    return (0, r.jsx)(
                        e,
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
                        })({}, t)),
                        (l = l = { guild: g }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        n),
                    );
                };
            });
        },
        children: [
            (0, r.jsx)(c.A, {
                tabIndex: -1,
                guild: g,
                showBadge: !0,
                className: null != g.icon ? h.Kk : h.lN,
                badgeStrokeColor: (0, a.Mw)(y) ? l.A.unsafe_rawColors.PRIMARY_600.css : l.A.unsafe_rawColors.WHITE.css,
                badgeTooltipColor: s.oMw.PRIMARY,
                badgeTooltipDelay: f.In,
                size: c.A.Sizes.MEDIUM,
                active: !0,
            }),
            (0, r.jsxs)("div", {
                className: h.zH,
                children: [
                    (0, r.jsx)("div", {
                        className: h.UU,
                        children: g.name,
                    }),
                    j &&
                        (0, r.jsxs)("div", {
                            className: h.C9,
                            children: [
                                (0, r.jsx)(s.euF, {
                                    src: t.getAvatarURL(g.id, b),
                                    size: s._3J.SIZE_16,
                                    className: h.my,
                                    "aria-hidden": !0,
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-xs/medium",
                                    children: (0, r.jsx)(i.A, {
                                        delay: f.In,
                                        children: null != m ? m : u.Ay.getName(g.id, void 0, t),
                                    }),
                                }),
                            ],
                        }),
                    !j &&
                        null != m &&
                        (0, r.jsx)(s.Text, {
                            variant: "text-xs/medium",
                            children: (0, r.jsx)(i.A, {
                                delay: f.In,
                                children: m,
                            }),
                        }),
                ],
            }),
        ],
    });
}
