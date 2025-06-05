o.d(i, { default: () => j }), o(388685);
var s = o(255367),
    a = o(73800),
    n = o(392711),
    r = o.n(n),
    t = o(481060),
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
    let { applicationIcon: i, applicationId: o, applicationName: n, command: u, guildId: j, onClose: E, transitionState: g } = e,
        [v, C] = a.useState(null),
        [P, w] = a.useState(!1),
        { originalApplicationPermissions: z, originalCommandPermissions: N, editedTargetPermissions: O, hasChanges: R, selectedPermissionCount: I } = (0, x.Z)(j, o, u.id),
        _ = a.useCallback(async () => {
            var e, i, s, a, n;
            if (!R) return void E();
            let t = r().difference(Object.keys(null != (s = u.permissions) ? s : {}), Object.keys(O)),
                l = r().omit(
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
                    t
                ),
                x = (0, m.bD)(j),
                h = (0, b.rE)(j, c.Kw.ROLE),
                y = (0, b.rE)(x, c.Kw.CHANNEL),
                f = null == (a = null == (e = z[h]) ? void 0 : e.permission) || a,
                k = null == (n = null == (i = z[y]) ? void 0 : i.permission) || n,
                g = Object.values(l).map((e) => ({
                    id: e.id,
                    permission: e.permission,
                    type: e.type
                }));
            C(null), w(!0);
            try {
                await p.U3({
                    defaultEveryoneValue: f,
                    defaultEverywhereValue: k,
                    applicationId: o,
                    commandId: u.id,
                    guildId: j,
                    permissions: g
                }),
                    w(!1),
                    E();
            } catch (e) {
                C(new d.Z(e));
            }
            w(!1);
        }, [o, z, u.id, u.permissions, j, R, E, O, C, w]);
    a.useEffect(
        () => () => {
            p.Ui(u.id), l.Z.stopEditingCommandPermissions(u.id);
        },
        [u.id]
    );
    let D = (0, b.gw)(u.type, u.displayName);
    return (0, s.jsxs)(t.Y0X, {
        'aria-label': y.intl.string(y.t['N+InBQ']),
        size: t.CgR.MEDIUM,
        transitionState: g,
        className: f.modalRoot,
        parentComponent: 'CommandPermissionsModal',
        children: [
            (0, s.jsxs)(t.xBx, {
                separator: !1,
                className: f.modalHeader,
                children: [
                    (0, s.jsx)(k, {
                        icon: i,
                        id: o,
                        name: n
                    }),
                    (0, s.jsxs)('div', {
                        className: f.headerDescription,
                        children: [
                            (0, s.jsx)(t.Text, {
                                variant: 'text-md/semibold',
                                children: D
                            }),
                            (0, s.jsx)(t.Text, {
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: u.displayDescription
                            })
                        ]
                    })
                ]
            }),
            (0, s.jsxs)(t.hzk, {
                className: f.modalBody,
                children: [
                    null == v || v.hasFieldErrors() ? null : (0, s.jsx)(t.kzN, { children: v.getAnyErrorMessage() }),
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
            (0, s.jsxs)(t.mzw, {
                className: f.modalFooter,
                children: [
                    (0, s.jsx)(t.zxk, {
                        type: 'submit',
                        disabled: P,
                        onClick: _,
                        color: !0 === R ? t.zxk.Colors.GREEN : t.zxk.Colors.PRIMARY,
                        children: y.intl.string(y.t.R3BPHx)
                    }),
                    (0, s.jsx)(t.zxk, {
                        onClick: E,
                        look: t.zxk.Looks.LINK,
                        color: t.zxk.Colors.PRIMARY,
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
    return (0, s.jsx)(t.qEK, {
        src: a,
        size: t.EFr.SIZE_40,
        'aria-hidden': !0
    });
}
