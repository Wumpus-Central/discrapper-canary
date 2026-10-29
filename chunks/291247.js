(i.d(t, { A: () => N }), i(938796));
var n = i(477900),
    a = i(582128),
    l = i(665260),
    r = i(17928),
    s = i(477782),
    d = i(858899),
    c = i(192308),
    u = i(262577),
    o = i(66834),
    A = i(80682),
    E = i(991982),
    g = i(838111),
    m = i(870136),
    M = i(351001),
    S = i(504049),
    b = i(734057),
    f = i(696451),
    I = i(71393),
    x = i(576705),
    h = i(287809),
    y = i(977997),
    B = i(562153),
    D = i(121127),
    C = i(652215),
    _ = i(200700),
    v = i(340837),
    G = i(105292);
function N(e, t, N, P, R) {
    let T = a.useMemo(() => ({ [t]: [e.id] }), [t, e.id]),
        j = null != P ? [P] : [];
    ((0, A.Eq)(T, "useAdminActionItems"), (0, r.bG)([x.A], () => x.A.getGuildVersion(t), [t]));
    let p = (0, r.bG)([I.A], () => I.A.getGuild(t), [t]),
        U = (0, r.bG)([h.default], () => h.default.getCurrentUser()?.id === e.id, [e.id]),
        O = (0, r.bG)([f.Ay], () => f.Ay.isGuestOrLurker(t, e.id), [t, e.id]),
        L = (0, r.bG)([b.A], () => b.A.getChannel(N), [N]),
        [, k] = (0, m.Ay)(e.id, t),
        V = L?.isGuildStageVoice(),
        {
            muted: K,
            deafened: F,
            suppressed: W,
            voiceChannelId: w,
        } = (0, r.cf)([y.A], () => {
            let i = y.A.getVoiceState(t, e.id);
            return {
                muted: i?.mute ?? !1,
                deafened: i?.deaf ?? !1,
                suppressed: i?.suppress ?? !1,
                voiceChannelId: i?.channelId,
            };
        }),
        Y = (0, r.bG)([f.Ay], () => f.Ay.getMember(t, e.id)),
        z = (0, D.A)({ userId: e.id, guildId: t, channelId: N, location: P, appContext: R }),
        q = (0, S.$9)(t, { location: P, targetUserId: e.id }),
        H = (0, g.A)(t, e.id),
        Q =
            null != w && null != N && x.A.canWithPartialContext(C.xBc.VIEW_CHANNEL, { channelId: w }) && !O
                ? [
                      (!V || !W) && x.A.canWithPartialContext(C.xBc.MUTE_MEMBERS, { channelId: N })
                          ? (0, n.jsx)(
                                s.sL,
                                {
                                    id: "voice-mute",
                                    label: G.intl.string(G.t.e9e9Ua),
                                    checked: K,
                                    color: "danger",
                                    action: () => {
                                        (!1 === K && q(S.Nj.MUTE), o.A.setServerMute(t, e.id, !K));
                                    },
                                },
                                "voice-mute",
                            )
                          : null,
                      (!V || !W) && x.A.canWithPartialContext(C.xBc.DEAFEN_MEMBERS, { channelId: N })
                          ? (0, n.jsx)(
                                s.sL,
                                {
                                    id: "voice-deafen",
                                    label: G.intl.string(G.t.hMA2GE),
                                    checked: F,
                                    color: "danger",
                                    action: () => o.A.setServerDeaf(t, e.id, !F),
                                },
                                "voice-deafen",
                            )
                          : null,
                      !U && null != p && x.A.canWithPartialContext(C.xBc.MOVE_MEMBERS, { channelId: N })
                          ? (0, n.jsx)(
                                s.Dr,
                                {
                                    id: "voice-disconnect",
                                    label: G.intl.string(G.t["/jERiG"]),
                                    color: "danger",
                                    action: () => o.A.setChannel(t, e.id, null),
                                },
                                "voice-disconnect",
                            )
                          : null,
                  ]
                : [];
    async function Z(t, i, n) {
        if (t.ctrlKey || t.metaKey)
            try {
                (await u.A.setCommunicationDisabledDuration(
                    i,
                    n,
                    _.DisableCommunicationDuration.DURATION_60_SEC,
                    null,
                    P,
                ),
                    q(S.Nj.TIMEOUT),
                    (0, d.P0)({
                        text: G.intl.formatToPlainString(G.t.O9C3Nt, { user: B.Ay.getName(i, null, e) ?? "" }),
                        variant: "success",
                    }));
            } catch (e) {
                (0, d.P0)({ text: G.intl.string(G.t.epyCuh), variant: "critical" });
            }
    }
    let $ = null,
        J =
            null != p &&
            x.A.canManageUser(C.xBc.MODERATE_MEMBERS, e, p) &&
            x.A.canManageUser(C.xBc.KICK_MEMBERS, e, p) &&
            x.A.canManageUser(C.xBc.BAN_MEMBERS, e, p),
        X = null != p && (x.A.canManageUser(C.xBc.MANAGE_GUILD, e, p) || x.A.canManageUser(C.xBc.MANAGE_ROLES, e, p));
    return (
        !U &&
            null != p &&
            null != Y &&
            null != Y.joinedAt &&
            (J || X) &&
            p.features.has(C.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) &&
            ($ = (0, l.Lt)(Y.flags ?? 0, v.D.BYPASSES_VERIFICATION)
                ? (0, n.jsx)(
                      s.Dr,
                      {
                          id: "verify",
                          label: G.intl.string(G.t.NbhSI7),
                          action: () =>
                              o.A.setMemberFlags(p.id, e.id, (0, l.lA)(Y.flags ?? 0, v.D.BYPASSES_VERIFICATION, !1)),
                      },
                      "verify",
                  )
                : (0, n.jsx)(
                      s.Dr,
                      {
                          id: "verify",
                          label: G.intl.string(G.t["6QlTeK"]),
                          action: () =>
                              o.A.setMemberFlags(p.id, e.id, (0, l.lA)(Y.flags ?? 0, v.D.BYPASSES_VERIFICATION, !0)),
                      },
                      "verify",
                  )),
        [
            z,
            $,
            ...Q,
            ...(U || null == p
                ? []
                : [
                      H && !O
                          ? k
                              ? (0, n.jsx)(
                                    s.Dr,
                                    {
                                        id: "removetimeout",
                                        label: G.intl.formatToPlainString(G.t.csKeta, { user: e.username }),
                                        color: "danger",
                                        action: () => {
                                            (0, E.Y)({ guildId: t, userId: e.id, anaylticsLocations: j });
                                        },
                                    },
                                    "removetimeout",
                                )
                              : (0, n.jsx)(
                                    s.Dr,
                                    {
                                        id: "timeout",
                                        label: G.intl.formatToPlainString(G.t.OhsOy0, { user: e.username }),
                                        color: "danger",
                                        action: (i) => {
                                            if (i.ctrlKey || i.metaKey) return Z(i, t, e.id);
                                            (0, E.R)({ guildId: t, userId: e.id, anaylticsLocations: j });
                                        },
                                    },
                                    "timeout",
                                )
                          : null,
                      (0, M.L7)(e, p)
                          ? (0, n.jsx)(
                                s.Dr,
                                {
                                    id: "kick",
                                    label: G.intl.formatToPlainString(G.t["9l/iTS"], { user: e.username }),
                                    color: "danger",
                                    action: () =>
                                        (0, c.openModalLazy)(async () => {
                                            let { default: a } = await Promise.all([
                                                i.e("142753"),
                                                i.e("304350"),
                                                i.e("253335"),
                                                i.e("268582"),
                                                i.e("161379"),
                                                i.e("32661"),
                                                i.e("202622"),
                                                i.e("916758"),
                                                i.e("691671"),
                                                i.e("947802"),
                                                i.e("387634"),
                                                i.e("623927"),
                                                i.e("479971"),
                                                i.e("736621"),
                                                i.e("140243"),
                                            ]).then(i.bind(i, 547166));
                                            return (i) => (0, n.jsx)(a, { ...i, location: P, guildId: t, user: e });
                                        }),
                                },
                                "kick",
                            )
                          : null,
                      (0, M.EZ)(e, p)
                          ? (0, n.jsx)(
                                s.Dr,
                                {
                                    id: "ban",
                                    label: G.intl.formatToPlainString(G.t.WnpUBi, { user: e.username }),
                                    color: "danger",
                                    action: () =>
                                        (0, c.openModalLazy)(async () => {
                                            let { default: a } = await Promise.all([
                                                i.e("142753"),
                                                i.e("420282"),
                                                i.e("268582"),
                                                i.e("161379"),
                                                i.e("691671"),
                                                i.e("802504"),
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
