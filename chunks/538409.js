n.r(t), n.d(t, { default: () => t8 });
var l,
    r,
    a = n(627968),
    i = n(64700),
    s = n(503698),
    E = n.n(s),
    u = n(17928),
    _ = n(289873),
    c = n(66834),
    o = n(475743),
    A = n(736653),
    d = n(80682),
    T = n(793574),
    g = n(688810),
    I = n(221950),
    N = n(999291),
    G = n(454719),
    O = n(946356),
    S = n(696451),
    D = n(287809),
    R = n(985925),
    m = n(785651),
    L = n(66455),
    h = n(844222),
    C = n(866323),
    M = n(775121),
    U = n(761640),
    x = n(901472),
    f = n(702841),
    p = n(534514),
    F = n(939249),
    P = n(475358),
    k = n(364522),
    j = n(881548),
    v = n(452027),
    X = n(179866),
    b = n(834730),
    B = n(947641),
    y = n(661531),
    V = n(807072),
    H = n(622629),
    w = n(111159),
    Y = n(241541),
    W = n(854378);
n(938796);
var K = n(665260),
    z = n(709977),
    J = n(773669),
    Q = n(71393),
    q = n(935208),
    Z = n(151781),
    $ = n(340837);
let ee = { month: "short", day: "numeric", year: "numeric" },
    et = { month: "numeric", day: "numeric", year: "numeric" };
var en =
        (((l = {})[(l.NO_GATE = 0)] = "NO_GATE"),
        (l[(l.NO_AGREEMENT = 1)] = "NO_AGREEMENT"),
        (l[(l.AGREED = 2)] = "AGREED"),
        l),
    el = n(589935),
    er = n(309010),
    ea = n(881636),
    ei = n(12466);
function es(e) {
    let { description: t, name: n, icon: l, onNavigate: r, className: i, missingNavIcon: s } = e;
    return (0, a.jsxs)(F.D, {
        onClick: r,
        className: E()(ei.ol, null != r && ei.xO, i),
        children: [
            null != l && (0, a.jsx)("div", { className: ei.bl, children: l }),
            null != n && (0, a.jsx)("div", { className: ei.NR, children: n }),
            (0, a.jsx)("div", { className: ei.uV, children: t }),
            null != r &&
                (0, a.jsx)("div", {
                    className: ei.Rp,
                    children: (0, a.jsx)(ea.u, { size: "custom", width: 16, height: 16 }),
                }),
            null == r && null != s && (0, a.jsx)("div", { className: ei.Rp, children: s }),
        ],
    });
}
function eE(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: ei.Fz, children: t });
}
var eu = n(652215),
    e_ = n(375708),
    ec = n(645267);
function eo(e) {
    var t, n, l, r, s;
    let E,
        u,
        _,
        c,
        o,
        A,
        d,
        { member: T } = e,
        g = (0, f.bG)([Q.A], () => Q.A.getGuild(T.guildId), [T.guildId]),
        N = (function (e, t) {
            let n = (0, f.bG)([D.default], () => D.default.getUser(e), [e]),
                l = (0, f.bG)([S.Ay], () => S.Ay.getMember(t, e), [t, e]);
            if (null == n || null == l) return !1;
            let r = (0, K.Lt)(l.flags ?? 0, $.D.BYPASSES_VERIFICATION),
                a = n?.isPhoneVerified() || n?.isStaff(),
                i = l?.joinedAt != null;
            return n.verified || a || i || r;
        })(T.userId, T.guildId),
        G =
            ((t = T.userId),
            (n = T.guildId),
            (E = (0, f.bG)([D.default], () => D.default.getUser(t), [t])),
            (u = (0, f.bG)([S.Ay], () => S.Ay.getMember(n, t), [n, t])),
            (_ = (0, f.bG)([Q.A], () => Q.A.getGuild(n), [n])),
            (0, z.Qd)(_)
                ? null == E || null == u || null == _
                    ? 1
                    : (0, K.Lt)(u.flags ?? 0, $.D.BYPASSES_VERIFICATION) ||
                        (0, K.Lt)(u.flags ?? 0, $.D.COMPLETED_ONBOARDING) ||
                        (null != u.isPending && !u.isPending)
                      ? 2
                      : 1
                : 0),
        O =
            ((l = T.userId),
            (c = (0, f.bG)([J.default], () => J.default.locale)),
            i.useMemo(() => new Date(q.default.extractTimestamp(l)).toLocaleDateString(c, ee), [l, c])),
        R =
            ((r = T.userId),
            (s = T.guildId),
            (o = (0, f.bG)([J.default], () => J.default.locale)),
            (A = (0, f.bG)([S.Ay], () => S.Ay.getMember(s, r), [s, r])),
            (d = A?.joinedAt),
            i.useMemo(() => (null == d ? "" : new Date(d).toLocaleDateString(o, ee)), [d, o]));
    return (i.useEffect(() => {
        (0, I.uO)(T.guildId);
    }, [T.guildId]),
    null == g)
        ? null
        : (0, a.jsx)(v.D, {
              label: e_.intl.string(e_.t["ldCE/p"]),
              children: (0, a.jsxs)(eE, {
                  children: [
                      (0, a.jsx)(es, {
                          icon: (0, a.jsx)(X.i, { size: "custom", width: 16, height: 16 }),
                          name: (0, a.jsx)(b.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: e_.intl.string(e_.t.nzGai4),
                          }),
                          description: N
                              ? (0, a.jsx)(B.r, {
                                    size: "custom",
                                    width: 16,
                                    height: 16,
                                    color: y.A.colors.STATUS_POSITIVE,
                                })
                              : (0, a.jsx)(V.U, {
                                    size: "custom",
                                    width: 16,
                                    height: 16,
                                    color: y.A.colors.ICON_FEEDBACK_CRITICAL,
                                }),
                      }),
                      G !== en.NO_GATE &&
                          (0, a.jsx)(es, {
                              icon: (0, a.jsx)(H.B, { size: "custom", width: 16, height: 16 }),
                              name: (0, a.jsx)(b.E, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  children: e_.intl.string(e_.t["93hqln"]),
                              }),
                              description:
                                  G === en.AGREED
                                      ? (0, a.jsx)(B.r, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: y.A.colors.STATUS_POSITIVE,
                                        })
                                      : (0, a.jsx)(V.U, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: y.A.colors.ICON_FEEDBACK_CRITICAL,
                                        }),
                          }),
                      (0, a.jsx)(es, {
                          icon: (0, a.jsx)(w.p, { size: "custom", color: "currentColor", width: 16, height: 16 }),
                          name: (0, a.jsx)(b.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: e_.intl.string(e_.t.SaDIpL),
                          }),
                          description: (0, a.jsx)(b.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: O,
                          }),
                      }),
                      (0, a.jsx)(es, {
                          icon: (0, a.jsx)(W.$v, { guild: g, size: W.$v.Sizes.SMOL, animate: !1, className: ec.$f }),
                          name: (0, a.jsx)(b.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: e_.intl.string(e_.t["NQJ+WG"]),
                          }),
                          description: (0, a.jsx)(b.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: R,
                          }),
                      }),
                      (0, a.jsx)(es, {
                          icon: (0, a.jsx)(Y.D, { size: "custom", width: 16, height: 16 }),
                          name: (0, a.jsx)(b.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: e_.intl.string(e_.t["eJOq+Z"]),
                          }),
                          description: (0, a.jsx)(b.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: (0, a.jsx)(el.Ay, {
                                  userId: T.userId,
                                  guildId: T.guildId,
                                  showJoinMethodContextAsFooter: !0,
                                  onClickInviter: (e) => {
                                      let t = er.A.getChannelId();
                                      (0, x.z)(T.guildId, e.id, t ?? eu.dJq);
                                  },
                              }),
                          }),
                      }),
                  ],
              }),
          });
}
var eA = n(990078),
    ed = n(245604),
    eT = n(189552),
    eg = n(950072),
    eI = n(317525),
    eN = n(576705);
function eG(e) {
    let { member: t } = e,
        n = (0, f.bG)([Q.A], () => Q.A.getGuild(t.guildId)),
        l = (0, f.bG)([eI.A], () => eI.A.getSortedRoles(t.guildId)),
        r = i.useMemo(
            () => l.filter((e) => e.id !== t.highestRoleId && t.roles.includes(e.id)),
            [t.roles, t.highestRoleId, l],
        ),
        s = (0, f.bG)([Z.A], () => Z.A.getEnhancedMember(t.guildId, t.userId), [t.guildId, t.userId]),
        u = (0, eT.YH)(s),
        _ = (0, eT.Cy)(t),
        c = (0, f.bG)([eN.A], () => eN.A.can(eu.xBc.MANAGE_ROLES, n), [n]);
    return null == n
        ? null
        : (0, a.jsx)(v.D, {
              label: e_.intl.string(e_.t["LPJmL/"]),
              children: (0, a.jsx)(eE, {
                  children: (0, a.jsx)(es, {
                      description:
                          t.roles.length > 0 || c
                              ? (0, a.jsxs)("div", {
                                    className: ec.yk,
                                    children: [
                                        (0, a.jsx)(eA.m, {
                                            asContainer: !0,
                                            "aria-label": e_.intl.string(e_.t["0g8Xd/"]),
                                            text: e_.intl.string(e_.t["93S+lG"]),
                                            children: (0, a.jsx)(F.D, {
                                                children: (0, a.jsx)(eg.A, {
                                                    className: E()(ec.Zf, ec.Lc),
                                                    role: u,
                                                    guildId: t.guildId,
                                                }),
                                            }),
                                        }),
                                        r.map((e) =>
                                            (0, a.jsx)(eg.A, { className: ec.Zf, role: e, guildId: t.guildId }, e.id),
                                        ),
                                        c &&
                                            (0, a.jsx)(eA.m, {
                                                asContainer: !0,
                                                "aria-label": e_.intl.string(e_.t.ljnBlo),
                                                text: e_.intl.string(e_.t.ljnBlo),
                                                children: (0, a.jsx)(F.D, {
                                                    onClick: _,
                                                    className: ec.$g,
                                                    children: (0, a.jsx)(ed.U, {
                                                        size: "custom",
                                                        color: "currentColor",
                                                        className: ec.fd,
                                                        width: 20,
                                                        height: 20,
                                                    }),
                                                }),
                                            }),
                                    ],
                                })
                              : (0, a.jsx)("div", {
                                    className: ec.pl,
                                    children: (0, a.jsx)(b.E, {
                                        variant: "text-sm/normal",
                                        children: e_.intl.string(e_.t.nZfHsf),
                                    }),
                                }),
                  }),
              }),
          });
}
var eO = n(989349),
    eS = n.n(eO),
    eD = n(463930),
    eR = n(137130),
    em = n(555067),
    eL = n(523599),
    eh = n(438407),
    eC = n(967144),
    eM = n(562153),
    eU = n(337154);
function ex(e) {
    var t;
    let n,
        { log: l, member: r, guild: s } = e,
        { analyticsLocations: u } = (0, g.Ay)(),
        _ = em.getSimpleAuditLogTitleFromChange(l),
        c = em.getSimpleAuditLogTitleContextFromChange(l),
        o = em.findChangeByKey(eu.gGk.REASON, l)?.newValue,
        A = em.getSimpleAuditLogChangeDetails(l),
        d =
            ((t = l.id),
            (n = (0, f.bG)([J.default], () => J.default.locale)),
            i.useMemo(() => new Date(q.default.extractTimestamp(t)).toLocaleDateString(n, et), [t, n])),
        T = (0, f.bG)([S.Ay], () => (null != l.userId ? S.Ay.getMember(r.guildId, l.userId) : null), [
            r.guildId,
            l.userId,
        ]),
        I = (0, eC.gn)(T?.guildId, T?.userId, T?.colorStrings ?? null),
        N = i.useCallback(
            (e) => (t) => {
                t.preventDefault(), t.stopPropagation(), null != e && (0, eT.Ko)(e, u);
            },
            [u],
        ),
        G = i.useCallback(
            () =>
                null == l.user
                    ? null
                    : (0, a.jsx)(eA.m, {
                          asContainer: !0,
                          text: e_.intl.string(e_.t.mvsi9n),
                          children: (0, a.jsx)(F.D, {
                              onClick: N(T),
                              tag: "span",
                              className: eU.Xh,
                              children: (0, a.jsxs)(b.E, {
                                  variant: "text-sm/medium",
                                  tag: "span",
                                  children: [
                                      "@",
                                      (0, a.jsx)(eD.g, {
                                          name: eM.Ay.getName(r.guildId, null, l.user),
                                          colorString: T?.colorString ?? null,
                                          colorStrings: I,
                                      }),
                                  ],
                              }),
                          }),
                      }),
            [N, l.user, r.guildId, T, I],
        )();
    return (0, a.jsxs)("div", {
        className: E()(ei.ol, eU.$9),
        children: [
            (0, a.jsxs)("div", {
                className: eU._6,
                children: [
                    (0, a.jsxs)("div", {
                        className: eU.lc,
                        children: [
                            null != _ &&
                                (0, a.jsx)(b.E, { variant: "text-sm/semibold", color: "text-strong", children: _ }),
                            null != c &&
                                (0, a.jsxs)(b.E, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: ["(", "string" == typeof c ? c : eS()(c).fromNow(), ")"],
                                }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: eU.FS,
                        children: (0, a.jsx)(b.E, { variant: "text-sm/medium", color: "text-strong", children: d }),
                    }),
                ],
            }),
            null != o &&
                (0, a.jsx)("div", {
                    className: eU.Xy,
                    children: (0, a.jsxs)("div", {
                        className: eU.eH,
                        children: [
                            G,
                            (0, a.jsx)(b.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tag: "span",
                                children: o,
                            }),
                        ],
                    }),
                }),
            null == o &&
                null != A &&
                (0, a.jsx)("div", {
                    className: eU.Xy,
                    children: (0, a.jsxs)("div", {
                        className: eU.E9,
                        children: [
                            G,
                            (0, a.jsx)(b.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tag: "span",
                                children: A,
                            }),
                        ],
                    }),
                }),
            null == o &&
                null == A &&
                (0, a.jsx)("div", {
                    className: eU.Xy,
                    children: (0, a.jsx)("div", {
                        className: eU.E9,
                        children: (0, a.jsx)(b.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            tag: "span",
                            children: (0, a.jsx)(eh.r, {
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
function ef(e) {
    let { member: t } = e,
        n = (0, f.bG)([Q.A], () => Q.A.getGuild(t.guildId), [t.guildId]),
        l = (0, f.bG)([eL.A], () => {
            let e = eL.A.logs;
            return null == e || null == n ? [] : em.transformLogs(e, n);
        }, [n]);
    return (i.useEffect(() => {
        !(async function (e, t) {
            await eR.Qi(t, e);
        })(t.guildId, t.userId);
    }, [t.guildId, t.userId]),
    null == n || 0 === l.length)
        ? null
        : (0, a.jsx)(v.D, {
              label: e_.intl.string(e_.t.flCxLo),
              children:
                  l.length > 0
                      ? (0, a.jsx)(eE, {
                            children: l.map((e) => (0, a.jsx)(ex, { log: e, member: t, guild: n }, e.id)),
                        })
                      : null,
          });
}
n(321073);
var ep = n(254138),
    eF = n(320448),
    eP = n(376092),
    ek = n(558393),
    ej = n(136722),
    ev = n(260509),
    eX = n(34457),
    eb = n(488926),
    eB = n(124759);
let ey = Object.keys(eu.xBc),
    eV = Array.from(
        new Set([
            ...eB.dR,
            ...eu.nfo,
            eu.xBc.ADMINISTRATOR,
            eu.xBc.KICK_MEMBERS,
            eu.xBc.BAN_MEMBERS,
            eu.xBc.MANAGE_GUILD,
            eu.xBc.MANAGE_CHANNELS,
            eu.xBc.MANAGE_ROLES,
            eu.xBc.MANAGE_MESSAGES,
            eu.xBc.MANAGE_THREADS,
            eu.xBc.MANAGE_GUILD_EXPRESSIONS,
            eu.xBc.CREATE_GUILD_EXPRESSIONS,
            eu.xBc.MANAGE_EVENTS,
            eu.xBc.CREATE_EVENTS,
            eu.xBc.MODERATE_MEMBERS,
            eu.xBc.MENTION_EVERYONE,
            eu.xBc.MANAGE_WEBHOOKS,
        ]),
    ).map((e) => {
        let t = ey.find((t) => eu.xBc[t] === e);
        if (null == t) throw Error(`Permission ${e} not found in Permissions`);
        return t;
    }),
    eH = new Set(eu.nfo);
function ew(e, t, n) {
    let l = (0, f.bG)([Q.A], () => Q.A.getGuild(t), [t]);
    return (0, f.bG)([S.Ay, D.default, eI.A], () => {
        let r = {},
            a = S.Ay.getMember(t, e),
            i = D.default.getUser(e);
        if (null == l || null == a || null == i) return r;
        let s = eI.A.getEveryoneRole(l),
            E = eb.cc({ user: i, context: l });
        for (let e of n) {
            let t = eu.xBc[e];
            if (ej.zy(E, t)) {
                for (let n of ((r[e] = []), a.roles)) {
                    let a = eI.A.getRole(l.id, n);
                    null != a && ((0, eX._m)(a, eu.xBc.ADMINISTRATOR) || (0, eX.sx)(a, t)) && r[e].push(a.id);
                }
                ((0, eX._m)(s, eu.xBc.ADMINISTRATOR) || (0, eX.sx)(s, t)) && r[e].push(s.id),
                    (0, ev.bM)(l, i) && r[e].push(i.id);
            }
        }
        return r;
    }, [l, t, n, e]);
}
var eY = n(486974),
    eW = n(830173);
function eK(e) {
    let { permission: t, roleIds: n, guild: l, specMap: r } = e,
        i = eu.xBc[t],
        s = r[i.toString()]?.title ?? (0, eP.hx)(i),
        u = eH.has(i),
        _ = (0, f.yK)([eI.A], () => eI.A.getManyRoles(l.id, n), [l.id, n]);
    return (0, a.jsx)(eA.m, {
        "aria-label": e_.intl.string(e_.t["0g8Xd/"]),
        __unsupportedReactNodeAsText: (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(b.E, {
                    variant: "text-sm/normal",
                    children: u ? e_.intl.string(e_.t["GEuu/O"]) : e_.intl.string(e_.t.wgGiCk),
                }),
                _.map((e) =>
                    (0, a.jsx)(
                        "div",
                        { className: eW.Zf, children: (0, a.jsx)(eg.A, { role: e, guildId: l.id }) },
                        e.id,
                    ),
                ),
            ],
        }),
        children: (0, a.jsxs)(F.D, {
            className: E()(eW.t2, { [eW.aE]: u }),
            children: [
                u && (0, a.jsx)(ep.m, { size: "custom", width: 16, height: 16, color: y.A.colors.TEXT_BRAND }),
                (0, a.jsx)(b.E, { variant: "text-xs/medium", color: "interactive-text-default", children: s }),
            ],
        }),
    });
}
let ez = i.memo(function (e) {
    let { member: t, onNavigate: n } = e,
        l = (0, f.bG)([Q.A], () => Q.A.getGuild(t.guildId), [t.guildId]),
        r = ew(t.userId, t.guildId, eV),
        s = ew(t.userId, t.guildId, ey),
        u = Object.keys(r).length,
        _ = Object.keys(s).length,
        c = i.useMemo(() => (null != l ? ek.A.getGuildPermissionSpecMap(l) : null), [l]),
        o = i.useMemo(() => (null != l ? ek.A.generateGuildPermissionSpec(l) : null), [l]),
        A = i.useMemo(() => {
            if (null == l || null == c) return null;
            if (0 === u)
                return (0, a.jsx)("div", {
                    className: E()(eW.t2, eW.FI),
                    children: (0, a.jsx)(b.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-positive",
                        children: e_.intl.string(e_.t.sXhykX),
                    }),
                });
            let e = [];
            return (
                o?.forEach((t) => {
                    t.permissions.forEach((t) => {
                        let n = t.flag,
                            i = ey.find((e) => eu.xBc[e] === n);
                        if (null == i) return;
                        let s = r[i];
                        null != s && e.push((0, a.jsx)(eK, { permission: i, roleIds: s, guild: l, specMap: c }, i));
                    });
                }),
                e
            );
        }, [l, u, r, o, c]);
    return null == l
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsxs)("div", {
                      className: eW.N1,
                      children: [
                          (0, a.jsx)(b.E, {
                              variant: "eyebrow",
                              color: "text-default",
                              children: e_.intl.string(e_.t.ZCq2nC),
                          }),
                          (0, a.jsxs)(F.D, {
                              className: eW.bz,
                              onClick: () => n(eY.g.PERMISSIONS),
                              children: [
                                  (0, a.jsx)(b.E, {
                                      variant: "eyebrow",
                                      color: "interactive-text-default",
                                      children: e_.intl.format(e_.t["0x6aTm"], { count: _ }),
                                  }),
                                  (0, a.jsx)(eF._, { size: "custom", width: 16, height: 16 }),
                              ],
                          }),
                      ],
                  }),
                  (0, a.jsx)(eE, {
                      children: (0, a.jsx)(es, { description: (0, a.jsx)("div", { className: eW.SL, children: A }) }),
                  }),
              ],
          });
});
var eJ = n(953822),
    eQ = n(60270),
    eq = n(576470),
    eZ = n(316031),
    e$ = n(157347);
function e0(e) {
    let { member: t } = e,
        n = t.userId,
        l = t.guildId,
        r = ((0, f.bG)([Z.A], () => Z.A.getEnhancedMember(l, n), [n, l]) ?? t).unusualDMActivityUntil,
        s = i.useCallback((e) => {
            if (null == e) return null;
            let t = new Date(e).getTime();
            return (0, e$.hL)(t, e$.wN.JOINED_AT);
        }, []),
        E = i.useMemo(() => (null == t ? null : s(r)), [t, s, r]),
        u = i.useMemo(() => (0, eZ.n)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
        _ = i.useMemo(
            () => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)),
            [t.communicationDisabledUntil],
        );
    return null != r || u
        ? (0, a.jsx)(v.D, {
              label: e_.intl.string(e_.t["7V3759"]),
              children: (0, a.jsxs)(eE, {
                  children: [
                      null != r &&
                          (0, a.jsx)(es, {
                              icon: (0, a.jsx)(eJ.E, { size: "custom", color: "currentColor", width: 16, height: 16 }),
                              name: (0, a.jsx)(b.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: e_.intl.string(e_.t.ZRnON3),
                              }),
                              description: (0, a.jsx)(b.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: E,
                              }),
                          }),
                      u &&
                          null != _ &&
                          (0, a.jsx)(es, {
                              icon: (0, a.jsx)(eQ.g, { size: "custom", color: "currentColor", width: 16, height: 16 }),
                              name: (0, a.jsx)(b.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: e_.intl.string(e_.t["TJ8/tE"]),
                              }),
                              description: (0, a.jsx)(b.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: (0, a.jsx)(eq.A, { deadline: _, showUnits: !0, stopAtOneSec: !0 }),
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
var e1 = n(534890),
    e6 = n(173936),
    e3 = n(477262),
    e2 = n(942381),
    e7 = n(265690),
    e5 = n(121894),
    e9 = n(228366),
    e4 = n(177068),
    e8 = n(736130),
    te = (((r = {}).MESSAGES = "messages"), (r.LINKS = "links"), (r.MEDIA = "media"), (r.ALL_COUNTS = "all_counts"), r);
function tt(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = JSON.stringify(l);
    return r
        ? `guild_${t}_search_tab_${n}_for_${e}_with_additonal_${a}`
        : `guild_${t}_search_${n}_for_${e}_with_additonal_${a}`;
}
let tn = { searchFetcher: null, searchTabFetcher: null, result: null, messageCount: -1, lastMessage: null },
    tl = (0, e7.h)(() => new Map()),
    tr = (e, t) => {
        (0, e5.r)(() => {
            tl.setState((n) => {
                let l = n.get(e);
                return null == l ? n.set(e, { ...tn, ...t }) : n.set(e, { ...l, ...t }), n;
            });
        });
    },
    ta = (e) => tl((t) => t.get(e), e2.x);
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
    let r = i.useMemo(() => tt(e, t, n, l, !0), [e, t, n, l]),
        a = ta(r),
        s = (0, o.A)(r);
    return { key: r, previousKey: s, state: a };
}
function tE(e) {
    let { userId: t, guildId: n } = e,
        l = (0, u.bG)([U.Ay], () => U.Ay.getGuildSidebarState(n), [n]),
        {
            messagesCount: r,
            linksCount: s,
            mediaCount: E,
        } = (function (e, t) {
            let { key: n, state: l } = ts(e, t, "messages", void 0),
                { key: r, state: a } = ts(e, t, "links", void 0),
                { key: s, state: E } = ts(e, t, "media", void 0),
                u = i.useMemo(() => ti(e, "all_counts", void 0), [e, void 0]),
                _ = i.useMemo(
                    () => ({
                        tabs: { messages: ti(e, "messages", u), links: ti(e, "links", u), media: ti(e, "media", u) },
                        track_exact_total_hits: !0,
                        include_nsfw: !0,
                    }),
                    [e, u],
                ),
                c = i.useCallback(
                    (e) => {
                        let t = e.messages,
                            l = e.links,
                            a = e.media;
                        tr(n, t), tr(r, l), tr(s, a);
                    },
                    [r, s, n],
                ),
                o = i.useCallback(
                    (e) => {
                        c({ messages: e, links: e, media: e });
                    },
                    [c],
                );
            i.useEffect(() => {
                let e = new e4.DX(t, eu.I4_.GUILD, u, _);
                o({ searchTabFetcher: e, messageCount: -1, lastMessage: null });
                let n = setTimeout(async () => {
                    let t = null;
                    try {
                        let n = await e.makeRequest({ rejectWithError: !1 });
                        t = n?.body;
                    } catch (e) {
                        t = null;
                    }
                    if (null == t) o({ messageCount: 0, lastMessage: null });
                    else {
                        let e = t.tabs.messages,
                            n = t.tabs.links,
                            l = t.tabs.media;
                        c({
                            messages: { messageCount: e?.total_results ?? 0, lastMessage: e?.messages[0] ?? null },
                            links: { messageCount: n?.total_results ?? 0, lastMessage: n?.messages[0] ?? null },
                            media: { messageCount: l?.total_results ?? 0, lastMessage: l?.messages[0] ?? null },
                        });
                    }
                    d({});
                });
                return () => {
                    e.cancel(), clearTimeout(n);
                };
            }, [e, t, u, _, o, c]);
            let [A, d] = i.useState({});
            return {
                messagesCount: l?.messageCount ?? -1,
                linksCount: a?.messageCount ?? -1,
                mediaCount: E?.messageCount ?? -1,
            };
        })(t, n),
        c = new Intl.NumberFormat(e_.intl.currentLocale).format(r),
        o = new Intl.NumberFormat(e_.intl.currentLocale).format(s),
        A = new Intl.NumberFormat(e_.intl.currentLocale).format(E),
        d = i.useCallback(
            async (e) => {
                if (null == l) return;
                let r = ti(t, e, { include_nsfw: !0 });
                await (0, x.z)(n, t, l.baseChannelId, { modViewPanel: eY.g.MESSAGE_HISTORY, additionalSearchQuery: r });
            },
            [n, l, t],
        );
    return (0, a.jsx)(v.D, {
        label: e_.intl.string(e_.t.vCn2Tn),
        children: (0, a.jsxs)(eE, {
            children: [
                (0, a.jsx)(es, {
                    icon: (0, a.jsx)(e1.o, { size: "custom", color: "currentColor", width: 16, height: 16 }),
                    name: (0, a.jsx)(b.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: e_.intl.string(e_.t.OIgYlQ),
                    }),
                    description:
                        -1 === r
                            ? (0, a.jsx)(_.y, { type: _.t.SPINNING_CIRCLE, className: ec.S })
                            : (0, a.jsx)(b.E, {
                                  variant: "text-sm/semibold",
                                  color: "interactive-text-default",
                                  children: c,
                              }),
                    onNavigate: r > 0 ? () => d(te.MESSAGES) : void 0,
                }),
                (0, a.jsx)(es, {
                    icon: (0, a.jsx)(e6.q, { size: "custom", width: 16, height: 16 }),
                    name: (0, a.jsx)(b.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: e_.intl.string(e_.t.DFSvTt),
                    }),
                    description:
                        -1 === s
                            ? (0, a.jsx)(_.y, { type: _.t.SPINNING_CIRCLE, className: ec.S })
                            : (0, a.jsx)(b.E, {
                                  variant: "text-sm/semibold",
                                  color: "interactive-text-default",
                                  children: o,
                              }),
                    onNavigate: s > 0 ? () => d(te.LINKS) : void 0,
                }),
                (0, a.jsx)(es, {
                    icon: (0, a.jsx)(e3.s, { size: "custom", width: 16, height: 16 }),
                    name: (0, a.jsx)(b.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: e_.intl.string(e_.t["Aw9+/M"]),
                    }),
                    description:
                        -1 === E
                            ? (0, a.jsx)(_.y, { type: _.t.SPINNING_CIRCLE, className: ec.S })
                            : (0, a.jsx)(b.E, {
                                  variant: "text-sm/semibold",
                                  color: "interactive-text-default",
                                  children: A,
                              }),
                    onNavigate: E > 0 ? () => d(te.MEDIA) : void 0,
                }),
            ],
        }),
    });
}
function tu(e) {
    let { onClose: t } = e;
    return (0, a.jsxs)("div", {
        className: ec.wx,
        children: [
            (0, a.jsxs)("div", {
                className: ec.qd,
                children: [
                    (0, a.jsx)(j.A, { width: 16, height: 16 }),
                    (0, a.jsx)(p.D, { variant: "heading-md/semibold", children: e_.intl.string(e_.t.cf5lgh) }),
                ],
            }),
            (0, a.jsx)(F.D, {
                onClick: (e) => {
                    e.stopPropagation(), t();
                },
                children: (0, a.jsx)(P.e, { shortcut: "esc", keyClassName: ec.Wb, className: ec.ti }),
            }),
        ],
    });
}
function t_(e) {
    let { userId: t, guildId: n, location: l, className: r, onClose: i, onNavigate: s } = e,
        u = (0, f.bG)([D.default], () => D.default.getUser(t), [t]),
        _ = (0, f.bG)([S.Ay], () => S.Ay.getMember(n, t), [n, t]);
    return null == u || null == _
        ? null
        : (0, a.jsxs)("div", {
              className: E()(ec.kL, r),
              children: [
                  (0, a.jsx)(tu, { onClose: i }),
                  (0, a.jsxs)(k.Ip, {
                      className: ec.WH,
                      children: [
                          (0, a.jsx)(e0, { member: _ }),
                          (0, a.jsx)(tE, { userId: t, guildId: n }),
                          (0, a.jsx)(ez, { member: _, onNavigate: s }),
                          (0, a.jsx)(eG, { member: _ }),
                          (0, a.jsx)(eo, { member: _ }),
                          (0, a.jsx)(ef, { member: _ }),
                      ],
                  }),
              ],
          });
}
var tc = n(735438),
    to = n(689175),
    tA = n(964486),
    td = n(738768),
    tT = n(457699),
    tg = n(320095),
    tI = n(465364),
    tN = n(142662),
    tG = n(383233),
    tO = n(994500),
    tS = n(477155),
    tD = n(104168);
function tR(e) {
    let { onNavigate: t, backPanel: n = eY.g.INFO } = e;
    return (0, a.jsxs)("div", {
        className: ec.wx,
        children: [
            (0, a.jsx)("div", {
                className: ec.qd,
                children: (0, a.jsxs)(F.D, {
                    className: tD.Gv,
                    onClick: () => t?.(n),
                    children: [
                        (0, a.jsx)(tS.r, { size: "custom", width: 20, height: 20 }),
                        (0, a.jsx)(p.D, { variant: "heading-md/semibold", children: e_.intl.string(e_.t["13/7kX"]) }),
                    ],
                }),
            }),
            (0, a.jsx)(F.D, {
                onClick: (e) => {
                    e.stopPropagation(), t?.(n);
                },
                children: (0, a.jsx)(P.e, { shortcut: "esc", keyClassName: tD.Wb, className: tD.ti }),
            }),
        ],
    });
}
var tm = n(375256);
function tL(e) {
    let { userId: t, guildId: n, location: l, className: r, onNavigate: s } = e,
        _ = i.useRef(null),
        c = (0, u.bG)([U.Ay], () => U.Ay.getGuildSidebarState(n), [n]),
        A = i.useRef(0),
        [d, T] = i.useState(c?.details.additionalSearchQuery ?? {}),
        g = (function (e, t, n, l) {
            let { addtionalQuery: r, shouldDispatch: a = !1 } = l,
                s = i.useMemo(() => tt(e, t, n, r), [e, t, n, r]),
                E = ta(s),
                u = (0, o.A)(s),
                [_, c] = i.useState({});
            return (
                i.useEffect(() => {
                    if (u !== s) {
                        let l = ti(e, n, r),
                            i = new e4.MS(t, eu.I4_.GUILD, l);
                        tr(s, { searchFetcher: i, messageCount: -1, lastMessage: null }),
                            setTimeout(() => {
                                i.fetch(
                                    (e) => {
                                        let n = e.body,
                                            l = n.messages[0];
                                        tr(s, {
                                            searchFetcher: i,
                                            result: n,
                                            messageCount: n.total_results,
                                            lastMessage: l,
                                        }),
                                            c({}),
                                            a &&
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
                                        tr(s, { messageCount: 0, lastMessage: null }), c({});
                                    },
                                );
                            });
                    }
                    return () => {};
                }, [e, t, E, s, n, r, u, a]),
                E ?? tn
            );
        })(t, n, "messages", { addtionalQuery: d, shouldDispatch: !0 }),
        I = (0, u.bG)([D.default], () => D.default.getUser(t), [t]),
        N = (0, u.bG)([S.Ay], () => S.Ay.getMember(n, t), [n, t]);
    (0, tA.u5)(() => {
        let e = c?.details.scrollOffset;
        null != e && _.current?.scrollTo({ to: e, animate: !1 });
    });
    let G = i.useCallback(
            (e) => {
                null == c ||
                    ((A.current = e.target.scrollTop),
                    (0, x.z)(n, t, c.baseChannelId, {
                        modViewPanel: eY.g.MESSAGE_HISTORY,
                        additionalSearchQuery: d,
                        scrollOffset: A.current,
                    }));
            },
            [n, t, c, d],
        ),
        O = (0, tc.throttle)(G, 300),
        R = i.useCallback(
            (e) => {
                if (null == c) return;
                let l = { ...d, offset: 25 * e };
                T(l),
                    (0, x.z)(n, t, c.baseChannelId, {
                        modViewPanel: eY.g.MESSAGE_HISTORY,
                        additionalSearchQuery: l,
                        scrollOffset: A.current,
                    });
            },
            [n, t, c, d],
        ),
        m = d?.offset ?? 0,
        [L, h] = i.useState(!1),
        C = (0, u.bG)([tT.A], () => {
            if (null == g.result) return [];
            let e = (0, td.wG)("");
            return g.result.messages
                .map((e) => {
                    let [t] = e;
                    return (0, tg.rh)(t);
                })
                .map((t) => {
                    let n = tT.A.getMessage(t.id, t.channel_id),
                        l = new tG.Ay(t);
                    return (
                        null != n && (l = l.merge({ attachments: n.attachments, embeds: n.embeds })),
                        (l = l.set(
                            "customRenderedContent",
                            (0, tI.Ay)(l, { postProcessor: e, allowHeading: !0, allowList: !0 }),
                        ))
                    );
                });
        }, [g.result]),
        { blockCount: M, ignoreCount: f } = (0, u.cf)([tO.A], () => {
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
                null == g.result
                    ? {
                          documentsIndexed: 0,
                          isSearching: !0,
                          isIndexing: !1,
                          isHistoricalIndexing: !1,
                          offset: m,
                          totalResults: 0,
                          hasError: !1,
                          showBlockedResults: L,
                          showNoResultsAlt: !1,
                      }
                    : {
                          documentsIndexed: g.result.documents_indexed ?? 0,
                          isSearching: !1,
                          isIndexing: g.result.doing_deep_historical_index ?? !1,
                          isHistoricalIndexing: g.result.doing_deep_historical_index ?? !1,
                          offset: m,
                          totalResults: g.result.total_results ?? 0,
                          hasError: !1,
                          showBlockedResults: L,
                          showNoResultsAlt: !1,
                      },
            [g.result, m, L],
        );
    return null == I || null == N || null == p
        ? null
        : (0, a.jsxs)("div", {
              className: E()(ec.kL, r),
              children: [
                  (0, a.jsx)(tR, { guildId: n, userId: t, onNavigate: s }),
                  (0, a.jsx)(to.Ch, {
                      className: tm.W,
                      ref: _,
                      onScroll: O,
                      children: (0, a.jsx)(tN.A, {
                          messages: C,
                          search: p,
                          renderEmbeds: !0,
                          blockCount: M,
                          ignoreCount: f,
                          scrollTo: eu.tEg,
                          onPageChange: R,
                          onBlockedResultsClick: h,
                      }),
                  }),
              ],
          });
}
var th = n(111956),
    tC = n.n(th),
    tM = n(270003),
    tU = n(892547),
    tx = n(640708),
    tf = n(468689),
    tp = n(66835);
function tF(e) {
    let { permission: t, roleIds: n, guild: l, specMap: r, categoryTitle: s, userId: u } = e,
        _ = (0, f.yK)([eI.A], () => eI.A.getManyRoles(l.id, n)),
        c = eu.xBc[t],
        o = r[c.toString()]?.title ?? (0, eP.hx)(c),
        A = r[c.toString()]?.description ?? "",
        d = eH.has(c),
        T = eV.includes(t),
        g = n.length,
        I = (0, f.bG)([eN.A], () => eN.A.can(eu.xBc.MANAGE_ROLES, l), [l]),
        N = i.useCallback(
            async (e) => {
                I && (await tf.A.open(l.id, eu.BEX.ROLES), await tf.A.selectRole(e));
            },
            [I, l.id],
        );
    return (0, a.jsxs)("div", {
        className: E()(tp.wT, { [tp.aE]: d }),
        children: [
            (0, a.jsxs)("div", {
                className: tp.iY,
                children: [
                    (0, a.jsxs)("div", {
                        className: tp.gH,
                        children: [
                            (0, a.jsx)(b.E, { variant: "text-md/medium", color: "text-strong", children: o }),
                            null != s &&
                                (0, a.jsxs)("div", {
                                    className: tp.OQ,
                                    children: [
                                        (0, a.jsx)(b.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: s,
                                        }),
                                        d &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(tx.A, {
                                                        height: 4,
                                                        width: 4,
                                                        "aria-hidden": "true",
                                                        color: y.A.colors.ICON_MUTED.css,
                                                    }),
                                                    (0, a.jsx)(eA.m, {
                                                        text: e_.intl.string(e_.t.GZvXuP),
                                                        children: (0, a.jsxs)(F.D, {
                                                            className: tp.Dc,
                                                            children: [
                                                                (0, a.jsx)(ep.m, {
                                                                    size: "custom",
                                                                    width: 12,
                                                                    height: 12,
                                                                    color: y.A.colors.TEXT_BRAND,
                                                                }),
                                                                (0, a.jsx)(b.E, {
                                                                    variant: "text-xs/normal",
                                                                    color: "text-brand",
                                                                    children: e_.intl.string(e_.t.k7Kqj7),
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        !d &&
                                            T &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(tx.A, {
                                                        height: 4,
                                                        width: 4,
                                                        "aria-hidden": "true",
                                                        color: y.A.colors.ICON_MUTED.css,
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: tp.Dc,
                                                        children: (0, a.jsx)(b.E, {
                                                            variant: "text-xs/normal",
                                                            color: "text-muted",
                                                            children: e_.intl.string(e_.t.IfqUEM),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                        ],
                    }),
                    (0, a.jsx)(b.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: e_.intl.format(e_.t.KmJI4A, { roleCount: g }),
                    }),
                ],
            }),
            null != A &&
                (0, a.jsx)("div", {
                    className: tp.Dp,
                    children: (0, a.jsx)(b.E, { variant: "text-sm/normal", color: "text-subtle", children: A }),
                }),
            (0, a.jsx)("div", {
                className: tp.SY,
                children: _.map((e) =>
                    e.id === u
                        ? (0, a.jsx)(
                              "div",
                              {
                                  className: tp.Zf,
                                  children: (0, a.jsx)("div", {
                                      className: tp.o9,
                                      children: (0, a.jsx)(b.E, {
                                          variant: "text-xs/medium",
                                          color: "text-default",
                                          children: e_.intl.string(e_.t.pclUFJ),
                                      }),
                                  }),
                              },
                              e.id,
                          )
                        : (0, a.jsx)(
                              F.D,
                              {
                                  className: E()(tp.Zf, { [tp.LL]: I && !(0, eX.Oy)(e) }),
                                  onClick: () => N(e.id),
                                  children: (0, a.jsx)(eg.A, { role: e, guildId: l.id, className: tp.o9 }),
                              },
                              e.id,
                          ),
                ),
            }),
        ],
    });
}
function tP(e, t) {
    return t.toLowerCase().includes(e.toLowerCase());
}
function tk(e) {
    let { userId: t, guildId: n, location: l, className: r, onNavigate: s } = e,
        u = (0, f.bG)([D.default], () => D.default.getUser(t), [t]),
        _ = (0, f.bG)([Q.A], () => Q.A.getGuild(n), [n]),
        c = (0, f.bG)([S.Ay], () => S.Ay.getMember(n, t), [n, t]),
        o = ew(t, n, ey),
        A = Object.keys(o).length,
        d = i.useMemo(() => (null != _ ? ek.A.getGuildPermissionSpecMap(_) : null), [_]),
        T = i.useMemo(() => (null != _ ? ek.A.generateGuildPermissionSpec(_) : null), [_]),
        [g, I] = i.useState(""),
        [N, G] = i.useState(""),
        O = i.useMemo(() => tC()(G, 300), []),
        R = i.useCallback(
            (e) => {
                I(e), O(e);
            },
            [O],
        ),
        m = i.useCallback(() => {
            I(""), G("");
        }, []),
        L = i.useMemo(() => {
            if (null == _ || null == d || null == c) return null;
            if (0 === A) return (0, a.jsx)(b.E, { variant: "text-sm/normal", children: e_.intl.string(e_.t.DEBGqA) });
            let e = [];
            return (
                T?.forEach((n) => {
                    n.permissions.forEach((l) => {
                        let r = l.flag,
                            i = ey.find((e) => eu.xBc[e] === r);
                        if (null == i) return;
                        let s = o[i];
                        if (null != s) {
                            if (N.length > 0) {
                                let e = d[r.toString()]?.title ?? (0, eP.hx)(r),
                                    t = d[r.toString()]?.description?.toString() ?? "",
                                    l = n.title,
                                    a = eH.has(r),
                                    s = eV.includes(i),
                                    E = a ? e_.intl.string(e_.t.k7Kqj7) : s ? e_.intl.string(e_.t.IfqUEM) : null,
                                    u = tP(N, e),
                                    _ = tP(N, t),
                                    c = tP(N, l),
                                    o = null != E && tP(N, E);
                                if (!u && !_ && !c && !o) return;
                            }
                            e.push(
                                (0, a.jsx)(
                                    tF,
                                    {
                                        permission: i,
                                        roleIds: s,
                                        guild: _,
                                        specMap: d,
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
        }, [_, d, c, A, T, o, N, t]);
    return null == u || null == c
        ? null
        : (0, a.jsxs)("div", {
              className: E()(ec.kL, r),
              children: [
                  (0, a.jsx)(tR, { guildId: n, userId: t, onNavigate: s }),
                  (0, a.jsx)(k.Ip, {
                      className: tp.b3,
                      children: (0, a.jsx)(tM.n, {
                          label: e_.intl.string(e_.t.BBWnpr),
                          children: (0, a.jsxs)("div", {
                              className: tp.xV,
                              children: [
                                  (0, a.jsx)(tU.I, {
                                      size: "sm",
                                      query: g,
                                      placeholder: e_.intl.string(e_.t["yD9+dN"]),
                                      onChange: R,
                                      onClear: m,
                                      autoComplete: "off",
                                      inputProps: { autoCapitalize: "none", autoCorrect: "off", spellCheck: "false" },
                                  }),
                                  L,
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
function tj(e, t) {
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
function tv(e) {
    let { userId: t, guildId: n, onClose: l, analyticsLocation: r, className: s } = e,
        E = (0, u.bG)([U.Ay], () => U.Ay.getGuildSidebarState(n), [n]),
        _ = E?.details.modViewPanel ?? eY.g.INFO,
        c = (0, o.A)(t),
        A = null == _ ? null : _ === eY.g.INFO ? "backwards" : "forwards",
        d = (0, L.A)(A),
        { reducedMotion: T } = i.useContext(h.C),
        g = i.useCallback(
            (e) => {
                null != E && (0, x.z)(n, t, E.baseChannelId, { modViewPanel: e });
            },
            [E, n, t],
        ),
        I = i.useMemo(
            () => ({
                [eu.IWg.CLOSE_MODAL]: {
                    binds: ["esc"],
                    comboKeysBindGlobal: !0,
                    action: () => (_ === eY.g.INFO ? l() : g(eY.g.INFO)),
                },
            }),
            [l, _, g],
        );
    i.useEffect(() => (M.A.enable(), M.A.enableTemp(I), () => M.A.disableTemp()), [I]);
    let N = (0, C.p)(
        _,
        { value: 0, from: { value: 1 }, enter: { value: 0 }, leave: { value: -1 } },
        c !== t ? "animate-never" : "animate-always",
    );
    return (0, a.jsx)(m.animated.div, {
        style: { position: "relative", height: "100%", flex: 1, overflow: "hidden" },
        children: N((e, r, i) => {
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
                        ...(T.enabled
                            ? { opacity: e.value?.to((e) => 1 - Math.abs(e)) }
                            : { left: e.value?.to(tj("left", d)), right: e.value?.to(tj("right", d)) }),
                    },
                    children: (function (e) {
                        switch (e) {
                            case eY.g.INFO:
                                return (0, a.jsx)(t_, {
                                    userId: t,
                                    guildId: n,
                                    onClose: l,
                                    onNavigate: g,
                                    className: s,
                                });
                            case eY.g.MESSAGE_HISTORY:
                                return (0, a.jsx)(tL, {
                                    userId: t,
                                    guildId: n,
                                    onNavigate: () => g(eY.g.INFO),
                                    className: s,
                                });
                            case eY.g.PERMISSIONS:
                                return (0, a.jsx)(tk, {
                                    userId: t,
                                    guildId: n,
                                    onNavigate: () => g(eY.g.INFO),
                                    className: s,
                                });
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
var tX = n(97808),
    tb = n(778712),
    tB = n(789645),
    ty = n(192308),
    tV = n(905499),
    tH = n(215026),
    tw = n(473935),
    tY = n(308528),
    tW = n(991982),
    tK = n(838111),
    tz = n(351001),
    tJ = n(504049),
    tQ = n(534400),
    tq = n(495544),
    tZ = n(290863),
    t$ = n(461213),
    t0 = n(957565),
    t1 = n(427262),
    t6 = n(743981),
    t3 = n(637498);
function t2(e) {
    let { user: t, guildId: n, onClose: l } = e,
        r = t.id,
        i = (0, f.bG)(
            [t$.A, tZ.A, tq.default],
            () => (r === tq.default.getId() ? t$.A.getStatus() : tZ.A.getStatus(r, n)),
            [r, n],
        );
    return (0, a.jsxs)("div", {
        className: t3.mY,
        children: [
            (0, a.jsxs)("div", {
                className: t3.FD,
                children: [
                    (0, a.jsx)("div", {
                        className: t3.Wn,
                        children: (0, a.jsx)(tX.eu, {
                            src: t.getAvatarURL(n, 48),
                            "aria-label": t.username,
                            size: tb._3.SIZE_48,
                            status: i,
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: t3.oS,
                        children: [
                            (0, a.jsxs)("div", {
                                className: t3.K$,
                                children: [
                                    (0, a.jsx)(b.E, {
                                        variant: "text-lg/medium",
                                        children: (0, a.jsx)(eD.g, {
                                            name: eM.Ay.getName(n, null, t),
                                            colorString: y.A.colors.TEXT_STRONG.css,
                                            colorStrings: null,
                                        }),
                                    }),
                                    (0, a.jsx)(tQ.Ay, {
                                        primaryGuild: t?.primaryGuild,
                                        userId: t?.id,
                                        contextGuildId: n,
                                        badgeSize: t6.Sl.SIZE_16,
                                        textVariant: "heading-md/semibold",
                                        className: t3.Dz,
                                        containerClassName: t3.UL,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(b.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: t1.Ay.getUserTag(t),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(b.E, {
                variant: "text-md/medium",
                color: "text-default",
                children: (0, a.jsx)(F.D, {
                    className: t3.d4,
                    onClick: l,
                    children: (0, a.jsx)(tB.P, { size: "md", color: "currentColor" }),
                }),
            }),
        ],
    });
}
function t7(e) {
    let { tag: t = "div", text: n, disabled: l, children: r, onClick: i, ...s } = e;
    return (0, a.jsx)(eA.m, {
        text: n,
        children: (0, a.jsx)(F.D, {
            ...s,
            tag: t,
            "aria-label": n,
            className: E()(t3.YB, { [t3.aA]: l }),
            onClick: l ? void 0 : i,
            children: (0, a.jsx)("div", { className: t3.MU, children: r }),
        }),
    });
}
function t5(e) {
    let { user: t, member: l, guildId: r, moderatorReportId: i } = e,
        s = (0, f.bG)([Q.A], () => Q.A.getGuild(r)),
        {
            canKickUser: E,
            canBanUser: u,
            canModerateMembers: _,
        } = (0, f.cf)(
            [eN.A, D.default, Q.A],
            () => ({
                canKickUser: (0, tz.L7)(t, s),
                canBanUser: (0, tz.EZ)(t, s),
                canModerateMembers: null != s && (0, tK.b)(s.id, t.id, [D.default, Q.A, eN.A]),
            }),
            [t, s],
        ),
        c = (0, eZ.Z)(l),
        { analyticsLocations: o, newestAnalyticsLocation: A } = (0, g.Ay)(),
        d = (0, tJ.$9)(r, { targetUserId: t.id, location: A, locations: o }),
        T = (0, f.bG)([tq.default], () => tq.default.getId() === t?.id);
    return (0, a.jsxs)("div", {
        className: t3.E_,
        children: [
            (0, a.jsx)(t7, {
                disabled: T,
                text: e_.intl.string(e_.t["g33r/P"]),
                onClick: () => {
                    tY.A.openPrivateChannel({ recipientIds: t.id });
                },
                children: (0, a.jsx)(e1.o, { size: "custom", color: "currentColor", width: 24, height: 24 }),
            }),
            (0, a.jsx)(t7, {
                disabled: !E,
                text: e_.intl.string(e_.t["3glT6Z"]),
                onClick: () => {
                    (0, ty.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("97660"), n.e("91671"), n.e("40243")]).then(
                            n.bind(n, 547166),
                        );
                        return (n) => (0, a.jsx)(e, { ...n, location: A, guildId: r, user: t, modReportId: i });
                    });
                },
                children: (0, a.jsx)(tV.N, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: y.A.colors.TEXT_DEFAULT.css,
                }),
            }),
            (0, a.jsx)(t7, {
                disabled: !u,
                text: e_.intl.string(e_.t["5MBJ5M"]),
                onClick: () => {
                    (0, ty.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("33847"), n.e("91671"), n.e("2504")]).then(
                            n.bind(n, 333179),
                        );
                        return (n) => (0, a.jsx)(e, { ...n, location: A, guildId: r, user: t, modReportId: i });
                    });
                },
                children: (0, a.jsx)(tH.w, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: y.A.colors.TEXT_DEFAULT.css,
                }),
            }),
            (0, a.jsx)(t7, {
                disabled: !_,
                text: c ? e_.intl.string(e_.t.N86XcP) : e_.intl.string(e_.t.kTlLrz),
                onClick: () => {
                    c
                        ? (0, tW.Y)({ guildId: l.guildId, userId: l.userId, anaylticsLocations: o })
                        : (0, tW.R)({ guildId: l.guildId, userId: l.userId, anaylticsLocations: o, modReportId: i });
                },
                children: (0, a.jsx)(eQ.g, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: y.A.colors.TEXT_DEFAULT.css,
                }),
            }),
            (0, a.jsx)(t7, {
                text: e_.intl.string(e_.t.IHTjzA),
                onClick: () => {
                    d(tJ.Nj.COPY_ID), (0, t0.C)(t.id);
                },
                disabled: !t0.p5,
                children: (0, a.jsx)(tw.L, {
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
    let { userId: t, guildId: n, onClose: l, moderatorReportId: r } = e,
        i = (0, f.bG)([D.default], () => D.default.getUser(t), [t]),
        s = (0, f.bG)([S.Ay], () => S.Ay.getMember(n, t), [n, t]);
    return null == i || null == s
        ? null
        : (0, a.jsxs)("div", {
              className: t3.kL,
              children: [
                  (0, a.jsx)(t2, { user: i, guildId: n, onClose: l }),
                  (0, a.jsx)(t5, { user: i, member: s, guildId: n, moderatorReportId: r }),
              ],
          });
}
var t4 = n(271730);
function t8(e) {
    let { userId: t, guildId: n, onClose: l, className: r, infoPanelClassName: s, style: m, moderatorReportId: L } = e,
        h = (0, R.q)(n),
        C = (0, u.bG)([D.default], () => D.default.getUser(t), [t]),
        M = (0, u.bG)([S.Ay], () => S.Ay.getMember(n, t), [n, t]),
        [U, x] = i.useState(null == C || null == M),
        f = (0, o.A)(M),
        p = i.useRef(null),
        { analyticsLocations: F } = (0, g.Ay)(T.A.GUILD_MEMBER_MOD_VIEW),
        P = (0, N.Ay)(t, n),
        k = (0, A.Ay)();
    return (i.useEffect(() => {
        h || l();
    }, [h, l]),
    i.useEffect(() => {
        null == f || null != M || U || l();
    }, [U, M, l, f]),
    i.useEffect(() => {
        null != C && null != M && x(!1);
    }, [C, M]),
    i.useEffect(() => {
        let e = null == M;
        return (
            !U && e && (p.current = window.setTimeout(l, 500)),
            () => {
                null != p.current && window.clearTimeout(p.current);
            }
        );
    }, [U, M, l]),
    (0, d.Eq)({ [n]: [t] }, "GuildMemberModViewSidebar"),
    i.useEffect(() => {
        !(async function () {
            let e = [
                c.A.requestMembersById(n, [t]),
                (0, I.jo)(n, [t]),
                (0, G.A)(t, void 0, { guildId: n, dispatchWait: !0 }),
            ];
            await Promise.all(e), x(!1);
        })();
    }, [n, t]),
    h)
        ? U || null == C || null == M
            ? (0, a.jsx)("div", {
                  className: E()(t4.so, t4.g4, r),
                  style: m,
                  children: (0, a.jsx)(_.y, {
                      animated: !0,
                      type: U ? _.y.Type.SPINNING_CIRCLE : _.y.Type.CHASING_DOTS,
                  }),
              })
            : (0, a.jsx)(g.f5, {
                  value: F,
                  children: (0, a.jsx)("div", {
                      className: E()(t4.so, r),
                      style: m,
                      children: (0, a.jsx)(O.A, {
                          user: C,
                          displayProfile: P,
                          themeType: null,
                          themeOverride: k,
                          forceShowPremium: !0,
                          className: t4.a2,
                          children: (0, a.jsxs)("div", {
                              className: t4.WH,
                              children: [
                                  (0, a.jsx)(t9, { userId: t, guildId: n, onClose: l, moderatorReportId: L }),
                                  (0, a.jsx)(tv, { userId: t, guildId: n, onClose: l, className: s }),
                              ],
                          }),
                      }),
                  }),
              })
        : null;
}
