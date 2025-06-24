n.d(t, { Z: () => L });
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
    b = n(236091),
    _ = n(623624),
    y = n(665149),
    x = n(984370),
    C = n(616286),
    v = n(975146),
    j = n(430824),
    O = n(496675),
    E = n(626135),
    I = n(431328),
    S = n(501655),
    P = n(200498),
    Z = n(146085),
    N = n(427679),
    T = n(592473),
    A = n(903108),
    w = n(981631),
    R = n(474936),
    M = n(388032),
    k = n(523335);
function D(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: i } = e,
        { analyticsLocations: l, newestAnalyticsLocation: s } = (0, p.ZP)(d.Z.VOICE_CHANNEL_HEADER),
        { chatOpen: c, participantsListOpen: g } = (0, o.cj)(
            [h.Z],
            () => ({
                chatOpen: h.Z.getChatOpen(t.id),
                participantsListOpen: h.Z.getParticipantsListOpen(t.id)
            }),
            [t.id]
        ),
        _ = (0, P.B)(t.id),
        y = (0, I.Rk)(t.id, S.pV.REQUESTED_TO_SPEAK_ONLY),
        { hasParticipantsPanel: x } = (0, f.Z)({ location: 'StageChannelCallHeader' }),
        j = x && g;
    return (0, r.jsxs)(p.Gt, {
        value: l,
        children: [
            (0, r.jsx)(b.Z, { channelId: t.id }, 'clips-enabled-indicator'),
            !i && _
                ? (0, r.jsx)('div', {
                      className: k.button,
                      children: (0, r.jsx)(T.Z, {
                          toggleRequestToSpeakSidebar: () => {
                              c && u.Z.updateChatOpen(t.id, !1), g && u.Z.toggleParticipantsList(t.id, !1), (0, m.v)(s, m.d.OPEN_REQUEST_TO_SPEAK_SIDEBAR), n();
                          },
                          showRequestToSpeakSidebar: i,
                          numRequestToSpeak: y
                      })
                  })
                : null,
            !g &&
                x &&
                (0, r.jsx)(
                    v.Z,
                    {
                        className: a()(k.button, { [k.sidebarOpen]: c }),
                        onClick: () => {
                            i && n(), u.Z.toggleParticipantsList(t.id, !g);
                        }
                    },
                    'participants-list-button'
                ),
            !c &&
                (0, r.jsx)('div', {
                    className: a()(k.button, { [k.sidebarOpen]: j || i }),
                    children: (0, r.jsx)(C.T, {
                        channelId: t.id,
                        showRequestToSpeakSidebar: i,
                        toggleRequestToSpeakSidebar: n,
                        iconClassName: k.buttonIcon
                    })
                })
        ]
    });
}
function L(e) {
    var t;
    let { channel: n, toggleRequestToSpeakSidebar: l, showRequestToSpeakSidebar: d } = e,
        p = (0, g.ZP)(n),
        h = (0, o.e7)([N.Z], () => N.Z.getStageInstanceByChannel(n.id)),
        f = (0, I.Io)(n.id),
        m = (0, I.Rk)(n.id, S.pV.AUDIENCE),
        b = (0, o.e7)([j.Z], () => j.Z.getGuild(n.guild_id), [n.guild_id]),
        C = null != (t = null == b ? void 0 : b.maxStageVideoChannelUsers) ? t : 0,
        v = (null == b ? void 0 : b.isCommunity()) ? C < w.TU7 : (null == b ? void 0 : b.premiumTier) !== w.Eu4.TIER_3 && C <= w.eez,
        P = (0, A.Z)(n),
        T = (0, o.e7)([O.Z], () => O.Z.can(Z.yP, n)),
        L = () => {
            u.Z.updateStageVideoLimitBoostUpsellDismissed(n.id, !0),
                E.default.track(w.rMx.BOOSTING_UPSELL_CLICKED, {
                    guild_id: n.guild_id,
                    type: R.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: T,
                    action: R.T7.DISMISS
                });
        },
        B = {
            canModerate: T,
            audienceCount: m,
            channel: n,
            speakerCount: f
        },
        F = i.useRef(B);
    i.useEffect(() => {
        F.current = B;
    }),
        i.useEffect(() => {
            let { canModerate: e, audienceCount: t, channel: n, speakerCount: r } = F.current;
            P &&
                E.default.track(w.rMx.BOOSTING_UPSELL_VIEWED, {
                    guild_id: n.guild_id,
                    type: R.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: e,
                    listener_count: r + t
                });
        }, [P]);
    let G = (0, r.jsx)(c.f6W, {
        theme: w.BRd.DARK,
        children: (e) => {
            var t;
            return (0, r.jsxs)(y.ZP, {
                toolbar: (0, r.jsx)(D, {
                    toggleRequestToSpeakSidebar: l,
                    showRequestToSpeakSidebar: d,
                    channel: n
                }),
                onDoubleClick: x.O,
                transparent: !0,
                className: a()(e, k.participants),
                children: [
                    (0, r.jsx)(y.ZP.Icon, {
                        icon: c.ewx,
                        disabled: !0,
                        'aria-label': M.intl.string(M.t.EErMzM),
                        className: k.icon,
                        color: null != h ? s.Z.colors.HEADER_MUTED.css : void 0
                    }),
                    (0, r.jsx)(y.ZP.Title, {
                        className: k.channelName,
                        wrapperClassName: k.channelNameWrapper,
                        children: null != (t = null == h ? void 0 : h.topic) ? t : p
                    }),
                    (0, r.jsx)(y.ZP.Divider, { className: k.divider }),
                    (0, r.jsxs)(y.ZP.Title, {
                        children: [
                            (0, r.jsx)(c.S6n, {
                                size: 'xs',
                                color: s.Z.colors.TEXT_LOW_CONTRAST.css
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                className: k.speakerCount,
                                children: M.intl.format(M.t.chmM9P, { count: f })
                            }),
                            (0, r.jsx)(c.BFJ, {
                                size: 'xs',
                                className: k.icon,
                                color: 'currentColor'
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                className: k.speakerCount,
                                children: M.intl.format(M.t['+v2pNz'], { count: m })
                            })
                        ]
                    })
                ]
            });
        }
    });
    return P
        ? (0, r.jsxs)('div', {
              children: [
                  G,
                  (0, r.jsxs)('div', {
                      className: k.boostUpsell,
                      children: [
                          (0, r.jsx)(U, {}),
                          (0, r.jsxs)('div', {
                              className: k.text,
                              children: [
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: v ? M.intl.string(M.t['T+zF9P']) : M.intl.string(M.t['IZ+SVl'])
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: v ? M.intl.string(M.t.Izgpmp) : M.intl.string(M.t['7FHbPD'])
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', {
                              className: k.buttons,
                              children: v
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(c.zxk, {
                                                className: k.notNowButton,
                                                onClick: L,
                                                look: c.zxk.Looks.BLANK,
                                                size: c.zxk.Sizes.SMALL,
                                                children: M.intl.string(M.t.L5eIZ2)
                                            }),
                                            (0, r.jsx)(c.gtL, {
                                                size: c.zxk.Sizes.SMALL,
                                                onClick: () => {
                                                    (0, _.f)({
                                                        guildId: n.guild_id,
                                                        location: { section: w.jXE.STAGE_VIDEO_LIMIT }
                                                    }),
                                                        E.default.track(w.rMx.BOOSTING_UPSELL_CLICKED, {
                                                            guild_id: n.guild_id,
                                                            type: R.cd.VIDEO_STAGE_LIMIT,
                                                            is_moderator: T,
                                                            action: R.T7.BOOST
                                                        });
                                                },
                                                className: k.boostButton,
                                                children: M.intl.string(M.t.Uj0md3)
                                            })
                                        ]
                                    })
                                  : (0, r.jsx)(c.zxk, {
                                        className: k.notNowButton,
                                        onClick: L,
                                        look: c.zxk.Looks.BLANK,
                                        size: c.zxk.Sizes.SMALL,
                                        children: M.intl.string(M.t.WAI6xs)
                                    })
                          })
                      ]
                  })
              ]
          })
        : G;
}
function U() {
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
