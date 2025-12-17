n.d(t, { Z: () => V }), n(361932), n(187205), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(442837),
    u = n(681715),
    d = n(481060),
    f = n(317381),
    h = n(884338),
    p = n(470883),
    g = n(666188),
    b = n(372769),
    m = n(523751),
    y = n(246364),
    O = n(746916),
    v = n(634755),
    j = n(160404),
    C = n(777861),
    x = n(565799),
    E = n(501655),
    S = n(517334),
    I = n(344185),
    _ = n(752048),
    P = n(439944),
    N = n(199902),
    Z = n(984933),
    w = n(699516),
    T = n(9156),
    A = n(594174),
    R = n(938475),
    D = n(981631),
    M = n(388032),
    L = n(998081);
function k(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: L.row,
              children: [
                  (0, r.jsx)(e, {
                      className: L.activityIcon,
                      color: "currentColor",
                  }),
                  (0, r.jsx)(h.ZP, {
                      guildId: n,
                      users: t,
                      max: 6,
                  }),
              ],
          });
}
function G(e) {
    let { muteConfig: t, className: n } = e;
    return (null == t ? void 0 : t.end_time) == null
        ? (0, r.jsx)(d.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: M.intl.string(M.t.fpKdS1),
          })
        : (0, r.jsx)(C.Z, {
              muteConfig: t,
              className: n,
          });
}
function U(e) {
    let { guild: t } = e,
        n = t.id,
        {
            voiceUsersToShow: l,
            stageSpeakers: o,
            numStageListeners: u,
            streamUsersToShow: g,
            embeddedActivitiesUsers: b,
        } = (function (e) {
            let t = e.id,
                n = (0, c.Wu)(
                    [Z.ZP, I.Z],
                    () => [
                        ...Z.ZP.getChannels(t)
                            [Z.Zb].filter((e) => {
                                let { channel: t } = e;
                                return t.type === D.d4z.GUILD_VOICE;
                            })
                            .map((e) => {
                                let { channel: t } = e;
                                return t.id;
                            }),
                        ...Object.values(I.Z.getThreadsForGuild(t)).flatMap((e) => Object.keys(e)),
                    ],
                    [t],
                ),
                r = (0, S.ZP)(t),
                l = i.useMemo(() => r.map((e) => e.id), [r]),
                a = (0, c.e7)([R.ZP], () => R.ZP.getVoiceStates(t), [t]),
                o = (0, c.Wu)([w.Z], () => w.Z.getBlockedOrIgnoredIDs()),
                u = s().flatMap(n, (t) => {
                    var n;
                    if (t === e.afkChannelId) return [];
                    let r = (null != (n = a[t]) ? n : []).map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                    return (0, p.dq)(r, o);
                }),
                d = (0, c.Wu)([x.Z], () =>
                    s().flatMap(l, (t) => {
                        if (t === e.afkChannelId) return [];
                        let n = x.Z.getMutableParticipants(t, E.pV.SPEAKER)
                            .filter((e) => e.type === E.Ui.VOICE)
                            .map((e) => {
                                let { user: t } = e;
                                return t;
                            });
                        return (0, p.dq)(n, o);
                    }),
                ),
                h = (0, c.e7)([x.Z], () => {
                    let e = 0;
                    for (let t of l) e += x.Z.getParticipantCount(t, E.pV.AUDIENCE);
                    return e;
                }),
                g = (0, c.Wu)([N.Z], () => {
                    let e = N.Z.getAllApplicationStreams()
                        .filter((e) => e.guildId === t)
                        .map((e) => e.ownerId);
                    return (0, p._j)(e, o);
                }, [o, t]),
                b = (0, c.Wu)([f.ZP], () => {
                    let e = f.ZP.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds));
                    return (0, p._j)(e, o);
                }, [t, o]),
                m = (0, c.Wu)([A.default], () => {
                    let e = b.map((e) => A.default.getUser(e));
                    return (0, p.dq)(e);
                }, [b]),
                y = (0, c.Wu)([A.default], () => g.map((e) => A.default.getUser(e)), [g]),
                O = u.filter((e) => !g.includes(e.id) && !b.includes(e.id)),
                v = (0, p.dq)(O),
                j = y.filter((e) => null != e && !b.includes(e.id)),
                C = (0, c.e7)([_.Z], () => _.Z.getUserAffinitiesMap(), []),
                T = i.useMemo(() => (0, P.C)(v, C, "GuildTooltip - nonBlockedUsers"), [v, C]),
                M = i.useMemo(() => (0, P.C)(d, C, "GuildTooltip - stageSpeakers"), [d, C]),
                L = i.useMemo(() => (0, P.C)(j, C, "GuildTooltip - streamUsers"), [j, C]);
            return {
                voiceUsersToShow: T,
                stageSpeakers: M,
                numStageListeners: h,
                streamUsersToShow: L,
                embeddedActivitiesUsers: i.useMemo(
                    () => (0, P.C)(m, C, "GuildTooltip - embeddedActivitiesUsers"),
                    [m, C],
                ),
                hasActivity: d.length > 0 || O.length > 0 || j.length > 0 || m.length > 0,
            };
        })(t),
        m = k(d.gj8, l, n),
        y =
            0 === o.length
                ? null
                : (0, r.jsxs)("div", {
                      className: L.row,
                      children: [
                          (0, r.jsx)(d.ewx, {
                              size: "lg",
                              color: "currentColor",
                              className: L.activityIcon,
                          }),
                          (0, r.jsx)(h.ZP, {
                              guildId: n,
                              users: o,
                              max: 3,
                          }),
                          (0, r.jsxs)("div", {
                              className: L.stageListenerPill,
                              children: [
                                  (0, r.jsx)(d.VWR, {
                                      size: "xs",
                                      color: "currentColor",
                                  }),
                                  (0, r.jsx)(d.Text, {
                                      className: L.stageListenerCount,
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: u,
                                  }),
                              ],
                          }),
                      ],
                  }),
        O = k(d.hGI, g, n),
        v = k(d.nG3, b, n),
        { isMuted: j, muteConfig: C } = (0, c.cj)(
            [T.ZP],
            () => ({
                isMuted: T.ZP.isMuted(n),
                muteConfig: T.ZP.getMuteConfig(n),
            }),
            [n],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            y,
            m,
            O,
            v,
            j
                ? (0, r.jsx)(G, {
                      muteConfig: C,
                      className: a()(L.muteText, { [L.muteTextWithActivity]: null != m || null != O }),
                  })
                : null,
        ],
    });
}
function B(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, r.jsx)(d.Text, {
        className: L.viewAsRolesWarning,
        color: "text-default",
        variant: "text-xs/normal",
        children: (function (e) {
            switch (e) {
                case y.wB.SUBMITTED:
                    return M.intl.string(M.t["9KFC98"]);
                case y.wB.REJECTED:
                    return M.intl.string(M.t["TQY/Rd"]);
                case y.wB.APPROVED:
                    return M.intl.string(M.t.WXHcq5);
                default:
                    return M.intl.string(M.t.fjHFC8);
            }
        })(t),
    });
}
function F(e) {
    let { guild: t } = e,
        n = (0, g.Z)(t),
        i = (0, O.E)(t),
        l = null != i ? (0, r.jsx)(B, { guildJoinRequestStatus: i }) : null,
        o = (0, r.jsx)(U, { guild: t }),
        s = (0, c.e7)([j.Z], () => j.Z.isViewingRoles(t.id)),
        u = (0, v.Ij)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: a()(L.row, L.rowGuildName),
                children: [
                    n
                        ? (0, r.jsx)(m.Z, {
                              guild: t,
                              className: L.rowIconV2,
                          })
                        : (0, r.jsx)(b.Z, {
                              guild: t,
                              size: 20,
                              className: L.rowIcon,
                          }),
                    (0, r.jsx)("span", {
                        className: a()(L.guildNameText, L.guildNameTextLimitedSize),
                        children: t.name,
                    }),
                ],
            }),
            u
                ? (0, r.jsx)(d.Text, {
                      className: L.invitesDisabledTooltip,
                      color: "text-default",
                      variant: "text-sm/medium",
                      children: M.intl.string(M.t["2n0/Fk"]),
                  })
                : null,
            s
                ? (0, r.jsx)(d.Text, {
                      className: L.viewAsRolesWarning,
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: M.intl.string(M.t["5LwN89"]),
                  })
                : null != l
                  ? l
                  : o,
        ],
    });
}
function V(e) {
    let { guild: t, disabled: n = !1, "aria-label": l = !1, children: a } = e,
        o = i.useMemo(
            () =>
                n
                    ? null
                    : (0, r.jsx)("div", {
                          className: L.guildTooltipWrapper,
                          children: (0, r.jsx)(F, { guild: t }),
                      }),
            [n, t],
        );
    return (0, r.jsx)(u.u, {
        __unsupportedReactNodeAsText: o,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === l ? void 0 : l,
        asContainer: !0,
        children: a,
    });
}
