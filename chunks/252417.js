r.d(t, { Z: () => h });
var n = r(951288),
    i = r(647438),
    a = r(442837),
    l = r(481060),
    o = r(239091),
    s = r(129861),
    c = r(138182),
    u = r(956221),
    d = r(747017),
    m = r(140701),
    p = r(545957),
    b = r(158776),
    f = r(652853),
    j = r(981631),
    v = r(671955),
    x = r(777267);
let y = l.EFr.SIZE_40,
    O = (0, l.pxk)(y);
function h(e) {
    let { user: t, status: h, guildId: g, channelId: P, onSelect: w } = e,
        { theme: Z, themeType: N } = (0, f.z)(),
        S = i.useMemo(() => t.isNonUserBot() || (0, m.W)(t, P), [t, P]),
        { activities: k, isMobileOnline: C } = (0, a.cj)([b.Z], () => ({
            activities: b.Z.getActivities(t.id),
            isMobileOnline: b.Z.isMobileOnline(t.id),
        })),
        E = (0, p.Z)(t.id),
        { voiceActivityStatusEnabled: M } = (0, c.a)({ location: "UserProfileMutualFriendRow" }),
        { voiceChannel: I } = (0, u.Z)({
            userId: M ? t.id : void 0,
            guildId: g,
        });
    return (0, n.jsxs)(l.P3F, {
        focusProps:
            N === v.l.MODAL_V2
                ? {
                      offset: {
                          top: 4,
                          right: 4,
                          left: 4,
                      },
                  }
                : { offset: { right: 8 } },
        className: x.row,
        onClick: w,
        onContextMenu: (e) => {
            (0, o.jW)(e, async () => {
                let { default: e } = await Promise.all([r.e("79695"), r.e("69220")]).then(r.bind(r, 881351));
                return (r) => {
                    var i, a;
                    return (0, n.jsx)(
                        e,
                        ((i = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        }),
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        (n = r[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = n);
                                    });
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
                        i),
                    );
                };
            });
        },
        children: [
            (0, n.jsx)(l.qEK, {
                src: t.getAvatarURL(g, O),
                "aria-label": t.username,
                size: y,
                status: S ? j.Skl.UNKNOWN : h,
                statusBackdropColor: S ? void 0 : (0, l.QFD)(Z),
                isMobile: C,
                className: x.avatar,
            }),
            (0, n.jsxs)("div", {
                className: x.details,
                children: [
                    (0, n.jsx)(s.Z, {
                        user: t,
                        className: x.tag,
                        discriminatorClass: x.discriminator,
                    }),
                    (0, n.jsx)(d.Z, {
                        user: t,
                        activities: k,
                        applicationStream: E,
                        voiceChannel: I,
                    }),
                ],
            }),
        ],
    });
}
