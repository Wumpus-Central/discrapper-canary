s.d(i, { default: () => j }), s(47120);
var a = s(200651),
    o = s(192379),
    n = s(392711),
    r = s.n(n),
    l = s(481060),
    d = s(139387),
    t = s(479531),
    c = s(895924),
    m = s(581364),
    p = s(768581),
    u = s(821864),
    x = s(399860),
    h = s(995390),
    b = s(665578),
    k = s(388032),
    E = s(219689);
function j(e) {
    let { applicationIcon: i, applicationId: s, applicationName: n, command: p, guildId: j, onClose: v, transitionState: g } = e,
        [C, f] = o.useState(null),
        [z, I] = o.useState(!1),
        { originalApplicationPermissions: N, originalCommandPermissions: w, editedTargetPermissions: P, hasChanges: R, selectedPermissionCount: _ } = (0, h.Z)(j, s, p.id),
        A = o.useCallback(async () => {
            var e, i, a, o, n;
            if (!R) {
                v();
                return;
            }
            let l = r().difference(Object.keys(null !== (a = p.permissions) && void 0 !== a ? a : {}), Object.keys(P)),
                d = r().omit({ ...P }, l),
                h = (0, m.bD)(j),
                b = (0, x.rE)(j, c.Kw.ROLE),
                k = (0, x.rE)(h, c.Kw.CHANNEL),
                E = null === (o = null === (e = N[b]) || void 0 === e ? void 0 : e.permission) || void 0 === o || o,
                y = null === (n = null === (i = N[k]) || void 0 === i ? void 0 : i.permission) || void 0 === n || n,
                g = Object.values(d).map((e) => ({
                    id: e.id,
                    permission: e.permission,
                    type: e.type
                }));
            f(null), I(!0);
            try {
                await u.U3({
                    defaultEveryoneValue: E,
                    defaultEverywhereValue: y,
                    applicationId: s,
                    commandId: p.id,
                    guildId: j,
                    permissions: g
                }),
                    I(!1),
                    v();
            } catch (e) {
                f(new t.Z(e));
            }
            I(!1);
        }, [s, N, p.id, p.permissions, j, R, v, P, f, I]);
    o.useEffect(
        () => () => {
            u.Ui(p.id), d.Z.stopEditingCommandPermissions(p.id);
        },
        [p.id]
    );
    let B = (0, x.gw)(p.type, p.displayName);
    return (0, a.jsxs)(l.Y0X, {
        'aria-label': k.intl.string(k.t['N+InBQ']),
        size: l.CgR.MEDIUM,
        transitionState: g,
        children: [
            (0, a.jsxs)(l.xBx, {
                separator: !1,
                className: E.modalHeader,
                children: [
                    (0, a.jsx)(y, {
                        icon: i,
                        id: s,
                        name: n
                    }),
                    (0, a.jsxs)('div', {
                        className: E.headerDescription,
                        children: [
                            (0, a.jsx)(l.Text, {
                                variant: 'text-md/semibold',
                                children: B
                            }),
                            (0, a.jsx)(l.Text, {
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: p.displayDescription
                            })
                        ]
                    })
                ]
            }),
            (0, a.jsxs)(l.hzk, {
                className: E.modalBody,
                children: [
                    null == C || C.hasFieldErrors() ? null : (0, a.jsx)(l.kzN, { children: C.getAnyErrorMessage() }),
                    (0, a.jsx)(b.Z, {
                        applicationId: s,
                        commandId: p.id,
                        guildId: j,
                        inModal: !0,
                        originalApplicationPermissions: N,
                        originalCommandPermissions: w,
                        editedTargetPermissions: P,
                        selectedPermissionCount: _
                    })
                ]
            }),
            (0, a.jsxs)(l.mzw, {
                className: E.modalFooter,
                children: [
                    (0, a.jsx)(l.zxk, {
                        type: 'submit',
                        disabled: z,
                        onClick: A,
                        color: !0 === R ? l.zxk.Colors.GREEN : l.zxk.Colors.PRIMARY,
                        children: k.intl.string(k.t.R3BPHx)
                    }),
                    (0, a.jsx)(l.zxk, {
                        onClick: v,
                        look: l.zxk.Looks.LINK,
                        color: l.zxk.Colors.PRIMARY,
                        children: k.intl.string(k.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
function y(e) {
    let { icon: i, id: s } = e,
        o = p.ZP.getApplicationIconURL({
            id: s,
            icon: i,
            size: 40
        });
    return (0, a.jsx)(l.qEK, {
        src: o,
        size: l.EFr.SIZE_40,
        'aria-hidden': !0
    });
}
