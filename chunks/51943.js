n.d(t, {
    A: () => m,
});
var r = n(627968);
n(64700);
var l = n(827734),
    i = n(3026),
    s = n(582754),
    a = n(397927),
    o = n(442433),
    c = n(263063),
    u = n(562153),
    d = n(939496),
    p = n(518477),
    h = n(996988),
    f = n(7319);
let g = (0, a.FT9)(a._3J.SIZE_16);

function m(e) {
    let { user: t, guild: m, nick: b, onSelect: A } = e,
        { theme: y, themeType: _ } = (0, d.E)(),
        O = t.hasAvatarForGuild(m.id);
    return (0, r.jsxs)(a.DUT, {
        focusProps:
            _ === h.d.MODAL_V2
                ? {
                      offset: {
                          top: 4,
                          right: 4,
                          left: 4,
                      },
                  }
                : {
                      offset: {
                          right: 8,
                      },
                  },
        className: f.nM,
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
                    n.e("8018"),
                    n.e("21968"),
                    n.e("35894"),
                    n.e("50796"),
                    n.e("8458"),
                    n.e("47841"),
                    n.e("49862"),
                    n.e("60989"),
                    n.e("24202"),
                    n.e("38985"),
                    n.e("36290"),
                    n.e("59541"),
                    n.e("59735"),
                    n.e("54469"),
                    n.e("35686"),
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
                        (l = l =
                            {
                                guild: m,
                            }),
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
                guild: m,
                showBadge: !0,
                className: null != m.icon ? f.Kk : f.lN,
                badgeStrokeColor: (0, s.Mw)(y) ? l.A.unsafe_rawColors.PRIMARY_600.css : l.A.unsafe_rawColors.WHITE.css,
                badgeTooltipColor: a.oMw.PRIMARY,
                badgeTooltipDelay: p.In,
                size: c.A.Sizes.MEDIUM,
                active: !0,
            }),
            (0, r.jsxs)("div", {
                className: f.zH,
                children: [
                    (0, r.jsx)("div", {
                        className: f.UU,
                        children: m.name,
                    }),
                    O &&
                        (0, r.jsxs)("div", {
                            className: f.C9,
                            children: [
                                (0, r.jsx)(a.euF, {
                                    src: t.getAvatarURL(m.id, g),
                                    size: a._3J.SIZE_16,
                                    className: f.my,
                                    "aria-hidden": !0,
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: "text-xs/medium",
                                    children: (0, r.jsx)(i.A, {
                                        delay: p.In,
                                        children: null != b ? b : u.Ay.getName(m.id, void 0, t),
                                    }),
                                }),
                            ],
                        }),
                    !O &&
                        null != b &&
                        (0, r.jsx)(a.Text, {
                            variant: "text-xs/medium",
                            children: (0, r.jsx)(i.A, {
                                delay: p.In,
                                children: b,
                            }),
                        }),
                ],
            }),
        ],
    });
}
