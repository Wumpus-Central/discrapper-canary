n.d(t, { A: () => eb });
var i,
    l = n(627968),
    s = n(64700),
    a = n(735438),
    r = n.n(a),
    o = n(136722),
    c = n(17928),
    d = n(192308),
    u = n(512950),
    m = n(885574),
    g = n(821609),
    h = n(781696),
    x = n(392054),
    A = n(168186),
    p = n(495273),
    f = n(696451),
    b = n(317525),
    j = n(71393),
    N = n(576705),
    E = n(542580),
    C = n(803378);
n(321073), n(667532);
var v = n(47167),
    T = n(808728),
    I = n(994500),
    S = n(287809),
    y = n(633334),
    O = n(652215),
    k = n(375708);
function L(e) {
    return { id: e.id, names: [e.name] };
}
var w = n(284009),
    R = n.n(w),
    M = n(34457),
    _ = n(488926);
function P(e) {
    let t = [e.username];
    return e?.nick != null && t.push(e.nick), { id: e.id, names: t };
}
function G(e) {
    return { id: e.id, names: [e.name] };
}
n(172879);
var W = n(43105),
    D = n(990078),
    U = n(834730),
    B = n(939249),
    H = n(241326),
    z = n(66834),
    V = n(95561),
    K = n(320426),
    F = n(381616),
    Y = n(495544),
    q = n(174459),
    Z = n(562153),
    Q = n(935208),
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
        r = n ? k.intl.string(k.t.RzDfSk) : k.intl.string(k.t["6639O5"]),
        o = (0, en.Gx)({ isSelected: t, label: r });
    return (0, l.jsx)(B.D, {
        className: et()(es.AS, s, { [es.wH]: t }),
        onClick: i,
        ...o,
        children: (0, l.jsx)(a, { size: "xs", color: "currentColor" }),
    });
}
var ec = n(925836);
function ed(e) {
    let {
            commandId: t,
            editPermissions: n,
            guildId: i,
            noneSelectedText: a,
            overwrites: r,
            hasAccessToMutatePermissions: o,
        } = e,
        d = (0, c.bG)([j.A], () => j.A.getGuild(i));
    R()(null != d, "");
    let u = (0, c.bG)([b.A], () => b.A.getSortedRoles(i)),
        [m, g] = s.useState(new Set()),
        h = s.useMemo(() => {
            let e = (0, A.Ap)(i),
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
                                let l = S.default.getUser(e.id),
                                    s = S.default.getUser(t.id);
                                if (null != l && null != s) {
                                    let e = Z.Ay.getName(n, void 0, l),
                                        t = Z.Ay.getName(n, void 0, s);
                                    return e?.localeCompare(t);
                                }
                                return Q.default.compare(e.id, t.id);
                            })(n, l, i);
                        case x.RA.ROLE:
                            if (n.id === i) return -1;
                            if (l.id === i) return 1;
                            return t[n.id] > t[l.id] ? -1 : 1;
                        case x.RA.CHANNEL:
                            if (n.id === e) return -1;
                            if (l.id === e) return 1;
                            let a = Number(n.canWrite) - Number(l.canWrite);
                            return 0 !== a ? a : Q.default.compare(n.id, l.id);
                    }
                });
        }, [i, r, u]),
        p = s.useCallback(
            (e, t) => {
                n({}, [(0, $.Eu)(e, t)]);
            },
            [n],
        ),
        f = s.useCallback(
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
    let N = (0, c.bG)([C.A], () => C.A.getApplicationId()),
        E = (0, c.bG)([J.default], () =>
            null == N ? void 0 : J.default.integrations.find((e) => e.application?.id === N),
        ),
        v = (0, c.bG)([F.A], () => void 0 !== E && F.A.canShowToggleTooltip(E.id));
    return h.length > 0
        ? h.map((e) =>
              (0, l.jsx)(
                  eu,
                  {
                      guild: d,
                      commandId: t,
                      onChange: (t) => f(e.id, e.type, t),
                      onRemove: () => p(e.id, e.type),
                      overwrite: e,
                      integration: E,
                      canShowMigrationTooltip: v,
                      hasAccessToMutatePermissions: o,
                  },
                  e.id,
              ),
          )
        : (0, l.jsx)("div", {
              className: ec.dh,
              children: (0, l.jsx)(U.E, { color: "text-muted", variant: "text-sm/normal", children: a }),
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
            integration: c,
            canShowMigrationTooltip: d,
            hasAccessToMutatePermissions: u,
        } = e,
        m = o.id === n.id || o.id === (0, A.Ap)(n.id),
        g = c?.application?.bot?.username,
        h = !o.canWrite || !u,
        p = Y.default.getId();
    u
        ? o.canWrite ||
          (o.type === x.RA.USER
              ? (t = o.id === p ? k.intl.string(k.t["1VF/0x"]) : k.intl.string(k.t.P1GnEd))
              : o.type === x.RA.ROLE && (t = k.intl.string(k.t.mcAijf)))
        : (t = null != i ? k.intl.string(k.t.tybdas) : k.intl.string(k.t["z2hjk/"]));
    let f = d && null != c && o.id === n.id && void 0 !== g && !o.permission;
    s.useEffect(() => {
        f &&
            q.default.track(O.HAw.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                ...(0, V.H$)(n.id),
                application_id: c?.application?.id,
                location: "toggle",
            });
    }, [n.id, c?.application?.id, f]);
    let b = s.useRef(null),
        j = (0, l.jsx)(D.m, {
            text: t,
            shouldShow: h,
            position: "left",
            children: (0, l.jsx)("div", {
                ref: b,
                children: (0, l.jsx)(er, {
                    isDisabled: h,
                    currentValue: o.permission,
                    onChange: f
                        ? (e) => {
                              K.A.dismissToggleTooltip(n.id, c), a(e);
                          }
                        : a,
                }),
            }),
        }),
        N = (0, l.jsx)(W.A, {
            targetElementRef: b,
            title: k.intl.string(k.t.ufFDiC),
            body: k.intl.format(k.t.pW4Crz, {
                botName: g,
                link: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/",
            }),
            position: "bottom",
            caretConfig: { align: "center" },
            onRequestClose: () => {
                K.A.dismissToggleTooltip(n.id, c);
            },
        });
    return (0, l.jsxs)(
        "div",
        {
            className: ec.Wk,
            children: [
                (0, l.jsx)("div", {
                    className: ec.MB,
                    children: (0, l.jsx)(X.A, { guild: n, id: o.id, type: o.type, isLocked: h, lockTooltipText: t }),
                }),
                (0, l.jsxs)("div", {
                    className: ec.ev,
                    children: [(0, l.jsx)(em, { commandId: i, isSentinel: m, isDisabled: !u, onRemove: r }), j, f && N],
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
                className: ec.ys,
                children: (0, l.jsx)(B.D, {
                    className: ec.od,
                    "aria-label": k.intl.string(k.t.mT0CQM),
                    onClick: s,
                    children: (0, l.jsx)(H.u, { size: "md", color: "currentColor", className: ec.Yz }),
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
    eA = n(636547),
    ep = n(73510),
    ef = n(996024);
function eb(e) {
    let {
            applicationId: t,
            commandId: i,
            guildId: a,
            inModal: v,
            editedTargetPermissions: T,
            originalApplicationPermissions: I,
            originalCommandPermissions: S,
            selectedPermissionCount: y,
        } = e,
        L = (0, c.bG)([C.A], () => (null == i ? null : C.A.getCommand(i)), [i]),
        w = L?.defaultMemberPermissions != null,
        R = (0, c.bG)([j.A, f.Ay, N.A], () => {
            let e = j.A.getGuild(a),
                t = f.Ay.getSelfMember(a);
            return (
                null != e &&
                null != t &&
                (0, A.zl)({
                    PermissionStore: N.A,
                    guild: e,
                    selfMember: t,
                    applicationLevelPermissions: I,
                    commandLevelPermissions: S,
                    defaultMemberPermissions: L?.defaultMemberPermissions,
                })
            );
        }, [a, L, I, S]),
        M = i ?? t,
        [_, P] = s.useMemo(() => {
            let e = {},
                t = {};
            for (let [n, i] of Object.entries(T)) i.type === x.RA.CHANNEL ? (e[n] = i) : (t[n] = i);
            return [e, t];
        }, [T]),
        G = s.useCallback(
            (e) => {
                let t = j.A.getGuild(a),
                    n = f.Ay.getSelfMember(a);
                return (
                    null != t &&
                    null != n &&
                    (null != i
                        ? (0, A.zl)({
                              PermissionStore: N.A,
                              guild: t,
                              selfMember: n,
                              applicationLevelPermissions: I,
                              commandLevelPermissions: e,
                              defaultMemberPermissions: L?.defaultMemberPermissions,
                          })
                        : (0, A.zl)({ PermissionStore: N.A, guild: t, selfMember: n, applicationLevelPermissions: e }))
                );
            },
            [a, L, i, I],
        ),
        W = s.useCallback(
            (e, t) => {
                var n, i;
                let l,
                    s,
                    r = null;
                if (0 !== t.length) {
                    let e = T[t[0]];
                    if (e.type === x.RA.USER) s = ex.REMOVE_SELF;
                    else {
                        let t = e.id;
                        if (((s = ex.REMOVE_ROLE), (0, p.N8)(a, t))) r = "@everyone";
                        else {
                            let e = b.A.getRole(a, t);
                            r = null != e ? e.name : "role";
                        }
                    }
                } else {
                    let t = Object.values(e)[0].id;
                    if (((s = ex.DENY_ROLE), (0, p.N8)(a, t))) r = "@everyone";
                    else {
                        let e = b.A.getRole(a, t);
                        r = null != e ? e.name : "role";
                    }
                }
                (n = s),
                    (i = r),
                    0 === n
                        ? (l = k.intl.format(k.t["/S6f5y"], {}))
                        : 1 === n
                          ? (l = k.intl.format(k.t.EBhv4R, { name: i }))
                          : 2 === n && (l = k.intl.format(k.t["59Dbw0"], { name: i })),
                    eg.A.show({
                        title: k.intl.string(k.t.vElC9b),
                        body: l,
                        cancelText: k.intl.string(k.t.psXQHP),
                        onCancel() {
                            window.open(eh.A.getArticleURL(O.MVz.APPLICATION_COMMAND_PERMISSIONS_LOCKOUT));
                        },
                    });
            },
            [a, T],
        ),
        D = s.useCallback(
            (e, n) => {
                let i = {};
                for (let [e, t] of Object.entries(T)) i[e] = { id: t.id, permission: t.permission, type: t.type };
                ((i = Object.assign(i, e)), n.length > 0 && (i = r().omit(i, n)), G(i)) ? E.T0(t, M, i) : W(e, n);
            },
            [t, T, M, G, W],
        ),
        U = s.useCallback(() => {
            let e = Object.keys(_);
            return (0, d.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("15149"), n.e("52532")]).then(n.bind(n, 192991));
                return (n) =>
                    (0, l.jsx)(t, {
                        editPermissions: D,
                        guildId: a,
                        headerText: k.intl.string(k.t["i1c+kV"]),
                        hasMemberSearch: !1,
                        overwrittenKeys: e,
                        search: ej,
                        searchPlaceholderText: k.intl.string(k.t["TLQo/i"]),
                        selectedPermissionCount: y,
                        ...n,
                    });
            });
        }, [D, _, a, y]),
        B = s.useCallback(() => {
            let e = Object.keys(P);
            return (0, d.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("15149"), n.e("52532")]).then(n.bind(n, 192991));
                return (n) =>
                    (0, l.jsx)(t, {
                        editPermissions: D,
                        guildId: a,
                        hasMemberSearch: !0,
                        headerText: k.intl.string(k.t["56jRn8"]),
                        overwrittenKeys: e,
                        search: eN,
                        searchPlaceholderText: k.intl.string(k.t.wAfO5Y),
                        selectedPermissionCount: y,
                        ...n,
                    });
            });
        }, [D, a, P, y]),
        H = s.useCallback(
            () =>
                (0, d.openModalLazy)(async () => {
                    let { default: e } = await n.e("29384").then(n.bind(n, 519387)),
                        t = L.defaultMemberPermissions;
                    return (
                        o.aI(t, A.Cq) && (t = O.xBc.ADMINISTRATOR),
                        (n) => (0, l.jsx)(e, { ...n, defaultMemberPermissions: t })
                    );
                }),
            [L],
        ),
        z = y - ep.iW,
        V = z >= 0,
        K = [
            {
                buttonClick: B,
                buttonText: k.intl.string(k.t["56jRn8"]),
                noneSelectedText: k.intl.string(k.t.C0rYfq),
                overwrites: P,
                title: null == i ? k.intl.string(k.t["vPWe++"]) : k.intl.string(k.t["1jLVGB"]),
            },
            {
                buttonClick: U,
                buttonText: k.intl.string(k.t["i1c+kV"]),
                noneSelectedText: k.intl.string(k.t["UBJhC/"]),
                overwrites: _,
                title: null == i ? k.intl.string(k.t.OGiMXJ) : k.intl.string(k.t.Ujbaqm),
            },
        ];
    return (0, l.jsxs)(s.Fragment, {
        children: [
            z > 0
                ? (0, l.jsx)(u.p, {
                      messageType: u.Y.WARNING,
                      children: k.intl.format(k.t["B/dFBH"], { removeCount: z }),
                  })
                : null,
            w
                ? (0, l.jsxs)("div", {
                      className: ef.Yg,
                      children: [
                          (0, l.jsx)(m.m, { size: "sm", color: "currentColor", className: ef.Kk }),
                          (0, l.jsx)("span", { className: ef.iU, children: k.intl.format(k.t["2889Gq"], {}) }),
                          (0, l.jsx)(g.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: H,
                              text: k.intl.string(k.t["HO/oXl"]),
                          }),
                      ],
                  })
                : null,
            K.map((e, t) => {
                let n = null;
                return (
                    R
                        ? V && (n = k.intl.string(k.t["XTwtW/"]))
                        : (n = null != i ? k.intl.string(k.t.tybdas) : k.intl.string(k.t["z2hjk/"])),
                    (0, l.jsx)(
                        eA.A,
                        {
                            bar: (0, l.jsx)(h.ST, {
                                tooltipClassName: ef.YL,
                                text: n,
                                shouldShow: null != n,
                                children: (t) =>
                                    (0, l.jsx)(g.$, {
                                        ...t,
                                        variant: "secondary",
                                        disabled: V || !R,
                                        onClick: e.buttonClick,
                                        size: "sm",
                                        text: e.buttonText,
                                    }),
                            }),
                            inModal: v,
                            title: e.title,
                            children: (0, l.jsx)("div", {
                                className: v ? void 0 : ef.qI,
                                children: (0, l.jsx)(ed, {
                                    guildId: a,
                                    commandId: i,
                                    noneSelectedText: e.noneSelectedText,
                                    overwrites: e.overwrites,
                                    editPermissions: D,
                                    hasAccessToMutatePermissions: R,
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
function ej(e) {
    let t = (function (e) {
        let t = s.useMemo(() => {
                let t = T.Ay.getChannels(e),
                    n = [...t[T.I6]];
                n.push(...t[T.vM].filter((e) => e.channel.isGuildVocal()));
                let i = n.map((e) => ({
                    id: e.channel.id,
                    name: (0, v.m1)(e.channel, S.default, I.A),
                    canManage: N.A.can(O.xBc.MANAGE_ROLES, e.channel),
                }));
                return i.unshift({ id: (0, A.Ap)(e), name: k.intl.string(k.t["7YqSGx"]), canManage: !0 }), i;
            }, [e]),
            [n, i] = s.useState(""),
            l = s.useMemo(() => {
                var e;
                let i = (e = n).startsWith("#") ? e.substr(1) : e;
                return (0, y.I)(t, L, i);
            }, [t, n]);
        return { query: n, results: l, setQuery: i, unfilteredCount: t.length };
    })(e);
    return { ...t, results: t.results.map((e) => ({ ...e, type: x.RA.CHANNEL })) };
}
function eN(e) {
    let t = (function (e) {
        let t = (0, c.bG)([j.A], () => j.A.getGuild(e));
        R()(null != t, "guild must be present to be editing its integration settings");
        let n = (0, c.bG)([N.A], () => N.A.getHighestRole(t)),
            i = (0, c.yK)([f.Ay], () => f.Ay.getMembers(e), [e]),
            l = (0, c.cf)([S.default], () => S.default.getUsers()),
            a = (0, c.bG)([b.A], () => b.A.getSortedRoles(e), [e]),
            r = s.useMemo(() => {
                let e = [];
                for (let n of i) {
                    let i = l[n.userId];
                    if (null == i || i.bot) continue;
                    let s =
                        i.id !== t.ownerId &&
                        !_.$3({ permission: O.xBc.ADMINISTRATOR, user: i, context: t }) &&
                        N.A.canManageUser(O.xBc.USE_APPLICATION_COMMANDS, i, t);
                    e.push({ id: i.id, canManage: s, nick: n.nick, username: i.username });
                }
                return e;
            }, [t, i, l]),
            o = (e) => e.managed && e.tags?.bot_id != null,
            d = s.useMemo(() => {
                let e = [];
                for (let i of a) {
                    if (o(i)) continue;
                    let l = !(0, M._m)(i, O.xBc.ADMINISTRATOR) && N.A.isRoleHigher(t, n, i),
                        s = { id: i.id, name: i.name, canManage: l };
                    (0, M.Oy)(i) ? e.unshift(s) : e.push(s);
                }
                return e;
            }, [a, t, n]),
            [u, m] = s.useState(""),
            g = s.useMemo(() => {
                var t;
                let n = (t = u).startsWith("@") ? t.substr(1) : t,
                    i = u.startsWith("@") ? d.filter((t) => t.id === e) : d;
                return { members: (0, y.I)(r, P, n), roles: (0, y.I)(i, G, n) };
            }, [e, r, u, d]);
        return { query: u, results: g, setQuery: m, unfilteredCount: g.members.length + g.roles.length };
    })(e);
    return {
        ...t,
        results: t.results.roles
            .map((e) => ({ ...e, type: x.RA.ROLE }))
            .concat(t.results.members.map((e) => ({ ...e, type: x.RA.USER }))),
    };
}
