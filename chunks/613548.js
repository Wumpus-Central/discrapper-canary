n.d(t, {
    Z: function () {
        return q;
    }
}),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
    C = n(569545),
    x = n(517525),
    v = n(665149),
    _ = n(6242),
    I = n(757692),
    E = n(933843),
    b = n(141321),
    Z = n(2818),
    N = n(954551),
    S = n(44136),
    T = n(651183),
    j = n(618158),
    A = n(390322),
    y = n(616286),
    P = n(961048),
    M = n(179424),
    R = n(786915),
    L = n(975146),
    k = n(991617),
    O = n(597998),
    D = n(606304),
    w = n(594174),
    B = n(358221),
    U = n(887012),
    H = n(444253),
    G = n(355827),
    F = n(185935),
    V = n(354459),
    z = n(981631),
    W = n(388032),
    K = n(960840);
function Y(e) {
    let { channelId: t, guildId: n } = e,
        l = (0, d.Wu)([D.Z, B.Z], () => {
            let e = Date.now();
            return o()(D.Z.getSpeakers())
                .map((e) => B.Z.getParticipant(t, e))
                .filter((e) => null != e && e.type === V.fO.USER && e.speaking && !(0, S.ZP)(e))
                .sortBy((t) => -D.Z.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: l.map((e, t) =>
                  (0, i.jsx)(
                      u.Tooltip,
                      {
                          position: 'bottom',
                          color: u.Tooltip.Colors.GREY,
                          text: W.intl.formatToPlainString(W.t.JjdizM, { username: e.user.username }),
                          children: (r) =>
                              (0, i.jsx)(O.ZP, {
                                  ...r,
                                  className: a()(K.speaker, { [K.last]: t === l.length - 1 }),
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
    let { inPopout: t, channel: n, appContext: r, inCall: s, isChatOpen: o, exitFullScreen: S } = e,
        O = n.id,
        {
            voiceParticipantsHidden: D,
            selectedParticipant: W,
            userParticipantCount: q,
            participantsListOpen: X
        } = (0, d.cj)(
            [B.Z],
            () => ({
                selectedParticipant: B.Z.getSelectedParticipant(O),
                voiceParticipantsHidden: B.Z.getVoiceParticipantsHidden(O),
                userParticipantCount: B.Z.getUserParticipantCount(O),
                participantsListOpen: B.Z.getParticipantsListOpen(O)
            }),
            [O]
        ),
        J = (0, d.e7)([w.default], () => w.default.getCurrentUser()),
        Q = (0, U.Z)(n),
        $ = (0, E.So)(c.q.STREAM_HIGH_QUALITY),
        ee = (0, I.o)(W, J),
        et = (0, _.lL)('CallHeader', !0, J, ee),
        en = n.isGuildVoice() && !o,
        { hasParticipantsPanel: ei } = (0, F.Z)({ location: 'ChannelCallHeaderToolbar' }),
        el = !X && ei && (n.isGuildVoice() || n.isGroupDM()),
        { enabled: er, inInbox: ea } = Z.Z.useExperiment({ location: 'ChannelCallHeaderToolbar' }),
        es = (0, g.Q3)('ChannelCallHeaderToolbar'),
        { preventIdle: eo, allowIdle: ec } = (0, j.Y)('popup'),
        ed = [];
    if (Q && !ei) {
        let e = (null == W ? void 0 : W.type) === V.fO.STREAM ? (0, C.my)(W.id) : void 0,
            t = (null == W ? void 0 : W.type) === V.fO.ACTIVITY ? W.id : void 0;
        ed.push(
            (0, i.jsx)(
                R.Z,
                {
                    className: K.button,
                    channel: n,
                    applicationId: t,
                    stream: e,
                    exitFullScreen: S,
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
                    Y,
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
                    className: K.button,
                    channelId: O
                },
                'clips-enabled-indicator'
            )
        ),
        (null == W ? void 0 : W.type) === V.fO.STREAM &&
            (ed.push(
                (0, i.jsx)(
                    T.Z,
                    {
                        className: K.button,
                        participant: W
                    },
                    'warning'
                )
            ),
            ed.push(
                (0, i.jsx)(
                    x.Z,
                    {
                        size: p.ZP.Sizes.LARGE,
                        className: K.button,
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
                    u.Popout,
                    {
                        position: 'bottom',
                        renderPopout: () => (0, i.jsx)(A.Z, { children: (0, i.jsx)(G.Z, { channel: n }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, l.createElement)(L.Z, {
                                ...e,
                                isActive: n,
                                count: q,
                                key: 'call-members',
                                className: K.button
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
                          M.Z,
                          {
                              className: K.button,
                              channelId: O
                          },
                          'deselect-participant'
                      )
                    : (0, i.jsx)(
                          k.Z,
                          {
                              className: K.button,
                              channelId: O,
                              isHorizontal: !0
                          },
                          'select-participant'
                      )
            ),
        !es &&
            (!t && ed.push((0, i.jsx)(m.Z, { className: K.button }, 'clips')),
            ed.push(
                (0, i.jsx)(
                    b.Z,
                    {
                        onOpen: eo,
                        onClose: ec,
                        className: K.button
                    },
                    'recents'
                )
            )),
        er && !ea && ed.push((0, i.jsx)(N.Z, { className: K.button }, 'for-later')),
        ed.push(
            (0, i.jsx)(
                u.Popout,
                {
                    position: 'bottom',
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(A.Z, {
                            children: (0, i.jsx)(H.Z, {
                                channelId: O,
                                onClose: t,
                                appContext: r,
                                exitFullScreen: S
                            })
                        });
                    },
                    children: (e, t) => {
                        let { isShown: n } = t;
                        return (0, l.createElement)(P.Z, {
                            ...e,
                            key: 'more-options',
                            isActive: n,
                            className: K.lastButton
                        });
                    }
                },
                'more-options-popout'
            )
        ),
        (el || en) && ed.push((0, i.jsx)(v.ZP.Divider, { className: K.divider }, 'divider')),
        el &&
            ed.push(
                (0, i.jsx)(
                    L.Z,
                    {
                        className: a()(K.button, { [K.lastButton]: o }),
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
                        className: a()(K.button, { [K.lastButton]: X }),
                        disabled: o
                    },
                    'chat-spacer'
                )
            ),
        (0, i.jsx)(i.Fragment, { children: ed })
    );
}
