n.d(t, {
    Z: function () {
        return F;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(692547),
    c = n(481060),
    d = n(475179),
    u = n(40851),
    h = n(358221),
    p = n(185935),
    m = n(933557),
    f = n(320007),
    g = n(236091),
    C = n(540059),
    x = n(623624),
    v = n(665149),
    _ = n(984370),
    I = n(141321),
    E = n(618158),
    b = n(390322),
    Z = n(616286),
    N = n(961048),
    S = n(975146),
    T = n(430824),
    j = n(496675),
    A = n(626135),
    y = n(431328),
    P = n(501655),
    M = n(200498),
    R = n(146085),
    L = n(427679),
    k = n(592473),
    O = n(831002),
    D = n(903108),
    w = n(981631),
    B = n(474936),
    U = n(388032),
    H = n(487847);
function G(e) {
    let { inPopout: t, channel: n, toggleRequestToSpeakSidebar: r, showRequestToSpeakSidebar: o } = e,
        m = (0, u.bp)(),
        { chatOpen: x, participantsListOpen: v } = (0, s.cj)(
            [h.Z],
            () => ({
                chatOpen: h.Z.getChatOpen(n.id),
                participantsListOpen: h.Z.getParticipantsListOpen(n.id)
            }),
            [n.id]
        ),
        _ = (0, M.B)(n.id),
        T = (0, y.Rk)(n.id, P.pV.REQUESTED_TO_SPEAK_ONLY),
        { preventIdle: j, allowIdle: A } = (0, E.Y)('popup'),
        { hasParticipantsPanel: R } = (0, p.Z)({ location: 'StageChannelCallHeader' }),
        L = R && v,
        D = (0, C.Q3)('StageChannelCallHeader');
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(g.Z, { channelId: n.id }, 'clips-enabled-indicator'),
            (0, i.jsx)(
                c.Popout,
                {
                    position: 'bottom',
                    animation: c.Popout.Animation.NONE,
                    align: 'right',
                    renderPopout: (e) =>
                        (0, i.jsx)(b.Z, {
                            children: (0, i.jsx)(O.Z, {
                                ...e,
                                channelId: n.id,
                                appContext: m
                            })
                        }),
                    autoInvert: !1,
                    children: (e, t) => {
                        let { isShown: n } = t;
                        return (0, l.createElement)(N.Z, {
                            ...e,
                            key: 'more-options',
                            isActive: n,
                            className: H.button,
                            iconClassName: H.buttonIcon
                        });
                    }
                },
                'more-options-popout'
            ),
            !D && !t && (0, i.jsx)(f.Z, { className: H.button }, 'clips'),
            !D &&
                (0, i.jsx)(
                    I.Z,
                    {
                        onOpen: j,
                        onClose: A,
                        className: H.button
                    },
                    'recents'
                ),
            !o && _
                ? (0, i.jsx)('div', {
                      className: H.button,
                      children: (0, i.jsx)(k.Z, {
                          toggleRequestToSpeakSidebar: () => {
                              x && d.Z.updateChatOpen(n.id, !1), v && d.Z.toggleParticipantsList(n.id, !1), r();
                          },
                          showRequestToSpeakSidebar: o,
                          numRequestToSpeak: T
                      })
                  })
                : null,
            !v &&
                R &&
                (0, i.jsx)(
                    S.Z,
                    {
                        className: a()(H.button, { [H.sidebarOpen]: x }),
                        onClick: () => {
                            o && r(), d.Z.toggleParticipantsList(n.id, !v);
                        }
                    },
                    'participants-list-button'
                ),
            !x &&
                (0, i.jsx)('div', {
                    className: a()(H.button, { [H.sidebarOpen]: L || o }),
                    children: (0, i.jsx)(Z.T, {
                        channelId: n.id,
                        showRequestToSpeakSidebar: o,
                        toggleRequestToSpeakSidebar: r,
                        iconClassName: H.buttonIcon
                    })
                })
        ]
    });
}
function F(e) {
    var t;
    let { inPopout: n, channel: r, toggleRequestToSpeakSidebar: u, showRequestToSpeakSidebar: h } = e,
        p = (0, m.ZP)(r),
        f = (0, s.e7)([L.Z], () => L.Z.getStageInstanceByChannel(r.id)),
        g = (0, y.Io)(r.id),
        C = (0, y.Rk)(r.id, P.pV.AUDIENCE),
        I = (0, s.e7)([T.Z], () => T.Z.getGuild(r.guild_id), [r.guild_id]),
        E = null !== (t = null == I ? void 0 : I.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
        b = (null == I ? void 0 : I.isCommunity()) ? E < w.TU7 : (null == I ? void 0 : I.premiumTier) !== w.Eu4.TIER_3 && E <= w.eez,
        Z = (0, D.Z)(r),
        N = (0, s.e7)([j.Z], () => j.Z.can(R.yP, r)),
        S = () => {
            d.Z.updateStageVideoLimitBoostUpsellDismissed(r.id, !0),
                A.default.track(w.rMx.BOOSTING_UPSELL_CLICKED, {
                    guild_id: r.guild_id,
                    type: B.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: N,
                    action: B.T7.DISMISS
                });
        },
        M = {
            canModerate: N,
            audienceCount: C,
            channel: r,
            speakerCount: g
        },
        k = l.useRef(M);
    l.useEffect(() => {
        k.current = M;
    }),
        l.useEffect(() => {
            let { canModerate: e, audienceCount: t, channel: n, speakerCount: i } = k.current;
            Z &&
                A.default.track(w.rMx.BOOSTING_UPSELL_VIEWED, {
                    guild_id: n.guild_id,
                    type: B.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: e,
                    listener_count: i + t
                });
        }, [Z]);
    let O = (0, i.jsx)(c.ThemeProvider, {
        theme: w.BRd.DARK,
        children: (e) => {
            var t;
            return (0, i.jsxs)(v.ZP, {
                toolbar: (0, i.jsx)(G, {
                    inPopout: n,
                    toggleRequestToSpeakSidebar: u,
                    showRequestToSpeakSidebar: h,
                    channel: r
                }),
                onDoubleClick: _.O,
                transparent: !0,
                className: a()(e, H.participants),
                children: [
                    (0, i.jsx)(v.ZP.Icon, {
                        icon: c.StageIcon,
                        disabled: !0,
                        'aria-label': U.intl.string(U.t.EErMzM),
                        className: H.icon,
                        color: null != f ? o.Z.unsafe_rawColors.GREEN_360.css : void 0
                    }),
                    (0, i.jsx)(v.ZP.Title, {
                        className: H.channelName,
                        wrapperClassName: H.channelNameWrapper,
                        children: null !== (t = null == f ? void 0 : f.topic) && void 0 !== t ? t : p
                    }),
                    (0, i.jsx)(v.ZP.Divider, { className: H.divider }),
                    (0, i.jsxs)(v.ZP.Title, {
                        children: [
                            (0, i.jsx)(c.MicrophoneIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-secondary',
                                className: H.speakerCount,
                                children: U.intl.format(U.t.chmM9P, { count: g })
                            }),
                            (0, i.jsx)(c.GroupIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-secondary',
                                className: H.speakerCount,
                                children: U.intl.format(U.t['+v2pNz'], { count: C })
                            })
                        ]
                    })
                ]
            });
        }
    });
    return Z
        ? (0, i.jsxs)('div', {
              children: [
                  O,
                  (0, i.jsxs)('div', {
                      className: H.boostUpsell,
                      children: [
                          (0, i.jsx)(V, {}),
                          (0, i.jsxs)('div', {
                              className: H.text,
                              children: [
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: b ? U.intl.string(U.t['T+zF9P']) : U.intl.string(U.t['IZ+SVl'])
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: b ? U.intl.string(U.t.Izgpmp) : U.intl.string(U.t['7FHbPD'])
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', {
                              className: H.buttons,
                              children: b
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(c.Button, {
                                                className: H.notNowButton,
                                                onClick: S,
                                                look: c.Button.Looks.BLANK,
                                                size: c.Button.Sizes.SMALL,
                                                children: U.intl.string(U.t.L5eIZ2)
                                            }),
                                            (0, i.jsx)(c.ShinyButton, {
                                                size: c.Button.Sizes.SMALL,
                                                onClick: () => {
                                                    (0, x.f)({
                                                        guildId: r.guild_id,
                                                        location: { section: w.jXE.STAGE_VIDEO_LIMIT }
                                                    }),
                                                        A.default.track(w.rMx.BOOSTING_UPSELL_CLICKED, {
                                                            guild_id: r.guild_id,
                                                            type: B.cd.VIDEO_STAGE_LIMIT,
                                                            is_moderator: N,
                                                            action: B.T7.BOOST
                                                        });
                                                },
                                                className: H.boostButton,
                                                children: U.intl.string(U.t.Uj0md3)
                                            })
                                        ]
                                    })
                                  : (0, i.jsx)(c.Button, {
                                        className: H.notNowButton,
                                        onClick: S,
                                        look: c.Button.Looks.BLANK,
                                        size: c.Button.Sizes.SMALL,
                                        children: U.intl.string(U.t.WAI6xs)
                                    })
                          })
                      ]
                  })
              ]
          })
        : O;
}
function V() {
    return (0, i.jsxs)('svg', {
        width: '36',
        height: '36',
        viewBox: '0 0 36 36',
        fill: 'none',
        children: [
            (0, i.jsxs)('g', {
                clipPath: 'url(#clip0_595_59940)',
                children: [
                    (0, i.jsx)('path', {
                        d: 'M36 18C36 19.8 33.075 21.15 32.625 22.725C32.175 24.3 33.525 27.225 32.625 28.575C31.725 29.925 28.35 29.25 27 30.375C25.65 31.5 25.2 34.425 23.625 35.1C22.05 35.775 19.8 33.3 18 33.3C16.2 33.3 13.95 35.55 12.375 35.1C10.8 34.65 10.35 31.275 9 30.375C7.65 29.475 4.5 29.925 3.375 28.575C2.25 27.225 3.825 24.525 3.375 22.725C2.925 20.925 0 19.8 0 18C0 16.2 2.925 14.85 3.375 13.275C3.825 11.7 2.475 8.77497 3.375 7.42496C4.275 6.07497 7.65 6.74997 9 5.62497C10.35 4.49997 10.8 1.57497 12.375 0.899965C13.95 0.224965 16.2 2.69997 18 2.69997C19.8 2.69997 22.05 0.449965 23.625 0.899965C25.2 1.34997 25.65 4.49997 27 5.62497C28.35 6.74997 31.5 6.07497 32.625 7.42496C33.75 8.77497 32.175 11.475 32.625 13.275C33.075 15.075 36 16.2 36 18Z',
                        fill: 'url(#paint0_linear_595_59940)'
                    }),
                    (0, i.jsx)('path', {
                        d: 'M15.75 20.7001L18 22.9501L20.25 20.7001V15.3001L18 13.0501L15.75 15.3001V20.7001Z',
                        fill: 'white'
                    }),
                    (0, i.jsx)('path', {
                        d: 'M18 6.75L11.25 13.5V22.5L18 29.25L24.75 22.5V13.5L18 6.75ZM22.5 21.6L18 26.1L13.5 21.6V14.4L18 9.9L22.5 14.4V21.6Z',
                        fill: 'white'
                    })
                ]
            }),
            (0, i.jsxs)('defs', {
                children: [
                    (0, i.jsxs)('linearGradient', {
                        id: 'paint0_linear_595_59940',
                        x1: '2.4046e-06',
                        y1: '35.2166',
                        x2: '35.7182',
                        y2: '-1.45185',
                        gradientUnits: 'userSpaceOnUse',
                        children: [
                            (0, i.jsx)('stop', { stopColor: '#3E70DD' }),
                            (0, i.jsx)('stop', {
                                offset: '1',
                                stopColor: '#B377F3'
                            })
                        ]
                    }),
                    (0, i.jsx)('clipPath', {
                        id: 'clip0_595_59940',
                        children: (0, i.jsx)('rect', {
                            width: '36',
                            height: '36',
                            fill: 'white'
                        })
                    })
                ]
            })
        ]
    });
}
