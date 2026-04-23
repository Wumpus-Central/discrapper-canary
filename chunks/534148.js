n.d(t, { A: () => ef });
var i,
    l = n(627968),
    s = n(64700),
    a = n(735438),
    r = n.n(a),
    o = n(136722),
    d = n(17928),
    c = n(192308),
    u = n(512950),
    m = n(885574),
    g = n(821609),
    h = n(781696),
    x = n(392054),
    p = n(168186),
    A = n(495273),
    b = n(696451),
    f = n(317525),
    _ = n(71393),
    j = n(576705),
    N = n(542580),
    v = n(803378);
n(321073), n(667532);
var E = n(47167),
    C = n(808728),
    I = n(994500),
    T = n(287809),
    S = n(633334),
    y = n(652215),
    w = n(985018);
function O(e) {
    return { id: e.id, names: [e.name] };
}
var k = n(284009),
    L = n.n(k),
    R = n(34457),
    M = n(488926);
function D(e) {
    let t = [e.username];
    return e?.nick != null && t.push(e.nick), { id: e.id, names: t };
}
function P(e) {
    return { id: e.id, names: [e.name] };
}
n(172879);
var G = n(43105),
    U = n(990078),
    W = n(834730),
    B = n(939249),
    H = n(241326),
    z = n(686956),
    V = n(58149),
    F = n(320426),
    K = n(381616),
    Y = n(495544),
    q = n(954571),
    Q = n(562153),
    Z = n(935208),
    J = n(53656),
    $ = n(200662),
    X = n(739174),
    ee = n(503698),
    et = n.n(ee),
    en = n(785007),
    ei = n(933832),
    el = n(789645),
    es = n(135840);
let ea = [!1, !0];
function er(e) {
    let { isDisabled: t, currentValue: n, onChange: i } = e,
        { ref: a, ...r } = (0, en._u)({ orientation: "horizontal", isDisabled: t }),
        o = s.useCallback(
            (e) => {
                t || e === n || i(e);
            },
            [t, n, i],
        );
    return (0, l.jsx)("div", {
        className: et()(es.Os, { [es.r9]: t }),
        ref: a,
        ...r,
        children: ea.map((e) =>
            (0, l.jsx)(eo, { isSelected: n === e, itemValue: e, onClick: () => o(e) }, e.toString()),
        ),
    });
}
function eo(e) {
    let { isSelected: t, itemValue: n, onClick: i } = e,
        s = n ? es.cw : es.Xg,
        a = n ? ei.A : el.P,
        r = n ? w.intl.string(w.t.RzDfSk) : w.intl.string(w.t["6639O5"]),
        o = (0, en.Gx)({ isSelected: t, label: r });
    return (0, l.jsx)(B.D, {
        className: et()(es.AS, s, { [es.wH]: t }),
        onClick: i,
        ...o,
        children: (0, l.jsx)(a, { size: "xs", color: "currentColor" }),
    });
}
var ed = n(925836);
function ec(e) {
    let {
            commandId: t,
            editPermissions: n,
            guildId: i,
            noneSelectedText: a,
            overwrites: r,
            hasAccessToMutatePermissions: o,
        } = e,
        c = (0, d.bG)([_.A], () => _.A.getGuild(i));
    L()(null != c, "");
    let u = (0, d.bG)([f.A], () => f.A.getSortedRoles(i)),
        [m, g] = s.useState(new Set()),
        h = s.useMemo(() => {
            let e = (0, p.Ap)(i),
                t = u.toReversed().reduce((e, t, n) => ((e[t.id] = n), e), {});
            return Object.values(r)
                .filter((e) => e.canRead)
                .sort((n, l) => {
                    let s = n.type - l.type;
                    if (0 !== s) return s;
                    switch (n.type) {
                        case x.RA.USER:
                            return (function (e, t, n) {
                                let i = Number(e.canWrite) - Number(t.canWrite);
                                if (0 !== i) return i;
                                let l = T.default.getUser(e.id),
                                    s = T.default.getUser(t.id);
                                if (null != l && null != s) {
                                    let e = Q.Ay.getName(n, void 0, l),
                                        t = Q.Ay.getName(n, void 0, s);
                                    return e?.localeCompare(t);
                                }
                                return Z.default.compare(e.id, t.id);
                            })(n, l, i);
                        case x.RA.ROLE:
                            if (n.id === i) return -1;
                            if (l.id === i) return 1;
                            return t[n.id] > t[l.id] ? -1 : 1;
                        case x.RA.CHANNEL:
                            if (n.id === e) return -1;
                            if (l.id === e) return 1;
                            let a = Number(n.canWrite) - Number(l.canWrite);
                            return 0 !== a ? a : Z.default.compare(n.id, l.id);
                    }
                });
        }, [i, r, u]),
        A = s.useCallback(
            (e, t) => {
                n({}, [(0, $.Eu)(e, t)]);
            },
            [n],
        ),
        b = s.useCallback(
            (e, t, i) => {
                let l = (0, $.Eu)(e, t);
                null != r[l] && n({ [l]: { id: e, permission: i, type: t } }, []);
            },
            [n, r],
        );
    s.useEffect(() => {
        let e = Object.values(r)
            .filter((e) => e.type === x.RA.USER && !e.canRead && !m.has(e.id))
            .map((e) => e.id);
        0 !== e.length && (z.A.requestMembersById(i, e, !1), g((t) => new Set([...t, ...e])));
    }, [i, r, m, g]);
    let j = (0, d.bG)([v.A], () => v.A.getApplicationId()),
        N = (0, d.bG)([J.default], () =>
            null == j ? void 0 : J.default.integrations.find((e) => e.application?.id === j),
        ),
        E = (0, d.bG)([K.A], () => void 0 !== N && K.A.canShowToggleTooltip(N.id));
    return h.length > 0
        ? h.map((e) =>
              (0, l.jsx)(
                  eu,
                  {
                      guild: c,
                      commandId: t,
                      onChange: (t) => b(e.id, e.type, t),
                      onRemove: () => A(e.id, e.type),
                      overwrite: e,
                      integration: N,
                      canShowMigrationTooltip: E,
                      hasAccessToMutatePermissions: o,
                  },
                  e.id,
              ),
          )
        : (0, l.jsx)("div", {
              className: ed.dh,
              children: (0, l.jsx)(W.E, { color: "text-muted", variant: "text-sm/normal", children: a }),
          });
}
function eu(e) {
    let t,
        {
            guild: n,
            commandId: i,
            onChange: a,
            onRemove: r,
            overwrite: o,
            integration: d,
            canShowMigrationTooltip: c,
            hasAccessToMutatePermissions: u,
        } = e,
        m = o.id === n.id || o.id === (0, p.Ap)(n.id),
        g = d?.application?.bot?.username,
        h = !o.canWrite || !u,
        A = Y.default.getId();
    u
        ? o.canWrite ||
          (o.type === x.RA.USER
              ? (t = o.id === A ? w.intl.string(w.t["1VF/0x"]) : w.intl.string(w.t.P1GnEd))
              : o.type === x.RA.ROLE && (t = w.intl.string(w.t.mcAijf)))
        : (t = null != i ? w.intl.string(w.t.tybdas) : w.intl.string(w.t["z2hjk/"]));
    let b = c && null != d && o.id === n.id && void 0 !== g && !o.permission;
    s.useEffect(() => {
        b &&
            q.default.track(y.HAw.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                ...(0, V.H$)(n.id),
                application_id: d?.application?.id,
                location: "toggle",
            });
    }, [n.id, d?.application?.id, b]);
    let f = s.useRef(null),
        _ = (0, l.jsx)(U.m, {
            text: t,
            shouldShow: h,
            position: "left",
            children: (0, l.jsx)("div", {
                ref: f,
                children: (0, l.jsx)(er, {
                    isDisabled: h,
                    currentValue: o.permission,
                    onChange: b
                        ? (e) => {
                              F.A.dismissToggleTooltip(n.id, d), a(e);
                          }
                        : a,
                }),
            }),
        }),
        j = (0, l.jsx)(G.A, {
            targetElementRef: f,
            title: w.intl.string(w.t.ufFDiC),
            body: w.intl.format(w.t.pW4Crz, {
                botName: g,
                link: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/",
            }),
            position: "bottom",
            caretConfig: { align: "center" },
            onRequestClose: () => {
                F.A.dismissToggleTooltip(n.id, d);
            },
        });
    return (0, l.jsxs)(
        "div",
        {
            className: ed.Wk,
            children: [
                (0, l.jsx)("div", {
                    className: ed.MB,
                    children: (0, l.jsx)(X.A, { guild: n, id: o.id, type: o.type, isLocked: h, lockTooltipText: t }),
                }),
                (0, l.jsxs)("div", {
                    className: ed.ev,
                    children: [(0, l.jsx)(em, { commandId: i, isSentinel: m, isDisabled: !u, onRemove: r }), _, b && j],
                }),
            ],
        },
        o.id,
    );
}
function em(e) {
    let { commandId: t, isSentinel: n, isDisabled: i, onRemove: s } = e;
    return i
        ? null
        : null == t && n
          ? null
          : (0, l.jsx)("div", {
                className: ed.ys,
                children: (0, l.jsx)(B.D, {
                    className: ed.od,
                    "aria-label": w.intl.string(w.t.mT0CQM),
                    onClick: s,
                    children: (0, l.jsx)(H.u, { size: "md", color: "currentColor", className: ed.Yz }),
                }),
            });
}
var eg = n(157559),
    eh = n(975571),
    ex =
        (((i = {})[(i.REMOVE_SELF = 0)] = "REMOVE_SELF"),
        (i[(i.REMOVE_ROLE = 1)] = "REMOVE_ROLE"),
        (i[(i.DENY_ROLE = 2)] = "DENY_ROLE"),
        i),
    ep = n(636547),
    eA = n(73510),
    eb = n(996024);
function ef(e) {
    let {
            applicationId: t,
            commandId: i,
            guildId: a,
            inModal: E,
            editedTargetPermissions: C,
            originalApplicationPermissions: I,
            originalCommandPermissions: T,
            selectedPermissionCount: S,
        } = e,
        O = (0, d.bG)([v.A], () => (null == i ? null : v.A.getCommand(i)), [i]),
        k = O?.defaultMemberPermissions != null,
        L = (0, d.bG)([_.A, b.Ay, j.A], () => {
            let e = _.A.getGuild(a),
                t = b.Ay.getSelfMember(a);
            return (
                null != e &&
                null != t &&
                (0, p.zl)({
                    PermissionStore: j.A,
                    guild: e,
                    selfMember: t,
                    applicationLevelPermissions: I,
                    commandLevelPermissions: T,
                    defaultMemberPermissions: O?.defaultMemberPermissions,
                })
            );
        }, [a, O, I, T]),
        R = i ?? t,
        [M, D] = s.useMemo(() => {
            let e = {},
                t = {};
            for (let [n, i] of Object.entries(C)) i.type === x.RA.CHANNEL ? (e[n] = i) : (t[n] = i);
            return [e, t];
        }, [C]),
        P = s.useCallback(
            (e) => {
                let t = _.A.getGuild(a),
                    n = b.Ay.getSelfMember(a);
                return (
                    null != t &&
                    null != n &&
                    (null != i
                        ? (0, p.zl)({
                              PermissionStore: j.A,
                              guild: t,
                              selfMember: n,
                              applicationLevelPermissions: I,
                              commandLevelPermissions: e,
                              defaultMemberPermissions: O?.defaultMemberPermissions,
                          })
                        : (0, p.zl)({ PermissionStore: j.A, guild: t, selfMember: n, applicationLevelPermissions: e }))
                );
            },
            [a, O, i, I],
        ),
        G = s.useCallback(
            (e, t) => {
                var n, i;
                let l,
                    s,
                    r = null;
                if (0 !== t.length) {
                    let e = C[t[0]];
                    if (e.type === x.RA.USER) s = ex.REMOVE_SELF;
                    else {
                        let t = e.id;
                        if (((s = ex.REMOVE_ROLE), (0, A.N8)(a, t))) r = "@everyone";
                        else {
                            let e = f.A.getRole(a, t);
                            r = null != e ? e.name : "role";
                        }
                    }
                } else {
                    let t = Object.values(e)[0].id;
                    if (((s = ex.DENY_ROLE), (0, A.N8)(a, t))) r = "@everyone";
                    else {
                        let e = f.A.getRole(a, t);
                        r = null != e ? e.name : "role";
                    }
                }
                (n = s),
                    (i = r),
                    0 === n
                        ? (l = w.intl.format(w.t["/S6f5y"], {}))
                        : 1 === n
                          ? (l = w.intl.format(w.t.EBhv4R, { name: i }))
                          : 2 === n && (l = w.intl.format(w.t["59Dbw0"], { name: i })),
                    eg.A.show({
                        title: w.intl.string(w.t.vElC9b),
                        body: l,
                        cancelText: w.intl.string(w.t.psXQHP),
                        onCancel() {
                            window.open(eh.A.getArticleURL(y.MVz.APPLICATION_COMMAND_PERMISSIONS_LOCKOUT));
                        },
                    });
            },
            [a, C],
        ),
        U = s.useCallback(
            (e, n) => {
                let i = {};
                for (let [e, t] of Object.entries(C)) i[e] = { id: t.id, permission: t.permission, type: t.type };
                ((i = Object.assign(i, e)), n.length > 0 && (i = r().omit(i, n)), P(i)) ? N.T0(t, R, i) : G(e, n);
            },
            [t, C, R, P, G],
        ),
        W = s.useCallback(() => {
            let e = Object.keys(M);
            return (0, c.openModalLazy)(async () => {
                let { default: t } = await n.e("52532").then(n.bind(n, 192991));
                return (n) =>
                    (0, l.jsx)(t, {
                        editPermissions: U,
                        guildId: a,
                        headerText: w.intl.string(w.t["i1c+kV"]),
                        hasMemberSearch: !1,
                        overwrittenKeys: e,
                        search: e_,
                        searchPlaceholderText: w.intl.string(w.t["TLQo/i"]),
                        selectedPermissionCount: S,
                        ...n,
                    });
            });
        }, [U, M, a, S]),
        B = s.useCallback(() => {
            let e = Object.keys(D);
            return (0, c.openModalLazy)(async () => {
                let { default: t } = await n.e("52532").then(n.bind(n, 192991));
                return (n) =>
                    (0, l.jsx)(t, {
                        editPermissions: U,
                        guildId: a,
                        hasMemberSearch: !0,
                        headerText: w.intl.string(w.t["56jRn8"]),
                        overwrittenKeys: e,
                        search: ej,
                        searchPlaceholderText: w.intl.string(w.t.wAfO5Y),
                        selectedPermissionCount: S,
                        ...n,
                    });
            });
        }, [U, a, D, S]),
        H = s.useCallback(
            () =>
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await n.e("29384").then(n.bind(n, 519387)),
                        t = O.defaultMemberPermissions;
                    return (
                        o.aI(t, p.Cq) && (t = y.xBc.ADMINISTRATOR),
                        (n) => (0, l.jsx)(e, { ...n, defaultMemberPermissions: t })
                    );
                }),
            [O],
        ),
        z = S - eA.iW,
        V = z >= 0,
        F = [
            {
                buttonClick: B,
                buttonText: w.intl.string(w.t["56jRn8"]),
                noneSelectedText: w.intl.string(w.t.C0rYfq),
                overwrites: D,
                title: null == i ? w.intl.string(w.t["vPWe++"]) : w.intl.string(w.t["1jLVGB"]),
            },
            {
                buttonClick: W,
                buttonText: w.intl.string(w.t["i1c+kV"]),
                noneSelectedText: w.intl.string(w.t["UBJhC/"]),
                overwrites: M,
                title: null == i ? w.intl.string(w.t.OGiMXJ) : w.intl.string(w.t.Ujbaqm),
            },
        ];
    return (0, l.jsxs)(s.Fragment, {
        children: [
            z > 0
                ? (0, l.jsx)(u.p, {
                      messageType: u.Y.WARNING,
                      children: w.intl.format(w.t["B/dFBH"], { removeCount: z }),
                  })
                : null,
            k
                ? (0, l.jsxs)("div", {
                      className: eb.Yg,
                      children: [
                          (0, l.jsx)(m.m, { size: "sm", color: "currentColor", className: eb.Kk }),
                          (0, l.jsx)("span", { className: eb.iU, children: w.intl.format(w.t["2889Gq"], {}) }),
                          (0, l.jsx)(g.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: H,
                              text: w.intl.string(w.t["HO/oXl"]),
                          }),
                      ],
                  })
                : null,
            F.map((e, t) => {
                let n = null;
                return (
                    L
                        ? V && (n = w.intl.string(w.t["XTwtW/"]))
                        : (n = null != i ? w.intl.string(w.t.tybdas) : w.intl.string(w.t["z2hjk/"])),
                    (0, l.jsx)(
                        ep.A,
                        {
                            bar: (0, l.jsx)(h.ST, {
                                tooltipClassName: eb.YL,
                                text: n,
                                shouldShow: null != n,
                                children: (t) =>
                                    (0, l.jsx)(g.$, {
                                        ...t,
                                        variant: "secondary",
                                        disabled: V || !L,
                                        onClick: e.buttonClick,
                                        size: "sm",
                                        text: e.buttonText,
                                    }),
                            }),
                            inModal: E,
                            title: e.title,
                            children: (0, l.jsx)("div", {
                                className: E ? void 0 : eb.qI,
                                children: (0, l.jsx)(ec, {
                                    guildId: a,
                                    commandId: i,
                                    noneSelectedText: e.noneSelectedText,
                                    overwrites: e.overwrites,
                                    editPermissions: U,
                                    hasAccessToMutatePermissions: L,
                                }),
                            }),
                        },
                        t,
                    )
                );
            }),
        ],
    });
}
function e_(e) {
    let t = (function (e) {
        let t = s.useMemo(() => {
                let t = C.Ay.getChannels(e),
                    n = [...t[C.I6]];
                n.push(...t[C.vM].filter((e) => e.channel.isGuildVocal()));
                let i = n.map((e) => ({
                    id: e.channel.id,
                    name: (0, E.m1)(e.channel, T.default, I.A),
                    canManage: j.A.can(y.xBc.MANAGE_ROLES, e.channel),
                }));
                return i.unshift({ id: (0, p.Ap)(e), name: w.intl.string(w.t["7YqSGx"]), canManage: !0 }), i;
            }, [e]),
            [n, i] = s.useState(""),
            l = s.useMemo(() => {
                var e;
                let i = (e = n).startsWith("#") ? e.substr(1) : e;
                return (0, S.I)(t, O, i);
            }, [t, n]);
        return { query: n, results: l, setQuery: i, unfilteredCount: t.length };
    })(e);
    return { ...t, results: t.results.map((e) => ({ ...e, type: x.RA.CHANNEL })) };
}
function ej(e) {
    let t = (function (e) {
        let t = (0, d.bG)([_.A], () => _.A.getGuild(e));
        L()(null != t, "guild must be present to be editing its integration settings");
        let n = (0, d.bG)([j.A], () => j.A.getHighestRole(t)),
            i = (0, d.yK)([b.Ay], () => b.Ay.getMembers(e), [e]),
            l = (0, d.cf)([T.default], () => T.default.getUsers()),
            a = (0, d.bG)([f.A], () => f.A.getSortedRoles(e), [e]),
            r = s.useMemo(() => {
                let e = [];
                for (let n of i) {
                    let i = l[n.userId];
                    if (null == i || i.bot) continue;
                    let s =
                        i.id !== t.ownerId &&
                        !M.$3({ permission: y.xBc.ADMINISTRATOR, user: i, context: t }) &&
                        j.A.canManageUser(y.xBc.USE_APPLICATION_COMMANDS, i, t);
                    e.push({ id: i.id, canManage: s, nick: n.nick, username: i.username });
                }
                return e;
            }, [t, i, l]),
            o = (e) => e.managed && e.tags?.bot_id != null,
            c = s.useMemo(() => {
                let e = [];
                for (let i of a) {
                    if (o(i)) continue;
                    let l = !(0, R._m)(i, y.xBc.ADMINISTRATOR) && j.A.isRoleHigher(t, n, i),
                        s = { id: i.id, name: i.name, canManage: l };
                    (0, R.Oy)(i) ? e.unshift(s) : e.push(s);
                }
                return e;
            }, [a, t, n]),
            [u, m] = s.useState(""),
            g = s.useMemo(() => {
                var t;
                let n = (t = u).startsWith("@") ? t.substr(1) : t,
                    i = u.startsWith("@") ? c.filter((t) => t.id === e) : c;
                return { members: (0, S.I)(r, D, n), roles: (0, S.I)(i, P, n) };
            }, [e, r, u, c]);
        return { query: u, results: g, setQuery: m, unfilteredCount: g.members.length + g.roles.length };
    })(e);
    return {
        ...t,
        results: t.results.roles
            .map((e) => ({ ...e, type: x.RA.ROLE }))
            .concat(t.results.members.map((e) => ({ ...e, type: x.RA.USER }))),
    };
}
