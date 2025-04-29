r.d(t, { Z: () => h });
var n = r(200651),
    i = r(192379),
    l = r(442837),
    s = r(481060),
    a = r(239091),
    o = r(129861),
    c = r(138182),
    u = r(956221),
    d = r(747017),
    m = r(140701),
    p = r(545957),
    b = r(158776),
    f = r(652853),
    j = r(981631),
    v = r(968823);
let x = s.EFr.SIZE_40,
    g = (0, s.pxk)(x);
function h(e) {
    let { user: t, status: h, guildId: y, channelId: O, onSelect: P } = e,
        { theme: N } = (0, f.z)(),
        w = i.useMemo(() => t.isNonUserBot() || (0, m.W)(t, O), [t, O]),
        { activities: Z, isMobileOnline: S } = (0, l.cj)([b.Z], () => ({
            activities: b.Z.getActivities(t.id),
            isMobileOnline: b.Z.isMobileOnline(t.id)
        })),
        k = (0, p.Z)(t.id),
        { voiceActivityStatusEnabled: C } = (0, c.a)({ location: 'UserProfileMutualFriendRow' }),
        { voiceChannel: E } = (0, u.Z)({
            userId: C ? t.id : void 0,
            guildId: y
        });
    return (0, n.jsxs)(s.P3F, {
        focusProps: { offset: { right: 8 } },
        className: v.row,
        onClick: P,
        onContextMenu: (e) => {
            (0, a.jW)(e, async () => {
                let { default: e } = await Promise.all([r.e('79695'), r.e('69220'), r.e('70686')]).then(r.bind(r, 881351));
                return (r) => {
                    var i, l;
                    return (0, n.jsx)(
                        e,
                        ((i = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        })
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        (n = r[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = n);
                                    });
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
            (0, n.jsx)(s.qEK, {
                src: t.getAvatarURL(y, g),
                'aria-label': t.username,
                size: x,
                status: w ? j.Skl.UNKNOWN : h,
                statusBackdropColor: w ? void 0 : (0, s.QFD)(N),
                isMobile: S,
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
                        activities: Z,
                        applicationStream: k,
                        voiceChannel: E
                    })
                ]
            })
        ]
    });
}
