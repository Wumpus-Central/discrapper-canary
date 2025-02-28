n.d(t, { Z: () => J }), n(653041);
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
    C = n(517525),
    v = n(665149),
    y = n(6242),
    x = n(757692),
    j = n(141321),
    O = n(2818),
    E = n(954551),
    N = n(221241),
    I = n(44136),
    P = n(651183),
    S = n(618158),
    Z = n(390322),
    T = n(616286),
    A = n(961048),
    w = n(179424),
    R = n(786915),
    M = n(975146),
    k = n(991617),
    L = n(597998),
    D = n(606304),
    W = n(594174),
    U = n(358221),
    B = n(887012),
    H = n(444253),
    F = n(355827),
    G = n(185935),
    V = n(354459),
    z = n(981631),
    Y = n(388032),
    q = n(675608);
function K(e) {
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
function X(e, t) {
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
function Q(e) {
    let { channelId: t, guildId: n } = e,
        i = (0, c.Wu)([D.Z, U.Z], () => {
            let e = Date.now();
            return s()(D.Z.getSpeakers())
                .map((e) => U.Z.getParticipant(t, e))
                .filter((e) => null != e && e.type === V.fO.USER && e.speaking && !(0, I.ZP)(e))
                .sortBy((t) => -D.Z.getSpeakingDuration(t.user.id, e))
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
                          text: Y.NW.formatToPlainString(Y.t.JjdizM, { username: e.user.username }),
                          children: (l) =>
                              (0, r.jsx)(
                                  L.ZP,
                                  X(K({}, l), {
                                      className: o()(q.speaker, { [q.last]: t === i.length - 1 }),
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
function J(e) {
    let { inPopout: t, channel: n, appContext: l, inCall: a, isChatOpen: s, exitFullScreen: I } = e,
        { analyticsLocations: L } = (0, h.ZP)(p.Z.VOICE_CHANNEL_HEADER),
        { simplifiedSettingsEnabled: D } = (0, N.Z)({ location: 'ChannelCallHeaderToolbar' }),
        Y = n.id,
        {
            voiceParticipantsHidden: J,
            selectedParticipant: $,
            userParticipantCount: ee,
            participantsListOpen: et
        } = (0, c.cj)(
            [U.Z],
            () => ({
                selectedParticipant: U.Z.getSelectedParticipant(Y),
                voiceParticipantsHidden: U.Z.getVoiceParticipantsHidden(Y),
                userParticipantCount: U.Z.getUserParticipantCount(Y),
                participantsListOpen: U.Z.getParticipantsListOpen(Y)
            }),
            [Y]
        ),
        en = (0, c.e7)([W.default], () => W.default.getCurrentUser()),
        er = (0, B.Z)(n),
        ei = (0, x.o)($, en),
        el = (0, y.lL)('CallHeader', !0, en, ei),
        eo = n.isGuildVoice() && !s,
        { hasParticipantsPanel: ea } = (0, G.Z)({ location: 'ChannelCallHeaderToolbar' }),
        es = !et && ea && (n.isGuildVoice() || n.isGroupDM()),
        { enabled: ec, inInbox: eu } = O.Z.useExperiment({ location: 'ChannelCallHeaderToolbar' }),
        ed = (0, b.Q3)('ChannelCallHeaderToolbar'),
        { preventIdle: ep, allowIdle: eh } = (0, S.Y)('popup'),
        ef = [];
    if (er && !ea && !D) {
        let e = (null == $ ? void 0 : $.type) === V.fO.STREAM ? (0, _.my)($.id) : void 0,
            t = (null == $ ? void 0 : $.type) === V.fO.ACTIVITY ? $.applicationId : void 0;
        ef.push(
            (0, r.jsx)(
                R.Z,
                {
                    className: q.button,
                    channel: n,
                    applicationId: t,
                    stream: e,
                    exitFullScreen: I,
                    analyticsLocation: n.type === z.d4z.GUILD_VOICE ? z.ZY5.GUILD_CHANNEL : z.ZY5.DM_CHANNEL
                },
                'invite-button'
            )
        );
    }
    return (
        J &&
            ef.push(
                (0, r.jsx)(
                    Q,
                    {
                        channelId: Y,
                        guildId: n.guild_id
                    },
                    'current-speaker'
                )
            ),
        ef.push(
            (0, r.jsx)(
                g.Z,
                {
                    className: q.button,
                    channelId: Y
                },
                'clips-enabled-indicator'
            )
        ),
        (null == $ ? void 0 : $.type) === V.fO.STREAM &&
            (ef.push(
                (0, r.jsx)(
                    P.Z,
                    {
                        className: q.button,
                        participant: $
                    },
                    'warning'
                )
            ),
            ef.push(
                (0, r.jsx)(
                    C.Z,
                    {
                        size: f.ZP.Sizes.LARGE,
                        className: q.button,
                        participant: $,
                        showQuality: !0,
                        premiumIndicator: el.enabled
                    },
                    'live-indicator'
                )
            )),
        J &&
            !ea &&
            ef.push(
                (0, r.jsx)(
                    u.yRy,
                    {
                        position: 'bottom',
                        renderPopout: () => (0, r.jsx)(Z.Z, { children: (0, r.jsx)(F.Z, { channel: n }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, i.createElement)(
                                M.Z,
                                X(K({}, e), {
                                    isActive: n,
                                    count: ee,
                                    key: 'call-members',
                                    className: q.button
                                })
                            );
                        }
                    },
                    'call-members-popout'
                )
            ),
        a &&
            !D &&
            ef.push(
                null != $
                    ? (0, r.jsx)(
                          w.Z,
                          {
                              className: q.button,
                              channelId: Y
                          },
                          'deselect-participant'
                      )
                    : (0, r.jsx)(
                          k.Z,
                          {
                              className: q.button,
                              channelId: Y,
                              isHorizontal: !0
                          },
                          'select-participant'
                      )
            ),
        ed ||
            (t || ef.push((0, r.jsx)(m.Z, { className: q.button }, 'clips')),
            D ||
                ef.push(
                    (0, r.jsx)(
                        j.Z,
                        {
                            onOpen: ep,
                            onClose: eh,
                            className: q.button
                        },
                        'recents'
                    )
                )),
        ec && !eu && ef.push((0, r.jsx)(E.Z, { className: q.button }, 'for-later')),
        D ||
            ef.push(
                (0, r.jsx)(
                    u.yRy,
                    {
                        position: 'bottom',
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(Z.Z, {
                                children: (0, r.jsx)(H.Z, {
                                    channelId: Y,
                                    onClose: t,
                                    appContext: l,
                                    exitFullScreen: I
                                })
                            });
                        },
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, i.createElement)(
                                A.Z,
                                X(K({}, e), {
                                    key: 'more-options',
                                    isActive: n,
                                    className: q.lastButton
                                })
                            );
                        }
                    },
                    'more-options-popout'
                )
            ),
        (es || eo) && !D && ef.push((0, r.jsx)(v.ZP.Divider, { className: q.divider }, 'divider')),
        es &&
            ef.push(
                (0, r.jsx)(
                    M.Z,
                    {
                        className: o()(q.button, { [q.lastButton]: s }),
                        onClick: () => d.Z.toggleParticipantsList(n.id, !et)
                    },
                    'participants-list-button'
                )
            ),
        eo &&
            ef.push(
                (0, r.jsx)(
                    T.T,
                    {
                        channelId: n.id,
                        className: o()(q.button, { [q.lastButton]: et }),
                        disabled: s
                    },
                    'chat-spacer'
                )
            ),
        (0, r.jsx)(h.Gt, {
            value: L,
            children: ef
        })
    );
}
