r.d(t, { Z: () => O });
var n = r(255367),
    i = r(73800),
    l = r(442837),
    a = r(481060),
    s = r(239091),
    o = r(129861),
    c = r(138182),
    u = r(956221),
    d = r(747017),
    m = r(140701),
    b = r(545957),
    x = r(158776),
    j = r(652853),
    p = r(228168),
    f = r(981631),
    v = r(968823);
let h = a.EFr.SIZE_40,
    y = (0, a.pxk)(h);
function O(e) {
    let { user: t, status: O, guildId: g, channelId: P, onSelect: w } = e,
        { theme: N, themeType: Z } = (0, j.z)(),
        S = i.useMemo(() => t.isNonUserBot() || (0, m.W)(t, P), [t, P]),
        { activities: C, isMobileOnline: k } = (0, l.cj)([x.Z], () => ({
            activities: x.Z.getActivities(t.id),
            isMobileOnline: x.Z.isMobileOnline(t.id)
        })),
        E = (0, b.Z)(t.id),
        { voiceActivityStatusEnabled: M } = (0, c.a)({ location: 'UserProfileMutualFriendRow' }),
        { voiceChannel: I } = (0, u.Z)({
            userId: M ? t.id : void 0,
            guildId: g
        });
    return (0, n.jsxs)(a.P3F, {
        focusProps:
            Z === p.lY.MODAL_V2
                ? {
                      offset: {
                          top: 4,
                          right: 4,
                          left: 4
                      }
                  }
                : { offset: { right: 8 } },
        className: v.row,
        onClick: w,
        onContextMenu: (e) => {
            (0, s.jW)(e, async () => {
                let { default: e } = await Promise.all([r.e('70274'), r.e('79695'), r.e('69220'), r.e('70686')]).then(r.bind(r, 881351));
                return (r) => {
                    var i, l;
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
                        (l = l = { user: t }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var r = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      r.push.apply(r, n);
                                  }
                                  return r;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        i)
                    );
                };
            });
        },
        children: [
            (0, n.jsx)(a.qEK, {
                src: t.getAvatarURL(g, y),
                'aria-label': t.username,
                size: h,
                status: S ? f.Skl.UNKNOWN : O,
                statusBackdropColor: S ? void 0 : (0, a.QFD)(N),
                isMobile: k,
                className: v.avatar
            }),
            (0, n.jsxs)('div', {
                className: v.details,
                children: [
                    (0, n.jsx)(o.Z, {
                        user: t,
                        className: v.tag,
                        discriminatorClass: v.discriminator
                    }),
                    (0, n.jsx)(d.Z, {
                        user: t,
                        activities: C,
                        applicationStream: E,
                        voiceChannel: I
                    })
                ]
            })
        ]
    });
}
