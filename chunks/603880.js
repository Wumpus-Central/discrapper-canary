var i = n(477900),
    s = n(582128),
    r = n(503698),
    l = n.n(r),
    a = n(435558),
    c = n.n(a),
    o = n(866665),
    u = n(939249),
    d = n(194261),
    m = n(653523),
    h = n(350972),
    g = n(677056),
    f = n(236814),
    p = n(652215),
    A = n(792996),
    x = n(997328);
function v(e) {
    let {
            id: t,
            className: n,
            style: r,
            onSelect: a,
            isSelected: g = !1,
            tabIndex: v,
            children: y,
            locked: S = !1,
            disabled: b = !1,
        } = e,
        [j, N] = s.useState((0, f.gG)(t).name),
        E = t === h.Ic.PIRATE;
    return (0, i.jsx)(o.m, {
        text: j,
        onTooltipShow: () =>
            E &&
            N(
                c().sample([
                    A.intl.string(A.t["EgWTY+"]),
                    A.intl.string(A.t.umBn5f),
                    A.intl.string(A.t.dG1wD1),
                    A.intl.string(A.t.SesI4S),
                    A.intl.string(A.t.RnMLvl),
                ]) ?? A.intl.string(A.t["EgWTY+"]),
            ),
        children: (0, i.jsxs)("div", {
            className: x.Co,
            style: r,
            children: [
                (0, i.jsx)(u.D, {
                    role: "radio",
                    "aria-label": j,
                    "aria-checked": g,
                    "aria-disabled": b,
                    tabIndex: v ?? (g ? 0 : -1),
                    className: l()(x.Ni, { [x.wH]: g }, n),
                    onClick: g ? p.tEg : () => a?.(t),
                    children: y,
                }),
                g && (0, i.jsx)(m.H$, {}),
                S &&
                    (0, i.jsx)("div", {
                        className: x.RK,
                        children: (0, i.jsx)(d.LockIcon, { className: x.AA, color: "currentColor" }),
                    }),
            ],
        }),
    });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    size: t = f.N8.SIZE_60,
                    icon: n,
                    isSelected: r,
                    disabled: l,
                    tabIndex: a,
                    onSelect: c,
                    locked: o,
                } = e,
                u = s.useMemo(() => ({ "--custom-in-app-icon-selection-size": `${t}px` }), [t]);
            return (0, i.jsx)(v, {
                style: u,
                onSelect: l ? void 0 : c,
                isSelected: r,
                id: n.id,
                className: l ? x.r9 : void 0,
                tabIndex: a,
                locked: o,
                disabled: l,
                children: (0, i.jsx)(g.A, { id: n.id, size: t }),
            });
        },
    },
);
