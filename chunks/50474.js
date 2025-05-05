r.d(i, { default: () => j }), r(388685);
var s = r(255367),
    n = r(73800),
    t = r(392711),
    o = r.n(t),
    a = r(481060),
    l = r(139387),
    d = r(479531),
    c = r(895924),
    m = r(581364),
    u = r(768581),
    p = r(821864),
    b = r(399860),
    x = r(995390),
    h = r(665578),
    y = r(388032),
    f = r(566670);
function j(e) {
    let { applicationIcon: i, applicationId: r, applicationName: t, command: u, guildId: j, onClose: E, transitionState: g } = e,
        [v, w] = n.useState(null),
        [C, P] = n.useState(!1),
        { originalApplicationPermissions: z, originalCommandPermissions: O, editedTargetPermissions: I, hasChanges: N, selectedPermissionCount: R } = (0, x.Z)(j, r, u.id),
        D = n.useCallback(async () => {
            var e, i, s, n, t;
            if (!N) return void E();
            let a = o().difference(Object.keys(null != (s = u.permissions) ? s : {}), Object.keys(I)),
                l = o().omit(
                    (function (e) {
                        for (var i = 1; i < arguments.length; i++) {
                            var r = null != arguments[i] ? arguments[i] : {},
                                s = Object.keys(r);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (s = s.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    })
                                )),
                                s.forEach(function (i) {
                                    var s;
                                    (s = r[i]),
                                        i in e
                                            ? Object.defineProperty(e, i, {
                                                  value: s,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[i] = s);
                                });
                        }
                        return e;
                    })({}, I),
                    a
                ),
                x = (0, m.bD)(j),
                h = (0, b.rE)(j, c.Kw.ROLE),
                y = (0, b.rE)(x, c.Kw.CHANNEL),
                f = null == (n = null == (e = z[h]) ? void 0 : e.permission) || n,
                k = null == (t = null == (i = z[y]) ? void 0 : i.permission) || t,
                g = Object.values(l).map((e) => ({
                    id: e.id,
                    permission: e.permission,
                    type: e.type
                }));
            w(null), P(!0);
            try {
                await p.U3({
                    defaultEveryoneValue: f,
                    defaultEverywhereValue: k,
                    applicationId: r,
                    commandId: u.id,
                    guildId: j,
                    permissions: g
                }),
                    P(!1),
                    E();
            } catch (e) {
                w(new d.Z(e));
            }
            P(!1);
        }, [r, z, u.id, u.permissions, j, N, E, I, w, P]);
    n.useEffect(
        () => () => {
            p.Ui(u.id), l.Z.stopEditingCommandPermissions(u.id);
        },
        [u.id]
    );
    let _ = (0, b.gw)(u.type, u.displayName);
    return (0, s.jsxs)(a.Y0X, {
        'aria-label': y.intl.string(y.t['N+InBQ']),
        size: a.CgR.MEDIUM,
        transitionState: g,
        children: [
            (0, s.jsxs)(a.xBx, {
                separator: !1,
                className: f.modalHeader,
                children: [
                    (0, s.jsx)(k, {
                        icon: i,
                        id: r,
                        name: t
                    }),
                    (0, s.jsxs)('div', {
                        className: f.headerDescription,
                        children: [
                            (0, s.jsx)(a.Text, {
                                variant: 'text-md/semibold',
                                children: _
                            }),
                            (0, s.jsx)(a.Text, {
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: u.displayDescription
                            })
                        ]
                    })
                ]
            }),
            (0, s.jsxs)(a.hzk, {
                className: f.modalBody,
                children: [
                    null == v || v.hasFieldErrors() ? null : (0, s.jsx)(a.kzN, { children: v.getAnyErrorMessage() }),
                    (0, s.jsx)(h.Z, {
                        applicationId: r,
                        commandId: u.id,
                        guildId: j,
                        inModal: !0,
                        originalApplicationPermissions: z,
                        originalCommandPermissions: O,
                        editedTargetPermissions: I,
                        selectedPermissionCount: R
                    })
                ]
            }),
            (0, s.jsxs)(a.mzw, {
                className: f.modalFooter,
                children: [
                    (0, s.jsx)(a.zxk, {
                        type: 'submit',
                        disabled: C,
                        onClick: D,
                        color: !0 === N ? a.zxk.Colors.GREEN : a.zxk.Colors.PRIMARY,
                        children: y.intl.string(y.t.R3BPHx)
                    }),
                    (0, s.jsx)(a.zxk, {
                        onClick: E,
                        look: a.zxk.Looks.LINK,
                        color: a.zxk.Colors.PRIMARY,
                        children: y.intl.string(y.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
function k(e) {
    let { icon: i, id: r } = e,
        n = u.ZP.getApplicationIconURL({
            id: r,
            icon: i,
            size: 40
        });
    return (0, s.jsx)(a.qEK, {
        src: n,
        size: a.EFr.SIZE_40,
        'aria-hidden': !0
    });
}
