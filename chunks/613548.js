n.d(t, { Z: () => D }), n(539854);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(442837),
    u = n(481060),
    d = n(475179),
    p = n(100527),
    h = n(906732),
    f = n(194082),
    m = n(320007),
    g = n(236091),
    b = n(540059),
    _ = n(517525),
    y = n(2818),
    C = n(954551),
    x = n(44136),
    v = n(651183),
    j = n(853476),
    O = n(390322),
    E = n(616286),
    I = n(975146),
    P = n(597998),
    S = n(606304),
    Z = n(358221),
    N = n(355827),
    T = n(185935),
    A = n(354459),
    w = n(388032),
    R = n(232989);
function M(e) {
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
function k(e, t) {
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
function L(e) {
    let { channelId: t, guildId: n } = e,
        i = (0, c.Wu)([S.Z, Z.Z], () => {
            let e = Date.now();
            return s()(S.Z.getSpeakers())
                .map((e) => Z.Z.getParticipant(t, e))
                .filter((e) => null != e && e.type === A.fO.USER && e.speaking && !(0, x.ZP)(e))
                .sortBy((t) => -S.Z.getSpeakingDuration(t.user.id, e))
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
                          text: w.intl.formatToPlainString(w.t.JjdizM, { username: e.user.username }),
                          children: (l) =>
                              (0, r.jsx)(
                                  P.ZP,
                                  k(M({}, l), {
                                      className: a()(R.speaker, { [R.last]: t === i.length - 1 }),
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
function D(e) {
    let { inPopout: t, channel: n, isChatOpen: l } = e,
        o = i.useRef(null),
        { analyticsLocations: s } = (0, h.ZP)(p.Z.VOICE_CHANNEL_HEADER),
        x = n.id,
        {
            voiceParticipantsHidden: P,
            selectedParticipant: S,
            userParticipantCount: w,
            participantsListOpen: D
        } = (0, c.cj)(
            [Z.Z],
            () => ({
                selectedParticipant: Z.Z.getSelectedParticipant(x),
                voiceParticipantsHidden: Z.Z.getVoiceParticipantsHidden(x),
                userParticipantCount: Z.Z.getUserParticipantCount(x),
                participantsListOpen: Z.Z.getParticipantsListOpen(x)
            }),
            [x]
        ),
        U = n.isGuildVoice() && !l,
        { hasParticipantsPanel: B } = (0, T.Z)({ location: 'ChannelCallHeaderToolbar' }),
        F = !D && B && (n.isGuildVoice() || n.isGroupDM()),
        { enabled: G, inInbox: H } = y.Z.useExperiment({ location: 'ChannelCallHeaderToolbar' }),
        V = (0, b.Q3)('ChannelCallHeaderToolbar'),
        z = [];
    return (
        P &&
            z.push(
                (0, r.jsx)(
                    L,
                    {
                        channelId: x,
                        guildId: n.guild_id
                    },
                    'current-speaker'
                )
            ),
        z.push(
            (0, r.jsx)(
                g.Z,
                {
                    className: R.button,
                    channelId: x
                },
                'clips-enabled-indicator'
            )
        ),
        (null == S ? void 0 : S.type) === A.fO.STREAM &&
            (z.push(
                (0, r.jsx)(
                    v.Z,
                    {
                        className: R.button,
                        participant: S
                    },
                    'warning'
                )
            ),
            z.push(
                (0, r.jsx)(
                    _.Z,
                    {
                        size: f.ZP.Sizes.LARGE,
                        className: R.button,
                        participant: S,
                        showQuality: !0,
                        premiumIndicator: !1
                    },
                    'live-indicator'
                )
            )),
        (null == S ? void 0 : S.type) === A.fO.USER &&
            z.push(
                (0, r.jsx)(
                    j.Z,
                    {
                        className: R.button,
                        userId: S.id
                    },
                    'video-warning'
                )
            ),
        P &&
            !B &&
            z.push(
                (0, r.jsx)(
                    u.yRy,
                    {
                        targetElementRef: o,
                        position: 'bottom',
                        renderPopout: () => (0, r.jsx)(O.Z, { children: (0, r.jsx)(N.Z, { channel: n }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, i.createElement)(
                                I.Z,
                                k(M({}, e), {
                                    buttonRef: o,
                                    isActive: n,
                                    count: w,
                                    key: 'call-members',
                                    className: R.button
                                })
                            );
                        }
                    },
                    'call-members-popout'
                )
            ),
        V || t || z.push((0, r.jsx)(m.Z, { className: R.button }, 'clips')),
        G && !H && z.push((0, r.jsx)(C.Z, { className: R.button }, 'for-later')),
        F &&
            z.push(
                (0, r.jsx)(
                    I.Z,
                    {
                        className: a()(R.button, { [R.lastButton]: l }),
                        onClick: () => d.Z.toggleParticipantsList(n.id, !D)
                    },
                    'participants-list-button'
                )
            ),
        U &&
            z.push(
                (0, r.jsx)(
                    E.T,
                    {
                        channelId: n.id,
                        className: a()(R.button, { [R.lastButton]: D }),
                        disabled: l
                    },
                    'chat-spacer'
                )
            ),
        (0, r.jsx)(h.Gt, {
            value: s,
            children: z
        })
    );
}
