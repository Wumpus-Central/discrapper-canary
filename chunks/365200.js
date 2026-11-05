n.d(t, { A: () => ep });
var i,
    l = n(477900),
    s = n(582128),
    a = n(435558),
    r = n.n(a),
    o = n(136722),
    c = n(855986),
    d = n(192308),
    u = n(683071),
    m = n(885574),
    g = n(821609),
    h = n(866665),
    x = n(392054),
    A = n(168186),
    p = n(495273),
    b = n(696451),
    f = n(317525),
    j = n(71393),
    N = n(576705),
    E = n(542580),
    C = n(803378);
(n(321073), n(667532));
var v = n(47167),
    I = n(808728),
    T = n(994500),
    y = n(287809),
    S = n(633334),
    k = n(652215),
    O = n(792996);
function w(e) {
    return { id: e.id, names: [e.name] };
}
var L = n(284009),
    R = n.n(L),
    M = n(34457),
    _ = n(488926);
function P(e) {
    let t = [e.username];
    return (e?.nick != null && t.push(e.nick), { id: e.id, names: t });
}
function W(e) {
    return { id: e.id, names: [e.name] };
}
n(172879);
var D = n(43105),
    G = n(834730),
    U = n(939249),
    B = n(241326),
    H = n(778858),
    V = n(149468),
    z = n(320426),
    F = n(381616),
    K = n(46653),
    Y = n(129230),
    q = n(562153),
    Q = n(811091),
    Z = n(53656),
    J = n(200662),
    X = n(739174),
    $ = n(503698),
    ee = n.n($),
    et = n(785007),
    en = n(933832),
    ei = n(789645),
    el = n(719325);
let es = [!1, !0];
function ea(e) {
    let { isDisabled: t, currentValue: n, onChange: i } = e,
        { ref: a, ...r } = (0, et._u)({ orientation: "horizontal", isDisabled: t }),
        o = s.useCallback(
            (e) => {
                t || e === n || i(e);
            },
            [t, n, i],
        );
    return (0, l.jsx)("div", {
        className: ee()(el.Os, { [el.r9]: t }),
        ref: a,
        ...r,
        children: es.map((e) =>
            (0, l.jsx)(er, { isSelected: n === e, itemValue: e, onClick: () => o(e) }, e.toString()),
        ),
    });
}
function er(e) {
    let { isSelected: t, itemValue: n, onClick: i } = e,
        s = n ? el.cw : el.Xg,
        a = n ? en.CheckmarkLargeIcon : ei.XSmallIcon,
        r = n ? O.intl.string(O.t.RzDfSk) : O.intl.string(O.t["6639O5"]),
        o = (0, et.Gx)({ isSelected: t, label: r });
    return (0, l.jsx)(U.D, {
        className: ee()(el.AS, s, { [el.wH]: t }),
        onClick: i,
        ...o,
        children: (0, l.jsx)(a, { size: "xs", color: "currentColor" }),
    });
}
var eo = n(759897);
function ec(e) {
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
    let u = (0, c.bG)([f.A], () => f.A.getSortedRoles(i)),
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
                                let l = y.default.getUser(e.id),
                                    s = y.default.getUser(t.id);
                                if (null != l && null != s) {
                                    let e = q.Ay.getName(n, void 0, l),
                                        t = q.Ay.getName(n, void 0, s);
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
                n({}, [(0, J.Eu)(e, t)]);
            },
            [n],
        ),
        b = s.useCallback(
            (e, t, i) => {
                let l = (0, J.Eu)(e, t);
                null != r[l] && n({ [l]: { id: e, permission: i, type: t } }, []);
            },
            [n, r],
        );
    s.useEffect(() => {
        let e = Object.values(r)
            .filter((e) => e.type === x.RA.USER && !e.canRead && !m.has(e.id))
            .map((e) => e.id);
        0 !== e.length && (H.A.requestMembersById(i, e, !1), g((t) => new Set([...t, ...e])));
    }, [i, r, m, g]);
    let N = (0, c.bG)([C.A], () => C.A.getApplicationId()),
        E = (0, c.bG)([Z.default], () =>
            null == N ? void 0 : Z.default.integrations.find((e) => e.application?.id === N),
        ),
        v = (0, c.bG)([F.A], () => void 0 !== E && F.A.canShowToggleTooltip(E.id));
    return h.length > 0
        ? h.map((e) =>
              (0, l.jsx)(
                  ed,
                  {
                      guild: d,
                      commandId: t,
                      onChange: (t) => b(e.id, e.type, t),
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
              className: eo.dh,
              children: (0, l.jsx)(G.E, { color: "text-muted", variant: "body-sm/normal", children: a }),
          });
}
function ed(e) {
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
        p = !o.canWrite || !u,
        b = K.default.getId();
    u
        ? o.canWrite ||
          (o.type === x.RA.USER
              ? (t = o.id === b ? O.intl.string(O.t["1VF/0x"]) : O.intl.string(O.t.P1GnEd))
              : o.type === x.RA.ROLE && (t = O.intl.string(O.t.mcAijf)))
        : (t = null != i ? O.intl.string(O.t.tybdas) : O.intl.string(O.t["z2hjk/"]));
    let f = d && null != c && o.id === n.id && void 0 !== g && !o.permission;
    s.useEffect(() => {
        f &&
            Y.default.track(k.HAw.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                ...(0, V.H$)(n.id),
                application_id: c?.application?.id,
                location: "toggle",
            });
    }, [n.id, c?.application?.id, f]);
    let j = s.useRef(null),
        N = (0, l.jsx)(h.m, {
            text: t,
            shouldShow: p,
            position: "left",
            children: (0, l.jsx)("div", {
                ref: j,
                children: (0, l.jsx)(ea, {
                    isDisabled: p,
                    currentValue: o.permission,
                    onChange: f
                        ? (e) => {
                              (z.A.dismissToggleTooltip(n.id, c), a(e));
                          }
                        : a,
                }),
            }),
        }),
        E = (0, l.jsx)(D.A, {
            targetElementRef: j,
            title: O.intl.string(O.t.ufFDiC),
            body: O.intl.format(O.t.pW4Crz, {
                botName: g,
                link: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/",
            }),
            position: "bottom",
            caretConfig: { align: "center" },
            onRequestClose: () => {
                z.A.dismissToggleTooltip(n.id, c);
            },
        });
    return (0, l.jsxs)(
        "div",
        {
            className: eo.Wk,
            children: [
                (0, l.jsx)("div", {
                    className: eo.MB,
                    children: (0, l.jsx)(X.A, { guild: n, id: o.id, type: o.type, isLocked: p, lockTooltipText: t }),
                }),
                (0, l.jsxs)("div", {
                    className: eo.ev,
                    children: [(0, l.jsx)(eu, { commandId: i, isSentinel: m, isDisabled: !u, onRemove: r }), N, f && E],
                }),
            ],
        },
        o.id,
    );
}
function eu(e) {
    let { commandId: t, isSentinel: n, isDisabled: i, onRemove: s } = e;
    return i
        ? null
        : null == t && n
          ? null
          : (0, l.jsx)("div", {
                className: eo.ys,
                children: (0, l.jsx)(U.D, {
                    className: eo.od,
                    "aria-label": O.intl.string(O.t.mT0CQM),
                    onClick: s,
                    children: (0, l.jsx)(B.TrashIcon, { size: "md", color: "currentColor", className: eo.Yz }),
                }),
            });
}
var em = n(157559),
    eg = n(975571),
    eh =
        (((i = {})[(i.REMOVE_SELF = 0)] = "REMOVE_SELF"),
        (i[(i.REMOVE_ROLE = 1)] = "REMOVE_ROLE"),
        (i[(i.DENY_ROLE = 2)] = "DENY_ROLE"),
        i),
    ex = n(636547);
n(73510);
var eA = n(160253);
function ep(e) {
    let {
            applicationId: t,
            commandId: i,
            guildId: a,
            inModal: v,
            editedTargetPermissions: I,
            originalApplicationPermissions: T,
            originalCommandPermissions: y,
            selectedPermissionCount: S,
        } = e,
        w = (0, c.bG)([C.A], () => (null == i ? null : C.A.getCommand(i)), [i]),
        L = w?.defaultMemberPermissions != null,
        R = (0, c.bG)(
            [j.A, b.Ay, N.A],
            () => {
                let e = j.A.getGuild(a),
                    t = b.Ay.getSelfMember(a);
                return (
                    null != e &&
                    null != t &&
                    (0, A.zl)({
                        PermissionStore: N.A,
                        guild: e,
                        selfMember: t,
                        applicationLevelPermissions: T,
                        commandLevelPermissions: y,
                        defaultMemberPermissions: w?.defaultMemberPermissions,
                    })
                );
            },
            [a, w, T, y],
        ),
        M = i ?? t,
        [_, P] = s.useMemo(() => {
            let e = {},
                t = {};
            for (let [n, i] of Object.entries(I)) i.type === x.RA.CHANNEL ? (e[n] = i) : (t[n] = i);
            return [e, t];
        }, [I]),
        W = s.useCallback(
            (e) => {
                let t = j.A.getGuild(a),
                    n = b.Ay.getSelfMember(a);
                return (
                    null != t &&
                    null != n &&
                    (null != i
                        ? (0, A.zl)({
                              PermissionStore: N.A,
                              guild: t,
                              selfMember: n,
                              applicationLevelPermissions: T,
                              commandLevelPermissions: e,
                              defaultMemberPermissions: w?.defaultMemberPermissions,
                          })
                        : (0, A.zl)({ PermissionStore: N.A, guild: t, selfMember: n, applicationLevelPermissions: e }))
                );
            },
            [a, w, i, T],
        ),
        D = s.useCallback(
            (e, t) => {
                let n,
                    i,
                    l = null;
                if (0 !== t.length) {
                    let e = I[t[0]];
                    if (e.type === x.RA.USER) i = eh.REMOVE_SELF;
                    else {
                        let t = e.id;
                        if (((i = eh.REMOVE_ROLE), (0, p.N8)(a, t))) l = "@everyone";
                        else {
                            let e = f.A.getRole(a, t);
                            l = null != e ? e.name : "role";
                        }
                    }
                } else {
                    let t = Object.values(e)[0].id;
                    if (((i = eh.DENY_ROLE), (0, p.N8)(a, t))) l = "@everyone";
                    else {
                        let e = f.A.getRole(a, t);
                        l = null != e ? e.name : "role";
                    }
                }
                var s = l;
                switch (i) {
                    case 0:
                        n = O.intl.format(O.t["/S6f5y"], {});
                        break;
                    case 1:
                        n = O.intl.format(O.t.EBhv4R, { name: s });
                        break;
                    case 2:
                        n = O.intl.format(O.t["59Dbw0"], { name: s });
                }
                em.A.show({
                    title: O.intl.string(O.t.vElC9b),
                    body: n,
                    cancelText: O.intl.string(O.t.psXQHP),
                    onCancel() {
                        window.open(eg.A.getArticleURL(k.MVz.APPLICATION_COMMAND_PERMISSIONS_LOCKOUT));
                    },
                });
            },
            [a, I],
        ),
        G = s.useCallback(
            (e, n) => {
                let i = {};
                for (let [e, t] of Object.entries(I)) i[e] = { id: t.id, permission: t.permission, type: t.type };
                ((i = Object.assign(i, e)), n.length > 0 && (i = r().omit(i, n)), W(i)) ? E.T0(t, M, i) : D(e, n);
            },
            [t, I, M, W, D],
        ),
        U = s.useCallback(() => {
            let e = Object.keys(_);
            return (0, d.mM)(async () => {
                let { default: t } = await Promise.all([n.e(377476), n.e(393654), n.e(692513), n.e(52532)]).then(
                    n.bind(n, 192991),
                );
                return (n) =>
                    (0, l.jsx)(t, {
                        editPermissions: G,
                        guildId: a,
                        headerText: O.intl.string(O.t["i1c+kV"]),
                        hasMemberSearch: !1,
                        overwrittenKeys: e,
                        search: eb,
                        searchPlaceholderText: O.intl.string(O.t["TLQo/i"]),
                        selectedPermissionCount: S,
                        ...n,
                    });
            });
        }, [G, _, a, S]),
        B = s.useCallback(() => {
            let e = Object.keys(P);
            return (0, d.mM)(async () => {
                let { default: t } = await Promise.all([n.e(377476), n.e(393654), n.e(692513), n.e(52532)]).then(
                    n.bind(n, 192991),
                );
                return (n) =>
                    (0, l.jsx)(t, {
                        editPermissions: G,
                        guildId: a,
                        hasMemberSearch: !0,
                        headerText: O.intl.string(O.t["56jRn8"]),
                        overwrittenKeys: e,
                        search: ef,
                        searchPlaceholderText: O.intl.string(O.t.wAfO5Y),
                        selectedPermissionCount: S,
                        ...n,
                    });
            });
        }, [G, a, P, S]),
        H = s.useCallback(
            () =>
                (0, d.mM)(async () => {
                    let { default: e } = await n.e(529384).then(n.bind(n, 519387)),
                        t = w.defaultMemberPermissions;
                    return (
                        o.aI(t, A.Cq) && (t = k.xBc.ADMINISTRATOR),
                        (n) => (0, l.jsx)(e, { ...n, defaultMemberPermissions: t })
                    );
                }),
            [w],
        ),
        V = S - 100,
        z = V >= 0,
        F = [
            {
                buttonClick: B,
                buttonText: O.intl.string(O.t["56jRn8"]),
                noneSelectedText: O.intl.string(O.t.C0rYfq),
                overwrites: P,
                title: null == i ? O.intl.string(O.t["vPWe++"]) : O.intl.string(O.t["1jLVGB"]),
            },
            {
                buttonClick: U,
                buttonText: O.intl.string(O.t["i1c+kV"]),
                noneSelectedText: O.intl.string(O.t["UBJhC/"]),
                overwrites: _,
                title: null == i ? O.intl.string(O.t.OGiMXJ) : O.intl.string(O.t.Ujbaqm),
            },
        ];
    return (0, l.jsxs)(s.Fragment, {
        children: [
            V > 0
                ? (0, l.jsx)(u.w, {
                      type: "warning",
                      message: O.intl.format(O.t["B/dFBH"], { removeCount: V }),
                      role: "status",
                  })
                : null,
            L
                ? (0, l.jsxs)("div", {
                      className: eA.Yg,
                      children: [
                          (0, l.jsx)(m.CircleInformationIcon, { size: "sm", color: "currentColor", className: eA.Kk }),
                          (0, l.jsx)("span", { className: eA.iU, children: O.intl.format(O.t["2889Gq"], {}) }),
                          (0, l.jsx)(g.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: H,
                              text: O.intl.string(O.t["HO/oXl"]),
                          }),
                      ],
                  })
                : null,
            F.map((e, t) => {
                let n = null;
                return (
                    R
                        ? z && (n = O.intl.string(O.t["XTwtW/"]))
                        : (n = null != i ? O.intl.string(O.t.tybdas) : O.intl.string(O.t["z2hjk/"])),
                    (0, l.jsx)(
                        ex.A,
                        {
                            bar: (0, l.jsx)(h.m, {
                                text: n,
                                shouldShow: null != n,
                                asContainer: !0,
                                children: (0, l.jsx)(g.$, {
                                    variant: "secondary",
                                    disabled: z || !R,
                                    onClick: e.buttonClick,
                                    size: "sm",
                                    text: e.buttonText,
                                }),
                            }),
                            inModal: v,
                            title: e.title,
                            children: (0, l.jsx)("div", {
                                className: v ? void 0 : eA.qI,
                                children: (0, l.jsx)(ec, {
                                    guildId: a,
                                    commandId: i,
                                    noneSelectedText: e.noneSelectedText,
                                    overwrites: e.overwrites,
                                    editPermissions: G,
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
function eb(e) {
    let t = (function (e) {
        let t = s.useMemo(() => {
                let t = I.A.getChannels(e),
                    n = [...t[I.I]];
                n.push(...t.VOCAL.filter((e) => e.channel.isGuildVocal()));
                let i = n.map((e) => ({
                    id: e.channel.id,
                    name: (0, v.m1)(e.channel, y.default, T.A),
                    canManage: N.A.can(k.xBc.MANAGE_ROLES, e.channel),
                }));
                return (i.unshift({ id: (0, A.Ap)(e), name: O.intl.string(O.t["7YqSGx"]), canManage: !0 }), i);
            }, [e]),
            [n, i] = s.useState(""),
            l = s.useMemo(() => {
                var e;
                let i = (e = n).startsWith("#") ? e.substr(1) : e;
                return (0, S.I)(t, w, i);
            }, [t, n]);
        return { query: n, results: l, setQuery: i, unfilteredCount: t.length };
    })(e);
    return { ...t, results: t.results.map((e) => ({ ...e, type: x.RA.CHANNEL })) };
}
function ef(e) {
    let t = (function (e) {
        let t = (0, c.bG)([j.A], () => j.A.getGuild(e));
        R()(null != t, "guild must be present to be editing its integration settings");
        let n = (0, c.bG)([N.A], () => N.A.getHighestRole(t)),
            i = (0, c.yK)([b.Ay], () => b.Ay.getMembers(e), [e]),
            l = (0, c.cf)([y.default], () => y.default.getUsers()),
            a = (0, c.bG)([f.A], () => f.A.getSortedRoles(e), [e]),
            r = s.useMemo(() => {
                let e = [];
                for (let n of i) {
                    let i = l[n.userId];
                    if (null == i || i.bot) continue;
                    let s =
                        i.id !== t.ownerId &&
                        !_.$3({ permission: k.xBc.ADMINISTRATOR, user: i, context: t }) &&
                        N.A.canManageUser(k.xBc.USE_APPLICATION_COMMANDS, i, t);
                    e.push({ id: i.id, canManage: s, nick: n.nick, username: i.username });
                }
                return e;
            }, [t, i, l]),
            o = s.useMemo(() => {
                let e = [];
                for (let i of a) {
                    if (i.managed && i.tags?.bot_id != null) continue;
                    let l = !(0, M._m)(i, k.xBc.ADMINISTRATOR) && N.A.isRoleHigher(t, n, i),
                        s = { id: i.id, name: i.name, canManage: l };
                    (0, M.Oy)(i) ? e.unshift(s) : e.push(s);
                }
                return e;
            }, [a, t, n]),
            [d, u] = s.useState(""),
            m = s.useMemo(() => {
                var t;
                let n = (t = d).startsWith("@") ? t.substr(1) : t,
                    i = d.startsWith("@") ? o.filter((t) => t.id === e) : o;
                return { members: (0, S.I)(r, P, n), roles: (0, S.I)(i, W, n) };
            }, [e, r, d, o]);
        return { query: d, results: m, setQuery: u, unfilteredCount: m.members.length + m.roles.length };
    })(e);
    return {
        ...t,
        results: t.results.roles
            .map((e) => ({ ...e, type: x.RA.ROLE }))
            .concat(t.results.members.map((e) => ({ ...e, type: x.RA.USER }))),
    };
}
