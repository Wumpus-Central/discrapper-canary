(n.d(t, { Z: () => Z }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(392711),
    o = n.n(l),
    a = n(149765),
    s = n(442837),
    c = n(755721),
    d = n(481060),
    u = n(895924),
    p = n(581364),
    m = n(605436),
    b = n(271383),
    g = n(485386),
    f = n(430824),
    h = n(496675),
    x = n(821864),
    j = n(905753),
    v = n(937427),
    O = n(643886),
    y = n(869157),
    _ = n(454092),
    C = n(289465),
    N = n(981631),
    S = n(689079),
    I = n(388032),
    E = n(190434);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function w(e, t) {
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
function Z(e) {
    let { applicationId: t, commandId: l, guildId: v, inModal: O, editedTargetPermissions: Z, originalApplicationPermissions: k, originalCommandPermissions: D, selectedPermissionCount: R } = e,
        L = (0, s.e7)([j.Z], () => (null == l ? null : j.Z.getCommand(l)), [l]),
        M = (null == L ? void 0 : L.defaultMemberPermissions) != null,
        B = (0, s.e7)(
            [f.Z, b.ZP, h.Z],
            () => {
                let e = f.Z.getGuild(v),
                    t = b.ZP.getSelfMember(v);
                return (
                    null != e &&
                    null != t &&
                    (0, p.Ft)({
                        PermissionStore: h.Z,
                        guild: e,
                        selfMember: t,
                        applicationLevelPermissions: k,
                        commandLevelPermissions: D,
                        defaultMemberPermissions: null == L ? void 0 : L.defaultMemberPermissions
                    })
                );
            },
            [v, L, k, D]
        ),
        U = null != l ? l : t,
        [W, H] = i.useMemo(() => {
            let e = {},
                t = {};
            for (let [n, r] of Object.entries(Z)) r.type === u.Kw.CHANNEL ? (e[n] = r) : (t[n] = r);
            return [e, t];
        }, [Z]),
        G = i.useCallback(
            (e) => {
                let t = f.Z.getGuild(v),
                    n = b.ZP.getSelfMember(v);
                return (
                    null != t &&
                    null != n &&
                    (null != l
                        ? (0, p.Ft)({
                              PermissionStore: h.Z,
                              guild: t,
                              selfMember: n,
                              applicationLevelPermissions: k,
                              commandLevelPermissions: e,
                              defaultMemberPermissions: null == L ? void 0 : L.defaultMemberPermissions
                          })
                        : (0, p.Ft)({
                              PermissionStore: h.Z,
                              guild: t,
                              selfMember: n,
                              applicationLevelPermissions: e
                          }))
                );
            },
            [v, L, l, k]
        ),
        z = i.useCallback(
            (e, t) => {
                let n,
                    r = null;
                if (0 !== t.length) {
                    let e = Z[t[0]];
                    if (e.type === u.Kw.USER) n = _.s.REMOVE_SELF;
                    else {
                        let t = e.id;
                        if (((n = _.s.REMOVE_ROLE), (0, m.pM)(v, t))) r = '@everyone';
                        else {
                            let e = g.Z.getRole(v, t);
                            r = null != e ? e.name : 'role';
                        }
                    }
                } else {
                    let t = Object.values(e)[0].id;
                    if (((n = _.s.DENY_ROLE), (0, m.pM)(v, t))) r = '@everyone';
                    else {
                        let e = g.Z.getRole(v, t);
                        r = null != e ? e.name : 'role';
                    }
                }
                (0, _._)(n, r);
            },
            [v, Z]
        ),
        F = i.useCallback(
            (e, n) => {
                let r = {};
                for (let [e, t] of Object.entries(Z))
                    r[e] = {
                        id: t.id,
                        permission: t.permission,
                        type: t.type
                    };
                if (((r = Object.assign(r, e)), n.length > 0 && (r = o().omit(r, n)), !G(r))) return void z(e, n);
                x.W4(t, U, r);
            },
            [t, Z, U, G, z]
        ),
        V = i.useCallback(() => {
            let e = Object.keys(W);
            return (0, d.ZDy)(async () => {
                let { default: t } = await n.e('64908').then(n.bind(n, 557944));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        T(
                            {
                                editPermissions: F,
                                guildId: v,
                                headerText: I.intl.string(I.t['i1c+kZ']),
                                hasMemberSearch: !1,
                                overwrittenKeys: e,
                                search: P,
                                searchPlaceholderText: I.intl.string(I.t['TLQo/v']),
                                selectedPermissionCount: R
                            },
                            n
                        )
                    );
            });
        }, [F, W, v, R]),
        K = i.useCallback(() => {
            let e = Object.keys(H);
            return (0, d.ZDy)(async () => {
                let { default: t } = await n.e('64908').then(n.bind(n, 557944));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        T(
                            {
                                editPermissions: F,
                                guildId: v,
                                hasMemberSearch: !0,
                                headerText: I.intl.string(I.t['56jRn5']),
                                overwrittenKeys: e,
                                search: A,
                                searchPlaceholderText: I.intl.string(I.t.wAfO5e),
                                selectedPermissionCount: R
                            },
                            n
                        )
                    );
            });
        }, [F, v, H, R]),
        q = i.useCallback(
            () =>
                (0, d.ZDy)(async () => {
                    let { default: e } = await n.e('21897').then(n.bind(n, 303313)),
                        t = L.defaultMemberPermissions;
                    return (a.fS(t, p.BO) && (t = N.Plq.ADMINISTRATOR), (n) => (0, r.jsx)(e, w(T({}, n), { defaultMemberPermissions: t })));
                }),
            [L]
        ),
        Y = R - S._n,
        X = Y >= 0,
        J = [
            {
                buttonClick: K,
                buttonText: I.intl.string(I.t['56jRn5']),
                noneSelectedText: I.intl.string(I.t.C0rYfn),
                overwrites: H,
                title: null == l ? I.intl.string(I.t['vPWe+/']) : I.intl.string(I.t['1jLVGB'])
            },
            {
                buttonClick: V,
                buttonText: I.intl.string(I.t['i1c+kZ']),
                noneSelectedText: I.intl.string(I.t.UBJhCw),
                overwrites: W,
                title: null == l ? I.intl.string(I.t.OGiMXF) : I.intl.string(I.t.Ujbaqq)
            }
        ];
    return (0, r.jsxs)(i.Fragment, {
        children: [
            Y > 0
                ? (0, r.jsx)(d.Wn, {
                      messageType: d.QYI.WARNING,
                      children: I.intl.format(I.t['B/dFBA'], { removeCount: Y })
                  })
                : null,
            M
                ? (0, r.jsxs)('div', {
                      className: E.requiredPermissionsBanner,
                      children: [
                          (0, r.jsx)(d.d3s, {
                              size: 'sm',
                              color: 'currentColor',
                              className: E.icon
                          }),
                          (0, r.jsx)('span', {
                              className: E.message,
                              children: I.intl.format(I.t['2889Gh'], {})
                          }),
                          (0, r.jsx)(c.zx, {
                              color: c.zx.Colors.PRIMARY,
                              onClick: q,
                              size: c.zx.Sizes.SMALL,
                              className: E.addButton,
                              children: I.intl.string(I.t['HO/oXl'])
                          })
                      ]
                  })
                : null,
            J.map((e, t) => {
                let n = (t) =>
                        (0, r.jsx)(
                            c.zx,
                            w(T({}, t), {
                                color: c.zx.Colors.PRIMARY,
                                disabled: X || !B,
                                onClick: e.buttonClick,
                                size: c.zx.Sizes.TINY,
                                className: E.addButton,
                                children: e.buttonText
                            })
                        ),
                    i = null;
                return (
                    B ? X && (i = I.intl.string(I.t.XTwtW1)) : (i = null != l ? I.intl.string(I.t.tybdam) : I.intl.string(I.t.z2hjk5)),
                    (0, r.jsx)(
                        C.Z,
                        {
                            bar: (0, r.jsx)(d.ua7, {
                                tooltipClassName: E.tooltip,
                                text: i,
                                shouldShow: null != i,
                                children: (e) => n(e)
                            }),
                            inModal: O,
                            title: e.title,
                            children: (0, r.jsx)('div', {
                                className: O ? void 0 : E.listContainer,
                                children: (0, r.jsx)(y.Z, {
                                    guildId: v,
                                    commandId: l,
                                    noneSelectedText: e.noneSelectedText,
                                    overwrites: e.overwrites,
                                    editPermissions: F,
                                    hasAccessToMutatePermissions: B
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
function P(e) {
    let t = (0, v.w)(e);
    return w(T({}, t), { results: t.results.map((e) => w(T({}, e), { type: u.Kw.CHANNEL })) });
}
function A(e) {
    let t = (0, O.U)(e);
    return w(T({}, t), { results: t.results.roles.map((e) => w(T({}, e), { type: u.Kw.ROLE })).concat(t.results.members.map((e) => w(T({}, e), { type: u.Kw.USER }))) });
}
