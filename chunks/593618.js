n.d(t, { Z: () => V }), n(361932), n(187205), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n.n(a),
    c = n(442837),
    u = n(481060),
    d = n(317381),
    f = n(884338),
    h = n(470883),
    p = n(666188),
    g = n(372769),
    m = n(523751),
    b = n(246364),
    _ = n(746916),
    y = n(634755),
    O = n(160404),
    v = n(777861),
    j = n(565799),
    x = n(501655),
    C = n(517334),
    E = n(344185),
    S = n(752048),
    I = n(439944),
    P = n(199902),
    N = n(984933),
    Z = n(699516),
    w = n(9156),
    T = n(594174),
    A = n(938475),
    R = n(981631),
    D = n(388032),
    M = n(132789),
    L = n(78480);
function k(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: M.row,
              children: [
                  (0, r.jsx)(e, {
                      className: M.activityIcon,
                      color: "currentColor",
                  }),
                  (0, r.jsx)(f.ZP, {
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
        ? (0, r.jsx)(u.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: D.intl.string(D.t.fpKdS1),
          })
        : (0, r.jsx)(v.Z, {
              muteConfig: t,
              className: n,
          });
}
function U(e) {
    let { guild: t } = e,
        n = t.id,
        {
            voiceUsersToShow: l,
            stageSpeakers: a,
            numStageListeners: p,
            streamUsersToShow: g,
            embeddedActivitiesUsers: m,
        } = (function (e) {
            let t = e.id,
                n = (0, c.Wu)(
                    [N.ZP, E.Z],
                    () => [
                        ...N.ZP.getChannels(t)
                            [N.Zb].filter((e) => {
                                let { channel: t } = e;
                                return t.type === R.d4z.GUILD_VOICE;
                            })
                            .map((e) => {
                                let { channel: t } = e;
                                return t.id;
                            }),
                        ...Object.values(E.Z.getThreadsForGuild(t)).flatMap((e) => Object.keys(e)),
                    ],
                    [t],
                ),
                r = (0, C.ZP)(t),
                l = i.useMemo(() => r.map((e) => e.id), [r]),
                o = (0, c.e7)([A.ZP], () => A.ZP.getVoiceStates(t), [t]),
                a = (0, c.Wu)([Z.Z], () => Z.Z.getBlockedOrIgnoredIDs()),
                u = s().flatMap(n, (t) => {
                    var n;
                    if (t === e.afkChannelId) return [];
                    let r = (null != (n = o[t]) ? n : []).map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                    return (0, h.dq)(r, a);
                }),
                f = (0, c.Wu)([j.Z], () =>
                    s().flatMap(l, (t) => {
                        if (t === e.afkChannelId) return [];
                        let n = j.Z.getMutableParticipants(t, x.pV.SPEAKER)
                            .filter((e) => e.type === x.Ui.VOICE)
                            .map((e) => {
                                let { user: t } = e;
                                return t;
                            });
                        return (0, h.dq)(n, a);
                    }),
                ),
                p = (0, c.e7)([j.Z], () => {
                    let e = 0;
                    for (let t of l) e += j.Z.getParticipantCount(t, x.pV.AUDIENCE);
                    return e;
                }),
                g = (0, c.Wu)([P.Z], () => {
                    let e = P.Z.getAllApplicationStreams()
                        .filter((e) => e.guildId === t)
                        .map((e) => e.ownerId);
                    return (0, h._j)(e, a);
                }, [a, t]),
                m = (0, c.Wu)([d.ZP], () => {
                    let e = d.ZP.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds));
                    return (0, h._j)(e, a);
                }, [t, a]),
                b = (0, c.Wu)([T.default], () => {
                    let e = m.map((e) => T.default.getUser(e));
                    return (0, h.dq)(e);
                }, [m]),
                _ = (0, c.Wu)([T.default], () => g.map((e) => T.default.getUser(e)), [g]),
                y = u.filter((e) => !g.includes(e.id) && !m.includes(e.id)),
                O = (0, h.dq)(y),
                v = _.filter((e) => null != e && !m.includes(e.id)),
                w = (0, c.e7)([S.Z], () => S.Z.getUserAffinitiesMap(), []),
                D = i.useMemo(() => (0, I.C)(O, w, "GuildTooltip - nonBlockedUsers"), [O, w]),
                M = i.useMemo(() => (0, I.C)(f, w, "GuildTooltip - stageSpeakers"), [f, w]),
                L = i.useMemo(() => (0, I.C)(v, w, "GuildTooltip - streamUsers"), [v, w]);
            return {
                voiceUsersToShow: D,
                stageSpeakers: M,
                numStageListeners: p,
                streamUsersToShow: L,
                embeddedActivitiesUsers: i.useMemo(
                    () => (0, I.C)(b, w, "GuildTooltip - embeddedActivitiesUsers"),
                    [b, w],
                ),
                hasActivity: f.length > 0 || y.length > 0 || v.length > 0 || b.length > 0,
            };
        })(t),
        b = k(u.gj8, l, n),
        _ =
            0 === a.length
                ? null
                : (0, r.jsxs)("div", {
                      className: M.row,
                      children: [
                          (0, r.jsx)(u.ewx, {
                              size: "lg",
                              color: "currentColor",
                              className: M.activityIcon,
                          }),
                          (0, r.jsx)(f.ZP, {
                              guildId: n,
                              users: a,
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
                                      children: p,
                                  }),
                              ],
                          }),
                      ],
                  }),
        y = k(u.hGI, g, n),
        O = k(u.nG3, m, n),
        { isMuted: v, muteConfig: D } = (0, c.cj)(
            [w.ZP],
            () => ({
                isMuted: w.ZP.isMuted(n),
                muteConfig: w.ZP.getMuteConfig(n),
            }),
            [n],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            _,
            b,
            y,
            O,
            v
                ? (0, r.jsx)(G, {
                      muteConfig: D,
                      className: o()(M.muteText, { [M.muteTextWithActivity]: null != b || null != y }),
                  })
                : null,
        ],
    });
}
function B(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, r.jsx)(u.Text, {
        className: M.viewAsRolesWarning,
        color: "text-default",
        variant: "text-xs/normal",
        children: (function (e) {
            switch (e) {
                case b.wB.SUBMITTED:
                    return D.intl.string(D.t["9KFC98"]);
                case b.wB.REJECTED:
                    return D.intl.string(D.t["TQY/Rd"]);
                case b.wB.APPROVED:
                    return D.intl.string(D.t.WXHcq5);
                default:
                    return D.intl.string(D.t.fjHFC8);
            }
        })(t),
    });
}
function F(e) {
    let { guild: t } = e,
        n = (0, p.Z)(t),
        i = (0, _.E)(t),
        l = null != i ? (0, r.jsx)(B, { guildJoinRequestStatus: i }) : null,
        a = (0, r.jsx)(U, { guild: t }),
        s = (0, c.e7)([O.Z], () => O.Z.isViewingRoles(t.id)),
        d = (0, y.Ij)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o()(M.row, M.rowGuildName),
                children: [
                    n
                        ? (0, r.jsx)(m.Z, {
                              guild: t,
                              className: M.rowIconV2,
                          })
                        : (0, r.jsx)(g.Z, {
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
                      color: "text-default",
                      variant: "text-sm/medium",
                      children: D.intl.string(D.t["2n0/Fk"]),
                  })
                : null,
            s
                ? (0, r.jsx)(u.Text, {
                      className: M.viewAsRolesWarning,
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: D.intl.string(D.t["5LwN89"]),
                  })
                : null != l
                  ? l
                  : a,
        ],
    });
}
function V(e) {
    let { guild: t, disabled: n = !1, "aria-label": l = !1, children: o } = e;
    return (0, r.jsx)(u.aML, {
        "data-migration-pending": !0,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        text: n ? null : (0, r.jsx)(F, { guild: t }),
        "aria-label": l,
        tooltipClassName: L.listItemTooltip,
        tooltipContentClassName: L.listItemTooltipContent,
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
