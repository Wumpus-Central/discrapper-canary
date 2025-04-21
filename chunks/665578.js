n.d(t, { Z: () => P }), n(388685);
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
    O = n(869157),
    y = n(454092),
    v = n(289465),
    _ = n(981631),
    C = n(689079),
    N = n(388032),
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
    let { applicationId: t, commandId: l, guildId: x, inModal: j, editedTargetPermissions: P, originalApplicationPermissions: Z, originalCommandPermissions: k, selectedPermissionCount: A } = e,
        D = (0, s.e7)([h.Z], () => (null == l ? null : h.Z.getCommand(l)), [l]),
        R = (null == D ? void 0 : D.defaultMemberPermissions) != null,
        L = (0, s.e7)(
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
                        commandLevelPermissions: k,
                        defaultMemberPermissions: null == D ? void 0 : D.defaultMemberPermissions
                    })
                );
            },
            [x, D, Z, k]
        ),
        M = null != l ? l : t,
        [B, U] = i.useMemo(() => {
            let e = {},
                t = {};
            for (let [n, r] of Object.entries(P)) r.type === d.Kw.CHANNEL ? (e[n] = r) : (t[n] = r);
            return [e, t];
        }, [P]),
        W = i.useCallback(
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
                              defaultMemberPermissions: null == D ? void 0 : D.defaultMemberPermissions
                          })
                        : (0, u.Ft)({
                              PermissionStore: g.Z,
                              guild: t,
                              selfMember: n,
                              applicationLevelPermissions: e
                          }))
                );
            },
            [x, D, l, Z]
        ),
        z = i.useCallback(
            (e, t) => {
                let n,
                    r = null;
                if (0 !== t.length) {
                    let e = P[t[0]];
                    if (e.type === d.Kw.USER) n = y.s.REMOVE_SELF;
                    else {
                        let t = e.id;
                        if (((n = y.s.REMOVE_ROLE), (0, p.pM)(x, t))) r = '@everyone';
                        else {
                            let e = b.Z.getRole(x, t);
                            r = null != e ? e.name : 'role';
                        }
                    }
                } else {
                    let t = Object.values(e)[0].id;
                    if (((n = y.s.DENY_ROLE), (0, p.pM)(x, t))) r = '@everyone';
                    else {
                        let e = b.Z.getRole(x, t);
                        r = null != e ? e.name : 'role';
                    }
                }
                (0, y._)(n, r);
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
                if (((r = Object.assign(r, e)), n.length > 0 && (r = o().omit(r, n)), !W(r))) return void z(e, n);
                f.W4(t, M, r);
            },
            [t, P, M, W, z]
        ),
        G = i.useCallback(() => {
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
                                headerText: N.intl.string(N.t['i1c+kZ']),
                                hasMemberSearch: !1,
                                overwrittenKeys: e,
                                search: w,
                                searchPlaceholderText: N.intl.string(N.t['TLQo/v']),
                                selectedPermissionCount: A
                            },
                            n
                        )
                    );
            });
        }, [H, B, x, A]),
        F = i.useCallback(() => {
            let e = Object.keys(U);
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
                                headerText: N.intl.string(N.t['56jRn5']),
                                overwrittenKeys: e,
                                search: T,
                                searchPlaceholderText: N.intl.string(N.t.wAfO5e),
                                selectedPermissionCount: A
                            },
                            n
                        )
                    );
            });
        }, [H, x, U, A]),
        V = i.useCallback(
            () =>
                (0, c.ZDy)(async () => {
                    let { default: e } = await n.e('21897').then(n.bind(n, 303313)),
                        t = D.defaultMemberPermissions;
                    return a.fS(t, u.BO) && (t = _.Plq.ADMINISTRATOR), (n) => (0, r.jsx)(e, E(S({}, n), { defaultMemberPermissions: t }));
                }),
            [D]
        ),
        K = A - C._n,
        q = K >= 0,
        Y = [
            {
                buttonClick: F,
                buttonText: N.intl.string(N.t['56jRn5']),
                noneSelectedText: N.intl.string(N.t.C0rYfn),
                overwrites: U,
                title: null == l ? N.intl.string(N.t['vPWe+/']) : N.intl.string(N.t['1jLVGB'])
            },
            {
                buttonClick: G,
                buttonText: N.intl.string(N.t['i1c+kZ']),
                noneSelectedText: N.intl.string(N.t.UBJhCw),
                overwrites: B,
                title: null == l ? N.intl.string(N.t.OGiMXF) : N.intl.string(N.t.Ujbaqq)
            }
        ];
    return (0, r.jsxs)(i.Fragment, {
        children: [
            K > 0
                ? (0, r.jsx)(c.Wn, {
                      messageType: c.QYI.WARNING,
                      children: N.intl.format(N.t['B/dFBA'], { removeCount: K })
                  })
                : null,
            R
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
                              children: N.intl.format(N.t['2889Gh'], {})
                          }),
                          (0, r.jsx)(c.zxk, {
                              color: c.zxk.Colors.PRIMARY,
                              onClick: V,
                              size: c.zxk.Sizes.SMALL,
                              className: I.addButton,
                              children: N.intl.string(N.t['HO/oXl'])
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
                                disabled: q || !L,
                                onClick: e.buttonClick,
                                size: c.zxk.Sizes.TINY,
                                className: I.addButton,
                                children: e.buttonText
                            })
                        ),
                    i = null;
                return (
                    L ? q && (i = N.intl.string(N.t.XTwtW1)) : (i = null != l ? N.intl.string(N.t.tybdam) : N.intl.string(N.t.z2hjk5)),
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
                                children: (0, r.jsx)(O.Z, {
                                    guildId: x,
                                    commandId: l,
                                    noneSelectedText: e.noneSelectedText,
                                    overwrites: e.overwrites,
                                    editPermissions: H,
                                    hasAccessToMutatePermissions: L
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
