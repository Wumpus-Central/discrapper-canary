n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(136722),
    o = n(311907),
    d = n(397927),
    c = n(392054),
    u = n(168186),
    m = n(495273),
    g = n(696451),
    x = n(317525),
    h = n(71393),
    p = n(576705),
    A = n(542580),
    b = n(803378),
    _ = n(615723),
    f = n(604870),
    N = n(664675),
    j = n(541956),
    T = n(636547),
    C = n(652215),
    v = n(73510),
    E = n(985018),
    I = n(183395);
function S(e) {
    let {
            applicationId: t,
            commandId: s,
            guildId: _,
            inModal: f,
            editedTargetPermissions: S,
            originalApplicationPermissions: w,
            originalCommandPermissions: R,
            selectedPermissionCount: k,
        } = e,
        L = (0, o.bG)([b.A], () => (null == s ? null : b.A.getCommand(s)), [s]),
        M = L?.defaultMemberPermissions != null,
        G = (0, o.bG)([h.A, g.Ay, p.A], () => {
            let e = h.A.getGuild(_),
                t = g.Ay.getSelfMember(_);
            return (
                null != e &&
                null != t &&
                (0, u.zl)({
                    PermissionStore: p.A,
                    guild: e,
                    selfMember: t,
                    applicationLevelPermissions: w,
                    commandLevelPermissions: R,
                    defaultMemberPermissions: L?.defaultMemberPermissions,
                })
            );
        }, [_, L, w, R]),
        U = s ?? t,
        [D, P] = l.useMemo(() => {
            let e = {},
                t = {};
            for (let [n, i] of Object.entries(S)) i.type === c.RA.CHANNEL ? (e[n] = i) : (t[n] = i);
            return [e, t];
        }, [S]),
        B = l.useCallback(
            (e) => {
                let t = h.A.getGuild(_),
                    n = g.Ay.getSelfMember(_);
                return (
                    null != t &&
                    null != n &&
                    (null != s
                        ? (0, u.zl)({
                              PermissionStore: p.A,
                              guild: t,
                              selfMember: n,
                              applicationLevelPermissions: w,
                              commandLevelPermissions: e,
                              defaultMemberPermissions: L?.defaultMemberPermissions,
                          })
                        : (0, u.zl)({ PermissionStore: p.A, guild: t, selfMember: n, applicationLevelPermissions: e }))
                );
            },
            [_, L, s, w],
        ),
        W = l.useCallback(
            (e, t) => {
                let n,
                    i = null;
                if (0 !== t.length) {
                    let e = S[t[0]];
                    if (e.type === c.RA.USER) n = j.Q.REMOVE_SELF;
                    else {
                        let t = e.id;
                        if (((n = j.Q.REMOVE_ROLE), (0, m.N8)(_, t))) i = "@everyone";
                        else {
                            let e = x.A.getRole(_, t);
                            i = null != e ? e.name : "role";
                        }
                    }
                } else {
                    let t = Object.values(e)[0].id;
                    if (((n = j.Q.DENY_ROLE), (0, m.N8)(_, t))) i = "@everyone";
                    else {
                        let e = x.A.getRole(_, t);
                        i = null != e ? e.name : "role";
                    }
                }
                (0, j.A)(n, i);
            },
            [_, S],
        ),
        H = l.useCallback(
            (e, n) => {
                let i = {};
                for (let [e, t] of Object.entries(S)) i[e] = { id: t.id, permission: t.permission, type: t.type };
                ((i = Object.assign(i, e)), n.length > 0 && (i = a().omit(i, n)), B(i)) ? A.T0(t, U, i) : W(e, n);
            },
            [t, S, U, B, W],
        ),
        V = l.useCallback(() => {
            let e = Object.keys(D);
            return (0, d.mMO)(async () => {
                let { default: t } = await n.e("52532").then(n.bind(n, 192991));
                return (n) =>
                    (0, i.jsx)(t, {
                        editPermissions: H,
                        guildId: _,
                        headerText: E.intl.string(E.t["i1c+kV"]),
                        hasMemberSearch: !1,
                        overwrittenKeys: e,
                        search: y,
                        searchPlaceholderText: E.intl.string(E.t["TLQo/i"]),
                        selectedPermissionCount: k,
                        ...n,
                    });
            });
        }, [H, D, _, k]),
        z = l.useCallback(() => {
            let e = Object.keys(P);
            return (0, d.mMO)(async () => {
                let { default: t } = await n.e("52532").then(n.bind(n, 192991));
                return (n) =>
                    (0, i.jsx)(t, {
                        editPermissions: H,
                        guildId: _,
                        hasMemberSearch: !0,
                        headerText: E.intl.string(E.t["56jRn8"]),
                        overwrittenKeys: e,
                        search: O,
                        searchPlaceholderText: E.intl.string(E.t.wAfO5Y),
                        selectedPermissionCount: k,
                        ...n,
                    });
            });
        }, [H, _, P, k]),
        F = l.useCallback(
            () =>
                (0, d.mMO)(async () => {
                    let { default: e } = await n.e("29384").then(n.bind(n, 519387)),
                        t = L.defaultMemberPermissions;
                    return (
                        r.aI(t, u.Cq) && (t = C.xBc.ADMINISTRATOR),
                        (n) => (0, i.jsx)(e, { ...n, defaultMemberPermissions: t })
                    );
                }),
            [L],
        ),
        K = k - v.iW,
        Y = K >= 0,
        q = [
            {
                buttonClick: z,
                buttonText: E.intl.string(E.t["56jRn8"]),
                noneSelectedText: E.intl.string(E.t.C0rYfq),
                overwrites: P,
                title: null == s ? E.intl.string(E.t["vPWe++"]) : E.intl.string(E.t["1jLVGB"]),
            },
            {
                buttonClick: V,
                buttonText: E.intl.string(E.t["i1c+kV"]),
                noneSelectedText: E.intl.string(E.t["UBJhC/"]),
                overwrites: D,
                title: null == s ? E.intl.string(E.t.OGiMXJ) : E.intl.string(E.t.Ujbaqm),
            },
        ];
    return (0, i.jsxs)(l.Fragment, {
        children: [
            K > 0
                ? (0, i.jsx)(d.po8, {
                      messageType: d.YCn.WARNING,
                      children: E.intl.format(E.t["B/dFBH"], { removeCount: K }),
                  })
                : null,
            M
                ? (0, i.jsxs)("div", {
                      className: I.Yg,
                      children: [
                          (0, i.jsx)(d.mir, { size: "sm", color: "currentColor", className: I.Kk }),
                          (0, i.jsx)("span", { className: I.iU, children: E.intl.format(E.t["2889Gq"], {}) }),
                          (0, i.jsx)(d.Button, {
                              variant: "secondary",
                              size: "sm",
                              onClick: F,
                              text: E.intl.string(E.t["HO/oXl"]),
                          }),
                      ],
                  })
                : null,
            q.map((e, t) => {
                let n = null;
                return (
                    G
                        ? Y && (n = E.intl.string(E.t["XTwtW/"]))
                        : (n = null != s ? E.intl.string(E.t.tybdas) : E.intl.string(E.t["z2hjk/"])),
                    (0, i.jsx)(
                        T.A,
                        {
                            bar: (0, i.jsx)(d.STz, {
                                tooltipClassName: I.YL,
                                text: n,
                                shouldShow: null != n,
                                children: (t) =>
                                    (0, i.jsx)(d.Button, {
                                        ...t,
                                        variant: "secondary",
                                        disabled: Y || !G,
                                        onClick: e.buttonClick,
                                        size: "sm",
                                        text: e.buttonText,
                                    }),
                            }),
                            inModal: f,
                            title: e.title,
                            children: (0, i.jsx)("div", {
                                className: f ? void 0 : I.qI,
                                children: (0, i.jsx)(N.A, {
                                    guildId: _,
                                    commandId: s,
                                    noneSelectedText: e.noneSelectedText,
                                    overwrites: e.overwrites,
                                    editPermissions: H,
                                    hasAccessToMutatePermissions: G,
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
function y(e) {
    let t = (0, _.Q)(e);
    return { ...t, results: t.results.map((e) => ({ ...e, type: c.RA.CHANNEL })) };
}
function O(e) {
    let t = (0, f.t)(e);
    return {
        ...t,
        results: t.results.roles
            .map((e) => ({ ...e, type: c.RA.ROLE }))
            .concat(t.results.members.map((e) => ({ ...e, type: c.RA.USER }))),
    };
}
