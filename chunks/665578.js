n.d(t, { Z: () => P }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(392711),
    o = n.n(l),
    a = n(149765),
    s = n(442837),
    c = n(481060),
    d = n(895924),
    u = n(581364),
    p = n(605436),
    m = n(271383),
    b = n(430824),
    g = n(496675),
    f = n(821864),
    h = n(905753),
    x = n(937427),
    j = n(643886),
    N = n(869157),
    O = n(454092),
    v = n(289465),
    y = n(981631),
    _ = n(689079),
    C = n(388032),
    I = n(190434);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e) {
    let { applicationId: t, commandId: l, guildId: x, inModal: j, editedTargetPermissions: P, originalApplicationPermissions: Z, originalCommandPermissions: W, selectedPermissionCount: k } = e,
        A = (0, s.e7)([h.Z], () => (null == l ? null : h.Z.getCommand(l)), [l]),
        D = (null == A ? void 0 : A.defaultMemberPermissions) != null,
        R = (0, s.e7)(
            [b.Z, m.ZP, g.Z],
            () => {
                let e = b.Z.getGuild(x),
                    t = m.ZP.getSelfMember(x);
                return (
                    null != e &&
                    null != t &&
                    (0, u.Ft)({
                        PermissionStore: g.Z,
                        guild: e,
                        selfMember: t,
                        applicationLevelPermissions: Z,
                        commandLevelPermissions: W,
                        defaultMemberPermissions: null == A ? void 0 : A.defaultMemberPermissions
                    })
                );
            },
            [x, A, Z, W]
        ),
        L = null != l ? l : t,
        [M, B] = i.useMemo(() => {
            let e = {},
                t = {};
            for (let [n, r] of Object.entries(P)) r.type === d.Kw.CHANNEL ? (e[n] = r) : (t[n] = r);
            return [e, t];
        }, [P]),
        U = i.useCallback(
            (e) => {
                let t = b.Z.getGuild(x),
                    n = m.ZP.getSelfMember(x);
                return (
                    null != t &&
                    null != n &&
                    (null != l
                        ? (0, u.Ft)({
                              PermissionStore: g.Z,
                              guild: t,
                              selfMember: n,
                              applicationLevelPermissions: Z,
                              commandLevelPermissions: e,
                              defaultMemberPermissions: null == A ? void 0 : A.defaultMemberPermissions
                          })
                        : (0, u.Ft)({
                              PermissionStore: g.Z,
                              guild: t,
                              selfMember: n,
                              applicationLevelPermissions: e
                          }))
                );
            },
            [x, A, l, Z]
        ),
        z = i.useCallback(
            (e, t) => {
                let n,
                    r = null;
                if (0 !== t.length) {
                    let e = P[t[0]];
                    if (e.type === d.Kw.USER) n = O.s.REMOVE_SELF;
                    else {
                        let t = e.id;
                        if (((n = O.s.REMOVE_ROLE), (0, p.pM)(x, t))) r = '@everyone';
                        else {
                            let e = b.Z.getRole(x, t);
                            r = null != e ? e.name : 'role';
                        }
                    }
                } else {
                    let t = Object.values(e)[0].id;
                    if (((n = O.s.DENY_ROLE), (0, p.pM)(x, t))) r = '@everyone';
                    else {
                        let e = b.Z.getRole(x, t);
                        r = null != e ? e.name : 'role';
                    }
                }
                (0, O._)(n, r);
            },
            [x, P]
        ),
        H = i.useCallback(
            (e, n) => {
                let r = {};
                for (let [e, t] of Object.entries(P))
                    r[e] = {
                        id: t.id,
                        permission: t.permission,
                        type: t.type
                    };
                if (((r = Object.assign(r, e)), n.length > 0 && (r = o().omit(r, n)), !U(r))) return void z(e, n);
                f.W4(t, L, r);
            },
            [t, P, L, U, z]
        ),
        G = i.useCallback(() => {
            let e = Object.keys(M);
            return (0, c.ZDy)(async () => {
                let { default: t } = await n.e('64908').then(n.bind(n, 557944));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        S(
                            {
                                editPermissions: H,
                                guildId: x,
                                headerText: C.NW.string(C.t['i1c+kZ']),
                                hasMemberSearch: !1,
                                overwrittenKeys: e,
                                search: w,
                                searchPlaceholderText: C.NW.string(C.t['TLQo/v']),
                                selectedPermissionCount: k
                            },
                            n
                        )
                    );
            });
        }, [H, M, x, k]),
        F = i.useCallback(() => {
            let e = Object.keys(B);
            return (0, c.ZDy)(async () => {
                let { default: t } = await n.e('64908').then(n.bind(n, 557944));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        S(
                            {
                                editPermissions: H,
                                guildId: x,
                                hasMemberSearch: !0,
                                headerText: C.NW.string(C.t['56jRn5']),
                                overwrittenKeys: e,
                                search: T,
                                searchPlaceholderText: C.NW.string(C.t.wAfO5e),
                                selectedPermissionCount: k
                            },
                            n
                        )
                    );
            });
        }, [H, x, B, k]),
        V = i.useCallback(
            () =>
                (0, c.ZDy)(async () => {
                    let { default: e } = await n.e('21897').then(n.bind(n, 303313)),
                        t = A.defaultMemberPermissions;
                    return a.fS(t, u.BO) && (t = y.Plq.ADMINISTRATOR), (n) => (0, r.jsx)(e, E(S({}, n), { defaultMemberPermissions: t }));
                }),
            [A]
        ),
        K = k - _._n,
        q = K >= 0,
        Y = [
            {
                buttonClick: F,
                buttonText: C.NW.string(C.t['56jRn5']),
                noneSelectedText: C.NW.string(C.t.C0rYfn),
                overwrites: B,
                title: null == l ? C.NW.string(C.t['vPWe+/']) : C.NW.string(C.t['1jLVGB'])
            },
            {
                buttonClick: G,
                buttonText: C.NW.string(C.t['i1c+kZ']),
                noneSelectedText: C.NW.string(C.t.UBJhCw),
                overwrites: M,
                title: null == l ? C.NW.string(C.t.OGiMXF) : C.NW.string(C.t.Ujbaqq)
            }
        ];
    return (0, r.jsxs)(i.Fragment, {
        children: [
            K > 0
                ? (0, r.jsx)(c.Wn, {
                      messageType: c.QYI.WARNING,
                      children: C.NW.format(C.t['B/dFBA'], { removeCount: K })
                  })
                : null,
            D
                ? (0, r.jsxs)('div', {
                      className: I.requiredPermissionsBanner,
                      children: [
                          (0, r.jsx)(c.d3s, {
                              size: 'sm',
                              color: 'currentColor',
                              className: I.icon
                          }),
                          (0, r.jsx)('span', {
                              className: I.message,
                              children: C.NW.format(C.t['2889Gh'], {})
                          }),
                          (0, r.jsx)(c.zxk, {
                              color: c.zxk.Colors.PRIMARY,
                              onClick: V,
                              size: c.zxk.Sizes.SMALL,
                              className: I.addButton,
                              children: C.NW.string(C.t['HO/oXl'])
                          })
                      ]
                  })
                : null,
            Y.map((e, t) => {
                let n = (t) =>
                        (0, r.jsx)(
                            c.zxk,
                            E(S({}, t), {
                                color: c.zxk.Colors.PRIMARY,
                                disabled: q || !R,
                                onClick: e.buttonClick,
                                size: c.zxk.Sizes.TINY,
                                className: I.addButton,
                                children: e.buttonText
                            })
                        ),
                    i = null;
                return (
                    R ? q && (i = C.NW.string(C.t.XTwtW1)) : (i = null != l ? C.NW.string(C.t.tybdam) : C.NW.string(C.t.z2hjk5)),
                    (0, r.jsx)(
                        v.Z,
                        {
                            bar: (0, r.jsx)(c.ua7, {
                                tooltipClassName: I.tooltip,
                                text: i,
                                shouldShow: null != i,
                                children: (e) => n(e)
                            }),
                            inModal: j,
                            title: e.title,
                            children: (0, r.jsx)('div', {
                                className: j ? void 0 : I.listContainer,
                                children: (0, r.jsx)(N.Z, {
                                    guildId: x,
                                    commandId: l,
                                    noneSelectedText: e.noneSelectedText,
                                    overwrites: e.overwrites,
                                    editPermissions: H,
                                    hasAccessToMutatePermissions: R
                                })
                            })
                        },
                        t
                    )
                );
            })
        ]
    });
}
function w(e) {
    let t = (0, x.w)(e);
    return E(S({}, t), { results: t.results.map((e) => E(S({}, e), { type: d.Kw.CHANNEL })) });
}
function T(e) {
    let t = (0, j.U)(e);
    return E(S({}, t), { results: t.results.roles.map((e) => E(S({}, e), { type: d.Kw.ROLE })).concat(t.results.members.map((e) => E(S({}, e), { type: d.Kw.USER }))) });
}
