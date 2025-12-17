n.d(t, { Z: () => j });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    o = n(239091),
    s = n(129861),
    c = n(138182),
    u = n(956221),
    d = n(747017),
    f = n(140701),
    h = n(545957),
    p = n(158776),
    g = n(652853),
    b = n(981631),
    m = n(671955),
    y = n(580784);
let O = a.EFr.SIZE_40,
    v = (0, a.dcp)(O);
function j(e) {
    let { user: t, status: j, guildId: C, channelId: x, onSelect: E } = e,
        { theme: S, themeType: I } = (0, g.z)(),
        _ = i.useMemo(() => t.isNonUserBot() || (0, f.W)(t, x), [t, x]),
        { activities: P, isMobileOnline: N } = (0, l.cj)([p.Z], () => ({
            activities: p.Z.getActivities(t.id),
            isMobileOnline: p.Z.isMobileOnline(t.id),
        })),
        Z = (0, h.Z)(t.id),
        { voiceActivityStatusEnabled: w } = (0, c.a)({ location: "UserProfileMutualFriendRow" }),
        { voiceChannel: T } = (0, u.Z)({
            userId: w ? t.id : void 0,
            guildId: C,
        });
    return (0, r.jsxs)(a.P3F, {
        focusProps:
            I === m.l.MODAL_V2
                ? {
                      offset: {
                          top: 4,
                          right: 4,
                          left: 4,
                      },
                  }
                : { offset: { right: 8 } },
        className: y.row,
        onClick: E,
        onContextMenu: (e) => {
            (0, o.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e("79695"), n.e("69220"), n.e("26465")]).then(
                    n.bind(n, 881351),
                );
                return (n) => {
                    var i, l;
                    return (0, r.jsx)(
                        e,
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
                        })({}, n)),
                        (l = l = { user: t }),
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
                };
            });
        },
        children: [
            (0, r.jsx)(a.qEK, {
                src: t.getAvatarURL(C, v),
                "aria-label": t.username,
                size: O,
                status: _ ? b.Skl.UNKNOWN : j,
                statusBackdropColor: _ ? void 0 : (0, a.QFD)(S),
                isMobile: N,
                className: y.avatar,
            }),
            (0, r.jsxs)("div", {
                className: y.details,
                children: [
                    (0, r.jsx)(s.Z, {
                        user: t,
                        className: y.tag,
                        discriminatorClass: y.discriminator,
                    }),
                    (0, r.jsx)(d.Z, {
                        user: t,
                        activities: P,
                        applicationStream: Z,
                        voiceChannel: T,
                    }),
                ],
            }),
        ],
    });
}
