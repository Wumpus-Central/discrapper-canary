(n.d(t, { Z: () => G }), n(539854));
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(475179),
    f = n(100527),
    _ = n(906732),
    p = n(194082),
    h = n(236091),
    m = n(517525),
    g = n(2818),
    E = n(954551),
    b = n(44136),
    y = n(651183),
    O = n(853476),
    v = n(390322),
    I = n(616286),
    T = n(975146),
    S = n(597998),
    A = n(606304),
    N = n(358221),
    C = n(355827),
    R = n(185935),
    P = n(354459),
    w = n(388032),
    D = n(232989);
function L(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                L(e, t, n[t]);
            }));
    }
    return e;
}
function M(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = 3;
function U(e) {
    let { channelId: t, guildId: n } = e,
        i = (0, c.Wu)([A.Z, N.Z], () => {
            let e = Date.now();
            return l()(A.Z.getSpeakers())
                .map((e) => N.Z.getParticipant(t, e))
                .filter((e) => null != e && e.type === P.fO.USER && e.speaking && !(0, b.ZP)(e))
                .sortBy((t) => -A.Z.getSpeakingDuration(t.user.id, e))
                .slice(0, j)
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
                          children: (o) =>
                              (0, r.jsx)(
                                  S.ZP,
                                  k(x({}, o), {
                                      className: a()(D.speaker, { [D.last]: t === i.length - 1 }),
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
function G(e) {
    let { channel: t, isChatOpen: n } = e,
        o = i.useRef(null),
        { analyticsLocations: s } = (0, _.ZP)(f.Z.VOICE_CHANNEL_HEADER),
        l = t.id,
        {
            voiceParticipantsHidden: b,
            selectedParticipant: S,
            userParticipantCount: A,
            participantsListOpen: w
        } = (0, c.cj)(
            [N.Z],
            () => ({
                selectedParticipant: N.Z.getSelectedParticipant(l),
                voiceParticipantsHidden: N.Z.getVoiceParticipantsHidden(l),
                userParticipantCount: N.Z.getUserParticipantCount(l),
                participantsListOpen: N.Z.getParticipantsListOpen(l)
            }),
            [l]
        ),
        L = t.isGuildVoice() && !n,
        { hasParticipantsPanel: M } = (0, R.Z)({ location: 'ChannelCallHeaderToolbar' }),
        j = !w && M && (t.isGuildVoice() || t.isGroupDM()),
        { enabled: G, inInbox: B } = g.Z.useExperiment({ location: 'ChannelCallHeaderToolbar' }),
        Z = [];
    return (
        b &&
            Z.push(
                (0, r.jsx)(
                    U,
                    {
                        channelId: l,
                        guildId: t.guild_id
                    },
                    'current-speaker'
                )
            ),
        Z.push(
            (0, r.jsx)(
                h.Z,
                {
                    className: D.button,
                    channelId: l
                },
                'clips-enabled-indicator'
            )
        ),
        (null == S ? void 0 : S.type) === P.fO.STREAM &&
            (Z.push(
                (0, r.jsx)(
                    y.Z,
                    {
                        className: D.button,
                        participant: S
                    },
                    'warning'
                )
            ),
            Z.push(
                (0, r.jsx)(
                    m.Z,
                    {
                        size: p.ZP.Sizes.LARGE,
                        className: D.button,
                        participant: S,
                        showQuality: !0,
                        premiumIndicator: !1
                    },
                    'live-indicator'
                )
            )),
        (null == S ? void 0 : S.type) === P.fO.USER &&
            Z.push(
                (0, r.jsx)(
                    O.Z,
                    {
                        className: D.button,
                        userId: S.id
                    },
                    'video-warning'
                )
            ),
        b &&
            !M &&
            Z.push(
                (0, r.jsx)(
                    u.yRy,
                    {
                        targetElementRef: o,
                        position: 'bottom',
                        renderPopout: () => (0, r.jsx)(v.Z, { children: (0, r.jsx)(C.Z, { channel: t }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, i.createElement)(
                                T.Z,
                                k(x({}, e), {
                                    buttonRef: o,
                                    isActive: n,
                                    count: A,
                                    key: 'call-members',
                                    className: D.button
                                })
                            );
                        }
                    },
                    'call-members-popout'
                )
            ),
        G && !B && Z.push((0, r.jsx)(E.Z, { className: D.button }, 'for-later')),
        j &&
            Z.push(
                (0, r.jsx)(
                    T.Z,
                    {
                        className: a()(D.button, { [D.lastButton]: n }),
                        onClick: () => d.Z.toggleParticipantsList(t.id, !w)
                    },
                    'participants-list-button'
                )
            ),
        L &&
            Z.push(
                (0, r.jsx)(
                    I.T,
                    {
                        channelId: t.id,
                        className: a()(D.button, { [D.lastButton]: w }),
                        disabled: n
                    },
                    'chat-spacer'
                )
            ),
        (0, r.jsx)(_.Gt, {
            value: s,
            children: Z
        })
    );
}
