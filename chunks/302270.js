n.d(t, { Z: () => Q });
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
    b = n(795318),
    _ = n(933557),
    C = n(320007),
    y = n(236091),
    x = n(540059),
    v = n(623624),
    j = n(665149),
    O = n(984370),
    E = n(141321),
    N = n(221241),
    I = n(618158),
    P = n(390322),
    S = n(616286),
    Z = n(961048),
    T = n(975146),
    A = n(430824),
    w = n(496675),
    R = n(626135),
    M = n(431328),
    k = n(501655),
    L = n(200498),
    D = n(146085),
    W = n(427679),
    U = n(592473),
    B = n(831002),
    H = n(903108),
    F = n(981631),
    G = n(354459),
    V = n(474936),
    z = n(388032),
    Y = n(523335);
function q(e) {
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
function K(e, t) {
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
function X(e) {
    let { inPopout: t, channel: n, toggleRequestToSpeakSidebar: l, showRequestToSpeakSidebar: s } = e,
        _ = (0, d.bp)(),
        { analyticsLocations: v, newestAnalyticsLocation: j } = (0, h.ZP)(p.Z.VOICE_CHANNEL_HEADER),
        { chatOpen: O, participantsListOpen: A } = (0, a.cj)(
            [f.Z],
            () => ({
                chatOpen: f.Z.getChatOpen(n.id),
                participantsListOpen: f.Z.getParticipantsListOpen(n.id)
            }),
            [n.id]
        ),
        w = (0, L.B)(n.id),
        R = (0, M.Rk)(n.id, k.pV.REQUESTED_TO_SPEAK_ONLY),
        { preventIdle: D, allowIdle: W } = (0, I.Y)('popup'),
        { hasParticipantsPanel: H } = (0, m.Z)({ location: 'StageChannelCallHeader' }),
        F = H && A,
        V = (0, x.Q3)('StageChannelCallHeader'),
        { simplifiedSettingsEnabled: z } = (0, N.Z)({ location: 'StageChannelCallHeader' });
    return (0, r.jsxs)(h.Gt, {
        value: v,
        children: [
            (0, r.jsx)(y.Z, { channelId: n.id }, 'clips-enabled-indicator'),
            !z &&
                (0, r.jsx)(
                    c.yRy,
                    {
                        position: 'bottom',
                        animation: c.yRy.Animation.NONE,
                        align: 'right',
                        renderPopout: (e) =>
                            (0, r.jsx)(P.Z, {
                                children: (0, r.jsx)(
                                    B.ZP,
                                    K(q({}, e), {
                                        channelId: n.id,
                                        appContext: _,
                                        onInteraction: (0, b.u)('StageChannelCallOverflowMenu', j, { entrypoint: G.A5.THREE_DOT })
                                    })
                                )
                            }),
                        autoInvert: !1,
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, i.createElement)(
                                Z.Z,
                                K(q({}, e), {
                                    key: 'more-options',
                                    isActive: n,
                                    className: Y.button,
                                    iconClassName: Y.buttonIcon
                                })
                            );
                        }
                    },
                    'more-options-popout'
                ),
            !V && !t && (0, r.jsx)(C.Z, { className: Y.button }, 'clips'),
            !z &&
                !V &&
                (0, r.jsx)(
                    E.Z,
                    {
                        onOpen: D,
                        onClose: W,
                        className: Y.button
                    },
                    'recents'
                ),
            !s && w
                ? (0, r.jsx)('div', {
                      className: Y.button,
                      children: (0, r.jsx)(U.Z, {
                          toggleRequestToSpeakSidebar: () => {
                              O && u.Z.updateChatOpen(n.id, !1), A && u.Z.toggleParticipantsList(n.id, !1), (0, g.v)(j, g.d.OPEN_REQUEST_TO_SPEAK_SIDEBAR), l();
                          },
                          showRequestToSpeakSidebar: s,
                          numRequestToSpeak: R
                      })
                  })
                : null,
            !A &&
                H &&
                (0, r.jsx)(
                    T.Z,
                    {
                        className: o()(Y.button, { [Y.sidebarOpen]: O }),
                        onClick: () => {
                            s && l(), u.Z.toggleParticipantsList(n.id, !A);
                        }
                    },
                    'participants-list-button'
                ),
            !O &&
                (0, r.jsx)('div', {
                    className: o()(Y.button, { [Y.sidebarOpen]: F || s }),
                    children: (0, r.jsx)(S.T, {
                        channelId: n.id,
                        showRequestToSpeakSidebar: s,
                        toggleRequestToSpeakSidebar: l,
                        iconClassName: Y.buttonIcon
                    })
                })
        ]
    });
}
function Q(e) {
    var t;
    let { inPopout: n, channel: l, toggleRequestToSpeakSidebar: d, showRequestToSpeakSidebar: p } = e,
        h = (0, _.ZP)(l),
        f = (0, a.e7)([W.Z], () => W.Z.getStageInstanceByChannel(l.id)),
        m = (0, M.Io)(l.id),
        g = (0, M.Rk)(l.id, k.pV.AUDIENCE),
        b = (0, a.e7)([A.Z], () => A.Z.getGuild(l.guild_id), [l.guild_id]),
        C = null != (t = null == b ? void 0 : b.maxStageVideoChannelUsers) ? t : 0,
        y = (null == b ? void 0 : b.isCommunity()) ? C < F.TU7 : (null == b ? void 0 : b.premiumTier) !== F.Eu4.TIER_3 && C <= F.eez,
        E = (0, H.Z)(l),
        N = (0, a.e7)([w.Z], () => w.Z.can(D.yP, l)),
        I = (0, x.Q3)('StageChannelCallHeader'),
        P = () => {
            u.Z.updateStageVideoLimitBoostUpsellDismissed(l.id, !0),
                R.default.track(F.rMx.BOOSTING_UPSELL_CLICKED, {
                    guild_id: l.guild_id,
                    type: V.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: N,
                    action: V.T7.DISMISS
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
                R.default.track(F.rMx.BOOSTING_UPSELL_VIEWED, {
                    guild_id: n.guild_id,
                    type: V.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: e,
                    listener_count: r + t
                });
        }, [E]);
    let T = (0, r.jsx)(c.f6W, {
        theme: F.BRd.DARK,
        children: (e) => {
            var t;
            return (0, r.jsxs)(j.ZP, {
                toolbar: (0, r.jsx)(X, {
                    inPopout: n,
                    toggleRequestToSpeakSidebar: d,
                    showRequestToSpeakSidebar: p,
                    channel: l
                }),
                onDoubleClick: O.O,
                transparent: !0,
                className: o()(e, Y.participants),
                children: [
                    (0, r.jsx)(j.ZP.Icon, {
                        icon: c.ewx,
                        disabled: !0,
                        'aria-label': z.NW.string(z.t.EErMzM),
                        className: Y.icon,
                        color: null != f ? (I ? s.Z.colors.HEADER_MUTED.css : s.Z.unsafe_rawColors.GREEN_360.css) : void 0
                    }),
                    (0, r.jsx)(j.ZP.Title, {
                        className: Y.channelName,
                        wrapperClassName: Y.channelNameWrapper,
                        children: null != (t = null == f ? void 0 : f.topic) ? t : h
                    }),
                    (0, r.jsx)(j.ZP.Divider, { className: Y.divider }),
                    (0, r.jsxs)(j.ZP.Title, {
                        children: [
                            (0, r.jsx)(c.S6n, {
                                size: 'xs',
                                color: I ? s.Z.colors.TEXT_LOW_CONTRAST.css : 'currentColor'
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: I ? 'text-sm/normal' : 'text-xs/medium',
                                color: I ? 'text-muted' : 'header-secondary',
                                className: Y.speakerCount,
                                children: z.NW.format(z.t.chmM9P, { count: m })
                            }),
                            (0, r.jsx)(c.BFJ, {
                                size: 'xs',
                                className: Y.icon,
                                color: 'currentColor'
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: I ? 'text-sm/normal' : 'text-xs/medium',
                                color: I ? 'text-muted' : 'header-secondary',
                                className: Y.speakerCount,
                                children: z.NW.format(z.t['+v2pNz'], { count: g })
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
                  T,
                  (0, r.jsxs)('div', {
                      className: Y.boostUpsell,
                      children: [
                          (0, r.jsx)(J, {}),
                          (0, r.jsxs)('div', {
                              className: Y.text,
                              children: [
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: y ? z.NW.string(z.t['T+zF9P']) : z.NW.string(z.t['IZ+SVl'])
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: y ? z.NW.string(z.t.Izgpmp) : z.NW.string(z.t['7FHbPD'])
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', {
                              className: Y.buttons,
                              children: y
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(c.zxk, {
                                                className: Y.notNowButton,
                                                onClick: P,
                                                look: c.zxk.Looks.BLANK,
                                                size: c.zxk.Sizes.SMALL,
                                                children: z.NW.string(z.t.L5eIZ2)
                                            }),
                                            (0, r.jsx)(c.gtL, {
                                                size: c.zxk.Sizes.SMALL,
                                                onClick: () => {
                                                    (0, v.f)({
                                                        guildId: l.guild_id,
                                                        location: { section: F.jXE.STAGE_VIDEO_LIMIT }
                                                    }),
                                                        R.default.track(F.rMx.BOOSTING_UPSELL_CLICKED, {
                                                            guild_id: l.guild_id,
                                                            type: V.cd.VIDEO_STAGE_LIMIT,
                                                            is_moderator: N,
                                                            action: V.T7.BOOST
                                                        });
                                                },
                                                className: Y.boostButton,
                                                children: z.NW.string(z.t.Uj0md3)
                                            })
                                        ]
                                    })
                                  : (0, r.jsx)(c.zxk, {
                                        className: Y.notNowButton,
                                        onClick: P,
                                        look: c.zxk.Looks.BLANK,
                                        size: c.zxk.Sizes.SMALL,
                                        children: z.NW.string(z.t.WAI6xs)
                                    })
                          })
                      ]
                  })
              ]
          })
        : T;
}
function J() {
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
