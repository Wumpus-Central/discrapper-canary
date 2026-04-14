n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(219893),
    a = n(95396),
    o = n(221425),
    d = n(985018),
    c = n(720491);
function u(e) {
    let { closePopout: t, onEdit: n, onDelete: s } = e;
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated": !0,
        "aria-label": d.intl.string(d.t["UKOtz+"]),
        navId: "schedule-actions",
        onClose: t,
        onSelect: t,
        children: [
            (0, i.jsx)(l.Drp, { id: "edit", label: d.intl.string(o.default.b3DPqg), action: n }),
            (0, i.jsx)(l.Drp, { id: "delete", label: d.intl.string(o.default.d8pizZ), color: "danger", action: s }),
        ],
    });
}
function m(e) {
    let { rule: t, teenId: m, readOnly: g = !1 } = e,
        _ = s.useRef(null),
        x = t?.enabled ?? !0,
        h = (0, r.li)(t),
        A = (0, r.n1)(t.days),
        p = () => {
            (0, l.mMO)(async () => {
                let { default: e } = await n.e("38842").then(n.bind(n, 6241));
                return (n) => (0, i.jsx)(e, { ...n, teenId: m, rule: t });
            });
        },
        T = () => {
            (0, a.CS)(m, t.ruleId);
        };
    return (0, i.jsxs)(l.BJc, {
        direction: "horizontal",
        align: "center",
        gap: 12,
        padding: { top: 8, bottom: 8 },
        children: [
            (0, i.jsx)("div", { className: c.X, children: (0, i.jsx)(l.Zve, { size: "md" }) }),
            (0, i.jsxs)(l.BJc, {
                direction: "vertical",
                style: { flex: 1, minWidth: 0 },
                gap: 4,
                children: [
                    (0, i.jsx)(l.Text, { variant: "text-md/medium", children: h }),
                    (0, i.jsx)(l.Text, { variant: "text-sm/normal", color: "text-muted", children: A }),
                ],
            }),
            (0, i.jsxs)(l.BJc, {
                direction: "horizontal",
                align: "center",
                gap: 8,
                fullWidth: !1,
                children: [
                    !g &&
                        (0, i.jsx)(l.YNO, {
                            targetElementRef: _,
                            renderPopout: (e) => (0, i.jsx)(u, { ...e, onEdit: p, onDelete: T }),
                            position: "bottom",
                            align: "right",
                            animation: l.YNO.Animation.NONE,
                            children: (e) => {
                                let { onClick: t } = e;
                                return (0, i.jsx)(l.K0, {
                                    buttonRef: _,
                                    size: "sm",
                                    icon: l.jNK,
                                    variant: "icon-only",
                                    "aria-label": d.intl.string(d.t["UKOtz+"]),
                                    "aria-haspopup": "menu",
                                    onClick: (e) => {
                                        e.stopPropagation(), t(e);
                                    },
                                });
                            },
                        }),
                    (0, i.jsx)("div", {
                        className: c.m,
                        children: (0, i.jsx)(l.dOG, {
                            checked: x,
                            label: d.intl.string(o.default["30Owsd"]),
                            hideLabel: !0,
                            onChange: () => {
                                (0, a.Um)(m, t.ruleId, { enabled: !x });
                            },
                            hasIcon: !0,
                            disabled: g,
                        }),
                    }),
                ],
            }),
        ],
    });
}
