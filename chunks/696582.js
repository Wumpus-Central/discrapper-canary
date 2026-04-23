n.d(t, { A: () => V }), n(938796);
var l = n(627968),
    i = n(64700),
    r = n(665260),
    a = n(17928),
    o = n(477782),
    d = n(691540),
    u = n(857250),
    s = n(97483),
    c = n(192308),
    A = n(262577),
    E = n(686956),
    _ = n(80682),
    g = n(991982),
    I = n(838111),
    S = n(870136),
    f = n(351001),
    M = n(504049),
    y = n(734057),
    O = n(696451),
    N = n(71393),
    h = n(576705),
    R = n(287809),
    p = n(977997),
    m = n(562153),
    T = n(228366),
    b = n(901472),
    U = n(985925),
    L = n(267102),
    C = n(474397),
    G = n(378570),
    D = n(761640),
    x = n(309010),
    P = n(954571),
    v = n(652215),
    B = n(746080),
    j = n(486974),
    w = n(985018),
    F = n(200700),
    k = n(340837);
function V(e, t, V, K, W) {
    let H = i.useMemo(() => ({ [t]: [e.id] }), [t, e.id]),
        Y = null != K ? [K] : [];
    (0, _.Eq)(H, "useAdminActionItems"), (0, a.bG)([h.A], () => h.A.getGuildVersion(t), [t]);
    let z = (0, a.bG)([N.A], () => N.A.getGuild(t), [t]),
        X = (0, a.bG)([R.default], () => R.default.getCurrentUser()?.id === e.id, [e.id]),
        q = (0, a.bG)([O.Ay], () => O.Ay.isGuestOrLurker(t, e.id), [t, e.id]),
        J = (0, a.bG)([y.A], () => y.A.getChannel(V), [V]),
        [, Q] = (0, S.Ay)(e.id, t),
        Z = J?.isGuildStageVoice(),
        {
            muted: $,
            deafened: ee,
            suppressed: et,
            voiceChannelId: en,
        } = (0, a.cf)([p.A], () => {
            let n = p.A.getVoiceState(t, e.id);
            return {
                muted: n?.mute ?? !1,
                deafened: n?.deaf ?? !1,
                suppressed: n?.suppress ?? !1,
                voiceChannelId: n?.channelId,
            };
        }),
        el = (0, a.bG)([O.Ay], () => O.Ay.getMember(t, e.id)),
        ei = (function (e) {
            let { userId: t, guildId: n, channelId: r, location: d, onAction: u, appContext: s } = e,
                c = i.useContext(P.AnalyticsContext),
                A = (0, L.aL)(),
                E = (0, a.bG)([x.A], () => r ?? x.A.getChannelId(n, !0), [r, n]),
                _ = (0, a.bG)([O.Ay], () => (null == n ? null : O.Ay.getMember(n, t)), [n, t]),
                g = (0, U.q)(n);
            return null != n && null != _ && g
                ? (0, l.jsx)(o.Dr, {
                      id: "mod-view",
                      label: w.intl.string(w.t.kj3tz2),
                      action: () => {
                          u?.(), (0, C.A)(s), A.dispatch(v.jej.POPOUT_CLOSE);
                          let e = y.A.getChannel(E),
                              l = { modViewPanel: j.g.INFO, sourceLocation: d ?? c.location };
                          if (e?.isThread() && null != e.parent_id) {
                              D.Ay.getCurrentSidebarChannelId(e.parent_id) === e.id &&
                                  (T.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
                                  (0, G.iN)(e.id)),
                                  (0, b.z)(n, t, e.parent_id, l);
                              return;
                          }
                          (0, b.z)(n, t, E ?? B.VV.MEMBER_SAFETY, l);
                      },
                  })
                : null;
        })({ userId: e.id, guildId: t, channelId: V, location: K, appContext: W }),
        er = (0, M.$9)(t, { location: K, targetUserId: e.id }),
        ea = (0, I.A)(t, e.id),
        eo =
            null != en && null != V && h.A.canWithPartialContext(v.xBc.VIEW_CHANNEL, { channelId: en }) && !q
                ? [
                      (!Z || !et) && h.A.canWithPartialContext(v.xBc.MUTE_MEMBERS, { channelId: V })
                          ? (0, l.jsx)(
                                o.sL,
                                {
                                    id: "voice-mute",
                                    label: w.intl.string(w.t.e9e9Ua),
                                    checked: $,
                                    color: "danger",
                                    action: () => {
                                        !1 === $ && er(M.Nj.MUTE), E.A.setServerMute(t, e.id, !$);
                                    },
                                },
                                "voice-mute",
                            )
                          : null,
                      (!Z || !et) && h.A.canWithPartialContext(v.xBc.DEAFEN_MEMBERS, { channelId: V })
                          ? (0, l.jsx)(
                                o.sL,
                                {
                                    id: "voice-deafen",
                                    label: w.intl.string(w.t.hMA2GE),
                                    checked: ee,
                                    color: "danger",
                                    action: () => E.A.setServerDeaf(t, e.id, !ee),
                                },
                                "voice-deafen",
                            )
                          : null,
                      !X && null != z && h.A.canWithPartialContext(v.xBc.MOVE_MEMBERS, { channelId: V })
                          ? (0, l.jsx)(
                                o.Dr,
                                {
                                    id: "voice-disconnect",
                                    label: w.intl.string(w.t["/jERiG"]),
                                    color: "danger",
                                    action: () => E.A.setChannel(t, e.id, null),
                                },
                                "voice-disconnect",
                            )
                          : null,
                  ]
                : [],
        ed = async (t, n, l) => {
            if (t.ctrlKey || t.metaKey)
                try {
                    await A.A.setCommunicationDisabledDuration(
                        n,
                        l,
                        F.DisableCommunicationDuration.DURATION_60_SEC,
                        null,
                        K,
                    ),
                        er(M.Nj.TIMEOUT),
                        (0, d.P0)(
                            (0, u.o)(
                                w.intl.formatToPlainString(w.t.O9C3Nt, { user: m.Ay.getName(n, null, e) ?? "" }),
                                s.Ck.SUCCESS,
                            ),
                        );
                } catch (e) {
                    (0, d.P0)((0, u.o)(w.intl.string(w.t.epyCuh), s.Ck.FAILURE));
                }
        },
        eu = null,
        es =
            null != z &&
            h.A.canManageUser(v.xBc.MODERATE_MEMBERS, e, z) &&
            h.A.canManageUser(v.xBc.KICK_MEMBERS, e, z) &&
            h.A.canManageUser(v.xBc.BAN_MEMBERS, e, z),
        ec = null != z && (h.A.canManageUser(v.xBc.MANAGE_GUILD, e, z) || h.A.canManageUser(v.xBc.MANAGE_ROLES, e, z));
    return (
        !X &&
            null != z &&
            null != el &&
            null != el.joinedAt &&
            (es || ec) &&
            z.features.has(v.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) &&
            (eu = (0, r.Lt)(el.flags ?? 0, k.D.BYPASSES_VERIFICATION)
                ? (0, l.jsx)(
                      o.Dr,
                      {
                          id: "verify",
                          label: w.intl.string(w.t.NbhSI7),
                          action: () =>
                              E.A.setMemberFlags(z.id, e.id, (0, r.lA)(el.flags ?? 0, k.D.BYPASSES_VERIFICATION, !1)),
                      },
                      "verify",
                  )
                : (0, l.jsx)(
                      o.Dr,
                      {
                          id: "verify",
                          label: w.intl.string(w.t["6QlTeK"]),
                          action: () =>
                              E.A.setMemberFlags(z.id, e.id, (0, r.lA)(el.flags ?? 0, k.D.BYPASSES_VERIFICATION, !0)),
                      },
                      "verify",
                  )),
        [
            ei,
            eu,
            ...eo,
            ...(X || null == z
                ? []
                : [
                      ea && !q
                          ? Q
                              ? (0, l.jsx)(
                                    o.Dr,
                                    {
                                        id: "removetimeout",
                                        label: w.intl.formatToPlainString(w.t.csKeta, { user: e.username }),
                                        color: "danger",
                                        action: () => {
                                            (0, g.Y)({ guildId: t, userId: e.id, anaylticsLocations: Y });
                                        },
                                    },
                                    "removetimeout",
                                )
                              : (0, l.jsx)(
                                    o.Dr,
                                    {
                                        id: "timeout",
                                        label: w.intl.formatToPlainString(w.t.OhsOy0, { user: e.username }),
                                        color: "danger",
                                        action: (n) => {
                                            if (n.ctrlKey || n.metaKey) return ed(n, t, e.id);
                                            (0, g.R)({ guildId: t, userId: e.id, anaylticsLocations: Y });
                                        },
                                    },
                                    "timeout",
                                )
                          : null,
                      (0, f.L7)(e, z)
                          ? (0, l.jsx)(
                                o.Dr,
                                {
                                    id: "kick",
                                    label: w.intl.formatToPlainString(w.t["9l/iTS"], { user: e.username }),
                                    color: "danger",
                                    action: () =>
                                        (0, c.openModalLazy)(async () => {
                                            let { default: i } = await n.e("62624").then(n.bind(n, 547166));
                                            return (n) => (0, l.jsx)(i, { ...n, location: K, guildId: t, user: e });
                                        }),
                                },
                                "kick",
                            )
                          : null,
                      (0, f.EZ)(e, z)
                          ? (0, l.jsx)(
                                o.Dr,
                                {
                                    id: "ban",
                                    label: w.intl.formatToPlainString(w.t.WnpUBi, { user: e.username }),
                                    color: "danger",
                                    action: () =>
                                        (0, c.openModalLazy)(async () => {
                                            let { default: i } = await n.e("80123").then(n.bind(n, 333179));
                                            return (n) => (0, l.jsx)(i, { ...n, location: K, guildId: t, user: e });
                                        }),
                                },
                                "ban",
                            )
                          : null,
                  ]),
        ]
    );
}
