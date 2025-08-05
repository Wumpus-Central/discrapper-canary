(n.d(t, { Z: () => M }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(442837),
    d = n(755721),
    u = n(481060),
    h = n(239091),
    p = n(99690),
    f = n(493773),
    g = n(616780),
    m = n(665149),
    b = n(884902),
    _ = n(670188),
    y = n(271383),
    j = n(496675),
    O = n(158776),
    x = n(471253),
    v = n(431328),
    C = n(145834),
    E = n(590415),
    Z = n(614173),
    I = n(618896),
    S = n(231338),
    P = n(388032),
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
function w(e, t) {
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
let R = i.memo(function (e) {
        let { toggleRequestToSpeakSidebar: t, chatOpen: n } = e,
            i = (0, r.jsx)(m.ZP.Icon, {
                icon: u.Dio,
                tooltip: P.intl.string(P.t.cpT0Cg),
                onClick: t
            });
        return (0, r.jsxs)(m.ZP, {
            toolbar: i,
            className: a()(T.headerContainer, { [T.chatOpen]: n }),
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
    A = i.memo(function (e) {
        var t;
        let { channel: l, participant: s, tempDisableOnInit: m = !1 } = e,
            j = i.useRef(null),
            [v, Z] = i.useState(m);
        (0, f.ZP)(() => {
            if (!v) return;
            let e = setTimeout(() => Z(!1), 1000);
            return () => clearTimeout(e);
        });
        let I = l.getGuildId();
        o()(null != I, 'Channel cannot be guildless');
        let { isMobile: S, status: R } = (0, c.cj)([O.Z], () => ({
                isMobile: O.Z.isMobileOnline(s.user.id),
                status: O.Z.getStatus(s.user.id, I)
            })),
            A = (0, c.e7)([y.ZP], () => y.ZP.getMember(I, s.user.id)),
            D = (0, b.X7)(l.guild_id, null == A ? void 0 : A.userId, null != (t = null == A ? void 0 : A.colorStrings) ? t : null),
            L = i.useMemo(() => ({ [I]: [s.user.id] }), [I, s.user.id]);
        (0, g.$)(L);
        let M = s.rtsState === E.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        function k() {
            (0, x.DT)(l, s.user.id, !1);
        }
        function U() {
            (0, x.DT)(l, s.user.id, !0);
        }
        let G = (e) => {
            (0, h.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('8982'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        w(N({}, t), {
                            user: s.user,
                            guildId: I,
                            channel: l,
                            showMediaItems: !0
                        })
                    );
            });
        };
        return (0, r.jsxs)('div', {
            className: T.participantRowContainer,
            children: [
                (0, r.jsx)(_.Z, {
                    targetElementRef: j,
                    user: s.user,
                    guildId: l.guild_id,
                    channelId: l.id,
                    position: 'left',
                    spacing: 16,
                    clickTrap: !0,
                    children: (e) => {
                        var t;
                        return (0, r.jsxs)(
                            u.P3F,
                            w(
                                N(
                                    {
                                        innerRef: j,
                                        className: T.participantMemberContainer,
                                        onContextMenu: G
                                    },
                                    e
                                ),
                                {
                                    children: [
                                        (0, r.jsx)(p.Z, {
                                            size: u.EFr.SIZE_40,
                                            className: T.participantAvatar,
                                            user: s.user,
                                            isMobile: S,
                                            status: R
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: T.participantTextContainer,
                                            children: [
                                                (0, r.jsx)(u.PUh, {
                                                    name: s.userNick,
                                                    colorString: null != (t = null == A ? void 0 : A.colorString) ? t : null,
                                                    colorStrings: D,
                                                    className: T.participantName
                                                }),
                                                (0, r.jsx)(u.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    children: (0, C.$)(s)
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
                            d.zx,
                            w(N({}, e), {
                                innerClassName: T.buttonContainer,
                                look: d.zx.Looks.BLANK,
                                size: d.zx.Sizes.NONE,
                                onClick: k,
                                disabled: M || v,
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
                            d.zx,
                            w(N({}, e), {
                                innerClassName: a()(T.buttonContainer, T.buttonMargin),
                                look: d.zx.Looks.BLANK,
                                size: d.zx.Sizes.NONE,
                                onClick: U,
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
    D = i.memo(function (e) {
        let { channel: t } = e,
            [n, i] = (0, Z.h)(t.id);
        return (0, r.jsx)(u.j7V, {
            className: T.toggle,
            onChange: i,
            value: n,
            children: P.intl.string(P.t.GYCh0d)
        });
    }),
    L = i.memo(function () {
        return (0, r.jsxs)('div', {
            className: T.emptyStateContainer,
            children: [
                (0, r.jsx)(I.Z, {}),
                (0, r.jsx)(u.Text, {
                    className: T.emptyStateTitle,
                    variant: 'text-lg/semibold',
                    color: 'header-primary',
                    children: P.intl.string(P.t['7R24mZ'])
                }),
                (0, r.jsx)(u.Text, {
                    className: T.emptyStateBody,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: P.intl.string(P.t.Rpr2s7)
                })
            ]
        });
    });
function M(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, chatOpen: i } = e,
        l = (0, v.Fd)(t.id),
        s = [+!!(0, c.e7)([j.Z], () => j.Z.can(S.Pl.MANAGE_CHANNELS, t) || j.Z.can(S.Pl.MANAGE_ROLES, t)), Math.max(1, l.length)];
    return (0, r.jsxs)('div', {
        className: a()(T.container, { [T.chatOpen]: i }),
        children: [
            (0, r.jsx)(R, {
                toggleRequestToSpeakSidebar: n,
                chatOpen: i
            }),
            (0, r.jsx)(u.aVo, {
                className: T.contentContainer,
                sections: s,
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
                            return (0, r.jsx)(D, { channel: t }, 'rts-toggle');
                        case 1: {
                            if (0 === l.length) return (0, r.jsx)(L, {}, 'participants-empty');
                            let e = l[i];
                            return (0, r.jsx)(
                                A,
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
                                  className: T.listTitle,
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
