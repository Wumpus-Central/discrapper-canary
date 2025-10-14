n.d(t, { Z: () => b }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(704215),
    o = n(481060),
    a = n(243778),
    s = n(434479),
    c = n(703656),
    u = n(933104),
    d = n(981631),
    p = n(176505),
    h = n(921944),
    f = n(948208),
    g = n(388032),
    m = n(990963);
let b = i.memo(function (e) {
    let { guildId: t, selected: n } = e,
        [b, _] = (0, a.ZT)([l.z.GAME_SERVER_HOSTING_NEW_BADGE], t),
        O = i.useCallback(() => {
            b === l.z.GAME_SERVER_HOSTING_NEW_BADGE && _(h.L.USER_DISMISS),
                (0, c.uL)(d.Z5c.CHANNEL(t, p.oC.GAME_SERVERS));
        }, [t, b, _]),
        y = i.useRef(null),
        v = b === l.z.GAME_SERVER_HOSTING_NEW_BADGE;
    return (0, r.jsx)(o.yRy, {
        targetElementRef: y,
        shouldShow: v,
        nudgeAlignIntoViewport: !0,
        animationPosition: "bottom",
        position: "right",
        renderPopout: () =>
            (0, r.jsx)(u.En, {
                guildId: t,
                markAsDismissed: _,
            }),
        children: (e) => {
            var i, l;
            return (0, r.jsx)(
                s.m,
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
                        ref: y,
                        id: "game-server-".concat(t),
                        renderIcon: (e) =>
                            (0, r.jsx)(o.iWm, {
                                size: "md",
                                className: e,
                                color: "currentColor",
                            }),
                        text: g.intl.string(f.default.vCzwMz),
                        selected: n,
                        onClick: O,
                        trailing: v
                            ? (0, r.jsx)(o.IGR, {
                                  disableColor: !0,
                                  text: g.intl.string(g.t.y2b7CA),
                                  className: m.badge,
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
