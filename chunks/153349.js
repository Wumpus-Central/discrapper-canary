n.d(t, { Z: () => L }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(512722),
    o = n.n(s),
    c = n(442837),
    d = n(481060),
    u = n(239091),
    h = n(99690),
    p = n(493773),
    m = n(616780),
    f = n(665149),
    g = n(484459),
    _ = n(347475),
    C = n(271383),
    x = n(496675),
    v = n(158776),
    E = n(471253),
    I = n(431328),
    b = n(145834),
    Z = n(590415),
    N = n(614173),
    T = n(618896),
    S = n(231338),
    j = n(388032),
    A = n(875440);
let y = l.memo(function (e) {
        let { toggleRequestToSpeakSidebar: t, chatOpen: n } = e,
            l = (0, i.jsx)(f.ZP.Icon, {
                icon: d.Dio,
                tooltip: j.intl.string(j.t.cpT0Cg),
                onClick: t
            });
        return (0, i.jsxs)(f.ZP, {
            toolbar: l,
            className: r()(A.headerContainer, { [A.chatOpen]: n }),
            children: [
                (0, i.jsx)(f.ZP.Icon, {
                    icon: d.V9,
                    disabled: !0,
                    'aria-label': j.intl.string(j.t.TYZgzc)
                }),
                (0, i.jsx)(f.ZP.Title, { children: j.intl.string(j.t.TYZgzc) })
            ]
        });
    }),
    P = l.memo(function (e) {
        let { channel: t, participant: a, tempDisableOnInit: s = !1 } = e,
            [f, x] = l.useState(s);
        (0, p.ZP)(() => {
            if (!f) return;
            let e = setTimeout(() => x(!1), 1000);
            return () => clearTimeout(e);
        });
        let I = t.getGuildId();
        o()(null != I, 'Channel cannot be guildless');
        let { isMobile: N, status: T } = (0, c.cj)([v.Z], () => ({
                isMobile: v.Z.isMobileOnline(a.user.id),
                status: v.Z.getStatus(a.user.id, I)
            })),
            S = (0, c.e7)([C.ZP], () => C.ZP.getMember(I, a.user.id)),
            y = l.useMemo(() => ({ [I]: [a.user.id] }), [I, a.user.id]);
        (0, m.$)(y);
        let P = a.rtsState === Z.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        function R() {
            (0, E.DT)(t, a.user.id, !1);
        }
        function M() {
            (0, E.DT)(t, a.user.id, !0);
        }
        let L = (e) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('13125'), n.e('64899')]).then(n.bind(n, 757387));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        user: a.user,
                        guildId: I,
                        channel: t,
                        showMediaItems: !0
                    });
            });
        };
        return (0, i.jsxs)('div', {
            className: A.participantRowContainer,
            children: [
                (0, i.jsx)(d.yRy, {
                    preload: () =>
                        (0, g.Z)(a.user.id, a.user.getAvatarURL(t.guild_id, 80), {
                            guildId: t.guild_id,
                            channelId: t.id
                        }),
                    renderPopout: (e) =>
                        (0, i.jsx)(_.Z, {
                            ...e,
                            userId: a.user.id,
                            guildId: I,
                            channelId: t.id
                        }),
                    position: 'left',
                    spacing: 16,
                    children: (e) => {
                        var t;
                        return (0, i.jsxs)(d.P3F, {
                            className: A.participantMemberContainer,
                            onContextMenu: L,
                            ...e,
                            children: [
                                (0, i.jsx)(h.Z, {
                                    size: d.EFr.SIZE_40,
                                    className: A.participantAvatar,
                                    user: a.user,
                                    isMobile: N,
                                    status: T
                                }),
                                (0, i.jsxs)('div', {
                                    className: A.participantTextContainer,
                                    children: [
                                        (0, i.jsx)(d.PUh, {
                                            name: a.userNick,
                                            color: null !== (t = null == S ? void 0 : S.colorString) && void 0 !== t ? t : void 0,
                                            className: A.participantName
                                        }),
                                        (0, i.jsx)(d.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-secondary',
                                            children: (0, b.$)(a)
                                        })
                                    ]
                                })
                            ]
                        });
                    }
                }),
                (0, i.jsx)(d.ua7, {
                    text: P ? j.intl.string(j.t.h9rsTU) : j.intl.string(j.t.f0T7hI),
                    children: (e) =>
                        (0, i.jsx)(d.zxk, {
                            ...e,
                            innerClassName: A.buttonContainer,
                            look: d.zxk.Looks.BLANK,
                            size: d.zxk.Sizes.NONE,
                            onClick: R,
                            disabled: P || f,
                            children: (0, i.jsx)(d.Lrb, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        })
                }),
                (0, i.jsx)(d.ua7, {
                    text: j.intl.string(j.t.moABMz),
                    children: (e) =>
                        (0, i.jsx)(d.zxk, {
                            ...e,
                            innerClassName: r()(A.buttonContainer, A.buttonMargin),
                            look: d.zxk.Looks.BLANK,
                            size: d.zxk.Sizes.NONE,
                            onClick: M,
                            children: (0, i.jsx)(d.Dio, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        })
                })
            ]
        });
    }),
    R = l.memo(function (e) {
        let { channel: t } = e,
            [n, l] = (0, N.h)(t.id);
        return (0, i.jsx)(d.j7V, {
            className: A.toggle,
            onChange: l,
            value: n,
            children: j.intl.string(j.t.GYCh0d)
        });
    }),
    M = l.memo(function () {
        return (0, i.jsxs)('div', {
            className: A.emptyStateContainer,
            children: [
                (0, i.jsx)(T.Z, {}),
                (0, i.jsx)(d.Text, {
                    className: A.emptyStateTitle,
                    variant: 'text-lg/semibold',
                    color: 'header-primary',
                    children: j.intl.string(j.t['7R24mZ'])
                }),
                (0, i.jsx)(d.Text, {
                    className: A.emptyStateBody,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: j.intl.string(j.t.Rpr2s7)
                })
            ]
        });
    });
function L(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, chatOpen: l } = e,
        a = (0, I.Fd)(t.id),
        s = [(0, c.e7)([x.Z], () => x.Z.can(S.Pl.MANAGE_CHANNELS, t) || x.Z.can(S.Pl.MANAGE_ROLES, t)) ? 1 : 0, Math.max(1, a.length)];
    return (0, i.jsxs)('div', {
        className: r()(A.container, { [A.chatOpen]: l }),
        children: [
            (0, i.jsx)(y, {
                toggleRequestToSpeakSidebar: n,
                chatOpen: l
            }),
            (0, i.jsx)(d.aVo, {
                className: A.contentContainer,
                sections: s,
                sectionHeight: function (e) {
                    return 1 === e ? 40 : 0;
                },
                rowHeight: function (e) {
                    switch (e) {
                        case 0:
                            return 66;
                        case 1:
                            if (0 === a.length) return 178;
                            return 48;
                    }
                    return 0;
                },
                renderRow: function (e) {
                    let { section: n, row: l } = e;
                    switch (n) {
                        case 0:
                            return (0, i.jsx)(R, { channel: t }, 'rts-toggle');
                        case 1: {
                            if (0 === a.length) return (0, i.jsx)(M, {}, 'participants-empty');
                            let e = a[l];
                            return (0, i.jsx)(
                                P,
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
                        ? (0, i.jsx)(
                              d.Text,
                              {
                                  className: A.listTitle,
                                  variant: 'text-xs/bold',
                                  color: 'header-secondary',
                                  children: a.length > 0 ? j.intl.formatToPlainString(j.t['5z7q5e'], { numHands: a.length }) : j.intl.string(j.t.TYZgzc)
                              },
                              'participants-section'
                          )
                        : null;
                }
            })
        ]
    });
}
