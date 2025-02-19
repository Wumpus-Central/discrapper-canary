n.d(t, { Z: () => X }), n(653041);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n.n(a),
    c = n(442837),
    u = n(481060),
    d = n(475179),
    p = n(194082),
    h = n(320007),
    f = n(236091),
    m = n(540059),
    g = n(569545),
    b = n(517525),
    _ = n(665149),
    C = n(6242),
    v = n(757692),
    y = n(141321),
    x = n(2818),
    j = n(954551),
    O = n(44136),
    N = n(651183),
    E = n(618158),
    P = n(390322),
    I = n(616286),
    S = n(961048),
    Z = n(179424),
    T = n(786915),
    A = n(975146),
    w = n(991617),
    R = n(597998),
    k = n(606304),
    M = n(594174),
    L = n(358221),
    D = n(682901),
    W = n(887012),
    U = n(444253),
    B = n(355827),
    F = n(185935),
    H = n(354459),
    G = n(981631),
    V = n(388032),
    z = n(427473);
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
function Y(e, t) {
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
function K(e) {
    let { channelId: t, guildId: n } = e,
        i = (0, c.Wu)([k.Z, L.Z], () => {
            let e = Date.now();
            return s()(k.Z.getSpeakers())
                .map((e) => L.Z.getParticipant(t, e))
                .filter((e) => null != e && e.type === H.fO.USER && e.speaking && !(0, O.ZP)(e))
                .sortBy((t) => -k.Z.getSpeakingDuration(t.user.id, e))
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
                          text: V.NW.formatToPlainString(V.t.JjdizM, { username: e.user.username }),
                          children: (l) =>
                              (0, r.jsx)(
                                  R.ZP,
                                  Y(q({}, l), {
                                      className: o()(z.speaker, { [z.last]: t === i.length - 1 }),
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
function X(e) {
    let { inPopout: t, channel: n, appContext: l, inCall: a, isChatOpen: s, exitFullScreen: O } = e,
        { enabled: R } = (0, D.Z)({ location: 'ChannelCallHeaderToolbar' }),
        k = n.id,
        {
            voiceParticipantsHidden: V,
            selectedParticipant: X,
            userParticipantCount: J,
            participantsListOpen: Q
        } = (0, c.cj)(
            [L.Z],
            () => ({
                selectedParticipant: L.Z.getSelectedParticipant(k),
                voiceParticipantsHidden: L.Z.getVoiceParticipantsHidden(k),
                userParticipantCount: L.Z.getUserParticipantCount(k),
                participantsListOpen: L.Z.getParticipantsListOpen(k)
            }),
            [k]
        ),
        $ = (0, c.e7)([M.default], () => M.default.getCurrentUser()),
        ee = (0, W.Z)(n),
        et = (0, v.o)(X, $),
        en = (0, C.lL)('CallHeader', !0, $, et),
        er = n.isGuildVoice() && !s,
        { hasParticipantsPanel: ei } = (0, F.Z)({ location: 'ChannelCallHeaderToolbar' }),
        el = !Q && ei && (n.isGuildVoice() || n.isGroupDM()),
        { enabled: eo, inInbox: ea } = x.Z.useExperiment({ location: 'ChannelCallHeaderToolbar' }),
        es = (0, m.Q3)('ChannelCallHeaderToolbar'),
        { preventIdle: ec, allowIdle: eu } = (0, E.Y)('popup'),
        ed = [];
    if (ee && !ei && !R) {
        let e = (null == X ? void 0 : X.type) === H.fO.STREAM ? (0, g.my)(X.id) : void 0,
            t = (null == X ? void 0 : X.type) === H.fO.ACTIVITY ? X.applicationId : void 0;
        ed.push(
            (0, r.jsx)(
                T.Z,
                {
                    className: z.button,
                    channel: n,
                    applicationId: t,
                    stream: e,
                    exitFullScreen: O,
                    analyticsLocation: n.type === G.d4z.GUILD_VOICE ? G.ZY5.GUILD_CHANNEL : G.ZY5.DM_CHANNEL
                },
                'invite-button'
            )
        );
    }
    return (
        V &&
            ed.push(
                (0, r.jsx)(
                    K,
                    {
                        channelId: k,
                        guildId: n.guild_id
                    },
                    'current-speaker'
                )
            ),
        ed.push(
            (0, r.jsx)(
                f.Z,
                {
                    className: z.button,
                    channelId: k
                },
                'clips-enabled-indicator'
            )
        ),
        (null == X ? void 0 : X.type) === H.fO.STREAM &&
            (ed.push(
                (0, r.jsx)(
                    N.Z,
                    {
                        className: z.button,
                        participant: X
                    },
                    'warning'
                )
            ),
            ed.push(
                (0, r.jsx)(
                    b.Z,
                    {
                        size: p.ZP.Sizes.LARGE,
                        className: z.button,
                        participant: X,
                        showQuality: !0,
                        premiumIndicator: en.enabled
                    },
                    'live-indicator'
                )
            )),
        V &&
            !ei &&
            ed.push(
                (0, r.jsx)(
                    u.yRy,
                    {
                        position: 'bottom',
                        renderPopout: () => (0, r.jsx)(P.Z, { children: (0, r.jsx)(B.Z, { channel: n }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, i.createElement)(
                                A.Z,
                                Y(q({}, e), {
                                    isActive: n,
                                    count: J,
                                    key: 'call-members',
                                    className: z.button
                                })
                            );
                        }
                    },
                    'call-members-popout'
                )
            ),
        a &&
            !R &&
            ed.push(
                null != X
                    ? (0, r.jsx)(
                          Z.Z,
                          {
                              className: z.button,
                              channelId: k
                          },
                          'deselect-participant'
                      )
                    : (0, r.jsx)(
                          w.Z,
                          {
                              className: z.button,
                              channelId: k,
                              isHorizontal: !0
                          },
                          'select-participant'
                      )
            ),
        es ||
            (t || ed.push((0, r.jsx)(h.Z, { className: z.button }, 'clips')),
            R ||
                ed.push(
                    (0, r.jsx)(
                        y.Z,
                        {
                            onOpen: ec,
                            onClose: eu,
                            className: z.button
                        },
                        'recents'
                    )
                )),
        eo && !ea && ed.push((0, r.jsx)(j.Z, { className: z.button }, 'for-later')),
        R ||
            ed.push(
                (0, r.jsx)(
                    u.yRy,
                    {
                        position: 'bottom',
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(P.Z, {
                                children: (0, r.jsx)(U.Z, {
                                    channelId: k,
                                    onClose: t,
                                    appContext: l,
                                    exitFullScreen: O
                                })
                            });
                        },
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, i.createElement)(
                                S.Z,
                                Y(q({}, e), {
                                    key: 'more-options',
                                    isActive: n,
                                    className: z.lastButton
                                })
                            );
                        }
                    },
                    'more-options-popout'
                )
            ),
        (el || er) && !R && ed.push((0, r.jsx)(_.ZP.Divider, { className: z.divider }, 'divider')),
        el &&
            ed.push(
                (0, r.jsx)(
                    A.Z,
                    {
                        className: o()(z.button, { [z.lastButton]: s }),
                        onClick: () => d.Z.toggleParticipantsList(n.id, !Q)
                    },
                    'participants-list-button'
                )
            ),
        er &&
            ed.push(
                (0, r.jsx)(
                    I.T,
                    {
                        channelId: n.id,
                        className: o()(z.button, { [z.lastButton]: Q }),
                        disabled: s
                    },
                    'chat-spacer'
                )
            ),
        (0, r.jsx)(r.Fragment, { children: ed })
    );
}
