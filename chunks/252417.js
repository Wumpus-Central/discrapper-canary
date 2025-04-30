r.d(t, { Z: () => y });
var n = r(200651),
    i = r(192379),
    l = r(442837),
    a = r(481060),
    o = r(239091),
    s = r(129861),
    c = r(138182),
    u = r(956221),
    d = r(747017),
    b = r(140701),
    m = r(545957),
    p = r(158776),
    f = r(652853),
    j = r(981631),
    v = r(968823);
let x = a.EFr.SIZE_40,
    O = (0, a.pxk)(x);
function y(e) {
    let { user: t, status: y, guildId: h, channelId: g, onSelect: P } = e,
        { theme: w } = (0, f.z)(),
        N = i.useMemo(() => t.isNonUserBot() || (0, b.W)(t, g), [t, g]),
        { activities: Z, isMobileOnline: S } = (0, l.cj)([p.Z], () => ({
            activities: p.Z.getActivities(t.id),
            isMobileOnline: p.Z.isMobileOnline(t.id)
        })),
        k = (0, m.Z)(t.id),
        { voiceActivityStatusEnabled: C } = (0, c.a)({ location: 'UserProfileMutualFriendRow' }),
        { voiceChannel: E } = (0, u.Z)({
            userId: C ? t.id : void 0,
            guildId: h
        });
    return (0, n.jsxs)(a.P3F, {
        focusProps: { offset: { right: 8 } },
        className: v.row,
        onClick: P,
        onContextMenu: (e) => {
            (0, o.jW)(e, async () => {
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
            (0, n.jsx)(a.qEK, {
                src: t.getAvatarURL(h, O),
                'aria-label': t.username,
                size: x,
                status: N ? j.Skl.UNKNOWN : y,
                statusBackdropColor: N ? void 0 : (0, a.QFD)(w),
                isMobile: S,
                className: v.avatar
            }),
            (0, n.jsxs)('div', {
                className: v.details,
                children: [
                    (0, n.jsx)(s.Z, {
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
