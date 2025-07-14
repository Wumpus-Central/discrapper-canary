n.d(t, { Z: () => U });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(692547),
    c = n(755721),
    u = n(481060),
    d = n(475179),
    p = n(100527),
    h = n(906732),
    f = n(358221),
    m = n(185935),
    g = n(522651),
    b = n(933557),
    _ = n(236091),
    y = n(623624),
    C = n(665149),
    x = n(984370),
    v = n(616286),
    j = n(975146),
    O = n(430824),
    E = n(496675),
    S = n(626135),
    I = n(431328),
    P = n(501655),
    Z = n(200498),
    N = n(146085),
    T = n(427679),
    A = n(592473),
    w = n(903108),
    R = n(981631),
    M = n(474936),
    D = n(388032),
    k = n(523335);
function L(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: i } = e,
        { analyticsLocations: l, newestAnalyticsLocation: s } = (0, h.ZP)(p.Z.VOICE_CHANNEL_HEADER),
        { chatOpen: c, participantsListOpen: u } = (0, o.cj)(
            [f.Z],
            () => ({
                chatOpen: f.Z.getChatOpen(t.id),
                participantsListOpen: f.Z.getParticipantsListOpen(t.id)
            }),
            [t.id]
        ),
        b = (0, Z.B)(t.id),
        y = (0, I.Rk)(t.id, P.pV.REQUESTED_TO_SPEAK_ONLY),
        { hasParticipantsPanel: C } = (0, m.Z)({ location: 'StageChannelCallHeader' }),
        x = C && u;
    return (0, r.jsxs)(h.Gt, {
        value: l,
        children: [
            (0, r.jsx)(_.Z, { channelId: t.id }, 'clips-enabled-indicator'),
            !i && b
                ? (0, r.jsx)('div', {
                      className: k.button,
                      children: (0, r.jsx)(A.Z, {
                          toggleRequestToSpeakSidebar: () => {
                              (c && d.Z.updateChatOpen(t.id, !1), u && d.Z.toggleParticipantsList(t.id, !1), (0, g.v)(s, g.d.OPEN_REQUEST_TO_SPEAK_SIDEBAR), n());
                          },
                          showRequestToSpeakSidebar: i,
                          numRequestToSpeak: y
                      })
                  })
                : null,
            !u &&
                C &&
                (0, r.jsx)(
                    j.Z,
                    {
                        className: a()(k.button, { [k.sidebarOpen]: c }),
                        onClick: () => {
                            (i && n(), d.Z.toggleParticipantsList(t.id, !u));
                        }
                    },
                    'participants-list-button'
                ),
            !c &&
                (0, r.jsx)('div', {
                    className: a()(k.button, { [k.sidebarOpen]: x || i }),
                    children: (0, r.jsx)(v.T, {
                        channelId: t.id,
                        showRequestToSpeakSidebar: i,
                        toggleRequestToSpeakSidebar: n,
                        iconClassName: k.buttonIcon
                    })
                })
        ]
    });
}
function U(e) {
    var t;
    let { channel: n, toggleRequestToSpeakSidebar: l, showRequestToSpeakSidebar: p } = e,
        h = (0, b.ZP)(n),
        f = (0, o.e7)([T.Z], () => T.Z.getStageInstanceByChannel(n.id)),
        m = (0, I.Io)(n.id),
        g = (0, I.Rk)(n.id, P.pV.AUDIENCE),
        _ = (0, o.e7)([O.Z], () => O.Z.getGuild(n.guild_id), [n.guild_id]),
        v = null != (t = null == _ ? void 0 : _.maxStageVideoChannelUsers) ? t : 0,
        j = null != _ && _.features.has(R.oNc.COMMUNITY) ? v < R.TU7 : (null == _ ? void 0 : _.premiumTier) !== R.Eu4.TIER_3 && v <= R.eez,
        Z = (0, w.Z)(n),
        A = (0, o.e7)([E.Z], () => E.Z.can(N.yP, n)),
        U = () => {
            (d.Z.updateStageVideoLimitBoostUpsellDismissed(n.id, !0),
                S.default.track(R.rMx.BOOSTING_UPSELL_CLICKED, {
                    guild_id: n.guild_id,
                    type: M.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: A,
                    action: M.T7.DISMISS
                }));
        },
        F = {
            canModerate: A,
            audienceCount: g,
            channel: n,
            speakerCount: m
        },
        H = i.useRef(F);
    (i.useEffect(() => {
        H.current = F;
    }),
        i.useEffect(() => {
            let { canModerate: e, audienceCount: t, channel: n, speakerCount: r } = H.current;
            Z &&
                S.default.track(R.rMx.BOOSTING_UPSELL_VIEWED, {
                    guild_id: n.guild_id,
                    type: M.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: e,
                    listener_count: r + t
                });
        }, [Z]));
    let G = (0, r.jsx)(u.f6W, {
        theme: R.BRd.DARK,
        children: (e) => {
            var t;
            return (0, r.jsxs)(C.ZP, {
                toolbar: (0, r.jsx)(L, {
                    toggleRequestToSpeakSidebar: l,
                    showRequestToSpeakSidebar: p,
                    channel: n
                }),
                onDoubleClick: x.O,
                transparent: !0,
                className: a()(e, k.participants),
                children: [
                    (0, r.jsx)(C.ZP.Icon, {
                        icon: u.ewx,
                        disabled: !0,
                        'aria-label': D.intl.string(D.t.EErMzM),
                        className: k.icon,
                        color: null != f ? s.Z.colors.HEADER_MUTED.css : void 0
                    }),
                    (0, r.jsx)(C.ZP.Title, {
                        className: k.channelName,
                        wrapperClassName: k.channelNameWrapper,
                        children: null != (t = null == f ? void 0 : f.topic) ? t : h
                    }),
                    (0, r.jsx)(C.ZP.Divider, { className: k.divider }),
                    (0, r.jsxs)(C.ZP.Title, {
                        children: [
                            (0, r.jsx)(u.S6n, {
                                size: 'xs',
                                color: s.Z.colors.TEXT_LOW_CONTRAST.css
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                className: k.speakerCount,
                                children: D.intl.format(D.t.chmM9P, { count: m })
                            }),
                            (0, r.jsx)(u.BFJ, {
                                size: 'xs',
                                className: k.icon,
                                color: 'currentColor'
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                className: k.speakerCount,
                                children: D.intl.format(D.t['+v2pNz'], { count: g })
                            })
                        ]
                    })
                ]
            });
        }
    });
    return Z
        ? (0, r.jsxs)('div', {
              children: [
                  G,
                  (0, r.jsxs)('div', {
                      className: k.boostUpsell,
                      children: [
                          (0, r.jsx)(B, {}),
                          (0, r.jsxs)('div', {
                              className: k.text,
                              children: [
                                  (0, r.jsx)(u.Text, {
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: j ? D.intl.string(D.t['T+zF9P']) : D.intl.string(D.t['IZ+SVl'])
                                  }),
                                  (0, r.jsx)(u.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-default',
                                      children: j ? D.intl.string(D.t.Izgpmp) : D.intl.string(D.t['7FHbPD'])
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', {
                              className: k.buttons,
                              children: j
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(c.zx, {
                                                className: k.notNowButton,
                                                onClick: U,
                                                look: c.zx.Looks.BLANK,
                                                size: c.zx.Sizes.SMALL,
                                                children: D.intl.string(D.t.L5eIZ2)
                                            }),
                                            (0, r.jsx)(u.gtL, {
                                                size: c.zx.Sizes.SMALL,
                                                onClick: () => {
                                                    ((0, y.f)({
                                                        guildId: n.guild_id,
                                                        location: { section: R.jXE.STAGE_VIDEO_LIMIT }
                                                    }),
                                                        S.default.track(R.rMx.BOOSTING_UPSELL_CLICKED, {
                                                            guild_id: n.guild_id,
                                                            type: M.cd.VIDEO_STAGE_LIMIT,
                                                            is_moderator: A,
                                                            action: M.T7.BOOST
                                                        }));
                                                },
                                                className: k.boostButton,
                                                children: D.intl.string(D.t.Uj0md3)
                                            })
                                        ]
                                    })
                                  : (0, r.jsx)(c.zx, {
                                        className: k.notNowButton,
                                        onClick: U,
                                        look: c.zx.Looks.BLANK,
                                        size: c.zx.Sizes.SMALL,
                                        children: D.intl.string(D.t.WAI6xs)
                                    })
                          })
                      ]
                  })
              ]
          })
        : G;
}
function B() {
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
