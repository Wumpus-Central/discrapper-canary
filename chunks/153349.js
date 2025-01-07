n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120);
var i,
    l,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(512722),
    d = n.n(c),
    u = n(442837),
    h = n(481060),
    p = n(239091),
    m = n(99690),
    f = n(493773),
    g = n(616780),
    C = n(665149),
    x = n(484459),
    v = n(347475),
    _ = n(271383),
    I = n(496675),
    E = n(158776),
    b = n(471253),
    Z = n(431328),
    N = n(145834),
    S = n(590415),
    T = n(614173),
    j = n(618896),
    A = n(231338),
    y = n(388032),
    P = n(875440);
let M = a.memo(function (e) {
        let { toggleRequestToSpeakSidebar: t, chatOpen: n } = e,
            i = (0, r.jsx)(C.ZP.Icon, {
                icon: h.XSmallIcon,
                tooltip: y.intl.string(y.t.cpT0Cg),
                onClick: t
            });
        return (0, r.jsxs)(C.ZP, {
            toolbar: i,
            className: o()(P.headerContainer, { [P.chatOpen]: n }),
            children: [
                (0, r.jsx)(C.ZP.Icon, {
                    icon: h.HandRequestSpeakIcon,
                    disabled: !0,
                    'aria-label': y.intl.string(y.t.TYZgzc)
                }),
                (0, r.jsx)(C.ZP.Title, { children: y.intl.string(y.t.TYZgzc) })
            ]
        });
    }),
    R = a.memo(function (e) {
        let { channel: t, participant: i, tempDisableOnInit: l = !1 } = e,
            [s, c] = a.useState(l);
        (0, f.Z)(() => {
            if (!s) return;
            let e = setTimeout(() => c(!1), 1000);
            return () => clearTimeout(e);
        });
        let C = t.getGuildId();
        d()(null != C, 'Channel cannot be guildless');
        let { isMobile: I, status: Z } = (0, u.cj)([E.Z], () => ({
                isMobile: E.Z.isMobileOnline(i.user.id),
                status: E.Z.getStatus(i.user.id, C)
            })),
            T = (0, u.e7)([_.ZP], () => _.ZP.getMember(C, i.user.id)),
            j = a.useMemo(() => ({ [C]: [i.user.id] }), [C, i.user.id]);
        (0, g.$)(j);
        let A = i.rtsState === S.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        function M() {
            (0, b.DT)(t, i.user.id, !1);
        }
        function R() {
            (0, b.DT)(t, i.user.id, !0);
        }
        let L = (e) => {
            (0, p.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('13125'), n.e('64899')]).then(n.bind(n, 757387));
                return (n) =>
                    (0, r.jsx)(e, {
                        ...n,
                        user: i.user,
                        guildId: C,
                        channel: t,
                        showMediaItems: !0
                    });
            });
        };
        return (0, r.jsxs)('div', {
            className: P.participantRowContainer,
            children: [
                (0, r.jsx)(h.Popout, {
                    preload: () =>
                        (0, x.Z)(i.user.id, i.user.getAvatarURL(t.guild_id, 80), {
                            guildId: t.guild_id,
                            channelId: t.id
                        }),
                    renderPopout: (e) =>
                        (0, r.jsx)(v.Z, {
                            ...e,
                            userId: i.user.id,
                            guildId: C,
                            channelId: t.id
                        }),
                    position: 'left',
                    spacing: 16,
                    children: (e) => {
                        var t;
                        return (0, r.jsxs)(h.Clickable, {
                            className: P.participantMemberContainer,
                            onContextMenu: L,
                            ...e,
                            children: [
                                (0, r.jsx)(m.Z, {
                                    size: h.AvatarSizes.SIZE_40,
                                    className: P.participantAvatar,
                                    user: i.user,
                                    isMobile: I,
                                    status: Z
                                }),
                                (0, r.jsxs)('div', {
                                    className: P.participantTextContainer,
                                    children: [
                                        (0, r.jsx)(h.NameWithRole, {
                                            name: i.userNick,
                                            color: null !== (t = null == T ? void 0 : T.colorString) && void 0 !== t ? t : void 0,
                                            className: P.participantName
                                        }),
                                        (0, r.jsx)(h.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-secondary',
                                            children: (0, N.$)(i)
                                        })
                                    ]
                                })
                            ]
                        });
                    }
                }),
                (0, r.jsx)(h.Tooltip, {
                    text: A ? y.intl.string(y.t.h9rsTU) : y.intl.string(y.t.f0T7hI),
                    children: (e) =>
                        (0, r.jsx)(h.Button, {
                            ...e,
                            innerClassName: P.buttonContainer,
                            look: h.Button.Looks.BLANK,
                            size: h.Button.Sizes.NONE,
                            onClick: M,
                            disabled: A || s,
                            children: (0, r.jsx)(h.MicrophoneArrowRightIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        })
                }),
                (0, r.jsx)(h.Tooltip, {
                    text: y.intl.string(y.t.moABMz),
                    children: (e) =>
                        (0, r.jsx)(h.Button, {
                            ...e,
                            innerClassName: o()(P.buttonContainer, P.buttonMargin),
                            look: h.Button.Looks.BLANK,
                            size: h.Button.Sizes.NONE,
                            onClick: R,
                            children: (0, r.jsx)(h.XSmallIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        })
                })
            ]
        });
    }),
    L = a.memo(function (e) {
        let { channel: t } = e,
            [n, i] = (0, T.h)(t.id);
        return (0, r.jsx)(h.FormSwitch, {
            className: P.toggle,
            onChange: i,
            value: n,
            children: y.intl.string(y.t.GYCh0d)
        });
    }),
    k = a.memo(function () {
        return (0, r.jsxs)('div', {
            className: P.emptyStateContainer,
            children: [
                (0, r.jsx)(j.Z, {}),
                (0, r.jsx)(h.Text, {
                    className: P.emptyStateTitle,
                    variant: 'text-lg/semibold',
                    color: 'header-primary',
                    children: y.intl.string(y.t['7R24mZ'])
                }),
                (0, r.jsx)(h.Text, {
                    className: P.emptyStateBody,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: y.intl.string(y.t.Rpr2s7)
                })
            ]
        });
    });
function O(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, chatOpen: i } = e,
        l = (0, Z.Fd)(t.id),
        a = [(0, u.e7)([I.Z], () => I.Z.can(A.Pl.MANAGE_CHANNELS, t) || I.Z.can(A.Pl.MANAGE_ROLES, t)) ? 1 : 0, Math.max(1, l.length)];
    return (0, r.jsxs)('div', {
        className: o()(P.container, { [P.chatOpen]: i }),
        children: [
            (0, r.jsx)(M, {
                toggleRequestToSpeakSidebar: n,
                chatOpen: i
            }),
            (0, r.jsx)(h.List, {
                className: P.contentContainer,
                sections: a,
                sectionHeight: function (e) {
                    if (1 === e) return 40;
                    return 0;
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
                            return (0, r.jsx)(L, { channel: t }, 'rts-toggle');
                        case 1: {
                            if (0 === l.length) return (0, r.jsx)(k, {}, 'participants-empty');
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
                    if (1 === t)
                        return (0, r.jsx)(
                            h.Text,
                            {
                                className: P.listTitle,
                                variant: 'text-xs/bold',
                                color: 'header-secondary',
                                children: l.length > 0 ? y.intl.formatToPlainString(y.t['5z7q5e'], { numHands: l.length }) : y.intl.string(y.t.TYZgzc)
                            },
                            'participants-section'
                        );
                    return null;
                }
            })
        ]
    });
}
((l = i || (i = {}))[(l.TOGGLE_REQUEST_TO_SPEAK = 0)] = 'TOGGLE_REQUEST_TO_SPEAK'), (l[(l.PARTICIPANTS = 1)] = 'PARTICIPANTS');
