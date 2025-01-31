n.d(t, { Z: () => G });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
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
    _ = n(540059),
    C = n(623624),
    x = n(665149),
    v = n(984370),
    E = n(141321),
    I = n(618158),
    b = n(390322),
    Z = n(616286),
    N = n(961048),
    T = n(975146),
    S = n(430824),
    j = n(496675),
    A = n(626135),
    y = n(431328),
    P = n(501655),
    R = n(200498),
    M = n(146085),
    L = n(427679),
    k = n(592473),
    O = n(831002),
    D = n(903108),
    w = n(981631),
    U = n(474936),
    B = n(388032),
    F = n(487847);
function H(e) {
    let { inPopout: t, channel: n, toggleRequestToSpeakSidebar: a, showRequestToSpeakSidebar: o } = e,
        m = (0, u.bp)(),
        { chatOpen: C, participantsListOpen: x } = (0, s.cj)(
            [h.Z],
            () => ({
                chatOpen: h.Z.getChatOpen(n.id),
                participantsListOpen: h.Z.getParticipantsListOpen(n.id)
            }),
            [n.id]
        ),
        v = (0, R.B)(n.id),
        S = (0, y.Rk)(n.id, P.pV.REQUESTED_TO_SPEAK_ONLY),
        { preventIdle: j, allowIdle: A } = (0, I.Y)('popup'),
        { hasParticipantsPanel: M } = (0, p.Z)({ location: 'StageChannelCallHeader' }),
        L = M && x,
        D = (0, _.Q3)('StageChannelCallHeader');
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(g.Z, { channelId: n.id }, 'clips-enabled-indicator'),
            (0, i.jsx)(
                c.yRy,
                {
                    position: 'bottom',
                    animation: c.yRy.Animation.NONE,
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
                            className: F.button,
                            iconClassName: F.buttonIcon
                        });
                    }
                },
                'more-options-popout'
            ),
            !D && !t && (0, i.jsx)(f.Z, { className: F.button }, 'clips'),
            !D &&
                (0, i.jsx)(
                    E.Z,
                    {
                        onOpen: j,
                        onClose: A,
                        className: F.button
                    },
                    'recents'
                ),
            !o && v
                ? (0, i.jsx)('div', {
                      className: F.button,
                      children: (0, i.jsx)(k.Z, {
                          toggleRequestToSpeakSidebar: () => {
                              C && d.Z.updateChatOpen(n.id, !1), x && d.Z.toggleParticipantsList(n.id, !1), a();
                          },
                          showRequestToSpeakSidebar: o,
                          numRequestToSpeak: S
                      })
                  })
                : null,
            !x &&
                M &&
                (0, i.jsx)(
                    T.Z,
                    {
                        className: r()(F.button, { [F.sidebarOpen]: C }),
                        onClick: () => {
                            o && a(), d.Z.toggleParticipantsList(n.id, !x);
                        }
                    },
                    'participants-list-button'
                ),
            !C &&
                (0, i.jsx)('div', {
                    className: r()(F.button, { [F.sidebarOpen]: L || o }),
                    children: (0, i.jsx)(Z.T, {
                        channelId: n.id,
                        showRequestToSpeakSidebar: o,
                        toggleRequestToSpeakSidebar: a,
                        iconClassName: F.buttonIcon
                    })
                })
        ]
    });
}
function G(e) {
    var t;
    let { inPopout: n, channel: a, toggleRequestToSpeakSidebar: u, showRequestToSpeakSidebar: h } = e,
        p = (0, m.ZP)(a),
        f = (0, s.e7)([L.Z], () => L.Z.getStageInstanceByChannel(a.id)),
        g = (0, y.Io)(a.id),
        E = (0, y.Rk)(a.id, P.pV.AUDIENCE),
        I = (0, s.e7)([S.Z], () => S.Z.getGuild(a.guild_id), [a.guild_id]),
        b = null !== (t = null == I ? void 0 : I.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
        Z = (null == I ? void 0 : I.isCommunity()) ? b < w.TU7 : (null == I ? void 0 : I.premiumTier) !== w.Eu4.TIER_3 && b <= w.eez,
        N = (0, D.Z)(a),
        T = (0, s.e7)([j.Z], () => j.Z.can(M.yP, a)),
        R = (0, _.Q3)('StageChannelCallHeader'),
        k = () => {
            d.Z.updateStageVideoLimitBoostUpsellDismissed(a.id, !0),
                A.default.track(w.rMx.BOOSTING_UPSELL_CLICKED, {
                    guild_id: a.guild_id,
                    type: U.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: T,
                    action: U.T7.DISMISS
                });
        },
        O = {
            canModerate: T,
            audienceCount: E,
            channel: a,
            speakerCount: g
        },
        G = l.useRef(O);
    l.useEffect(() => {
        G.current = O;
    }),
        l.useEffect(() => {
            let { canModerate: e, audienceCount: t, channel: n, speakerCount: i } = G.current;
            N &&
                A.default.track(w.rMx.BOOSTING_UPSELL_VIEWED, {
                    guild_id: n.guild_id,
                    type: U.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: e,
                    listener_count: i + t
                });
        }, [N]);
    let z = (0, i.jsx)(c.f6W, {
        theme: w.BRd.DARK,
        children: (e) => {
            var t;
            return (0, i.jsxs)(x.ZP, {
                toolbar: (0, i.jsx)(H, {
                    inPopout: n,
                    toggleRequestToSpeakSidebar: u,
                    showRequestToSpeakSidebar: h,
                    channel: a
                }),
                onDoubleClick: v.O,
                transparent: !0,
                className: r()(e, F.participants),
                children: [
                    (0, i.jsx)(x.ZP.Icon, {
                        icon: c.ewx,
                        disabled: !0,
                        'aria-label': B.intl.string(B.t.EErMzM),
                        className: F.icon,
                        color: null != f ? (R ? o.Z.colors.HEADER_MUTED.css : o.Z.unsafe_rawColors.GREEN_360.css) : void 0
                    }),
                    (0, i.jsx)(x.ZP.Title, {
                        className: F.channelName,
                        wrapperClassName: F.channelNameWrapper,
                        children: null !== (t = null == f ? void 0 : f.topic) && void 0 !== t ? t : p
                    }),
                    (0, i.jsx)(x.ZP.Divider, { className: F.divider }),
                    (0, i.jsxs)(x.ZP.Title, {
                        children: [
                            (0, i.jsx)(c.S6n, {
                                size: 'xs',
                                color: R ? o.Z.colors.TEXT_LOW_CONTRAST.css : 'currentColor'
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: R ? 'text-sm/normal' : 'text-xs/medium',
                                color: R ? 'text-muted' : 'header-secondary',
                                className: F.speakerCount,
                                children: B.intl.format(B.t.chmM9P, { count: g })
                            }),
                            (0, i.jsx)(c.BFJ, {
                                size: 'xs',
                                className: F.icon,
                                color: 'currentColor'
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: R ? 'text-sm/normal' : 'text-xs/medium',
                                color: R ? 'text-muted' : 'header-secondary',
                                className: F.speakerCount,
                                children: B.intl.format(B.t['+v2pNz'], { count: E })
                            })
                        ]
                    })
                ]
            });
        }
    });
    return N
        ? (0, i.jsxs)('div', {
              children: [
                  z,
                  (0, i.jsxs)('div', {
                      className: F.boostUpsell,
                      children: [
                          (0, i.jsx)(V, {}),
                          (0, i.jsxs)('div', {
                              className: F.text,
                              children: [
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: Z ? B.intl.string(B.t['T+zF9P']) : B.intl.string(B.t['IZ+SVl'])
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: Z ? B.intl.string(B.t.Izgpmp) : B.intl.string(B.t['7FHbPD'])
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', {
                              className: F.buttons,
                              children: Z
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(c.zxk, {
                                                className: F.notNowButton,
                                                onClick: k,
                                                look: c.zxk.Looks.BLANK,
                                                size: c.zxk.Sizes.SMALL,
                                                children: B.intl.string(B.t.L5eIZ2)
                                            }),
                                            (0, i.jsx)(c.gtL, {
                                                size: c.zxk.Sizes.SMALL,
                                                onClick: () => {
                                                    (0, C.f)({
                                                        guildId: a.guild_id,
                                                        location: { section: w.jXE.STAGE_VIDEO_LIMIT }
                                                    }),
                                                        A.default.track(w.rMx.BOOSTING_UPSELL_CLICKED, {
                                                            guild_id: a.guild_id,
                                                            type: U.cd.VIDEO_STAGE_LIMIT,
                                                            is_moderator: T,
                                                            action: U.T7.BOOST
                                                        });
                                                },
                                                className: F.boostButton,
                                                children: B.intl.string(B.t.Uj0md3)
                                            })
                                        ]
                                    })
                                  : (0, i.jsx)(c.zxk, {
                                        className: F.notNowButton,
                                        onClick: k,
                                        look: c.zxk.Looks.BLANK,
                                        size: c.zxk.Sizes.SMALL,
                                        children: B.intl.string(B.t.WAI6xs)
                                    })
                          })
                      ]
                  })
              ]
          })
        : z;
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
