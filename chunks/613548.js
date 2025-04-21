n.d(t, { Z: () => ee }), n(539854);
var r = n(200651),
    i = n(192379),
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
    x = n(6242),
    v = n(757692),
    j = n(141321),
    O = n(2818),
    E = n(954551),
    I = n(221241),
    P = n(44136),
    S = n(651183),
    Z = n(853476),
    N = n(618158),
    T = n(390322),
    A = n(616286),
    w = n(961048),
    R = n(179424),
    k = n(786915),
    M = n(975146),
    L = n(991617),
    D = n(597998),
    U = n(606304),
    B = n(594174),
    G = n(358221),
    F = n(887012),
    H = n(444253),
    V = n(355827),
    z = n(185935),
    W = n(795318),
    Y = n(354459),
    q = n(981631),
    K = n(388032),
    X = n(232989);
function Q(e) {
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
function J(e, t) {
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
function $(e) {
    let { channelId: t, guildId: n } = e,
        i = (0, c.Wu)([U.Z, G.Z], () => {
            let e = Date.now();
            return s()(U.Z.getSpeakers())
                .map((e) => G.Z.getParticipant(t, e))
                .filter((e) => null != e && e.type === Y.fO.USER && e.speaking && !(0, P.ZP)(e))
                .sortBy((t) => -U.Z.getSpeakingDuration(t.user.id, e))
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
                          text: K.intl.formatToPlainString(K.t.JjdizM, { username: e.user.username }),
                          children: (l) =>
                              (0, r.jsx)(
                                  D.ZP,
                                  J(Q({}, l), {
                                      className: o()(X.speaker, { [X.last]: t === i.length - 1 }),
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
function ee(e) {
    let { inPopout: t, channel: n, appContext: l, inCall: a, isChatOpen: s, exitFullScreen: P } = e,
        D = i.useRef(null),
        U = i.useRef(null),
        { analyticsLocations: K, newestAnalyticsLocation: ee } = (0, h.ZP)(p.Z.VOICE_CHANNEL_HEADER),
        { simplifiedSettingsEnabled: et } = (0, I.Z)({ location: 'ChannelCallHeaderToolbar' }),
        en = n.id,
        {
            voiceParticipantsHidden: er,
            selectedParticipant: ei,
            userParticipantCount: el,
            participantsListOpen: eo
        } = (0, c.cj)(
            [G.Z],
            () => ({
                selectedParticipant: G.Z.getSelectedParticipant(en),
                voiceParticipantsHidden: G.Z.getVoiceParticipantsHidden(en),
                userParticipantCount: G.Z.getUserParticipantCount(en),
                participantsListOpen: G.Z.getParticipantsListOpen(en)
            }),
            [en]
        ),
        ea = (0, c.e7)([B.default], () => B.default.getCurrentUser()),
        es = (0, F.Z)(n),
        ec = (0, v.o)(ei, ea),
        eu = (0, x.lL)('CallHeader', !0, ea, ec),
        ed = n.isGuildVoice() && !s,
        { hasParticipantsPanel: ep } = (0, z.Z)({ location: 'ChannelCallHeaderToolbar' }),
        eh = !eo && ep && (n.isGuildVoice() || n.isGroupDM()),
        { enabled: ef, inInbox: em } = O.Z.useExperiment({ location: 'ChannelCallHeaderToolbar' }),
        eg = (0, b.Q3)('ChannelCallHeaderToolbar'),
        { preventIdle: eb, allowIdle: e_ } = (0, N.Y)('popup'),
        ey = [];
    if (es && !ep && !et) {
        let e = (null == ei ? void 0 : ei.type) === Y.fO.STREAM ? (0, _.my)(ei.id) : void 0,
            t = (null == ei ? void 0 : ei.type) === Y.fO.ACTIVITY ? ei.applicationId : void 0;
        ey.push(
            (0, r.jsx)(
                k.Z,
                {
                    className: X.button,
                    channel: n,
                    applicationId: t,
                    stream: e,
                    exitFullScreen: P,
                    analyticsLocation: n.type === q.d4z.GUILD_VOICE ? q.ZY5.GUILD_CHANNEL : q.ZY5.DM_CHANNEL,
                    shouldPrioritizeGroupPlusIcon: !0
                },
                'invite-button'
            )
        );
    }
    return (
        er &&
            ey.push(
                (0, r.jsx)(
                    $,
                    {
                        channelId: en,
                        guildId: n.guild_id
                    },
                    'current-speaker'
                )
            ),
        ey.push(
            (0, r.jsx)(
                g.Z,
                {
                    className: X.button,
                    channelId: en
                },
                'clips-enabled-indicator'
            )
        ),
        (null == ei ? void 0 : ei.type) === Y.fO.STREAM &&
            (ey.push(
                (0, r.jsx)(
                    S.Z,
                    {
                        className: X.button,
                        participant: ei
                    },
                    'warning'
                )
            ),
            ey.push(
                (0, r.jsx)(
                    y.Z,
                    {
                        size: f.ZP.Sizes.LARGE,
                        className: X.button,
                        participant: ei,
                        showQuality: !0,
                        premiumIndicator: eu.enabled
                    },
                    'live-indicator'
                )
            )),
        (null == ei ? void 0 : ei.type) === Y.fO.USER &&
            ey.push(
                (0, r.jsx)(
                    Z.Z,
                    {
                        className: X.button,
                        userId: ei.id
                    },
                    'video-warning'
                )
            ),
        er &&
            !ep &&
            ey.push(
                (0, r.jsx)(
                    u.yRy,
                    {
                        targetElementRef: D,
                        position: 'bottom',
                        renderPopout: () => (0, r.jsx)(T.Z, { children: (0, r.jsx)(V.Z, { channel: n }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, i.createElement)(
                                M.Z,
                                J(Q({}, e), {
                                    buttonRef: D,
                                    isActive: n,
                                    count: el,
                                    key: 'call-members',
                                    className: X.button
                                })
                            );
                        }
                    },
                    'call-members-popout'
                )
            ),
        a &&
            !et &&
            ey.push(
                null != ei
                    ? (0, r.jsx)(
                          R.Z,
                          {
                              className: X.button,
                              channelId: en
                          },
                          'deselect-participant'
                      )
                    : (0, r.jsx)(
                          L.Z,
                          {
                              className: X.button,
                              channelId: en,
                              isHorizontal: !0
                          },
                          'select-participant'
                      )
            ),
        !eg &&
            (t || ey.push((0, r.jsx)(m.Z, { className: X.button }, 'clips')),
            et ||
                ey.push(
                    (0, r.jsx)(
                        j.Z,
                        {
                            onOpen: eb,
                            onClose: e_,
                            className: X.button
                        },
                        'recents'
                    )
                )),
        ef && !em && ey.push((0, r.jsx)(E.Z, { className: X.button }, 'for-later')),
        et ||
            ey.push(
                (0, r.jsx)(
                    u.yRy,
                    {
                        targetElementRef: U,
                        position: 'bottom',
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(T.Z, {
                                children: (0, r.jsx)(H.Z, {
                                    channelId: en,
                                    onClose: t,
                                    appContext: l,
                                    exitFullScreen: P,
                                    onInteraction: (0, W.u)('ChannelCallOverflowMenu', ee, { entrypoint: Y.A5.THREE_DOT })
                                })
                            });
                        },
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, i.createElement)(
                                w.Z,
                                J(Q({ buttonRef: U }, e), {
                                    key: 'more-options',
                                    isActive: n,
                                    className: X.lastButton
                                })
                            );
                        }
                    },
                    'more-options-popout'
                )
            ),
        (eh || ed) && !et && ey.push((0, r.jsx)(C.ZP.Divider, { className: X.divider }, 'divider')),
        eh &&
            ey.push(
                (0, r.jsx)(
                    M.Z,
                    {
                        className: o()(X.button, { [X.lastButton]: s }),
                        onClick: () => d.Z.toggleParticipantsList(n.id, !eo)
                    },
                    'participants-list-button'
                )
            ),
        ed &&
            ey.push(
                (0, r.jsx)(
                    A.T,
                    {
                        channelId: n.id,
                        className: o()(X.button, { [X.lastButton]: eo }),
                        disabled: s
                    },
                    'chat-spacer'
                )
            ),
        (0, r.jsx)(h.Gt, {
            value: K,
            children: ey
        })
    );
}
