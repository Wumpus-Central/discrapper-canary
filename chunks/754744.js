n.r(t), n.d(t, { default: () => nO });
var l,
    r,
    a = n(627968),
    i = n(64700),
    s = n(503698),
    E = n.n(s),
    u = n(17928),
    o = n(289873),
    _ = n(66834),
    c = n(736653),
    d = n(80682),
    A = n(793574),
    g = n(688810),
    T = n(221950),
    I = n(999291),
    N = n(148411),
    G = n(946356),
    O = n(287809),
    S = n(985925),
    m = n(580929),
    R = n(66455),
    D = n(844222),
    h = n(866323),
    L = n(475743),
    C = n(775121),
    M = n(761640),
    x = n(901472),
    U = n(364522),
    f = n(939249),
    p = n(477155),
    k = n(534514),
    F = n(475358),
    j = n(486974),
    P = n(375708),
    v = n(104168),
    X = n(645267);
function b(e) {
    let { onNavigate: t, backPanel: n = j.g.INFO, trailingAction: l } = e;
    return (0, a.jsxs)("div", {
        className: X.wx,
        children: [
            (0, a.jsx)("div", {
                className: X.qd,
                children: (0, a.jsxs)(f.D, {
                    className: v.Gv,
                    onClick: () => t?.(n),
                    children: [
                        (0, a.jsx)(p.r, { size: "custom", width: 20, height: 20 }),
                        (0, a.jsx)(k.D, { variant: "heading-md/semibold", children: P.intl.string(P.t["13/7kX"]) }),
                    ],
                }),
            }),
            (0, a.jsxs)("div", {
                className: v.$s,
                children: [
                    l,
                    (0, a.jsx)(f.D, {
                        onClick: (e) => {
                            e.stopPropagation(), t?.(n);
                        },
                        children: (0, a.jsx)(F.e, { shortcut: "esc", keyClassName: v.Wb, className: v.ti }),
                    }),
                ],
            }),
        ],
    });
}
n(321073), n(667532);
var y = n(735438),
    B = n.n(y),
    V = n(636537),
    H = n(155718),
    w = n(47167),
    W = n(411153),
    Y = n(95701),
    K = n(889227),
    z = n(734057),
    J = n(994500),
    Q = n(652215);
let q = new Set([
    Q.F_X.MESSAGE_DELETE,
    Q.F_X.MESSAGE_BULK_DELETE,
    Q.F_X.MESSAGE_PIN,
    Q.F_X.MESSAGE_UNPIN,
    Q.F_X.MEMBER_MOVE,
    Q.F_X.MEMBER_DISCONNECT,
    Q.F_X.BOT_ADD,
    Q.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE,
    Q.F_X.MEMBER_PRUNE,
]);
function Z(e, t) {
    return null == e ? null : (t.users?.get(e) ?? O.default.getUser(e) ?? null);
}
function $(e, t, n, l, r) {
    let a = n((l = l ?? e.targetId));
    if ((null == a && (a = r?.deletedTargets?.[e.targetType]?.[l] ?? null), null == a && null != e.changes)) {
        let n = e.changes.find((e) => e.key === t);
        a = n?.newValue ?? n?.oldValue;
    }
    return a ?? l;
}
function ee(e, t) {
    let n = z.A.getChannel(e);
    if (null != n) return n;
    let l = t.threads?.find((t) => t.id === e);
    return null != l ? (0, Y.UE)(l, l.guild_id) : null;
}
function et(e, t) {
    let n = ee(e, t);
    return null != n ? (0, w.m1)(n, O.default, J.A, !0) : null;
}
function en(e, t, n) {
    return e.guildId === t && e.userId === n;
}
function el(e, t) {
    let [n, l] = i.useState({
            guildId: null,
            userId: null,
            logs: [],
            transformContext: {},
            isLoading: !0,
            hasError: !1,
        }),
        r = i.useRef(!1),
        a = i.useRef(0),
        s = i.useCallback(
            async (n) => {
                let i = a.current + 1;
                (a.current = i),
                    l((l) => {
                        let r = n && en(l, e, t);
                        return {
                            ...l,
                            guildId: e,
                            userId: t,
                            logs: r ? l.logs : [],
                            transformContext: r ? l.transformContext : {},
                            isLoading: !0,
                            hasError: !1,
                        };
                    });
                try {
                    let n = await V.Bo.get({
                        url: Q.Rsh.GUILD_AUDIT_LOG(e),
                        query: { limit: Q.$jw, target_id: t },
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    });
                    if (!r.current || i !== a.current) return;
                    let { logs: s, transformContext: E } = (function (e) {
                        let t,
                            n,
                            l,
                            {
                                audit_log_entries: r,
                                users: a,
                                integrations: i,
                                webhooks: s,
                                guild_scheduled_events: E,
                                auto_moderation_rules: u,
                                threads: o,
                                application_commands: _,
                            } = e,
                            c = (function () {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                    t = new Map();
                                return (
                                    e.forEach((e) => {
                                        t.set(e.id, new K.A(e));
                                    }),
                                    t
                                );
                            })(a),
                            { logs: d, deletedTargets: A } =
                                ((t = []),
                                (n = {}),
                                (l = 0),
                                r
                                    .slice()
                                    .reverse()
                                    .forEach((e) => {
                                        let r,
                                            a,
                                            i,
                                            s,
                                            E,
                                            u =
                                                ((r = (function (e) {
                                                    let t = [];
                                                    if (
                                                        (null != e.reason &&
                                                            t.push(new W.QO(Q.gGk.REASON, null, e.reason)),
                                                        e.changes?.forEach((e) => {
                                                            t.push(new W.QO(e.key, e.old_value, e.new_value));
                                                        }),
                                                        e.action_type === Q.F_X.MEMBER_PRUNE)
                                                    ) {
                                                        let n = e.options?.delete_member_days ?? 1;
                                                        t.push(new W.QO(Q.gGk.PRUNE_DELETE_DAYS, null, n));
                                                    }
                                                    return (
                                                        e.action_type === Q.F_X.AUTO_MODERATION_BLOCK_MESSAGE &&
                                                            e.options?.auto_moderation_rule_name != null &&
                                                            t.push(
                                                                new W.QO(
                                                                    Q.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME,
                                                                    null,
                                                                    e.options.auto_moderation_rule_name,
                                                                ),
                                                            ),
                                                        e.action_type === Q.F_X.VOICE_CHANNEL_STATUS_CREATE &&
                                                            e.options?.status != null &&
                                                            t.push(new W.QO(Q.gGk.STATUS, null, e.options.status)),
                                                        t
                                                    );
                                                })(e)),
                                                new W.Ay({
                                                    id: e.id,
                                                    action: e.action_type,
                                                    targetId: e.target_id,
                                                    target: c.get(e.target_id) ?? e.target_id,
                                                    userId: e.user_id,
                                                    user: c.get(e.user_id) ?? null,
                                                    changes: r,
                                                    options: e.options,
                                                })),
                                            o = t[0];
                                        if (
                                            null != o &&
                                            (function (e, t, n) {
                                                if (n >= 50 || q.has(t.action) || t.targetType === Q.GaG.INVITE)
                                                    return !1;
                                                let l = e.action === t.action,
                                                    r = e.targetId === t.targetId,
                                                    a = e.userId === t.userId,
                                                    i = 30 > t.timestampStart.diff(e.timestampStart, "minutes");
                                                return l && r && a && i && B().isEqual(e.options, t.options);
                                            })(o, u, l)
                                        ) {
                                            (t[0] = o.merge({
                                                changes: [...o.changes, ...u.changes],
                                                timestampEnd: u.timestampStart,
                                            })),
                                                l++;
                                            return;
                                        }
                                        u.actionType === Q.RWi.DELETE &&
                                            ((a = u.changes.find((e) => e.key === Q.gGk.NAME)),
                                            (i = u.changes.find((e) => e.key === Q.gGk.TITLE)),
                                            (s = u.changes.find((e) => e.key === Q.gGk.TYPE)),
                                            (E = a?.oldValue ?? i?.oldValue),
                                            (u.targetType === Q.GaG.CHANNEL ||
                                                u.targetType === Q.GaG.CHANNEL_OVERWRITE) &&
                                                null != s &&
                                                (0, Y.tr)(s.oldValue) &&
                                                (E = `#${E}`),
                                            null != E && (n[u.targetType] = { ...n[u.targetType], [u.targetId]: E })),
                                            (l = 0),
                                            t.unshift(u);
                                    }),
                                { logs: t, deletedTargets: n });
                        return {
                            logs: d,
                            transformContext: {
                                users: c,
                                integrations: i,
                                webhooks: s,
                                guildScheduledEvents: E,
                                automodRules: u,
                                threads: o,
                                applicationCommands: _,
                                deletedTargets: A,
                            },
                        };
                    })(n.body);
                    l((n) => ({
                        ...n,
                        guildId: e,
                        userId: t,
                        logs: s,
                        transformContext: E,
                        isLoading: !1,
                        hasError: !1,
                    }));
                } catch {
                    if (!r.current || i !== a.current) return;
                    l((l) => {
                        let r = n && en(l, e, t);
                        return {
                            ...l,
                            guildId: e,
                            userId: t,
                            logs: r ? l.logs : [],
                            transformContext: r ? l.transformContext : {},
                            isLoading: !1,
                            hasError: !0,
                        };
                    });
                }
            },
            [e, t],
        ),
        E = i.useCallback(() => s(!0), [s]);
    return (i.useEffect(() => {
        r.current = !0;
        let e = setTimeout(() => {
            s(!1);
        });
        return () => {
            (r.current = !1), clearTimeout(e);
        };
    }, [s]),
    n.guildId !== e || n.userId !== t)
        ? { guildId: e, userId: t, logs: [], transformContext: {}, isLoading: !0, hasError: !1, refresh: E }
        : { ...n, refresh: E };
}
var er = n(989349),
    ea = n.n(er),
    ei = n(702841),
    es = n(990078),
    eE = n(834730),
    eu = n(463930);
n(938796);
var eo = n(665260),
    e_ = n(709977),
    ec = n(773669),
    ed = n(696451),
    eA = n(71393),
    eg = n(935208),
    eT = n(151781),
    eI = n(340837);
let eN = { month: "short", day: "numeric", year: "numeric" },
    eG = { month: "numeric", day: "numeric", year: "numeric" };
var eO =
        (((l = {})[(l.NO_GATE = 0)] = "NO_GATE"),
        (l[(l.NO_AGREEMENT = 1)] = "NO_AGREEMENT"),
        (l[(l.AGREED = 2)] = "AGREED"),
        l),
    eS = n(189552),
    em = n(555067),
    eR = n(438407),
    eD = n(967144),
    eh = n(562153),
    eL = n(881636),
    eC = n(12466);
function eM(e) {
    let {
        description: t,
        name: n,
        icon: l,
        onNavigate: r,
        className: i,
        descriptionClassName: s,
        missingNavIcon: u,
    } = e;
    return (0, a.jsxs)(f.D, {
        onClick: r,
        className: E()(eC.ol, null != r && eC.xO, i),
        children: [
            null != l && (0, a.jsx)("div", { className: eC.bl, children: l }),
            null != n && (0, a.jsx)("div", { className: eC.NR, children: n }),
            (0, a.jsx)("div", { className: E()(eC.uV, s), children: t }),
            null != r &&
                (0, a.jsx)("div", {
                    className: eC.Rp,
                    children: (0, a.jsx)(eL.u, { size: "custom", width: 16, height: 16 }),
                }),
            null == r && null != u && (0, a.jsx)("div", { className: eC.Rp, children: u }),
        ],
    });
}
function ex(e) {
    let { children: t, className: n } = e;
    return (0, a.jsx)("div", { className: E()(eC.Fz, n), children: t });
}
var eU = n(337154);
function ef(e) {
    var t;
    let n,
        { log: l, guildId: r, guild: s } = e,
        { analyticsLocations: u } = (0, g.Ay)(),
        o = em.getSimpleAuditLogTitleFromChange(l),
        _ = em.getSimpleAuditLogTitleContextFromChange(l),
        c = em.findChangeByKey(Q.gGk.REASON, l)?.newValue,
        d = em.getSimpleAuditLogChangeDetails(l),
        A =
            ((t = l.id),
            (n = (0, ei.bG)([ec.default], () => ec.default.locale)),
            i.useMemo(() => new Date(eg.default.extractTimestamp(t)).toLocaleDateString(n, eG), [t, n])),
        T = (0, ei.bG)([ed.Ay], () => (null != l.userId ? ed.Ay.getMember(r, l.userId) : null), [r, l.userId]),
        I = (0, eD.gn)(T?.guildId, T?.userId, T?.colorStrings ?? null),
        N = i.useCallback(
            (e) => (t) => {
                t.preventDefault(), t.stopPropagation(), null != e && (0, eS.Ko)(e, u);
            },
            [u],
        ),
        G = i.useCallback(
            () =>
                null == l.user
                    ? null
                    : (0, a.jsx)(es.m, {
                          asContainer: !0,
                          text: P.intl.string(P.t.mvsi9n),
                          children: (0, a.jsx)(f.D, {
                              onClick: N(T),
                              tag: "span",
                              className: eU.Xh,
                              children: (0, a.jsxs)(eE.E, {
                                  variant: "text-sm/medium",
                                  tag: "span",
                                  children: [
                                      "@",
                                      (0, a.jsx)(eu.g, {
                                          name: eh.Ay.getName(r, null, l.user),
                                          colorString: T?.colorString ?? null,
                                          colorStrings: I,
                                      }),
                                  ],
                              }),
                          }),
                      }),
            [N, l.user, r, T, I],
        )();
    return (0, a.jsxs)("div", {
        className: E()(eC.ol, eU.$9),
        children: [
            (0, a.jsxs)("div", {
                className: eU._6,
                children: [
                    (0, a.jsxs)("div", {
                        className: eU.lc,
                        children: [
                            null != o &&
                                (0, a.jsx)(eE.E, { variant: "text-sm/semibold", color: "text-strong", children: o }),
                            null != _ &&
                                (0, a.jsxs)(eE.E, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: ["(", "string" == typeof _ ? _ : ea()(_).fromNow(), ")"],
                                }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: eU.FS,
                        children: (0, a.jsx)(eE.E, { variant: "text-sm/medium", color: "text-strong", children: A }),
                    }),
                ],
            }),
            null != c &&
                (0, a.jsx)("div", {
                    className: eU.Xy,
                    children: (0, a.jsxs)("div", {
                        className: eU.eH,
                        children: [
                            G,
                            (0, a.jsx)(eE.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tag: "span",
                                children: c,
                            }),
                        ],
                    }),
                }),
            null == c &&
                null != d &&
                (0, a.jsx)("div", {
                    className: eU.Xy,
                    children: (0, a.jsxs)("div", {
                        className: eU.E9,
                        children: [
                            G,
                            (0, a.jsx)(eE.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tag: "span",
                                children: d,
                            }),
                        ],
                    }),
                }),
            null == c &&
                null == d &&
                (0, a.jsx)("div", {
                    className: eU.Xy,
                    children: (0, a.jsx)("div", {
                        className: eU.E9,
                        children: (0, a.jsx)(eE.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            tag: "span",
                            children: (0, a.jsx)(eR.r, {
                                log: l,
                                guild: s,
                                onContentClick: () => {},
                                className: eU.zm,
                            }),
                        }),
                    }),
                }),
        ],
    });
}
function ep() {
    return (0, a.jsx)("div", {
        className: E()(eC.ol, eU.kS),
        children: (0, a.jsx)(o.y, { type: o.t.SPINNING_CIRCLE }),
    });
}
function ek() {
    return (0, a.jsxs)("div", {
        className: E()(eC.ol, eU.kS),
        children: [
            (0, a.jsx)(eE.E, {
                variant: "text-sm/semibold",
                color: "text-default",
                children: P.intl.string(P.t.Ww5Tjy),
            }),
            (0, a.jsx)(eE.E, { variant: "text-sm/normal", color: "text-muted", children: P.intl.string(P.t.tzkaD7) }),
        ],
    });
}
function eF(e) {
    let { guildId: t, logs: n, transformContext: l, isLoading: r, hasError: i } = e,
        s = (0, ei.bG)([eA.A], () => eA.A.getGuild(t), [t]),
        E = (0, ei.bG)(
            [z.A, O.default],
            () =>
                null == s ||
                ("" ===
                    n
                        .map((e) => {
                            let t = null != e.userId ? O.default.getUser(e.userId) : null,
                                n = O.default.getUser(e.targetId),
                                l =
                                    e.options?.id != null && "string" == typeof e.options.id
                                        ? O.default.getUser(e.options.id)
                                        : null,
                                r = z.A.getChannel(e.targetId),
                                a = e.options?.channel_id != null ? z.A.getChannel(e.options.channel_id) : null;
                            return [t?.tag, n?.tag, l?.tag, r?.name, a?.name].join(":");
                        })
                        .join("|") &&
                    0 === n.length)
                    ? []
                    : n.map((e) => {
                          let t = e;
                          return (
                              null !=
                                  (t = (t = (t = t.set("user", Z(e.userId, l) ?? e.user)).set(
                                      "target",
                                      (function (e, t, n) {
                                          switch (e.targetType) {
                                              case Q.GaG.GUILD:
                                              case Q.GaG.GUILD_HOME:
                                              case Q.GaG.GUILD_PROFILE:
                                              case Q.GaG.GUILD_ONBOARDING:
                                              case Q.GaG.GUILD_MEMBER_VERIFICATION:
                                                  return t;
                                              case Q.GaG.CHANNEL:
                                              case Q.GaG.CHANNEL_OVERWRITE:
                                                  return $(e, Q.gGk.NAME, (e) => et(e, n), void 0, n);
                                              case Q.GaG.USER:
                                                  return $(e, Q.gGk.NICK, (e) => Z(e, n), void 0, n);
                                              case Q.GaG.INTEGRATION:
                                                  return $(
                                                      e,
                                                      Q.gGk.TYPE,
                                                      (e) => n.integrations?.find((t) => t.id === e)?.name,
                                                      void 0,
                                                      n,
                                                  );
                                              case Q.GaG.WEBHOOK:
                                                  return $(
                                                      e,
                                                      Q.gGk.NAME,
                                                      (e) => n.webhooks?.find((t) => t.id === e)?.name,
                                                      void 0,
                                                      n,
                                                  );
                                              case Q.GaG.GUILD_SCHEDULED_EVENT:
                                              case Q.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION:
                                                  return $(
                                                      e,
                                                      Q.gGk.NAME,
                                                      (e) => n.guildScheduledEvents?.find((t) => t.id === e)?.name,
                                                      void 0,
                                                      n,
                                                  );
                                              case Q.GaG.THREAD:
                                                  return $(e, Q.gGk.NAME, (e) => et(e, n), void 0, n);
                                              case Q.GaG.APPLICATION_COMMAND:
                                                  if (e.targetId === e.options?.application_id)
                                                      return (
                                                          n.integrations?.find((t) => t.application?.id === e.targetId)
                                                              ?.name ?? e.targetId
                                                      );
                                                  return $(
                                                      e,
                                                      Q.gGk.NAME,
                                                      (e) => {
                                                          let t,
                                                              l = n.applicationCommands?.find((t) => t.id === e);
                                                          return null != l
                                                              ? ((t =
                                                                    null != l.name_localized && "" !== l.name_localized
                                                                        ? l.name_localized
                                                                        : l.name),
                                                                l.type === H.kc.CHAT ? `/\u2060${t}` : t)
                                                              : null;
                                                      },
                                                      void 0,
                                                      n,
                                                  );
                                              case Q.GaG.AUTO_MODERATION_RULE:
                                                  return $(
                                                      e,
                                                      Q.gGk.NAME,
                                                      (e) => n.automodRules?.find((t) => t.id === e)?.name,
                                                      void 0,
                                                      n,
                                                  );
                                              case Q.GaG.VOICE_CHANNEL_STATUS:
                                                  return $(e, Q.gGk.STATUS, (e) => et(e, n), void 0, n);
                                              default:
                                                  return $(e, Q.gGk.NAME, () => null, void 0, n);
                                          }
                                      })(e, s, l),
                                  )).set(
                                      "options",
                                      (function (e, t) {
                                          if (null == e.options) return e.options;
                                          let n = { ...e.options };
                                          switch (e.options.type) {
                                              case Q.AO_.USER:
                                                  null != e.options.id && (n.subtarget = Z(e.options.id, t));
                                                  break;
                                              case Q.AO_.ROLE:
                                                  n.subtarget = e.options.role_name;
                                          }
                                          return (
                                              null != e.options.channel_id &&
                                                  (n.channel = $(e, "", (e) => ee(e, t), e.options.channel_id, t)),
                                              null != e.options.members_removed &&
                                                  0 !== e.options.members_removed &&
                                                  (n.count = e.options.members_removed),
                                              n
                                          );
                                      })(t, l),
                                  )).changes &&
                                  (t = t.set(
                                      "changes",
                                      t.changes.map((e) =>
                                          e.key === Q.gGk.OWNER_ID
                                              ? new W.QO(
                                                    e.key,
                                                    null != e.oldValue ? Z(e.oldValue, l) : e.oldValue,
                                                    null != e.newValue ? Z(e.newValue, l) : e.newValue,
                                                )
                                              : e,
                                      ),
                                  )),
                              t
                          );
                      }),
            [s, n, l],
        ),
        u = r && 0 === n.length,
        o = i && 0 === n.length;
    return null == s
        ? null
        : (0, a.jsxs)("div", {
              className: eU.RU,
              children: [
                  (0, a.jsx)(eE.E, {
                      variant: "eyebrow",
                      color: "text-default",
                      className: eU.d2,
                      children: P.intl.string(P.t.flCxLo),
                  }),
                  (0, a.jsx)(ex, {
                      className: eU.kt,
                      children: u
                          ? (0, a.jsx)(ep, {})
                          : o
                            ? (0, a.jsx)(ek, {})
                            : E.length > 0
                              ? E.map((e) => (0, a.jsx)(ef, { log: e, guildId: t, guild: s }, e.id))
                              : null,
                  }),
              ],
          });
}
function ej(e) {
    let { userId: t, guildId: n, onNavigate: l, className: r } = e,
        { logs: i, transformContext: s, isLoading: u, hasError: o } = el(n, t);
    return (0, a.jsxs)("div", {
        className: E()(X.kL, r),
        children: [
            (0, a.jsx)(b, { guildId: n, userId: t, onNavigate: l }),
            (0, a.jsx)(U.Ip, {
                className: X.WH,
                children: (0, a.jsx)(eF, { guildId: n, logs: i, transformContext: s, isLoading: u, hasError: o }),
            }),
        ],
    });
}
var eP = n(863610),
    ev = n(663417),
    eX = n(881548),
    eb = n(942381),
    ey = n(265690),
    eB = n(121894),
    eV = n(228366),
    eH = n(177068),
    ew = n(736130),
    eW = (((r = {}).MESSAGES = "messages"), (r.LINKS = "links"), (r.MEDIA = "media"), (r.ALL_COUNTS = "all_counts"), r);
function eY(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = JSON.stringify(l);
    return r
        ? `guild_${t}_search_tab_${n}_for_${e}_with_additonal_${a}`
        : `guild_${t}_search_${n}_for_${e}_with_additonal_${a}`;
}
let eK = { searchFetcher: null, searchTabFetcher: null, result: null, messageCount: -1, lastMessage: null },
    ez = (0, ey.h)(() => new Map());
function eJ(e, t) {
    (0, eB.r)(() => {
        ez.setState((n) => {
            let l = n.get(e);
            return null == l ? n.set(e, { ...eK, ...t }) : n.set(e, { ...l, ...t }), n;
        });
    });
}
function eQ(e) {
    return ez((t) => t.get(e), eb.x);
}
function eq(e, t, n) {
    let l = n ?? {};
    switch (t) {
        case "links":
            return { author_id: [e], has: ["link"], ...l };
        case "media":
            return {
                author_id: [e],
                attachment_extension: [
                    "png",
                    "jpg",
                    "webp",
                    "mov",
                    "mp4",
                    "qt",
                    "gif",
                    "mp3",
                    "wav",
                    "flac",
                    "ogg",
                    "opus",
                ],
                ...l,
            };
        case "all_counts":
            return { author_id: [e], limit: 1, cursor: null, ...l };
        default:
            return { author_id: [e], ...l };
    }
}
function eZ(e, t, n, l) {
    let r = i.useMemo(() => eY(e, t, n, l, !0), [e, t, n, l]),
        a = eQ(r),
        s = (0, L.A)(r);
    return { key: r, previousKey: s, state: a };
}
var e$ = n(452027),
    e0 = n(957485),
    e1 = n(947641),
    e6 = n(661531),
    e3 = n(807072),
    e2 = n(622629),
    e7 = n(111159),
    e5 = n(241541),
    e4 = n(854378),
    e9 = n(589935),
    e8 = n(309010);
function te(e) {
    let t,
        n,
        l,
        r,
        s,
        E,
        u,
        { userId: o, guildId: _, member: c } = e,
        d = (0, ei.bG)([eA.A], () => eA.A.getGuild(_), [_]),
        A = (function (e, t) {
            let n = (0, ei.bG)([O.default], () => O.default.getUser(e), [e]),
                l = (0, ei.bG)([ed.Ay], () => ed.Ay.getMember(t, e), [t, e]);
            if (null == n || null == l) return !1;
            let r = (0, eo.Lt)(l.flags ?? 0, eI.D.BYPASSES_VERIFICATION),
                a = n?.isPhoneVerified() || n?.isStaff(),
                i = l?.joinedAt != null;
            return n.verified || a || i || r;
        })(o, _),
        g =
            ((t = (0, ei.bG)([O.default], () => O.default.getUser(o), [o])),
            (n = (0, ei.bG)([ed.Ay], () => ed.Ay.getMember(_, o), [_, o])),
            (l = (0, ei.bG)([eA.A], () => eA.A.getGuild(_), [_])),
            (0, e_.Qd)(l)
                ? null == t || null == n || null == l
                    ? 1
                    : (0, eo.Lt)(n.flags ?? 0, eI.D.BYPASSES_VERIFICATION) ||
                        (0, eo.Lt)(n.flags ?? 0, eI.D.COMPLETED_ONBOARDING) ||
                        (null != n.isPending && !n.isPending)
                      ? 2
                      : 1
                : 0),
        I =
            ((r = (0, ei.bG)([ec.default], () => ec.default.locale)),
            i.useMemo(() => new Date(eg.default.extractTimestamp(o)).toLocaleDateString(r, eN), [o, r])),
        N =
            ((s = (0, ei.bG)([ec.default], () => ec.default.locale)),
            (E = (0, ei.bG)([ed.Ay], () => ed.Ay.getMember(_, o), [_, o])),
            (u = E?.joinedAt),
            i.useMemo(() => (null == u ? "" : new Date(u).toLocaleDateString(s, eN)), [u, s]));
    return (i.useEffect(() => {
        (0, T.uO)(_);
    }, [_]),
    null == d)
        ? null
        : (0, a.jsx)(e$.D, {
              label: P.intl.string(P.t["ldCE/p"]),
              children: (0, a.jsxs)(ex, {
                  children: [
                      null != c &&
                          (0, a.jsx)(eM, {
                              icon: (0, a.jsx)(e0.i, { size: "custom", width: 16, height: 16 }),
                              name: (0, a.jsx)(eE.E, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  children: P.intl.string(P.t.nzGai4),
                              }),
                              description: A
                                  ? (0, a.jsx)(e1.r, {
                                        size: "custom",
                                        width: 16,
                                        height: 16,
                                        color: e6.A.colors.STATUS_POSITIVE,
                                    })
                                  : (0, a.jsx)(e3.U, {
                                        size: "custom",
                                        width: 16,
                                        height: 16,
                                        color: e6.A.colors.ICON_FEEDBACK_CRITICAL,
                                    }),
                          }),
                      null != c &&
                          g !== eO.NO_GATE &&
                          (0, a.jsx)(eM, {
                              icon: (0, a.jsx)(e2.B, { size: "custom", width: 16, height: 16 }),
                              name: (0, a.jsx)(eE.E, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  children: P.intl.string(P.t["93hqln"]),
                              }),
                              description:
                                  g === eO.AGREED
                                      ? (0, a.jsx)(e1.r, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: e6.A.colors.STATUS_POSITIVE,
                                        })
                                      : (0, a.jsx)(e3.U, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: e6.A.colors.ICON_FEEDBACK_CRITICAL,
                                        }),
                          }),
                      (0, a.jsx)(eM, {
                          icon: (0, a.jsx)(e7.p, { size: "custom", color: "currentColor", width: 16, height: 16 }),
                          name: (0, a.jsx)(eE.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: P.intl.string(P.t.SaDIpL),
                          }),
                          description: (0, a.jsx)(eE.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: I,
                          }),
                      }),
                      null != c &&
                          (0, a.jsx)(eM, {
                              icon: (0, a.jsx)(e4.$v, {
                                  guild: d,
                                  size: e4.$v.Sizes.SMOL,
                                  animate: !1,
                                  className: X.$f,
                              }),
                              name: (0, a.jsx)(eE.E, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  children: P.intl.string(P.t["NQJ+WG"]),
                              }),
                              description: (0, a.jsx)(eE.E, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  children: N,
                              }),
                          }),
                      null != c &&
                          (0, a.jsx)(eM, {
                              icon: (0, a.jsx)(e5.D, { size: "custom", width: 16, height: 16 }),
                              name: (0, a.jsx)(eE.E, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  children: P.intl.string(P.t["eJOq+Z"]),
                              }),
                              description: (0, a.jsx)(eE.E, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  children: (0, a.jsx)(e9.Ay, {
                                      userId: c.userId,
                                      guildId: c.guildId,
                                      showJoinMethodContextAsFooter: !0,
                                      onClickInviter: (e) => {
                                          let t = e8.A.getChannelId();
                                          (0, x.z)(c.guildId, e.id, t ?? Q.dJq);
                                      },
                                  }),
                              }),
                          }),
                  ],
              }),
          });
}
var tt = n(245604),
    tn = n(950072),
    tl = n(317525),
    tr = n(576705);
function ta(e) {
    let { member: t } = e,
        n = (0, ei.bG)([eA.A], () => eA.A.getGuild(t.guildId)),
        l = (0, ei.bG)([tl.A], () => tl.A.getSortedRoles(t.guildId)),
        r = i.useMemo(
            () => l.filter((e) => e.id !== t.highestRoleId && t.roles.includes(e.id)),
            [t.roles, t.highestRoleId, l],
        ),
        s = (0, ei.bG)([eT.A], () => eT.A.getEnhancedMember(t.guildId, t.userId), [t.guildId, t.userId]),
        u = (0, eS.YH)(s),
        o = (0, eS.Cy)(t),
        _ = (0, ei.bG)([tr.A], () => tr.A.can(Q.xBc.MANAGE_ROLES, n), [n]);
    return null == n
        ? null
        : (0, a.jsx)(e$.D, {
              label: P.intl.string(P.t["LPJmL/"]),
              children: (0, a.jsx)(ex, {
                  children: (0, a.jsx)(eM, {
                      description:
                          t.roles.length > 0 || _
                              ? (0, a.jsxs)("div", {
                                    className: X.yk,
                                    children: [
                                        (0, a.jsx)(es.m, {
                                            asContainer: !0,
                                            "aria-label": P.intl.string(P.t["0g8Xd/"]),
                                            text: P.intl.string(P.t["93S+lG"]),
                                            children: (0, a.jsx)(f.D, {
                                                children: (0, a.jsx)(tn.A, {
                                                    className: E()(X.Zf, X.Lc),
                                                    role: u,
                                                    guildId: t.guildId,
                                                }),
                                            }),
                                        }),
                                        r.map((e) =>
                                            (0, a.jsx)(tn.A, { className: X.Zf, role: e, guildId: t.guildId }, e.id),
                                        ),
                                        _ &&
                                            (0, a.jsx)(es.m, {
                                                asContainer: !0,
                                                "aria-label": P.intl.string(P.t.ljnBlo),
                                                text: P.intl.string(P.t.ljnBlo),
                                                children: (0, a.jsx)(f.D, {
                                                    onClick: o,
                                                    className: X.$g,
                                                    children: (0, a.jsx)(tt.U, {
                                                        size: "custom",
                                                        color: "currentColor",
                                                        className: X.fd,
                                                        width: 20,
                                                        height: 20,
                                                    }),
                                                }),
                                            }),
                                    ],
                                })
                              : (0, a.jsx)("div", {
                                    className: X.pl,
                                    children: (0, a.jsx)(eE.E, {
                                        variant: "text-sm/normal",
                                        children: P.intl.string(P.t.nZfHsf),
                                    }),
                                }),
                  }),
              }),
          });
}
var ti = n(254138),
    ts = n(320448),
    tE = n(376092),
    tu = n(403362),
    to = n(558393),
    t_ = n(136722),
    tc = n(260509),
    td = n(34457),
    tA = n(488926),
    tg = n(124759);
let tT = Object.keys(Q.xBc),
    tI = Array.from(
        new Set([
            ...tg.dR,
            ...Q.nfo,
            Q.xBc.ADMINISTRATOR,
            Q.xBc.KICK_MEMBERS,
            Q.xBc.BAN_MEMBERS,
            Q.xBc.MANAGE_GUILD,
            Q.xBc.MANAGE_CHANNELS,
            Q.xBc.MANAGE_ROLES,
            Q.xBc.MANAGE_MESSAGES,
            Q.xBc.MANAGE_THREADS,
            Q.xBc.MANAGE_GUILD_EXPRESSIONS,
            Q.xBc.CREATE_GUILD_EXPRESSIONS,
            Q.xBc.MANAGE_EVENTS,
            Q.xBc.CREATE_EVENTS,
            Q.xBc.MODERATE_MEMBERS,
            Q.xBc.MENTION_EVERYONE,
            Q.xBc.MANAGE_WEBHOOKS,
        ]),
    ).map((e) => {
        let t = tT.find((t) => Q.xBc[t] === e);
        if (null == t) throw Error(`Permission ${e} not found in Permissions`);
        return t;
    }),
    tN = new Set(Q.nfo);
function tG(e, t, n) {
    let l = (0, ei.bG)([eA.A], () => eA.A.getGuild(t), [t]);
    return (0, ei.bG)([ed.Ay, O.default, tl.A], () => {
        let r = {},
            a = ed.Ay.getMember(t, e),
            i = O.default.getUser(e);
        if (null == l || null == a || null == i) return r;
        let s = tl.A.getEveryoneRole(l),
            E = tA.cc({ user: i, context: l });
        for (let e of n) {
            let t = Q.xBc[e];
            if (t_.zy(E, t)) {
                for (let n of ((r[e] = []), a.roles)) {
                    let a = tl.A.getRole(l.id, n);
                    null != a && ((0, td._m)(a, Q.xBc.ADMINISTRATOR) || (0, td.sx)(a, t)) && r[e].push(a.id);
                }
                ((0, td._m)(s, Q.xBc.ADMINISTRATOR) || (0, td.sx)(s, t)) && r[e].push(s.id),
                    (0, tc.bM)(l, i) && r[e].push(i.id);
            }
        }
        return r;
    }, [l, t, n, e]);
}
var tO = n(830173);
function tS(e) {
    let { permission: t, specMap: n } = e,
        l = Q.xBc[t],
        r = n[l.toString()]?.title ?? (0, tE.hx)(l),
        i = (0, tu.Eo)(l, tN);
    return (0, a.jsxs)(f.D, {
        className: E()(tO.t2, { [tO.aE]: i }),
        children: [
            i && (0, a.jsx)(ti.m, { size: "custom", width: 16, height: 16, color: e6.A.colors.TEXT_BRAND }),
            (0, a.jsx)(eE.E, { variant: "text-xs/medium", color: "interactive-text-default", children: r }),
        ],
    });
}
let tm = i.memo(function (e) {
    let { member: t, onNavigate: n } = e,
        l = (0, ei.bG)([eA.A], () => eA.A.getGuild(t.guildId), [t.guildId]),
        r = tG(t.userId, t.guildId, tI),
        s = tG(t.userId, t.guildId, tT),
        u = Object.keys(r).length,
        o = Object.keys(s).length,
        _ = i.useMemo(() => (null != l ? to.A.getGuildPermissionSpecMap(l) : null), [l]),
        c = i.useMemo(() => (null != l ? to.A.generateGuildPermissionSpec(l) : null), [l]),
        d = i.useMemo(() => {
            if (null == l || null == _) return null;
            if (0 === u)
                return (0, a.jsx)("div", {
                    className: E()(tO.t2, tO.FI),
                    children: (0, a.jsx)(eE.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-positive",
                        children: P.intl.string(P.t.sXhykX),
                    }),
                });
            let e = [];
            return (
                c?.forEach((t) => {
                    t.permissions.forEach((t) => {
                        let n = t.flag,
                            l = tT.find((e) => Q.xBc[e] === n);
                        null == l || (null != r[l] && e.push((0, a.jsx)(tS, { permission: l, specMap: _ }, l)));
                    });
                }),
                e
            );
        }, [l, u, r, c, _]);
    return null == l
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsxs)("div", {
                      className: tO.N1,
                      children: [
                          (0, a.jsx)(eE.E, {
                              variant: "eyebrow",
                              color: "text-default",
                              children: P.intl.string(P.t.ZCq2nC),
                          }),
                          (0, a.jsxs)(f.D, {
                              className: tO.bz,
                              onClick: () => n(j.g.PERMISSIONS),
                              children: [
                                  (0, a.jsx)(eE.E, {
                                      variant: "eyebrow",
                                      color: "interactive-text-default",
                                      children: P.intl.format(P.t["0x6aTm"], { count: o }),
                                  }),
                                  (0, a.jsx)(ts._, { size: "custom", width: 16, height: 16 }),
                              ],
                          }),
                      ],
                  }),
                  (0, a.jsx)(ex, {
                      className: tO.xV,
                      children: (0, a.jsx)(eM, {
                          className: tO.O_,
                          description: (0, a.jsx)("div", { className: tO.SL, children: d }),
                          descriptionClassName: tO.TK,
                      }),
                  }),
              ],
          });
});
var tR = n(953822),
    tD = n(60270),
    th = n(576470),
    tL = n(316031),
    tC = n(157347);
function tM(e) {
    let { member: t } = e,
        n = t.userId,
        l = t.guildId,
        r = ((0, ei.bG)([eT.A], () => eT.A.getEnhancedMember(l, n), [n, l]) ?? t).unusualDMActivityUntil,
        s = i.useCallback((e) => {
            if (null == e) return null;
            let t = new Date(e).getTime();
            return (0, tC.hL)(t, tC.wN.JOINED_AT);
        }, []),
        E = i.useMemo(() => (null == t ? null : s(r)), [t, s, r]),
        u = i.useMemo(() => (0, tL.n)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
        o = i.useMemo(
            () => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)),
            [t.communicationDisabledUntil],
        );
    return null != r || u
        ? (0, a.jsx)(e$.D, {
              label: P.intl.string(P.t["7V3759"]),
              children: (0, a.jsxs)(ex, {
                  children: [
                      null != r &&
                          (0, a.jsx)(eM, {
                              icon: (0, a.jsx)(tR.E, { size: "custom", color: "currentColor", width: 16, height: 16 }),
                              name: (0, a.jsx)(eE.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: P.intl.string(P.t.ZRnON3),
                              }),
                              description: (0, a.jsx)(eE.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: E,
                              }),
                          }),
                      u &&
                          null != o &&
                          (0, a.jsx)(eM, {
                              icon: (0, a.jsx)(tD.g, { size: "custom", color: "currentColor", width: 16, height: 16 }),
                              name: (0, a.jsx)(eE.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: P.intl.string(P.t["TJ8/tE"]),
                              }),
                              description: (0, a.jsx)(eE.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: (0, a.jsx)(th.A, { deadline: o, showUnits: !0, stopAtOneSec: !0 }),
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
var tx = n(534890),
    tU = n(173936),
    tf = n(477262);
function tp(e) {
    let {
            userId: t,
            guildId: n,
            messagesCount: l,
            linksCount: r,
            mediaCount: s,
            auditLogs: E,
            isLoadingAuditLogs: _,
            hasAuditLogsError: c,
        } = e,
        d = (0, u.bG)([M.Ay], () => M.Ay.getGuildSidebarState(n), [n]),
        A = E.length,
        g = new Intl.NumberFormat(P.intl.currentLocale).format(l),
        T = new Intl.NumberFormat(P.intl.currentLocale).format(r),
        I = new Intl.NumberFormat(P.intl.currentLocale).format(s),
        N = new Intl.NumberFormat(P.intl.currentLocale).format(A),
        G = i.useCallback(
            async (e) => {
                if (null == d) return;
                let l = eq(t, e, { include_nsfw: !0 });
                await (0, x.z)(n, t, d.baseChannelId, { modViewPanel: j.g.MESSAGE_HISTORY, additionalSearchQuery: l });
            },
            [n, d, t],
        ),
        O = i.useCallback(async () => {
            null != d && (await (0, x.z)(n, t, d.baseChannelId, { modViewPanel: j.g.AUDIT_LOG }));
        }, [n, d, t]);
    return (0, a.jsx)(e$.D, {
        label: P.intl.string(P.t.vCn2Tn),
        children: (0, a.jsxs)(ex, {
            children: [
                (0, a.jsx)(eM, {
                    icon: (0, a.jsx)(tx.o, { size: "custom", color: "currentColor", width: 16, height: 16 }),
                    name: (0, a.jsx)(eE.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: P.intl.string(P.t.OIgYlQ),
                    }),
                    description:
                        -1 === l
                            ? (0, a.jsx)(o.y, { type: o.t.SPINNING_CIRCLE, className: X.S })
                            : (0, a.jsx)(eE.E, {
                                  variant: "text-sm/semibold",
                                  color: "interactive-text-default",
                                  children: g,
                              }),
                    onNavigate: l > 0 ? () => G(eW.MESSAGES) : void 0,
                }),
                (0, a.jsx)(eM, {
                    icon: (0, a.jsx)(tU.q, { size: "custom", width: 16, height: 16 }),
                    name: (0, a.jsx)(eE.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: P.intl.string(P.t.DFSvTt),
                    }),
                    description:
                        -1 === r
                            ? (0, a.jsx)(o.y, { type: o.t.SPINNING_CIRCLE, className: X.S })
                            : (0, a.jsx)(eE.E, {
                                  variant: "text-sm/semibold",
                                  color: "interactive-text-default",
                                  children: T,
                              }),
                    onNavigate: r > 0 ? () => G(eW.LINKS) : void 0,
                }),
                (0, a.jsx)(eM, {
                    icon: (0, a.jsx)(tf.s, { size: "custom", width: 16, height: 16 }),
                    name: (0, a.jsx)(eE.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: P.intl.string(P.t["Aw9+/M"]),
                    }),
                    description:
                        -1 === s
                            ? (0, a.jsx)(o.y, { type: o.t.SPINNING_CIRCLE, className: X.S })
                            : (0, a.jsx)(eE.E, {
                                  variant: "text-sm/semibold",
                                  color: "interactive-text-default",
                                  children: I,
                              }),
                    onNavigate: s > 0 ? () => G(eW.MEDIA) : void 0,
                }),
                (0, a.jsx)(eM, {
                    icon: (0, a.jsx)(e0.i, { size: "custom", width: 16, height: 16 }),
                    name: (0, a.jsx)(eE.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: P.intl.string(P.t.SPWLyT),
                    }),
                    description: _
                        ? (0, a.jsx)(o.y, { type: o.t.SPINNING_CIRCLE, className: X.S })
                        : c
                          ? (0, a.jsx)(eE.E, {
                                variant: "text-sm/semibold",
                                color: "text-feedback-critical",
                                children: P.intl.string(P.t.Ww5Tjy),
                            })
                          : (0, a.jsx)(eE.E, {
                                variant: "text-sm/semibold",
                                color: "interactive-text-default",
                                children: N,
                            }),
                    onNavigate: !_ && A > 0 ? O : void 0,
                }),
            ],
        }),
    });
}
function tk(e) {
    let { onClose: t, trailingAction: n } = e;
    return (0, a.jsxs)("div", {
        className: X.wx,
        children: [
            (0, a.jsxs)("div", {
                className: X.qd,
                children: [
                    (0, a.jsx)(eX.A, { width: 16, height: 16 }),
                    (0, a.jsx)(k.D, { variant: "heading-md/semibold", children: P.intl.string(P.t.cf5lgh) }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: X.$s,
                children: [
                    n,
                    (0, a.jsx)(f.D, {
                        onClick: (e) => {
                            e.stopPropagation(), t();
                        },
                        children: (0, a.jsx)(F.e, { shortcut: "esc", keyClassName: X.Wb, className: X.ti }),
                    }),
                ],
            }),
        ],
    });
}
function tF(e) {
    let { userId: t, guildId: n, location: l, className: r, onClose: s, onNavigate: u } = e,
        o = (0, ei.bG)([O.default], () => O.default.getUser(t), [t]),
        c = (0, ei.bG)([ed.Ay], () => ed.Ay.getMember(n, t), [n, t]),
        d = (function (e, t) {
            let { key: n, state: l } = eZ(e, t, "messages", void 0),
                { key: r, state: a } = eZ(e, t, "links", void 0),
                { key: s, state: E } = eZ(e, t, "media", void 0),
                u = i.useMemo(() => eq(e, "all_counts", void 0), [e, void 0]),
                o = i.useMemo(
                    () => ({
                        tabs: { messages: eq(e, "messages", u), links: eq(e, "links", u), media: eq(e, "media", u) },
                        track_exact_total_hits: !0,
                        include_nsfw: !0,
                    }),
                    [e, u],
                ),
                _ = i.useRef(null),
                c = i.useRef(0),
                [d, A] = i.useState({}),
                g = i.useCallback(
                    (e) => {
                        let t = e.messages,
                            l = e.links,
                            a = e.media;
                        eJ(n, t), eJ(r, l), eJ(s, a);
                    },
                    [r, s, n],
                ),
                T = i.useCallback(
                    (e) => {
                        g({ messages: e, links: e, media: e });
                    },
                    [g],
                ),
                I = i.useCallback(async () => {
                    let e = c.current + 1;
                    (c.current = e), _.current?.cancel();
                    let n = new eH.DX(t, Q.I4_.GUILD, u, o);
                    (_.current = n), T({ searchTabFetcher: n, messageCount: -1, lastMessage: null });
                    let l = null;
                    try {
                        let e = await n.makeRequest({ rejectWithError: !1 });
                        l = e?.body;
                    } catch (e) {
                        l = null;
                    }
                    if (e === c.current) {
                        if (null == l) T({ messageCount: 0, lastMessage: null });
                        else {
                            let e = l.tabs.messages,
                                t = l.tabs.links,
                                n = l.tabs.media;
                            g({
                                messages: { messageCount: e?.total_results ?? 0, lastMessage: e?.messages[0] ?? null },
                                links: { messageCount: t?.total_results ?? 0, lastMessage: t?.messages[0] ?? null },
                                media: { messageCount: n?.total_results ?? 0, lastMessage: n?.messages[0] ?? null },
                            });
                        }
                        A({});
                    }
                }, [t, o, u, T, g]);
            i.useEffect(() => {
                let e = setTimeout(() => {
                    I();
                });
                return () => {
                    _.current?.cancel(), clearTimeout(e);
                };
            }, [I]);
            let N = l?.messageCount ?? -1,
                G = a?.messageCount ?? -1,
                O = E?.messageCount ?? -1;
            return {
                messagesCount: N,
                linksCount: G,
                mediaCount: O,
                isLoading: -1 === N || -1 === G || -1 === O,
                refresh: I,
            };
        })(t, n),
        A = el(n, t),
        [g, I] = i.useState(!1),
        G = i.useRef(!0);
    i.useEffect(
        () => (
            (G.current = !0),
            () => {
                G.current = !1;
            }
        ),
        [],
    );
    let S = i.useCallback(async () => {
            await Promise.all([
                _.A.requestMembersById(n, [t]),
                (0, T.jo)(n, [t]),
                (0, N.A)(t, void 0, { guildId: n, dispatchWait: !0 }),
            ]);
        }, [n, t]),
        m = i.useCallback(() => {
            I(!0),
                Promise.all([
                    S(),
                    d.refresh(),
                    A.refresh(),
                    new Promise((e) => {
                        setTimeout(e, 1e3);
                    }),
                ]).finally(() => {
                    G.current && I(!1);
                });
        }, [A, S, d]),
        R = (0, a.jsx)(f.D, {
            className: E()(X.F3, { [X.r9]: g }),
            "aria-label": P.intl.string(P.t.wzzjk9),
            "aria-disabled": g,
            onClick: g ? void 0 : m,
            children: g
                ? (0, a.jsx)("div", { className: X.Zx, children: (0, a.jsx)(eP.n, { themed: !0, dotRadius: 2 }) })
                : (0, a.jsx)(ev.f, { size: "xs", color: "currentColor" }),
        });
    return null == o
        ? null
        : (0, a.jsxs)("div", {
              className: E()(X.kL, r),
              children: [
                  (0, a.jsx)(tk, { onClose: s, trailingAction: R }),
                  (0, a.jsxs)(U.Ip, {
                      className: X.WH,
                      children: [
                          (0, a.jsx)("div", { className: X.uG, children: null != c && (0, a.jsx)(tM, { member: c }) }),
                          (0, a.jsx)("div", {
                              className: X.uG,
                              children: (0, a.jsx)(tp, {
                                  userId: t,
                                  guildId: n,
                                  messagesCount: d.messagesCount,
                                  linksCount: d.linksCount,
                                  mediaCount: d.mediaCount,
                                  auditLogs: A.logs,
                                  isLoadingAuditLogs: A.isLoading,
                                  hasAuditLogsError: A.hasError,
                              }),
                          }),
                          (0, a.jsx)("div", {
                              className: X.uG,
                              children: null != c && (0, a.jsx)(tm, { member: c, onNavigate: u }),
                          }),
                          (0, a.jsx)("div", { className: X.uG, children: null != c && (0, a.jsx)(ta, { member: c }) }),
                          (0, a.jsx)("div", {
                              className: X.uG,
                              children: (0, a.jsx)(te, { userId: t, guildId: n, member: c }),
                          }),
                      ],
                  }),
              ],
          });
}
var tj = n(689175),
    tP = n(964486),
    tv = n(738768),
    tX = n(457699),
    tb = n(320095),
    ty = n(465364),
    tB = n(187654),
    tV = n(383233),
    tH = n(375256);
function tw(e) {
    let { userId: t, guildId: n, location: l, className: r, onNavigate: s } = e,
        o = i.useRef(null),
        _ = (0, u.bG)([M.Ay], () => M.Ay.getGuildSidebarState(n), [n]),
        c = i.useRef(0),
        [d, A] = i.useState(_?.details.additionalSearchQuery ?? {}),
        g = (function (e, t, n, l) {
            let { addtionalQuery: r, shouldDispatch: a = !1 } = l,
                s = i.useMemo(() => eY(e, t, n, r), [e, t, n, r]),
                E = eQ(s),
                u = (0, L.A)(s),
                [o, _] = i.useState({});
            return (
                i.useEffect(() => {
                    if (u !== s) {
                        let l = eq(e, n, r),
                            i = new eH.MS(t, Q.I4_.GUILD, l);
                        eJ(s, { searchFetcher: i, messageCount: -1, lastMessage: null }),
                            setTimeout(() => {
                                i.fetch(
                                    (e) => {
                                        let n = e.body,
                                            l = n.messages[0];
                                        eJ(s, {
                                            searchFetcher: i,
                                            result: n,
                                            messageCount: n.total_results,
                                            lastMessage: l,
                                        }),
                                            _({}),
                                            a &&
                                                eV.h.dispatch({
                                                    type: "MOD_VIEW_SEARCH_MESSAGES_SUCCESS",
                                                    guildId: t,
                                                    data: [
                                                        {
                                                            id: t,
                                                            analyticsId: n.analytics_id,
                                                            totalResults: n.total_results,
                                                            channels: n.channels ?? [],
                                                            messages: n.messages,
                                                            threads: n.threads ?? [],
                                                            members: (n.members ?? []).map((e) => (0, ew.A)(e)),
                                                            doingHistoricalIndex: n.doing_deep_historical_index,
                                                            documentsIndexed: n.documents_indexed,
                                                            cursor: null,
                                                        },
                                                    ],
                                                });
                                    },
                                    (e) => {},
                                    (e) => {
                                        eJ(s, { messageCount: 0, lastMessage: null }), _({});
                                    },
                                );
                            });
                    }
                    return () => {};
                }, [e, t, E, s, n, r, u, a]),
                E ?? eK
            );
        })(t, n, "messages", { addtionalQuery: d, shouldDispatch: !0 }),
        T = (0, u.bG)([O.default], () => O.default.getUser(t), [t]);
    (0, tP.u5)(() => {
        let e = _?.details.scrollOffset;
        null != e && o.current?.scrollTo({ to: e, animate: !1 });
    });
    let I = i.useCallback(
            (e) => {
                null == _ ||
                    ((c.current = e.target.scrollTop),
                    (0, x.z)(n, t, _.baseChannelId, {
                        modViewPanel: j.g.MESSAGE_HISTORY,
                        additionalSearchQuery: d,
                        scrollOffset: c.current,
                    }));
            },
            [n, t, _, d],
        ),
        N = (0, y.throttle)(I, 300),
        G = i.useCallback(
            (e) => {
                if (null == _) return;
                let l = { ...d, offset: 25 * e };
                A(l),
                    (0, x.z)(n, t, _.baseChannelId, {
                        modViewPanel: j.g.MESSAGE_HISTORY,
                        additionalSearchQuery: l,
                        scrollOffset: c.current,
                    });
            },
            [n, t, _, d],
        ),
        S = d?.offset ?? 0,
        [m, R] = i.useState(!1),
        D = (0, u.bG)([tX.A], () => {
            if (null == g.result) return [];
            let e = (0, tv.wG)("");
            return g.result.messages
                .map((e) => {
                    let [t] = e;
                    return (0, tb.rh)(t);
                })
                .map((t) => {
                    let n = tX.A.getMessage(t.id, t.channel_id),
                        l = new tV.Ay(t);
                    return (
                        null != n && (l = l.merge({ attachments: n.attachments, embeds: n.embeds })),
                        (l = l.set(
                            "customRenderedContent",
                            (0, ty.Ay)(l, { postProcessor: e, allowHeading: !0, allowList: !0 }),
                        ))
                    );
                });
        }, [g.result]),
        { blockCount: h, ignoreCount: C } = (0, u.cf)([J.A], () => {
            let e = 0,
                t = 0;
            return (
                D.forEach((n) => {
                    J.A.isBlockedForMessage(n) ? e++ : J.A.isIgnoredForMessage(n) && t++;
                }),
                { blockCount: e, ignoreCount: t }
            );
        }),
        U = i.useMemo(
            () =>
                null == g.result
                    ? {
                          documentsIndexed: 0,
                          isSearching: !0,
                          isIndexing: !1,
                          isHistoricalIndexing: !1,
                          offset: S,
                          totalResults: 0,
                          hasError: !1,
                          showBlockedResults: m,
                          showNoResultsAlt: !1,
                      }
                    : {
                          documentsIndexed: g.result.documents_indexed ?? 0,
                          isSearching: !1,
                          isIndexing: g.result.doing_deep_historical_index ?? !1,
                          isHistoricalIndexing: g.result.doing_deep_historical_index ?? !1,
                          offset: S,
                          totalResults: g.result.total_results ?? 0,
                          hasError: !1,
                          showBlockedResults: m,
                          showNoResultsAlt: !1,
                      },
            [g.result, S, m],
        );
    return null == T || null == U
        ? null
        : (0, a.jsxs)("div", {
              className: E()(X.kL, r),
              children: [
                  (0, a.jsx)(b, { guildId: n, userId: t, onNavigate: s }),
                  (0, a.jsx)(tj.Ch, {
                      className: tH.W,
                      ref: o,
                      onScroll: N,
                      children: (0, a.jsx)(tB.A, {
                          messages: D,
                          search: U,
                          renderEmbeds: !0,
                          blockCount: h,
                          ignoreCount: C,
                          scrollTo: Q.tEg,
                          onPageChange: G,
                          onBlockedResultsClick: R,
                      }),
                  }),
              ],
          });
}
var tW = n(111956),
    tY = n.n(tW),
    tK = n(270003),
    tz = n(892547),
    tJ = n(640708),
    tQ = n(468689),
    tq = n(66835);
function tZ(e) {
    let { permission: t, roleIds: n, guild: l, specMap: r, categoryTitle: s, userId: u } = e,
        o = (0, ei.yK)([tl.A], () => tl.A.getManyRoles(l.id, n)),
        _ = Q.xBc[t],
        c = r[_.toString()]?.title ?? (0, tE.hx)(_),
        d = r[_.toString()]?.description ?? "",
        A = (0, tu.Eo)(_, tN),
        g = tI.includes(t),
        T = n.length,
        I = (0, ei.bG)([tr.A], () => tr.A.can(Q.xBc.MANAGE_ROLES, l), [l]),
        N = i.useCallback(
            async (e) => {
                I && (await tQ.A.open(l.id, Q.BEX.ROLES), await tQ.A.selectRole(e));
            },
            [I, l.id],
        );
    return (0, a.jsxs)("div", {
        className: E()(tq.wT, { [tq.aE]: A }),
        children: [
            (0, a.jsxs)("div", {
                className: tq.iY,
                children: [
                    (0, a.jsxs)("div", {
                        className: tq.gH,
                        children: [
                            (0, a.jsx)(eE.E, { variant: "text-md/medium", color: "text-strong", children: c }),
                            null != s &&
                                (0, a.jsxs)("div", {
                                    className: tq.OQ,
                                    children: [
                                        (0, a.jsx)(eE.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: s,
                                        }),
                                        A &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(tJ.A, {
                                                        height: 4,
                                                        width: 4,
                                                        "aria-hidden": "true",
                                                        color: e6.A.colors.ICON_MUTED.css,
                                                    }),
                                                    (0, a.jsx)(es.m, {
                                                        text: P.intl.string(P.t.GZvXuP),
                                                        children: (0, a.jsxs)(f.D, {
                                                            className: tq.Dc,
                                                            children: [
                                                                (0, a.jsx)(ti.m, {
                                                                    size: "custom",
                                                                    width: 12,
                                                                    height: 12,
                                                                    color: e6.A.colors.TEXT_BRAND,
                                                                }),
                                                                (0, a.jsx)(eE.E, {
                                                                    variant: "text-xs/normal",
                                                                    color: "text-brand",
                                                                    children: P.intl.string(P.t.k7Kqj7),
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        !A &&
                                            g &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(tJ.A, {
                                                        height: 4,
                                                        width: 4,
                                                        "aria-hidden": "true",
                                                        color: e6.A.colors.ICON_MUTED.css,
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: tq.Dc,
                                                        children: (0, a.jsx)(eE.E, {
                                                            variant: "text-xs/normal",
                                                            color: "text-muted",
                                                            children: P.intl.string(P.t.IfqUEM),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                        ],
                    }),
                    (0, a.jsx)(eE.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: P.intl.format(P.t.KmJI4A, { roleCount: T }),
                    }),
                ],
            }),
            null != d &&
                (0, a.jsx)("div", {
                    className: tq.Dp,
                    children: (0, a.jsx)(eE.E, { variant: "text-sm/normal", color: "text-subtle", children: d }),
                }),
            (0, a.jsx)("div", {
                className: tq.SY,
                children: o.map((e) =>
                    e.id === u
                        ? (0, a.jsx)(
                              "div",
                              {
                                  className: tq.Zf,
                                  children: (0, a.jsx)("div", {
                                      className: tq.o9,
                                      children: (0, a.jsx)(eE.E, {
                                          variant: "text-xs/medium",
                                          color: "text-default",
                                          children: P.intl.string(P.t.pclUFJ),
                                      }),
                                  }),
                              },
                              e.id,
                          )
                        : (0, a.jsx)(
                              f.D,
                              {
                                  className: E()(tq.Zf, { [tq.LL]: I && !(0, td.Oy)(e) }),
                                  onClick: () => N(e.id),
                                  children: (0, a.jsx)(tn.A, { role: e, guildId: l.id, className: tq.o9 }),
                              },
                              e.id,
                          ),
                ),
            }),
        ],
    });
}
function t$(e, t) {
    return t.toLowerCase().includes(e.toLowerCase());
}
function t0(e) {
    let { userId: t, guildId: n, location: l, className: r, onNavigate: s } = e,
        u = (0, ei.bG)([O.default], () => O.default.getUser(t), [t]),
        o = (0, ei.bG)([eA.A], () => eA.A.getGuild(n), [n]),
        _ = (0, ei.bG)([ed.Ay], () => ed.Ay.getMember(n, t), [n, t]),
        c = tG(t, n, tT),
        d = Object.keys(c).length,
        A = i.useMemo(() => (null != o ? to.A.getGuildPermissionSpecMap(o) : null), [o]),
        g = i.useMemo(() => (null != o ? to.A.generateGuildPermissionSpec(o) : null), [o]),
        [T, I] = i.useState(""),
        [N, G] = i.useState(""),
        S = i.useMemo(() => tY()(G, 300), []),
        m = i.useCallback(
            (e) => {
                I(e), S(e);
            },
            [S],
        ),
        R = i.useCallback(() => {
            I(""), G("");
        }, []),
        D = i.useMemo(() => {
            if (null == o || null == A || null == _) return null;
            if (0 === d) return (0, a.jsx)(eE.E, { variant: "text-sm/normal", children: P.intl.string(P.t.DEBGqA) });
            let e = [];
            return (
                g?.forEach((n) => {
                    n.permissions.forEach((l) => {
                        let r = l.flag,
                            i = tT.find((e) => Q.xBc[e] === r);
                        if (null == i) return;
                        let s = c[i];
                        if (null != s) {
                            if (N.length > 0) {
                                let e = A[r.toString()]?.title ?? (0, tE.hx)(r),
                                    t = A[r.toString()]?.description?.toString() ?? "",
                                    l = n.title,
                                    a = (0, tu.Eo)(r, tN),
                                    s = tI.includes(i),
                                    E = a ? P.intl.string(P.t.k7Kqj7) : s ? P.intl.string(P.t.IfqUEM) : null,
                                    u = t$(N, e),
                                    o = t$(N, t),
                                    _ = t$(N, l),
                                    c = null != E && t$(N, E);
                                if (!u && !o && !_ && !c) return;
                            }
                            e.push(
                                (0, a.jsx)(
                                    tZ,
                                    {
                                        permission: i,
                                        roleIds: s,
                                        guild: o,
                                        specMap: A,
                                        categoryTitle: n.title,
                                        userId: t,
                                    },
                                    i,
                                ),
                            );
                        }
                    });
                }),
                e
            );
        }, [o, A, _, d, g, c, N, t]);
    return null == u
        ? null
        : null == _
          ? (0, a.jsxs)("div", {
                className: E()(X.kL, r),
                children: [
                    (0, a.jsx)(b, { guildId: n, userId: t, onNavigate: s }),
                    (0, a.jsx)(U.Ip, {
                        className: tq.b3,
                        children: (0, a.jsx)(tK.n, {
                            label: P.intl.string(P.t.BBWnpr),
                            children: (0, a.jsx)("div", {
                                className: tq.xV,
                                children: (0, a.jsx)(eE.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: P.intl.string(P.t.UsD2YP),
                                }),
                            }),
                        }),
                    }),
                ],
            })
          : (0, a.jsxs)("div", {
                className: E()(X.kL, r),
                children: [
                    (0, a.jsx)(b, { guildId: n, userId: t, onNavigate: s }),
                    (0, a.jsx)(U.Ip, {
                        className: tq.b3,
                        children: (0, a.jsx)(tK.n, {
                            label: P.intl.string(P.t.BBWnpr),
                            children: (0, a.jsxs)("div", {
                                className: tq.xV,
                                children: [
                                    (0, a.jsx)(tz.I, {
                                        size: "sm",
                                        query: T,
                                        placeholder: P.intl.string(P.t["yD9+dN"]),
                                        onChange: m,
                                        onClear: R,
                                        autoComplete: "off",
                                        inputProps: { autoCapitalize: "none", autoCorrect: "off", spellCheck: "false" },
                                    }),
                                    D,
                                ],
                            }),
                        }),
                    }),
                ],
            });
}
function t1(e, t) {
    return (n) => {
        if (0 === n) return "auto";
        let l = "forwards" === t.current,
            r = n > 0,
            a = !1;
        return (
            r && l && "left" === e && (a = !0),
            r && !l && "right" === e && (a = !0),
            !r && l && "right" === e && (a = !0),
            r || l || "left" !== e || (a = !0),
            a ? `calc(${100 * Math.abs(n)}% + ${Math.round(12 * Math.abs(n))}px)` : "auto"
        );
    };
}
function t6(e) {
    let { userId: t, guildId: n, onClose: l, analyticsLocation: r, className: s } = e,
        E = (0, u.bG)([M.Ay], () => M.Ay.getGuildSidebarState(n), [n]),
        o = E?.details.modViewPanel ?? j.g.INFO,
        _ = (0, L.A)(t),
        c = null == o ? null : o === j.g.INFO ? "backwards" : "forwards",
        d = (0, R.A)(c),
        { reducedMotion: A } = i.useContext(D.C),
        g = i.useCallback(
            (e) => {
                null != E && (0, x.z)(n, t, E.baseChannelId, { modViewPanel: e });
            },
            [E, n, t],
        ),
        T = i.useMemo(
            () => ({
                [Q.IWg.CLOSE_MODAL]: {
                    binds: ["esc"],
                    comboKeysBindGlobal: !0,
                    action: () => (o === j.g.INFO ? l() : g(j.g.INFO)),
                },
            }),
            [l, o, g],
        );
    i.useEffect(() => (C.A.enable(), C.A.enableTemp(T), () => C.A.disableTemp()), [T]);
    let I = (0, h.p)(
        o,
        { value: 0, from: { value: 1 }, enter: { value: 0 }, leave: { value: -1 } },
        _ !== t ? "animate-never" : "animate-always",
    );
    return (0, a.jsx)(m.animated.div, {
        style: { position: "relative", height: "100%", flex: 1, overflow: "hidden" },
        children: I((e, r, i) => {
            let { key: E } = i;
            return (0, a.jsx)(
                m.animated.div,
                {
                    style: {
                        position: "absolute",
                        display: "flex",
                        flexDirection: "column",
                        backfaceVisibility: "hidden",
                        width: "100%",
                        height: "100%",
                        ...(A.enabled
                            ? { opacity: e.value?.to((e) => 1 - Math.abs(e)) }
                            : { left: e.value?.to(t1("left", d)), right: e.value?.to(t1("right", d)) }),
                    },
                    children: (function (e) {
                        switch (e) {
                            case j.g.INFO:
                                return (0, a.jsx)(tF, {
                                    userId: t,
                                    guildId: n,
                                    onClose: l,
                                    onNavigate: g,
                                    className: s,
                                });
                            case j.g.MESSAGE_HISTORY:
                                return (0, a.jsx)(tw, {
                                    userId: t,
                                    guildId: n,
                                    onNavigate: () => g(j.g.INFO),
                                    className: s,
                                });
                            case j.g.PERMISSIONS:
                                return (0, a.jsx)(t0, {
                                    userId: t,
                                    guildId: n,
                                    onNavigate: () => g(j.g.INFO),
                                    className: s,
                                });
                            case j.g.AUDIT_LOG:
                                return (0, a.jsx)(ej, { userId: t, guildId: n, onNavigate: g, className: s });
                            default:
                                return null;
                        }
                    })(r),
                },
                E,
            );
        }),
    });
}
var t3 = n(97808),
    t2 = n(778712),
    t7 = n(789645),
    t5 = n(192308),
    t4 = n(905499),
    t9 = n(215026),
    t8 = n(473935),
    ne = n(308528),
    nt = n(398590),
    nn = n(991982),
    nl = n(838111),
    nr = n(351001),
    na = n(504049),
    ni = n(913758),
    ns = n(534400),
    nE = n(280450),
    nu = n(290863),
    no = n(461213),
    n_ = n(957565),
    nc = n(427262),
    nd = n(743981),
    nA = n(637498);
function ng(e) {
    let { user: t, guildId: n, onClose: l } = e,
        r = t.id,
        i = (0, ei.bG)(
            [no.A, nu.A, nE.default],
            () => (r === nE.default.getId() ? no.A.getStatus() : nu.A.getStatus(r, n)),
            [r, n],
        );
    return (0, a.jsxs)("div", {
        className: nA.mY,
        children: [
            (0, a.jsxs)("div", {
                className: nA.FD,
                children: [
                    (0, a.jsx)("div", {
                        className: nA.Wn,
                        children: (0, a.jsx)(t3.eu, {
                            src: t.getAvatarURL(n, 48),
                            "aria-label": t.username,
                            size: t2._3.SIZE_48,
                            status: i,
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: nA.oS,
                        children: [
                            (0, a.jsxs)("div", {
                                className: nA.K$,
                                children: [
                                    (0, a.jsx)(eE.E, {
                                        variant: "text-lg/medium",
                                        children: (0, a.jsx)(eu.g, {
                                            name: eh.Ay.getName(n, null, t),
                                            colorString: e6.A.colors.TEXT_STRONG.css,
                                            colorStrings: null,
                                        }),
                                    }),
                                    (0, a.jsx)(ns.Ay, {
                                        primaryGuild: t?.primaryGuild,
                                        userId: t?.id,
                                        contextGuildId: n,
                                        badgeSize: nd.Sl.SIZE_16,
                                        textVariant: "heading-md/semibold",
                                        className: nA.Dz,
                                        containerClassName: nA.UL,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(eE.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: nc.Ay.getUserTag(t),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(eE.E, {
                variant: "text-md/medium",
                color: "text-default",
                children: (0, a.jsx)(f.D, {
                    className: nA.d4,
                    onClick: l,
                    children: (0, a.jsx)(t7.P, { size: "md", color: "currentColor" }),
                }),
            }),
        ],
    });
}
function nT(e) {
    let { tag: t = "div", text: n, disabled: l, children: r, onClick: i, ...s } = e;
    return (0, a.jsx)(es.m, {
        text: n,
        children: (0, a.jsx)(f.D, {
            ...s,
            tag: t,
            "aria-label": n,
            className: E()(nA.YB, { [nA.aA]: l }),
            onClick: l ? void 0 : i,
            children: (0, a.jsx)("div", { className: nA.MU, children: r }),
        }),
    });
}
function nI(e) {
    let { user: t, member: l, guildId: r, onClose: i, moderatorReportId: s } = e,
        E = (0, ei.bG)([eA.A], () => eA.A.getGuild(r)),
        {
            canKickUser: u,
            canBanUser: o,
            canModerateMembers: _,
        } = (0, ei.cf)(
            [tr.A, O.default, eA.A],
            () => ({
                canKickUser: null != l && (0, nr.L7)(t, E),
                canBanUser: (0, nr.EZ)(t, E),
                canModerateMembers: null != l && null != E && (0, nl.b)(E.id, t.id, [O.default, eA.A, tr.A]),
            }),
            [t, E, l],
        ),
        c = null != l && (0, tL.Z)(l),
        { analyticsLocations: d, newestAnalyticsLocation: A } = (0, g.Ay)(),
        T = (0, na.$9)(r, { targetUserId: t.id, location: A, locations: d }),
        I = (0, ei.bG)([nE.default], () => nE.default.getId() === t?.id);
    return (0, a.jsxs)("div", {
        className: nA.E_,
        children: [
            (0, a.jsx)(nT, {
                disabled: I,
                text: P.intl.string(P.t["g33r/P"]),
                onClick: () => {
                    i?.(), ni.A.isOpen() && (0, nt.jH)(), ne.A.openPrivateChannel({ recipientIds: t.id });
                },
                children: (0, a.jsx)(tx.o, { size: "custom", color: "currentColor", width: 24, height: 24 }),
            }),
            null != l &&
                (0, a.jsx)(nT, {
                    disabled: !u,
                    text: P.intl.string(P.t["3glT6Z"]),
                    onClick: () => {
                        (0, t5.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("97660"), n.e("91671"), n.e("40243")]).then(
                                n.bind(n, 547166),
                            );
                            return (n) => (0, a.jsx)(e, { ...n, location: A, guildId: r, user: t, modReportId: s });
                        });
                    },
                    children: (0, a.jsx)(t4.N, {
                        size: "custom",
                        width: 24,
                        height: 24,
                        color: e6.A.colors.TEXT_DEFAULT.css,
                    }),
                }),
            (0, a.jsx)(nT, {
                disabled: !o,
                text: P.intl.string(P.t["5MBJ5M"]),
                onClick: () => {
                    (0, t5.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("33847"), n.e("91671"), n.e("2504")]).then(
                            n.bind(n, 333179),
                        );
                        return (n) => (0, a.jsx)(e, { ...n, location: A, guildId: r, user: t, modReportId: s });
                    });
                },
                children: (0, a.jsx)(t9.w, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: e6.A.colors.TEXT_DEFAULT.css,
                }),
            }),
            null != l &&
                (0, a.jsx)(nT, {
                    disabled: !_,
                    text: c ? P.intl.string(P.t.N86XcP) : P.intl.string(P.t.kTlLrz),
                    onClick: () => {
                        c
                            ? (0, nn.Y)({ guildId: l.guildId, userId: l.userId, anaylticsLocations: d })
                            : (0, nn.R)({
                                  guildId: l.guildId,
                                  userId: l.userId,
                                  anaylticsLocations: d,
                                  modReportId: s,
                              });
                    },
                    children: (0, a.jsx)(tD.g, {
                        size: "custom",
                        width: 24,
                        height: 24,
                        color: e6.A.colors.TEXT_DEFAULT.css,
                    }),
                }),
            (0, a.jsx)(nT, {
                text: P.intl.string(P.t.IHTjzA),
                onClick: () => {
                    T(na.Nj.COPY_ID), (0, n_.C)(t.id);
                },
                disabled: !n_.p5,
                children: (0, a.jsx)(t8.L, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: e6.A.colors.TEXT_DEFAULT.css,
                }),
            }),
        ],
    });
}
function nN(e) {
    let { userId: t, guildId: n, onClose: l, moderatorReportId: r } = e,
        i = (0, ei.bG)([O.default], () => O.default.getUser(t), [t]),
        s = (0, ei.bG)([ed.Ay], () => ed.Ay.getMember(n, t), [n, t]);
    return null == i
        ? null
        : (0, a.jsxs)("div", {
              className: nA.kL,
              children: [
                  (0, a.jsx)(ng, { user: i, guildId: n, onClose: l }),
                  (0, a.jsx)(nI, { user: i, member: s, guildId: n, onClose: l, moderatorReportId: r }),
              ],
          });
}
var nG = n(271730);
function nO(e) {
    let { userId: t, guildId: n, onClose: l, className: r, infoPanelClassName: s, style: m, moderatorReportId: R } = e,
        D = (0, S.q)(n),
        h = (0, u.bG)([O.default], () => O.default.getUser(t), [t]),
        [L, C] = i.useState(null == h),
        { analyticsLocations: M } = (0, g.Ay)(A.A.GUILD_MEMBER_MOD_VIEW),
        x = (0, I.Ay)(t, n),
        U = (0, c.Ay)();
    return (i.useEffect(() => {
        D || l();
    }, [D, l]),
    i.useEffect(() => {
        null != h && C(!1);
    }, [h]),
    (0, d.Eq)({ [n]: [t] }, "GuildMemberModViewSidebar"),
    i.useEffect(() => {
        let e = !1;
        return (
            (async function () {
                let r = [
                    _.A.requestMembersById(n, [t]),
                    (0, T.jo)(n, [t]),
                    (0, N.A)(t, void 0, { guildId: n, dispatchWait: !0 }),
                ];
                await Promise.all(r), e || (null == O.default.getUser(t) && l(), C(!1));
            })(),
            () => {
                e = !0;
            }
        );
    }, [n, t, l]),
    D)
        ? L || null == h
            ? (0, a.jsx)("div", {
                  className: E()(nG.so, nG.g4, r),
                  style: m,
                  children: (0, a.jsx)(o.y, {
                      animated: !0,
                      type: L ? o.y.Type.SPINNING_CIRCLE : o.y.Type.CHASING_DOTS,
                  }),
              })
            : (0, a.jsx)(g.f5, {
                  value: M,
                  children: (0, a.jsx)("div", {
                      className: E()(nG.so, r),
                      style: m,
                      children: (0, a.jsx)(G.A, {
                          user: h,
                          displayProfile: x,
                          themeType: null,
                          themeOverride: U,
                          forceShowPremium: !0,
                          className: nG.a2,
                          children: (0, a.jsxs)("div", {
                              className: nG.WH,
                              children: [
                                  (0, a.jsx)(nN, { userId: t, guildId: n, onClose: l, moderatorReportId: R }),
                                  (0, a.jsx)(t6, { userId: t, guildId: n, onClose: l, className: s }),
                              ],
                          }),
                      }),
                  }),
              })
        : null;
}
