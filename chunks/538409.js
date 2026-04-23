n.r(t), n.d(t, { default: () => t8 });
var l,
    a,
    r = n(627968),
    i = n(64700),
    s = n(503698),
    E = n.n(s),
    _ = n(17928),
    o = n(289873),
    u = n(686956),
    c = n(475743),
    d = n(736653),
    A = n(80682),
    g = n(793574),
    T = n(688810),
    I = n(221950),
    N = n(999291),
    G = n(454719),
    O = n(946356),
    m = n(696451),
    S = n(287809),
    R = n(985925),
    D = n(419354),
    h = n(66455),
    L = n(844222),
    C = n(866323),
    M = n(775121),
    f = n(761640),
    x = n(901472),
    U = n(702841),
    p = n(534514),
    b = n(939249),
    F = n(475358),
    k = n(364522),
    P = n(881548),
    j = n(452027),
    v = n(179866),
    X = n(834730),
    B = n(947641),
    y = n(661531),
    V = n(807072),
    H = n(622629),
    w = n(111159),
    W = n(241541),
    Y = n(854378);
n(938796);
var K = n(665260),
    z = n(709977),
    J = n(773669),
    Q = n(71393),
    Z = n(935208),
    q = n(151781),
    $ = n(340837);
let ee = { month: "short", day: "numeric", year: "numeric" },
    et = { month: "numeric", day: "numeric", year: "numeric" };
var en =
        (((l = {})[(l.NO_GATE = 0)] = "NO_GATE"),
        (l[(l.NO_AGREEMENT = 1)] = "NO_AGREEMENT"),
        (l[(l.AGREED = 2)] = "AGREED"),
        l),
    el = n(589935),
    ea = n(309010),
    er = n(881636),
    ei = n(12466);
function es(e) {
    let { description: t, name: n, icon: l, onNavigate: a, className: i, missingNavIcon: s } = e;
    return (0, r.jsxs)(b.D, {
        onClick: a,
        className: E()(ei.ol, null != a && ei.xO, i),
        children: [
            null != l && (0, r.jsx)("div", { className: ei.bl, children: l }),
            null != n && (0, r.jsx)("div", { className: ei.NR, children: n }),
            (0, r.jsx)("div", { className: ei.uV, children: t }),
            null != a &&
                (0, r.jsx)("div", {
                    className: ei.Rp,
                    children: (0, r.jsx)(er.u, { size: "custom", width: 16, height: 16 }),
                }),
            null == a && null != s && (0, r.jsx)("div", { className: ei.Rp, children: s }),
        ],
    });
}
function eE(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: ei.Fz, children: t });
}
var e_ = n(652215),
    eo = n(985018),
    eu = n(645267);
function ec(e) {
    var t, n, l, a, s;
    let E,
        _,
        o,
        u,
        c,
        d,
        A,
        { member: g } = e,
        T = (0, U.bG)([Q.A], () => Q.A.getGuild(g.guildId), [g.guildId]),
        N = (function (e, t) {
            let n = (0, U.bG)([S.default], () => S.default.getUser(e), [e]),
                l = (0, U.bG)([m.Ay], () => m.Ay.getMember(t, e), [t, e]);
            if (null == n || null == l) return !1;
            let a = (0, K.Lt)(l.flags ?? 0, $.D.BYPASSES_VERIFICATION),
                r = n?.isPhoneVerified() || n?.isStaff(),
                i = l?.joinedAt != null;
            return n.verified || r || i || a;
        })(g.userId, g.guildId),
        G =
            ((t = g.userId),
            (n = g.guildId),
            (E = (0, U.bG)([S.default], () => S.default.getUser(t), [t])),
            (_ = (0, U.bG)([m.Ay], () => m.Ay.getMember(n, t), [n, t])),
            (o = (0, U.bG)([Q.A], () => Q.A.getGuild(n), [n])),
            (0, z.Qd)(o)
                ? null == E || null == _ || null == o
                    ? 1
                    : (0, K.Lt)(_.flags ?? 0, $.D.BYPASSES_VERIFICATION) ||
                        (0, K.Lt)(_.flags ?? 0, $.D.COMPLETED_ONBOARDING) ||
                        (null != _.isPending && !_.isPending)
                      ? 2
                      : 1
                : 0),
        O =
            ((l = g.userId),
            (u = (0, U.bG)([J.default], () => J.default.locale)),
            i.useMemo(() => new Date(Z.default.extractTimestamp(l)).toLocaleDateString(u, ee), [l, u])),
        R =
            ((a = g.userId),
            (s = g.guildId),
            (c = (0, U.bG)([J.default], () => J.default.locale)),
            (d = (0, U.bG)([m.Ay], () => m.Ay.getMember(s, a), [s, a])),
            (A = d?.joinedAt),
            i.useMemo(() => (null == A ? "" : new Date(A).toLocaleDateString(c, ee)), [A, c]));
    return (i.useEffect(() => {
        (0, I.uO)(g.guildId);
    }, [g.guildId]),
    null == T)
        ? null
        : (0, r.jsx)(j.D, {
              label: eo.intl.string(eo.t["ldCE/p"]),
              children: (0, r.jsxs)(eE, {
                  children: [
                      (0, r.jsx)(es, {
                          icon: (0, r.jsx)(v.i, { size: "custom", width: 16, height: 16 }),
                          name: (0, r.jsx)(X.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: eo.intl.string(eo.t.nzGai4),
                          }),
                          description: N
                              ? (0, r.jsx)(B.r, {
                                    size: "custom",
                                    width: 16,
                                    height: 16,
                                    color: y.A.colors.STATUS_POSITIVE,
                                })
                              : (0, r.jsx)(V.U, {
                                    size: "custom",
                                    width: 16,
                                    height: 16,
                                    color: y.A.colors.ICON_FEEDBACK_CRITICAL,
                                }),
                      }),
                      G !== en.NO_GATE &&
                          (0, r.jsx)(es, {
                              icon: (0, r.jsx)(H.B, { size: "custom", width: 16, height: 16 }),
                              name: (0, r.jsx)(X.E, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  children: eo.intl.string(eo.t["93hqln"]),
                              }),
                              description:
                                  G === en.AGREED
                                      ? (0, r.jsx)(B.r, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: y.A.colors.STATUS_POSITIVE,
                                        })
                                      : (0, r.jsx)(V.U, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: y.A.colors.ICON_FEEDBACK_CRITICAL,
                                        }),
                          }),
                      (0, r.jsx)(es, {
                          icon: (0, r.jsx)(w.p, { size: "custom", color: "currentColor", width: 16, height: 16 }),
                          name: (0, r.jsx)(X.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: eo.intl.string(eo.t.SaDIpL),
                          }),
                          description: (0, r.jsx)(X.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: O,
                          }),
                      }),
                      (0, r.jsx)(es, {
                          icon: (0, r.jsx)(Y.$v, { guild: T, size: Y.$v.Sizes.SMOL, animate: !1, className: eu.$f }),
                          name: (0, r.jsx)(X.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: eo.intl.string(eo.t["NQJ+WG"]),
                          }),
                          description: (0, r.jsx)(X.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: R,
                          }),
                      }),
                      (0, r.jsx)(es, {
                          icon: (0, r.jsx)(W.D, { size: "custom", width: 16, height: 16 }),
                          name: (0, r.jsx)(X.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: eo.intl.string(eo.t["eJOq+Z"]),
                          }),
                          description: (0, r.jsx)(X.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: (0, r.jsx)(el.Ay, {
                                  userId: g.userId,
                                  guildId: g.guildId,
                                  showJoinMethodContextAsFooter: !0,
                                  onClickInviter: (e) => {
                                      let t = ea.A.getChannelId();
                                      (0, x.z)(g.guildId, e.id, t ?? e_.dJq);
                                  },
                              }),
                          }),
                      }),
                  ],
              }),
          });
}
var ed = n(990078),
    eA = n(245604),
    eg = n(189552),
    eT = n(950072),
    eI = n(317525),
    eN = n(576705);
function eG(e) {
    let { member: t } = e,
        n = (0, U.bG)([Q.A], () => Q.A.getGuild(t.guildId)),
        l = (0, U.bG)([eI.A], () => eI.A.getSortedRoles(t.guildId)),
        a = i.useMemo(
            () => l.filter((e) => e.id !== t.highestRoleId && t.roles.includes(e.id)),
            [t.roles, t.highestRoleId, l],
        ),
        s = (0, U.bG)([q.A], () => q.A.getEnhancedMember(t.guildId, t.userId), [t.guildId, t.userId]),
        _ = (0, eg.YH)(s),
        o = (0, eg.Cy)(t),
        u = (0, U.bG)([eN.A], () => eN.A.can(e_.xBc.MANAGE_ROLES, n), [n]);
    return null == n
        ? null
        : (0, r.jsx)(j.D, {
              label: eo.intl.string(eo.t["LPJmL/"]),
              children: (0, r.jsx)(eE, {
                  children: (0, r.jsx)(es, {
                      description:
                          t.roles.length > 0 || u
                              ? (0, r.jsxs)("div", {
                                    className: eu.yk,
                                    children: [
                                        (0, r.jsx)(ed.m, {
                                            asContainer: !0,
                                            "aria-label": eo.intl.string(eo.t["0g8Xd/"]),
                                            text: eo.intl.string(eo.t["93S+lG"]),
                                            children: (0, r.jsx)(b.D, {
                                                children: (0, r.jsx)(eT.A, {
                                                    className: E()(eu.Zf, eu.Lc),
                                                    role: _,
                                                    guildId: t.guildId,
                                                }),
                                            }),
                                        }),
                                        a.map((e) =>
                                            (0, r.jsx)(eT.A, { className: eu.Zf, role: e, guildId: t.guildId }, e.id),
                                        ),
                                        u &&
                                            (0, r.jsx)(ed.m, {
                                                asContainer: !0,
                                                "aria-label": eo.intl.string(eo.t.ljnBlo),
                                                text: eo.intl.string(eo.t.ljnBlo),
                                                children: (0, r.jsx)(b.D, {
                                                    onClick: o,
                                                    className: eu.$g,
                                                    children: (0, r.jsx)(eA.U, {
                                                        size: "custom",
                                                        color: "currentColor",
                                                        className: eu.fd,
                                                        width: 20,
                                                        height: 20,
                                                    }),
                                                }),
                                            }),
                                    ],
                                })
                              : (0, r.jsx)("div", {
                                    className: eu.pl,
                                    children: (0, r.jsx)(X.E, {
                                        variant: "text-sm/normal",
                                        children: eo.intl.string(eo.t.nZfHsf),
                                    }),
                                }),
                  }),
              }),
          });
}
var eO = n(989349),
    em = n.n(eO),
    eS = n(463930),
    eR = n(137130),
    eD = n(555067),
    eh = n(523599),
    eL = n(438407),
    eC = n(967144),
    eM = n(562153),
    ef = n(337154);
function ex(e) {
    var t;
    let n,
        { log: l, member: a, guild: s } = e,
        { analyticsLocations: _ } = (0, T.Ay)(),
        o = eD.getSimpleAuditLogTitleFromChange(l),
        u = eD.getSimpleAuditLogTitleContextFromChange(l),
        c = eD.findChangeByKey(e_.gGk.REASON, l)?.newValue,
        d = eD.getSimpleAuditLogChangeDetails(l),
        A =
            ((t = l.id),
            (n = (0, U.bG)([J.default], () => J.default.locale)),
            i.useMemo(() => new Date(Z.default.extractTimestamp(t)).toLocaleDateString(n, et), [t, n])),
        g = (0, U.bG)([m.Ay], () => (null != l.userId ? m.Ay.getMember(a.guildId, l.userId) : null), [
            a.guildId,
            l.userId,
        ]),
        I = (0, eC.gn)(g?.guildId, g?.userId, g?.colorStrings ?? null),
        N = i.useCallback(
            (e) => (t) => {
                t.preventDefault(), t.stopPropagation(), null != e && (0, eg.Ko)(e, _);
            },
            [_],
        ),
        G = i.useCallback(
            () =>
                null == l.user
                    ? null
                    : (0, r.jsx)(ed.m, {
                          asContainer: !0,
                          text: eo.intl.string(eo.t.mvsi9n),
                          children: (0, r.jsx)(b.D, {
                              onClick: N(g),
                              tag: "span",
                              className: ef.Xh,
                              children: (0, r.jsxs)(X.E, {
                                  variant: "text-sm/medium",
                                  tag: "span",
                                  children: [
                                      "@",
                                      (0, r.jsx)(eS.g, {
                                          name: eM.Ay.getName(a.guildId, null, l.user),
                                          colorString: g?.colorString ?? null,
                                          colorStrings: I,
                                      }),
                                  ],
                              }),
                          }),
                      }),
            [N, l.user, a.guildId, g, I],
        )();
    return (0, r.jsxs)("div", {
        className: E()(ei.ol, ef.$9),
        children: [
            (0, r.jsxs)("div", {
                className: ef._6,
                children: [
                    (0, r.jsxs)("div", {
                        className: ef.lc,
                        children: [
                            null != o &&
                                (0, r.jsx)(X.E, { variant: "text-sm/semibold", color: "text-strong", children: o }),
                            null != u &&
                                (0, r.jsxs)(X.E, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: ["(", "string" == typeof u ? u : em()(u).fromNow(), ")"],
                                }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: ef.FS,
                        children: (0, r.jsx)(X.E, { variant: "text-sm/medium", color: "text-strong", children: A }),
                    }),
                ],
            }),
            null != c &&
                (0, r.jsx)("div", {
                    className: ef.Xy,
                    children: (0, r.jsxs)("div", {
                        className: ef.eH,
                        children: [
                            G,
                            (0, r.jsx)(X.E, {
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
                (0, r.jsx)("div", {
                    className: ef.Xy,
                    children: (0, r.jsxs)("div", {
                        className: ef.E9,
                        children: [
                            G,
                            (0, r.jsx)(X.E, {
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
                (0, r.jsx)("div", {
                    className: ef.Xy,
                    children: (0, r.jsx)("div", {
                        className: ef.E9,
                        children: (0, r.jsx)(X.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            tag: "span",
                            children: (0, r.jsx)(eL.r, {
                                log: l,
                                guild: s,
                                onContentClick: () => {},
                                className: ef.zm,
                            }),
                        }),
                    }),
                }),
        ],
    });
}
function eU(e) {
    let { member: t } = e,
        n = (0, U.bG)([Q.A], () => Q.A.getGuild(t.guildId), [t.guildId]),
        l = (0, U.bG)([eh.A], () => {
            let e = eh.A.logs;
            return null == e || null == n ? [] : eD.transformLogs(e, n);
        }, [n]);
    return (i.useEffect(() => {
        !(async function (e, t) {
            await eR.Qi(t, e);
        })(t.guildId, t.userId);
    }, [t.guildId, t.userId]),
    null == n || 0 === l.length)
        ? null
        : (0, r.jsx)(j.D, {
              label: eo.intl.string(eo.t.flCxLo),
              children:
                  l.length > 0
                      ? (0, r.jsx)(eE, {
                            children: l.map((e) => (0, r.jsx)(ex, { log: e, member: t, guild: n }, e.id)),
                        })
                      : null,
          });
}
n(321073);
var ep = n(254138),
    eb = n(320448),
    eF = n(376092),
    ek = n(558393),
    eP = n(136722),
    ej = n(260509),
    ev = n(34457),
    eX = n(488926),
    eB = n(124759);
let ey = Object.keys(e_.xBc),
    eV = Array.from(
        new Set([
            ...eB.dR,
            ...e_.nfo,
            e_.xBc.ADMINISTRATOR,
            e_.xBc.KICK_MEMBERS,
            e_.xBc.BAN_MEMBERS,
            e_.xBc.MANAGE_GUILD,
            e_.xBc.MANAGE_CHANNELS,
            e_.xBc.MANAGE_ROLES,
            e_.xBc.MANAGE_MESSAGES,
            e_.xBc.MANAGE_THREADS,
            e_.xBc.MANAGE_GUILD_EXPRESSIONS,
            e_.xBc.CREATE_GUILD_EXPRESSIONS,
            e_.xBc.MANAGE_EVENTS,
            e_.xBc.CREATE_EVENTS,
            e_.xBc.MODERATE_MEMBERS,
            e_.xBc.MENTION_EVERYONE,
            e_.xBc.MANAGE_WEBHOOKS,
        ]),
    ).map((e) => {
        let t = ey.find((t) => e_.xBc[t] === e);
        if (null == t) throw Error(`Permission ${e} not found in Permissions`);
        return t;
    }),
    eH = new Set(e_.nfo);
function ew(e, t, n) {
    let l = (0, U.bG)([Q.A], () => Q.A.getGuild(t), [t]);
    return (0, U.bG)([m.Ay, S.default, eI.A], () => {
        let a = {},
            r = m.Ay.getMember(t, e),
            i = S.default.getUser(e);
        if (null == l || null == r || null == i) return a;
        let s = eI.A.getEveryoneRole(l),
            E = eX.cc({ user: i, context: l });
        for (let e of n) {
            let t = e_.xBc[e];
            if (eP.zy(E, t)) {
                for (let n of ((a[e] = []), r.roles)) {
                    let r = eI.A.getRole(l.id, n);
                    null != r && ((0, ev._m)(r, e_.xBc.ADMINISTRATOR) || (0, ev.sx)(r, t)) && a[e].push(r.id);
                }
                ((0, ev._m)(s, e_.xBc.ADMINISTRATOR) || (0, ev.sx)(s, t)) && a[e].push(s.id),
                    (0, ej.bM)(l, i) && a[e].push(i.id);
            }
        }
        return a;
    }, [l, t, n, e]);
}
var eW = n(486974),
    eY = n(830173);
function eK(e) {
    let { permission: t, roleIds: n, guild: l, specMap: a } = e,
        i = e_.xBc[t],
        s = a[i.toString()]?.title ?? (0, eF.hx)(i),
        _ = eH.has(i),
        o = (0, U.yK)([eI.A], () => eI.A.getManyRoles(l.id, n), [l.id, n]);
    return (0, r.jsx)(ed.m, {
        "aria-label": eo.intl.string(eo.t["0g8Xd/"]),
        __unsupportedReactNodeAsText: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(X.E, {
                    variant: "text-sm/normal",
                    children: _ ? eo.intl.string(eo.t["GEuu/O"]) : eo.intl.string(eo.t.wgGiCk),
                }),
                o.map((e) =>
                    (0, r.jsx)(
                        "div",
                        { className: eY.Zf, children: (0, r.jsx)(eT.A, { role: e, guildId: l.id }) },
                        e.id,
                    ),
                ),
            ],
        }),
        children: (0, r.jsxs)(b.D, {
            className: E()(eY.t2, { [eY.aE]: _ }),
            children: [
                _ && (0, r.jsx)(ep.m, { size: "custom", width: 16, height: 16, color: y.A.colors.TEXT_BRAND }),
                (0, r.jsx)(X.E, { variant: "text-xs/medium", color: "interactive-text-default", children: s }),
            ],
        }),
    });
}
let ez = i.memo(function (e) {
    let { member: t, onNavigate: n } = e,
        l = (0, U.bG)([Q.A], () => Q.A.getGuild(t.guildId), [t.guildId]),
        a = ew(t.userId, t.guildId, eV),
        s = ew(t.userId, t.guildId, ey),
        _ = Object.keys(a).length,
        o = Object.keys(s).length,
        u = i.useMemo(() => (null != l ? ek.A.getGuildPermissionSpecMap(l) : null), [l]),
        c = i.useMemo(() => (null != l ? ek.A.generateGuildPermissionSpec(l) : null), [l]),
        d = i.useMemo(() => {
            if (null == l || null == u) return null;
            if (0 === _)
                return (0, r.jsx)("div", {
                    className: E()(eY.t2, eY.FI),
                    children: (0, r.jsx)(X.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-positive",
                        children: eo.intl.string(eo.t.sXhykX),
                    }),
                });
            let e = [];
            return (
                c?.forEach((t) => {
                    t.permissions.forEach((t) => {
                        let n = t.flag,
                            i = ey.find((e) => e_.xBc[e] === n);
                        if (null == i) return;
                        let s = a[i];
                        null != s && e.push((0, r.jsx)(eK, { permission: i, roleIds: s, guild: l, specMap: u }, i));
                    });
                }),
                e
            );
        }, [l, _, a, c, u]);
    return null == l
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: eY.N1,
                      children: [
                          (0, r.jsx)(X.E, {
                              variant: "eyebrow",
                              color: "text-default",
                              children: eo.intl.string(eo.t.ZCq2nC),
                          }),
                          (0, r.jsxs)(b.D, {
                              className: eY.bz,
                              onClick: () => n(eW.g.PERMISSIONS),
                              children: [
                                  (0, r.jsx)(X.E, {
                                      variant: "eyebrow",
                                      color: "interactive-text-default",
                                      children: eo.intl.format(eo.t["0x6aTm"], { count: o }),
                                  }),
                                  (0, r.jsx)(eb._, { size: "custom", width: 16, height: 16 }),
                              ],
                          }),
                      ],
                  }),
                  (0, r.jsx)(eE, {
                      children: (0, r.jsx)(es, { description: (0, r.jsx)("div", { className: eY.SL, children: d }) }),
                  }),
              ],
          });
});
var eJ = n(953822),
    eQ = n(60270),
    eZ = n(576470),
    eq = n(316031),
    e$ = n(157347);
function e0(e) {
    let { member: t } = e,
        n = t.userId,
        l = t.guildId,
        a = ((0, U.bG)([q.A], () => q.A.getEnhancedMember(l, n), [n, l]) ?? t).unusualDMActivityUntil,
        s = i.useCallback((e) => {
            if (null == e) return null;
            let t = new Date(e).getTime();
            return (0, e$.hL)(t, e$.wN.JOINED_AT);
        }, []),
        E = i.useMemo(() => (null == t ? null : s(a)), [t, s, a]),
        _ = i.useMemo(() => (0, eq.n)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
        o = i.useMemo(
            () => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)),
            [t.communicationDisabledUntil],
        );
    return null != a || _
        ? (0, r.jsx)(j.D, {
              label: eo.intl.string(eo.t["7V3759"]),
              children: (0, r.jsxs)(eE, {
                  children: [
                      null != a &&
                          (0, r.jsx)(es, {
                              icon: (0, r.jsx)(eJ.E, { size: "custom", color: "currentColor", width: 16, height: 16 }),
                              name: (0, r.jsx)(X.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: eo.intl.string(eo.t.ZRnON3),
                              }),
                              description: (0, r.jsx)(X.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: E,
                              }),
                          }),
                      _ &&
                          null != o &&
                          (0, r.jsx)(es, {
                              icon: (0, r.jsx)(eQ.g, { size: "custom", color: "currentColor", width: 16, height: 16 }),
                              name: (0, r.jsx)(X.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: eo.intl.string(eo.t["TJ8/tE"]),
                              }),
                              description: (0, r.jsx)(X.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: (0, r.jsx)(eZ.A, { deadline: o, showUnits: !0, stopAtOneSec: !0 }),
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
var e1 = n(534890),
    e3 = n(173936),
    e2 = n(477262),
    e6 = n(942381),
    e4 = n(265690),
    e5 = n(121894),
    e9 = n(228366),
    e7 = n(177068),
    e8 = n(736130),
    te = (((a = {}).MESSAGES = "messages"), (a.LINKS = "links"), (a.MEDIA = "media"), (a.ALL_COUNTS = "all_counts"), a);
function tt(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        r = JSON.stringify(l);
    return a
        ? `guild_${t}_search_tab_${n}_for_${e}_with_additonal_${r}`
        : `guild_${t}_search_${n}_for_${e}_with_additonal_${r}`;
}
let tn = { searchFetcher: null, searchTabFetcher: null, result: null, messageCount: -1, lastMessage: null },
    tl = (0, e4.h)(() => new Map()),
    ta = (e, t) => {
        (0, e5.r)(() => {
            tl.setState((n) => {
                let l = n.get(e);
                return null == l ? n.set(e, { ...tn, ...t }) : n.set(e, { ...l, ...t }), n;
            });
        });
    },
    tr = (e) => tl((t) => t.get(e), e6.x);
function ti(e, t, n) {
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
function ts(e, t, n, l) {
    let a = i.useMemo(() => tt(e, t, n, l, !0), [e, t, n, l]),
        r = tr(a),
        s = (0, c.A)(a);
    return { key: a, previousKey: s, state: r };
}
function tE(e) {
    let { userId: t, guildId: n } = e,
        l = (0, _.bG)([f.Ay], () => f.Ay.getGuildSidebarState(n), [n]),
        {
            messagesCount: a,
            linksCount: s,
            mediaCount: E,
        } = (function (e, t) {
            let { key: n, state: l } = ts(e, t, "messages", void 0),
                { key: a, state: r } = ts(e, t, "links", void 0),
                { key: s, state: E } = ts(e, t, "media", void 0),
                _ = i.useMemo(() => ti(e, "all_counts", void 0), [e, void 0]),
                o = i.useMemo(
                    () => ({
                        tabs: { messages: ti(e, "messages", _), links: ti(e, "links", _), media: ti(e, "media", _) },
                        track_exact_total_hits: !0,
                        include_nsfw: !0,
                    }),
                    [e, _],
                ),
                u = i.useCallback(
                    (e) => {
                        let t = e.messages,
                            l = e.links,
                            r = e.media;
                        ta(n, t), ta(a, l), ta(s, r);
                    },
                    [a, s, n],
                ),
                c = i.useCallback(
                    (e) => {
                        u({ messages: e, links: e, media: e });
                    },
                    [u],
                );
            i.useEffect(() => {
                let e = new e7.DX(t, e_.I4_.GUILD, _, o);
                c({ searchTabFetcher: e, messageCount: -1, lastMessage: null });
                let n = setTimeout(async () => {
                    let t = null;
                    try {
                        let n = await e.makeRequest({ rejectWithError: !1 });
                        t = n?.body;
                    } catch (e) {
                        t = null;
                    }
                    if (null == t) c({ messageCount: 0, lastMessage: null });
                    else {
                        let e = t.tabs.messages,
                            n = t.tabs.links,
                            l = t.tabs.media;
                        u({
                            messages: { messageCount: e?.total_results ?? 0, lastMessage: e?.messages[0] ?? null },
                            links: { messageCount: n?.total_results ?? 0, lastMessage: n?.messages[0] ?? null },
                            media: { messageCount: l?.total_results ?? 0, lastMessage: l?.messages[0] ?? null },
                        });
                    }
                    A({});
                });
                return () => {
                    e.cancel(), clearTimeout(n);
                };
            }, [e, t, _, o, c, u]);
            let [d, A] = i.useState({});
            return {
                messagesCount: l?.messageCount ?? -1,
                linksCount: r?.messageCount ?? -1,
                mediaCount: E?.messageCount ?? -1,
            };
        })(t, n),
        u = new Intl.NumberFormat(eo.intl.currentLocale).format(a),
        c = new Intl.NumberFormat(eo.intl.currentLocale).format(s),
        d = new Intl.NumberFormat(eo.intl.currentLocale).format(E),
        A = i.useCallback(
            async (e) => {
                if (null == l) return;
                let a = ti(t, e, { include_nsfw: !0 });
                await (0, x.z)(n, t, l.baseChannelId, { modViewPanel: eW.g.MESSAGE_HISTORY, additionalSearchQuery: a });
            },
            [n, l, t],
        );
    return (0, r.jsx)(j.D, {
        label: eo.intl.string(eo.t.vCn2Tn),
        children: (0, r.jsxs)(eE, {
            children: [
                (0, r.jsx)(es, {
                    icon: (0, r.jsx)(e1.o, { size: "custom", color: "currentColor", width: 16, height: 16 }),
                    name: (0, r.jsx)(X.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: eo.intl.string(eo.t.OIgYlQ),
                    }),
                    description:
                        -1 === a
                            ? (0, r.jsx)(o.y, { type: o.t.SPINNING_CIRCLE, className: eu.S })
                            : (0, r.jsx)(X.E, {
                                  variant: "text-sm/semibold",
                                  color: "interactive-text-default",
                                  children: u,
                              }),
                    onNavigate: a > 0 ? () => A(te.MESSAGES) : void 0,
                }),
                (0, r.jsx)(es, {
                    icon: (0, r.jsx)(e3.q, { size: "custom", width: 16, height: 16 }),
                    name: (0, r.jsx)(X.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: eo.intl.string(eo.t.DFSvTt),
                    }),
                    description:
                        -1 === s
                            ? (0, r.jsx)(o.y, { type: o.t.SPINNING_CIRCLE, className: eu.S })
                            : (0, r.jsx)(X.E, {
                                  variant: "text-sm/semibold",
                                  color: "interactive-text-default",
                                  children: c,
                              }),
                    onNavigate: s > 0 ? () => A(te.LINKS) : void 0,
                }),
                (0, r.jsx)(es, {
                    icon: (0, r.jsx)(e2.s, { size: "custom", width: 16, height: 16 }),
                    name: (0, r.jsx)(X.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: eo.intl.string(eo.t["Aw9+/M"]),
                    }),
                    description:
                        -1 === E
                            ? (0, r.jsx)(o.y, { type: o.t.SPINNING_CIRCLE, className: eu.S })
                            : (0, r.jsx)(X.E, {
                                  variant: "text-sm/semibold",
                                  color: "interactive-text-default",
                                  children: d,
                              }),
                    onNavigate: E > 0 ? () => A(te.MEDIA) : void 0,
                }),
            ],
        }),
    });
}
function t_(e) {
    let { onClose: t } = e;
    return (0, r.jsxs)("div", {
        className: eu.wx,
        children: [
            (0, r.jsxs)("div", {
                className: eu.qd,
                children: [
                    (0, r.jsx)(P.A, { width: 16, height: 16 }),
                    (0, r.jsx)(p.D, { variant: "heading-md/semibold", children: eo.intl.string(eo.t.cf5lgh) }),
                ],
            }),
            (0, r.jsx)(b.D, {
                onClick: (e) => {
                    e.stopPropagation(), t();
                },
                children: (0, r.jsx)(F.e, { shortcut: "esc", keyClassName: eu.Wb, className: eu.ti }),
            }),
        ],
    });
}
function to(e) {
    let { userId: t, guildId: n, location: l, className: a, onClose: i, onNavigate: s } = e,
        _ = (0, U.bG)([S.default], () => S.default.getUser(t), [t]),
        o = (0, U.bG)([m.Ay], () => m.Ay.getMember(n, t), [n, t]);
    return null == _ || null == o
        ? null
        : (0, r.jsxs)("div", {
              className: E()(eu.kL, a),
              children: [
                  (0, r.jsx)(t_, { onClose: i }),
                  (0, r.jsxs)(k.Ip, {
                      className: eu.WH,
                      children: [
                          (0, r.jsx)(e0, { member: o }),
                          (0, r.jsx)(tE, { userId: t, guildId: n }),
                          (0, r.jsx)(ez, { member: o, onNavigate: s }),
                          (0, r.jsx)(eG, { member: o }),
                          (0, r.jsx)(ec, { member: o }),
                          (0, r.jsx)(eU, { member: o }),
                      ],
                  }),
              ],
          });
}
var tu = n(735438),
    tc = n(689175),
    td = n(964486),
    tA = n(738768),
    tg = n(457699),
    tT = n(320095),
    tI = n(465364),
    tN = n(142662),
    tG = n(383233),
    tO = n(994500),
    tm = n(477155),
    tS = n(104168);
function tR(e) {
    let { onNavigate: t, backPanel: n = eW.g.INFO } = e;
    return (0, r.jsxs)("div", {
        className: eu.wx,
        children: [
            (0, r.jsx)("div", {
                className: eu.qd,
                children: (0, r.jsxs)(b.D, {
                    className: tS.Gv,
                    onClick: () => t?.(n),
                    children: [
                        (0, r.jsx)(tm.r, { size: "custom", width: 20, height: 20 }),
                        (0, r.jsx)(p.D, { variant: "heading-md/semibold", children: eo.intl.string(eo.t["13/7kX"]) }),
                    ],
                }),
            }),
            (0, r.jsx)(b.D, {
                onClick: (e) => {
                    e.stopPropagation(), t?.(n);
                },
                children: (0, r.jsx)(F.e, { shortcut: "esc", keyClassName: tS.Wb, className: tS.ti }),
            }),
        ],
    });
}
var tD = n(375256);
function th(e) {
    let { userId: t, guildId: n, location: l, className: a, onNavigate: s } = e,
        o = i.useRef(null),
        u = (0, _.bG)([f.Ay], () => f.Ay.getGuildSidebarState(n), [n]),
        d = i.useRef(0),
        [A, g] = i.useState(u?.details.additionalSearchQuery ?? {}),
        T = (function (e, t, n, l) {
            let { addtionalQuery: a, shouldDispatch: r = !1 } = l,
                s = i.useMemo(() => tt(e, t, n, a), [e, t, n, a]),
                E = tr(s),
                _ = (0, c.A)(s),
                [o, u] = i.useState({});
            return (
                i.useEffect(() => {
                    if (_ !== s) {
                        let l = ti(e, n, a),
                            i = new e7.MS(t, e_.I4_.GUILD, l);
                        ta(s, { searchFetcher: i, messageCount: -1, lastMessage: null }),
                            setTimeout(() => {
                                i.fetch(
                                    (e) => {
                                        let n = e.body,
                                            l = n.messages[0];
                                        ta(s, {
                                            searchFetcher: i,
                                            result: n,
                                            messageCount: n.total_results,
                                            lastMessage: l,
                                        }),
                                            u({}),
                                            r &&
                                                e9.h.dispatch({
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
                                                            members: (n.members ?? []).map((e) => (0, e8.A)(e)),
                                                            doingHistoricalIndex: n.doing_deep_historical_index,
                                                            documentsIndexed: n.documents_indexed,
                                                            cursor: null,
                                                        },
                                                    ],
                                                });
                                    },
                                    (e) => {},
                                    (e) => {
                                        ta(s, { messageCount: 0, lastMessage: null }), u({});
                                    },
                                );
                            });
                    }
                    return () => {};
                }, [e, t, E, s, n, a, _, r]),
                E ?? tn
            );
        })(t, n, "messages", { addtionalQuery: A, shouldDispatch: !0 }),
        I = (0, _.bG)([S.default], () => S.default.getUser(t), [t]),
        N = (0, _.bG)([m.Ay], () => m.Ay.getMember(n, t), [n, t]);
    (0, td.u5)(() => {
        let e = u?.details.scrollOffset;
        null != e && o.current?.scrollTo({ to: e, animate: !1 });
    });
    let G = i.useCallback(
            (e) => {
                null == u ||
                    ((d.current = e.target.scrollTop),
                    (0, x.z)(n, t, u.baseChannelId, {
                        modViewPanel: eW.g.MESSAGE_HISTORY,
                        additionalSearchQuery: A,
                        scrollOffset: d.current,
                    }));
            },
            [n, t, u, A],
        ),
        O = (0, tu.throttle)(G, 300),
        R = i.useCallback(
            (e) => {
                if (null == u) return;
                let l = { ...A, offset: 25 * e };
                g(l),
                    (0, x.z)(n, t, u.baseChannelId, {
                        modViewPanel: eW.g.MESSAGE_HISTORY,
                        additionalSearchQuery: l,
                        scrollOffset: d.current,
                    });
            },
            [n, t, u, A],
        ),
        D = A?.offset ?? 0,
        [h, L] = i.useState(!1),
        C = (0, _.bG)([tg.A], () => {
            if (null == T.result) return [];
            let e = (0, tA.wG)("");
            return T.result.messages
                .map((e) => {
                    let [t] = e;
                    return (0, tT.rh)(t);
                })
                .map((t) => {
                    let n = tg.A.getMessage(t.id, t.channel_id),
                        l = new tG.Ay(t);
                    return (
                        null != n && (l = l.merge({ attachments: n.attachments, embeds: n.embeds })),
                        (l = l.set(
                            "customRenderedContent",
                            (0, tI.Ay)(l, { postProcessor: e, allowHeading: !0, allowList: !0 }),
                        ))
                    );
                });
        }, [T.result]),
        { blockCount: M, ignoreCount: U } = (0, _.cf)([tO.A], () => {
            let e = 0,
                t = 0;
            return (
                C.forEach((n) => {
                    tO.A.isBlockedForMessage(n) ? e++ : tO.A.isIgnoredForMessage(n) && t++;
                }),
                { blockCount: e, ignoreCount: t }
            );
        }),
        p = i.useMemo(
            () =>
                null == T.result
                    ? {
                          documentsIndexed: 0,
                          isSearching: !0,
                          isIndexing: !1,
                          isHistoricalIndexing: !1,
                          offset: D,
                          totalResults: 0,
                          hasError: !1,
                          showBlockedResults: h,
                          showNoResultsAlt: !1,
                      }
                    : {
                          documentsIndexed: T.result.documents_indexed ?? 0,
                          isSearching: !1,
                          isIndexing: T.result.doing_deep_historical_index ?? !1,
                          isHistoricalIndexing: T.result.doing_deep_historical_index ?? !1,
                          offset: D,
                          totalResults: T.result.total_results ?? 0,
                          hasError: !1,
                          showBlockedResults: h,
                          showNoResultsAlt: !1,
                      },
            [T.result, D, h],
        );
    return null == I || null == N || null == p
        ? null
        : (0, r.jsxs)("div", {
              className: E()(eu.kL, a),
              children: [
                  (0, r.jsx)(tR, { guildId: n, userId: t, onNavigate: s }),
                  (0, r.jsx)(tc.Ch, {
                      className: tD.W,
                      ref: o,
                      onScroll: O,
                      children: (0, r.jsx)(tN.A, {
                          messages: C,
                          search: p,
                          renderEmbeds: !0,
                          blockCount: M,
                          ignoreCount: U,
                          scrollTo: e_.tEg,
                          onPageChange: R,
                          onBlockedResultsClick: L,
                      }),
                  }),
              ],
          });
}
var tL = n(111956),
    tC = n.n(tL),
    tM = n(270003),
    tf = n(892547),
    tx = n(640708),
    tU = n(997509),
    tp = n(66835);
function tb(e) {
    let { permission: t, roleIds: n, guild: l, specMap: a, categoryTitle: s, userId: _ } = e,
        o = (0, U.yK)([eI.A], () => eI.A.getManyRoles(l.id, n)),
        u = e_.xBc[t],
        c = a[u.toString()]?.title ?? (0, eF.hx)(u),
        d = a[u.toString()]?.description ?? "",
        A = eH.has(u),
        g = eV.includes(t),
        T = n.length,
        I = (0, U.bG)([eN.A], () => eN.A.can(e_.xBc.MANAGE_ROLES, l), [l]),
        N = i.useCallback(
            async (e) => {
                I && (await tU.A.open(l.id, e_.BEX.ROLES), await tU.A.selectRole(e));
            },
            [I, l.id],
        );
    return (0, r.jsxs)("div", {
        className: E()(tp.wT, { [tp.aE]: A }),
        children: [
            (0, r.jsxs)("div", {
                className: tp.iY,
                children: [
                    (0, r.jsxs)("div", {
                        className: tp.gH,
                        children: [
                            (0, r.jsx)(X.E, { variant: "text-md/medium", color: "text-strong", children: c }),
                            null != s &&
                                (0, r.jsxs)("div", {
                                    className: tp.OQ,
                                    children: [
                                        (0, r.jsx)(X.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: s,
                                        }),
                                        A &&
                                            (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsx)(tx.A, {
                                                        height: 4,
                                                        width: 4,
                                                        "aria-hidden": "true",
                                                        color: y.A.colors.ICON_MUTED.css,
                                                    }),
                                                    (0, r.jsx)(ed.m, {
                                                        text: eo.intl.string(eo.t.GZvXuP),
                                                        children: (0, r.jsxs)(b.D, {
                                                            className: tp.Dc,
                                                            children: [
                                                                (0, r.jsx)(ep.m, {
                                                                    size: "custom",
                                                                    width: 12,
                                                                    height: 12,
                                                                    color: y.A.colors.TEXT_BRAND,
                                                                }),
                                                                (0, r.jsx)(X.E, {
                                                                    variant: "text-xs/normal",
                                                                    color: "text-brand",
                                                                    children: eo.intl.string(eo.t.k7Kqj7),
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        !A &&
                                            g &&
                                            (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsx)(tx.A, {
                                                        height: 4,
                                                        width: 4,
                                                        "aria-hidden": "true",
                                                        color: y.A.colors.ICON_MUTED.css,
                                                    }),
                                                    (0, r.jsx)("div", {
                                                        className: tp.Dc,
                                                        children: (0, r.jsx)(X.E, {
                                                            variant: "text-xs/normal",
                                                            color: "text-muted",
                                                            children: eo.intl.string(eo.t.IfqUEM),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                        ],
                    }),
                    (0, r.jsx)(X.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: eo.intl.format(eo.t.KmJI4A, { roleCount: T }),
                    }),
                ],
            }),
            null != d &&
                (0, r.jsx)("div", {
                    className: tp.Dp,
                    children: (0, r.jsx)(X.E, { variant: "text-sm/normal", color: "text-subtle", children: d }),
                }),
            (0, r.jsx)("div", {
                className: tp.SY,
                children: o.map((e) =>
                    e.id === _
                        ? (0, r.jsx)(
                              "div",
                              {
                                  className: tp.Zf,
                                  children: (0, r.jsx)("div", {
                                      className: tp.o9,
                                      children: (0, r.jsx)(X.E, {
                                          variant: "text-xs/medium",
                                          color: "text-default",
                                          children: eo.intl.string(eo.t.pclUFJ),
                                      }),
                                  }),
                              },
                              e.id,
                          )
                        : (0, r.jsx)(
                              b.D,
                              {
                                  className: E()(tp.Zf, { [tp.LL]: I && !(0, ev.Oy)(e) }),
                                  onClick: () => N(e.id),
                                  children: (0, r.jsx)(eT.A, { role: e, guildId: l.id, className: tp.o9 }),
                              },
                              e.id,
                          ),
                ),
            }),
        ],
    });
}
function tF(e, t) {
    return t.toLowerCase().includes(e.toLowerCase());
}
function tk(e) {
    let { userId: t, guildId: n, location: l, className: a, onNavigate: s } = e,
        _ = (0, U.bG)([S.default], () => S.default.getUser(t), [t]),
        o = (0, U.bG)([Q.A], () => Q.A.getGuild(n), [n]),
        u = (0, U.bG)([m.Ay], () => m.Ay.getMember(n, t), [n, t]),
        c = ew(t, n, ey),
        d = Object.keys(c).length,
        A = i.useMemo(() => (null != o ? ek.A.getGuildPermissionSpecMap(o) : null), [o]),
        g = i.useMemo(() => (null != o ? ek.A.generateGuildPermissionSpec(o) : null), [o]),
        [T, I] = i.useState(""),
        [N, G] = i.useState(""),
        O = i.useMemo(() => tC()(G, 300), []),
        R = i.useCallback(
            (e) => {
                I(e), O(e);
            },
            [O],
        ),
        D = i.useCallback(() => {
            I(""), G("");
        }, []),
        h = i.useMemo(() => {
            if (null == o || null == A || null == u) return null;
            if (0 === d) return (0, r.jsx)(X.E, { variant: "text-sm/normal", children: eo.intl.string(eo.t.DEBGqA) });
            let e = [];
            return (
                g?.forEach((n) => {
                    n.permissions.forEach((l) => {
                        let a = l.flag,
                            i = ey.find((e) => e_.xBc[e] === a);
                        if (null == i) return;
                        let s = c[i];
                        if (null != s) {
                            if (N.length > 0) {
                                let e = A[a.toString()]?.title ?? (0, eF.hx)(a),
                                    t = A[a.toString()]?.description?.toString() ?? "",
                                    l = n.title,
                                    r = eH.has(a),
                                    s = eV.includes(i),
                                    E = r ? eo.intl.string(eo.t.k7Kqj7) : s ? eo.intl.string(eo.t.IfqUEM) : null,
                                    _ = tF(N, e),
                                    o = tF(N, t),
                                    u = tF(N, l),
                                    c = null != E && tF(N, E);
                                if (!_ && !o && !u && !c) return;
                            }
                            e.push(
                                (0, r.jsx)(
                                    tb,
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
        }, [o, A, u, d, g, c, N, t]);
    return null == _ || null == u
        ? null
        : (0, r.jsxs)("div", {
              className: E()(eu.kL, a),
              children: [
                  (0, r.jsx)(tR, { guildId: n, userId: t, onNavigate: s }),
                  (0, r.jsx)(k.Ip, {
                      className: tp.b3,
                      children: (0, r.jsx)(tM.n, {
                          label: eo.intl.string(eo.t.BBWnpr),
                          children: (0, r.jsxs)("div", {
                              className: tp.xV,
                              children: [
                                  (0, r.jsx)(tf.I, {
                                      size: "sm",
                                      query: T,
                                      placeholder: eo.intl.string(eo.t["yD9+dN"]),
                                      onChange: R,
                                      onClear: D,
                                      autoComplete: "off",
                                      inputProps: { autoCapitalize: "none", autoCorrect: "off", spellCheck: "false" },
                                  }),
                                  h,
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
function tP(e, t) {
    return (n) => {
        if (0 === n) return "auto";
        let l = "forwards" === t.current,
            a = n > 0,
            r = !1;
        return (
            a && l && "left" === e && (r = !0),
            a && !l && "right" === e && (r = !0),
            !a && l && "right" === e && (r = !0),
            a || l || "left" !== e || (r = !0),
            r ? `calc(${100 * Math.abs(n)}% + ${Math.round(12 * Math.abs(n))}px)` : "auto"
        );
    };
}
function tj(e) {
    let { userId: t, guildId: n, onClose: l, analyticsLocation: a, className: s } = e,
        E = (0, _.bG)([f.Ay], () => f.Ay.getGuildSidebarState(n), [n]),
        o = E?.details.modViewPanel ?? eW.g.INFO,
        u = (0, c.A)(t),
        d = null == o ? null : o === eW.g.INFO ? "backwards" : "forwards",
        A = (0, h.A)(d),
        { reducedMotion: g } = i.useContext(L.C),
        T = i.useCallback(
            (e) => {
                null != E && (0, x.z)(n, t, E.baseChannelId, { modViewPanel: e });
            },
            [E, n, t],
        ),
        I = i.useMemo(
            () => ({
                [e_.IWg.CLOSE_MODAL]: {
                    binds: ["esc"],
                    comboKeysBindGlobal: !0,
                    action: () => (o === eW.g.INFO ? l() : T(eW.g.INFO)),
                },
            }),
            [l, o, T],
        );
    i.useEffect(() => (M.A.enable(), M.A.enableTemp(I), () => M.A.disableTemp()), [I]);
    let N = (0, C.p)(
        o,
        { value: 0, from: { value: 1 }, enter: { value: 0 }, leave: { value: -1 } },
        u !== t ? "animate-never" : "animate-always",
    );
    return (0, r.jsx)(D.animated.div, {
        style: { position: "relative", height: "100%", flex: 1, overflow: "hidden" },
        children: N((e, a, i) => {
            let { key: E } = i;
            return (0, r.jsx)(
                D.animated.div,
                {
                    style: {
                        position: "absolute",
                        display: "flex",
                        flexDirection: "column",
                        backfaceVisibility: "hidden",
                        width: "100%",
                        height: "100%",
                        ...(g.enabled
                            ? { opacity: e.value?.to((e) => 1 - Math.abs(e)) }
                            : { left: e.value?.to(tP("left", A)), right: e.value?.to(tP("right", A)) }),
                    },
                    children: (function (e) {
                        switch (e) {
                            case eW.g.INFO:
                                return (0, r.jsx)(to, {
                                    userId: t,
                                    guildId: n,
                                    onClose: l,
                                    onNavigate: T,
                                    className: s,
                                });
                            case eW.g.MESSAGE_HISTORY:
                                return (0, r.jsx)(th, {
                                    userId: t,
                                    guildId: n,
                                    onNavigate: () => T(eW.g.INFO),
                                    className: s,
                                });
                            case eW.g.PERMISSIONS:
                                return (0, r.jsx)(tk, {
                                    userId: t,
                                    guildId: n,
                                    onNavigate: () => T(eW.g.INFO),
                                    className: s,
                                });
                            default:
                                return null;
                        }
                    })(a),
                },
                E,
            );
        }),
    });
}
var tv = n(97808),
    tX = n(778712),
    tB = n(789645),
    ty = n(192308),
    tV = n(905499),
    tH = n(215026),
    tw = n(473935),
    tW = n(308528),
    tY = n(991982),
    tK = n(838111),
    tz = n(351001),
    tJ = n(504049),
    tQ = n(534400),
    tZ = n(495544),
    tq = n(290863),
    t$ = n(461213),
    t0 = n(957565),
    t1 = n(427262),
    t3 = n(743981),
    t2 = n(637498);
function t6(e) {
    let { user: t, guildId: n, onClose: l } = e,
        a = t.id,
        i = (0, U.bG)(
            [t$.A, tq.A, tZ.default],
            () => (a === tZ.default.getId() ? t$.A.getStatus() : tq.A.getStatus(a, n)),
            [a, n],
        );
    return (0, r.jsxs)("div", {
        className: t2.mY,
        children: [
            (0, r.jsxs)("div", {
                className: t2.FD,
                children: [
                    (0, r.jsx)("div", {
                        className: t2.Wn,
                        children: (0, r.jsx)(tv.eu, {
                            src: t.getAvatarURL(n, 48),
                            "aria-label": t.username,
                            size: tX._3.SIZE_48,
                            status: i,
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: t2.oS,
                        children: [
                            (0, r.jsxs)("div", {
                                className: t2.K$,
                                children: [
                                    (0, r.jsx)(X.E, {
                                        variant: "text-lg/medium",
                                        children: (0, r.jsx)(eS.g, {
                                            name: eM.Ay.getName(n, null, t),
                                            colorString: y.A.colors.TEXT_STRONG.css,
                                            colorStrings: null,
                                        }),
                                    }),
                                    (0, r.jsx)(tQ.Ay, {
                                        primaryGuild: t?.primaryGuild,
                                        userId: t?.id,
                                        contextGuildId: n,
                                        badgeSize: t3.Sl.SIZE_16,
                                        textVariant: "heading-md/semibold",
                                        className: t2.Dz,
                                        containerClassName: t2.UL,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(X.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: t1.Ay.getUserTag(t),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(X.E, {
                variant: "text-md/medium",
                color: "text-default",
                children: (0, r.jsx)(b.D, {
                    className: t2.d4,
                    onClick: l,
                    children: (0, r.jsx)(tB.P, { size: "md", color: "currentColor" }),
                }),
            }),
        ],
    });
}
function t4(e) {
    let { tag: t = "div", text: n, disabled: l, children: a, onClick: i, ...s } = e;
    return (0, r.jsx)(ed.m, {
        text: n,
        children: (0, r.jsx)(b.D, {
            ...s,
            tag: t,
            "aria-label": n,
            className: E()(t2.YB, { [t2.aA]: l }),
            onClick: l ? void 0 : i,
            children: (0, r.jsx)("div", { className: t2.MU, children: a }),
        }),
    });
}
function t5(e) {
    let { user: t, member: l, guildId: a, moderatorReportId: i } = e,
        s = (0, U.bG)([Q.A], () => Q.A.getGuild(a)),
        {
            canKickUser: E,
            canBanUser: _,
            canModerateMembers: o,
        } = (0, U.cf)(
            [eN.A, S.default, Q.A],
            () => ({
                canKickUser: (0, tz.L7)(t, s),
                canBanUser: (0, tz.EZ)(t, s),
                canModerateMembers: null != s && (0, tK.b)(s.id, t.id, [S.default, Q.A, eN.A]),
            }),
            [t, s],
        ),
        u = (0, eq.Z)(l),
        { analyticsLocations: c, newestAnalyticsLocation: d } = (0, T.Ay)(),
        A = (0, tJ.$9)(a, { targetUserId: t.id, location: d, locations: c }),
        g = (0, U.bG)([tZ.default], () => tZ.default.getId() === t?.id);
    return (0, r.jsxs)("div", {
        className: t2.E_,
        children: [
            (0, r.jsx)(t4, {
                disabled: g,
                text: eo.intl.string(eo.t["g33r/P"]),
                onClick: () => {
                    tW.A.openPrivateChannel({ recipientIds: t.id });
                },
                children: (0, r.jsx)(e1.o, { size: "custom", color: "currentColor", width: 24, height: 24 }),
            }),
            (0, r.jsx)(t4, {
                disabled: !E,
                text: eo.intl.string(eo.t["3glT6Z"]),
                onClick: () => {
                    (0, ty.openModalLazy)(async () => {
                        let { default: e } = await n.e("40243").then(n.bind(n, 547166));
                        return (n) => (0, r.jsx)(e, { ...n, location: d, guildId: a, user: t, modReportId: i });
                    });
                },
                children: (0, r.jsx)(tV.N, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: y.A.colors.TEXT_DEFAULT.css,
                }),
            }),
            (0, r.jsx)(t4, {
                disabled: !_,
                text: eo.intl.string(eo.t["5MBJ5M"]),
                onClick: () => {
                    (0, ty.openModalLazy)(async () => {
                        let { default: e } = await n.e("2504").then(n.bind(n, 333179));
                        return (n) => (0, r.jsx)(e, { ...n, location: d, guildId: a, user: t, modReportId: i });
                    });
                },
                children: (0, r.jsx)(tH.w, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: y.A.colors.TEXT_DEFAULT.css,
                }),
            }),
            (0, r.jsx)(t4, {
                disabled: !o,
                text: u ? eo.intl.string(eo.t.N86XcP) : eo.intl.string(eo.t.kTlLrz),
                onClick: () => {
                    u
                        ? (0, tY.Y)({ guildId: l.guildId, userId: l.userId, anaylticsLocations: c })
                        : (0, tY.R)({ guildId: l.guildId, userId: l.userId, anaylticsLocations: c, modReportId: i });
                },
                children: (0, r.jsx)(eQ.g, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: y.A.colors.TEXT_DEFAULT.css,
                }),
            }),
            (0, r.jsx)(t4, {
                text: eo.intl.string(eo.t.IHTjzA),
                onClick: () => {
                    A(tJ.Nj.COPY_ID), (0, t0.C)(t.id);
                },
                disabled: !t0.p5,
                children: (0, r.jsx)(tw.L, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: y.A.colors.TEXT_DEFAULT.css,
                }),
            }),
        ],
    });
}
function t9(e) {
    let { userId: t, guildId: n, onClose: l, moderatorReportId: a } = e,
        i = (0, U.bG)([S.default], () => S.default.getUser(t), [t]),
        s = (0, U.bG)([m.Ay], () => m.Ay.getMember(n, t), [n, t]);
    return null == i || null == s
        ? null
        : (0, r.jsxs)("div", {
              className: t2.kL,
              children: [
                  (0, r.jsx)(t6, { user: i, guildId: n, onClose: l }),
                  (0, r.jsx)(t5, { user: i, member: s, guildId: n, moderatorReportId: a }),
              ],
          });
}
var t7 = n(271730);
function t8(e) {
    let { userId: t, guildId: n, onClose: l, className: a, infoPanelClassName: s, style: D, moderatorReportId: h } = e,
        L = (0, R.q)(n),
        C = (0, _.bG)([S.default], () => S.default.getUser(t), [t]),
        M = (0, _.bG)([m.Ay], () => m.Ay.getMember(n, t), [n, t]),
        [f, x] = i.useState(null == C || null == M),
        U = (0, c.A)(M),
        p = i.useRef(null),
        { analyticsLocations: b } = (0, T.Ay)(g.A.GUILD_MEMBER_MOD_VIEW),
        F = (0, N.Ay)(t, n),
        k = (0, d.Ay)();
    return (i.useEffect(() => {
        L || l();
    }, [L, l]),
    i.useEffect(() => {
        null == U || null != M || f || l();
    }, [f, M, l, U]),
    i.useEffect(() => {
        null != C && null != M && x(!1);
    }, [C, M]),
    i.useEffect(() => {
        let e = null == M;
        return (
            !f && e && (p.current = window.setTimeout(l, 500)),
            () => {
                null != p.current && window.clearTimeout(p.current);
            }
        );
    }, [f, M, l]),
    (0, A.Eq)({ [n]: [t] }, "GuildMemberModViewSidebar"),
    i.useEffect(() => {
        !(async function () {
            let e = [
                u.A.requestMembersById(n, [t]),
                (0, I.jo)(n, [t]),
                (0, G.A)(t, void 0, { guildId: n, dispatchWait: !0 }),
            ];
            await Promise.all(e), x(!1);
        })();
    }, [n, t]),
    L)
        ? f || null == C || null == M
            ? (0, r.jsx)("div", {
                  className: E()(t7.so, t7.g4, a),
                  style: D,
                  children: (0, r.jsx)(o.y, {
                      animated: !0,
                      type: f ? o.y.Type.SPINNING_CIRCLE : o.y.Type.CHASING_DOTS,
                  }),
              })
            : (0, r.jsx)(T.f5, {
                  value: b,
                  children: (0, r.jsx)("div", {
                      className: E()(t7.so, a),
                      style: D,
                      children: (0, r.jsx)(O.A, {
                          user: C,
                          displayProfile: F,
                          themeType: null,
                          themeOverride: k,
                          forceShowPremium: !0,
                          className: t7.a2,
                          children: (0, r.jsxs)("div", {
                              className: t7.WH,
                              children: [
                                  (0, r.jsx)(t9, { userId: t, guildId: n, onClose: l, moderatorReportId: h }),
                                  (0, r.jsx)(tj, { userId: t, guildId: n, onClose: l, className: s }),
                              ],
                          }),
                      }),
                  }),
              })
        : null;
}
