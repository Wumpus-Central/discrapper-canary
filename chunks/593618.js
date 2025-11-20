n.d(t, { Z: () => H }), n(361932), n(187205), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n.n(a),
    c = n(442837),
    u = n(481060),
    d = n(456100),
    f = n(317381),
    p = n(884338),
    h = n(470883),
    g = n(666188),
    m = n(372769),
    b = n(523751),
    _ = n(246364),
    y = n(746916),
    O = n(634755),
    v = n(160404),
    j = n(777861),
    x = n(565799),
    C = n(501655),
    E = n(517334),
    S = n(344185),
    I = n(752048),
    P = n(439944),
    N = n(199902),
    Z = n(984933),
    w = n(699516),
    T = n(9156),
    A = n(594174),
    R = n(938475),
    D = n(981631),
    L = n(388032),
    M = n(132789),
    k = n(78480);
function G(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: M.row,
              children: [
                  (0, r.jsx)(e, {
                      className: M.activityIcon,
                      color: "currentColor",
                  }),
                  (0, r.jsx)(p.ZP, {
                      guildId: n,
                      users: t,
                      max: 6,
                  }),
              ],
          });
}
function U(e) {
    let { muteConfig: t, className: n } = e;
    return (null == t ? void 0 : t.end_time) == null
        ? (0, r.jsx)(u.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: L.intl.string(L.t.fpKdS1),
          })
        : (0, r.jsx)(j.Z, {
              muteConfig: t,
              className: n,
          });
}
function B(e) {
    let { guild: t } = e,
        n = t.id,
        { enabled: l } = d.c.useExperiment({ location: "GuildTooltip" }, { autoTrackExposure: !0 }),
        {
            voiceUsersToShow: a,
            stageSpeakers: g,
            numStageListeners: m,
            streamUsersToShow: b,
            embeddedActivitiesUsers: _,
        } = (function (e) {
            let t = e.id,
                n = (0, c.Wu)(
                    [Z.ZP, S.Z],
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
                        ...Object.values(S.Z.getThreadsForGuild(t)).flatMap((e) => Object.keys(e)),
                    ],
                    [t],
                ),
                r = (0, E.ZP)(t),
                l = i.useMemo(() => r.map((e) => e.id), [r]),
                o = (0, c.e7)([R.ZP], () => R.ZP.getVoiceStates(t), [t]),
                a = (0, c.Wu)([w.Z], () => w.Z.getBlockedOrIgnoredIDs()),
                u = s().flatMap(n, (t) => {
                    var n;
                    if (t === e.afkChannelId) return [];
                    let r = (null != (n = o[t]) ? n : []).map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                    return (0, h.dq)(r, a);
                }),
                d = (0, c.Wu)([x.Z], () =>
                    s().flatMap(l, (t) => {
                        if (t === e.afkChannelId) return [];
                        let n = x.Z.getMutableParticipants(t, C.pV.SPEAKER)
                            .filter((e) => e.type === C.Ui.VOICE)
                            .map((e) => {
                                let { user: t } = e;
                                return t;
                            });
                        return (0, h.dq)(n, a);
                    }),
                ),
                p = (0, c.e7)([x.Z], () => {
                    let e = 0;
                    for (let t of l) e += x.Z.getParticipantCount(t, C.pV.AUDIENCE);
                    return e;
                }),
                g = (0, c.Wu)([N.Z], () => {
                    let e = N.Z.getAllApplicationStreams()
                        .filter((e) => e.guildId === t)
                        .map((e) => e.ownerId);
                    return (0, h._j)(e, a);
                }, [a, t]),
                m = (0, c.Wu)([f.ZP], () => {
                    let e = f.ZP.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds));
                    return (0, h._j)(e, a);
                }, [t, a]),
                b = (0, c.Wu)([A.default], () => {
                    let e = m.map((e) => A.default.getUser(e));
                    return (0, h.dq)(e);
                }, [m]),
                _ = (0, c.Wu)([A.default], () => g.map((e) => A.default.getUser(e)), [g]),
                y = u.filter((e) => !g.includes(e.id) && !m.includes(e.id)),
                O = (0, h.dq)(y),
                v = _.filter((e) => null != e && !m.includes(e.id)),
                j = (0, c.e7)([I.Z], () => I.Z.getUserAffinitiesMap(), []),
                T = i.useMemo(() => (0, P.C)(O, j, "GuildTooltip - nonBlockedUsers"), [O, j]),
                L = i.useMemo(() => (0, P.C)(d, j, "GuildTooltip - stageSpeakers"), [d, j]),
                M = i.useMemo(() => (0, P.C)(v, j, "GuildTooltip - streamUsers"), [v, j]);
            return {
                voiceUsersToShow: T,
                stageSpeakers: L,
                numStageListeners: p,
                streamUsersToShow: M,
                embeddedActivitiesUsers: i.useMemo(
                    () => (0, P.C)(b, j, "GuildTooltip - embeddedActivitiesUsers"),
                    [b, j],
                ),
                hasActivity: d.length > 0 || y.length > 0 || v.length > 0 || b.length > 0,
            };
        })(t),
        y = G(u.gj8, a, n),
        O =
            0 === g.length
                ? null
                : (0, r.jsxs)("div", {
                      className: M.row,
                      children: [
                          (0, r.jsx)(u.ewx, {
                              size: "lg",
                              color: "currentColor",
                              className: M.activityIcon,
                          }),
                          (0, r.jsx)(p.ZP, {
                              guildId: n,
                              users: g,
                              max: 3,
                          }),
                          (0, r.jsxs)("div", {
                              className: M.stageListenerPill,
                              children: [
                                  (0, r.jsx)(u.VWR, {
                                      size: "xs",
                                      color: "currentColor",
                                  }),
                                  (0, r.jsx)(u.Text, {
                                      className: M.stageListenerCount,
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: m,
                                  }),
                              ],
                          }),
                      ],
                  }),
        v = G(u.hGI, b, n),
        j = G(l ? u.iWm : u.nG3, _, n),
        { isMuted: L, muteConfig: k } = (0, c.cj)(
            [T.ZP],
            () => ({
                isMuted: T.ZP.isMuted(n),
                muteConfig: T.ZP.getMuteConfig(n),
            }),
            [n],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            O,
            y,
            v,
            j,
            L
                ? (0, r.jsx)(U, {
                      muteConfig: k,
                      className: o()(M.muteText, { [M.muteTextWithActivity]: null != y || null != v }),
                  })
                : null,
        ],
    });
}
function F(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, r.jsx)(u.Text, {
        className: M.viewAsRolesWarning,
        color: "text-default",
        variant: "text-xs/normal",
        children: (function (e) {
            switch (e) {
                case _.wB.SUBMITTED:
                    return L.intl.string(L.t["9KFC98"]);
                case _.wB.REJECTED:
                    return L.intl.string(L.t["TQY/Rd"]);
                case _.wB.APPROVED:
                    return L.intl.string(L.t.WXHcq5);
                default:
                    return L.intl.string(L.t.fjHFC8);
            }
        })(t),
    });
}
function V(e) {
    let { guild: t } = e,
        n = (0, g.Z)(t),
        i = (0, y.E)(t),
        l = null != i ? (0, r.jsx)(F, { guildJoinRequestStatus: i }) : null,
        a = (0, r.jsx)(B, { guild: t }),
        s = (0, c.e7)([v.Z], () => v.Z.isViewingRoles(t.id)),
        d = (0, O.Ij)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o()(M.row, M.rowGuildName),
                children: [
                    n
                        ? (0, r.jsx)(b.Z, {
                              guild: t,
                              className: M.rowIconV2,
                          })
                        : (0, r.jsx)(m.Z, {
                              guild: t,
                              size: 20,
                              className: M.rowIcon,
                          }),
                    (0, r.jsx)("span", {
                        className: o()(M.guildNameText, M.guildNameTextLimitedSize),
                        children: t.name,
                    }),
                ],
            }),
            d
                ? (0, r.jsx)(u.Text, {
                      className: M.invitesDisabledTooltip,
                      color: "header-secondary",
                      variant: "text-sm/medium",
                      children: L.intl.string(L.t["2n0/Fk"]),
                  })
                : null,
            s
                ? (0, r.jsx)(u.Text, {
                      className: M.viewAsRolesWarning,
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: L.intl.string(L.t["5LwN89"]),
                  })
                : null != l
                  ? l
                  : a,
        ],
    });
}
function H(e) {
    let { guild: t, disabled: n = !1, "aria-label": l = !1, children: o } = e;
    return (0, r.jsx)(u.aML, {
        "data-migration-pending": !0,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        text: n ? null : (0, r.jsx)(V, { guild: t }),
        "aria-label": l,
        tooltipClassName: k.listItemTooltip,
        tooltipContentClassName: k.listItemTooltipContent,
        children: (e) => {
            var { onFocus: t, onBlur: n } = e,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                i = {},
                                l = Object.keys(e);
                            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < l.length; r++)
                            (n = l[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (i[n] = e[n]);
                    }
                    return i;
                })(e, ["onFocus", "onBlur"]);
            return (0, r.jsx)("div", {
                onFocus: t,
                onBlur: n,
                children: i.cloneElement(
                    i.Children.only(o),
                    (function (e) {
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
                    })({}, l),
                ),
            });
        },
    });
}
