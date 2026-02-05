t.d(e, { default: () => C });
var n = t(627968),
    s = t(64700),
    r = t(735438),
    a = t.n(r),
    l = t(158954),
    d = t(311907),
    o = t(397927),
    c = t(282956),
    p = t(181658),
    m = t(155718),
    u = t(392054),
    g = t(168186),
    y = t(587895),
    x = t(696451),
    A = t(486020),
    h = t(542580),
    b = t(200662),
    E = t(825453),
    j = t(2655),
    v = t(985018);
function C(i) {
    let {
            applicationIcon: e,
            applicationId: t,
            applicationName: r,
            command: A,
            guildId: C,
            onClose: k,
            transitionState: I,
        } = i,
        [N, P] = s.useState(null),
        [R, w] = s.useState(!1),
        {
            originalApplicationPermissions: B,
            originalCommandPermissions: M,
            editedTargetPermissions: T,
            hasChanges: _,
            selectedPermissionCount: O,
        } = (0, E.A)(C, t, A.id),
        J = s.useCallback(async () => {
            if (!_) return void k();
            let i = a().difference(Object.keys(A.permissions ?? {}), Object.keys(T)),
                e = a().omit({ ...T }, i),
                n = (0, g.Ap)(C),
                s = (0, b.Eu)(C, u.RA.ROLE),
                r = (0, b.Eu)(n, u.RA.CHANNEL),
                l = B[s]?.permission ?? !0,
                d = B[r]?.permission ?? !0,
                o = Object.values(e).map((i) => ({ id: i.id, permission: i.permission, type: i.type }));
            P(null), w(!0);
            try {
                await h.Ni({
                    defaultEveryoneValue: l,
                    defaultEverywhereValue: d,
                    applicationId: t,
                    commandId: A.id,
                    guildId: C,
                    permissions: o,
                }),
                    w(!1),
                    k();
            } catch (i) {
                P(new p.A(i));
            }
            w(!1);
        }, [t, B, A.id, A.permissions, C, _, k, T, P, w]);
    s.useEffect(
        () => () => {
            h.C8(A.id), c.A.stopEditingCommandPermissions(A.id);
        },
        [A.id],
    );
    let S = (0, b.p6)(A.type, A.displayName),
        z = (0, d.bG)([y.A], () => y.A.getApplication(t)),
        L = z?.bot?.id,
        F = (0, d.bG)([x.Ay], () => (null != L ? x.Ay.getMember(C, L) : null));
    return (0, n.jsx)(l.Modal, {
        "aria-label": v.intl.string(v.t["N+InBa"]),
        transitionState: I,
        onClose: k,
        title: v.intl.string(v.t["N+InBa"]),
        preview: (0, n.jsxs)(o.BJc, {
            direction: "horizontal",
            gap: 16,
            children: [
                (0, n.jsx)(f, {
                    icon: e,
                    id: t,
                    name: r,
                    guildMember: F,
                    bot: A.type !== m.kc.PRIMARY_ENTRY_POINT ? z?.bot : void 0,
                }),
                (0, n.jsxs)(o.BJc, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, n.jsx)(o.Text, { variant: "text-md/semibold", children: S }),
                        (0, n.jsx)(o.Text, {
                            color: "text-muted",
                            variant: "text-sm/normal",
                            children: A.displayDescription,
                        }),
                    ],
                }),
            ],
        }),
        actions: [
            { text: v.intl.string(v.t["ETE/oC"]), onClick: k, variant: "secondary" },
            { text: v.intl.string(v.t["R3BPH+"]), onClick: J, variant: "primary", disabled: !_, loading: R },
        ],
        children: (0, n.jsxs)(o.BJc, {
            direction: "vertical",
            gap: 16,
            children: [
                null == N || N.hasFieldErrors()
                    ? null
                    : (0, n.jsx)(o.wx6, { type: "critical", children: N.getAnyErrorMessage() }),
                (0, n.jsx)(j.A, {
                    applicationId: t,
                    commandId: A.id,
                    guildId: C,
                    inModal: !0,
                    originalApplicationPermissions: B,
                    originalCommandPermissions: M,
                    editedTargetPermissions: T,
                    selectedPermissionCount: O,
                }),
            ],
        }),
    });
}
function f(i) {
    let { icon: e, id: t, guildMember: s, bot: r } = i,
        a = A.Ay.getApplicationIconURL({ id: t, guildMember: s, bot: r, icon: e, size: 40 });
    return (0, n.jsx)(o.euF, { src: a, size: o._3J.SIZE_40, "aria-hidden": !0 });
}
