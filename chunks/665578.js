n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(392711),
    a = n.n(r),
    o = n(149765),
    s = n(442837),
    d = n(481060),
    c = n(895924),
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
    N = n(454092),
    I = n(289465),
    j = n(981631),
    T = n(689079),
    _ = n(388032),
    Z = n(148048);
function E(e) {
    let { applicationId: t, commandId: r, guildId: b, inModal: v, editedTargetPermissions: E, originalApplicationPermissions: A, originalCommandPermissions: R, selectedPermissionCount: L } = e,
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
        [P, B] = l.useMemo(() => {
            let e = {},
                t = {};
            for (let [n, i] of Object.entries(E)) i.type === c.Kw.CHANNEL ? (e[n] = i) : (t[n] = i);
            return [e, t];
        }, [E]),
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
                    let e = E[t[0]];
                    if (e.type === c.Kw.USER) n = N.s.REMOVE_SELF;
                    else {
                        let t = e.id;
                        if (((n = N.s.REMOVE_ROLE), (0, m.pM)(b, t))) i = '@everyone';
                        else {
                            let e = p.Z.getRole(b, t);
                            i = null != e ? e.name : 'role';
                        }
                    }
                } else {
                    let t = Object.values(e)[0].id;
                    if (((n = N.s.DENY_ROLE), (0, m.pM)(b, t))) i = '@everyone';
                    else {
                        let e = p.Z.getRole(b, t);
                        i = null != e ? e.name : 'role';
                    }
                }
                (0, N._)(n, i);
            },
            [b, E]
        ),
        F = l.useCallback(
            (e, n) => {
                let i = {};
                for (let [e, t] of Object.entries(E))
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
            [t, E, M, D, U]
        ),
        W = l.useCallback(() => {
            let e = Object.keys(P);
            return (0, d.openModalLazy)(async () => {
                let { default: t } = await n.e('64908').then(n.bind(n, 557944));
                return (n) =>
                    (0, i.jsx)(t, {
                        editPermissions: F,
                        guildId: b,
                        headerText: _.intl.string(_.t['i1c+kZ']),
                        hasMemberSearch: !1,
                        overwrittenKeys: e,
                        search: S,
                        searchPlaceholderText: _.intl.string(_.t['TLQo/v']),
                        selectedPermissionCount: L,
                        ...n
                    });
            });
        }, [F, P, b, L]),
        H = l.useCallback(() => {
            let e = Object.keys(B);
            return (0, d.openModalLazy)(async () => {
                let { default: t } = await n.e('64908').then(n.bind(n, 557944));
                return (n) =>
                    (0, i.jsx)(t, {
                        editPermissions: F,
                        guildId: b,
                        hasMemberSearch: !0,
                        headerText: _.intl.string(_.t['56jRn5']),
                        overwrittenKeys: e,
                        search: y,
                        searchPlaceholderText: _.intl.string(_.t.wAfO5e),
                        selectedPermissionCount: L,
                        ...n
                    });
            });
        }, [F, b, B, L]),
        G = l.useCallback(
            () =>
                (0, d.openModalLazy)(async () => {
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
        z = L - T._n,
        V = z >= 0,
        K = [
            {
                buttonClick: H,
                buttonText: _.intl.string(_.t['56jRn5']),
                noneSelectedText: _.intl.string(_.t.C0rYfn),
                overwrites: B,
                title: null == r ? _.intl.string(_.t['vPWe+/']) : _.intl.string(_.t['1jLVGB'])
            },
            {
                buttonClick: W,
                buttonText: _.intl.string(_.t['i1c+kZ']),
                noneSelectedText: _.intl.string(_.t.UBJhCw),
                overwrites: P,
                title: null == r ? _.intl.string(_.t.OGiMXF) : _.intl.string(_.t.Ujbaqq)
            }
        ];
    return (0, i.jsxs)(l.Fragment, {
        children: [
            z > 0
                ? (0, i.jsx)(d.HelpMessage, {
                      messageType: d.HelpMessageTypes.WARNING,
                      children: _.intl.format(_.t['B/dFBA'], { removeCount: z })
                  })
                : null,
            O
                ? (0, i.jsxs)('div', {
                      className: Z.requiredPermissionsBanner,
                      children: [
                          (0, i.jsx)(d.CircleInformationIcon, {
                              size: 'sm',
                              color: 'currentColor',
                              className: Z.icon
                          }),
                          (0, i.jsx)('span', {
                              className: Z.message,
                              children: _.intl.format(_.t['2889Gh'], {})
                          }),
                          (0, i.jsx)(d.Button, {
                              color: d.Button.Colors.PRIMARY,
                              onClick: G,
                              size: d.Button.Sizes.SMALL,
                              className: Z.addButton,
                              children: _.intl.string(_.t['HO/oXl'])
                          })
                      ]
                  })
                : null,
            K.map((e, t) => {
                let n = (t) =>
                        (0, i.jsx)(d.Button, {
                            ...t,
                            color: d.Button.Colors.PRIMARY,
                            disabled: V || !w,
                            onClick: e.buttonClick,
                            size: d.Button.Sizes.TINY,
                            className: Z.addButton,
                            children: e.buttonText
                        }),
                    l = null;
                return (
                    w ? V && (l = _.intl.string(_.t.XTwtW1)) : (l = null != r ? _.intl.string(_.t.tybdam) : _.intl.string(_.t.z2hjk5)),
                    (0, i.jsx)(
                        I.Z,
                        {
                            bar: (0, i.jsx)(d.Tooltip, {
                                tooltipClassName: Z.tooltip,
                                text: l,
                                shouldShow: null != l,
                                children: (e) => n(e)
                            }),
                            inModal: v,
                            title: e.title,
                            children: (0, i.jsx)('div', {
                                className: v ? void 0 : Z.listContainer,
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
