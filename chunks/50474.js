r.d(i, { default: () => j }), r(47120);
var s = r(200651),
    o = r(192379),
    n = r(392711),
    t = r.n(n),
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
    f = r(200670);
function j(e) {
    let { applicationIcon: i, applicationId: r, applicationName: n, command: u, guildId: j, onClose: v, transitionState: E } = e,
        [g, N] = o.useState(null),
        [w, C] = o.useState(!1),
        { originalApplicationPermissions: P, originalCommandPermissions: z, editedTargetPermissions: O, hasChanges: I, selectedPermissionCount: R } = (0, x.Z)(j, r, u.id),
        D = o.useCallback(async () => {
            var e, i, s, o, n;
            if (!I) {
                v();
                return;
            }
            let a = t().difference(Object.keys(null !== (s = u.permissions) && void 0 !== s ? s : {}), Object.keys(O)),
                l = t().omit(
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
                    })({}, O),
                    a
                ),
                x = (0, m.bD)(j),
                h = (0, b.rE)(j, c.Kw.ROLE),
                y = (0, b.rE)(x, c.Kw.CHANNEL),
                f = null === (o = null === (e = P[h]) || void 0 === e ? void 0 : e.permission) || void 0 === o || o,
                k = null === (n = null === (i = P[y]) || void 0 === i ? void 0 : i.permission) || void 0 === n || n,
                E = Object.values(l).map((e) => ({
                    id: e.id,
                    permission: e.permission,
                    type: e.type
                }));
            N(null), C(!0);
            try {
                await p.U3({
                    defaultEveryoneValue: f,
                    defaultEverywhereValue: k,
                    applicationId: r,
                    commandId: u.id,
                    guildId: j,
                    permissions: E
                }),
                    C(!1),
                    v();
            } catch (e) {
                N(new d.Z(e));
            }
            C(!1);
        }, [r, P, u.id, u.permissions, j, I, v, O, N, C]);
    o.useEffect(
        () => () => {
            p.Ui(u.id), l.Z.stopEditingCommandPermissions(u.id);
        },
        [u.id]
    );
    let _ = (0, b.gw)(u.type, u.displayName);
    return (0, s.jsxs)(a.Y0X, {
        'aria-label': y.NW.string(y.t['N+InBQ']),
        size: a.CgR.MEDIUM,
        transitionState: E,
        children: [
            (0, s.jsxs)(a.xBx, {
                separator: !1,
                className: f.modalHeader,
                children: [
                    (0, s.jsx)(k, {
                        icon: i,
                        id: r,
                        name: n
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
                    null == g || g.hasFieldErrors() ? null : (0, s.jsx)(a.kzN, { children: g.getAnyErrorMessage() }),
                    (0, s.jsx)(h.Z, {
                        applicationId: r,
                        commandId: u.id,
                        guildId: j,
                        inModal: !0,
                        originalApplicationPermissions: P,
                        originalCommandPermissions: z,
                        editedTargetPermissions: O,
                        selectedPermissionCount: R
                    })
                ]
            }),
            (0, s.jsxs)(a.mzw, {
                className: f.modalFooter,
                children: [
                    (0, s.jsx)(a.zxk, {
                        type: 'submit',
                        disabled: w,
                        onClick: D,
                        color: !0 === I ? a.zxk.Colors.GREEN : a.zxk.Colors.PRIMARY,
                        children: y.NW.string(y.t.R3BPHx)
                    }),
                    (0, s.jsx)(a.zxk, {
                        onClick: v,
                        look: a.zxk.Looks.LINK,
                        color: a.zxk.Colors.PRIMARY,
                        children: y.NW.string(y.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
function k(e) {
    let { icon: i, id: r } = e,
        o = u.ZP.getApplicationIconURL({
            id: r,
            icon: i,
            size: 40
        });
    return (0, s.jsx)(a.qEK, {
        src: o,
        size: a.EFr.SIZE_40,
        'aria-hidden': !0
    });
}
