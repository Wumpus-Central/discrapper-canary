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
    p = r(158776),
    j = r(652853),
    f = r(981631),
    x = r(711659);
let v = a.EFr.SIZE_40,
    y = (0, a.pxk)(v);
function O(e) {
    let { user: t, status: O, guildId: h, channelId: g, onSelect: P } = e,
        { theme: w } = (0, j.z)(),
        Z = i.useMemo(() => t.isNonUserBot() || (0, m.W)(t, g), [t, g]),
        { activities: N, isMobileOnline: S } = (0, l.cj)([p.Z], () => ({
            activities: p.Z.getActivities(t.id),
            isMobileOnline: p.Z.isMobileOnline(t.id)
        })),
        k = (0, b.Z)(t.id),
        { voiceActivityStatusEnabled: C } = (0, c.a)({ location: 'UserProfileMutualFriendRow' }),
        { voiceChannel: E } = (0, u.Z)({
            userId: C ? t.id : void 0,
            guildId: h
        });
    return (0, n.jsxs)(a.P3F, {
        focusProps: { offset: { right: 8 } },
        className: x.row,
        onClick: P,
        onContextMenu: (e) => {
            (0, s.jW)(e, async () => {
                let { default: e } = await Promise.all([r.e('26881'), r.e('69220'), r.e('79075')]).then(r.bind(r, 881351));
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
                src: t.getAvatarURL(h, y),
                'aria-label': t.username,
                size: v,
                status: Z ? f.Skl.UNKNOWN : O,
                statusBackdropColor: Z ? void 0 : (0, a.QFD)(w),
                isMobile: S,
                className: x.avatar
            }),
            (0, n.jsxs)('div', {
                className: x.details,
                children: [
                    (0, n.jsx)(o.Z, {
                        user: t,
                        className: x.tag,
                        discriminatorClass: x.discriminator
                    }),
                    (0, n.jsx)(d.Z, {
                        user: t,
                        activities: N,
                        applicationStream: k,
                        voiceChannel: E
                    })
                ]
            })
        ]
    });
}
