n.d(t, { A: () => M }), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(735438),
    o = n.n(s),
    c = n(311907),
    u = n(990078),
    d = n(397927),
    f = n(367513),
    p = n(793574),
    h = n(688810),
    b = n(402216),
    g = n(689874),
    m = n(872363),
    A = n(966597),
    y = n(922281),
    O = n(51082),
    j = n(275731),
    v = n(289552),
    x = n(246356),
    E = n(977851),
    _ = n(772475),
    C = n(481947),
    S = n(485296),
    I = n(313961),
    N = n(195007),
    T = n(261718),
    P = n(806931),
    w = n(985018),
    R = n(433122);
function D(e) {
    let { channelId: t, guildId: n } = e,
        l = (0, c.yK)([S.A, I.A], () => {
            let e = Date.now();
            return o()(S.A.getSpeakers())
                .map((e) => I.A.getParticipant(t, e))
                .filter((e) => null != e && e.type === P.lp.USER && e.speaking && !(0, O.Ay)(e))
                .sortBy((t) => -S.A.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === l.length
        ? null
        : (0, r.jsx)("div", {
              className: R.$U,
              children: l.map((e) =>
                  (0, r.jsx)(
                      u.m,
                      {
                          position: "bottom",
                          text: w.intl.formatToPlainString(w.t.JjdizN, { username: e.user.username }),
                          children: (0, r.jsx)(C.Ay, {
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
function M(e) {
    let { channel: t, isChatOpen: n } = e,
        i = l.useRef(null),
        { analyticsLocations: s } = (0, h.Ay)(p.A.VOICE_CHANNEL_HEADER),
        o = t.id,
        {
            voiceParticipantsHidden: u,
            selectedParticipant: O,
            userParticipantCount: C,
            participantsListOpen: S,
        } = (0, c.cf)(
            [I.A],
            () => ({
                selectedParticipant: I.A.getSelectedParticipant(o),
                voiceParticipantsHidden: I.A.getVoiceParticipantsHidden(o),
                userParticipantCount: I.A.getUserParticipantCount(o),
                participantsListOpen: I.A.getParticipantsListOpen(o),
            }),
            [o],
        ),
        w = t.isGuildVoiceOrThread() && !n,
        { hasParticipantsPanel: M } = (0, T.A)({ location: "ChannelCallHeaderToolbar" }),
        L = !S && M && (t.isGuildVoiceOrThread() || t.isGroupDM()),
        { enabled: G, inInbox: k } = A.A.useExperiment({ location: "ChannelCallHeaderToolbar" }),
        U = [];
    return (
        u &&
            U.push(
                (0, r.jsx)(
                    D,
                    {
                        channelId: o,
                        guildId: t.guild_id,
                    },
                    "current-speaker",
                ),
            ),
        U.push(
            (0, r.jsx)(
                g.A,
                {
                    className: R.x6,
                    channelId: o,
                },
                "clips-enabled-indicator",
            ),
        ),
        (null == O ? void 0 : O.type) === P.lp.STREAM &&
            (U.push(
                (0, r.jsx)(
                    j.A,
                    {
                        className: R.x6,
                        participant: O,
                    },
                    "warning",
                ),
            ),
            U.push(
                (0, r.jsx)(
                    m.A,
                    {
                        size: b.Ay.Sizes.LARGE,
                        className: R.x6,
                        participant: O,
                        showQuality: !0,
                        premiumIndicator: !1,
                    },
                    "live-indicator",
                ),
            )),
        (null == O ? void 0 : O.type) === P.lp.USER &&
            U.push(
                (0, r.jsx)(
                    v.A,
                    {
                        className: R.x6,
                        userId: O.id,
                    },
                    "video-warning",
                ),
            ),
        u &&
            !M &&
            U.push(
                (0, r.jsx)(
                    d.YNO,
                    {
                        targetElementRef: i,
                        position: "bottom",
                        renderPopout: () => (0, r.jsx)(x.A, { children: (0, r.jsx)(N.A, { channel: t }) }),
                        children: (e, t) => {
                            var n, r;
                            let { isShown: a } = t;
                            return (0, l.createElement)(
                                _.A,
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
                                        buttonRef: i,
                                        isActive: a,
                                        count: C,
                                        key: "call-members",
                                        className: R.x6,
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
        G && !k && U.push((0, r.jsx)(y.A, { className: R.x6 }, "for-later")),
        L &&
            U.push(
                (0, r.jsx)(
                    _.A,
                    {
                        className: a()(R.x6, { [R.Lt]: n }),
                        onClick: () => f.A.toggleParticipantsList(t.id, !S),
                    },
                    "participants-list-button",
                ),
            ),
        w &&
            U.push(
                (0, r.jsx)(
                    E.V,
                    {
                        channelId: t.id,
                        className: a()(R.x6, { [R.Lt]: S }),
                        disabled: n,
                    },
                    "chat-spacer",
                ),
            ),
        (0, r.jsx)(h.f5, {
            value: s,
            children: U,
        })
    );
}
