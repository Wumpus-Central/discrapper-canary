n.d(t, { Z: () => E }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(392711),
    r = n.n(a),
    s = n(149765),
    o = n(442837),
    d = n(481060),
    c = n(895924),
    u = n(581364),
    m = n(605436),
    h = n(271383),
    x = n(430824),
    p = n(496675),
    g = n(821864),
    f = n(905753),
    b = n(937427),
    v = n(643886),
    _ = n(869157),
    j = n(454092),
    N = n(289465),
    C = n(981631),
    I = n(689079),
    Z = n(388032),
    T = n(148048);
function E(e) {
    let { applicationId: t, commandId: a, guildId: b, inModal: v, editedTargetPermissions: E, originalApplicationPermissions: A, originalCommandPermissions: k, selectedPermissionCount: R } = e,
        L = (0, o.e7)([f.Z], () => (null == a ? null : f.Z.getCommand(a)), [a]),
        O = (null == L ? void 0 : L.defaultMemberPermissions) != null,
        w = (0, o.e7)(
            [x.Z, h.ZP, p.Z],
            () => {
                let e = x.Z.getGuild(b),
                    t = h.ZP.getSelfMember(b);
                return (
                    null != e &&
                    null != t &&
                    (0, u.Ft)({
                        PermissionStore: p.Z,
                        guild: e,
                        selfMember: t,
                        applicationLevelPermissions: A,
                        commandLevelPermissions: k,
                        defaultMemberPermissions: null == L ? void 0 : L.defaultMemberPermissions
                    })
                );
            },
            [b, L, A, k]
        ),
        P = null != a ? a : t,
        [D, M] = l.useMemo(() => {
            let e = {},
                t = {};
            for (let [n, i] of Object.entries(E)) i.type === c.Kw.CHANNEL ? (e[n] = i) : (t[n] = i);
            return [e, t];
        }, [E]),
        B = l.useCallback(
            (e) => {
                let t = x.Z.getGuild(b),
                    n = h.ZP.getSelfMember(b);
                return (
                    null != t &&
                    null != n &&
                    (null != a
                        ? (0, u.Ft)({
                              PermissionStore: p.Z,
                              guild: t,
                              selfMember: n,
                              applicationLevelPermissions: A,
                              commandLevelPermissions: e,
                              defaultMemberPermissions: null == L ? void 0 : L.defaultMemberPermissions
                          })
                        : (0, u.Ft)({
                              PermissionStore: p.Z,
                              guild: t,
                              selfMember: n,
                              applicationLevelPermissions: e
                          }))
                );
            },
            [b, L, a, A]
        ),
        U = l.useCallback(
            (e, t) => {
                let n;
                let i = null;
                if (0 !== t.length) {
                    let e = E[t[0]];
                    if (e.type === c.Kw.USER) n = j.s.REMOVE_SELF;
                    else {
                        let t = e.id;
                        if (((n = j.s.REMOVE_ROLE), (0, m.pM)(b, t))) i = '@everyone';
                        else {
                            let e = x.Z.getRole(b, t);
                            i = null != e ? e.name : 'role';
                        }
                    }
                } else {
                    let t = Object.values(e)[0].id;
                    if (((n = j.s.DENY_ROLE), (0, m.pM)(b, t))) i = '@everyone';
                    else {
                        let e = x.Z.getRole(b, t);
                        i = null != e ? e.name : 'role';
                    }
                }
                (0, j._)(n, i);
            },
            [b, E]
        ),
        W = l.useCallback(
            (e, n) => {
                let i = {};
                for (let [e, t] of Object.entries(E))
                    i[e] = {
                        id: t.id,
                        permission: t.permission,
                        type: t.type
                    };
                if (((i = Object.assign(i, e)), n.length > 0 && (i = r().omit(i, n)), !B(i))) {
                    U(e, n);
                    return;
                }
                g.W4(t, P, i);
            },
            [t, E, P, B, U]
        ),
        z = l.useCallback(() => {
            let e = Object.keys(D);
            return (0, d.ZDy)(async () => {
                let { default: t } = await n.e('64908').then(n.bind(n, 557944));
                return (n) =>
                    (0, i.jsx)(t, {
                        editPermissions: W,
                        guildId: b,
                        headerText: Z.intl.string(Z.t['i1c+kZ']),
                        hasMemberSearch: !1,
                        overwrittenKeys: e,
                        search: S,
                        searchPlaceholderText: Z.intl.string(Z.t['TLQo/v']),
                        selectedPermissionCount: R,
                        ...n
                    });
            });
        }, [W, D, b, R]),
        H = l.useCallback(() => {
            let e = Object.keys(M);
            return (0, d.ZDy)(async () => {
                let { default: t } = await n.e('64908').then(n.bind(n, 557944));
                return (n) =>
                    (0, i.jsx)(t, {
                        editPermissions: W,
                        guildId: b,
                        hasMemberSearch: !0,
                        headerText: Z.intl.string(Z.t['56jRn5']),
                        overwrittenKeys: e,
                        search: y,
                        searchPlaceholderText: Z.intl.string(Z.t.wAfO5e),
                        selectedPermissionCount: R,
                        ...n
                    });
            });
        }, [W, b, M, R]),
        G = l.useCallback(
            () =>
                (0, d.ZDy)(async () => {
                    let { default: e } = await n.e('21897').then(n.bind(n, 303313)),
                        t = L.defaultMemberPermissions;
                    return (
                        s.fS(t, u.BO) && (t = C.Plq.ADMINISTRATOR),
                        (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                defaultMemberPermissions: t
                            })
                    );
                }),
            [L]
        ),
        F = R - I._n,
        V = F >= 0,
        K = [
            {
                buttonClick: H,
                buttonText: Z.intl.string(Z.t['56jRn5']),
                noneSelectedText: Z.intl.string(Z.t.C0rYfn),
                overwrites: M,
                title: null == a ? Z.intl.string(Z.t['vPWe+/']) : Z.intl.string(Z.t['1jLVGB'])
            },
            {
                buttonClick: z,
                buttonText: Z.intl.string(Z.t['i1c+kZ']),
                noneSelectedText: Z.intl.string(Z.t.UBJhCw),
                overwrites: D,
                title: null == a ? Z.intl.string(Z.t.OGiMXF) : Z.intl.string(Z.t.Ujbaqq)
            }
        ];
    return (0, i.jsxs)(l.Fragment, {
        children: [
            F > 0
                ? (0, i.jsx)(d.Wn, {
                      messageType: d.QYI.WARNING,
                      children: Z.intl.format(Z.t['B/dFBA'], { removeCount: F })
                  })
                : null,
            O
                ? (0, i.jsxs)('div', {
                      className: T.requiredPermissionsBanner,
                      children: [
                          (0, i.jsx)(d.d3s, {
                              size: 'sm',
                              color: 'currentColor',
                              className: T.icon
                          }),
                          (0, i.jsx)('span', {
                              className: T.message,
                              children: Z.intl.format(Z.t['2889Gh'], {})
                          }),
                          (0, i.jsx)(d.zxk, {
                              color: d.zxk.Colors.PRIMARY,
                              onClick: G,
                              size: d.zxk.Sizes.SMALL,
                              className: T.addButton,
                              children: Z.intl.string(Z.t['HO/oXl'])
                          })
                      ]
                  })
                : null,
            K.map((e, t) => {
                let n = (t) =>
                        (0, i.jsx)(d.zxk, {
                            ...t,
                            color: d.zxk.Colors.PRIMARY,
                            disabled: V || !w,
                            onClick: e.buttonClick,
                            size: d.zxk.Sizes.TINY,
                            className: T.addButton,
                            children: e.buttonText
                        }),
                    l = null;
                return (
                    w ? V && (l = Z.intl.string(Z.t.XTwtW1)) : (l = null != a ? Z.intl.string(Z.t.tybdam) : Z.intl.string(Z.t.z2hjk5)),
                    (0, i.jsx)(
                        N.Z,
                        {
                            bar: (0, i.jsx)(d.ua7, {
                                tooltipClassName: T.tooltip,
                                text: l,
                                shouldShow: null != l,
                                children: (e) => n(e)
                            }),
                            inModal: v,
                            title: e.title,
                            children: (0, i.jsx)('div', {
                                className: v ? void 0 : T.listContainer,
                                children: (0, i.jsx)(_.Z, {
                                    guildId: b,
                                    commandId: a,
                                    noneSelectedText: e.noneSelectedText,
                                    overwrites: e.overwrites,
                                    editPermissions: W,
                                    hasAccessToMutatePermissions: w
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
function S(e) {
    let t = (0, b.w)(e);
    return {
        ...t,
        results: t.results.map((e) => ({
            ...e,
            type: c.Kw.CHANNEL
        }))
    };
}
function y(e) {
    let t = (0, v.U)(e);
    return {
        ...t,
        results: t.results.roles
            .map((e) => ({
                ...e,
                type: c.Kw.ROLE
            }))
            .concat(
                t.results.members.map((e) => ({
                    ...e,
                    type: c.Kw.USER
                }))
            )
    };
}
