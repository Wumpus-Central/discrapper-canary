(i.d(t, { A: () => R }), i(938796));
var n = i(477900),
    a = i(582128),
    l = i(665260),
    r = i(17928),
    s = i(477782),
    d = i(376357),
    o = i(192308),
    u = i(262577),
    c = i(66834),
    A = i(80682),
    E = i(991982),
    g = i(838111),
    m = i(870136),
    M = i(351001),
    S = i(504049),
    I = i(734057),
    b = i(696451),
    f = i(71393),
    x = i(576705),
    h = i(287809),
    C = i(977997),
    y = i(562153),
    B = i(121127),
    D = i(652215),
    _ = i(200700),
    G = i(340837),
    N = i(660183);
function R(e, t, R, U, v) {
    let P = a.useMemo(() => ({ [t]: [e.id] }), [t, e.id]),
        T = null != U ? [U] : [];
    ((0, A.Eq)(P, "useAdminActionItems"), (0, r.bG)([x.A], () => x.A.getGuildVersion(t), [t]));
    let j = (0, r.bG)([f.A], () => f.A.getGuild(t), [t]),
        p = (0, r.bG)([h.default], () => h.default.getCurrentUser()?.id === e.id, [e.id]),
        O = (0, r.bG)([b.Ay], () => b.Ay.isGuestOrLurker(t, e.id), [t, e.id]),
        k = (0, r.bG)([I.A], () => I.A.getChannel(R), [R]),
        [, L] = (0, m.Ay)(e.id, t),
        V = k?.isGuildStageVoice(),
        {
            muted: F,
            deafened: K,
            suppressed: W,
            voiceChannelId: w,
        } = (0, r.cf)([C.A], () => {
            let i = C.A.getVoiceState(t, e.id);
            return {
                muted: i?.mute ?? !1,
                deafened: i?.deaf ?? !1,
                suppressed: i?.suppress ?? !1,
                voiceChannelId: i?.channelId,
            };
        }),
        Y = (0, r.bG)([b.Ay], () => b.Ay.getMember(t, e.id)),
        z = (0, B.A)({ userId: e.id, guildId: t, channelId: R, location: U, appContext: v }),
        q = (0, S.$9)(t, { location: U, targetUserId: e.id }),
        H = (0, g.A)(t, e.id),
        Q =
            null != w && null != R && x.A.canWithPartialContext(D.xBc.VIEW_CHANNEL, { channelId: w }) && !O
                ? [
                      (!V || !W) && x.A.canWithPartialContext(D.xBc.MUTE_MEMBERS, { channelId: R })
                          ? (0, n.jsx)(
                                s.sL,
                                {
                                    id: "voice-mute",
                                    label: N.intl.string(N.t.e9e9Ua),
                                    checked: F,
                                    color: "danger",
                                    action: () => {
                                        (!1 === F && q(S.Nj.MUTE), c.A.setServerMute(t, e.id, !F));
                                    },
                                },
                                "voice-mute",
                            )
                          : null,
                      (!V || !W) && x.A.canWithPartialContext(D.xBc.DEAFEN_MEMBERS, { channelId: R })
                          ? (0, n.jsx)(
                                s.sL,
                                {
                                    id: "voice-deafen",
                                    label: N.intl.string(N.t.hMA2GE),
                                    checked: K,
                                    color: "danger",
                                    action: () => c.A.setServerDeaf(t, e.id, !K),
                                },
                                "voice-deafen",
                            )
                          : null,
                      !p && null != j && x.A.canWithPartialContext(D.xBc.MOVE_MEMBERS, { channelId: R })
                          ? (0, n.jsx)(
                                s.Dr,
                                {
                                    id: "voice-disconnect",
                                    label: N.intl.string(N.t["/jERiG"]),
                                    color: "danger",
                                    action: () => c.A.setChannel(t, e.id, null),
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
                    U,
                ),
                    q(S.Nj.TIMEOUT),
                    (0, d.P0)(
                        (0, d.ox)(
                            N.intl.formatToPlainString(N.t.O9C3Nt, { user: y.Ay.getName(i, null, e) ?? "" }),
                            d.Ck.SUCCESS,
                        ),
                    ));
            } catch (e) {
                (0, d.P0)((0, d.ox)(N.intl.string(N.t.epyCuh), d.Ck.FAILURE));
            }
    }
    let $ = null,
        J =
            null != j &&
            x.A.canManageUser(D.xBc.MODERATE_MEMBERS, e, j) &&
            x.A.canManageUser(D.xBc.KICK_MEMBERS, e, j) &&
            x.A.canManageUser(D.xBc.BAN_MEMBERS, e, j),
        X = null != j && (x.A.canManageUser(D.xBc.MANAGE_GUILD, e, j) || x.A.canManageUser(D.xBc.MANAGE_ROLES, e, j));
    return (
        !p &&
            null != j &&
            null != Y &&
            null != Y.joinedAt &&
            (J || X) &&
            j.features.has(D.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) &&
            ($ = (0, l.Lt)(Y.flags ?? 0, G.D.BYPASSES_VERIFICATION)
                ? (0, n.jsx)(
                      s.Dr,
                      {
                          id: "verify",
                          label: N.intl.string(N.t.NbhSI7),
                          action: () =>
                              c.A.setMemberFlags(j.id, e.id, (0, l.lA)(Y.flags ?? 0, G.D.BYPASSES_VERIFICATION, !1)),
                      },
                      "verify",
                  )
                : (0, n.jsx)(
                      s.Dr,
                      {
                          id: "verify",
                          label: N.intl.string(N.t["6QlTeK"]),
                          action: () =>
                              c.A.setMemberFlags(j.id, e.id, (0, l.lA)(Y.flags ?? 0, G.D.BYPASSES_VERIFICATION, !0)),
                      },
                      "verify",
                  )),
        [
            z,
            $,
            ...Q,
            ...(p || null == j
                ? []
                : [
                      H && !O
                          ? L
                              ? (0, n.jsx)(
                                    s.Dr,
                                    {
                                        id: "removetimeout",
                                        label: N.intl.formatToPlainString(N.t.csKeta, { user: e.username }),
                                        color: "danger",
                                        action: () => {
                                            (0, E.Y)({ guildId: t, userId: e.id, anaylticsLocations: T });
                                        },
                                    },
                                    "removetimeout",
                                )
                              : (0, n.jsx)(
                                    s.Dr,
                                    {
                                        id: "timeout",
                                        label: N.intl.formatToPlainString(N.t.OhsOy0, { user: e.username }),
                                        color: "danger",
                                        action: (i) => {
                                            if (i.ctrlKey || i.metaKey) return Z(i, t, e.id);
                                            (0, E.R)({ guildId: t, userId: e.id, anaylticsLocations: T });
                                        },
                                    },
                                    "timeout",
                                )
                          : null,
                      (0, M.L7)(e, j)
                          ? (0, n.jsx)(
                                s.Dr,
                                {
                                    id: "kick",
                                    label: N.intl.formatToPlainString(N.t["9l/iTS"], { user: e.username }),
                                    color: "danger",
                                    action: () =>
                                        (0, o.openModalLazy)(async () => {
                                            let { default: a } = await Promise.all([
                                                i.e("142753"),
                                                i.e("253335"),
                                                i.e("161379"),
                                                i.e("268582"),
                                                i.e("691671"),
                                                i.e("140243"),
                                            ]).then(i.bind(i, 547166));
                                            return (i) => (0, n.jsx)(a, { ...i, location: U, guildId: t, user: e });
                                        }),
                                },
                                "kick",
                            )
                          : null,
                      (0, M.EZ)(e, j)
                          ? (0, n.jsx)(
                                s.Dr,
                                {
                                    id: "ban",
                                    label: N.intl.formatToPlainString(N.t.WnpUBi, { user: e.username }),
                                    color: "danger",
                                    action: () =>
                                        (0, o.openModalLazy)(async () => {
                                            let { default: a } = await Promise.all([
                                                i.e("142753"),
                                                i.e("420282"),
                                                i.e("161379"),
                                                i.e("268582"),
                                                i.e("691671"),
                                                i.e("802504"),
                                            ]).then(i.bind(i, 333179));
                                            return (i) => (0, n.jsx)(a, { ...i, location: U, guildId: t, user: e });
                                        }),
                                },
                                "ban",
                            )
                          : null,
                  ]),
        ]
    );
}
