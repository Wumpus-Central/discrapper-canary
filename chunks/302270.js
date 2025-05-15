n.d(t, { Z: () => B });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(692547),
    c = n(481060),
    u = n(475179),
    d = n(100527),
    p = n(906732),
    h = n(358221),
    f = n(185935),
    m = n(522651),
    g = n(933557),
    b = n(320007),
    _ = n(236091),
    C = n(540059),
    x = n(623624),
    y = n(665149),
    v = n(984370),
    j = n(616286),
    O = n(975146),
    E = n(430824),
    I = n(496675),
    S = n(626135),
    P = n(431328),
    Z = n(501655),
    N = n(200498),
    T = n(146085),
    A = n(427679),
    w = n(592473),
    R = n(903108),
    M = n(981631),
    k = n(474936),
    L = n(388032),
    D = n(523335);
function U(e) {
    let { inPopout: t, channel: n, toggleRequestToSpeakSidebar: i, showRequestToSpeakSidebar: l } = e,
        { analyticsLocations: s, newestAnalyticsLocation: c } = (0, p.ZP)(d.Z.VOICE_CHANNEL_HEADER),
        { chatOpen: g, participantsListOpen: x } = (0, o.cj)(
            [h.Z],
            () => ({
                chatOpen: h.Z.getChatOpen(n.id),
                participantsListOpen: h.Z.getParticipantsListOpen(n.id)
            }),
            [n.id]
        ),
        y = (0, N.B)(n.id),
        v = (0, P.Rk)(n.id, Z.pV.REQUESTED_TO_SPEAK_ONLY),
        { hasParticipantsPanel: E } = (0, f.Z)({ location: 'StageChannelCallHeader' }),
        I = E && x,
        S = (0, C.Q3)('StageChannelCallHeader');
    return (0, r.jsxs)(p.Gt, {
        value: s,
        children: [
            (0, r.jsx)(_.Z, { channelId: n.id }, 'clips-enabled-indicator'),
            !S && !t && (0, r.jsx)(b.Z, { className: D.button }, 'clips'),
            !l && y
                ? (0, r.jsx)('div', {
                      className: D.button,
                      children: (0, r.jsx)(w.Z, {
                          toggleRequestToSpeakSidebar: () => {
                              g && u.Z.updateChatOpen(n.id, !1), x && u.Z.toggleParticipantsList(n.id, !1), (0, m.v)(c, m.d.OPEN_REQUEST_TO_SPEAK_SIDEBAR), i();
                          },
                          showRequestToSpeakSidebar: l,
                          numRequestToSpeak: v
                      })
                  })
                : null,
            !x &&
                E &&
                (0, r.jsx)(
                    O.Z,
                    {
                        className: a()(D.button, { [D.sidebarOpen]: g }),
                        onClick: () => {
                            l && i(), u.Z.toggleParticipantsList(n.id, !x);
                        }
                    },
                    'participants-list-button'
                ),
            !g &&
                (0, r.jsx)('div', {
                    className: a()(D.button, { [D.sidebarOpen]: I || l }),
                    children: (0, r.jsx)(j.T, {
                        channelId: n.id,
                        showRequestToSpeakSidebar: l,
                        toggleRequestToSpeakSidebar: i,
                        iconClassName: D.buttonIcon
                    })
                })
        ]
    });
}
function B(e) {
    var t;
    let { inPopout: n, channel: l, toggleRequestToSpeakSidebar: d, showRequestToSpeakSidebar: p } = e,
        h = (0, g.ZP)(l),
        f = (0, o.e7)([A.Z], () => A.Z.getStageInstanceByChannel(l.id)),
        m = (0, P.Io)(l.id),
        b = (0, P.Rk)(l.id, Z.pV.AUDIENCE),
        _ = (0, o.e7)([E.Z], () => E.Z.getGuild(l.guild_id), [l.guild_id]),
        j = null != (t = null == _ ? void 0 : _.maxStageVideoChannelUsers) ? t : 0,
        O = (null == _ ? void 0 : _.isCommunity()) ? j < M.TU7 : (null == _ ? void 0 : _.premiumTier) !== M.Eu4.TIER_3 && j <= M.eez,
        N = (0, R.Z)(l),
        w = (0, o.e7)([I.Z], () => I.Z.can(T.yP, l)),
        B = (0, C.Q3)('StageChannelCallHeader'),
        F = () => {
            u.Z.updateStageVideoLimitBoostUpsellDismissed(l.id, !0),
                S.default.track(M.rMx.BOOSTING_UPSELL_CLICKED, {
                    guild_id: l.guild_id,
                    type: k.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: w,
                    action: k.T7.DISMISS
                });
        },
        H = {
            canModerate: w,
            audienceCount: b,
            channel: l,
            speakerCount: m
        },
        V = i.useRef(H);
    i.useEffect(() => {
        V.current = H;
    }),
        i.useEffect(() => {
            let { canModerate: e, audienceCount: t, channel: n, speakerCount: r } = V.current;
            N &&
                S.default.track(M.rMx.BOOSTING_UPSELL_VIEWED, {
                    guild_id: n.guild_id,
                    type: k.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: e,
                    listener_count: r + t
                });
        }, [N]);
    let z = (0, r.jsx)(c.f6W, {
        theme: M.BRd.DARK,
        children: (e) => {
            var t;
            return (0, r.jsxs)(y.ZP, {
                toolbar: (0, r.jsx)(U, {
                    inPopout: n,
                    toggleRequestToSpeakSidebar: d,
                    showRequestToSpeakSidebar: p,
                    channel: l
                }),
                onDoubleClick: v.O,
                transparent: !0,
                className: a()(e, D.participants),
                children: [
                    (0, r.jsx)(y.ZP.Icon, {
                        icon: c.ewx,
                        disabled: !0,
                        'aria-label': L.intl.string(L.t.EErMzM),
                        className: D.icon,
                        color: null != f ? (B ? s.Z.colors.HEADER_MUTED.css : s.Z.unsafe_rawColors.GREEN_360.css) : void 0
                    }),
                    (0, r.jsx)(y.ZP.Title, {
                        className: D.channelName,
                        wrapperClassName: D.channelNameWrapper,
                        children: null != (t = null == f ? void 0 : f.topic) ? t : h
                    }),
                    (0, r.jsx)(y.ZP.Divider, { className: D.divider }),
                    (0, r.jsxs)(y.ZP.Title, {
                        children: [
                            (0, r.jsx)(c.S6n, {
                                size: 'xs',
                                color: B ? s.Z.colors.TEXT_LOW_CONTRAST.css : 'currentColor'
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: B ? 'text-sm/normal' : 'text-xs/medium',
                                color: B ? 'text-muted' : 'header-secondary',
                                className: D.speakerCount,
                                children: L.intl.format(L.t.chmM9P, { count: m })
                            }),
                            (0, r.jsx)(c.BFJ, {
                                size: 'xs',
                                className: D.icon,
                                color: 'currentColor'
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: B ? 'text-sm/normal' : 'text-xs/medium',
                                color: B ? 'text-muted' : 'header-secondary',
                                className: D.speakerCount,
                                children: L.intl.format(L.t['+v2pNz'], { count: b })
                            })
                        ]
                    })
                ]
            });
        }
    });
    return N
        ? (0, r.jsxs)('div', {
              children: [
                  z,
                  (0, r.jsxs)('div', {
                      className: D.boostUpsell,
                      children: [
                          (0, r.jsx)(G, {}),
                          (0, r.jsxs)('div', {
                              className: D.text,
                              children: [
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: O ? L.intl.string(L.t['T+zF9P']) : L.intl.string(L.t['IZ+SVl'])
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: O ? L.intl.string(L.t.Izgpmp) : L.intl.string(L.t['7FHbPD'])
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', {
                              className: D.buttons,
                              children: O
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(c.zxk, {
                                                className: D.notNowButton,
                                                onClick: F,
                                                look: c.zxk.Looks.BLANK,
                                                size: c.zxk.Sizes.SMALL,
                                                children: L.intl.string(L.t.L5eIZ2)
                                            }),
                                            (0, r.jsx)(c.gtL, {
                                                size: c.zxk.Sizes.SMALL,
                                                onClick: () => {
                                                    (0, x.f)({
                                                        guildId: l.guild_id,
                                                        location: { section: M.jXE.STAGE_VIDEO_LIMIT }
                                                    }),
                                                        S.default.track(M.rMx.BOOSTING_UPSELL_CLICKED, {
                                                            guild_id: l.guild_id,
                                                            type: k.cd.VIDEO_STAGE_LIMIT,
                                                            is_moderator: w,
                                                            action: k.T7.BOOST
                                                        });
                                                },
                                                className: D.boostButton,
                                                children: L.intl.string(L.t.Uj0md3)
                                            })
                                        ]
                                    })
                                  : (0, r.jsx)(c.zxk, {
                                        className: D.notNowButton,
                                        onClick: F,
                                        look: c.zxk.Looks.BLANK,
                                        size: c.zxk.Sizes.SMALL,
                                        children: L.intl.string(L.t.WAI6xs)
                                    })
                          })
                      ]
                  })
              ]
          })
        : z;
}
function G() {
    return (0, r.jsxs)('svg', {
        width: '36',
        height: '36',
        viewBox: '0 0 36 36',
        fill: 'none',
        children: [
            (0, r.jsxs)('g', {
                clipPath: 'url(#clip0_595_59940)',
                children: [
                    (0, r.jsx)('path', {
                        d: 'M36 18C36 19.8 33.075 21.15 32.625 22.725C32.175 24.3 33.525 27.225 32.625 28.575C31.725 29.925 28.35 29.25 27 30.375C25.65 31.5 25.2 34.425 23.625 35.1C22.05 35.775 19.8 33.3 18 33.3C16.2 33.3 13.95 35.55 12.375 35.1C10.8 34.65 10.35 31.275 9 30.375C7.65 29.475 4.5 29.925 3.375 28.575C2.25 27.225 3.825 24.525 3.375 22.725C2.925 20.925 0 19.8 0 18C0 16.2 2.925 14.85 3.375 13.275C3.825 11.7 2.475 8.77497 3.375 7.42496C4.275 6.07497 7.65 6.74997 9 5.62497C10.35 4.49997 10.8 1.57497 12.375 0.899965C13.95 0.224965 16.2 2.69997 18 2.69997C19.8 2.69997 22.05 0.449965 23.625 0.899965C25.2 1.34997 25.65 4.49997 27 5.62497C28.35 6.74997 31.5 6.07497 32.625 7.42496C33.75 8.77497 32.175 11.475 32.625 13.275C33.075 15.075 36 16.2 36 18Z',
                        fill: 'url(#paint0_linear_595_59940)'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M15.75 20.7001L18 22.9501L20.25 20.7001V15.3001L18 13.0501L15.75 15.3001V20.7001Z',
                        fill: 'white'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M18 6.75L11.25 13.5V22.5L18 29.25L24.75 22.5V13.5L18 6.75ZM22.5 21.6L18 26.1L13.5 21.6V14.4L18 9.9L22.5 14.4V21.6Z',
                        fill: 'white'
                    })
                ]
            }),
            (0, r.jsxs)('defs', {
                children: [
                    (0, r.jsxs)('linearGradient', {
                        id: 'paint0_linear_595_59940',
                        x1: '2.4046e-06',
                        y1: '35.2166',
                        x2: '35.7182',
                        y2: '-1.45185',
                        gradientUnits: 'userSpaceOnUse',
                        children: [
                            (0, r.jsx)('stop', { stopColor: '#3E70DD' }),
                            (0, r.jsx)('stop', {
                                offset: '1',
                                stopColor: '#B377F3'
                            })
                        ]
                    }),
                    (0, r.jsx)('clipPath', {
                        id: 'clip0_595_59940',
                        children: (0, r.jsx)('rect', {
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
