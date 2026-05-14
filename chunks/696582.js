n.d(t, { A: () => K }), n(938796);
var i = n(627968),
    l = n(64700),
    a = n(665260),
    r = n(17928),
    d = n(477782),
    s = n(691540),
    o = n(857250),
    u = n(97483),
    c = n(192308),
    A = n(262577),
    E = n(66834),
    g = n(80682),
    m = n(991982),
    S = n(838111),
    M = n(870136),
    b = n(351001),
    C = n(504049),
    I = n(734057),
    h = n(696451),
    f = n(71393),
    x = n(576705),
    y = n(287809),
    _ = n(977997),
    B = n(562153),
    D = n(228366),
    p = n(901472),
    G = n(985925),
    N = n(267102),
    j = n(474397),
    O = n(378570),
    P = n(761640),
    R = n(309010),
    T = n(174459),
    U = n(652215),
    v = n(746080),
    L = n(486974),
    k = n(375708),
    V = n(200700),
    F = n(340837);
function K(e, t, K, w, W) {
    let z = l.useMemo(() => ({ [t]: [e.id] }), [t, e.id]),
        Y = null != w ? [w] : [];
    (0, g.Eq)(z, "useAdminActionItems"), (0, r.bG)([x.A], () => x.A.getGuildVersion(t), [t]);
    let q = (0, r.bG)([f.A], () => f.A.getGuild(t), [t]),
        H = (0, r.bG)([y.default], () => y.default.getCurrentUser()?.id === e.id, [e.id]),
        Q = (0, r.bG)([h.Ay], () => h.Ay.isGuestOrLurker(t, e.id), [t, e.id]),
        Z = (0, r.bG)([I.A], () => I.A.getChannel(K), [K]),
        [, $] = (0, M.Ay)(e.id, t),
        J = Z?.isGuildStageVoice(),
        {
            muted: X,
            deafened: ee,
            suppressed: et,
            voiceChannelId: en,
        } = (0, r.cf)([_.A], () => {
            let n = _.A.getVoiceState(t, e.id);
            return {
                muted: n?.mute ?? !1,
                deafened: n?.deaf ?? !1,
                suppressed: n?.suppress ?? !1,
                voiceChannelId: n?.channelId,
            };
        }),
        ei = (0, r.bG)([h.Ay], () => h.Ay.getMember(t, e.id)),
        el = (function (e) {
            let { userId: t, guildId: n, channelId: a, location: s, onAction: o, appContext: u } = e,
                c = l.useContext(T.AnalyticsContext),
                A = (0, N.aL)(),
                E = (0, r.bG)([R.A], () => a ?? R.A.getChannelId(n, !0), [a, n]),
                g = (0, r.bG)([h.Ay], () => (null == n ? null : h.Ay.getMember(n, t)), [n, t]),
                m = (0, G.q)(n);
            return null != n && null != g && m
                ? (0, i.jsx)(d.Dr, {
                      id: "mod-view",
                      label: k.intl.string(k.t.kj3tz2),
                      action: () => {
                          o?.(), (0, j.A)(u), A.dispatch(U.jej.POPOUT_CLOSE);
                          let e = I.A.getChannel(E),
                              i = { modViewPanel: L.g.INFO, sourceLocation: s ?? c.location };
                          if (e?.isThread() && null != e.parent_id) {
                              P.Ay.getCurrentSidebarChannelId(e.parent_id) === e.id &&
                                  (D.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
                                  (0, O.iN)(e.id)),
                                  (0, p.z)(n, t, e.parent_id, i);
                              return;
                          }
                          (0, p.z)(n, t, E ?? v.VV.MEMBER_SAFETY, i);
                      },
                  })
                : null;
        })({ userId: e.id, guildId: t, channelId: K, location: w, appContext: W }),
        ea = (0, C.$9)(t, { location: w, targetUserId: e.id }),
        er = (0, S.A)(t, e.id),
        ed =
            null != en && null != K && x.A.canWithPartialContext(U.xBc.VIEW_CHANNEL, { channelId: en }) && !Q
                ? [
                      (!J || !et) && x.A.canWithPartialContext(U.xBc.MUTE_MEMBERS, { channelId: K })
                          ? (0, i.jsx)(
                                d.sL,
                                {
                                    id: "voice-mute",
                                    label: k.intl.string(k.t.e9e9Ua),
                                    checked: X,
                                    color: "danger",
                                    action: () => {
                                        !1 === X && ea(C.Nj.MUTE), E.A.setServerMute(t, e.id, !X);
                                    },
                                },
                                "voice-mute",
                            )
                          : null,
                      (!J || !et) && x.A.canWithPartialContext(U.xBc.DEAFEN_MEMBERS, { channelId: K })
                          ? (0, i.jsx)(
                                d.sL,
                                {
                                    id: "voice-deafen",
                                    label: k.intl.string(k.t.hMA2GE),
                                    checked: ee,
                                    color: "danger",
                                    action: () => E.A.setServerDeaf(t, e.id, !ee),
                                },
                                "voice-deafen",
                            )
                          : null,
                      !H && null != q && x.A.canWithPartialContext(U.xBc.MOVE_MEMBERS, { channelId: K })
                          ? (0, i.jsx)(
                                d.Dr,
                                {
                                    id: "voice-disconnect",
                                    label: k.intl.string(k.t["/jERiG"]),
                                    color: "danger",
                                    action: () => E.A.setChannel(t, e.id, null),
                                },
                                "voice-disconnect",
                            )
                          : null,
                  ]
                : [],
        es = async (t, n, i) => {
            if (t.ctrlKey || t.metaKey)
                try {
                    await A.A.setCommunicationDisabledDuration(
                        n,
                        i,
                        V.DisableCommunicationDuration.DURATION_60_SEC,
                        null,
                        w,
                    ),
                        ea(C.Nj.TIMEOUT),
                        (0, s.P0)(
                            (0, o.o)(
                                k.intl.formatToPlainString(k.t.O9C3Nt, { user: B.Ay.getName(n, null, e) ?? "" }),
                                u.Ck.SUCCESS,
                            ),
                        );
                } catch (e) {
                    (0, s.P0)((0, o.o)(k.intl.string(k.t.epyCuh), u.Ck.FAILURE));
                }
        },
        eo = null,
        eu =
            null != q &&
            x.A.canManageUser(U.xBc.MODERATE_MEMBERS, e, q) &&
            x.A.canManageUser(U.xBc.KICK_MEMBERS, e, q) &&
            x.A.canManageUser(U.xBc.BAN_MEMBERS, e, q),
        ec = null != q && (x.A.canManageUser(U.xBc.MANAGE_GUILD, e, q) || x.A.canManageUser(U.xBc.MANAGE_ROLES, e, q));
    return (
        !H &&
            null != q &&
            null != ei &&
            null != ei.joinedAt &&
            (eu || ec) &&
            q.features.has(U.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) &&
            (eo = (0, a.Lt)(ei.flags ?? 0, F.D.BYPASSES_VERIFICATION)
                ? (0, i.jsx)(
                      d.Dr,
                      {
                          id: "verify",
                          label: k.intl.string(k.t.NbhSI7),
                          action: () =>
                              E.A.setMemberFlags(q.id, e.id, (0, a.lA)(ei.flags ?? 0, F.D.BYPASSES_VERIFICATION, !1)),
                      },
                      "verify",
                  )
                : (0, i.jsx)(
                      d.Dr,
                      {
                          id: "verify",
                          label: k.intl.string(k.t["6QlTeK"]),
                          action: () =>
                              E.A.setMemberFlags(q.id, e.id, (0, a.lA)(ei.flags ?? 0, F.D.BYPASSES_VERIFICATION, !0)),
                      },
                      "verify",
                  )),
        [
            el,
            eo,
            ...ed,
            ...(H || null == q
                ? []
                : [
                      er && !Q
                          ? $
                              ? (0, i.jsx)(
                                    d.Dr,
                                    {
                                        id: "removetimeout",
                                        label: k.intl.formatToPlainString(k.t.csKeta, { user: e.username }),
                                        color: "danger",
                                        action: () => {
                                            (0, m.Y)({ guildId: t, userId: e.id, anaylticsLocations: Y });
                                        },
                                    },
                                    "removetimeout",
                                )
                              : (0, i.jsx)(
                                    d.Dr,
                                    {
                                        id: "timeout",
                                        label: k.intl.formatToPlainString(k.t.OhsOy0, { user: e.username }),
                                        color: "danger",
                                        action: (n) => {
                                            if (n.ctrlKey || n.metaKey) return es(n, t, e.id);
                                            (0, m.R)({ guildId: t, userId: e.id, anaylticsLocations: Y });
                                        },
                                    },
                                    "timeout",
                                )
                          : null,
                      (0, b.L7)(e, q)
                          ? (0, i.jsx)(
                                d.Dr,
                                {
                                    id: "kick",
                                    label: k.intl.formatToPlainString(k.t["9l/iTS"], { user: e.username }),
                                    color: "danger",
                                    action: () =>
                                        (0, c.openModalLazy)(async () => {
                                            let { default: l } = await Promise.all([
                                                n.e("74103"),
                                                n.e("97660"),
                                                n.e("8891"),
                                                n.e("91671"),
                                                n.e("40243"),
                                            ]).then(n.bind(n, 547166));
                                            return (n) => (0, i.jsx)(l, { ...n, location: w, guildId: t, user: e });
                                        }),
                                },
                                "kick",
                            )
                          : null,
                      (0, b.EZ)(e, q)
                          ? (0, i.jsx)(
                                d.Dr,
                                {
                                    id: "ban",
                                    label: k.intl.formatToPlainString(k.t.WnpUBi, { user: e.username }),
                                    color: "danger",
                                    action: () =>
                                        (0, c.openModalLazy)(async () => {
                                            let { default: l } = await Promise.all([
                                                n.e("74103"),
                                                n.e("33847"),
                                                n.e("8891"),
                                                n.e("91671"),
                                                n.e("2504"),
                                            ]).then(n.bind(n, 333179));
                                            return (n) => (0, i.jsx)(l, { ...n, location: w, guildId: t, user: e });
                                        }),
                                },
                                "ban",
                            )
                          : null,
                  ]),
        ]
    );
}
