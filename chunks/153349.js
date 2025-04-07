n.d(t, { Z: () => M }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
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
    C = n(496675),
    y = n(158776),
    x = n(471253),
    v = n(431328),
    j = n(145834),
    O = n(590415),
    E = n(614173),
    N = n(618896),
    I = n(231338),
    S = n(388032),
    P = n(916396);
function Z(e) {
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
                tooltip: S.NW.string(S.t.cpT0Cg),
                onClick: t
            });
        return (0, r.jsxs)(m.ZP, {
            toolbar: i,
            className: o()(P.headerContainer, { [P.chatOpen]: n }),
            children: [
                (0, r.jsx)(m.ZP.Icon, {
                    icon: u.V9,
                    disabled: !0,
                    'aria-label': S.NW.string(S.t.TYZgzc)
                }),
                (0, r.jsx)(m.ZP.Title, { children: S.NW.string(S.t.TYZgzc) })
            ]
        });
    }),
    w = i.memo(function (e) {
        let { channel: t, participant: l, tempDisableOnInit: a = !1 } = e,
            [m, C] = i.useState(a);
        (0, h.ZP)(() => {
            if (!m) return;
            let e = setTimeout(() => C(!1), 1000);
            return () => clearTimeout(e);
        });
        let v = t.getGuildId();
        s()(null != v, 'Channel cannot be guildless');
        let { isMobile: E, status: N } = (0, c.cj)([y.Z], () => ({
                isMobile: y.Z.isMobileOnline(l.user.id),
                status: y.Z.getStatus(l.user.id, v)
            })),
            I = (0, c.e7)([_.ZP], () => _.ZP.getMember(v, l.user.id)),
            A = (0, g.E)(t.guild_id, null == I ? void 0 : I.colorStrings),
            w = i.useMemo(() => ({ [v]: [l.user.id] }), [v, l.user.id]);
        (0, f.$)(w);
        let R = l.rtsState === O.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        function k() {
            (0, x.DT)(t, l.user.id, !1);
        }
        function M() {
            (0, x.DT)(t, l.user.id, !0);
        }
        let L = (e) => {
            (0, d.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        T(Z({}, n), {
                            user: l.user,
                            guildId: v,
                            channel: t,
                            showMediaItems: !0
                        })
                    );
            });
        };
        return (0, r.jsxs)('div', {
            className: P.participantRowContainer,
            children: [
                (0, r.jsx)(b.Z, {
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
                                Z(
                                    {
                                        className: P.participantMemberContainer,
                                        onContextMenu: L
                                    },
                                    e
                                ),
                                {
                                    children: [
                                        (0, r.jsx)(p.Z, {
                                            size: u.EFr.SIZE_40,
                                            className: P.participantAvatar,
                                            user: l.user,
                                            isMobile: E,
                                            status: N
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: P.participantTextContainer,
                                            children: [
                                                (0, r.jsx)(u.PUh, {
                                                    name: l.userNick,
                                                    color: null != (t = null == I ? void 0 : I.colorString) ? t : void 0,
                                                    roleGradient: A,
                                                    className: P.participantName
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
                    text: R ? S.NW.string(S.t.h9rsTU) : S.NW.string(S.t.f0T7hI),
                    children: (e) =>
                        (0, r.jsx)(
                            u.zxk,
                            T(Z({}, e), {
                                innerClassName: P.buttonContainer,
                                look: u.zxk.Looks.BLANK,
                                size: u.zxk.Sizes.NONE,
                                onClick: k,
                                disabled: R || m,
                                children: (0, r.jsx)(u.Lrb, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            })
                        )
                }),
                (0, r.jsx)(u.ua7, {
                    text: S.NW.string(S.t.moABMz),
                    children: (e) =>
                        (0, r.jsx)(
                            u.zxk,
                            T(Z({}, e), {
                                innerClassName: o()(P.buttonContainer, P.buttonMargin),
                                look: u.zxk.Looks.BLANK,
                                size: u.zxk.Sizes.NONE,
                                onClick: M,
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
            className: P.toggle,
            onChange: i,
            value: n,
            children: S.NW.string(S.t.GYCh0d)
        });
    }),
    k = i.memo(function () {
        return (0, r.jsxs)('div', {
            className: P.emptyStateContainer,
            children: [
                (0, r.jsx)(N.Z, {}),
                (0, r.jsx)(u.Text, {
                    className: P.emptyStateTitle,
                    variant: 'text-lg/semibold',
                    color: 'header-primary',
                    children: S.NW.string(S.t['7R24mZ'])
                }),
                (0, r.jsx)(u.Text, {
                    className: P.emptyStateBody,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: S.NW.string(S.t.Rpr2s7)
                })
            ]
        });
    });
function M(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, chatOpen: i } = e,
        l = (0, v.Fd)(t.id),
        a = [+!!(0, c.e7)([C.Z], () => C.Z.can(I.Pl.MANAGE_CHANNELS, t) || C.Z.can(I.Pl.MANAGE_ROLES, t)), Math.max(1, l.length)];
    return (0, r.jsxs)('div', {
        className: o()(P.container, { [P.chatOpen]: i }),
        children: [
            (0, r.jsx)(A, {
                toggleRequestToSpeakSidebar: n,
                chatOpen: i
            }),
            (0, r.jsx)(u.aVo, {
                className: P.contentContainer,
                sections: a,
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
                            if (0 === l.length) return (0, r.jsx)(k, {}, 'participants-empty');
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
                                  className: P.listTitle,
                                  variant: 'text-xs/bold',
                                  color: 'header-secondary',
                                  children: l.length > 0 ? S.NW.formatToPlainString(S.t['5z7q5e'], { numHands: l.length }) : S.NW.string(S.t.TYZgzc)
                              },
                              'participants-section'
                          )
                        : null;
                }
            })
        ]
    });
}
