(n.d(t, { Z: () => k }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(442837),
    u = n(755721),
    d = n(481060),
    p = n(239091),
    h = n(99690),
    f = n(493773),
    m = n(616780),
    g = n(665149),
    b = n(884902),
    _ = n(670188),
    y = n(271383),
    C = n(496675),
    x = n(158776),
    v = n(471253),
    j = n(431328),
    O = n(145834),
    E = n(590415),
    S = n(614173),
    P = n(618896),
    I = n(231338),
    Z = n(388032),
    T = n(916396);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let w = i.memo(function (e) {
        let { toggleRequestToSpeakSidebar: t, chatOpen: n } = e,
            i = (0, r.jsx)(g.ZP.Icon, {
                icon: d.Dio,
                tooltip: Z.intl.string(Z.t.cpT0Cg),
                onClick: t
            });
        return (0, r.jsxs)(g.ZP, {
            toolbar: i,
            className: a()(T.headerContainer, { [T.chatOpen]: n }),
            children: [
                (0, r.jsx)(g.ZP.Icon, {
                    icon: d.V9,
                    disabled: !0,
                    'aria-label': Z.intl.string(Z.t.TYZgzc)
                }),
                (0, r.jsx)(g.ZP.Title, { children: Z.intl.string(Z.t.TYZgzc) })
            ]
        });
    }),
    R = i.memo(function (e) {
        let { channel: t, participant: l, tempDisableOnInit: o = !1 } = e,
            g = i.useRef(null),
            [C, j] = i.useState(o);
        (0, f.ZP)(() => {
            if (!C) return;
            let e = setTimeout(() => j(!1), 1000);
            return () => clearTimeout(e);
        });
        let S = t.getGuildId();
        s()(null != S, 'Channel cannot be guildless');
        let { isMobile: P, status: I } = (0, c.cj)([x.Z], () => ({
                isMobile: x.Z.isMobileOnline(l.user.id),
                status: x.Z.getStatus(l.user.id, S)
            })),
            w = (0, c.e7)([y.ZP], () => y.ZP.getMember(S, l.user.id)),
            R = (0, b.X7)(t.guild_id, null == w ? void 0 : w.userId, null == w ? void 0 : w.colorStrings),
            M = i.useMemo(() => ({ [S]: [l.user.id] }), [S, l.user.id]);
        (0, m.$)(M);
        let D = l.rtsState === E.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        function k() {
            (0, v.DT)(t, l.user.id, !1);
        }
        function L() {
            (0, v.DT)(t, l.user.id, !0);
        }
        let U = (e) => {
            (0, p.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        A(N({}, n), {
                            user: l.user,
                            guildId: S,
                            channel: t,
                            showMediaItems: !0
                        })
                    );
            });
        };
        return (0, r.jsxs)('div', {
            className: T.participantRowContainer,
            children: [
                (0, r.jsx)(_.Z, {
                    targetElementRef: g,
                    user: l.user,
                    guildId: t.guild_id,
                    channelId: t.id,
                    position: 'left',
                    spacing: 16,
                    clickTrap: !0,
                    children: (e) => {
                        var t;
                        return (0, r.jsxs)(
                            d.P3F,
                            A(
                                N(
                                    {
                                        innerRef: g,
                                        className: T.participantMemberContainer,
                                        onContextMenu: U
                                    },
                                    e
                                ),
                                {
                                    children: [
                                        (0, r.jsx)(h.Z, {
                                            size: d.EFr.SIZE_40,
                                            className: T.participantAvatar,
                                            user: l.user,
                                            isMobile: P,
                                            status: I
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: T.participantTextContainer,
                                            children: [
                                                (0, r.jsx)(d.PUh, {
                                                    name: l.userNick,
                                                    color: null != (t = null == w ? void 0 : w.colorString) ? t : void 0,
                                                    roleColors: R,
                                                    className: T.participantName
                                                }),
                                                (0, r.jsx)(d.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    children: (0, O.$)(l)
                                                })
                                            ]
                                        })
                                    ]
                                }
                            )
                        );
                    }
                }),
                (0, r.jsx)(d.ua7, {
                    text: D ? Z.intl.string(Z.t.h9rsTU) : Z.intl.string(Z.t.f0T7hI),
                    children: (e) =>
                        (0, r.jsx)(
                            u.zx,
                            A(N({}, e), {
                                innerClassName: T.buttonContainer,
                                look: u.zx.Looks.BLANK,
                                size: u.zx.Sizes.NONE,
                                onClick: k,
                                disabled: D || C,
                                children: (0, r.jsx)(d.Lrb, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            })
                        )
                }),
                (0, r.jsx)(d.ua7, {
                    text: Z.intl.string(Z.t.moABMz),
                    children: (e) =>
                        (0, r.jsx)(
                            u.zx,
                            A(N({}, e), {
                                innerClassName: a()(T.buttonContainer, T.buttonMargin),
                                look: u.zx.Looks.BLANK,
                                size: u.zx.Sizes.NONE,
                                onClick: L,
                                children: (0, r.jsx)(d.Dio, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            })
                        )
                })
            ]
        });
    }),
    M = i.memo(function (e) {
        let { channel: t } = e,
            [n, i] = (0, S.h)(t.id);
        return (0, r.jsx)(d.j7V, {
            className: T.toggle,
            onChange: i,
            value: n,
            children: Z.intl.string(Z.t.GYCh0d)
        });
    }),
    D = i.memo(function () {
        return (0, r.jsxs)('div', {
            className: T.emptyStateContainer,
            children: [
                (0, r.jsx)(P.Z, {}),
                (0, r.jsx)(d.Text, {
                    className: T.emptyStateTitle,
                    variant: 'text-lg/semibold',
                    color: 'header-primary',
                    children: Z.intl.string(Z.t['7R24mZ'])
                }),
                (0, r.jsx)(d.Text, {
                    className: T.emptyStateBody,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: Z.intl.string(Z.t.Rpr2s7)
                })
            ]
        });
    });
function k(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, chatOpen: i } = e,
        l = (0, j.Fd)(t.id),
        o = [+!!(0, c.e7)([C.Z], () => C.Z.can(I.Pl.MANAGE_CHANNELS, t) || C.Z.can(I.Pl.MANAGE_ROLES, t)), Math.max(1, l.length)];
    return (0, r.jsxs)('div', {
        className: a()(T.container, { [T.chatOpen]: i }),
        children: [
            (0, r.jsx)(w, {
                toggleRequestToSpeakSidebar: n,
                chatOpen: i
            }),
            (0, r.jsx)(d.aVo, {
                className: T.contentContainer,
                sections: o,
                sectionHeight: function (e) {
                    return 40 * (1 === e);
                },
                rowHeight: function (e) {
                    switch (e) {
                        case 0:
                            return 66;
                        case 1:
                            if (0 === l.length) return 178;
                            return 48;
                    }
                    return 0;
                },
                renderRow: function (e) {
                    let { section: n, row: i } = e;
                    switch (n) {
                        case 0:
                            return (0, r.jsx)(M, { channel: t }, 'rts-toggle');
                        case 1: {
                            if (0 === l.length) return (0, r.jsx)(D, {}, 'participants-empty');
                            let e = l[i];
                            return (0, r.jsx)(
                                R,
                                {
                                    channel: t,
                                    participant: e,
                                    tempDisableOnInit: !0
                                },
                                e.id
                            );
                        }
                    }
                    return null;
                },
                renderSection: function (e) {
                    let { section: t } = e;
                    return 1 === t
                        ? (0, r.jsx)(
                              d.Text,
                              {
                                  className: T.listTitle,
                                  variant: 'text-xs/bold',
                                  color: 'header-secondary',
                                  children: l.length > 0 ? Z.intl.formatToPlainString(Z.t['5z7q5e'], { numHands: l.length }) : Z.intl.string(Z.t.TYZgzc)
                              },
                              'participants-section'
                          )
                        : null;
                }
            })
        ]
    });
}
