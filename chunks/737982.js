n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(704215),
    o = n(952265),
    a = n(481060),
    s = n(243778),
    c = n(434479),
    u = n(703656),
    d = n(933104),
    p = n(981631),
    h = n(176505),
    f = n(921944),
    g = n(470658),
    m = n(388032),
    b = n(990963);
let _ = i.memo(function (e) {
    let { guildId: t, selected: n } = e,
        _ = (0, o.f9)(),
        [O, y] = (0, s.ZT)([l.z.GAME_SERVER_HOSTING_NEW_BADGE], t),
        v = i.useCallback(() => {
            O === l.z.GAME_SERVER_HOSTING_NEW_BADGE && y(f.L.USER_DISMISS),
                (0, u.uL)(p.Z5c.CHANNEL(t, h.oC.GAME_SERVERS));
        }, [t, O, y]),
        j = i.useRef(null),
        x = O === l.z.GAME_SERVER_HOSTING_NEW_BADGE;
    return (0, r.jsx)(a.yRy, {
        targetElementRef: j,
        shouldShow: x && !_,
        nudgeAlignIntoViewport: !0,
        animationPosition: "bottom",
        position: "right",
        renderPopout: () =>
            (0, r.jsx)(d.En, {
                guildId: t,
                markAsDismissed: y,
            }),
        children: (e) => {
            var i, l;
            return (0, r.jsx)(
                c.m,
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
                        ref: j,
                        id: "game-server-".concat(t),
                        renderIcon: (e) =>
                            (0, r.jsx)(a.iWm, {
                                size: "md",
                                className: e,
                                color: "currentColor",
                            }),
                        text: m.intl.string(g.default.vCzwM7),
                        selected: n,
                        onClick: v,
                        trailing: x
                            ? (0, r.jsx)(a.IGR, {
                                  disableColor: !0,
                                  text: m.intl.string(m.t.y2b7CA),
                                  className: b.badge,
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
