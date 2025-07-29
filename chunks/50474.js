(n.d(i, { default: () => v }), n(388685));
var t = n(255367),
    r = n(73800),
    s = n(392711),
    l = n.n(s),
    a = n(82659),
    o = n(481060),
    d = n(139387),
    c = n(479531),
    u = n(895924),
    p = n(581364),
    m = n(768581),
    y = n(821864),
    g = n(399860),
    b = n(995390),
    f = n(665578),
    h = n(388032);
function v(e) {
    let { applicationIcon: i, applicationId: n, applicationName: s, command: m, guildId: v, onClose: x, transitionState: E } = e,
        [w, O] = r.useState(null),
        [k, P] = r.useState(!1),
        { originalApplicationPermissions: C, originalCommandPermissions: I, editedTargetPermissions: K, hasChanges: N, selectedPermissionCount: S } = (0, b.Z)(v, n, m.id),
        Z = r.useCallback(async () => {
            var e, i, t, r, s;
            if (!N) return void x();
            let a = l().difference(Object.keys(null != (t = m.permissions) ? t : {}), Object.keys(K)),
                o = l().omit(
                    (function (e) {
                        for (var i = 1; i < arguments.length; i++) {
                            var n = null != arguments[i] ? arguments[i] : {},
                                t = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (t = t.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                t.forEach(function (i) {
                                    var t;
                                    ((t = n[i]),
                                        i in e
                                            ? Object.defineProperty(e, i, {
                                                  value: t,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[i] = t));
                                }));
                        }
                        return e;
                    })({}, K),
                    a
                ),
                d = (0, p.bD)(v),
                b = (0, g.rE)(v, u.Kw.ROLE),
                f = (0, g.rE)(d, u.Kw.CHANNEL),
                h = null == (r = null == (e = C[b]) ? void 0 : e.permission) || r,
                j = null == (s = null == (i = C[f]) ? void 0 : i.permission) || s,
                E = Object.values(o).map((e) => ({
                    id: e.id,
                    permission: e.permission,
                    type: e.type
                }));
            (O(null), P(!0));
            try {
                (await y.U3({
                    defaultEveryoneValue: h,
                    defaultEverywhereValue: j,
                    applicationId: n,
                    commandId: m.id,
                    guildId: v,
                    permissions: E
                }),
                    P(!1),
                    x());
            } catch (e) {
                O(new c.Z(e));
            }
            P(!1);
        }, [n, C, m.id, m.permissions, v, N, x, K, O, P]);
    r.useEffect(
        () => () => {
            (y.Ui(m.id), d.Z.stopEditingCommandPermissions(m.id));
        },
        [m.id]
    );
    let q = (0, g.gw)(m.type, m.displayName);
    return (0, t.jsx)(a.Modal, {
        'aria-label': h.intl.string(h.t['N+InBQ']),
        transitionState: E,
        onClose: x,
        title: h.intl.string(h.t['N+InBQ']),
        preview: (0, t.jsxs)(o.Kqy, {
            direction: 'horizontal',
            gap: 16,
            children: [
                (0, t.jsx)(j, {
                    icon: i,
                    id: n,
                    name: s
                }),
                (0, t.jsxs)(o.Kqy, {
                    direction: 'vertical',
                    gap: 4,
                    children: [
                        (0, t.jsx)(o.Text, {
                            variant: 'text-md/semibold',
                            children: q
                        }),
                        (0, t.jsx)(o.Text, {
                            color: 'text-muted',
                            variant: 'text-sm/normal',
                            children: m.displayDescription
                        })
                    ]
                })
            ]
        }),
        actions: [
            {
                text: h.intl.string(h.t['ETE/oK']),
                onClick: x,
                variant: 'secondary'
            },
            {
                text: h.intl.string(h.t.R3BPHx),
                onClick: Z,
                variant: 'primary',
                disabled: !N,
                loading: k
            }
        ],
        children: (0, t.jsxs)(o.Kqy, {
            direction: 'vertical',
            gap: 16,
            children: [
                null == w || w.hasFieldErrors() ? null : (0, t.jsx)(o.kzN, { children: w.getAnyErrorMessage() }),
                (0, t.jsx)(f.Z, {
                    applicationId: n,
                    commandId: m.id,
                    guildId: v,
                    inModal: !0,
                    originalApplicationPermissions: C,
                    originalCommandPermissions: I,
                    editedTargetPermissions: K,
                    selectedPermissionCount: S
                })
            ]
        })
    });
}
function j(e) {
    let { icon: i, id: n } = e,
        r = m.ZP.getApplicationIconURL({
            id: n,
            icon: i,
            size: 40
        });
    return (0, t.jsx)(o.qEK, {
        src: r,
        size: o.EFr.SIZE_40,
        'aria-hidden': !0
    });
}
