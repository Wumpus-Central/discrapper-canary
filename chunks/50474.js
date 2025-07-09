(a.d(i, { default: () => E }), a(388685));
var n = a(255367),
    t = a(73800),
    r = a(392711),
    s = a.n(r),
    o = a(755721),
    l = a(481060),
    d = a(139387),
    c = a(479531),
    m = a(895924),
    u = a(581364),
    p = a(768581),
    b = a(821864),
    x = a(399860),
    h = a(995390),
    y = a(665578),
    f = a(388032),
    j = a(566670);
function E(e) {
    let { applicationIcon: i, applicationId: a, applicationName: r, command: p, guildId: E, onClose: v, transitionState: C } = e,
        [k, w] = t.useState(null),
        [P, O] = t.useState(!1),
        { originalApplicationPermissions: z, originalCommandPermissions: N, editedTargetPermissions: R, hasChanges: I, selectedPermissionCount: _ } = (0, h.Z)(E, a, p.id),
        D = t.useCallback(async () => {
            var e, i, n, t, r;
            if (!I) return void v();
            let o = s().difference(Object.keys(null != (n = p.permissions) ? n : {}), Object.keys(R)),
                l = s().omit(
                    (function (e) {
                        for (var i = 1; i < arguments.length; i++) {
                            var a = null != arguments[i] ? arguments[i] : {},
                                n = Object.keys(a);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(a).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                    })
                                )),
                                n.forEach(function (i) {
                                    var n;
                                    ((n = a[i]),
                                        i in e
                                            ? Object.defineProperty(e, i, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[i] = n));
                                }));
                        }
                        return e;
                    })({}, R),
                    o
                ),
                d = (0, u.bD)(E),
                h = (0, x.rE)(E, m.Kw.ROLE),
                y = (0, x.rE)(d, m.Kw.CHANNEL),
                f = null == (t = null == (e = z[h]) ? void 0 : e.permission) || t,
                j = null == (r = null == (i = z[y]) ? void 0 : i.permission) || r,
                g = Object.values(l).map((e) => ({
                    id: e.id,
                    permission: e.permission,
                    type: e.type
                }));
            (w(null), O(!0));
            try {
                (await b.U3({
                    defaultEveryoneValue: f,
                    defaultEverywhereValue: j,
                    applicationId: a,
                    commandId: p.id,
                    guildId: E,
                    permissions: g
                }),
                    O(!1),
                    v());
            } catch (e) {
                w(new c.Z(e));
            }
            O(!1);
        }, [a, z, p.id, p.permissions, E, I, v, R, w, O]);
    t.useEffect(
        () => () => {
            (b.Ui(p.id), d.Z.stopEditingCommandPermissions(p.id));
        },
        [p.id]
    );
    let B = (0, x.gw)(p.type, p.displayName);
    return (0, n.jsxs)(l.Y0X, {
        'aria-label': f.intl.string(f.t['N+InBQ']),
        size: l.CgR.MEDIUM,
        transitionState: C,
        className: j.modalRoot,
        parentComponent: 'CommandPermissionsModal',
        children: [
            (0, n.jsxs)(l.xBx, {
                separator: !1,
                className: j.modalHeader,
                children: [
                    (0, n.jsx)(g, {
                        icon: i,
                        id: a,
                        name: r
                    }),
                    (0, n.jsxs)('div', {
                        className: j.headerDescription,
                        children: [
                            (0, n.jsx)(l.Text, {
                                variant: 'text-md/semibold',
                                children: B
                            }),
                            (0, n.jsx)(l.Text, {
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: p.displayDescription
                            })
                        ]
                    })
                ]
            }),
            (0, n.jsxs)(l.hzk, {
                className: j.modalBody,
                children: [
                    null == k || k.hasFieldErrors() ? null : (0, n.jsx)(l.kzN, { children: k.getAnyErrorMessage() }),
                    (0, n.jsx)(y.Z, {
                        applicationId: a,
                        commandId: p.id,
                        guildId: E,
                        inModal: !0,
                        originalApplicationPermissions: z,
                        originalCommandPermissions: N,
                        editedTargetPermissions: R,
                        selectedPermissionCount: _
                    })
                ]
            }),
            (0, n.jsx)(l.mzw, {
                className: j.modalFooter,
                children: (0, n.jsxs)(l.hE2, {
                    direction: 'horizontal-reverse',
                    children: [
                        (0, n.jsx)(o.zx, {
                            type: 'submit',
                            disabled: P,
                            onClick: D,
                            color: !0 === I ? o.zx.Colors.GREEN : o.zx.Colors.PRIMARY,
                            children: f.intl.string(f.t.R3BPHx)
                        }),
                        (0, n.jsx)(l.zxk, {
                            variant: 'secondary',
                            text: f.intl.string(f.t['ETE/oK']),
                            onClick: v
                        })
                    ]
                })
            })
        ]
    });
}
function g(e) {
    let { icon: i, id: a } = e,
        t = p.ZP.getApplicationIconURL({
            id: a,
            icon: i,
            size: 40
        });
    return (0, n.jsx)(l.qEK, {
        src: t,
        size: l.EFr.SIZE_40,
        'aria-hidden': !0
    });
}
