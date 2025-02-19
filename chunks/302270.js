n.d(t, { Z: () => z });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(692547),
    c = n(481060),
    u = n(475179),
    d = n(40851),
    p = n(358221),
    h = n(682901),
    f = n(185935),
    m = n(933557),
    g = n(320007),
    b = n(236091),
    _ = n(540059),
    C = n(623624),
    v = n(665149),
    y = n(984370),
    x = n(141321),
    j = n(618158),
    O = n(390322),
    N = n(616286),
    E = n(961048),
    P = n(975146),
    I = n(430824),
    S = n(496675),
    Z = n(626135),
    T = n(431328),
    A = n(501655),
    w = n(200498),
    R = n(146085),
    k = n(427679),
    M = n(592473),
    L = n(831002),
    D = n(903108),
    W = n(981631),
    U = n(474936),
    B = n(388032),
    F = n(471584);
function H(e) {
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
function G(e, t) {
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
function V(e) {
    let { inPopout: t, channel: n, toggleRequestToSpeakSidebar: l, showRequestToSpeakSidebar: s } = e,
        m = (0, d.bp)(),
        { chatOpen: C, participantsListOpen: v } = (0, a.cj)(
            [p.Z],
            () => ({
                chatOpen: p.Z.getChatOpen(n.id),
                participantsListOpen: p.Z.getParticipantsListOpen(n.id)
            }),
            [n.id]
        ),
        y = (0, w.B)(n.id),
        I = (0, T.Rk)(n.id, A.pV.REQUESTED_TO_SPEAK_ONLY),
        { preventIdle: S, allowIdle: Z } = (0, j.Y)('popup'),
        { hasParticipantsPanel: R } = (0, f.Z)({ location: 'StageChannelCallHeader' }),
        k = R && v,
        D = (0, _.Q3)('StageChannelCallHeader'),
        { enabled: W } = (0, h.Z)({ location: 'StageChannelCallHeader' });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(b.Z, { channelId: n.id }, 'clips-enabled-indicator'),
            !W &&
                (0, r.jsx)(
                    c.yRy,
                    {
                        position: 'bottom',
                        animation: c.yRy.Animation.NONE,
                        align: 'right',
                        renderPopout: (e) =>
                            (0, r.jsx)(O.Z, {
                                children: (0, r.jsx)(
                                    L.ZP,
                                    G(H({}, e), {
                                        channelId: n.id,
                                        appContext: m
                                    })
                                )
                            }),
                        autoInvert: !1,
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, i.createElement)(
                                E.Z,
                                G(H({}, e), {
                                    key: 'more-options',
                                    isActive: n,
                                    className: F.button,
                                    iconClassName: F.buttonIcon
                                })
                            );
                        }
                    },
                    'more-options-popout'
                ),
            !D && !t && (0, r.jsx)(g.Z, { className: F.button }, 'clips'),
            !W &&
                !D &&
                (0, r.jsx)(
                    x.Z,
                    {
                        onOpen: S,
                        onClose: Z,
                        className: F.button
                    },
                    'recents'
                ),
            !s && y
                ? (0, r.jsx)('div', {
                      className: F.button,
                      children: (0, r.jsx)(M.Z, {
                          toggleRequestToSpeakSidebar: () => {
                              C && u.Z.updateChatOpen(n.id, !1), v && u.Z.toggleParticipantsList(n.id, !1), l();
                          },
                          showRequestToSpeakSidebar: s,
                          numRequestToSpeak: I
                      })
                  })
                : null,
            !v &&
                R &&
                (0, r.jsx)(
                    P.Z,
                    {
                        className: o()(F.button, { [F.sidebarOpen]: C }),
                        onClick: () => {
                            s && l(), u.Z.toggleParticipantsList(n.id, !v);
                        }
                    },
                    'participants-list-button'
                ),
            !C &&
                (0, r.jsx)('div', {
                    className: o()(F.button, { [F.sidebarOpen]: k || s }),
                    children: (0, r.jsx)(N.T, {
                        channelId: n.id,
                        showRequestToSpeakSidebar: s,
                        toggleRequestToSpeakSidebar: l,
                        iconClassName: F.buttonIcon
                    })
                })
        ]
    });
}
function z(e) {
    var t;
    let { inPopout: n, channel: l, toggleRequestToSpeakSidebar: d, showRequestToSpeakSidebar: p } = e,
        h = (0, m.ZP)(l),
        f = (0, a.e7)([k.Z], () => k.Z.getStageInstanceByChannel(l.id)),
        g = (0, T.Io)(l.id),
        b = (0, T.Rk)(l.id, A.pV.AUDIENCE),
        x = (0, a.e7)([I.Z], () => I.Z.getGuild(l.guild_id), [l.guild_id]),
        j = null !== (t = null == x ? void 0 : x.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
        O = (null == x ? void 0 : x.isCommunity()) ? j < W.TU7 : (null == x ? void 0 : x.premiumTier) !== W.Eu4.TIER_3 && j <= W.eez,
        N = (0, D.Z)(l),
        E = (0, a.e7)([S.Z], () => S.Z.can(R.yP, l)),
        P = (0, _.Q3)('StageChannelCallHeader'),
        w = () => {
            u.Z.updateStageVideoLimitBoostUpsellDismissed(l.id, !0),
                Z.default.track(W.rMx.BOOSTING_UPSELL_CLICKED, {
                    guild_id: l.guild_id,
                    type: U.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: E,
                    action: U.T7.DISMISS
                });
        },
        M = {
            canModerate: E,
            audienceCount: b,
            channel: l,
            speakerCount: g
        },
        L = i.useRef(M);
    i.useEffect(() => {
        L.current = M;
    }),
        i.useEffect(() => {
            let { canModerate: e, audienceCount: t, channel: n, speakerCount: r } = L.current;
            N &&
                Z.default.track(W.rMx.BOOSTING_UPSELL_VIEWED, {
                    guild_id: n.guild_id,
                    type: U.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: e,
                    listener_count: r + t
                });
        }, [N]);
    let H = (0, r.jsx)(c.f6W, {
        theme: W.BRd.DARK,
        children: (e) => {
            var t;
            return (0, r.jsxs)(v.ZP, {
                toolbar: (0, r.jsx)(V, {
                    inPopout: n,
                    toggleRequestToSpeakSidebar: d,
                    showRequestToSpeakSidebar: p,
                    channel: l
                }),
                onDoubleClick: y.O,
                transparent: !0,
                className: o()(e, F.participants),
                children: [
                    (0, r.jsx)(v.ZP.Icon, {
                        icon: c.ewx,
                        disabled: !0,
                        'aria-label': B.NW.string(B.t.EErMzM),
                        className: F.icon,
                        color: null != f ? (P ? s.Z.colors.HEADER_MUTED.css : s.Z.unsafe_rawColors.GREEN_360.css) : void 0
                    }),
                    (0, r.jsx)(v.ZP.Title, {
                        className: F.channelName,
                        wrapperClassName: F.channelNameWrapper,
                        children: null !== (t = null == f ? void 0 : f.topic) && void 0 !== t ? t : h
                    }),
                    (0, r.jsx)(v.ZP.Divider, { className: F.divider }),
                    (0, r.jsxs)(v.ZP.Title, {
                        children: [
                            (0, r.jsx)(c.S6n, {
                                size: 'xs',
                                color: P ? s.Z.colors.TEXT_LOW_CONTRAST.css : 'currentColor'
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: P ? 'text-sm/normal' : 'text-xs/medium',
                                color: P ? 'text-muted' : 'header-secondary',
                                className: F.speakerCount,
                                children: B.NW.format(B.t.chmM9P, { count: g })
                            }),
                            (0, r.jsx)(c.BFJ, {
                                size: 'xs',
                                className: F.icon,
                                color: 'currentColor'
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: P ? 'text-sm/normal' : 'text-xs/medium',
                                color: P ? 'text-muted' : 'header-secondary',
                                className: F.speakerCount,
                                children: B.NW.format(B.t['+v2pNz'], { count: b })
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
                  H,
                  (0, r.jsxs)('div', {
                      className: F.boostUpsell,
                      children: [
                          (0, r.jsx)(q, {}),
                          (0, r.jsxs)('div', {
                              className: F.text,
                              children: [
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: O ? B.NW.string(B.t['T+zF9P']) : B.NW.string(B.t['IZ+SVl'])
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: O ? B.NW.string(B.t.Izgpmp) : B.NW.string(B.t['7FHbPD'])
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', {
                              className: F.buttons,
                              children: O
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(c.zxk, {
                                                className: F.notNowButton,
                                                onClick: w,
                                                look: c.zxk.Looks.BLANK,
                                                size: c.zxk.Sizes.SMALL,
                                                children: B.NW.string(B.t.L5eIZ2)
                                            }),
                                            (0, r.jsx)(c.gtL, {
                                                size: c.zxk.Sizes.SMALL,
                                                onClick: () => {
                                                    (0, C.f)({
                                                        guildId: l.guild_id,
                                                        location: { section: W.jXE.STAGE_VIDEO_LIMIT }
                                                    }),
                                                        Z.default.track(W.rMx.BOOSTING_UPSELL_CLICKED, {
                                                            guild_id: l.guild_id,
                                                            type: U.cd.VIDEO_STAGE_LIMIT,
                                                            is_moderator: E,
                                                            action: U.T7.BOOST
                                                        });
                                                },
                                                className: F.boostButton,
                                                children: B.NW.string(B.t.Uj0md3)
                                            })
                                        ]
                                    })
                                  : (0, r.jsx)(c.zxk, {
                                        className: F.notNowButton,
                                        onClick: w,
                                        look: c.zxk.Looks.BLANK,
                                        size: c.zxk.Sizes.SMALL,
                                        children: B.NW.string(B.t.WAI6xs)
                                    })
                          })
                      ]
                  })
              ]
          })
        : H;
}
function q() {
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
