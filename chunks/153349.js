n.d(t, { Z: () => L }), n(47120);
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
    b = n(484459),
    _ = n(347475),
    C = n(271383),
    y = n(496675),
    x = n(158776),
    v = n(471253),
    j = n(431328),
    O = n(145834),
    E = n(590415),
    N = n(614173),
    I = n(618896),
    P = n(231338),
    S = n(388032),
    Z = n(916396);
function T(e) {
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
            i = (0, r.jsx)(m.ZP.Icon, {
                icon: u.Dio,
                tooltip: S.NW.string(S.t.cpT0Cg),
                onClick: t
            });
        return (0, r.jsxs)(m.ZP, {
            toolbar: i,
            className: o()(Z.headerContainer, { [Z.chatOpen]: n }),
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
    R = i.memo(function (e) {
        let { channel: t, participant: l, tempDisableOnInit: a = !1 } = e,
            [m, y] = i.useState(a);
        (0, h.ZP)(() => {
            if (!m) return;
            let e = setTimeout(() => y(!1), 1000);
            return () => clearTimeout(e);
        });
        let j = t.getGuildId();
        s()(null != j, 'Channel cannot be guildless');
        let { isMobile: N, status: I } = (0, c.cj)([x.Z], () => ({
                isMobile: x.Z.isMobileOnline(l.user.id),
                status: x.Z.getStatus(l.user.id, j)
            })),
            P = (0, c.e7)([C.ZP], () => C.ZP.getMember(j, l.user.id)),
            w = (0, g.E)(t.guild_id, null == P ? void 0 : P.colorStrings),
            R = i.useMemo(() => ({ [j]: [l.user.id] }), [j, l.user.id]);
        (0, f.$)(R);
        let k = l.rtsState === E.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        function M() {
            (0, v.DT)(t, l.user.id, !1);
        }
        function L() {
            (0, v.DT)(t, l.user.id, !0);
        }
        let D = (e) => {
            (0, d.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        A(T({}, n), {
                            user: l.user,
                            guildId: j,
                            channel: t,
                            showMediaItems: !0
                        })
                    );
            });
        };
        return (0, r.jsxs)('div', {
            className: Z.participantRowContainer,
            children: [
                (0, r.jsx)(u.yRy, {
                    preload: () =>
                        (0, b.Z)(l.user.id, l.user.getAvatarURL(t.guild_id, 80), {
                            guildId: t.guild_id,
                            channelId: t.id
                        }),
                    renderPopout: (e) =>
                        (0, r.jsx)(
                            _.Z,
                            A(T({}, e), {
                                userId: l.user.id,
                                guildId: j,
                                channelId: t.id
                            })
                        ),
                    position: 'left',
                    spacing: 16,
                    clickTrap: !0,
                    children: (e) => {
                        var t;
                        return (0, r.jsxs)(
                            u.P3F,
                            A(
                                T(
                                    {
                                        className: Z.participantMemberContainer,
                                        onContextMenu: D
                                    },
                                    e
                                ),
                                {
                                    children: [
                                        (0, r.jsx)(p.Z, {
                                            size: u.EFr.SIZE_40,
                                            className: Z.participantAvatar,
                                            user: l.user,
                                            isMobile: N,
                                            status: I
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: Z.participantTextContainer,
                                            children: [
                                                (0, r.jsx)(u.PUh, {
                                                    name: l.userNick,
                                                    color: null != (t = null == P ? void 0 : P.colorString) ? t : void 0,
                                                    roleGradient: w,
                                                    className: Z.participantName
                                                }),
                                                (0, r.jsx)(u.Text, {
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
                (0, r.jsx)(u.ua7, {
                    text: k ? S.NW.string(S.t.h9rsTU) : S.NW.string(S.t.f0T7hI),
                    children: (e) =>
                        (0, r.jsx)(
                            u.zxk,
                            A(T({}, e), {
                                innerClassName: Z.buttonContainer,
                                look: u.zxk.Looks.BLANK,
                                size: u.zxk.Sizes.NONE,
                                onClick: M,
                                disabled: k || m,
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
                            A(T({}, e), {
                                innerClassName: o()(Z.buttonContainer, Z.buttonMargin),
                                look: u.zxk.Looks.BLANK,
                                size: u.zxk.Sizes.NONE,
                                onClick: L,
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
    k = i.memo(function (e) {
        let { channel: t } = e,
            [n, i] = (0, N.h)(t.id);
        return (0, r.jsx)(u.j7V, {
            className: Z.toggle,
            onChange: i,
            value: n,
            children: S.NW.string(S.t.GYCh0d)
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
                    children: S.NW.string(S.t['7R24mZ'])
                }),
                (0, r.jsx)(u.Text, {
                    className: Z.emptyStateBody,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: S.NW.string(S.t.Rpr2s7)
                })
            ]
        });
    });
function L(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, chatOpen: i } = e,
        l = (0, j.Fd)(t.id),
        a = [+!!(0, c.e7)([y.Z], () => y.Z.can(P.Pl.MANAGE_CHANNELS, t) || y.Z.can(P.Pl.MANAGE_ROLES, t)), Math.max(1, l.length)];
    return (0, r.jsxs)('div', {
        className: o()(Z.container, { [Z.chatOpen]: i }),
        children: [
            (0, r.jsx)(w, {
                toggleRequestToSpeakSidebar: n,
                chatOpen: i
            }),
            (0, r.jsx)(u.aVo, {
                className: Z.contentContainer,
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
                            return (0, r.jsx)(k, { channel: t }, 'rts-toggle');
                        case 1: {
                            if (0 === l.length) return (0, r.jsx)(M, {}, 'participants-empty');
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
                              u.Text,
                              {
                                  className: Z.listTitle,
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
