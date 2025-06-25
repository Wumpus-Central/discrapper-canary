n.d(t, { Z: () => k }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(442837),
    u = n(481060),
    d = n(239091),
    p = n(99690),
    h = n(493773),
    f = n(616780),
    m = n(665149),
    g = n(884902),
    b = n(670188),
    _ = n(271383),
    y = n(496675),
    x = n(158776),
    C = n(471253),
    v = n(431328),
    j = n(145834),
    O = n(590415),
    E = n(614173),
    I = n(618896),
    S = n(231338),
    P = n(388032),
    Z = n(916396);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function T(e, t) {
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
let A = i.memo(function (e) {
        let { toggleRequestToSpeakSidebar: t, chatOpen: n } = e,
            i = (0, r.jsx)(m.ZP.Icon, {
                icon: u.Dio,
                tooltip: P.intl.string(P.t.cpT0Cg),
                onClick: t
            });
        return (0, r.jsxs)(m.ZP, {
            toolbar: i,
            className: a()(Z.headerContainer, { [Z.chatOpen]: n }),
            children: [
                (0, r.jsx)(m.ZP.Icon, {
                    icon: u.V9,
                    disabled: !0,
                    'aria-label': P.intl.string(P.t.TYZgzc)
                }),
                (0, r.jsx)(m.ZP.Title, { children: P.intl.string(P.t.TYZgzc) })
            ]
        });
    }),
    w = i.memo(function (e) {
        let { channel: t, participant: l, tempDisableOnInit: o = !1 } = e,
            m = i.useRef(null),
            [y, v] = i.useState(o);
        (0, h.ZP)(() => {
            if (!y) return;
            let e = setTimeout(() => v(!1), 1000);
            return () => clearTimeout(e);
        });
        let E = t.getGuildId();
        s()(null != E, 'Channel cannot be guildless');
        let { isMobile: I, status: S } = (0, c.cj)([x.Z], () => ({
                isMobile: x.Z.isMobileOnline(l.user.id),
                status: x.Z.getStatus(l.user.id, E)
            })),
            A = (0, c.e7)([_.ZP], () => _.ZP.getMember(E, l.user.id)),
            w = (0, g.X7)(t.guild_id, null == A ? void 0 : A.userId, null == A ? void 0 : A.colorStrings),
            R = i.useMemo(() => ({ [E]: [l.user.id] }), [E, l.user.id]);
        (0, f.$)(R);
        let M = l.rtsState === O.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        function k() {
            (0, C.DT)(t, l.user.id, !1);
        }
        function D() {
            (0, C.DT)(t, l.user.id, !0);
        }
        let L = (e) => {
            (0, d.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        T(N({}, n), {
                            user: l.user,
                            guildId: E,
                            channel: t,
                            showMediaItems: !0
                        })
                    );
            });
        };
        return (0, r.jsxs)('div', {
            className: Z.participantRowContainer,
            children: [
                (0, r.jsx)(b.Z, {
                    targetElementRef: m,
                    user: l.user,
                    guildId: t.guild_id,
                    channelId: t.id,
                    position: 'left',
                    spacing: 16,
                    clickTrap: !0,
                    children: (e) => {
                        var t;
                        return (0, r.jsxs)(
                            u.P3F,
                            T(
                                N(
                                    {
                                        innerRef: m,
                                        className: Z.participantMemberContainer,
                                        onContextMenu: L
                                    },
                                    e
                                ),
                                {
                                    children: [
                                        (0, r.jsx)(p.Z, {
                                            size: u.EFr.SIZE_40,
                                            className: Z.participantAvatar,
                                            user: l.user,
                                            isMobile: I,
                                            status: S
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: Z.participantTextContainer,
                                            children: [
                                                (0, r.jsx)(u.PUh, {
                                                    name: l.userNick,
                                                    color: null != (t = null == A ? void 0 : A.colorString) ? t : void 0,
                                                    roleColors: w,
                                                    className: Z.participantName
                                                }),
                                                (0, r.jsx)(u.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    children: (0, j.$)(l)
                                                })
                                            ]
                                        })
                                    ]
                                }
                            )
                        );
                    }
                }),
                (0, r.jsx)(u.ua7, {
                    text: M ? P.intl.string(P.t.h9rsTU) : P.intl.string(P.t.f0T7hI),
                    children: (e) =>
                        (0, r.jsx)(
                            u.zxk,
                            T(N({}, e), {
                                innerClassName: Z.buttonContainer,
                                look: u.zxk.Looks.BLANK,
                                size: u.zxk.Sizes.NONE,
                                onClick: k,
                                disabled: M || y,
                                children: (0, r.jsx)(u.Lrb, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            })
                        )
                }),
                (0, r.jsx)(u.ua7, {
                    text: P.intl.string(P.t.moABMz),
                    children: (e) =>
                        (0, r.jsx)(
                            u.zxk,
                            T(N({}, e), {
                                innerClassName: a()(Z.buttonContainer, Z.buttonMargin),
                                look: u.zxk.Looks.BLANK,
                                size: u.zxk.Sizes.NONE,
                                onClick: D,
                                children: (0, r.jsx)(u.Dio, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            })
                        )
                })
            ]
        });
    }),
    R = i.memo(function (e) {
        let { channel: t } = e,
            [n, i] = (0, E.h)(t.id);
        return (0, r.jsx)(u.j7V, {
            className: Z.toggle,
            onChange: i,
            value: n,
            children: P.intl.string(P.t.GYCh0d)
        });
    }),
    M = i.memo(function () {
        return (0, r.jsxs)('div', {
            className: Z.emptyStateContainer,
            children: [
                (0, r.jsx)(I.Z, {}),
                (0, r.jsx)(u.Text, {
                    className: Z.emptyStateTitle,
                    variant: 'text-lg/semibold',
                    color: 'header-primary',
                    children: P.intl.string(P.t['7R24mZ'])
                }),
                (0, r.jsx)(u.Text, {
                    className: Z.emptyStateBody,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: P.intl.string(P.t.Rpr2s7)
                })
            ]
        });
    });
function k(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, chatOpen: i } = e,
        l = (0, v.Fd)(t.id),
        o = [+!!(0, c.e7)([y.Z], () => y.Z.can(S.Pl.MANAGE_CHANNELS, t) || y.Z.can(S.Pl.MANAGE_ROLES, t)), Math.max(1, l.length)];
    return (0, r.jsxs)('div', {
        className: a()(Z.container, { [Z.chatOpen]: i }),
        children: [
            (0, r.jsx)(A, {
                toggleRequestToSpeakSidebar: n,
                chatOpen: i
            }),
            (0, r.jsx)(u.aVo, {
                className: Z.contentContainer,
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
                            return (0, r.jsx)(R, { channel: t }, 'rts-toggle');
                        case 1: {
                            if (0 === l.length) return (0, r.jsx)(M, {}, 'participants-empty');
                            let e = l[i];
                            return (0, r.jsx)(
                                w,
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
                              u.Text,
                              {
                                  className: Z.listTitle,
                                  variant: 'text-xs/bold',
                                  color: 'header-secondary',
                                  children: l.length > 0 ? P.intl.formatToPlainString(P.t['5z7q5e'], { numHands: l.length }) : P.intl.string(P.t.TYZgzc)
                              },
                              'participants-section'
                          )
                        : null;
                }
            })
        ]
    });
}
