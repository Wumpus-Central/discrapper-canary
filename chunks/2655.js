n.d(t, { A: () => k });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(136722),
    o = n(311907),
    d = n(192308),
    c = n(512950),
    u = n(885574),
    m = n(821609),
    g = n(781696),
    h = n(392054),
    x = n(168186),
    p = n(495273),
    A = n(696451),
    b = n(317525),
    f = n(71393),
    _ = n(576705),
    j = n(542580),
    N = n(803378),
    v = n(615723),
    E = n(604870),
    C = n(664675),
    I = n(541956),
    T = n(636547),
    S = n(652215),
    y = n(73510),
    w = n(985018),
    O = n(996024);
function k(e) {
    let {
            applicationId: t,
            commandId: s,
            guildId: v,
            inModal: E,
            editedTargetPermissions: k,
            originalApplicationPermissions: M,
            originalCommandPermissions: D,
            selectedPermissionCount: P,
        } = e,
        G = (0, o.bG)([N.A], () => (null == s ? null : N.A.getCommand(s)), [s]),
        U = G?.defaultMemberPermissions != null,
        W = (0, o.bG)([f.A, A.Ay, _.A], () => {
            let e = f.A.getGuild(v),
                t = A.Ay.getSelfMember(v);
            return (
                null != e &&
                null != t &&
                (0, x.zl)({
                    PermissionStore: _.A,
                    guild: e,
                    selfMember: t,
                    applicationLevelPermissions: M,
                    commandLevelPermissions: D,
                    defaultMemberPermissions: G?.defaultMemberPermissions,
                })
            );
        }, [v, G, M, D]),
        B = s ?? t,
        [H, z] = l.useMemo(() => {
            let e = {},
                t = {};
            for (let [n, i] of Object.entries(k)) i.type === h.RA.CHANNEL ? (e[n] = i) : (t[n] = i);
            return [e, t];
        }, [k]),
        V = l.useCallback(
            (e) => {
                let t = f.A.getGuild(v),
                    n = A.Ay.getSelfMember(v);
                return (
                    null != t &&
                    null != n &&
                    (null != s
                        ? (0, x.zl)({
                              PermissionStore: _.A,
                              guild: t,
                              selfMember: n,
                              applicationLevelPermissions: M,
                              commandLevelPermissions: e,
                              defaultMemberPermissions: G?.defaultMemberPermissions,
                          })
                        : (0, x.zl)({ PermissionStore: _.A, guild: t, selfMember: n, applicationLevelPermissions: e }))
                );
            },
            [v, G, s, M],
        ),
        F = l.useCallback(
            (e, t) => {
                let n,
                    i = null;
                if (0 !== t.length) {
                    let e = k[t[0]];
                    if (e.type === h.RA.USER) n = I.Q.REMOVE_SELF;
                    else {
                        let t = e.id;
                        if (((n = I.Q.REMOVE_ROLE), (0, p.N8)(v, t))) i = "@everyone";
                        else {
                            let e = b.A.getRole(v, t);
                            i = null != e ? e.name : "role";
                        }
                    }
                } else {
                    let t = Object.values(e)[0].id;
                    if (((n = I.Q.DENY_ROLE), (0, p.N8)(v, t))) i = "@everyone";
                    else {
                        let e = b.A.getRole(v, t);
                        i = null != e ? e.name : "role";
                    }
                }
                (0, I.A)(n, i);
            },
            [v, k],
        ),
        K = l.useCallback(
            (e, n) => {
                let i = {};
                for (let [e, t] of Object.entries(k)) i[e] = { id: t.id, permission: t.permission, type: t.type };
                ((i = Object.assign(i, e)), n.length > 0 && (i = a().omit(i, n)), V(i)) ? j.T0(t, B, i) : F(e, n);
            },
            [t, k, B, V, F],
        ),
        Y = l.useCallback(() => {
            let e = Object.keys(H);
            return (0, d.openModalLazy)(async () => {
                let { default: t } = await n.e("52532").then(n.bind(n, 192991));
                return (n) =>
                    (0, i.jsx)(t, {
                        editPermissions: K,
                        guildId: v,
                        headerText: w.intl.string(w.t["i1c+kV"]),
                        hasMemberSearch: !1,
                        overwrittenKeys: e,
                        search: L,
                        searchPlaceholderText: w.intl.string(w.t["TLQo/i"]),
                        selectedPermissionCount: P,
                        ...n,
                    });
            });
        }, [K, H, v, P]),
        q = l.useCallback(() => {
            let e = Object.keys(z);
            return (0, d.openModalLazy)(async () => {
                let { default: t } = await n.e("52532").then(n.bind(n, 192991));
                return (n) =>
                    (0, i.jsx)(t, {
                        editPermissions: K,
                        guildId: v,
                        hasMemberSearch: !0,
                        headerText: w.intl.string(w.t["56jRn8"]),
                        overwrittenKeys: e,
                        search: R,
                        searchPlaceholderText: w.intl.string(w.t.wAfO5Y),
                        selectedPermissionCount: P,
                        ...n,
                    });
            });
        }, [K, v, z, P]),
        Q = l.useCallback(
            () =>
                (0, d.openModalLazy)(async () => {
                    let { default: e } = await n.e("29384").then(n.bind(n, 519387)),
                        t = G.defaultMemberPermissions;
                    return (
                        r.aI(t, x.Cq) && (t = S.xBc.ADMINISTRATOR),
                        (n) => (0, i.jsx)(e, { ...n, defaultMemberPermissions: t })
                    );
                }),
            [G],
        ),
        Z = P - y.iW,
        J = Z >= 0,
        $ = [
            {
                buttonClick: q,
                buttonText: w.intl.string(w.t["56jRn8"]),
                noneSelectedText: w.intl.string(w.t.C0rYfq),
                overwrites: z,
                title: null == s ? w.intl.string(w.t["vPWe++"]) : w.intl.string(w.t["1jLVGB"]),
            },
            {
                buttonClick: Y,
                buttonText: w.intl.string(w.t["i1c+kV"]),
                noneSelectedText: w.intl.string(w.t["UBJhC/"]),
                overwrites: H,
                title: null == s ? w.intl.string(w.t.OGiMXJ) : w.intl.string(w.t.Ujbaqm),
            },
        ];
    return (0, i.jsxs)(l.Fragment, {
        children: [
            Z > 0
                ? (0, i.jsx)(c.p, {
                      messageType: c.Y.WARNING,
                      children: w.intl.format(w.t["B/dFBH"], { removeCount: Z }),
                  })
                : null,
            U
                ? (0, i.jsxs)("div", {
                      className: O.Yg,
                      children: [
                          (0, i.jsx)(u.m, { size: "sm", color: "currentColor", className: O.Kk }),
                          (0, i.jsx)("span", { className: O.iU, children: w.intl.format(w.t["2889Gq"], {}) }),
                          (0, i.jsx)(m.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: Q,
                              text: w.intl.string(w.t["HO/oXl"]),
                          }),
                      ],
                  })
                : null,
            $.map((e, t) => {
                let n = null;
                return (
                    W
                        ? J && (n = w.intl.string(w.t["XTwtW/"]))
                        : (n = null != s ? w.intl.string(w.t.tybdas) : w.intl.string(w.t["z2hjk/"])),
                    (0, i.jsx)(
                        T.A,
                        {
                            bar: (0, i.jsx)(g.ST, {
                                tooltipClassName: O.YL,
                                text: n,
                                shouldShow: null != n,
                                children: (t) =>
                                    (0, i.jsx)(m.$, {
                                        ...t,
                                        variant: "secondary",
                                        disabled: J || !W,
                                        onClick: e.buttonClick,
                                        size: "sm",
                                        text: e.buttonText,
                                    }),
                            }),
                            inModal: E,
                            title: e.title,
                            children: (0, i.jsx)("div", {
                                className: E ? void 0 : O.qI,
                                children: (0, i.jsx)(C.A, {
                                    guildId: v,
                                    commandId: s,
                                    noneSelectedText: e.noneSelectedText,
                                    overwrites: e.overwrites,
                                    editPermissions: K,
                                    hasAccessToMutatePermissions: W,
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
function L(e) {
    let t = (0, v.Q)(e);
    return { ...t, results: t.results.map((e) => ({ ...e, type: h.RA.CHANNEL })) };
}
function R(e) {
    let t = (0, E.t)(e);
    return {
        ...t,
        results: t.results.roles
            .map((e) => ({ ...e, type: h.RA.ROLE }))
            .concat(t.results.members.map((e) => ({ ...e, type: h.RA.USER }))),
    };
}
