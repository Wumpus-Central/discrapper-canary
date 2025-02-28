n.d(t, { Z: () => K });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(692547),
    c = n(481060),
    u = n(475179),
    d = n(40851),
    p = n(100527),
    h = n(906732),
    f = n(358221),
    m = n(185935),
    g = n(522651),
    b = n(933557),
    _ = n(320007),
    C = n(236091),
    v = n(540059),
    y = n(623624),
    x = n(665149),
    j = n(984370),
    O = n(141321),
    E = n(221241),
    N = n(618158),
    I = n(390322),
    P = n(616286),
    S = n(961048),
    Z = n(975146),
    T = n(430824),
    A = n(496675),
    w = n(626135),
    R = n(431328),
    M = n(501655),
    k = n(200498),
    L = n(146085),
    D = n(427679),
    W = n(592473),
    U = n(831002),
    B = n(903108),
    H = n(981631),
    F = n(474936),
    G = n(388032),
    V = n(727838);
function z(e) {
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
function Y(e, t) {
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
function q(e) {
    let { inPopout: t, channel: n, toggleRequestToSpeakSidebar: l, showRequestToSpeakSidebar: s } = e,
        b = (0, d.bp)(),
        { analyticsLocations: y, newestAnalyticsLocation: x } = (0, h.ZP)(p.Z.VOICE_CHANNEL_HEADER),
        { chatOpen: j, participantsListOpen: T } = (0, a.cj)(
            [f.Z],
            () => ({
                chatOpen: f.Z.getChatOpen(n.id),
                participantsListOpen: f.Z.getParticipantsListOpen(n.id)
            }),
            [n.id]
        ),
        A = (0, k.B)(n.id),
        w = (0, R.Rk)(n.id, M.pV.REQUESTED_TO_SPEAK_ONLY),
        { preventIdle: L, allowIdle: D } = (0, N.Y)('popup'),
        { hasParticipantsPanel: B } = (0, m.Z)({ location: 'StageChannelCallHeader' }),
        H = B && T,
        F = (0, v.Q3)('StageChannelCallHeader'),
        { simplifiedSettingsEnabled: G } = (0, E.Z)({ location: 'StageChannelCallHeader' });
    return (0, r.jsxs)(h.Gt, {
        value: y,
        children: [
            (0, r.jsx)(C.Z, { channelId: n.id }, 'clips-enabled-indicator'),
            !G &&
                (0, r.jsx)(
                    c.yRy,
                    {
                        position: 'bottom',
                        animation: c.yRy.Animation.NONE,
                        align: 'right',
                        renderPopout: (e) =>
                            (0, r.jsx)(I.Z, {
                                children: (0, r.jsx)(
                                    U.ZP,
                                    Y(z({}, e), {
                                        channelId: n.id,
                                        appContext: b
                                    })
                                )
                            }),
                        autoInvert: !1,
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, i.createElement)(
                                S.Z,
                                Y(z({}, e), {
                                    key: 'more-options',
                                    isActive: n,
                                    className: V.button,
                                    iconClassName: V.buttonIcon
                                })
                            );
                        }
                    },
                    'more-options-popout'
                ),
            !F && !t && (0, r.jsx)(_.Z, { className: V.button }, 'clips'),
            !G &&
                !F &&
                (0, r.jsx)(
                    O.Z,
                    {
                        onOpen: L,
                        onClose: D,
                        className: V.button
                    },
                    'recents'
                ),
            !s && A
                ? (0, r.jsx)('div', {
                      className: V.button,
                      children: (0, r.jsx)(W.Z, {
                          toggleRequestToSpeakSidebar: () => {
                              j && u.Z.updateChatOpen(n.id, !1), T && u.Z.toggleParticipantsList(n.id, !1), (0, g.v)(x, g.d.OPEN_REQUEST_TO_SPEAK_SIDEBAR), l();
                          },
                          showRequestToSpeakSidebar: s,
                          numRequestToSpeak: w
                      })
                  })
                : null,
            !T &&
                B &&
                (0, r.jsx)(
                    Z.Z,
                    {
                        className: o()(V.button, { [V.sidebarOpen]: j }),
                        onClick: () => {
                            s && l(), u.Z.toggleParticipantsList(n.id, !T);
                        }
                    },
                    'participants-list-button'
                ),
            !j &&
                (0, r.jsx)('div', {
                    className: o()(V.button, { [V.sidebarOpen]: H || s }),
                    children: (0, r.jsx)(P.T, {
                        channelId: n.id,
                        showRequestToSpeakSidebar: s,
                        toggleRequestToSpeakSidebar: l,
                        iconClassName: V.buttonIcon
                    })
                })
        ]
    });
}
function K(e) {
    var t;
    let { inPopout: n, channel: l, toggleRequestToSpeakSidebar: d, showRequestToSpeakSidebar: p } = e,
        h = (0, b.ZP)(l),
        f = (0, a.e7)([D.Z], () => D.Z.getStageInstanceByChannel(l.id)),
        m = (0, R.Io)(l.id),
        g = (0, R.Rk)(l.id, M.pV.AUDIENCE),
        _ = (0, a.e7)([T.Z], () => T.Z.getGuild(l.guild_id), [l.guild_id]),
        C = null !== (t = null == _ ? void 0 : _.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
        O = (null == _ ? void 0 : _.isCommunity()) ? C < H.TU7 : (null == _ ? void 0 : _.premiumTier) !== H.Eu4.TIER_3 && C <= H.eez,
        E = (0, B.Z)(l),
        N = (0, a.e7)([A.Z], () => A.Z.can(L.yP, l)),
        I = (0, v.Q3)('StageChannelCallHeader'),
        P = () => {
            u.Z.updateStageVideoLimitBoostUpsellDismissed(l.id, !0),
                w.default.track(H.rMx.BOOSTING_UPSELL_CLICKED, {
                    guild_id: l.guild_id,
                    type: F.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: N,
                    action: F.T7.DISMISS
                });
        },
        S = {
            canModerate: N,
            audienceCount: g,
            channel: l,
            speakerCount: m
        },
        Z = i.useRef(S);
    i.useEffect(() => {
        Z.current = S;
    }),
        i.useEffect(() => {
            let { canModerate: e, audienceCount: t, channel: n, speakerCount: r } = Z.current;
            E &&
                w.default.track(H.rMx.BOOSTING_UPSELL_VIEWED, {
                    guild_id: n.guild_id,
                    type: F.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: e,
                    listener_count: r + t
                });
        }, [E]);
    let k = (0, r.jsx)(c.f6W, {
        theme: H.BRd.DARK,
        children: (e) => {
            var t;
            return (0, r.jsxs)(x.ZP, {
                toolbar: (0, r.jsx)(q, {
                    inPopout: n,
                    toggleRequestToSpeakSidebar: d,
                    showRequestToSpeakSidebar: p,
                    channel: l
                }),
                onDoubleClick: j.O,
                transparent: !0,
                className: o()(e, V.participants),
                children: [
                    (0, r.jsx)(x.ZP.Icon, {
                        icon: c.ewx,
                        disabled: !0,
                        'aria-label': G.NW.string(G.t.EErMzM),
                        className: V.icon,
                        color: null != f ? (I ? s.Z.colors.HEADER_MUTED.css : s.Z.unsafe_rawColors.GREEN_360.css) : void 0
                    }),
                    (0, r.jsx)(x.ZP.Title, {
                        className: V.channelName,
                        wrapperClassName: V.channelNameWrapper,
                        children: null !== (t = null == f ? void 0 : f.topic) && void 0 !== t ? t : h
                    }),
                    (0, r.jsx)(x.ZP.Divider, { className: V.divider }),
                    (0, r.jsxs)(x.ZP.Title, {
                        children: [
                            (0, r.jsx)(c.S6n, {
                                size: 'xs',
                                color: I ? s.Z.colors.TEXT_LOW_CONTRAST.css : 'currentColor'
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: I ? 'text-sm/normal' : 'text-xs/medium',
                                color: I ? 'text-muted' : 'header-secondary',
                                className: V.speakerCount,
                                children: G.NW.format(G.t.chmM9P, { count: m })
                            }),
                            (0, r.jsx)(c.BFJ, {
                                size: 'xs',
                                className: V.icon,
                                color: 'currentColor'
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: I ? 'text-sm/normal' : 'text-xs/medium',
                                color: I ? 'text-muted' : 'header-secondary',
                                className: V.speakerCount,
                                children: G.NW.format(G.t['+v2pNz'], { count: g })
                            })
                        ]
                    })
                ]
            });
        }
    });
    return E
        ? (0, r.jsxs)('div', {
              children: [
                  k,
                  (0, r.jsxs)('div', {
                      className: V.boostUpsell,
                      children: [
                          (0, r.jsx)(X, {}),
                          (0, r.jsxs)('div', {
                              className: V.text,
                              children: [
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: O ? G.NW.string(G.t['T+zF9P']) : G.NW.string(G.t['IZ+SVl'])
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: O ? G.NW.string(G.t.Izgpmp) : G.NW.string(G.t['7FHbPD'])
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', {
                              className: V.buttons,
                              children: O
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(c.zxk, {
                                                className: V.notNowButton,
                                                onClick: P,
                                                look: c.zxk.Looks.BLANK,
                                                size: c.zxk.Sizes.SMALL,
                                                children: G.NW.string(G.t.L5eIZ2)
                                            }),
                                            (0, r.jsx)(c.gtL, {
                                                size: c.zxk.Sizes.SMALL,
                                                onClick: () => {
                                                    (0, y.f)({
                                                        guildId: l.guild_id,
                                                        location: { section: H.jXE.STAGE_VIDEO_LIMIT }
                                                    }),
                                                        w.default.track(H.rMx.BOOSTING_UPSELL_CLICKED, {
                                                            guild_id: l.guild_id,
                                                            type: F.cd.VIDEO_STAGE_LIMIT,
                                                            is_moderator: N,
                                                            action: F.T7.BOOST
                                                        });
                                                },
                                                className: V.boostButton,
                                                children: G.NW.string(G.t.Uj0md3)
                                            })
                                        ]
                                    })
                                  : (0, r.jsx)(c.zxk, {
                                        className: V.notNowButton,
                                        onClick: P,
                                        look: c.zxk.Looks.BLANK,
                                        size: c.zxk.Sizes.SMALL,
                                        children: G.NW.string(G.t.WAI6xs)
                                    })
                          })
                      ]
                  })
              ]
          })
        : k;
}
function X() {
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
