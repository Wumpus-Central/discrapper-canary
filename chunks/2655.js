n.d(t, {
    A: () => _,
}),
    n(896048);
var i = n(627968),
    r = n(64700),
    l = n(735438),
    a = n.n(l),
    s = n(136722),
    o = n(311907),
    c = n(397927),
    d = n(392054),
    u = n(168186),
    b = n(495273),
    f = n(696451),
    p = n(317525),
    m = n(71393),
    g = n(576705),
    h = n(542580),
    x = n(803378),
    j = n(615723),
    O = n(604870),
    y = n(664675),
    A = n(541956),
    v = n(636547),
    N = n(652215),
    E = n(73510),
    T = n(985018),
    w = n(183395);

function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}

function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function _(e) {
    let {
            applicationId: t,
            commandId: l,
            guildId: j,
            inModal: O,
            editedTargetPermissions: _,
            originalApplicationPermissions: k,
            originalCommandPermissions: R,
            selectedPermissionCount: L,
        } = e,
        M = (0, o.bG)([x.A], () => (null == l ? null : x.A.getCommand(l)), [l]),
        D = (null == M ? void 0 : M.defaultMemberPermissions) != null,
        G = (0, o.bG)([m.A, f.Ay, g.A], () => {
            let e = m.A.getGuild(j),
                t = f.Ay.getSelfMember(j);
            return (
                null != e &&
                null != t &&
                (0, u.zl)({
                    PermissionStore: g.A,
                    guild: e,
                    selfMember: t,
                    applicationLevelPermissions: k,
                    commandLevelPermissions: R,
                    defaultMemberPermissions: null == M ? void 0 : M.defaultMemberPermissions,
                })
            );
        }, [j, M, k, R]),
        U = null != l ? l : t,
        [B, W] = r.useMemo(() => {
            let e = {},
                t = {};
            for (let [n, i] of Object.entries(_)) i.type === d.RA.CHANNEL ? (e[n] = i) : (t[n] = i);
            return [e, t];
        }, [_]),
        H = r.useCallback(
            (e) => {
                let t = m.A.getGuild(j),
                    n = f.Ay.getSelfMember(j);
                return (
                    null != t &&
                    null != n &&
                    (null != l
                        ? (0, u.zl)({
                              PermissionStore: g.A,
                              guild: t,
                              selfMember: n,
                              applicationLevelPermissions: k,
                              commandLevelPermissions: e,
                              defaultMemberPermissions: null == M ? void 0 : M.defaultMemberPermissions,
                          })
                        : (0, u.zl)({
                              PermissionStore: g.A,
                              guild: t,
                              selfMember: n,
                              applicationLevelPermissions: e,
                          }))
                );
            },
            [j, M, l, k],
        ),
        V = r.useCallback(
            (e, t) => {
                let n,
                    i = null;
                if (0 !== t.length) {
                    let e = _[t[0]];
                    if (e.type === d.RA.USER) n = A.Q.REMOVE_SELF;
                    else {
                        let t = e.id;
                        if (((n = A.Q.REMOVE_ROLE), (0, b.N8)(j, t))) i = "@everyone";
                        else {
                            let e = p.A.getRole(j, t);
                            i = null != e ? e.name : "role";
                        }
                    }
                } else {
                    let t = Object.values(e)[0].id;
                    if (((n = A.Q.DENY_ROLE), (0, b.N8)(j, t))) i = "@everyone";
                    else {
                        let e = p.A.getRole(j, t);
                        i = null != e ? e.name : "role";
                    }
                }
                (0, A.A)(n, i);
            },
            [j, _],
        ),
        z = r.useCallback(
            (e, n) => {
                let i = {};
                for (let [e, t] of Object.entries(_))
                    i[e] = {
                        id: t.id,
                        permission: t.permission,
                        type: t.type,
                    };
                ((i = Object.assign(i, e)), n.length > 0 && (i = a().omit(i, n)), H(i)) ? h.T0(t, U, i) : V(e, n);
            },
            [t, _, U, H, V],
        ),
        K = r.useCallback(() => {
            let e = Object.keys(B);
            return (0, c.mMO)(async () => {
                let { default: t } = await n.e("52532").then(n.bind(n, 192991));
                return (n) =>
                    (0, i.jsx)(
                        t,
                        C(
                            {
                                editPermissions: z,
                                guildId: j,
                                headerText: T.intl.string(T.t["i1c+kV"]),
                                hasMemberSearch: !1,
                                overwrittenKeys: e,
                                search: I,
                                searchPlaceholderText: T.intl.string(T.t["TLQo/i"]),
                                selectedPermissionCount: L,
                            },
                            n,
                        ),
                    );
            });
        }, [z, B, j, L]),
        F = r.useCallback(() => {
            let e = Object.keys(W);
            return (0, c.mMO)(async () => {
                let { default: t } = await n.e("52532").then(n.bind(n, 192991));
                return (n) =>
                    (0, i.jsx)(
                        t,
                        C(
                            {
                                editPermissions: z,
                                guildId: j,
                                hasMemberSearch: !0,
                                headerText: T.intl.string(T.t["56jRn8"]),
                                overwrittenKeys: e,
                                search: P,
                                searchPlaceholderText: T.intl.string(T.t.wAfO5Y),
                                selectedPermissionCount: L,
                            },
                            n,
                        ),
                    );
            });
        }, [z, j, W, L]),
        Y = r.useCallback(
            () =>
                (0, c.mMO)(async () => {
                    let { default: e } = await n.e("29384").then(n.bind(n, 519387)),
                        t = M.defaultMemberPermissions;
                    return (
                        s.aI(t, u.Cq) && (t = N.xBc.ADMINISTRATOR),
                        (n) =>
                            (0, i.jsx)(
                                e,
                                S(C({}, n), {
                                    defaultMemberPermissions: t,
                                }),
                            )
                    );
                }),
            [M],
        ),
        q = L - E.iW,
        Q = q >= 0,
        J = [
            {
                buttonClick: F,
                buttonText: T.intl.string(T.t["56jRn8"]),
                noneSelectedText: T.intl.string(T.t.C0rYfq),
                overwrites: W,
                title: null == l ? T.intl.string(T.t["vPWe++"]) : T.intl.string(T.t["1jLVGB"]),
            },
            {
                buttonClick: K,
                buttonText: T.intl.string(T.t["i1c+kV"]),
                noneSelectedText: T.intl.string(T.t["UBJhC/"]),
                overwrites: B,
                title: null == l ? T.intl.string(T.t.OGiMXJ) : T.intl.string(T.t.Ujbaqm),
            },
        ];
    return (0, i.jsxs)(r.Fragment, {
        children: [
            q > 0
                ? (0, i.jsx)(c.po8, {
                      messageType: c.YCn.WARNING,
                      children: T.intl.format(T.t["B/dFBH"], {
                          removeCount: q,
                      }),
                  })
                : null,
            D
                ? (0, i.jsxs)("div", {
                      className: w.Yg,
                      children: [
                          (0, i.jsx)(c.mir, {
                              size: "sm",
                              color: "currentColor",
                              className: w.Kk,
                          }),
                          (0, i.jsx)("span", {
                              className: w.iU,
                              children: T.intl.format(T.t["2889Gq"], {}),
                          }),
                          (0, i.jsx)(c.Button, {
                              variant: "secondary",
                              size: "sm",
                              onClick: Y,
                              text: T.intl.string(T.t["HO/oXl"]),
                          }),
                      ],
                  })
                : null,
            J.map((e, t) => {
                let n = null;
                return (
                    G
                        ? Q && (n = T.intl.string(T.t["XTwtW/"]))
                        : (n = null != l ? T.intl.string(T.t.tybdas) : T.intl.string(T.t["z2hjk/"])),
                    (0, i.jsx)(
                        v.A,
                        {
                            bar: (0, i.jsx)(c.STz, {
                                tooltipClassName: w.YL,
                                text: n,
                                shouldShow: null != n,
                                children: (t) =>
                                    (0, i.jsx)(
                                        c.Button,
                                        S(C({}, t), {
                                            variant: "secondary",
                                            disabled: Q || !G,
                                            onClick: e.buttonClick,
                                            size: "sm",
                                            text: e.buttonText,
                                        }),
                                    ),
                            }),
                            inModal: O,
                            title: e.title,
                            children: (0, i.jsx)("div", {
                                className: O ? void 0 : w.qI,
                                children: (0, i.jsx)(y.A, {
                                    guildId: j,
                                    commandId: l,
                                    noneSelectedText: e.noneSelectedText,
                                    overwrites: e.overwrites,
                                    editPermissions: z,
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

function I(e) {
    let t = (0, j.Q)(e);
    return S(C({}, t), {
        results: t.results.map((e) =>
            S(C({}, e), {
                type: d.RA.CHANNEL,
            }),
        ),
    });
}

function P(e) {
    let t = (0, O.t)(e);
    return S(C({}, t), {
        results: t.results.roles
            .map((e) =>
                S(C({}, e), {
                    type: d.RA.ROLE,
                }),
            )
            .concat(
                t.results.members.map((e) =>
                    S(C({}, e), {
                        type: d.RA.USER,
                    }),
                ),
            ),
    });
}
