n.d(t, { Z: () => $ }), n(539854);
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
    Z = n(618158),
    N = n(390322),
    T = n(616286),
    A = n(961048),
    w = n(179424),
    R = n(786915),
    k = n(975146),
    M = n(991617),
    L = n(597998),
    D = n(606304),
    U = n(594174),
    B = n(358221),
    G = n(887012),
    F = n(444253),
    H = n(355827),
    V = n(185935),
    z = n(795318),
    W = n(354459),
    Y = n(981631),
    q = n(388032),
    K = n(232989);
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
        i = (0, c.Wu)([D.Z, B.Z], () => {
            let e = Date.now();
            return s()(D.Z.getSpeakers())
                .map((e) => B.Z.getParticipant(t, e))
                .filter((e) => null != e && e.type === W.fO.USER && e.speaking && !(0, P.ZP)(e))
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
                          text: q.intl.formatToPlainString(q.t.JjdizM, { username: e.user.username }),
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
    let { inPopout: t, channel: n, appContext: l, inCall: a, isChatOpen: s, exitFullScreen: P } = e,
        L = i.useRef(null),
        D = i.useRef(null),
        { analyticsLocations: q, newestAnalyticsLocation: $ } = (0, h.ZP)(p.Z.VOICE_CHANNEL_HEADER),
        { simplifiedSettingsEnabled: ee } = (0, I.Z)({ location: 'ChannelCallHeaderToolbar' }),
        et = n.id,
        {
            voiceParticipantsHidden: en,
            selectedParticipant: er,
            userParticipantCount: ei,
            participantsListOpen: el
        } = (0, c.cj)(
            [B.Z],
            () => ({
                selectedParticipant: B.Z.getSelectedParticipant(et),
                voiceParticipantsHidden: B.Z.getVoiceParticipantsHidden(et),
                userParticipantCount: B.Z.getUserParticipantCount(et),
                participantsListOpen: B.Z.getParticipantsListOpen(et)
            }),
            [et]
        ),
        eo = (0, c.e7)([U.default], () => U.default.getCurrentUser()),
        ea = (0, G.Z)(n),
        es = (0, v.o)(er, eo),
        ec = (0, x.lL)('CallHeader', !0, eo, es),
        eu = n.isGuildVoice() && !s,
        { hasParticipantsPanel: ed } = (0, V.Z)({ location: 'ChannelCallHeaderToolbar' }),
        ep = !el && ed && (n.isGuildVoice() || n.isGroupDM()),
        { enabled: eh, inInbox: ef } = O.Z.useExperiment({ location: 'ChannelCallHeaderToolbar' }),
        em = (0, b.Q3)('ChannelCallHeaderToolbar'),
        { preventIdle: eg, allowIdle: eb } = (0, Z.Y)('popup'),
        e_ = [];
    if (ea && !ed && !ee) {
        let e = (null == er ? void 0 : er.type) === W.fO.STREAM ? (0, _.my)(er.id) : void 0,
            t = (null == er ? void 0 : er.type) === W.fO.ACTIVITY ? er.applicationId : void 0;
        e_.push(
            (0, r.jsx)(
                R.Z,
                {
                    className: K.button,
                    channel: n,
                    applicationId: t,
                    stream: e,
                    exitFullScreen: P,
                    analyticsLocation: n.type === Y.d4z.GUILD_VOICE ? Y.ZY5.GUILD_CHANNEL : Y.ZY5.DM_CHANNEL,
                    shouldPrioritizeGroupPlusIcon: !0
                },
                'invite-button'
            )
        );
    }
    return (
        en &&
            e_.push(
                (0, r.jsx)(
                    J,
                    {
                        channelId: et,
                        guildId: n.guild_id
                    },
                    'current-speaker'
                )
            ),
        e_.push(
            (0, r.jsx)(
                g.Z,
                {
                    className: K.button,
                    channelId: et
                },
                'clips-enabled-indicator'
            )
        ),
        (null == er ? void 0 : er.type) === W.fO.STREAM &&
            (e_.push(
                (0, r.jsx)(
                    S.Z,
                    {
                        className: K.button,
                        participant: er
                    },
                    'warning'
                )
            ),
            e_.push(
                (0, r.jsx)(
                    y.Z,
                    {
                        size: f.ZP.Sizes.LARGE,
                        className: K.button,
                        participant: er,
                        showQuality: !0,
                        premiumIndicator: ec.enabled
                    },
                    'live-indicator'
                )
            )),
        en &&
            !ed &&
            e_.push(
                (0, r.jsx)(
                    u.yRy,
                    {
                        targetElementRef: L,
                        position: 'bottom',
                        renderPopout: () => (0, r.jsx)(N.Z, { children: (0, r.jsx)(H.Z, { channel: n }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, i.createElement)(
                                k.Z,
                                Q(X({}, e), {
                                    buttonRef: L,
                                    isActive: n,
                                    count: ei,
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
            !ee &&
            e_.push(
                null != er
                    ? (0, r.jsx)(
                          w.Z,
                          {
                              className: K.button,
                              channelId: et
                          },
                          'deselect-participant'
                      )
                    : (0, r.jsx)(
                          M.Z,
                          {
                              className: K.button,
                              channelId: et,
                              isHorizontal: !0
                          },
                          'select-participant'
                      )
            ),
        !em &&
            (t || e_.push((0, r.jsx)(m.Z, { className: K.button }, 'clips')),
            ee ||
                e_.push(
                    (0, r.jsx)(
                        j.Z,
                        {
                            onOpen: eg,
                            onClose: eb,
                            className: K.button
                        },
                        'recents'
                    )
                )),
        eh && !ef && e_.push((0, r.jsx)(E.Z, { className: K.button }, 'for-later')),
        ee ||
            e_.push(
                (0, r.jsx)(
                    u.yRy,
                    {
                        targetElementRef: D,
                        position: 'bottom',
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(N.Z, {
                                children: (0, r.jsx)(F.Z, {
                                    channelId: et,
                                    onClose: t,
                                    appContext: l,
                                    exitFullScreen: P,
                                    onInteraction: (0, z.u)('ChannelCallOverflowMenu', $, { entrypoint: W.A5.THREE_DOT })
                                })
                            });
                        },
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, i.createElement)(
                                A.Z,
                                Q(X({ buttonRef: D }, e), {
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
        (ep || eu) && !ee && e_.push((0, r.jsx)(C.ZP.Divider, { className: K.divider }, 'divider')),
        ep &&
            e_.push(
                (0, r.jsx)(
                    k.Z,
                    {
                        className: o()(K.button, { [K.lastButton]: s }),
                        onClick: () => d.Z.toggleParticipantsList(n.id, !el)
                    },
                    'participants-list-button'
                )
            ),
        eu &&
            e_.push(
                (0, r.jsx)(
                    T.T,
                    {
                        channelId: n.id,
                        className: o()(K.button, { [K.lastButton]: el }),
                        disabled: s
                    },
                    'chat-spacer'
                )
            ),
        (0, r.jsx)(h.Gt, {
            value: q,
            children: e_
        })
    );
}
