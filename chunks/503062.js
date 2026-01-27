n.d(t, {
    A: () => O,
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(397927),
    a = n(442433),
    o = n(297413),
    c = n(439547),
    u = n(714114),
    d = n(729551),
    p = n(178418),
    h = n(87664),
    f = n(290863),
    g = n(939496),
    m = n(652215),
    b = n(996988),
    A = n(794904);
let y = s._3J.SIZE_40,
    _ = (0, s.FT9)(y);

function O(e) {
    let { user: t, status: O, guildId: j, channelId: v, onSelect: x } = e,
        { theme: E, themeType: C } = (0, g.E)(),
        S = l.useMemo(() => t.isNonUserBot() || (0, p.c)(t, v), [t, v]),
        { activities: I, isMobileOnline: N } = (0, i.cf)([f.A], () => ({
            activities: f.A.getActivities(t.id),
            isMobileOnline: f.A.isMobileOnline(t.id),
        })),
        T = (0, h.A)(t.id),
        { voiceActivityStatusEnabled: P } = (0, c.g)({
            location: "UserProfileMutualFriendRow",
        }),
        { voiceChannel: w } = (0, u.A)({
            userId: P ? t.id : void 0,
            guildId: j,
        });
    return (0, r.jsxs)(s.DUT, {
        focusProps:
            C === b.d.MODAL_V2
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
        className: A.nM,
        onClick: x,
        onContextMenu: (e) => {
            (0, a.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("3795"), n.e("32418"), n.e("16938")]).then(
                    n.bind(n, 668569),
                );
                return (n) => {
                    var l, i;
                    return (0, r.jsx)(
                        e,
                        ((l = (function (e) {
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
                        })({}, n)),
                        (i = i =
                            {
                                user: t,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        l),
                    );
                };
            });
        },
        children: [
            (0, r.jsx)(s.euF, {
                src: t.getAvatarURL(j, _),
                "aria-label": t.username,
                size: y,
                status: S ? m.clD.UNKNOWN : O,
                statusBackdropColor: S ? void 0 : (0, s.C$5)(E),
                isMobile: N,
                className: A.my,
            }),
            (0, r.jsxs)("div", {
                className: A.zH,
                children: [
                    (0, r.jsx)(o.A, {
                        user: t,
                        className: A.Tc,
                        discriminatorClass: A.D2,
                    }),
                    (0, r.jsx)(d.A, {
                        user: t,
                        activities: I,
                        applicationStream: T,
                        voiceChannel: w,
                    }),
                ],
            }),
        ],
    });
}
