n.d(t, { Z: () => w }), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(392711),
    a = n.n(l),
    o = n(149765),
    s = n(442837),
    c = n(481060),
    d = n(895924),
    u = n(581364),
    p = n(605436),
    m = n(271383),
    b = n(485386),
    g = n(430824),
    f = n(496675),
    h = n(821864),
    x = n(905753),
    j = n(937427),
    v = n(643886),
    y = n(869157),
    O = n(454092),
    _ = n(289465),
    C = n(981631),
    N = n(689079),
    S = n(388032),
    I = n(591086);
function E(e) {
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
function P(e, t) {
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
function w(e) {
    let {
            applicationId: t,
            commandId: l,
            guildId: j,
            inModal: v,
            editedTargetPermissions: w,
            originalApplicationPermissions: k,
            originalCommandPermissions: A,
            selectedPermissionCount: D,
        } = e,
        R = (0, s.e7)([x.Z], () => (null == l ? null : x.Z.getCommand(l)), [l]),
        L = (null == R ? void 0 : R.defaultMemberPermissions) != null,
        M = (0, s.e7)([g.Z, m.ZP, f.Z], () => {
            let e = g.Z.getGuild(j),
                t = m.ZP.getSelfMember(j);
            return (
                null != e &&
                null != t &&
                (0, u.Ft)({
                    PermissionStore: f.Z,
                    guild: e,
                    selfMember: t,
                    applicationLevelPermissions: k,
                    commandLevelPermissions: A,
                    defaultMemberPermissions: null == R ? void 0 : R.defaultMemberPermissions,
                })
            );
        }, [j, R, k, A]),
        B = null != l ? l : t,
        [U, W] = r.useMemo(() => {
            let e = {},
                t = {};
            for (let [n, i] of Object.entries(w)) i.type === d.Kw.CHANNEL ? (e[n] = i) : (t[n] = i);
            return [e, t];
        }, [w]),
        H = r.useCallback(
            (e) => {
                let t = g.Z.getGuild(j),
                    n = m.ZP.getSelfMember(j);
                return (
                    null != t &&
                    null != n &&
                    (null != l
                        ? (0, u.Ft)({
                              PermissionStore: f.Z,
                              guild: t,
                              selfMember: n,
                              applicationLevelPermissions: k,
                              commandLevelPermissions: e,
                              defaultMemberPermissions: null == R ? void 0 : R.defaultMemberPermissions,
                          })
                        : (0, u.Ft)({
                              PermissionStore: f.Z,
                              guild: t,
                              selfMember: n,
                              applicationLevelPermissions: e,
                          }))
                );
            },
            [j, R, l, k],
        ),
        G = r.useCallback(
            (e, t) => {
                let n,
                    i = null;
                if (0 !== t.length) {
                    let e = w[t[0]];
                    if (e.type === d.Kw.USER) n = O.s.REMOVE_SELF;
                    else {
                        let t = e.id;
                        if (((n = O.s.REMOVE_ROLE), (0, p.pM)(j, t))) i = "@everyone";
                        else {
                            let e = b.Z.getRole(j, t);
                            i = null != e ? e.name : "role";
                        }
                    }
                } else {
                    let t = Object.values(e)[0].id;
                    if (((n = O.s.DENY_ROLE), (0, p.pM)(j, t))) i = "@everyone";
                    else {
                        let e = b.Z.getRole(j, t);
                        i = null != e ? e.name : "role";
                    }
                }
                (0, O._)(n, i);
            },
            [j, w],
        ),
        K = r.useCallback(
            (e, n) => {
                let i = {};
                for (let [e, t] of Object.entries(w))
                    i[e] = {
                        id: t.id,
                        permission: t.permission,
                        type: t.type,
                    };
                if (((i = Object.assign(i, e)), n.length > 0 && (i = a().omit(i, n)), !H(i))) return void G(e, n);
                h.W4(t, B, i);
            },
            [t, w, B, H, G],
        ),
        F = r.useCallback(() => {
            let e = Object.keys(U);
            return (0, c.ZDy)(async () => {
                let { default: t } = await n.e("64908").then(n.bind(n, 557944));
                return (n) =>
                    (0, i.jsx)(
                        t,
                        E(
                            {
                                editPermissions: K,
                                guildId: j,
                                headerText: S.intl.string(S.t["i1c+kZ"]),
                                hasMemberSearch: !1,
                                overwrittenKeys: e,
                                search: T,
                                searchPlaceholderText: S.intl.string(S.t["TLQo/v"]),
                                selectedPermissionCount: D,
                            },
                            n,
                        ),
                    );
            });
        }, [K, U, j, D]),
        z = r.useCallback(() => {
            let e = Object.keys(W);
            return (0, c.ZDy)(async () => {
                let { default: t } = await n.e("64908").then(n.bind(n, 557944));
                return (n) =>
                    (0, i.jsx)(
                        t,
                        E(
                            {
                                editPermissions: K,
                                guildId: j,
                                hasMemberSearch: !0,
                                headerText: S.intl.string(S.t["56jRn5"]),
                                overwrittenKeys: e,
                                search: Z,
                                searchPlaceholderText: S.intl.string(S.t.wAfO5e),
                                selectedPermissionCount: D,
                            },
                            n,
                        ),
                    );
            });
        }, [K, j, W, D]),
        q = r.useCallback(
            () =>
                (0, c.ZDy)(async () => {
                    let { default: e } = await n.e("21897").then(n.bind(n, 303313)),
                        t = R.defaultMemberPermissions;
                    return (
                        o.fS(t, u.BO) && (t = C.Plq.ADMINISTRATOR),
                        (n) => (0, i.jsx)(e, P(E({}, n), { defaultMemberPermissions: t }))
                    );
                }),
            [R],
        ),
        V = D - N._n,
        Y = V >= 0,
        J = [
            {
                buttonClick: z,
                buttonText: S.intl.string(S.t["56jRn5"]),
                noneSelectedText: S.intl.string(S.t.C0rYfn),
                overwrites: W,
                title: null == l ? S.intl.string(S.t["vPWe+/"]) : S.intl.string(S.t["1jLVGB"]),
            },
            {
                buttonClick: F,
                buttonText: S.intl.string(S.t["i1c+kZ"]),
                noneSelectedText: S.intl.string(S.t.UBJhCw),
                overwrites: U,
                title: null == l ? S.intl.string(S.t.OGiMXF) : S.intl.string(S.t.Ujbaqq),
            },
        ];
    return (0, i.jsxs)(r.Fragment, {
        children: [
            V > 0
                ? (0, i.jsx)(c.Wn, {
                      messageType: c.QYI.WARNING,
                      children: S.intl.format(S.t["B/dFBA"], { removeCount: V }),
                  })
                : null,
            L
                ? (0, i.jsxs)("div", {
                      className: I.requiredPermissionsBanner,
                      children: [
                          (0, i.jsx)(c.d3s, {
                              size: "sm",
                              color: "currentColor",
                              className: I.icon,
                          }),
                          (0, i.jsx)("span", {
                              className: I.message,
                              children: S.intl.format(S.t["2889Gh"], {}),
                          }),
                          (0, i.jsx)(c.Button, {
                              variant: "secondary",
                              size: "sm",
                              onClick: q,
                              text: S.intl.string(S.t["HO/oXl"]),
                          }),
                      ],
                  })
                : null,
            J.map((e, t) => {
                let n = null;
                return (
                    M
                        ? Y && (n = S.intl.string(S.t.XTwtW1))
                        : (n = null != l ? S.intl.string(S.t.tybdam) : S.intl.string(S.t.z2hjk5)),
                    (0, i.jsx)(
                        _.Z,
                        {
                            bar: (0, i.jsx)(c.ua7, {
                                tooltipClassName: I.tooltip,
                                text: n,
                                shouldShow: null != n,
                                children: (t) =>
                                    (0, i.jsx)(
                                        c.Button,
                                        P(E({}, t), {
                                            variant: "secondary",
                                            disabled: Y || !M,
                                            onClick: e.buttonClick,
                                            size: "sm",
                                            text: e.buttonText,
                                        }),
                                    ),
                            }),
                            inModal: v,
                            title: e.title,
                            children: (0, i.jsx)("div", {
                                className: v ? void 0 : I.listContainer,
                                children: (0, i.jsx)(y.Z, {
                                    guildId: j,
                                    commandId: l,
                                    noneSelectedText: e.noneSelectedText,
                                    overwrites: e.overwrites,
                                    editPermissions: K,
                                    hasAccessToMutatePermissions: M,
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
function T(e) {
    let t = (0, j.w)(e);
    return P(E({}, t), { results: t.results.map((e) => P(E({}, e), { type: d.Kw.CHANNEL })) });
}
function Z(e) {
    let t = (0, v.U)(e);
    return P(E({}, t), {
        results: t.results.roles
            .map((e) => P(E({}, e), { type: d.Kw.ROLE }))
            .concat(t.results.members.map((e) => P(E({}, e), { type: d.Kw.USER }))),
    });
}
