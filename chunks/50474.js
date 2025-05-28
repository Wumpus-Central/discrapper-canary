o.d(i, { default: () => j }), o(388685);
var s = o(255367),
    a = o(73800),
    r = o(392711),
    t = o.n(r),
    n = o(481060),
    l = o(139387),
    d = o(479531),
    c = o(895924),
    m = o(581364),
    u = o(768581),
    p = o(821864),
    b = o(399860),
    x = o(995390),
    h = o(665578),
    y = o(388032),
    f = o(566670);
function j(e) {
    let { applicationIcon: i, applicationId: o, applicationName: r, command: u, guildId: j, onClose: E, transitionState: g } = e,
        [v, w] = a.useState(null),
        [C, P] = a.useState(!1),
        { originalApplicationPermissions: z, originalCommandPermissions: N, editedTargetPermissions: O, hasChanges: R, selectedPermissionCount: I } = (0, x.Z)(j, o, u.id),
        _ = a.useCallback(async () => {
            var e, i, s, a, r;
            if (!R) return void E();
            let n = t().difference(Object.keys(null != (s = u.permissions) ? s : {}), Object.keys(O)),
                l = t().omit(
                    (function (e) {
                        for (var i = 1; i < arguments.length; i++) {
                            var o = null != arguments[i] ? arguments[i] : {},
                                s = Object.keys(o);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (s = s.concat(
                                    Object.getOwnPropertySymbols(o).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(o, e).enumerable;
                                    })
                                )),
                                s.forEach(function (i) {
                                    var s;
                                    (s = o[i]),
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
                    })({}, O),
                    n
                ),
                x = (0, m.bD)(j),
                h = (0, b.rE)(j, c.Kw.ROLE),
                y = (0, b.rE)(x, c.Kw.CHANNEL),
                f = null == (a = null == (e = z[h]) ? void 0 : e.permission) || a,
                k = null == (r = null == (i = z[y]) ? void 0 : i.permission) || r,
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
                    applicationId: o,
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
        }, [o, z, u.id, u.permissions, j, R, E, O, w, P]);
    a.useEffect(
        () => () => {
            p.Ui(u.id), l.Z.stopEditingCommandPermissions(u.id);
        },
        [u.id]
    );
    let D = (0, b.gw)(u.type, u.displayName);
    return (0, s.jsxs)(n.Y0X, {
        'aria-label': y.intl.string(y.t['N+InBQ']),
        size: n.CgR.MEDIUM,
        transitionState: g,
        className: f.modalRoot,
        children: [
            (0, s.jsxs)(n.xBx, {
                separator: !1,
                className: f.modalHeader,
                children: [
                    (0, s.jsx)(k, {
                        icon: i,
                        id: o,
                        name: r
                    }),
                    (0, s.jsxs)('div', {
                        className: f.headerDescription,
                        children: [
                            (0, s.jsx)(n.Text, {
                                variant: 'text-md/semibold',
                                children: D
                            }),
                            (0, s.jsx)(n.Text, {
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: u.displayDescription
                            })
                        ]
                    })
                ]
            }),
            (0, s.jsxs)(n.hzk, {
                className: f.modalBody,
                children: [
                    null == v || v.hasFieldErrors() ? null : (0, s.jsx)(n.kzN, { children: v.getAnyErrorMessage() }),
                    (0, s.jsx)(h.Z, {
                        applicationId: o,
                        commandId: u.id,
                        guildId: j,
                        inModal: !0,
                        originalApplicationPermissions: z,
                        originalCommandPermissions: N,
                        editedTargetPermissions: O,
                        selectedPermissionCount: I
                    })
                ]
            }),
            (0, s.jsxs)(n.mzw, {
                className: f.modalFooter,
                children: [
                    (0, s.jsx)(n.zxk, {
                        type: 'submit',
                        disabled: C,
                        onClick: _,
                        color: !0 === R ? n.zxk.Colors.GREEN : n.zxk.Colors.PRIMARY,
                        children: y.intl.string(y.t.R3BPHx)
                    }),
                    (0, s.jsx)(n.zxk, {
                        onClick: E,
                        look: n.zxk.Looks.LINK,
                        color: n.zxk.Colors.PRIMARY,
                        children: y.intl.string(y.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
function k(e) {
    let { icon: i, id: o } = e,
        a = u.ZP.getApplicationIconURL({
            id: o,
            icon: i,
            size: 40
        });
    return (0, s.jsx)(n.qEK, {
        src: a,
        size: n.EFr.SIZE_40,
        'aria-hidden': !0
    });
}
