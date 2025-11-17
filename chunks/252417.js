n.d(t, { Z: () => v });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    o = n(481060),
    a = n(239091),
    s = n(129861),
    c = n(138182),
    u = n(956221),
    d = n(747017),
    p = n(140701),
    f = n(545957),
    h = n(158776),
    g = n(652853),
    m = n(981631),
    b = n(671955),
    _ = n(777267);
let y = o.EFr.SIZE_40,
    O = (0, o.pxk)(y);
function v(e) {
    let { user: t, status: v, guildId: j, channelId: x, onSelect: C } = e,
        { theme: E, themeType: S } = (0, g.z)(),
        I = i.useMemo(() => t.isNonUserBot() || (0, p.W)(t, x), [t, x]),
        { activities: P, isMobileOnline: N } = (0, l.cj)([h.Z], () => ({
            activities: h.Z.getActivities(t.id),
            isMobileOnline: h.Z.isMobileOnline(t.id),
        })),
        Z = (0, f.Z)(t.id),
        { voiceActivityStatusEnabled: w } = (0, c.a)({ location: "UserProfileMutualFriendRow" }),
        { voiceChannel: T } = (0, u.Z)({
            userId: w ? t.id : void 0,
            guildId: j,
        });
    return (0, r.jsxs)(o.P3F, {
        focusProps:
            S === b.l.MODAL_V2
                ? {
                      offset: {
                          top: 4,
                          right: 4,
                          left: 4,
                      },
                  }
                : { offset: { right: 8 } },
        className: _.row,
        onClick: C,
        onContextMenu: (e) => {
            (0, a.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e("79695"), n.e("69220"), n.e("77635")]).then(
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
            (0, r.jsx)(o.qEK, {
                src: t.getAvatarURL(j, O),
                "aria-label": t.username,
                size: y,
                status: I ? m.Skl.UNKNOWN : v,
                statusBackdropColor: I ? void 0 : (0, o.QFD)(E),
                isMobile: N,
                className: _.avatar,
            }),
            (0, r.jsxs)("div", {
                className: _.details,
                children: [
                    (0, r.jsx)(s.Z, {
                        user: t,
                        className: _.tag,
                        discriminatorClass: _.discriminator,
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
