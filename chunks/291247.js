n.d(t, { A: () => C }), n(938796);
var l = n(627968),
    i = n(64700),
    r = n(665260),
    a = n(311907),
    o = n(397927),
    d = n(262577),
    s = n(686956),
    u = n(80682),
    c = n(991982),
    A = n(838111),
    E = n(870136),
    g = n(351001),
    _ = n(504049),
    M = n(734057),
    O = n(696451),
    I = n(71393),
    m = n(576705),
    f = n(287809),
    y = n(977997),
    S = n(562153),
    b = n(121127),
    N = n(652215),
    h = n(200700),
    p = n(340837),
    T = n(985018);
function C(e, t, C, U, D) {
    let R = i.useMemo(() => ({ [t]: [e.id] }), [t, e.id]),
        L = null != U ? [U] : [];
    (0, u.Eq)(R, "useAdminActionItems"), (0, a.bG)([m.A], () => m.A.getGuildVersion(t), [t]);
    let G = (0, a.bG)([I.A], () => I.A.getGuild(t), [t]),
        x = (0, a.bG)([f.default], () => f.default.getCurrentUser()?.id === e.id, [e.id]),
        j = (0, a.bG)([O.Ay], () => O.Ay.isGuestOrLurker(t, e.id), [t, e.id]),
        v = (0, a.bG)([M.A], () => M.A.getChannel(C), [C]),
        [, B] = (0, E.Ay)(e.id, t),
        P = v?.isGuildStageVoice(),
        {
            muted: w,
            deafened: V,
            suppressed: W,
            voiceChannelId: K,
        } = (0, a.cf)([y.A], () => {
            let n = y.A.getVoiceState(t, e.id);
            return {
                muted: n?.mute ?? !1,
                deafened: n?.deaf ?? !1,
                suppressed: n?.suppress ?? !1,
                voiceChannelId: n?.channelId,
            };
        }),
        k = (0, a.bG)([O.Ay], () => O.Ay.getMember(t, e.id)),
        F = (0, b.A)({ userId: e.id, guildId: t, channelId: C, location: U, appContext: D }),
        Y = (0, _.$9)(t, { location: U, targetUserId: e.id }),
        H = (0, A.A)(t, e.id),
        X =
            null != K && null != C && m.A.canWithPartialContext(N.xBc.VIEW_CHANNEL, { channelId: K }) && !j
                ? [
                      (!P || (P && !W)) && m.A.canWithPartialContext(N.xBc.MUTE_MEMBERS, { channelId: C })
                          ? (0, l.jsx)(
                                o.sLh,
                                {
                                    id: "voice-mute",
                                    label: T.intl.string(T.t.e9e9Ua),
                                    checked: w,
                                    color: "danger",
                                    action: () => {
                                        !1 === w && Y(_.Nj.MUTE), s.A.setServerMute(t, e.id, !w);
                                    },
                                },
                                "voice-mute",
                            )
                          : null,
                      (!P || (P && !W)) && m.A.canWithPartialContext(N.xBc.DEAFEN_MEMBERS, { channelId: C })
                          ? (0, l.jsx)(
                                o.sLh,
                                {
                                    id: "voice-deafen",
                                    label: T.intl.string(T.t.hMA2GE),
                                    checked: V,
                                    color: "danger",
                                    action: () => s.A.setServerDeaf(t, e.id, !V),
                                },
                                "voice-deafen",
                            )
                          : null,
                      !x && null != G && m.A.canWithPartialContext(N.xBc.MOVE_MEMBERS, { channelId: C })
                          ? (0, l.jsx)(
                                o.Drp,
                                {
                                    id: "voice-disconnect",
                                    label: x ? T.intl.string(T.t["6vrfgt"]) : T.intl.string(T.t["/jERiG"]),
                                    color: "danger",
                                    action: () => s.A.setChannel(t, e.id, null),
                                },
                                "voice-disconnect",
                            )
                          : null,
                  ]
                : [],
        q = async (t, n, l) => {
            if (t.ctrlKey || t.metaKey)
                try {
                    await d.A.setCommunicationDisabledDuration(
                        n,
                        l,
                        h.DisableCommunicationDuration.DURATION_60_SEC,
                        null,
                        U,
                    ),
                        Y(_.Nj.TIMEOUT),
                        (0, o.showToast)(
                            (0, o.createToast)(
                                T.intl.formatToPlainString(T.t.O9C3Nt, { user: S.Ay.getName(n, null, e) ?? "" }),
                                o.ToastType.SUCCESS,
                            ),
                        );
                } catch (e) {
                    (0, o.showToast)((0, o.createToast)(T.intl.string(T.t.epyCuh), o.ToastType.FAILURE));
                }
        },
        Z = null,
        J =
            null != G &&
            m.A.canManageUser(N.xBc.MODERATE_MEMBERS, e, G) &&
            m.A.canManageUser(N.xBc.KICK_MEMBERS, e, G) &&
            m.A.canManageUser(N.xBc.BAN_MEMBERS, e, G),
        Q = null != G && (m.A.canManageUser(N.xBc.MANAGE_GUILD, e, G) || m.A.canManageUser(N.xBc.MANAGE_ROLES, e, G));
    return (
        !x &&
            null != G &&
            null != k &&
            null != k.joinedAt &&
            (J || Q) &&
            G.features.has(N.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) &&
            (Z = (0, r.Lt)(k.flags ?? 0, p.D.BYPASSES_VERIFICATION)
                ? (0, l.jsx)(
                      o.Drp,
                      {
                          id: "verify",
                          label: T.intl.string(T.t.NbhSI7),
                          action: () =>
                              s.A.setMemberFlags(G.id, e.id, (0, r.lA)(k.flags ?? 0, p.D.BYPASSES_VERIFICATION, !1)),
                      },
                      "verify",
                  )
                : (0, l.jsx)(
                      o.Drp,
                      {
                          id: "verify",
                          label: T.intl.string(T.t["6QlTeK"]),
                          action: () =>
                              s.A.setMemberFlags(G.id, e.id, (0, r.lA)(k.flags ?? 0, p.D.BYPASSES_VERIFICATION, !0)),
                      },
                      "verify",
                  )),
        [
            F,
            Z,
            ...X,
            ...(x || null == G
                ? []
                : [
                      H && !j
                          ? B
                              ? (0, l.jsx)(
                                    o.Drp,
                                    {
                                        id: "removetimeout",
                                        label: T.intl.formatToPlainString(T.t.csKeta, { user: e.username }),
                                        color: "danger",
                                        action: () => {
                                            (0, c.Y)({ guildId: t, userId: e.id, anaylticsLocations: L });
                                        },
                                    },
                                    "removetimeout",
                                )
                              : (0, l.jsx)(
                                    o.Drp,
                                    {
                                        id: "timeout",
                                        label: T.intl.formatToPlainString(T.t.OhsOy0, { user: e.username }),
                                        color: "danger",
                                        action: (n) => {
                                            if (n.ctrlKey || n.metaKey) return q(n, t, e.id);
                                            (0, c.R)({ guildId: t, userId: e.id, anaylticsLocations: L });
                                        },
                                    },
                                    "timeout",
                                )
                          : null,
                      (0, g.L7)(e, G)
                          ? (0, l.jsx)(
                                o.Drp,
                                {
                                    id: "kick",
                                    label: T.intl.formatToPlainString(T.t["9l/iTS"], { user: e.username }),
                                    color: "danger",
                                    action: () =>
                                        (0, o.mMO)(async () => {
                                            let { default: i } = await n.e("40243").then(n.bind(n, 324785));
                                            return (n) => (0, l.jsx)(i, { ...n, location: U, guildId: t, user: e });
                                        }),
                                },
                                "kick",
                            )
                          : null,
                      (0, g.EZ)(e, G)
                          ? (0, l.jsx)(
                                o.Drp,
                                {
                                    id: "ban",
                                    label: T.intl.formatToPlainString(T.t.WnpUBi, { user: e.username }),
                                    color: "danger",
                                    action: () =>
                                        (0, o.mMO)(async () => {
                                            let { default: i } = await n.e("2504").then(n.bind(n, 333179));
                                            return (n) => (0, l.jsx)(i, { ...n, location: U, guildId: t, user: e });
                                        }),
                                },
                                "ban",
                            )
                          : null,
                  ]),
        ]
    );
}
