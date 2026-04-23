l.d(t, { A: () => N });
var n = l(627968),
    i = l(64700),
    s = l(861672),
    a = l(477782),
    r = l(192308),
    d = l(331322),
    c = l(943255),
    u = l(834730),
    o = l(265872),
    x = l(408278),
    h = l(365199),
    m = l(243721),
    g = l(219893),
    j = l(95396),
    A = l(602339),
    v = l(985018),
    f = l(624411);
function E(e) {
    let { closePopout: t, onEdit: l, onDelete: i } = e;
    return (0, n.jsxs)(s.W, {
        "data-menu-migrated": !0,
        "aria-label": v.intl.string(v.t["UKOtz+"]),
        navId: "schedule-actions",
        onClose: t,
        onSelect: t,
        children: [
            (0, n.jsx)(a.Dr, { id: "edit", label: v.intl.string(A.default.b3DPqg), action: l }),
            (0, n.jsx)(a.Dr, { id: "delete", label: v.intl.string(A.default.d8pizZ), color: "danger", action: i }),
        ],
    });
}
function N(e) {
    let { rule: t, teenId: s, readOnly: a = !1 } = e,
        N = i.useRef(null),
        p = t?.enabled ?? !0,
        T = (0, g.li)(t),
        S = (0, g.n1)(t.days),
        y = () => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await l.e("38842").then(l.bind(l, 6241));
                return (l) => (0, n.jsx)(e, { ...l, teenId: s, rule: t });
            });
        },
        C = () => {
            (0, j.CS)(s, t.ruleId);
        };
    return (0, n.jsxs)(d.B, {
        direction: "horizontal",
        align: "center",
        gap: 12,
        padding: { top: 8, bottom: 8 },
        children: [
            (0, n.jsx)("div", { className: f.X, children: (0, n.jsx)(c.Z, { size: "md" }) }),
            (0, n.jsxs)(d.B, {
                direction: "vertical",
                style: { flex: 1, minWidth: 0 },
                gap: 4,
                children: [
                    (0, n.jsx)(u.E, { variant: "text-md/medium", children: T }),
                    (0, n.jsx)(u.E, { variant: "text-sm/normal", color: "text-muted", children: S }),
                ],
            }),
            (0, n.jsxs)(d.B, {
                direction: "horizontal",
                align: "center",
                gap: 8,
                fullWidth: !1,
                children: [
                    !a &&
                        (0, n.jsx)(o.Y, {
                            targetElementRef: N,
                            renderPopout: (e) => (0, n.jsx)(E, { ...e, onEdit: y, onDelete: C }),
                            position: "bottom",
                            align: "right",
                            animation: o.Y.Animation.NONE,
                            children: (e) => {
                                let { onClick: t } = e;
                                return (0, n.jsx)(x.K, {
                                    buttonRef: N,
                                    size: "sm",
                                    icon: h.j,
                                    variant: "icon-only",
                                    "aria-label": v.intl.string(v.t["UKOtz+"]),
                                    "aria-haspopup": "menu",
                                    onClick: (e) => {
                                        e.stopPropagation(), t(e);
                                    },
                                });
                            },
                        }),
                    (0, n.jsx)("div", {
                        className: f.m,
                        children: (0, n.jsx)(m.d, {
                            checked: p,
                            label: v.intl.string(A.default["30Owsd"]),
                            hideLabel: !0,
                            onChange: () => {
                                (0, j.Um)(s, t.ruleId, { enabled: !p });
                            },
                            hasIcon: !0,
                            disabled: a,
                        }),
                    }),
                ],
            }),
        ],
    });
}
