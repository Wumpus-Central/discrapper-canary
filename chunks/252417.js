r.d(t, { Z: () => x });
var n = r(255367),
    i = r(73800),
    a = r(442837),
    l = r(481060),
    s = r(239091),
    o = r(129861),
    c = r(138182),
    u = r(956221),
    d = r(747017),
    p = r(140701),
    f = r(545957),
    b = r(158776),
    m = r(652853),
    j = r(228168),
    v = r(981631),
    O = r(968823);
let y = l.EFr.SIZE_40,
    g = (0, l.pxk)(y);
function x(e) {
    let { user: t, status: x, guildId: h, channelId: P, onSelect: w } = e,
        { theme: Z, themeType: S } = (0, m.z)(),
        N = i.useMemo(() => t.isNonUserBot() || (0, p.W)(t, P), [t, P]),
        { activities: k, isMobileOnline: E } = (0, a.cj)([b.Z], () => ({
            activities: b.Z.getActivities(t.id),
            isMobileOnline: b.Z.isMobileOnline(t.id)
        })),
        M = (0, f.Z)(t.id),
        { voiceActivityStatusEnabled: C } = (0, c.a)({ location: 'UserProfileMutualFriendRow' }),
        { voiceChannel: D } = (0, u.Z)({
            userId: C ? t.id : void 0,
            guildId: h
        });
    return (0, n.jsxs)(l.P3F, {
        focusProps:
            S === j.lY.MODAL_V2
                ? {
                      offset: {
                          top: 4,
                          right: 4,
                          left: 4
                      }
                  }
                : { offset: { right: 8 } },
        className: O.row,
        onClick: w,
        onContextMenu: (e) => {
            (0, s.jW)(e, async () => {
                let { default: e } = await Promise.all([r.e('79695'), r.e('69220')]).then(r.bind(r, 881351));
                return (r) => {
                    var i, a;
                    return (0, n.jsx)(
                        e,
                        ((i = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        })
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        ((n = r[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = n));
                                    }));
                            }
                            return e;
                        })({}, r)),
                        (a = a = { user: t }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                            : (function (e, t) {
                                  var r = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      r.push.apply(r, n);
                                  }
                                  return r;
                              })(Object(a)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                              }),
                        i)
                    );
                };
            });
        },
        children: [
            (0, n.jsx)(l.qEK, {
                src: t.getAvatarURL(h, g),
                'aria-label': t.username,
                size: y,
                status: N ? v.Skl.UNKNOWN : x,
                statusBackdropColor: N ? void 0 : (0, l.QFD)(Z),
                isMobile: E,
                className: O.avatar
            }),
            (0, n.jsxs)('div', {
                className: O.details,
                children: [
                    (0, n.jsx)(o.Z, {
                        user: t,
                        className: O.tag,
                        discriminatorClass: O.discriminator
                    }),
                    (0, n.jsx)(d.Z, {
                        user: t,
                        activities: k,
                        applicationStream: M,
                        voiceChannel: D
                    })
                ]
            })
        ]
    });
}
