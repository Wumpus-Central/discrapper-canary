n.d(t, { Z: () => M }), n(539854);
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
    m = n(236091),
    g = n(517525),
    b = n(2818),
    _ = n(954551),
    y = n(44136),
    C = n(651183),
    x = n(853476),
    v = n(390322),
    j = n(616286),
    O = n(975146),
    E = n(597998),
    I = n(606304),
    S = n(358221),
    P = n(355827),
    Z = n(185935),
    N = n(354459),
    T = n(388032),
    A = n(232989);
function w(e) {
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
function R(e, t) {
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
function k(e) {
    let { channelId: t, guildId: n } = e,
        i = (0, c.Wu)([I.Z, S.Z], () => {
            let e = Date.now();
            return s()(I.Z.getSpeakers())
                .map((e) => S.Z.getParticipant(t, e))
                .filter((e) => null != e && e.type === N.fO.USER && e.speaking && !(0, y.ZP)(e))
                .sortBy((t) => -I.Z.getSpeakingDuration(t.user.id, e))
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
                          text: T.intl.formatToPlainString(T.t.JjdizM, { username: e.user.username }),
                          children: (l) =>
                              (0, r.jsx)(
                                  E.ZP,
                                  R(w({}, l), {
                                      className: o()(A.speaker, { [A.last]: t === i.length - 1 }),
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
function M(e) {
    let { channel: t, isChatOpen: n } = e,
        l = i.useRef(null),
        { analyticsLocations: a } = (0, h.ZP)(p.Z.VOICE_CHANNEL_HEADER),
        s = t.id,
        {
            voiceParticipantsHidden: y,
            selectedParticipant: E,
            userParticipantCount: I,
            participantsListOpen: T
        } = (0, c.cj)(
            [S.Z],
            () => ({
                selectedParticipant: S.Z.getSelectedParticipant(s),
                voiceParticipantsHidden: S.Z.getVoiceParticipantsHidden(s),
                userParticipantCount: S.Z.getUserParticipantCount(s),
                participantsListOpen: S.Z.getParticipantsListOpen(s)
            }),
            [s]
        ),
        M = t.isGuildVoice() && !n,
        { hasParticipantsPanel: D } = (0, Z.Z)({ location: 'ChannelCallHeaderToolbar' }),
        L = !T && D && (t.isGuildVoice() || t.isGroupDM()),
        { enabled: U, inInbox: B } = b.Z.useExperiment({ location: 'ChannelCallHeaderToolbar' }),
        F = [];
    return (
        y &&
            F.push(
                (0, r.jsx)(
                    k,
                    {
                        channelId: s,
                        guildId: t.guild_id
                    },
                    'current-speaker'
                )
            ),
        F.push(
            (0, r.jsx)(
                m.Z,
                {
                    className: A.button,
                    channelId: s
                },
                'clips-enabled-indicator'
            )
        ),
        (null == E ? void 0 : E.type) === N.fO.STREAM &&
            (F.push(
                (0, r.jsx)(
                    C.Z,
                    {
                        className: A.button,
                        participant: E
                    },
                    'warning'
                )
            ),
            F.push(
                (0, r.jsx)(
                    g.Z,
                    {
                        size: f.ZP.Sizes.LARGE,
                        className: A.button,
                        participant: E,
                        showQuality: !0,
                        premiumIndicator: !1
                    },
                    'live-indicator'
                )
            )),
        (null == E ? void 0 : E.type) === N.fO.USER &&
            F.push(
                (0, r.jsx)(
                    x.Z,
                    {
                        className: A.button,
                        userId: E.id
                    },
                    'video-warning'
                )
            ),
        y &&
            !D &&
            F.push(
                (0, r.jsx)(
                    u.yRy,
                    {
                        targetElementRef: l,
                        position: 'bottom',
                        renderPopout: () => (0, r.jsx)(v.Z, { children: (0, r.jsx)(P.Z, { channel: t }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, i.createElement)(
                                O.Z,
                                R(w({}, e), {
                                    buttonRef: l,
                                    isActive: n,
                                    count: I,
                                    key: 'call-members',
                                    className: A.button
                                })
                            );
                        }
                    },
                    'call-members-popout'
                )
            ),
        U && !B && F.push((0, r.jsx)(_.Z, { className: A.button }, 'for-later')),
        L &&
            F.push(
                (0, r.jsx)(
                    O.Z,
                    {
                        className: o()(A.button, { [A.lastButton]: n }),
                        onClick: () => d.Z.toggleParticipantsList(t.id, !T)
                    },
                    'participants-list-button'
                )
            ),
        M &&
            F.push(
                (0, r.jsx)(
                    j.T,
                    {
                        channelId: t.id,
                        className: o()(A.button, { [A.lastButton]: T }),
                        disabled: n
                    },
                    'chat-spacer'
                )
            ),
        (0, r.jsx)(h.Gt, {
            value: a,
            children: F
        })
    );
}
