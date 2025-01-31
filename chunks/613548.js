n.d(t, { Z: () => K }), n(653041);
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
    B = n(887012),
    F = n(444253),
    H = n(355827),
    G = n(185935),
    V = n(354459),
    z = n(981631),
    W = n(388032),
    Y = n(960840);
function q(e) {
    let { channelId: t, guildId: n } = e,
        l = (0, d.Wu)([D.Z, U.Z], () => {
            let e = Date.now();
            return o()(D.Z.getSpeakers())
                .map((e) => U.Z.getParticipant(t, e))
                .filter((e) => null != e && e.type === V.fO.USER && e.speaking && !(0, T.ZP)(e))
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
                          text: W.intl.formatToPlainString(W.t.JjdizM, { username: e.user.username }),
                          children: (a) =>
                              (0, i.jsx)(O.ZP, {
                                  ...a,
                                  className: r()(Y.speaker, { [Y.last]: t === l.length - 1 }),
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
function K(e) {
    let { inPopout: t, channel: n, appContext: a, inCall: s, isChatOpen: o, exitFullScreen: T } = e,
        O = n.id,
        {
            voiceParticipantsHidden: D,
            selectedParticipant: W,
            userParticipantCount: K,
            participantsListOpen: X
        } = (0, d.cj)(
            [U.Z],
            () => ({
                selectedParticipant: U.Z.getSelectedParticipant(O),
                voiceParticipantsHidden: U.Z.getVoiceParticipantsHidden(O),
                userParticipantCount: U.Z.getUserParticipantCount(O),
                participantsListOpen: U.Z.getParticipantsListOpen(O)
            }),
            [O]
        ),
        J = (0, d.e7)([w.default], () => w.default.getCurrentUser()),
        Q = (0, B.Z)(n),
        $ = (0, I.So)(c.q.STREAM_HIGH_QUALITY),
        ee = (0, E.o)(W, J),
        et = (0, v.lL)('CallHeader', !0, J, ee),
        en = n.isGuildVoice() && !o,
        { hasParticipantsPanel: ei } = (0, G.Z)({ location: 'ChannelCallHeaderToolbar' }),
        el = !X && ei && (n.isGuildVoice() || n.isGroupDM()),
        { enabled: ea, inInbox: er } = Z.Z.useExperiment({ location: 'ChannelCallHeaderToolbar' }),
        es = (0, g.Q3)('ChannelCallHeaderToolbar'),
        { preventIdle: eo, allowIdle: ec } = (0, j.Y)('popup'),
        ed = [];
    if (Q && !ei) {
        let e = (null == W ? void 0 : W.type) === V.fO.STREAM ? (0, _.my)(W.id) : void 0,
            t = (null == W ? void 0 : W.type) === V.fO.ACTIVITY ? W.applicationId : void 0;
        ed.push(
            (0, i.jsx)(
                M.Z,
                {
                    className: Y.button,
                    channel: n,
                    applicationId: t,
                    stream: e,
                    exitFullScreen: T,
                    analyticsLocation: n.type === z.d4z.GUILD_VOICE ? z.ZY5.GUILD_CHANNEL : z.ZY5.DM_CHANNEL
                },
                'invite-button'
            )
        );
    }
    return (
        D &&
            ed.push(
                (0, i.jsx)(
                    q,
                    {
                        channelId: O,
                        guildId: n.guild_id
                    },
                    'current-speaker'
                )
            ),
        ed.push(
            (0, i.jsx)(
                f.Z,
                {
                    className: Y.button,
                    channelId: O
                },
                'clips-enabled-indicator'
            )
        ),
        (null == W ? void 0 : W.type) === V.fO.STREAM &&
            (ed.push(
                (0, i.jsx)(
                    S.Z,
                    {
                        className: Y.button,
                        participant: W
                    },
                    'warning'
                )
            ),
            ed.push(
                (0, i.jsx)(
                    C.Z,
                    {
                        size: p.ZP.Sizes.LARGE,
                        className: Y.button,
                        participant: W,
                        showQuality: !0,
                        premiumIndicator: $ || et.enabled
                    },
                    'live-indicator'
                )
            )),
        D &&
            !ei &&
            ed.push(
                (0, i.jsx)(
                    u.yRy,
                    {
                        position: 'bottom',
                        renderPopout: () => (0, i.jsx)(A.Z, { children: (0, i.jsx)(H.Z, { channel: n }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, l.createElement)(L.Z, {
                                ...e,
                                isActive: n,
                                count: K,
                                key: 'call-members',
                                className: Y.button
                            });
                        }
                    },
                    'call-members-popout'
                )
            ),
        s &&
            ed.push(
                null != W
                    ? (0, i.jsx)(
                          R.Z,
                          {
                              className: Y.button,
                              channelId: O
                          },
                          'deselect-participant'
                      )
                    : (0, i.jsx)(
                          k.Z,
                          {
                              className: Y.button,
                              channelId: O,
                              isHorizontal: !0
                          },
                          'select-participant'
                      )
            ),
        es ||
            (t || ed.push((0, i.jsx)(m.Z, { className: Y.button }, 'clips')),
            ed.push(
                (0, i.jsx)(
                    b.Z,
                    {
                        onOpen: eo,
                        onClose: ec,
                        className: Y.button
                    },
                    'recents'
                )
            )),
        ea && !er && ed.push((0, i.jsx)(N.Z, { className: Y.button }, 'for-later')),
        ed.push(
            (0, i.jsx)(
                u.yRy,
                {
                    position: 'bottom',
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(A.Z, {
                            children: (0, i.jsx)(F.Z, {
                                channelId: O,
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
                            className: Y.lastButton
                        });
                    }
                },
                'more-options-popout'
            )
        ),
        (el || en) && ed.push((0, i.jsx)(x.ZP.Divider, { className: Y.divider }, 'divider')),
        el &&
            ed.push(
                (0, i.jsx)(
                    L.Z,
                    {
                        className: r()(Y.button, { [Y.lastButton]: o }),
                        onClick: () => h.Z.toggleParticipantsList(n.id, !X)
                    },
                    'participants-list-button'
                )
            ),
        en &&
            ed.push(
                (0, i.jsx)(
                    y.T,
                    {
                        channelId: n.id,
                        className: r()(Y.button, { [Y.lastButton]: X }),
                        disabled: o
                    },
                    'chat-spacer'
                )
            ),
        (0, i.jsx)(i.Fragment, { children: ed })
    );
}
