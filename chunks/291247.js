n.d(t, { A: () => G }), n(938796);
var l = n(627968),
    i = n(64700),
    r = n(665260),
    a = n(311907),
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
    T = n(121127),
    b = n(652215),
    U = n(200700),
    L = n(340837),
    C = n(985018);
function G(e, t, G, D, v) {
    let x = i.useMemo(() => ({ [t]: [e.id] }), [t, e.id]),
        P = null != D ? [D] : [];
    (0, _.Eq)(x, "useAdminActionItems"), (0, a.bG)([h.A], () => h.A.getGuildVersion(t), [t]);
    let B = (0, a.bG)([N.A], () => N.A.getGuild(t), [t]),
        j = (0, a.bG)([R.default], () => R.default.getCurrentUser()?.id === e.id, [e.id]),
        w = (0, a.bG)([O.Ay], () => O.Ay.isGuestOrLurker(t, e.id), [t, e.id]),
        F = (0, a.bG)([y.A], () => y.A.getChannel(G), [G]),
        [, k] = (0, S.Ay)(e.id, t),
        V = F?.isGuildStageVoice(),
        {
            muted: K,
            deafened: W,
            suppressed: H,
            voiceChannelId: Y,
        } = (0, a.cf)([p.A], () => {
            let n = p.A.getVoiceState(t, e.id);
            return {
                muted: n?.mute ?? !1,
                deafened: n?.deaf ?? !1,
                suppressed: n?.suppress ?? !1,
                voiceChannelId: n?.channelId,
            };
        }),
        z = (0, a.bG)([O.Ay], () => O.Ay.getMember(t, e.id)),
        X = (0, T.A)({ userId: e.id, guildId: t, channelId: G, location: D, appContext: v }),
        q = (0, M.$9)(t, { location: D, targetUserId: e.id }),
        J = (0, I.A)(t, e.id),
        Q =
            null != Y && null != G && h.A.canWithPartialContext(b.xBc.VIEW_CHANNEL, { channelId: Y }) && !w
                ? [
                      (!V || !H) && h.A.canWithPartialContext(b.xBc.MUTE_MEMBERS, { channelId: G })
                          ? (0, l.jsx)(
                                o.sL,
                                {
                                    id: "voice-mute",
                                    label: C.intl.string(C.t.e9e9Ua),
                                    checked: K,
                                    color: "danger",
                                    action: () => {
                                        !1 === K && q(M.Nj.MUTE), E.A.setServerMute(t, e.id, !K);
                                    },
                                },
                                "voice-mute",
                            )
                          : null,
                      (!V || !H) && h.A.canWithPartialContext(b.xBc.DEAFEN_MEMBERS, { channelId: G })
                          ? (0, l.jsx)(
                                o.sL,
                                {
                                    id: "voice-deafen",
                                    label: C.intl.string(C.t.hMA2GE),
                                    checked: W,
                                    color: "danger",
                                    action: () => E.A.setServerDeaf(t, e.id, !W),
                                },
                                "voice-deafen",
                            )
                          : null,
                      !j && null != B && h.A.canWithPartialContext(b.xBc.MOVE_MEMBERS, { channelId: G })
                          ? (0, l.jsx)(
                                o.Dr,
                                {
                                    id: "voice-disconnect",
                                    label: C.intl.string(C.t["/jERiG"]),
                                    color: "danger",
                                    action: () => E.A.setChannel(t, e.id, null),
                                },
                                "voice-disconnect",
                            )
                          : null,
                  ]
                : [],
        Z = async (t, n, l) => {
            if (t.ctrlKey || t.metaKey)
                try {
                    await A.A.setCommunicationDisabledDuration(
                        n,
                        l,
                        U.DisableCommunicationDuration.DURATION_60_SEC,
                        null,
                        D,
                    ),
                        q(M.Nj.TIMEOUT),
                        (0, d.P0)(
                            (0, u.o)(
                                C.intl.formatToPlainString(C.t.O9C3Nt, { user: m.Ay.getName(n, null, e) ?? "" }),
                                s.Ck.SUCCESS,
                            ),
                        );
                } catch (e) {
                    (0, d.P0)((0, u.o)(C.intl.string(C.t.epyCuh), s.Ck.FAILURE));
                }
        },
        $ = null,
        ee =
            null != B &&
            h.A.canManageUser(b.xBc.MODERATE_MEMBERS, e, B) &&
            h.A.canManageUser(b.xBc.KICK_MEMBERS, e, B) &&
            h.A.canManageUser(b.xBc.BAN_MEMBERS, e, B),
        et = null != B && (h.A.canManageUser(b.xBc.MANAGE_GUILD, e, B) || h.A.canManageUser(b.xBc.MANAGE_ROLES, e, B));
    return (
        !j &&
            null != B &&
            null != z &&
            null != z.joinedAt &&
            (ee || et) &&
            B.features.has(b.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) &&
            ($ = (0, r.Lt)(z.flags ?? 0, L.D.BYPASSES_VERIFICATION)
                ? (0, l.jsx)(
                      o.Dr,
                      {
                          id: "verify",
                          label: C.intl.string(C.t.NbhSI7),
                          action: () =>
                              E.A.setMemberFlags(B.id, e.id, (0, r.lA)(z.flags ?? 0, L.D.BYPASSES_VERIFICATION, !1)),
                      },
                      "verify",
                  )
                : (0, l.jsx)(
                      o.Dr,
                      {
                          id: "verify",
                          label: C.intl.string(C.t["6QlTeK"]),
                          action: () =>
                              E.A.setMemberFlags(B.id, e.id, (0, r.lA)(z.flags ?? 0, L.D.BYPASSES_VERIFICATION, !0)),
                      },
                      "verify",
                  )),
        [
            X,
            $,
            ...Q,
            ...(j || null == B
                ? []
                : [
                      J && !w
                          ? k
                              ? (0, l.jsx)(
                                    o.Dr,
                                    {
                                        id: "removetimeout",
                                        label: C.intl.formatToPlainString(C.t.csKeta, { user: e.username }),
                                        color: "danger",
                                        action: () => {
                                            (0, g.Y)({ guildId: t, userId: e.id, anaylticsLocations: P });
                                        },
                                    },
                                    "removetimeout",
                                )
                              : (0, l.jsx)(
                                    o.Dr,
                                    {
                                        id: "timeout",
                                        label: C.intl.formatToPlainString(C.t.OhsOy0, { user: e.username }),
                                        color: "danger",
                                        action: (n) => {
                                            if (n.ctrlKey || n.metaKey) return Z(n, t, e.id);
                                            (0, g.R)({ guildId: t, userId: e.id, anaylticsLocations: P });
                                        },
                                    },
                                    "timeout",
                                )
                          : null,
                      (0, f.L7)(e, B)
                          ? (0, l.jsx)(
                                o.Dr,
                                {
                                    id: "kick",
                                    label: C.intl.formatToPlainString(C.t["9l/iTS"], { user: e.username }),
                                    color: "danger",
                                    action: () =>
                                        (0, c.openModalLazy)(async () => {
                                            let { default: i } = await n.e("62624").then(n.bind(n, 324785));
                                            return (n) => (0, l.jsx)(i, { ...n, location: D, guildId: t, user: e });
                                        }),
                                },
                                "kick",
                            )
                          : null,
                      (0, f.EZ)(e, B)
                          ? (0, l.jsx)(
                                o.Dr,
                                {
                                    id: "ban",
                                    label: C.intl.formatToPlainString(C.t.WnpUBi, { user: e.username }),
                                    color: "danger",
                                    action: () =>
                                        (0, c.openModalLazy)(async () => {
                                            let { default: i } = await n.e("80123").then(n.bind(n, 333179));
                                            return (n) => (0, l.jsx)(i, { ...n, location: D, guildId: t, user: e });
                                        }),
                                },
                                "ban",
                            )
                          : null,
                  ]),
        ]
    );
}
