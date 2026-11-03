t.d(e, { default: () => N });
var n = t(477900),
    s = t(582128),
    a = t(435558),
    r = t.n(a),
    l = t(17928),
    o = t(189213),
    d = t(331322),
    c = t(834730),
    p = t(683071),
    m = t(97808),
    u = t(778712),
    y = t(282956),
    g = t(181658),
    b = t(155718),
    A = t(392054),
    h = t(168186),
    E = t(587895),
    j = t(696451),
    v = t(486020),
    x = t(542580),
    C = t(200662),
    f = t(825453),
    k = t(534148),
    I = t(105292);
function N(i) {
    let {
            applicationIcon: e,
            applicationId: t,
            applicationName: a,
            command: m,
            guildId: u,
            onClose: v,
            transitionState: N,
        } = i,
        [R, w] = s.useState(null),
        [B, _] = s.useState(!1),
        {
            originalApplicationPermissions: M,
            originalCommandPermissions: O,
            editedTargetPermissions: S,
            hasChanges: T,
            selectedPermissionCount: z,
        } = (0, f.A)(u, t, m.id),
        L = s.useCallback(async () => {
            if (!T) return void v();
            let i = r().difference(Object.keys(m.permissions ?? {}), Object.keys(S)),
                e = r().omit({ ...S }, i),
                n = (0, h.Ap)(u),
                s = (0, C.Eu)(u, A.RA.ROLE),
                a = (0, C.Eu)(n, A.RA.CHANNEL),
                l = M[s]?.permission ?? !0,
                o = M[a]?.permission ?? !0,
                d = Object.values(e).map((i) => ({ id: i.id, permission: i.permission, type: i.type }));
            (w(null), _(!0));
            try {
                (await x.Ni({
                    defaultEveryoneValue: l,
                    defaultEverywhereValue: o,
                    applicationId: t,
                    commandId: m.id,
                    guildId: u,
                    permissions: d,
                }),
                    _(!1),
                    v());
            } catch (i) {
                w(new g.A(i));
            }
            _(!1);
        }, [t, M, m.id, m.permissions, u, T, v, S, w, _]);
    s.useEffect(
        () => () => {
            (x.C8(m.id), y.A.stopEditingCommandPermissions(m.id));
        },
        [m.id],
    );
    let G = (0, C.p6)(m.type, m.displayName),
        H = (0, l.bG)([E.A], () => E.A.getApplication(t)),
        V = H?.bot?.id,
        Y = (0, l.bG)([j.Ay], () => (null != V ? j.Ay.getMember(u, V) : null));
    return (0, n.jsx)(o.a, {
        "aria-label": I.intl.string(I.t["N+InBa"]),
        transitionState: N,
        onClose: v,
        title: I.intl.string(I.t["N+InBa"]),
        preview: (0, n.jsxs)(d.B, {
            direction: "horizontal",
            gap: 16,
            children: [
                (0, n.jsx)(P, {
                    icon: e,
                    id: t,
                    name: a,
                    guildMember: Y,
                    bot: m.type !== b.kc.PRIMARY_ENTRY_POINT ? H?.bot : void 0,
                }),
                (0, n.jsxs)(d.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, n.jsx)(c.E, { variant: "body-md/semibold", children: G }),
                        (0, n.jsx)(c.E, {
                            color: "text-muted",
                            variant: "body-sm/normal",
                            children: m.displayDescription,
                        }),
                    ],
                }),
            ],
        }),
        actions: [
            { text: I.intl.string(I.t["ETE/oC"]), onClick: v, variant: "secondary" },
            { text: I.intl.string(I.t["R3BPH+"]), onClick: L, variant: "primary", disabled: !T, loading: B },
        ],
        children: (0, n.jsxs)(d.B, {
            direction: "vertical",
            gap: 16,
            children: [
                null == R || R.hasFieldErrors()
                    ? null
                    : (0, n.jsx)(p.w, { type: "critical", message: R.getAnyErrorMessage(), role: "alert" }),
                (0, n.jsx)(k.A, {
                    applicationId: t,
                    commandId: m.id,
                    guildId: u,
                    inModal: !0,
                    originalApplicationPermissions: M,
                    originalCommandPermissions: O,
                    editedTargetPermissions: S,
                    selectedPermissionCount: z,
                }),
            ],
        }),
    });
}
function P(i) {
    let { icon: e, id: t, guildMember: s, bot: a } = i,
        r = v.Ay.getApplicationIconURL({ id: t, guildMember: s, bot: a, icon: e, size: 40 });
    return (0, n.jsx)(m.eu, { src: r, size: u._3.SIZE_40, "aria-hidden": !0 });
}
