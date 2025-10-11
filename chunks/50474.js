t.d(i, { default: () => v }), t(388685);
var n = t(951288),
    r = t(647438),
    s = t(392711),
    l = t.n(s),
    a = t(793030),
    o = t(481060),
    c = t(139387),
    d = t(479531),
    u = t(895924),
    p = t(581364),
    m = t(768581),
    y = t(821864),
    g = t(399860),
    b = t(995390),
    f = t(665578),
    h = t(388032);
function v(e) {
    let {
            applicationIcon: i,
            applicationId: t,
            applicationName: s,
            command: m,
            guildId: v,
            onClose: x,
            transitionState: E,
        } = e,
        [w, O] = r.useState(null),
        [P, k] = r.useState(!1),
        {
            originalApplicationPermissions: C,
            originalCommandPermissions: I,
            editedTargetPermissions: K,
            hasChanges: S,
            selectedPermissionCount: Z,
        } = (0, b.Z)(v, t, m.id),
        N = r.useCallback(async () => {
            var e, i, n, r, s;
            if (!S) return void x();
            let a = l().difference(Object.keys(null != (n = m.permissions) ? n : {}), Object.keys(K)),
                o = l().omit(
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
                    })({}, K),
                    a,
                ),
                c = (0, p.bD)(v),
                b = (0, g.rE)(v, u.Kw.ROLE),
                f = (0, g.rE)(c, u.Kw.CHANNEL),
                h = null == (r = null == (e = C[b]) ? void 0 : e.permission) || r,
                j = null == (s = null == (i = C[f]) ? void 0 : i.permission) || s,
                E = Object.values(o).map((e) => ({
                    id: e.id,
                    permission: e.permission,
                    type: e.type,
                }));
            O(null), k(!0);
            try {
                await y.U3({
                    defaultEveryoneValue: h,
                    defaultEverywhereValue: j,
                    applicationId: t,
                    commandId: m.id,
                    guildId: v,
                    permissions: E,
                }),
                    k(!1),
                    x();
            } catch (e) {
                O(new d.Z(e));
            }
            k(!1);
        }, [t, C, m.id, m.permissions, v, S, x, K, O, k]);
    r.useEffect(
        () => () => {
            y.Ui(m.id), c.Z.stopEditingCommandPermissions(m.id);
        },
        [m.id],
    );
    let q = (0, g.gw)(m.type, m.displayName);
    return (0, n.jsx)(a.Modal, {
        "aria-label": h.intl.string(h.t["N+InBQ"]),
        transitionState: E,
        onClose: x,
        title: h.intl.string(h.t["N+InBQ"]),
        preview: (0, n.jsxs)(o.Kqy, {
            direction: "horizontal",
            gap: 16,
            children: [
                (0, n.jsx)(j, {
                    icon: i,
                    id: t,
                    name: s,
                }),
                (0, n.jsxs)(o.Kqy, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, n.jsx)(o.Text, {
                            variant: "text-md/semibold",
                            children: q,
                        }),
                        (0, n.jsx)(o.Text, {
                            color: "text-muted",
                            variant: "text-sm/normal",
                            children: m.displayDescription,
                        }),
                    ],
                }),
            ],
        }),
        actions: [
            {
                text: h.intl.string(h.t["ETE/oK"]),
                onClick: x,
                variant: "secondary",
            },
            {
                text: h.intl.string(h.t.R3BPHx),
                onClick: N,
                variant: "primary",
                disabled: !S,
                loading: P,
            },
        ],
        children: (0, n.jsxs)(o.Kqy, {
            direction: "vertical",
            gap: 16,
            children: [
                null == w || w.hasFieldErrors()
                    ? null
                    : (0, n.jsx)(o.M14, {
                          type: "critical",
                          children: w.getAnyErrorMessage(),
                      }),
                (0, n.jsx)(f.Z, {
                    applicationId: t,
                    commandId: m.id,
                    guildId: v,
                    inModal: !0,
                    originalApplicationPermissions: C,
                    originalCommandPermissions: I,
                    editedTargetPermissions: K,
                    selectedPermissionCount: Z,
                }),
            ],
        }),
    });
}
function j(e) {
    let { icon: i, id: t } = e,
        r = m.ZP.getApplicationIconURL({
            id: t,
            icon: i,
            size: 40,
        });
    return (0, n.jsx)(o.qEK, {
        src: r,
        size: o.EFr.SIZE_40,
        "aria-hidden": !0,
    });
}
