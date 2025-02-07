n.d(t, { Z: () => q }), n(653041);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(392711),
    o = n.n(s),
    c = n(442837),
    d = n(481060),
    u = n(475179),
    h = n(194082),
    p = n(320007),
    m = n(236091),
    f = n(540059),
    g = n(569545),
    _ = n(517525),
    C = n(665149),
    x = n(6242),
    v = n(757692),
    E = n(141321),
    I = n(2818),
    b = n(954551),
    Z = n(44136),
    N = n(651183),
    T = n(618158),
    S = n(390322),
    j = n(616286),
    y = n(961048),
    A = n(179424),
    P = n(786915),
    R = n(975146),
    M = n(991617),
    L = n(597998),
    k = n(606304),
    O = n(594174),
    D = n(358221),
    w = n(682901),
    U = n(887012),
    B = n(444253),
    F = n(355827),
    H = n(185935),
    G = n(354459),
    V = n(981631),
    z = n(388032),
    W = n(960840);
function Y(e) {
    let { channelId: t, guildId: n } = e,
        l = (0, c.Wu)([k.Z, D.Z], () => {
            let e = Date.now();
            return o()(k.Z.getSpeakers())
                .map((e) => D.Z.getParticipant(t, e))
                .filter((e) => null != e && e.type === G.fO.USER && e.speaking && !(0, Z.ZP)(e))
                .sortBy((t) => -k.Z.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: l.map((e, t) =>
                  (0, i.jsx)(
                      d.ua7,
                      {
                          position: 'bottom',
                          color: d.ua7.Colors.GREY,
                          text: z.intl.formatToPlainString(z.t.JjdizM, { username: e.user.username }),
                          children: (a) =>
                              (0, i.jsx)(L.ZP, {
                                  ...a,
                                  className: r()(W.speaker, { [W.last]: t === l.length - 1 }),
                                  user: e.user,
                                  speaking: !0,
                                  collapsed: !0,
                                  guildId: n
                              })
                      },
                      e.id
                  )
              )
          });
}
function q(e) {
    let { inPopout: t, channel: n, appContext: a, inCall: s, isChatOpen: o, exitFullScreen: Z } = e,
        { enabled: L } = (0, w.Z)({ location: 'ChannelCallHeaderToolbar' }),
        k = n.id,
        {
            voiceParticipantsHidden: z,
            selectedParticipant: q,
            userParticipantCount: K,
            participantsListOpen: X
        } = (0, c.cj)(
            [D.Z],
            () => ({
                selectedParticipant: D.Z.getSelectedParticipant(k),
                voiceParticipantsHidden: D.Z.getVoiceParticipantsHidden(k),
                userParticipantCount: D.Z.getUserParticipantCount(k),
                participantsListOpen: D.Z.getParticipantsListOpen(k)
            }),
            [k]
        ),
        J = (0, c.e7)([O.default], () => O.default.getCurrentUser()),
        Q = (0, U.Z)(n),
        $ = (0, v.o)(q, J),
        ee = (0, x.lL)('CallHeader', !0, J, $),
        et = n.isGuildVoice() && !o,
        { hasParticipantsPanel: en } = (0, H.Z)({ location: 'ChannelCallHeaderToolbar' }),
        ei = !X && en && (n.isGuildVoice() || n.isGroupDM()),
        { enabled: el, inInbox: ea } = I.Z.useExperiment({ location: 'ChannelCallHeaderToolbar' }),
        er = (0, f.Q3)('ChannelCallHeaderToolbar'),
        { preventIdle: es, allowIdle: eo } = (0, T.Y)('popup'),
        ec = [];
    if (Q && !en && !L) {
        let e = (null == q ? void 0 : q.type) === G.fO.STREAM ? (0, g.my)(q.id) : void 0,
            t = (null == q ? void 0 : q.type) === G.fO.ACTIVITY ? q.applicationId : void 0;
        ec.push(
            (0, i.jsx)(
                P.Z,
                {
                    className: W.button,
                    channel: n,
                    applicationId: t,
                    stream: e,
                    exitFullScreen: Z,
                    analyticsLocation: n.type === V.d4z.GUILD_VOICE ? V.ZY5.GUILD_CHANNEL : V.ZY5.DM_CHANNEL
                },
                'invite-button'
            )
        );
    }
    return (
        z &&
            ec.push(
                (0, i.jsx)(
                    Y,
                    {
                        channelId: k,
                        guildId: n.guild_id
                    },
                    'current-speaker'
                )
            ),
        ec.push(
            (0, i.jsx)(
                m.Z,
                {
                    className: W.button,
                    channelId: k
                },
                'clips-enabled-indicator'
            )
        ),
        (null == q ? void 0 : q.type) === G.fO.STREAM &&
            (ec.push(
                (0, i.jsx)(
                    N.Z,
                    {
                        className: W.button,
                        participant: q
                    },
                    'warning'
                )
            ),
            ec.push(
                (0, i.jsx)(
                    _.Z,
                    {
                        size: h.ZP.Sizes.LARGE,
                        className: W.button,
                        participant: q,
                        showQuality: !0,
                        premiumIndicator: ee.enabled
                    },
                    'live-indicator'
                )
            )),
        z &&
            !en &&
            ec.push(
                (0, i.jsx)(
                    d.yRy,
                    {
                        position: 'bottom',
                        renderPopout: () => (0, i.jsx)(S.Z, { children: (0, i.jsx)(F.Z, { channel: n }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, l.createElement)(R.Z, {
                                ...e,
                                isActive: n,
                                count: K,
                                key: 'call-members',
                                className: W.button
                            });
                        }
                    },
                    'call-members-popout'
                )
            ),
        s &&
            !L &&
            ec.push(
                null != q
                    ? (0, i.jsx)(
                          A.Z,
                          {
                              className: W.button,
                              channelId: k
                          },
                          'deselect-participant'
                      )
                    : (0, i.jsx)(
                          M.Z,
                          {
                              className: W.button,
                              channelId: k,
                              isHorizontal: !0
                          },
                          'select-participant'
                      )
            ),
        er ||
            (t || ec.push((0, i.jsx)(p.Z, { className: W.button }, 'clips')),
            L ||
                ec.push(
                    (0, i.jsx)(
                        E.Z,
                        {
                            onOpen: es,
                            onClose: eo,
                            className: W.button
                        },
                        'recents'
                    )
                )),
        el && !ea && ec.push((0, i.jsx)(b.Z, { className: W.button }, 'for-later')),
        L ||
            ec.push(
                (0, i.jsx)(
                    d.yRy,
                    {
                        position: 'bottom',
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(S.Z, {
                                children: (0, i.jsx)(B.Z, {
                                    channelId: k,
                                    onClose: t,
                                    appContext: a,
                                    exitFullScreen: Z
                                })
                            });
                        },
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, l.createElement)(y.Z, {
                                ...e,
                                key: 'more-options',
                                isActive: n,
                                className: W.lastButton
                            });
                        }
                    },
                    'more-options-popout'
                )
            ),
        (ei || et) && !L && ec.push((0, i.jsx)(C.ZP.Divider, { className: W.divider }, 'divider')),
        ei &&
            ec.push(
                (0, i.jsx)(
                    R.Z,
                    {
                        className: r()(W.button, { [W.lastButton]: o }),
                        onClick: () => u.Z.toggleParticipantsList(n.id, !X)
                    },
                    'participants-list-button'
                )
            ),
        et &&
            ec.push(
                (0, i.jsx)(
                    j.T,
                    {
                        channelId: n.id,
                        className: r()(W.button, { [W.lastButton]: X }),
                        disabled: o
                    },
                    'chat-spacer'
                )
            ),
        (0, i.jsx)(i.Fragment, { children: ec })
    );
}
