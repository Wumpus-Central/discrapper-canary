n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(392711),
    a = n.n(r),
    o = n(149765),
    s = n(442837),
    c = n(481060),
    d = n(895924),
    u = n(581364),
    m = n(605436),
    h = n(271383),
    p = n(430824),
    g = n(496675),
    x = n(821864),
    f = n(905753),
    b = n(937427),
    v = n(643886),
    C = n(869157),
    I = n(454092),
    N = n(289465),
    j = n(981631),
    _ = n(689079),
    T = n(388032),
    S = n(148048);
function Z(e) {
    let { applicationId: t, commandId: r, guildId: b, inModal: v, editedTargetPermissions: Z, originalApplicationPermissions: A, originalCommandPermissions: R, selectedPermissionCount: L } = e,
        k = (0, s.e7)([f.Z], () => (null == r ? null : f.Z.getCommand(r)), [r]),
        O = (null == k ? void 0 : k.defaultMemberPermissions) != null,
        w = (0, s.e7)(
            [p.Z, h.ZP, g.Z],
            () => {
                let e = p.Z.getGuild(b),
                    t = h.ZP.getSelfMember(b);
                return (
                    null != e &&
                    null != t &&
                    (0, u.Ft)({
                        PermissionStore: g.Z,
                        guild: e,
                        selfMember: t,
                        applicationLevelPermissions: A,
                        commandLevelPermissions: R,
                        defaultMemberPermissions: null == k ? void 0 : k.defaultMemberPermissions
                    })
                );
            },
            [b, k, A, R]
        ),
        M = null != r ? r : t,
        [B, P] = l.useMemo(() => {
            let e = {},
                t = {};
            for (let [n, i] of Object.entries(Z)) i.type === d.Kw.CHANNEL ? (e[n] = i) : (t[n] = i);
            return [e, t];
        }, [Z]),
        D = l.useCallback(
            (e) => {
                let t = p.Z.getGuild(b),
                    n = h.ZP.getSelfMember(b);
                return (
                    null != t &&
                    null != n &&
                    (null != r
                        ? (0, u.Ft)({
                              PermissionStore: g.Z,
                              guild: t,
                              selfMember: n,
                              applicationLevelPermissions: A,
                              commandLevelPermissions: e,
                              defaultMemberPermissions: null == k ? void 0 : k.defaultMemberPermissions
                          })
                        : (0, u.Ft)({
                              PermissionStore: g.Z,
                              guild: t,
                              selfMember: n,
                              applicationLevelPermissions: e
                          }))
                );
            },
            [b, k, r, A]
        ),
        U = l.useCallback(
            (e, t) => {
                let n;
                let i = null;
                if (0 !== t.length) {
                    let e = Z[t[0]];
                    if (e.type === d.Kw.USER) n = I.s.REMOVE_SELF;
                    else {
                        let t = e.id;
                        if (((n = I.s.REMOVE_ROLE), (0, m.pM)(b, t))) i = '@everyone';
                        else {
                            let e = p.Z.getRole(b, t);
                            i = null != e ? e.name : 'role';
                        }
                    }
                } else {
                    let t = Object.values(e)[0].id;
                    if (((n = I.s.DENY_ROLE), (0, m.pM)(b, t))) i = '@everyone';
                    else {
                        let e = p.Z.getRole(b, t);
                        i = null != e ? e.name : 'role';
                    }
                }
                (0, I._)(n, i);
            },
            [b, Z]
        ),
        F = l.useCallback(
            (e, n) => {
                let i = {};
                for (let [e, t] of Object.entries(Z))
                    i[e] = {
                        id: t.id,
                        permission: t.permission,
                        type: t.type
                    };
                if (((i = Object.assign(i, e)), n.length > 0 && (i = a().omit(i, n)), !D(i))) {
                    U(e, n);
                    return;
                }
                x.W4(t, M, i);
            },
            [t, Z, M, D, U]
        ),
        W = l.useCallback(() => {
            let e = Object.keys(B);
            return (0, c.openModalLazy)(async () => {
                let { default: t } = await n.e('64908').then(n.bind(n, 557944));
                return (n) =>
                    (0, i.jsx)(t, {
                        editPermissions: F,
                        guildId: b,
                        headerText: T.intl.string(T.t['i1c+kZ']),
                        hasMemberSearch: !1,
                        overwrittenKeys: e,
                        search: E,
                        searchPlaceholderText: T.intl.string(T.t['TLQo/v']),
                        selectedPermissionCount: L,
                        ...n
                    });
            });
        }, [F, B, b, L]),
        H = l.useCallback(() => {
            let e = Object.keys(P);
            return (0, c.openModalLazy)(async () => {
                let { default: t } = await n.e('64908').then(n.bind(n, 557944));
                return (n) =>
                    (0, i.jsx)(t, {
                        editPermissions: F,
                        guildId: b,
                        hasMemberSearch: !0,
                        headerText: T.intl.string(T.t['56jRn5']),
                        overwrittenKeys: e,
                        search: y,
                        searchPlaceholderText: T.intl.string(T.t.wAfO5e),
                        selectedPermissionCount: L,
                        ...n
                    });
            });
        }, [F, b, P, L]),
        G = l.useCallback(
            () =>
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await n.e('21897').then(n.bind(n, 303313)),
                        t = k.defaultMemberPermissions;
                    return (
                        o.fS(t, u.BO) && (t = j.Plq.ADMINISTRATOR),
                        (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                defaultMemberPermissions: t
                            })
                    );
                }),
            [k]
        ),
        z = L - _._n,
        V = z >= 0,
        K = [
            {
                buttonClick: H,
                buttonText: T.intl.string(T.t['56jRn5']),
                noneSelectedText: T.intl.string(T.t.C0rYfn),
                overwrites: P,
                title: null == r ? T.intl.string(T.t['vPWe+/']) : T.intl.string(T.t['1jLVGB'])
            },
            {
                buttonClick: W,
                buttonText: T.intl.string(T.t['i1c+kZ']),
                noneSelectedText: T.intl.string(T.t.UBJhCw),
                overwrites: B,
                title: null == r ? T.intl.string(T.t.OGiMXF) : T.intl.string(T.t.Ujbaqq)
            }
        ];
    return (0, i.jsxs)(l.Fragment, {
        children: [
            z > 0
                ? (0, i.jsx)(c.HelpMessage, {
                      messageType: c.HelpMessageTypes.WARNING,
                      children: T.intl.format(T.t['B/dFBA'], { removeCount: z })
                  })
                : null,
            O
                ? (0, i.jsxs)('div', {
                      className: S.requiredPermissionsBanner,
                      children: [
                          (0, i.jsx)(c.CircleInformationIcon, {
                              size: 'sm',
                              color: 'currentColor',
                              className: S.icon
                          }),
                          (0, i.jsx)('span', {
                              className: S.message,
                              children: T.intl.format(T.t['2889Gh'], {})
                          }),
                          (0, i.jsx)(c.Button, {
                              color: c.Button.Colors.PRIMARY,
                              onClick: G,
                              size: c.Button.Sizes.SMALL,
                              className: S.addButton,
                              children: T.intl.string(T.t['HO/oXl'])
                          })
                      ]
                  })
                : null,
            K.map((e, t) => {
                let n = (t) =>
                        (0, i.jsx)(c.Button, {
                            ...t,
                            color: c.Button.Colors.PRIMARY,
                            disabled: V || !w,
                            onClick: e.buttonClick,
                            size: c.Button.Sizes.TINY,
                            className: S.addButton,
                            children: e.buttonText
                        }),
                    l = null;
                return (
                    w ? V && (l = T.intl.string(T.t.XTwtW1)) : (l = null != r ? T.intl.string(T.t.tybdam) : T.intl.string(T.t.z2hjk5)),
                    (0, i.jsx)(
                        N.Z,
                        {
                            bar: (0, i.jsx)(c.Tooltip, {
                                tooltipClassName: S.tooltip,
                                text: l,
                                shouldShow: null != l,
                                children: (e) => n(e)
                            }),
                            inModal: v,
                            title: e.title,
                            children: (0, i.jsx)('div', {
                                className: v ? void 0 : S.listContainer,
                                children: (0, i.jsx)(C.Z, {
                                    guildId: b,
                                    commandId: r,
                                    noneSelectedText: e.noneSelectedText,
                                    overwrites: e.overwrites,
                                    editPermissions: F,
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
function E(e) {
    let t = (0, b.w)(e);
    return {
        ...t,
        results: t.results.map((e) => ({
            ...e,
            type: d.Kw.CHANNEL
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
                type: d.Kw.ROLE
            }))
            .concat(
                t.results.members.map((e) => ({
                    ...e,
                    type: d.Kw.USER
                }))
            )
    };
}
