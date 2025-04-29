n.d(t, { Z: () => Q }), n(539854);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n.n(a),
    c = n(442837),
    u = n(481060),
    d = n(475179),
    p = n(100527),
    h = n(906732),
    f = n(194082),
    m = n(320007),
    g = n(236091),
    b = n(540059),
    _ = n(569545),
    y = n(517525),
    C = n(665149),
    x = n(141321),
    v = n(2818),
    j = n(954551),
    O = n(221241),
    E = n(44136),
    I = n(651183),
    P = n(853476),
    S = n(618158),
    Z = n(390322),
    N = n(616286),
    T = n(961048),
    A = n(179424),
    w = n(786915),
    R = n(975146),
    k = n(991617),
    M = n(597998),
    L = n(606304),
    D = n(358221),
    U = n(887012),
    B = n(444253),
    G = n(355827),
    F = n(185935),
    H = n(795318),
    V = n(354459),
    z = n(981631),
    W = n(388032),
    Y = n(232989);
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
    let { channelId: t, guildId: n } = e,
        i = (0, c.Wu)([L.Z, D.Z], () => {
            let e = Date.now();
            return s()(L.Z.getSpeakers())
                .map((e) => D.Z.getParticipant(t, e))
                .filter((e) => null != e && e.type === V.fO.USER && e.speaking && !(0, E.ZP)(e))
                .sortBy((t) => -L.Z.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === i.length
        ? null
        : (0, r.jsx)(r.Fragment, {
              children: i.map((e, t) =>
                  (0, r.jsx)(
                      u.ua7,
                      {
                          position: 'bottom',
                          color: u.ua7.Colors.GREY,
                          text: W.intl.formatToPlainString(W.t.JjdizM, { username: e.user.username }),
                          children: (l) =>
                              (0, r.jsx)(
                                  M.ZP,
                                  K(q({}, l), {
                                      className: o()(Y.speaker, { [Y.last]: t === i.length - 1 }),
                                      user: e.user,
                                      speaking: !0,
                                      collapsed: !0,
                                      guildId: n
                                  })
                              )
                      },
                      e.id
                  )
              )
          });
}
function Q(e) {
    let { inPopout: t, channel: n, appContext: l, inCall: a, isChatOpen: s, exitFullScreen: E } = e,
        M = i.useRef(null),
        L = i.useRef(null),
        { analyticsLocations: W, newestAnalyticsLocation: Q } = (0, h.ZP)(p.Z.VOICE_CHANNEL_HEADER),
        { simplifiedSettingsEnabled: J } = (0, O.Z)({ location: 'ChannelCallHeaderToolbar' }),
        $ = n.id,
        {
            voiceParticipantsHidden: ee,
            selectedParticipant: et,
            userParticipantCount: en,
            participantsListOpen: er
        } = (0, c.cj)(
            [D.Z],
            () => ({
                selectedParticipant: D.Z.getSelectedParticipant($),
                voiceParticipantsHidden: D.Z.getVoiceParticipantsHidden($),
                userParticipantCount: D.Z.getUserParticipantCount($),
                participantsListOpen: D.Z.getParticipantsListOpen($)
            }),
            [$]
        ),
        ei = (0, U.Z)(n),
        el = n.isGuildVoice() && !s,
        { hasParticipantsPanel: eo } = (0, F.Z)({ location: 'ChannelCallHeaderToolbar' }),
        ea = !er && eo && (n.isGuildVoice() || n.isGroupDM()),
        { enabled: es, inInbox: ec } = v.Z.useExperiment({ location: 'ChannelCallHeaderToolbar' }),
        eu = (0, b.Q3)('ChannelCallHeaderToolbar'),
        { preventIdle: ed, allowIdle: ep } = (0, S.Y)('popup'),
        eh = [];
    if (ei && !eo && !J) {
        let e = (null == et ? void 0 : et.type) === V.fO.STREAM ? (0, _.my)(et.id) : void 0,
            t = (null == et ? void 0 : et.type) === V.fO.ACTIVITY ? et.applicationId : void 0;
        eh.push(
            (0, r.jsx)(
                w.Z,
                {
                    className: Y.button,
                    channel: n,
                    applicationId: t,
                    stream: e,
                    exitFullScreen: E,
                    analyticsLocation: n.type === z.d4z.GUILD_VOICE ? z.ZY5.GUILD_CHANNEL : z.ZY5.DM_CHANNEL,
                    shouldPrioritizeGroupPlusIcon: !0
                },
                'invite-button'
            )
        );
    }
    return (
        ee &&
            eh.push(
                (0, r.jsx)(
                    X,
                    {
                        channelId: $,
                        guildId: n.guild_id
                    },
                    'current-speaker'
                )
            ),
        eh.push(
            (0, r.jsx)(
                g.Z,
                {
                    className: Y.button,
                    channelId: $
                },
                'clips-enabled-indicator'
            )
        ),
        (null == et ? void 0 : et.type) === V.fO.STREAM &&
            (eh.push(
                (0, r.jsx)(
                    I.Z,
                    {
                        className: Y.button,
                        participant: et
                    },
                    'warning'
                )
            ),
            eh.push(
                (0, r.jsx)(
                    y.Z,
                    {
                        size: f.ZP.Sizes.LARGE,
                        className: Y.button,
                        participant: et,
                        showQuality: !0,
                        premiumIndicator: !1
                    },
                    'live-indicator'
                )
            )),
        (null == et ? void 0 : et.type) === V.fO.USER &&
            eh.push(
                (0, r.jsx)(
                    P.Z,
                    {
                        className: Y.button,
                        userId: et.id
                    },
                    'video-warning'
                )
            ),
        ee &&
            !eo &&
            eh.push(
                (0, r.jsx)(
                    u.yRy,
                    {
                        targetElementRef: M,
                        position: 'bottom',
                        renderPopout: () => (0, r.jsx)(Z.Z, { children: (0, r.jsx)(G.Z, { channel: n }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, i.createElement)(
                                R.Z,
                                K(q({}, e), {
                                    buttonRef: M,
                                    isActive: n,
                                    count: en,
                                    key: 'call-members',
                                    className: Y.button
                                })
                            );
                        }
                    },
                    'call-members-popout'
                )
            ),
        a &&
            !J &&
            eh.push(
                null != et
                    ? (0, r.jsx)(
                          A.Z,
                          {
                              className: Y.button,
                              channelId: $
                          },
                          'deselect-participant'
                      )
                    : (0, r.jsx)(
                          k.Z,
                          {
                              className: Y.button,
                              channelId: $,
                              isHorizontal: !0
                          },
                          'select-participant'
                      )
            ),
        !eu &&
            (t || eh.push((0, r.jsx)(m.Z, { className: Y.button }, 'clips')),
            J ||
                eh.push(
                    (0, r.jsx)(
                        x.Z,
                        {
                            onOpen: ed,
                            onClose: ep,
                            className: Y.button
                        },
                        'recents'
                    )
                )),
        es && !ec && eh.push((0, r.jsx)(j.Z, { className: Y.button }, 'for-later')),
        J ||
            eh.push(
                (0, r.jsx)(
                    u.yRy,
                    {
                        targetElementRef: L,
                        position: 'bottom',
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(Z.Z, {
                                children: (0, r.jsx)(B.Z, {
                                    channelId: $,
                                    onClose: t,
                                    appContext: l,
                                    exitFullScreen: E,
                                    onInteraction: (0, H.u)('ChannelCallOverflowMenu', Q, { entrypoint: V.A5.THREE_DOT })
                                })
                            });
                        },
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, i.createElement)(
                                T.Z,
                                K(q({ buttonRef: L }, e), {
                                    key: 'more-options',
                                    isActive: n,
                                    className: Y.lastButton
                                })
                            );
                        }
                    },
                    'more-options-popout'
                )
            ),
        (ea || el) && !J && eh.push((0, r.jsx)(C.ZP.Divider, { className: Y.divider }, 'divider')),
        ea &&
            eh.push(
                (0, r.jsx)(
                    R.Z,
                    {
                        className: o()(Y.button, { [Y.lastButton]: s }),
                        onClick: () => d.Z.toggleParticipantsList(n.id, !er)
                    },
                    'participants-list-button'
                )
            ),
        el &&
            eh.push(
                (0, r.jsx)(
                    N.T,
                    {
                        channelId: n.id,
                        className: o()(Y.button, { [Y.lastButton]: er }),
                        disabled: s
                    },
                    'chat-spacer'
                )
            ),
        (0, r.jsx)(h.Gt, {
            value: W,
            children: eh
        })
    );
}
