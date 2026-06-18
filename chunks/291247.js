i.d(t, { A: () => v }), i(938796);
var n = i(627968),
    a = i(64700),
    l = i(665260),
    r = i(17928),
    s = i(477782),
    d = i(691540),
    o = i(857250),
    u = i(97483),
    c = i(192308),
    A = i(262577),
    E = i(66834),
    g = i(80682),
    m = i(991982),
    M = i(838111),
    S = i(870136),
    I = i(351001),
    b = i(504049),
    f = i(734057),
    h = i(696451),
    x = i(71393),
    C = i(576705),
    y = i(287809),
    B = i(977997),
    D = i(562153),
    _ = i(121127),
    G = i(652215),
    N = i(200700),
    R = i(340837),
    U = i(375708);
function v(e, t, v, P, T) {
    let j = a.useMemo(() => ({ [t]: [e.id] }), [t, e.id]),
        p = null != P ? [P] : [];
    (0, g.Eq)(j, "useAdminActionItems"), (0, r.bG)([C.A], () => C.A.getGuildVersion(t), [t]);
    let O = (0, r.bG)([x.A], () => x.A.getGuild(t), [t]),
        k = (0, r.bG)([y.default], () => y.default.getCurrentUser()?.id === e.id, [e.id]),
        L = (0, r.bG)([h.Ay], () => h.Ay.isGuestOrLurker(t, e.id), [t, e.id]),
        V = (0, r.bG)([f.A], () => f.A.getChannel(v), [v]),
        [, F] = (0, S.Ay)(e.id, t),
        K = V?.isGuildStageVoice(),
        {
            muted: W,
            deafened: w,
            suppressed: Y,
            voiceChannelId: z,
        } = (0, r.cf)([B.A], () => {
            let i = B.A.getVoiceState(t, e.id);
            return {
                muted: i?.mute ?? !1,
                deafened: i?.deaf ?? !1,
                suppressed: i?.suppress ?? !1,
                voiceChannelId: i?.channelId,
            };
        }),
        q = (0, r.bG)([h.Ay], () => h.Ay.getMember(t, e.id)),
        H = (0, _.A)({ userId: e.id, guildId: t, channelId: v, location: P, appContext: T }),
        Q = (0, b.$9)(t, { location: P, targetUserId: e.id }),
        Z = (0, M.A)(t, e.id),
        $ =
            null != z && null != v && C.A.canWithPartialContext(G.xBc.VIEW_CHANNEL, { channelId: z }) && !L
                ? [
                      (!K || !Y) && C.A.canWithPartialContext(G.xBc.MUTE_MEMBERS, { channelId: v })
                          ? (0, n.jsx)(
                                s.sL,
                                {
                                    id: "voice-mute",
                                    label: U.intl.string(U.t.e9e9Ua),
                                    checked: W,
                                    color: "danger",
                                    action: () => {
                                        !1 === W && Q(b.Nj.MUTE), E.A.setServerMute(t, e.id, !W);
                                    },
                                },
                                "voice-mute",
                            )
                          : null,
                      (!K || !Y) && C.A.canWithPartialContext(G.xBc.DEAFEN_MEMBERS, { channelId: v })
                          ? (0, n.jsx)(
                                s.sL,
                                {
                                    id: "voice-deafen",
                                    label: U.intl.string(U.t.hMA2GE),
                                    checked: w,
                                    color: "danger",
                                    action: () => E.A.setServerDeaf(t, e.id, !w),
                                },
                                "voice-deafen",
                            )
                          : null,
                      !k && null != O && C.A.canWithPartialContext(G.xBc.MOVE_MEMBERS, { channelId: v })
                          ? (0, n.jsx)(
                                s.Dr,
                                {
                                    id: "voice-disconnect",
                                    label: U.intl.string(U.t["/jERiG"]),
                                    color: "danger",
                                    action: () => E.A.setChannel(t, e.id, null),
                                },
                                "voice-disconnect",
                            )
                          : null,
                  ]
                : [],
        J = async (t, i, n) => {
            if (t.ctrlKey || t.metaKey)
                try {
                    await A.A.setCommunicationDisabledDuration(
                        i,
                        n,
                        N.DisableCommunicationDuration.DURATION_60_SEC,
                        null,
                        P,
                    ),
                        Q(b.Nj.TIMEOUT),
                        (0, d.P0)(
                            (0, o.o)(
                                U.intl.formatToPlainString(U.t.O9C3Nt, { user: D.Ay.getName(i, null, e) ?? "" }),
                                u.Ck.SUCCESS,
                            ),
                        );
                } catch (e) {
                    (0, d.P0)((0, o.o)(U.intl.string(U.t.epyCuh), u.Ck.FAILURE));
                }
        },
        X = null,
        ee =
            null != O &&
            C.A.canManageUser(G.xBc.MODERATE_MEMBERS, e, O) &&
            C.A.canManageUser(G.xBc.KICK_MEMBERS, e, O) &&
            C.A.canManageUser(G.xBc.BAN_MEMBERS, e, O),
        et = null != O && (C.A.canManageUser(G.xBc.MANAGE_GUILD, e, O) || C.A.canManageUser(G.xBc.MANAGE_ROLES, e, O));
    return (
        !k &&
            null != O &&
            null != q &&
            null != q.joinedAt &&
            (ee || et) &&
            O.features.has(G.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) &&
            (X = (0, l.Lt)(q.flags ?? 0, R.D.BYPASSES_VERIFICATION)
                ? (0, n.jsx)(
                      s.Dr,
                      {
                          id: "verify",
                          label: U.intl.string(U.t.NbhSI7),
                          action: () =>
                              E.A.setMemberFlags(O.id, e.id, (0, l.lA)(q.flags ?? 0, R.D.BYPASSES_VERIFICATION, !1)),
                      },
                      "verify",
                  )
                : (0, n.jsx)(
                      s.Dr,
                      {
                          id: "verify",
                          label: U.intl.string(U.t["6QlTeK"]),
                          action: () =>
                              E.A.setMemberFlags(O.id, e.id, (0, l.lA)(q.flags ?? 0, R.D.BYPASSES_VERIFICATION, !0)),
                      },
                      "verify",
                  )),
        [
            H,
            X,
            ...$,
            ...(k || null == O
                ? []
                : [
                      Z && !L
                          ? F
                              ? (0, n.jsx)(
                                    s.Dr,
                                    {
                                        id: "removetimeout",
                                        label: U.intl.formatToPlainString(U.t.csKeta, { user: e.username }),
                                        color: "danger",
                                        action: () => {
                                            (0, m.Y)({ guildId: t, userId: e.id, anaylticsLocations: p });
                                        },
                                    },
                                    "removetimeout",
                                )
                              : (0, n.jsx)(
                                    s.Dr,
                                    {
                                        id: "timeout",
                                        label: U.intl.formatToPlainString(U.t.OhsOy0, { user: e.username }),
                                        color: "danger",
                                        action: (i) => {
                                            if (i.ctrlKey || i.metaKey) return J(i, t, e.id);
                                            (0, m.R)({ guildId: t, userId: e.id, anaylticsLocations: p });
                                        },
                                    },
                                    "timeout",
                                )
                          : null,
                      (0, I.L7)(e, O)
                          ? (0, n.jsx)(
                                s.Dr,
                                {
                                    id: "kick",
                                    label: U.intl.formatToPlainString(U.t["9l/iTS"], { user: e.username }),
                                    color: "danger",
                                    action: () =>
                                        (0, c.openModalLazy)(async () => {
                                            let { default: a } = await Promise.all([
                                                i.e("79877"),
                                                i.e("91740"),
                                                i.e("8891"),
                                                i.e("91671"),
                                                i.e("40243"),
                                            ]).then(i.bind(i, 547166));
                                            return (i) => (0, n.jsx)(a, { ...i, location: P, guildId: t, user: e });
                                        }),
                                },
                                "kick",
                            )
                          : null,
                      (0, I.EZ)(e, O)
                          ? (0, n.jsx)(
                                s.Dr,
                                {
                                    id: "ban",
                                    label: U.intl.formatToPlainString(U.t.WnpUBi, { user: e.username }),
                                    color: "danger",
                                    action: () =>
                                        (0, c.openModalLazy)(async () => {
                                            let { default: a } = await Promise.all([
                                                i.e("79877"),
                                                i.e("38135"),
                                                i.e("8891"),
                                                i.e("91671"),
                                                i.e("2504"),
                                            ]).then(i.bind(i, 333179));
                                            return (i) => (0, n.jsx)(a, { ...i, location: P, guildId: t, user: e });
                                        }),
                                },
                                "ban",
                            )
                          : null,
                  ]),
        ]
    );
}
