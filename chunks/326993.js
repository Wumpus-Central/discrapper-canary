t.d(e, { default: () => N });
var n = t(627968),
    s = t(64700),
    r = t(735438),
    a = t.n(r),
    l = t(189213),
    d = t(17928),
    o = t(331322),
    c = t(834730),
    p = t(683071),
    m = t(97808),
    u = t(778712),
    g = t(282956),
    y = t(181658),
    A = t(155718),
    h = t(392054),
    b = t(168186),
    E = t(587895),
    x = t(696451),
    j = t(486020),
    v = t(542580),
    C = t(200662),
    f = t(825453),
    k = t(534148),
    I = t(985018);
function N(i) {
    let {
            applicationIcon: e,
            applicationId: t,
            applicationName: r,
            command: m,
            guildId: u,
            onClose: j,
            transitionState: N,
        } = i,
        [R, w] = s.useState(null),
        [B, M] = s.useState(!1),
        {
            originalApplicationPermissions: _,
            originalCommandPermissions: O,
            editedTargetPermissions: S,
            hasChanges: T,
            selectedPermissionCount: z,
        } = (0, f.A)(u, t, m.id),
        L = s.useCallback(async () => {
            if (!T) return void j();
            let i = a().difference(Object.keys(m.permissions ?? {}), Object.keys(S)),
                e = a().omit({ ...S }, i),
                n = (0, b.Ap)(u),
                s = (0, C.Eu)(u, h.RA.ROLE),
                r = (0, C.Eu)(n, h.RA.CHANNEL),
                l = _[s]?.permission ?? !0,
                d = _[r]?.permission ?? !0,
                o = Object.values(e).map((i) => ({ id: i.id, permission: i.permission, type: i.type }));
            w(null), M(!0);
            try {
                await v.Ni({
                    defaultEveryoneValue: l,
                    defaultEverywhereValue: d,
                    applicationId: t,
                    commandId: m.id,
                    guildId: u,
                    permissions: o,
                }),
                    M(!1),
                    j();
            } catch (i) {
                w(new y.A(i));
            }
            M(!1);
        }, [t, _, m.id, m.permissions, u, T, j, S, w, M]);
    s.useEffect(
        () => () => {
            v.C8(m.id), g.A.stopEditingCommandPermissions(m.id);
        },
        [m.id],
    );
    let G = (0, C.p6)(m.type, m.displayName),
        H = (0, d.bG)([E.A], () => E.A.getApplication(t)),
        V = H?.bot?.id,
        Y = (0, d.bG)([x.Ay], () => (null != V ? x.Ay.getMember(u, V) : null));
    return (0, n.jsx)(l.Modal, {
        "aria-label": I.intl.string(I.t["N+InBa"]),
        transitionState: N,
        onClose: j,
        title: I.intl.string(I.t["N+InBa"]),
        preview: (0, n.jsxs)(o.B, {
            direction: "horizontal",
            gap: 16,
            children: [
                (0, n.jsx)(P, {
                    icon: e,
                    id: t,
                    name: r,
                    guildMember: Y,
                    bot: m.type !== A.kc.PRIMARY_ENTRY_POINT ? H?.bot : void 0,
                }),
                (0, n.jsxs)(o.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, n.jsx)(c.E, { variant: "text-md/semibold", children: G }),
                        (0, n.jsx)(c.E, {
                            color: "text-muted",
                            variant: "text-sm/normal",
                            children: m.displayDescription,
                        }),
                    ],
                }),
            ],
        }),
        actions: [
            { text: I.intl.string(I.t["ETE/oC"]), onClick: j, variant: "secondary" },
            { text: I.intl.string(I.t["R3BPH+"]), onClick: L, variant: "primary", disabled: !T, loading: B },
        ],
        children: (0, n.jsxs)(o.B, {
            direction: "vertical",
            gap: 16,
            children: [
                null == R || R.hasFieldErrors()
                    ? null
                    : (0, n.jsx)(p.w, { type: "critical", children: R.getAnyErrorMessage() }),
                (0, n.jsx)(k.A, {
                    applicationId: t,
                    commandId: m.id,
                    guildId: u,
                    inModal: !0,
                    originalApplicationPermissions: _,
                    originalCommandPermissions: O,
                    editedTargetPermissions: S,
                    selectedPermissionCount: z,
                }),
            ],
        }),
    });
}
function P(i) {
    let { icon: e, id: t, guildMember: s, bot: r } = i,
        a = j.Ay.getApplicationIconURL({ id: t, guildMember: s, bot: r, icon: e, size: 40 });
    return (0, n.jsx)(m.eu, { src: a, size: u._3.SIZE_40, "aria-hidden": !0 });
}
