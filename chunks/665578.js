n.d(t, { Z: () => P }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(392711),
    o = n.n(l),
    a = n(149765),
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
    O = n(643886),
    y = n(869157),
    v = n(454092),
    _ = n(289465),
    C = n(981631),
    N = n(689079),
    I = n(388032),
    S = n(190434);
function E(e) {
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
function P(e) {
    let { applicationId: t, commandId: l, guildId: j, inModal: O, editedTargetPermissions: P, originalApplicationPermissions: k, originalCommandPermissions: A, selectedPermissionCount: R } = e,
        D = (0, s.e7)([x.Z], () => (null == l ? null : x.Z.getCommand(l)), [l]),
        L = (null == D ? void 0 : D.defaultMemberPermissions) != null,
        M = (0, s.e7)(
            [g.Z, m.ZP, f.Z],
            () => {
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
                        defaultMemberPermissions: null == D ? void 0 : D.defaultMemberPermissions
                    })
                );
            },
            [j, D, k, A]
        ),
        B = null != l ? l : t,
        [U, W] = i.useMemo(() => {
            let e = {},
                t = {};
            for (let [n, r] of Object.entries(P)) r.type === d.Kw.CHANNEL ? (e[n] = r) : (t[n] = r);
            return [e, t];
        }, [P]),
        z = i.useCallback(
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
                              defaultMemberPermissions: null == D ? void 0 : D.defaultMemberPermissions
                          })
                        : (0, u.Ft)({
                              PermissionStore: f.Z,
                              guild: t,
                              selfMember: n,
                              applicationLevelPermissions: e
                          }))
                );
            },
            [j, D, l, k]
        ),
        H = i.useCallback(
            (e, t) => {
                let n,
                    r = null;
                if (0 !== t.length) {
                    let e = P[t[0]];
                    if (e.type === d.Kw.USER) n = v.s.REMOVE_SELF;
                    else {
                        let t = e.id;
                        if (((n = v.s.REMOVE_ROLE), (0, p.pM)(j, t))) r = '@everyone';
                        else {
                            let e = b.Z.getRole(j, t);
                            r = null != e ? e.name : 'role';
                        }
                    }
                } else {
                    let t = Object.values(e)[0].id;
                    if (((n = v.s.DENY_ROLE), (0, p.pM)(j, t))) r = '@everyone';
                    else {
                        let e = b.Z.getRole(j, t);
                        r = null != e ? e.name : 'role';
                    }
                }
                (0, v._)(n, r);
            },
            [j, P]
        ),
        G = i.useCallback(
            (e, n) => {
                let r = {};
                for (let [e, t] of Object.entries(P))
                    r[e] = {
                        id: t.id,
                        permission: t.permission,
                        type: t.type
                    };
                if (((r = Object.assign(r, e)), n.length > 0 && (r = o().omit(r, n)), !z(r))) return void H(e, n);
                h.W4(t, B, r);
            },
            [t, P, B, z, H]
        ),
        F = i.useCallback(() => {
            let e = Object.keys(U);
            return (0, c.ZDy)(async () => {
                let { default: t } = await n.e('64908').then(n.bind(n, 557944));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        E(
                            {
                                editPermissions: G,
                                guildId: j,
                                headerText: I.intl.string(I.t['i1c+kZ']),
                                hasMemberSearch: !1,
                                overwrittenKeys: e,
                                search: T,
                                searchPlaceholderText: I.intl.string(I.t['TLQo/v']),
                                selectedPermissionCount: R
                            },
                            n
                        )
                    );
            });
        }, [G, U, j, R]),
        V = i.useCallback(() => {
            let e = Object.keys(W);
            return (0, c.ZDy)(async () => {
                let { default: t } = await n.e('64908').then(n.bind(n, 557944));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        E(
                            {
                                editPermissions: G,
                                guildId: j,
                                hasMemberSearch: !0,
                                headerText: I.intl.string(I.t['56jRn5']),
                                overwrittenKeys: e,
                                search: Z,
                                searchPlaceholderText: I.intl.string(I.t.wAfO5e),
                                selectedPermissionCount: R
                            },
                            n
                        )
                    );
            });
        }, [G, j, W, R]),
        K = i.useCallback(
            () =>
                (0, c.ZDy)(async () => {
                    let { default: e } = await n.e('21897').then(n.bind(n, 303313)),
                        t = D.defaultMemberPermissions;
                    return a.fS(t, u.BO) && (t = C.Plq.ADMINISTRATOR), (n) => (0, r.jsx)(e, w(E({}, n), { defaultMemberPermissions: t }));
                }),
            [D]
        ),
        q = R - N._n,
        Y = q >= 0,
        X = [
            {
                buttonClick: V,
                buttonText: I.intl.string(I.t['56jRn5']),
                noneSelectedText: I.intl.string(I.t.C0rYfn),
                overwrites: W,
                title: null == l ? I.intl.string(I.t['vPWe+/']) : I.intl.string(I.t['1jLVGB'])
            },
            {
                buttonClick: F,
                buttonText: I.intl.string(I.t['i1c+kZ']),
                noneSelectedText: I.intl.string(I.t.UBJhCw),
                overwrites: U,
                title: null == l ? I.intl.string(I.t.OGiMXF) : I.intl.string(I.t.Ujbaqq)
            }
        ];
    return (0, r.jsxs)(i.Fragment, {
        children: [
            q > 0
                ? (0, r.jsx)(c.Wn, {
                      messageType: c.QYI.WARNING,
                      children: I.intl.format(I.t['B/dFBA'], { removeCount: q })
                  })
                : null,
            L
                ? (0, r.jsxs)('div', {
                      className: S.requiredPermissionsBanner,
                      children: [
                          (0, r.jsx)(c.d3s, {
                              size: 'sm',
                              color: 'currentColor',
                              className: S.icon
                          }),
                          (0, r.jsx)('span', {
                              className: S.message,
                              children: I.intl.format(I.t['2889Gh'], {})
                          }),
                          (0, r.jsx)(c.zxk, {
                              color: c.zxk.Colors.PRIMARY,
                              onClick: K,
                              size: c.zxk.Sizes.SMALL,
                              className: S.addButton,
                              children: I.intl.string(I.t['HO/oXl'])
                          })
                      ]
                  })
                : null,
            X.map((e, t) => {
                let n = (t) =>
                        (0, r.jsx)(
                            c.zxk,
                            w(E({}, t), {
                                color: c.zxk.Colors.PRIMARY,
                                disabled: Y || !M,
                                onClick: e.buttonClick,
                                size: c.zxk.Sizes.TINY,
                                className: S.addButton,
                                children: e.buttonText
                            })
                        ),
                    i = null;
                return (
                    M ? Y && (i = I.intl.string(I.t.XTwtW1)) : (i = null != l ? I.intl.string(I.t.tybdam) : I.intl.string(I.t.z2hjk5)),
                    (0, r.jsx)(
                        _.Z,
                        {
                            bar: (0, r.jsx)(c.ua7, {
                                tooltipClassName: S.tooltip,
                                text: i,
                                shouldShow: null != i,
                                children: (e) => n(e)
                            }),
                            inModal: O,
                            title: e.title,
                            children: (0, r.jsx)('div', {
                                className: O ? void 0 : S.listContainer,
                                children: (0, r.jsx)(y.Z, {
                                    guildId: j,
                                    commandId: l,
                                    noneSelectedText: e.noneSelectedText,
                                    overwrites: e.overwrites,
                                    editPermissions: G,
                                    hasAccessToMutatePermissions: M
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
function T(e) {
    let t = (0, j.w)(e);
    return w(E({}, t), { results: t.results.map((e) => w(E({}, e), { type: d.Kw.CHANNEL })) });
}
function Z(e) {
    let t = (0, O.U)(e);
    return w(E({}, t), { results: t.results.roles.map((e) => w(E({}, e), { type: d.Kw.ROLE })).concat(t.results.members.map((e) => w(E({}, e), { type: d.Kw.USER }))) });
}
