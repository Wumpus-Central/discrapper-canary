n.d(t, { Z: () => y }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(704215),
    a = n(952265),
    s = n(481060),
    c = n(243778),
    u = n(434479),
    d = n(703656),
    p = n(819640),
    f = n(933104),
    h = n(981631),
    g = n(176505),
    m = n(921944),
    b = n(470658),
    _ = n(388032),
    O = n(990963);
let y = i.memo(function (e) {
    let { guildId: t, selected: n } = e,
        [y, v] = (0, c.ZT)([o.z.GAME_SERVER_HOSTING_NEW_BADGE], t),
        j = i.useCallback(() => {
            y === o.z.GAME_SERVER_HOSTING_NEW_BADGE && v(m.L.USER_DISMISS),
                (0, d.uL)(h.Z5c.CHANNEL(t, g.oC.GAME_SERVERS));
        }, [t, y, v]),
        x = i.useRef(null),
        C = y === o.z.GAME_SERVER_HOSTING_NEW_BADGE,
        E = (0, a.f9)(),
        S = (0, l.e7)([p.Z], () => p.Z.hasLayers());
    return (0, r.jsx)(s.yRy, {
        targetElementRef: x,
        shouldShow: C && !E && !S,
        nudgeAlignIntoViewport: !0,
        animationPosition: "bottom",
        position: "right",
        renderPopout: () =>
            (0, r.jsx)(f.En, {
                guildId: t,
                markAsDismissed: v,
            }),
        children: (e) => {
            var i, l;
            return (0, r.jsx)(
                u.m,
                ((i = (function (e) {
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
                (l = l =
                    {
                        ref: x,
                        id: "game-server-".concat(t),
                        renderIcon: (e) =>
                            (0, r.jsx)(s.iWm, {
                                size: "md",
                                className: e,
                                color: "currentColor",
                            }),
                        text: _.intl.string(b.default.vCzwM7),
                        selected: n,
                        onClick: j,
                        trailing: C
                            ? (0, r.jsx)(s.IGR, {
                                  disableColor: !0,
                                  text: _.intl.string(_.t.y2b7CA),
                                  className: O.badge,
                              })
                            : null,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                i),
            );
        },
    });
});
