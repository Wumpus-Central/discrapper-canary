var n = t(477900),
    s = t(582128),
    a = t(855986),
    r = t(189213),
    l = t(331322),
    d = t(834730),
    o = t(683071),
    c = t(97808),
    p = t(778712),
    u = t(282956),
    m = t(181658),
    g = t(155718),
    y = t(587895),
    b = t(696451),
    h = t(486020),
    A = t(542580),
    x = t(200662),
    C = t(825453),
    j = t(118661),
    v = t(792996);
function E(i) {
    let { icon: e, id: t, guildMember: s, bot: a } = i,
        r = h.Ay.getApplicationIconURL({ id: t, guildMember: s, bot: a, icon: e, size: 40 });
    return (0, n.jsx)(c.eu, { src: r, size: p._3.SIZE_40, "aria-hidden": !0 });
}
t.d(
    e,
    {},
    {
        default: function (i) {
            let {
                    applicationIcon: e,
                    applicationId: t,
                    applicationName: c,
                    command: p,
                    guildId: h,
                    onClose: I,
                    transitionState: P,
                } = i,
                [k, B] = s.useState(null),
                [f, w] = s.useState(!1),
                {
                    originalApplicationPermissions: _,
                    originalCommandPermissions: M,
                    editedTargetPermissions: N,
                    hasChanges: R,
                    selectedPermissionCount: S,
                } = (0, C.A)(h, t, p.id),
                T = s.useCallback(async () => {
                    if (!R) return void I();
                    (B(null), w(!0));
                    try {
                        (await A.B3({
                            applicationId: t,
                            command: p,
                            editedPermissions: N,
                            guildId: h,
                            originalApplicationPermissions: _,
                        }),
                            w(!1),
                            I());
                    } catch (i) {
                        B(new m.A(i));
                    }
                    w(!1);
                }, [t, _, p, h, R, I, N, B, w]);
            s.useEffect(
                () => () => {
                    (A.C8(p.id), u.A.stopEditingCommandPermissions(p.id));
                },
                [p.id],
            );
            let z = (0, x.p6)(p.type, p.displayName),
                D = (0, a.bG)([y.A], () => y.A.getApplication(t)),
                G = D?.bot?.id,
                Y = (0, a.bG)([b.Ay], () => (null != G ? b.Ay.getMember(h, G) : null));
            return (0, n.jsx)(r.a, {
                "aria-label": v.intl.string(v.t["N+InBa"]),
                transitionState: P,
                onClose: I,
                title: v.intl.string(v.t["N+InBa"]),
                preview: (0, n.jsxs)(l.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: 16,
                    children: [
                        (0, n.jsx)(E, {
                            icon: e,
                            id: t,
                            name: c,
                            guildMember: Y,
                            bot: p.type !== g.kc.PRIMARY_ENTRY_POINT ? D?.bot : void 0,
                        }),
                        (0, n.jsxs)(l.B, {
                            direction: "vertical",
                            gap: 4,
                            children: [
                                (0, n.jsx)(d.E, { variant: "body-md/semibold", children: z }),
                                "" !== p.displayDescription
                                    ? (0, n.jsx)(d.E, {
                                          color: "text-muted",
                                          variant: "body-sm/normal",
                                          children: p.displayDescription,
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
                actions: [
                    { text: v.intl.string(v.t["ETE/oC"]), onClick: I, variant: "secondary" },
                    { text: v.intl.string(v.t["R3BPH+"]), onClick: T, variant: "primary", disabled: !R, loading: f },
                ],
                children: (0, n.jsxs)(l.B, {
                    direction: "vertical",
                    gap: 16,
                    children: [
                        null == k || k.hasFieldErrors()
                            ? null
                            : (0, n.jsx)(o.w, { type: "critical", message: k.getAnyErrorMessage(), role: "alert" }),
                        (0, n.jsx)(j.A, {
                            applicationId: t,
                            commandId: p.id,
                            guildId: h,
                            inModal: !0,
                            originalApplicationPermissions: _,
                            originalCommandPermissions: M,
                            editedTargetPermissions: N,
                            selectedPermissionCount: S,
                        }),
                    ],
                }),
            });
        },
    },
);
