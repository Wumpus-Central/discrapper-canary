t.d(i, { default: () => P }), t(388685);
var n = t(54381),
    r = t(473749),
    l = t(392711),
    s = t.n(l),
    a = t(793030),
    o = t(442837),
    d = t(481060),
    c = t(139387),
    u = t(479531),
    p = t(911969),
    m = t(895924),
    y = t(581364),
    b = t(812206),
    g = t(271383),
    v = t(768581),
    f = t(821864),
    h = t(399860),
    j = t(995390),
    x = t(665578),
    E = t(388032);
function P(e) {
    var i;
    let {
            applicationIcon: t,
            applicationId: l,
            applicationName: v,
            command: P,
            guildId: O,
            onClose: C,
            transitionState: k,
        } = e,
        [I, Z] = r.useState(null),
        [M, N] = r.useState(!1),
        {
            originalApplicationPermissions: A,
            originalCommandPermissions: K,
            editedTargetPermissions: R,
            hasChanges: S,
            selectedPermissionCount: T,
        } = (0, j.Z)(O, l, P.id),
        _ = r.useCallback(async () => {
            var e, i, t, n, r;
            if (!S) return void C();
            let a = s().difference(Object.keys(null != (t = P.permissions) ? t : {}), Object.keys(R)),
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
                    })({}, R),
                    a,
                ),
                d = (0, y.bD)(O),
                c = (0, h.rE)(O, m.Kw.ROLE),
                p = (0, h.rE)(d, m.Kw.CHANNEL),
                b = null == (n = null == (e = A[c]) ? void 0 : e.permission) || n,
                g = null == (r = null == (i = A[p]) ? void 0 : i.permission) || r,
                v = Object.values(o).map((e) => ({
                    id: e.id,
                    permission: e.permission,
                    type: e.type,
                }));
            Z(null), N(!0);
            try {
                await f.U3({
                    defaultEveryoneValue: b,
                    defaultEverywhereValue: g,
                    applicationId: l,
                    commandId: P.id,
                    guildId: O,
                    permissions: v,
                }),
                    N(!1),
                    C();
            } catch (e) {
                Z(new u.Z(e));
            }
            N(!1);
        }, [l, A, P.id, P.permissions, O, S, C, R, Z, N]);
    r.useEffect(
        () => () => {
            f.Ui(P.id), c.Z.stopEditingCommandPermissions(P.id);
        },
        [P.id],
    );
    let q = (0, h.gw)(P.type, P.displayName),
        U = (0, o.e7)([b.Z], () => b.Z.getApplication(l)),
        z = null == U || null == (i = U.bot) ? void 0 : i.id,
        B = (0, o.e7)([g.ZP], () => (null != z ? g.ZP.getMember(O, z) : null));
    return (0, n.jsx)(a.Modal, {
        "aria-label": E.intl.string(E.t["N+InBa"]),
        transitionState: k,
        onClose: C,
        title: E.intl.string(E.t["N+InBa"]),
        preview: (0, n.jsxs)(d.Kqy, {
            direction: "horizontal",
            gap: 16,
            children: [
                (0, n.jsx)(w, {
                    icon: t,
                    id: l,
                    name: v,
                    guildMember: B,
                    bot: P.type !== p.yU.PRIMARY_ENTRY_POINT ? (null == U ? void 0 : U.bot) : void 0,
                }),
                (0, n.jsxs)(d.Kqy, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, n.jsx)(d.Text, {
                            variant: "text-md/semibold",
                            children: q,
                        }),
                        (0, n.jsx)(d.Text, {
                            color: "text-muted",
                            variant: "text-sm/normal",
                            children: P.displayDescription,
                        }),
                    ],
                }),
            ],
        }),
        actions: [
            {
                text: E.intl.string(E.t["ETE/oC"]),
                onClick: C,
                variant: "secondary",
            },
            {
                text: E.intl.string(E.t["R3BPH+"]),
                onClick: _,
                variant: "primary",
                disabled: !S,
                loading: M,
            },
        ],
        children: (0, n.jsxs)(d.Kqy, {
            direction: "vertical",
            gap: 16,
            children: [
                null == I || I.hasFieldErrors()
                    ? null
                    : (0, n.jsx)(d.M14, {
                          type: "critical",
                          children: I.getAnyErrorMessage(),
                      }),
                (0, n.jsx)(x.Z, {
                    applicationId: l,
                    commandId: P.id,
                    guildId: O,
                    inModal: !0,
                    originalApplicationPermissions: A,
                    originalCommandPermissions: K,
                    editedTargetPermissions: R,
                    selectedPermissionCount: T,
                }),
            ],
        }),
    });
}
function w(e) {
    let { icon: i, id: t, guildMember: r, bot: l } = e,
        s = v.ZP.getApplicationIconURL({
            id: t,
            guildMember: r,
            bot: l,
            icon: i,
            size: 40,
        });
    return (0, n.jsx)(d.qEK, {
        src: s,
        size: d.EFr.SIZE_40,
        "aria-hidden": !0,
    });
}
