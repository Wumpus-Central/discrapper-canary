n.d(t, { Z: () => X }), n(653041);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(392711),
    o = n.n(s),
    c = n(848246),
    d = n(442837),
    u = n(481060),
    h = n(475179),
    p = n(194082),
    m = n(320007),
    f = n(236091),
    g = n(540059),
    _ = n(569545),
    C = n(517525),
    x = n(665149),
    v = n(6242),
    E = n(757692),
    I = n(933843),
    b = n(141321),
    Z = n(2818),
    N = n(954551),
    T = n(44136),
    S = n(651183),
    j = n(618158),
    A = n(390322),
    y = n(616286),
    P = n(961048),
    R = n(179424),
    M = n(786915),
    L = n(975146),
    k = n(991617),
    O = n(597998),
    D = n(606304),
    w = n(594174),
    U = n(358221),
    B = n(682901),
    F = n(887012),
    H = n(444253),
    G = n(355827),
    V = n(185935),
    z = n(354459),
    W = n(981631),
    Y = n(388032),
    q = n(960840);
function K(e) {
    let { channelId: t, guildId: n } = e,
        l = (0, d.Wu)([D.Z, U.Z], () => {
            let e = Date.now();
            return o()(D.Z.getSpeakers())
                .map((e) => U.Z.getParticipant(t, e))
                .filter((e) => null != e && e.type === z.fO.USER && e.speaking && !(0, T.ZP)(e))
                .sortBy((t) => -D.Z.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: l.map((e, t) =>
                  (0, i.jsx)(
                      u.ua7,
                      {
                          position: 'bottom',
                          color: u.ua7.Colors.GREY,
                          text: Y.intl.formatToPlainString(Y.t.JjdizM, { username: e.user.username }),
                          children: (a) =>
                              (0, i.jsx)(O.ZP, {
                                  ...a,
                                  className: r()(q.speaker, { [q.last]: t === l.length - 1 }),
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
function X(e) {
    let { inPopout: t, channel: n, appContext: a, inCall: s, isChatOpen: o, exitFullScreen: T } = e,
        { enabled: O } = (0, B.Z)({ location: 'ChannelCallHeaderToolbar' }),
        D = n.id,
        {
            voiceParticipantsHidden: Y,
            selectedParticipant: X,
            userParticipantCount: J,
            participantsListOpen: Q
        } = (0, d.cj)(
            [U.Z],
            () => ({
                selectedParticipant: U.Z.getSelectedParticipant(D),
                voiceParticipantsHidden: U.Z.getVoiceParticipantsHidden(D),
                userParticipantCount: U.Z.getUserParticipantCount(D),
                participantsListOpen: U.Z.getParticipantsListOpen(D)
            }),
            [D]
        ),
        $ = (0, d.e7)([w.default], () => w.default.getCurrentUser()),
        ee = (0, F.Z)(n),
        et = (0, I.So)(c.q.STREAM_HIGH_QUALITY),
        en = (0, E.o)(X, $),
        ei = (0, v.lL)('CallHeader', !0, $, en),
        el = n.isGuildVoice() && !o,
        { hasParticipantsPanel: ea } = (0, V.Z)({ location: 'ChannelCallHeaderToolbar' }),
        er = !Q && ea && (n.isGuildVoice() || n.isGroupDM()),
        { enabled: es, inInbox: eo } = Z.Z.useExperiment({ location: 'ChannelCallHeaderToolbar' }),
        ec = (0, g.Q3)('ChannelCallHeaderToolbar'),
        { preventIdle: ed, allowIdle: eu } = (0, j.Y)('popup'),
        eh = [];
    if (ee && !ea && !O) {
        let e = (null == X ? void 0 : X.type) === z.fO.STREAM ? (0, _.my)(X.id) : void 0,
            t = (null == X ? void 0 : X.type) === z.fO.ACTIVITY ? X.applicationId : void 0;
        eh.push(
            (0, i.jsx)(
                M.Z,
                {
                    className: q.button,
                    channel: n,
                    applicationId: t,
                    stream: e,
                    exitFullScreen: T,
                    analyticsLocation: n.type === W.d4z.GUILD_VOICE ? W.ZY5.GUILD_CHANNEL : W.ZY5.DM_CHANNEL
                },
                'invite-button'
            )
        );
    }
    return (
        Y &&
            eh.push(
                (0, i.jsx)(
                    K,
                    {
                        channelId: D,
                        guildId: n.guild_id
                    },
                    'current-speaker'
                )
            ),
        eh.push(
            (0, i.jsx)(
                f.Z,
                {
                    className: q.button,
                    channelId: D
                },
                'clips-enabled-indicator'
            )
        ),
        (null == X ? void 0 : X.type) === z.fO.STREAM &&
            (eh.push(
                (0, i.jsx)(
                    S.Z,
                    {
                        className: q.button,
                        participant: X
                    },
                    'warning'
                )
            ),
            eh.push(
                (0, i.jsx)(
                    C.Z,
                    {
                        size: p.ZP.Sizes.LARGE,
                        className: q.button,
                        participant: X,
                        showQuality: !0,
                        premiumIndicator: et || ei.enabled
                    },
                    'live-indicator'
                )
            )),
        Y &&
            !ea &&
            eh.push(
                (0, i.jsx)(
                    u.yRy,
                    {
                        position: 'bottom',
                        renderPopout: () => (0, i.jsx)(A.Z, { children: (0, i.jsx)(G.Z, { channel: n }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, l.createElement)(L.Z, {
                                ...e,
                                isActive: n,
                                count: J,
                                key: 'call-members',
                                className: q.button
                            });
                        }
                    },
                    'call-members-popout'
                )
            ),
        s &&
            !O &&
            eh.push(
                null != X
                    ? (0, i.jsx)(
                          R.Z,
                          {
                              className: q.button,
                              channelId: D
                          },
                          'deselect-participant'
                      )
                    : (0, i.jsx)(
                          k.Z,
                          {
                              className: q.button,
                              channelId: D,
                              isHorizontal: !0
                          },
                          'select-participant'
                      )
            ),
        ec ||
            (t || eh.push((0, i.jsx)(m.Z, { className: q.button }, 'clips')),
            O ||
                eh.push(
                    (0, i.jsx)(
                        b.Z,
                        {
                            onOpen: ed,
                            onClose: eu,
                            className: q.button
                        },
                        'recents'
                    )
                )),
        es && !eo && eh.push((0, i.jsx)(N.Z, { className: q.button }, 'for-later')),
        O ||
            eh.push(
                (0, i.jsx)(
                    u.yRy,
                    {
                        position: 'bottom',
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(A.Z, {
                                children: (0, i.jsx)(H.Z, {
                                    channelId: D,
                                    onClose: t,
                                    appContext: a,
                                    exitFullScreen: T
                                })
                            });
                        },
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, l.createElement)(P.Z, {
                                ...e,
                                key: 'more-options',
                                isActive: n,
                                className: q.lastButton
                            });
                        }
                    },
                    'more-options-popout'
                )
            ),
        (er || el) && !O && eh.push((0, i.jsx)(x.ZP.Divider, { className: q.divider }, 'divider')),
        er &&
            eh.push(
                (0, i.jsx)(
                    L.Z,
                    {
                        className: r()(q.button, { [q.lastButton]: o }),
                        onClick: () => h.Z.toggleParticipantsList(n.id, !Q)
                    },
                    'participants-list-button'
                )
            ),
        el &&
            eh.push(
                (0, i.jsx)(
                    y.T,
                    {
                        channelId: n.id,
                        className: r()(q.button, { [q.lastButton]: Q }),
                        disabled: o
                    },
                    'chat-spacer'
                )
            ),
        (0, i.jsx)(i.Fragment, { children: eh })
    );
}
