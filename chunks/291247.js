n.d(t, {
    A: () => D,
}),
    n(896048),
    n(938796);
var r = n(627968),
    l = n(64700),
    i = n(665260),
    a = n(311907),
    o = n(397927),
    u = n(262577),
    c = n(686956),
    s = n(80682),
    d = n(991982),
    A = n(838111),
    b = n(870136),
    f = n(351001),
    O = n(504049),
    g = n(734057),
    y = n(696451),
    p = n(71393),
    E = n(576705),
    j = n(287809),
    m = n(977997),
    v = n(562153),
    _ = n(121127),
    h = n(652215),
    S = n(200700),
    M = n(340837),
    P = n(985018);

function C(e) {
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
}

function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function D(e, t, D, T, x) {
    let N = l.useMemo(
            () => ({
                [t]: [e.id],
            }),
            [t, e.id],
        ),
        w = null != T ? [T] : [];
    (0, s.E)(N, "useAdminActionItems"), (0, a.bG)([E.A], () => E.A.getGuildVersion(t), [t]);
    let G = (0, a.bG)([p.A], () => p.A.getGuild(t), [t]),
        R = (0, a.bG)([j.default], () => {
            var t;
            return (null == (t = j.default.getCurrentUser()) ? void 0 : t.id) === e.id;
        }, [e.id]),
        U = (0, a.bG)([y.Ay], () => y.Ay.isGuestOrLurker(t, e.id), [t, e.id]),
        L = (0, a.bG)([g.A], () => g.A.getChannel(D), [D]),
        [, B] = (0, b.Ay)(e.id, t),
        k = null == L ? void 0 : L.isGuildStageVoice(),
        {
            muted: V,
            deafened: F,
            suppressed: H,
            voiceChannelId: K,
        } = (0, a.cf)([m.A], () => {
            var n, r, l;
            let i = m.A.getVoiceState(t, e.id);
            return {
                muted: null != (n = null == i ? void 0 : i.mute) && n,
                deafened: null != (r = null == i ? void 0 : i.deaf) && r,
                suppressed: null != (l = null == i ? void 0 : i.suppress) && l,
                voiceChannelId: null == i ? void 0 : i.channelId,
            };
        }),
        Y = (0, a.bG)([y.Ay], () => y.Ay.getMember(t, e.id)),
        W = (0, _.A)({
            userId: e.id,
            guildId: t,
            channelId: D,
            location: T,
            appContext: x,
        }),
        X = (0, O.$9)(t, {
            location: T,
            targetUserId: e.id,
        }),
        Z = (0, A.A)(t, e.id),
        $ =
            null != K &&
            null != D &&
            E.A.canWithPartialContext(h.xBc.VIEW_CHANNEL, {
                channelId: K,
            }) &&
            !U
                ? [
                      (!k || (k && !H)) &&
                      E.A.canWithPartialContext(h.xBc.MUTE_MEMBERS, {
                          channelId: D,
                      })
                          ? (0, r.jsx)(
                                o.sLh,
                                {
                                    id: "voice-mute",
                                    label: P.intl.string(P.t.e9e9Ua),
                                    checked: V,
                                    color: "danger",
                                    action: () => {
                                        !1 === V && X(O.Nj.MUTE), c.A.setServerMute(t, e.id, !V);
                                    },
                                },
                                "voice-mute",
                            )
                          : null,
                      (!k || (k && !H)) &&
                      E.A.canWithPartialContext(h.xBc.DEAFEN_MEMBERS, {
                          channelId: D,
                      })
                          ? (0, r.jsx)(
                                o.sLh,
                                {
                                    id: "voice-deafen",
                                    label: P.intl.string(P.t.hMA2GE),
                                    checked: F,
                                    color: "danger",
                                    action: () => c.A.setServerDeaf(t, e.id, !F),
                                },
                                "voice-deafen",
                            )
                          : null,
                      !R &&
                      null != G &&
                      E.A.canWithPartialContext(h.xBc.MOVE_MEMBERS, {
                          channelId: D,
                      })
                          ? (0, r.jsx)(
                                o.Drp,
                                {
                                    id: "voice-disconnect",
                                    label: R ? P.intl.string(P.t["6vrfgt"]) : P.intl.string(P.t["/jERiG"]),
                                    color: "danger",
                                    action: () => c.A.setChannel(t, e.id, null),
                                },
                                "voice-disconnect",
                            )
                          : null,
                  ]
                : [],
        q = async (t, n, r) => {
            if (t.ctrlKey || t.metaKey)
                try {
                    var l;
                    await u.A.setCommunicationDisabledDuration(
                        n,
                        r,
                        S.DisableCommunicationDuration.DURATION_60_SEC,
                        null,
                        T,
                    ),
                        X(O.Nj.TIMEOUT),
                        (0, o.showToast)(
                            (0, o.createToast)(
                                P.intl.formatToPlainString(P.t.O9C3Nt, {
                                    user: null != (l = v.Ay.getName(n, null, e)) ? l : "",
                                }),
                                o.ToastType.SUCCESS,
                            ),
                        );
                } catch (e) {
                    (0, o.showToast)((0, o.createToast)(P.intl.string(P.t.epyCuh), o.ToastType.FAILURE));
                }
        },
        z = null,
        Q =
            null != G &&
            E.A.canManageUser(h.xBc.MODERATE_MEMBERS, e, G) &&
            E.A.canManageUser(h.xBc.KICK_MEMBERS, e, G) &&
            E.A.canManageUser(h.xBc.BAN_MEMBERS, e, G),
        J = null != G && (E.A.canManageUser(h.xBc.MANAGE_GUILD, e, G) || E.A.canManageUser(h.xBc.MANAGE_ROLES, e, G));
    if (
        !R &&
        null != G &&
        null != Y &&
        null != Y.joinedAt &&
        (Q || J) &&
        G.features.has(h.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED)
    ) {
        var ee;
        z = (0, i.Lt)(null != (ee = Y.flags) ? ee : 0, M.D.BYPASSES_VERIFICATION)
            ? (0, r.jsx)(
                  o.Drp,
                  {
                      id: "verify",
                      label: P.intl.string(P.t.NbhSI7),
                      action: () => {
                          var t;
                          return c.A.setMemberFlags(
                              G.id,
                              e.id,
                              (0, i.lA)(null != (t = Y.flags) ? t : 0, M.D.BYPASSES_VERIFICATION, !1),
                          );
                      },
                  },
                  "verify",
              )
            : (0, r.jsx)(
                  o.Drp,
                  {
                      id: "verify",
                      label: P.intl.string(P.t["6QlTeK"]),
                      action: () => {
                          var t;
                          return c.A.setMemberFlags(
                              G.id,
                              e.id,
                              (0, i.lA)(null != (t = Y.flags) ? t : 0, M.D.BYPASSES_VERIFICATION, !0),
                          );
                      },
                  },
                  "verify",
              );
    }
    return [
        W,
        z,
        ...$,
        ...(R || null == G
            ? []
            : [
                  Z && !U
                      ? B
                          ? (0, r.jsx)(
                                o.Drp,
                                {
                                    id: "removetimeout",
                                    label: P.intl.formatToPlainString(P.t.csKeta, {
                                        user: e.username,
                                    }),
                                    color: "danger",
                                    action: () => {
                                        (0, d.Y)({
                                            guildId: t,
                                            userId: e.id,
                                            anaylticsLocations: w,
                                        });
                                    },
                                },
                                "removetimeout",
                            )
                          : (0, r.jsx)(
                                o.Drp,
                                {
                                    id: "timeout",
                                    label: P.intl.formatToPlainString(P.t.OhsOy0, {
                                        user: e.username,
                                    }),
                                    color: "danger",
                                    action: (n) => {
                                        if (n.ctrlKey || n.metaKey) return q(n, t, e.id);
                                        (0, d.R)({
                                            guildId: t,
                                            userId: e.id,
                                            anaylticsLocations: w,
                                        });
                                    },
                                },
                                "timeout",
                            )
                      : null,
                  (0, f.L7)(e, G)
                      ? (0, r.jsx)(
                            o.Drp,
                            {
                                id: "kick",
                                label: P.intl.formatToPlainString(P.t["9l/iTS"], {
                                    user: e.username,
                                }),
                                color: "danger",
                                action: () =>
                                    (0, o.mMO)(async () => {
                                        let { default: l } = await n.e("40243").then(n.bind(n, 324785));
                                        return (n) =>
                                            (0, r.jsx)(
                                                l,
                                                I(C({}, n), {
                                                    location: T,
                                                    guildId: t,
                                                    user: e,
                                                }),
                                            );
                                    }),
                            },
                            "kick",
                        )
                      : null,
                  (0, f.EZ)(e, G)
                      ? (0, r.jsx)(
                            o.Drp,
                            {
                                id: "ban",
                                label: P.intl.formatToPlainString(P.t.WnpUBi, {
                                    user: e.username,
                                }),
                                color: "danger",
                                action: () =>
                                    (0, o.mMO)(async () => {
                                        let { default: l } = await n.e("2504").then(n.bind(n, 333179));
                                        return (n) =>
                                            (0, r.jsx)(
                                                l,
                                                I(C({}, n), {
                                                    location: T,
                                                    guildId: t,
                                                    user: e,
                                                }),
                                            );
                                    }),
                            },
                            "ban",
                        )
                      : null,
              ]),
    ];
}
