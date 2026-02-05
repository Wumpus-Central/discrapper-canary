n.d(t, { A: () => D }), n(938796);
var l = n(627968),
    i = n(64700),
    a = n(665260),
    r = n(311907),
    d = n(397927),
    o = n(262577),
    u = n(686956),
    s = n(80682),
    c = n(991982),
    A = n(838111),
    E = n(870136),
    _ = n(351001),
    g = n(504049),
    M = n(734057),
    O = n(696451),
    I = n(71393),
    S = n(576705),
    m = n(287809),
    T = n(977997),
    y = n(562153),
    N = n(121127),
    C = n(652215),
    f = n(200700),
    p = n(340837),
    b = n(985018);
function D(e, t, D, R, h) {
    let U = i.useMemo(() => ({ [t]: [e.id] }), [t, e.id]),
        L = null != R ? [R] : [];
    (0, s.E)(U, "useAdminActionItems"), (0, r.bG)([S.A], () => S.A.getGuildVersion(t), [t]);
    let G = (0, r.bG)([I.A], () => I.A.getGuild(t), [t]),
        x = (0, r.bG)([m.default], () => m.default.getCurrentUser()?.id === e.id, [e.id]),
        j = (0, r.bG)([O.Ay], () => O.Ay.isGuestOrLurker(t, e.id), [t, e.id]),
        v = (0, r.bG)([M.A], () => M.A.getChannel(D), [D]),
        [, B] = (0, E.Ay)(e.id, t),
        P = v?.isGuildStageVoice(),
        {
            muted: w,
            deafened: V,
            suppressed: k,
            voiceChannelId: W,
        } = (0, r.cf)([T.A], () => {
            let n = T.A.getVoiceState(t, e.id);
            return {
                muted: n?.mute ?? !1,
                deafened: n?.deaf ?? !1,
                suppressed: n?.suppress ?? !1,
                voiceChannelId: n?.channelId,
            };
        }),
        F = (0, r.bG)([O.Ay], () => O.Ay.getMember(t, e.id)),
        K = (0, N.A)({ userId: e.id, guildId: t, channelId: D, location: R, appContext: h }),
        H = (0, g.$9)(t, { location: R, targetUserId: e.id }),
        Y = (0, A.A)(t, e.id),
        X =
            null != W && null != D && S.A.canWithPartialContext(C.xBc.VIEW_CHANNEL, { channelId: W }) && !j
                ? [
                      (!P || (P && !k)) && S.A.canWithPartialContext(C.xBc.MUTE_MEMBERS, { channelId: D })
                          ? (0, l.jsx)(
                                d.sLh,
                                {
                                    id: "voice-mute",
                                    label: b.intl.string(b.t.e9e9Ua),
                                    checked: w,
                                    color: "danger",
                                    action: () => {
                                        !1 === w && H(g.Nj.MUTE), u.A.setServerMute(t, e.id, !w);
                                    },
                                },
                                "voice-mute",
                            )
                          : null,
                      (!P || (P && !k)) && S.A.canWithPartialContext(C.xBc.DEAFEN_MEMBERS, { channelId: D })
                          ? (0, l.jsx)(
                                d.sLh,
                                {
                                    id: "voice-deafen",
                                    label: b.intl.string(b.t.hMA2GE),
                                    checked: V,
                                    color: "danger",
                                    action: () => u.A.setServerDeaf(t, e.id, !V),
                                },
                                "voice-deafen",
                            )
                          : null,
                      !x && null != G && S.A.canWithPartialContext(C.xBc.MOVE_MEMBERS, { channelId: D })
                          ? (0, l.jsx)(
                                d.Drp,
                                {
                                    id: "voice-disconnect",
                                    label: x ? b.intl.string(b.t["6vrfgt"]) : b.intl.string(b.t["/jERiG"]),
                                    color: "danger",
                                    action: () => u.A.setChannel(t, e.id, null),
                                },
                                "voice-disconnect",
                            )
                          : null,
                  ]
                : [],
        q = async (t, n, l) => {
            if (t.ctrlKey || t.metaKey)
                try {
                    await o.A.setCommunicationDisabledDuration(
                        n,
                        l,
                        f.DisableCommunicationDuration.DURATION_60_SEC,
                        null,
                        R,
                    ),
                        H(g.Nj.TIMEOUT),
                        (0, d.showToast)(
                            (0, d.createToast)(
                                b.intl.formatToPlainString(b.t.O9C3Nt, { user: y.Ay.getName(n, null, e) ?? "" }),
                                d.ToastType.SUCCESS,
                            ),
                        );
                } catch (e) {
                    (0, d.showToast)((0, d.createToast)(b.intl.string(b.t.epyCuh), d.ToastType.FAILURE));
                }
        },
        Q = null,
        Z =
            null != G &&
            S.A.canManageUser(C.xBc.MODERATE_MEMBERS, e, G) &&
            S.A.canManageUser(C.xBc.KICK_MEMBERS, e, G) &&
            S.A.canManageUser(C.xBc.BAN_MEMBERS, e, G),
        $ = null != G && (S.A.canManageUser(C.xBc.MANAGE_GUILD, e, G) || S.A.canManageUser(C.xBc.MANAGE_ROLES, e, G));
    return (
        !x &&
            null != G &&
            null != F &&
            null != F.joinedAt &&
            (Z || $) &&
            G.features.has(C.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) &&
            (Q = (0, a.Lt)(F.flags ?? 0, p.D.BYPASSES_VERIFICATION)
                ? (0, l.jsx)(
                      d.Drp,
                      {
                          id: "verify",
                          label: b.intl.string(b.t.NbhSI7),
                          action: () =>
                              u.A.setMemberFlags(G.id, e.id, (0, a.lA)(F.flags ?? 0, p.D.BYPASSES_VERIFICATION, !1)),
                      },
                      "verify",
                  )
                : (0, l.jsx)(
                      d.Drp,
                      {
                          id: "verify",
                          label: b.intl.string(b.t["6QlTeK"]),
                          action: () =>
                              u.A.setMemberFlags(G.id, e.id, (0, a.lA)(F.flags ?? 0, p.D.BYPASSES_VERIFICATION, !0)),
                      },
                      "verify",
                  )),
        [
            K,
            Q,
            ...X,
            ...(x || null == G
                ? []
                : [
                      Y && !j
                          ? B
                              ? (0, l.jsx)(
                                    d.Drp,
                                    {
                                        id: "removetimeout",
                                        label: b.intl.formatToPlainString(b.t.csKeta, { user: e.username }),
                                        color: "danger",
                                        action: () => {
                                            (0, c.Y)({ guildId: t, userId: e.id, anaylticsLocations: L });
                                        },
                                    },
                                    "removetimeout",
                                )
                              : (0, l.jsx)(
                                    d.Drp,
                                    {
                                        id: "timeout",
                                        label: b.intl.formatToPlainString(b.t.OhsOy0, { user: e.username }),
                                        color: "danger",
                                        action: (n) => {
                                            if (n.ctrlKey || n.metaKey) return q(n, t, e.id);
                                            (0, c.R)({ guildId: t, userId: e.id, anaylticsLocations: L });
                                        },
                                    },
                                    "timeout",
                                )
                          : null,
                      (0, _.L7)(e, G)
                          ? (0, l.jsx)(
                                d.Drp,
                                {
                                    id: "kick",
                                    label: b.intl.formatToPlainString(b.t["9l/iTS"], { user: e.username }),
                                    color: "danger",
                                    action: () =>
                                        (0, d.mMO)(async () => {
                                            let { default: i } = await n.e("40243").then(n.bind(n, 324785));
                                            return (n) => (0, l.jsx)(i, { ...n, location: R, guildId: t, user: e });
                                        }),
                                },
                                "kick",
                            )
                          : null,
                      (0, _.EZ)(e, G)
                          ? (0, l.jsx)(
                                d.Drp,
                                {
                                    id: "ban",
                                    label: b.intl.formatToPlainString(b.t.WnpUBi, { user: e.username }),
                                    color: "danger",
                                    action: () =>
                                        (0, d.mMO)(async () => {
                                            let { default: i } = await n.e("2504").then(n.bind(n, 333179));
                                            return (n) => (0, l.jsx)(i, { ...n, location: R, guildId: t, user: e });
                                        }),
                                },
                                "ban",
                            )
                          : null,
                  ]),
        ]
    );
}
