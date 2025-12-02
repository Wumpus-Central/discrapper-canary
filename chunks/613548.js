n.d(t, { Z: () => R }), n(539854);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(442837),
    u = n(28664),
    d = n(481060),
    p = n(475179),
    h = n(100527),
    f = n(906732),
    m = n(194082),
    g = n(236091),
    b = n(517525),
    y = n(2818),
    C = n(954551),
    v = n(44136),
    _ = n(651183),
    O = n(853476),
    x = n(390322),
    E = n(616286),
    j = n(975146),
    S = n(597998),
    P = n(606304),
    I = n(358221),
    Z = n(355827),
    T = n(185935),
    N = n(354459),
    A = n(388032),
    w = n(956235);
function M(e) {
    let { channelId: t, guildId: n } = e,
        r = (0, c.Wu)([P.Z, I.Z], () => {
            let e = Date.now();
            return s()(P.Z.getSpeakers())
                .map((e) => I.Z.getParticipant(t, e))
                .filter((e) => null != e && e.type === N.fO.USER && e.speaking && !(0, v.ZP)(e))
                .sortBy((t) => -P.Z.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === r.length
        ? null
        : (0, i.jsx)("div", {
              className: w.speakers,
              children: r.map((e) =>
                  (0, i.jsx)(
                      u.u,
                      {
                          position: "bottom",
                          text: A.intl.formatToPlainString(A.t.JjdizN, { username: e.user.username }),
                          children: (0, i.jsx)(S.ZP, {
                              user: e.user,
                              speaking: !0,
                              collapsed: !0,
                              guildId: n,
                          }),
                      },
                      e.id,
                  ),
              ),
          });
}
function R(e) {
    let { channel: t, isChatOpen: n } = e,
        l = r.useRef(null),
        { analyticsLocations: o } = (0, f.ZP)(h.Z.VOICE_CHANNEL_HEADER),
        s = t.id,
        {
            voiceParticipantsHidden: u,
            selectedParticipant: v,
            userParticipantCount: S,
            participantsListOpen: P,
        } = (0, c.cj)(
            [I.Z],
            () => ({
                selectedParticipant: I.Z.getSelectedParticipant(s),
                voiceParticipantsHidden: I.Z.getVoiceParticipantsHidden(s),
                userParticipantCount: I.Z.getUserParticipantCount(s),
                participantsListOpen: I.Z.getParticipantsListOpen(s),
            }),
            [s],
        ),
        A = t.isGuildVoiceOrThread() && !n,
        { hasParticipantsPanel: R } = (0, T.Z)({ location: "ChannelCallHeaderToolbar" }),
        L = !P && R && (t.isGuildVoiceOrThread() || t.isGroupDM()),
        { enabled: D, inInbox: k } = y.Z.useExperiment({ location: "ChannelCallHeaderToolbar" }),
        U = [];
    return (
        u &&
            U.push(
                (0, i.jsx)(
                    M,
                    {
                        channelId: s,
                        guildId: t.guild_id,
                    },
                    "current-speaker",
                ),
            ),
        U.push(
            (0, i.jsx)(
                g.Z,
                {
                    className: w.button,
                    channelId: s,
                },
                "clips-enabled-indicator",
            ),
        ),
        (null == v ? void 0 : v.type) === N.fO.STREAM &&
            (U.push(
                (0, i.jsx)(
                    _.Z,
                    {
                        className: w.button,
                        participant: v,
                    },
                    "warning",
                ),
            ),
            U.push(
                (0, i.jsx)(
                    b.Z,
                    {
                        size: m.ZP.Sizes.LARGE,
                        className: w.button,
                        participant: v,
                        showQuality: !0,
                        premiumIndicator: !1,
                    },
                    "live-indicator",
                ),
            )),
        (null == v ? void 0 : v.type) === N.fO.USER &&
            U.push(
                (0, i.jsx)(
                    O.Z,
                    {
                        className: w.button,
                        userId: v.id,
                    },
                    "video-warning",
                ),
            ),
        u &&
            !R &&
            U.push(
                (0, i.jsx)(
                    d.yRy,
                    {
                        targetElementRef: l,
                        position: "bottom",
                        renderPopout: () => (0, i.jsx)(x.Z, { children: (0, i.jsx)(Z.Z, { channel: t }) }),
                        children: (e, t) => {
                            var n, i;
                            let { isShown: a } = t;
                            return (0, r.createElement)(
                                j.Z,
                                ((n = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            i = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (i = i.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            i.forEach(function (t) {
                                                var i;
                                                (i = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: i,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = i);
                                            });
                                    }
                                    return e;
                                })({}, e)),
                                (i = i =
                                    {
                                        buttonRef: l,
                                        isActive: a,
                                        count: S,
                                        key: "call-members",
                                        className: w.button,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var i = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, i);
                                          }
                                          return n;
                                      })(Object(i)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                      }),
                                n),
                            );
                        },
                    },
                    "call-members-popout",
                ),
            ),
        D && !k && U.push((0, i.jsx)(C.Z, { className: w.button }, "for-later")),
        L &&
            U.push(
                (0, i.jsx)(
                    j.Z,
                    {
                        className: a()(w.button, { [w.lastButton]: n }),
                        onClick: () => p.Z.toggleParticipantsList(t.id, !P),
                    },
                    "participants-list-button",
                ),
            ),
        A &&
            U.push(
                (0, i.jsx)(
                    E.T,
                    {
                        channelId: t.id,
                        className: a()(w.button, { [w.lastButton]: P }),
                        disabled: n,
                    },
                    "chat-spacer",
                ),
            ),
        (0, i.jsx)(f.Gt, {
            value: o,
            children: U,
        })
    );
}
