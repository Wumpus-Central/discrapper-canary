(n.d(t, { Z: () => w }), n(388685));
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
    v = n(643886),
    O = n(869157),
    y = n(454092),
    _ = n(289465),
    C = n(981631),
    N = n(689079),
    S = n(388032),
    E = n(190434);
function I(e) {
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
function T(e, t) {
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
function w(e) {
    let { applicationId: t, commandId: l, guildId: j, inModal: v, editedTargetPermissions: w, originalApplicationPermissions: A, originalCommandPermissions: k, selectedPermissionCount: D } = e,
        R = (0, s.e7)([x.Z], () => (null == l ? null : x.Z.getCommand(l)), [l]),
        L = (null == R ? void 0 : R.defaultMemberPermissions) != null,
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
                        applicationLevelPermissions: A,
                        commandLevelPermissions: k,
                        defaultMemberPermissions: null == R ? void 0 : R.defaultMemberPermissions
                    })
                );
            },
            [j, R, A, k]
        ),
        B = null != l ? l : t,
        [U, W] = i.useMemo(() => {
            let e = {},
                t = {};
            for (let [n, r] of Object.entries(w)) r.type === d.Kw.CHANNEL ? (e[n] = r) : (t[n] = r);
            return [e, t];
        }, [w]),
        H = i.useCallback(
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
                              applicationLevelPermissions: A,
                              commandLevelPermissions: e,
                              defaultMemberPermissions: null == R ? void 0 : R.defaultMemberPermissions
                          })
                        : (0, u.Ft)({
                              PermissionStore: f.Z,
                              guild: t,
                              selfMember: n,
                              applicationLevelPermissions: e
                          }))
                );
            },
            [j, R, l, A]
        ),
        G = i.useCallback(
            (e, t) => {
                let n,
                    r = null;
                if (0 !== t.length) {
                    let e = w[t[0]];
                    if (e.type === d.Kw.USER) n = y.s.REMOVE_SELF;
                    else {
                        let t = e.id;
                        if (((n = y.s.REMOVE_ROLE), (0, p.pM)(j, t))) r = '@everyone';
                        else {
                            let e = b.Z.getRole(j, t);
                            r = null != e ? e.name : 'role';
                        }
                    }
                } else {
                    let t = Object.values(e)[0].id;
                    if (((n = y.s.DENY_ROLE), (0, p.pM)(j, t))) r = '@everyone';
                    else {
                        let e = b.Z.getRole(j, t);
                        r = null != e ? e.name : 'role';
                    }
                }
                (0, y._)(n, r);
            },
            [j, w]
        ),
        z = i.useCallback(
            (e, n) => {
                let r = {};
                for (let [e, t] of Object.entries(w))
                    r[e] = {
                        id: t.id,
                        permission: t.permission,
                        type: t.type
                    };
                if (((r = Object.assign(r, e)), n.length > 0 && (r = o().omit(r, n)), !H(r))) return void G(e, n);
                h.W4(t, B, r);
            },
            [t, w, B, H, G]
        ),
        F = i.useCallback(() => {
            let e = Object.keys(U);
            return (0, c.ZDy)(async () => {
                let { default: t } = await n.e('64908').then(n.bind(n, 557944));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        I(
                            {
                                editPermissions: z,
                                guildId: j,
                                headerText: S.intl.string(S.t['i1c+kZ']),
                                hasMemberSearch: !1,
                                overwrittenKeys: e,
                                search: Z,
                                searchPlaceholderText: S.intl.string(S.t['TLQo/v']),
                                selectedPermissionCount: D
                            },
                            n
                        )
                    );
            });
        }, [z, U, j, D]),
        V = i.useCallback(() => {
            let e = Object.keys(W);
            return (0, c.ZDy)(async () => {
                let { default: t } = await n.e('64908').then(n.bind(n, 557944));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        I(
                            {
                                editPermissions: z,
                                guildId: j,
                                hasMemberSearch: !0,
                                headerText: S.intl.string(S.t['56jRn5']),
                                overwrittenKeys: e,
                                search: P,
                                searchPlaceholderText: S.intl.string(S.t.wAfO5e),
                                selectedPermissionCount: D
                            },
                            n
                        )
                    );
            });
        }, [z, j, W, D]),
        K = i.useCallback(
            () =>
                (0, c.ZDy)(async () => {
                    let { default: e } = await n.e('21897').then(n.bind(n, 303313)),
                        t = R.defaultMemberPermissions;
                    return (a.fS(t, u.BO) && (t = C.Plq.ADMINISTRATOR), (n) => (0, r.jsx)(e, T(I({}, n), { defaultMemberPermissions: t })));
                }),
            [R]
        ),
        q = D - N._n,
        Y = q >= 0,
        X = [
            {
                buttonClick: V,
                buttonText: S.intl.string(S.t['56jRn5']),
                noneSelectedText: S.intl.string(S.t.C0rYfn),
                overwrites: W,
                title: null == l ? S.intl.string(S.t['vPWe+/']) : S.intl.string(S.t['1jLVGB'])
            },
            {
                buttonClick: F,
                buttonText: S.intl.string(S.t['i1c+kZ']),
                noneSelectedText: S.intl.string(S.t.UBJhCw),
                overwrites: U,
                title: null == l ? S.intl.string(S.t.OGiMXF) : S.intl.string(S.t.Ujbaqq)
            }
        ];
    return (0, r.jsxs)(i.Fragment, {
        children: [
            q > 0
                ? (0, r.jsx)(c.Wn, {
                      messageType: c.QYI.WARNING,
                      children: S.intl.format(S.t['B/dFBA'], { removeCount: q })
                  })
                : null,
            L
                ? (0, r.jsxs)('div', {
                      className: E.requiredPermissionsBanner,
                      children: [
                          (0, r.jsx)(c.d3s, {
                              size: 'sm',
                              color: 'currentColor',
                              className: E.icon
                          }),
                          (0, r.jsx)('span', {
                              className: E.message,
                              children: S.intl.format(S.t['2889Gh'], {})
                          }),
                          (0, r.jsx)(c.zxk, {
                              variant: 'secondary',
                              size: 'sm',
                              onClick: K,
                              text: S.intl.string(S.t['HO/oXl'])
                          })
                      ]
                  })
                : null,
            X.map((e, t) => {
                let n = (t) =>
                        (0, r.jsx)(
                            c.zxk,
                            T(I({}, t), {
                                variant: 'secondary',
                                disabled: Y || !M,
                                onClick: e.buttonClick,
                                size: 'sm',
                                text: e.buttonText
                            })
                        ),
                    i = null;
                return (
                    M ? Y && (i = S.intl.string(S.t.XTwtW1)) : (i = null != l ? S.intl.string(S.t.tybdam) : S.intl.string(S.t.z2hjk5)),
                    (0, r.jsx)(
                        _.Z,
                        {
                            bar: (0, r.jsx)(c.ua7, {
                                tooltipClassName: E.tooltip,
                                text: i,
                                shouldShow: null != i,
                                children: (e) => n(e)
                            }),
                            inModal: v,
                            title: e.title,
                            children: (0, r.jsx)('div', {
                                className: v ? void 0 : E.listContainer,
                                children: (0, r.jsx)(O.Z, {
                                    guildId: j,
                                    commandId: l,
                                    noneSelectedText: e.noneSelectedText,
                                    overwrites: e.overwrites,
                                    editPermissions: z,
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
function Z(e) {
    let t = (0, j.w)(e);
    return T(I({}, t), { results: t.results.map((e) => T(I({}, e), { type: d.Kw.CHANNEL })) });
}
function P(e) {
    let t = (0, v.U)(e);
    return T(I({}, t), { results: t.results.roles.map((e) => T(I({}, e), { type: d.Kw.ROLE })).concat(t.results.members.map((e) => T(I({}, e), { type: d.Kw.USER }))) });
}
