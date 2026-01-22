n.d(t, { A: () => j });
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(442433),
    o = n(297413),
    c = n(439547),
    u = n(714114),
    d = n(729551),
    f = n(178418),
    p = n(87664),
    h = n(290863),
    b = n(939496),
    g = n(652215),
    m = n(996988),
    A = n(794904);
let y = a._3J.SIZE_40,
    O = (0, a.FT9)(y);
function j(e) {
    let { user: t, status: j, guildId: v, channelId: x, onSelect: E } = e,
        { theme: _, themeType: C } = (0, b.E)(),
        S = l.useMemo(() => t.isNonUserBot() || (0, f.c)(t, x), [t, x]),
        { activities: I, isMobileOnline: N } = (0, i.cf)([h.A], () => ({
            activities: h.A.getActivities(t.id),
            isMobileOnline: h.A.isMobileOnline(t.id),
        })),
        T = (0, p.A)(t.id),
        { voiceActivityStatusEnabled: P } = (0, c.g)({ location: "UserProfileMutualFriendRow" }),
        { voiceChannel: w } = (0, u.A)({
            userId: P ? t.id : void 0,
            guildId: v,
        });
    return (0, r.jsxs)(a.DUT, {
        focusProps:
            C === m.d.MODAL_V2
                ? {
                      offset: {
                          top: 4,
                          right: 4,
                          left: 4,
                      },
                  }
                : { offset: { right: 8 } },
        className: A.nM,
        onClick: E,
        onContextMenu: (e) => {
            (0, s.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("8893")]).then(
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
                        (i = i = { user: t }),
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
            (0, r.jsx)(a.euF, {
                src: t.getAvatarURL(v, O),
                "aria-label": t.username,
                size: y,
                status: S ? g.clD.UNKNOWN : j,
                statusBackdropColor: S ? void 0 : (0, a.C$5)(_),
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
