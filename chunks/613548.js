n.d(t, { Z: () => R }), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(442837),
    u = n(28664),
    d = n(481060),
    p = n(475179),
    f = n(100527),
    h = n(906732),
    m = n(194082),
    g = n(236091),
    b = n(517525),
    _ = n(2818),
    y = n(954551),
    C = n(44136),
    v = n(651183),
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
        i = (0, c.Wu)([P.Z, I.Z], () => {
            let e = Date.now();
            return s()(P.Z.getSpeakers())
                .map((e) => I.Z.getParticipant(t, e))
                .filter((e) => null != e && e.type === N.fO.USER && e.speaking && !(0, C.ZP)(e))
                .sortBy((t) => -P.Z.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === i.length
        ? null
        : (0, r.jsx)("div", {
              className: w.speakers,
              children: i.map((e) =>
                  (0, r.jsx)(
                      u.u,
                      {
                          position: "bottom",
                          text: A.intl.formatToPlainString(A.t.JjdizN, { username: e.user.username }),
                          children: (0, r.jsx)(S.ZP, {
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
        l = i.useRef(null),
        { analyticsLocations: o } = (0, h.ZP)(f.Z.VOICE_CHANNEL_HEADER),
        s = t.id,
        {
            voiceParticipantsHidden: u,
            selectedParticipant: C,
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
        D = !P && R && (t.isGuildVoiceOrThread() || t.isGroupDM()),
        { enabled: L, inInbox: k } = _.Z.useExperiment({ location: "ChannelCallHeaderToolbar" }),
        U = [];
    return (
        u &&
            U.push(
                (0, r.jsx)(
                    M,
                    {
                        channelId: s,
                        guildId: t.guild_id,
                    },
                    "current-speaker",
                ),
            ),
        U.push(
            (0, r.jsx)(
                g.Z,
                {
                    className: w.button,
                    channelId: s,
                },
                "clips-enabled-indicator",
            ),
        ),
        (null == C ? void 0 : C.type) === N.fO.STREAM &&
            (U.push(
                (0, r.jsx)(
                    v.Z,
                    {
                        className: w.button,
                        participant: C,
                    },
                    "warning",
                ),
            ),
            U.push(
                (0, r.jsx)(
                    b.Z,
                    {
                        size: m.ZP.Sizes.LARGE,
                        className: w.button,
                        participant: C,
                        showQuality: !0,
                        premiumIndicator: !1,
                    },
                    "live-indicator",
                ),
            )),
        (null == C ? void 0 : C.type) === N.fO.USER &&
            U.push(
                (0, r.jsx)(
                    O.Z,
                    {
                        className: w.button,
                        userId: C.id,
                    },
                    "video-warning",
                ),
            ),
        u &&
            !R &&
            U.push(
                (0, r.jsx)(
                    d.yRy,
                    {
                        targetElementRef: l,
                        position: "bottom",
                        renderPopout: () => (0, r.jsx)(x.Z, { children: (0, r.jsx)(Z.Z, { channel: t }) }),
                        children: (e, t) => {
                            var n, r;
                            let { isShown: a } = t;
                            return (0, i.createElement)(
                                j.Z,
                                ((n = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = r);
                                            });
                                    }
                                    return e;
                                })({}, e)),
                                (r = r =
                                    {
                                        buttonRef: l,
                                        isActive: a,
                                        count: S,
                                        key: "call-members",
                                        className: w.button,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(r)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                      }),
                                n),
                            );
                        },
                    },
                    "call-members-popout",
                ),
            ),
        L && !k && U.push((0, r.jsx)(y.Z, { className: w.button }, "for-later")),
        D &&
            U.push(
                (0, r.jsx)(
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
                (0, r.jsx)(
                    E.T,
                    {
                        channelId: t.id,
                        className: a()(w.button, { [w.lastButton]: P }),
                        disabled: n,
                    },
                    "chat-spacer",
                ),
            ),
        (0, r.jsx)(h.Gt, {
            value: o,
            children: U,
        })
    );
}
