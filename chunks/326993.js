t.d(i, {
    default: () => E,
}),
    t(896048);
var n = t(627968),
    r = t(64700),
    l = t(735438),
    s = t.n(l),
    a = t(158954),
    o = t(311907),
    d = t(397927),
    c = t(282956),
    u = t(181658),
    p = t(155718),
    m = t(392054),
    b = t(168186),
    y = t(587895),
    g = t(696451),
    v = t(486020),
    f = t(542580),
    h = t(200662),
    j = t(825453),
    x = t(2655),
    A = t(985018);

function E(e) {
    var i;
    let {
            applicationIcon: t,
            applicationId: l,
            applicationName: v,
            command: E,
            guildId: C,
            onClose: P,
            transitionState: k,
        } = e,
        [w, I] = r.useState(null),
        [N, R] = r.useState(!1),
        {
            originalApplicationPermissions: B,
            originalCommandPermissions: M,
            editedTargetPermissions: S,
            hasChanges: T,
            selectedPermissionCount: _,
        } = (0, j.A)(C, l, E.id),
        J = r.useCallback(async () => {
            var e, i, t, n, r;
            if (!T) return void P();
            let a = s().difference(Object.keys(null != (e = E.permissions) ? e : {}), Object.keys(S)),
                o = s().omit(
                    (function (e) {
                        for (var i = 1; i < arguments.length; i++) {
                            var t = null != arguments[i] ? arguments[i] : {},
                                n = Object.keys(t);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(t).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                    }),
                                )),
                                n.forEach(function (i) {
                                    var n;
                                    (n = t[i]),
                                        i in e
                                            ? Object.defineProperty(e, i, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[i] = n);
                                });
                        }
                        return e;
                    })({}, S),
                    a,
                ),
                d = (0, b.Ap)(C),
                c = (0, h.Eu)(C, m.RA.ROLE),
                p = (0, h.Eu)(d, m.RA.CHANNEL),
                y = null == (i = null == (n = B[c]) ? void 0 : n.permission) || i,
                g = null == (t = null == (r = B[p]) ? void 0 : r.permission) || t,
                v = Object.values(o).map((e) => ({
                    id: e.id,
                    permission: e.permission,
                    type: e.type,
                }));
            I(null), R(!0);
            try {
                await f.Ni({
                    defaultEveryoneValue: y,
                    defaultEverywhereValue: g,
                    applicationId: l,
                    commandId: E.id,
                    guildId: C,
                    permissions: v,
                }),
                    R(!1),
                    P();
            } catch (e) {
                I(new u.A(e));
            }
            R(!1);
        }, [l, B, E.id, E.permissions, C, T, P, S, I, R]);
    r.useEffect(
        () => () => {
            f.C8(E.id), c.A.stopEditingCommandPermissions(E.id);
        },
        [E.id],
    );
    let z = (0, h.p6)(E.type, E.displayName),
        L = (0, o.bG)([y.A], () => y.A.getApplication(l)),
        D = null == L || null == (i = L.bot) ? void 0 : i.id,
        F = (0, o.bG)([g.Ay], () => (null != D ? g.Ay.getMember(C, D) : null));
    return (0, n.jsx)(a.Modal, {
        "aria-label": A.intl.string(A.t["N+InBa"]),
        transitionState: k,
        onClose: P,
        title: A.intl.string(A.t["N+InBa"]),
        preview: (0, n.jsxs)(d.BJc, {
            direction: "horizontal",
            gap: 16,
            children: [
                (0, n.jsx)(O, {
                    icon: t,
                    id: l,
                    name: v,
                    guildMember: F,
                    bot: E.type !== p.kc.PRIMARY_ENTRY_POINT ? (null == L ? void 0 : L.bot) : void 0,
                }),
                (0, n.jsxs)(d.BJc, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, n.jsx)(d.Text, {
                            variant: "text-md/semibold",
                            children: z,
                        }),
                        (0, n.jsx)(d.Text, {
                            color: "text-muted",
                            variant: "text-sm/normal",
                            children: E.displayDescription,
                        }),
                    ],
                }),
            ],
        }),
        actions: [
            {
                text: A.intl.string(A.t["ETE/oC"]),
                onClick: P,
                variant: "secondary",
            },
            {
                text: A.intl.string(A.t["R3BPH+"]),
                onClick: J,
                variant: "primary",
                disabled: !T,
                loading: N,
            },
        ],
        children: (0, n.jsxs)(d.BJc, {
            direction: "vertical",
            gap: 16,
            children: [
                null == w || w.hasFieldErrors()
                    ? null
                    : (0, n.jsx)(d.wx6, {
                          type: "critical",
                          children: w.getAnyErrorMessage(),
                      }),
                (0, n.jsx)(x.A, {
                    applicationId: l,
                    commandId: E.id,
                    guildId: C,
                    inModal: !0,
                    originalApplicationPermissions: B,
                    originalCommandPermissions: M,
                    editedTargetPermissions: S,
                    selectedPermissionCount: _,
                }),
            ],
        }),
    });
}

function O(e) {
    let { icon: i, id: t, guildMember: r, bot: l } = e,
        s = v.Ay.getApplicationIconURL({
            id: t,
            guildMember: r,
            bot: l,
            icon: i,
            size: 40,
        });
    return (0, n.jsx)(d.euF, {
        src: s,
        size: d._3J.SIZE_40,
        "aria-hidden": !0,
    });
}
