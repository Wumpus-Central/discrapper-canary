n.d(t, { Z: () => $ }), n(653041);
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
    V = n(795318),
    z = n(354459),
    Y = n(981631),
    q = n(388032),
    K = n(675608);
function X(e) {
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
function Q(e, t) {
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
function J(e) {
    let { channelId: t, guildId: n } = e,
        i = (0, c.Wu)([D.Z, U.Z], () => {
            let e = Date.now();
            return s()(D.Z.getSpeakers())
                .map((e) => U.Z.getParticipant(t, e))
                .filter((e) => null != e && e.type === z.fO.USER && e.speaking && !(0, I.ZP)(e))
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
                          text: q.NW.formatToPlainString(q.t.JjdizM, { username: e.user.username }),
                          children: (l) =>
                              (0, r.jsx)(
                                  L.ZP,
                                  Q(X({}, l), {
                                      className: o()(K.speaker, { [K.last]: t === i.length - 1 }),
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
function $(e) {
    let { inPopout: t, channel: n, appContext: l, inCall: a, isChatOpen: s, exitFullScreen: I } = e,
        { analyticsLocations: L, newestAnalyticsLocation: D } = (0, h.ZP)(p.Z.VOICE_CHANNEL_HEADER),
        { simplifiedSettingsEnabled: q } = (0, N.Z)({ location: 'ChannelCallHeaderToolbar' }),
        $ = n.id,
        {
            voiceParticipantsHidden: ee,
            selectedParticipant: et,
            userParticipantCount: en,
            participantsListOpen: er
        } = (0, c.cj)(
            [U.Z],
            () => ({
                selectedParticipant: U.Z.getSelectedParticipant($),
                voiceParticipantsHidden: U.Z.getVoiceParticipantsHidden($),
                userParticipantCount: U.Z.getUserParticipantCount($),
                participantsListOpen: U.Z.getParticipantsListOpen($)
            }),
            [$]
        ),
        ei = (0, c.e7)([W.default], () => W.default.getCurrentUser()),
        el = (0, B.Z)(n),
        eo = (0, x.o)(et, ei),
        ea = (0, y.lL)('CallHeader', !0, ei, eo),
        es = n.isGuildVoice() && !s,
        { hasParticipantsPanel: ec } = (0, G.Z)({ location: 'ChannelCallHeaderToolbar' }),
        eu = !er && ec && (n.isGuildVoice() || n.isGroupDM()),
        { enabled: ed, inInbox: ep } = O.Z.useExperiment({ location: 'ChannelCallHeaderToolbar' }),
        eh = (0, b.Q3)('ChannelCallHeaderToolbar'),
        { preventIdle: ef, allowIdle: em } = (0, S.Y)('popup'),
        eg = [];
    if (el && !ec && !q) {
        let e = (null == et ? void 0 : et.type) === z.fO.STREAM ? (0, _.my)(et.id) : void 0,
            t = (null == et ? void 0 : et.type) === z.fO.ACTIVITY ? et.applicationId : void 0;
        eg.push(
            (0, r.jsx)(
                R.Z,
                {
                    className: K.button,
                    channel: n,
                    applicationId: t,
                    stream: e,
                    exitFullScreen: I,
                    analyticsLocation: n.type === Y.d4z.GUILD_VOICE ? Y.ZY5.GUILD_CHANNEL : Y.ZY5.DM_CHANNEL
                },
                'invite-button'
            )
        );
    }
    return (
        ee &&
            eg.push(
                (0, r.jsx)(
                    J,
                    {
                        channelId: $,
                        guildId: n.guild_id
                    },
                    'current-speaker'
                )
            ),
        eg.push(
            (0, r.jsx)(
                g.Z,
                {
                    className: K.button,
                    channelId: $
                },
                'clips-enabled-indicator'
            )
        ),
        (null == et ? void 0 : et.type) === z.fO.STREAM &&
            (eg.push(
                (0, r.jsx)(
                    P.Z,
                    {
                        className: K.button,
                        participant: et
                    },
                    'warning'
                )
            ),
            eg.push(
                (0, r.jsx)(
                    C.Z,
                    {
                        size: f.ZP.Sizes.LARGE,
                        className: K.button,
                        participant: et,
                        showQuality: !0,
                        premiumIndicator: ea.enabled
                    },
                    'live-indicator'
                )
            )),
        ee &&
            !ec &&
            eg.push(
                (0, r.jsx)(
                    u.yRy,
                    {
                        position: 'bottom',
                        renderPopout: () => (0, r.jsx)(Z.Z, { children: (0, r.jsx)(F.Z, { channel: n }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, i.createElement)(
                                M.Z,
                                Q(X({}, e), {
                                    isActive: n,
                                    count: en,
                                    key: 'call-members',
                                    className: K.button
                                })
                            );
                        }
                    },
                    'call-members-popout'
                )
            ),
        a &&
            !q &&
            eg.push(
                null != et
                    ? (0, r.jsx)(
                          w.Z,
                          {
                              className: K.button,
                              channelId: $
                          },
                          'deselect-participant'
                      )
                    : (0, r.jsx)(
                          k.Z,
                          {
                              className: K.button,
                              channelId: $,
                              isHorizontal: !0
                          },
                          'select-participant'
                      )
            ),
        eh ||
            (t || eg.push((0, r.jsx)(m.Z, { className: K.button }, 'clips')),
            q ||
                eg.push(
                    (0, r.jsx)(
                        j.Z,
                        {
                            onOpen: ef,
                            onClose: em,
                            className: K.button
                        },
                        'recents'
                    )
                )),
        ed && !ep && eg.push((0, r.jsx)(E.Z, { className: K.button }, 'for-later')),
        q ||
            eg.push(
                (0, r.jsx)(
                    u.yRy,
                    {
                        position: 'bottom',
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(Z.Z, {
                                children: (0, r.jsx)(H.Z, {
                                    channelId: $,
                                    onClose: t,
                                    appContext: l,
                                    exitFullScreen: I,
                                    onInteraction: (0, V.u)('ChannelCallOverflowMenu', D, { entrypoint: z.A5.THREE_DOT })
                                })
                            });
                        },
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, i.createElement)(
                                A.Z,
                                Q(X({}, e), {
                                    key: 'more-options',
                                    isActive: n,
                                    className: K.lastButton
                                })
                            );
                        }
                    },
                    'more-options-popout'
                )
            ),
        (eu || es) && !q && eg.push((0, r.jsx)(v.ZP.Divider, { className: K.divider }, 'divider')),
        eu &&
            eg.push(
                (0, r.jsx)(
                    M.Z,
                    {
                        className: o()(K.button, { [K.lastButton]: s }),
                        onClick: () => d.Z.toggleParticipantsList(n.id, !er)
                    },
                    'participants-list-button'
                )
            ),
        es &&
            eg.push(
                (0, r.jsx)(
                    T.T,
                    {
                        channelId: n.id,
                        className: o()(K.button, { [K.lastButton]: er }),
                        disabled: s
                    },
                    'chat-spacer'
                )
            ),
        (0, r.jsx)(h.Gt, {
            value: L,
            children: eg
        })
    );
}
