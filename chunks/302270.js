n.d(t, { Z: () => V });
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
    p = n(682901),
    m = n(185935),
    f = n(933557),
    g = n(320007),
    _ = n(236091),
    C = n(540059),
    x = n(623624),
    v = n(665149),
    E = n(984370),
    I = n(141321),
    b = n(618158),
    Z = n(390322),
    N = n(616286),
    T = n(961048),
    S = n(975146),
    j = n(430824),
    y = n(496675),
    A = n(626135),
    P = n(431328),
    R = n(501655),
    M = n(200498),
    L = n(146085),
    k = n(427679),
    O = n(592473),
    D = n(831002),
    w = n(903108),
    U = n(981631),
    B = n(474936),
    F = n(388032),
    H = n(623744);
function G(e) {
    let { inPopout: t, channel: n, toggleRequestToSpeakSidebar: a, showRequestToSpeakSidebar: o } = e,
        f = (0, u.bp)(),
        { chatOpen: x, participantsListOpen: v } = (0, s.cj)(
            [h.Z],
            () => ({
                chatOpen: h.Z.getChatOpen(n.id),
                participantsListOpen: h.Z.getParticipantsListOpen(n.id)
            }),
            [n.id]
        ),
        E = (0, M.B)(n.id),
        j = (0, P.Rk)(n.id, R.pV.REQUESTED_TO_SPEAK_ONLY),
        { preventIdle: y, allowIdle: A } = (0, b.Y)('popup'),
        { hasParticipantsPanel: L } = (0, m.Z)({ location: 'StageChannelCallHeader' }),
        k = L && v,
        w = (0, C.Q3)('StageChannelCallHeader'),
        { enabled: U } = (0, p.Z)({ location: 'StageChannelCallHeader' });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(_.Z, { channelId: n.id }, 'clips-enabled-indicator'),
            !U &&
                (0, i.jsx)(
                    c.yRy,
                    {
                        position: 'bottom',
                        animation: c.yRy.Animation.NONE,
                        align: 'right',
                        renderPopout: (e) =>
                            (0, i.jsx)(Z.Z, {
                                children: (0, i.jsx)(D.ZP, {
                                    ...e,
                                    channelId: n.id,
                                    appContext: f
                                })
                            }),
                        autoInvert: !1,
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, l.createElement)(T.Z, {
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
            !w && !t && (0, i.jsx)(g.Z, { className: H.button }, 'clips'),
            !U &&
                !w &&
                (0, i.jsx)(
                    I.Z,
                    {
                        onOpen: y,
                        onClose: A,
                        className: H.button
                    },
                    'recents'
                ),
            !o && E
                ? (0, i.jsx)('div', {
                      className: H.button,
                      children: (0, i.jsx)(O.Z, {
                          toggleRequestToSpeakSidebar: () => {
                              x && d.Z.updateChatOpen(n.id, !1), v && d.Z.toggleParticipantsList(n.id, !1), a();
                          },
                          showRequestToSpeakSidebar: o,
                          numRequestToSpeak: j
                      })
                  })
                : null,
            !v &&
                L &&
                (0, i.jsx)(
                    S.Z,
                    {
                        className: r()(H.button, { [H.sidebarOpen]: x }),
                        onClick: () => {
                            o && a(), d.Z.toggleParticipantsList(n.id, !v);
                        }
                    },
                    'participants-list-button'
                ),
            !x &&
                (0, i.jsx)('div', {
                    className: r()(H.button, { [H.sidebarOpen]: k || o }),
                    children: (0, i.jsx)(N.T, {
                        channelId: n.id,
                        showRequestToSpeakSidebar: o,
                        toggleRequestToSpeakSidebar: a,
                        iconClassName: H.buttonIcon
                    })
                })
        ]
    });
}
function V(e) {
    var t;
    let { inPopout: n, channel: a, toggleRequestToSpeakSidebar: u, showRequestToSpeakSidebar: h } = e,
        p = (0, f.ZP)(a),
        m = (0, s.e7)([k.Z], () => k.Z.getStageInstanceByChannel(a.id)),
        g = (0, P.Io)(a.id),
        _ = (0, P.Rk)(a.id, R.pV.AUDIENCE),
        I = (0, s.e7)([j.Z], () => j.Z.getGuild(a.guild_id), [a.guild_id]),
        b = null !== (t = null == I ? void 0 : I.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
        Z = (null == I ? void 0 : I.isCommunity()) ? b < U.TU7 : (null == I ? void 0 : I.premiumTier) !== U.Eu4.TIER_3 && b <= U.eez,
        N = (0, w.Z)(a),
        T = (0, s.e7)([y.Z], () => y.Z.can(L.yP, a)),
        S = (0, C.Q3)('StageChannelCallHeader'),
        M = () => {
            d.Z.updateStageVideoLimitBoostUpsellDismissed(a.id, !0),
                A.default.track(U.rMx.BOOSTING_UPSELL_CLICKED, {
                    guild_id: a.guild_id,
                    type: B.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: T,
                    action: B.T7.DISMISS
                });
        },
        O = {
            canModerate: T,
            audienceCount: _,
            channel: a,
            speakerCount: g
        },
        D = l.useRef(O);
    l.useEffect(() => {
        D.current = O;
    }),
        l.useEffect(() => {
            let { canModerate: e, audienceCount: t, channel: n, speakerCount: i } = D.current;
            N &&
                A.default.track(U.rMx.BOOSTING_UPSELL_VIEWED, {
                    guild_id: n.guild_id,
                    type: B.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: e,
                    listener_count: i + t
                });
        }, [N]);
    let V = (0, i.jsx)(c.f6W, {
        theme: U.BRd.DARK,
        children: (e) => {
            var t;
            return (0, i.jsxs)(v.ZP, {
                toolbar: (0, i.jsx)(G, {
                    inPopout: n,
                    toggleRequestToSpeakSidebar: u,
                    showRequestToSpeakSidebar: h,
                    channel: a
                }),
                onDoubleClick: E.O,
                transparent: !0,
                className: r()(e, H.participants),
                children: [
                    (0, i.jsx)(v.ZP.Icon, {
                        icon: c.ewx,
                        disabled: !0,
                        'aria-label': F.intl.string(F.t.EErMzM),
                        className: H.icon,
                        color: null != m ? (S ? o.Z.colors.HEADER_MUTED.css : o.Z.unsafe_rawColors.GREEN_360.css) : void 0
                    }),
                    (0, i.jsx)(v.ZP.Title, {
                        className: H.channelName,
                        wrapperClassName: H.channelNameWrapper,
                        children: null !== (t = null == m ? void 0 : m.topic) && void 0 !== t ? t : p
                    }),
                    (0, i.jsx)(v.ZP.Divider, { className: H.divider }),
                    (0, i.jsxs)(v.ZP.Title, {
                        children: [
                            (0, i.jsx)(c.S6n, {
                                size: 'xs',
                                color: S ? o.Z.colors.TEXT_LOW_CONTRAST.css : 'currentColor'
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: S ? 'text-sm/normal' : 'text-xs/medium',
                                color: S ? 'text-muted' : 'header-secondary',
                                className: H.speakerCount,
                                children: F.intl.format(F.t.chmM9P, { count: g })
                            }),
                            (0, i.jsx)(c.BFJ, {
                                size: 'xs',
                                className: H.icon,
                                color: 'currentColor'
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: S ? 'text-sm/normal' : 'text-xs/medium',
                                color: S ? 'text-muted' : 'header-secondary',
                                className: H.speakerCount,
                                children: F.intl.format(F.t['+v2pNz'], { count: _ })
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
                  V,
                  (0, i.jsxs)('div', {
                      className: H.boostUpsell,
                      children: [
                          (0, i.jsx)(z, {}),
                          (0, i.jsxs)('div', {
                              className: H.text,
                              children: [
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: Z ? F.intl.string(F.t['T+zF9P']) : F.intl.string(F.t['IZ+SVl'])
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: Z ? F.intl.string(F.t.Izgpmp) : F.intl.string(F.t['7FHbPD'])
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', {
                              className: H.buttons,
                              children: Z
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(c.zxk, {
                                                className: H.notNowButton,
                                                onClick: M,
                                                look: c.zxk.Looks.BLANK,
                                                size: c.zxk.Sizes.SMALL,
                                                children: F.intl.string(F.t.L5eIZ2)
                                            }),
                                            (0, i.jsx)(c.gtL, {
                                                size: c.zxk.Sizes.SMALL,
                                                onClick: () => {
                                                    (0, x.f)({
                                                        guildId: a.guild_id,
                                                        location: { section: U.jXE.STAGE_VIDEO_LIMIT }
                                                    }),
                                                        A.default.track(U.rMx.BOOSTING_UPSELL_CLICKED, {
                                                            guild_id: a.guild_id,
                                                            type: B.cd.VIDEO_STAGE_LIMIT,
                                                            is_moderator: T,
                                                            action: B.T7.BOOST
                                                        });
                                                },
                                                className: H.boostButton,
                                                children: F.intl.string(F.t.Uj0md3)
                                            })
                                        ]
                                    })
                                  : (0, i.jsx)(c.zxk, {
                                        className: H.notNowButton,
                                        onClick: M,
                                        look: c.zxk.Looks.BLANK,
                                        size: c.zxk.Sizes.SMALL,
                                        children: F.intl.string(F.t.WAI6xs)
                                    })
                          })
                      ]
                  })
              ]
          })
        : V;
}
function z() {
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
