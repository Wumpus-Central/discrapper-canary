var l = n(477900),
    r = n(582128),
    i = n(503698),
    s = n.n(i),
    a = n(435558),
    o = n.n(a),
    c = n(866665),
    u = n(939249),
    d = n(194261),
    h = n(653523),
    g = n(350972),
    m = n(677056),
    x = n(236814),
    f = n(652215),
    v = n(792996),
    y = n(997328);
function A(e) {
    let {
            id: t,
            className: n,
            style: i,
            onSelect: a,
            isSelected: m = !1,
            tabIndex: A,
            children: j,
            locked: p = !1,
            disabled: N = !1,
        } = e,
        [S, b] = r.useState((0, x.gG)(t).name),
        C = t === g.Ic.PIRATE;
    return (0, l.jsx)(c.m, {
        text: S,
        onTooltipShow: () =>
            C &&
            b(
                o().sample([
                    v.intl.string(v.t["EgWTY+"]),
                    v.intl.string(v.t.umBn5f),
                    v.intl.string(v.t.dG1wD1),
                    v.intl.string(v.t.SesI4S),
                    v.intl.string(v.t.RnMLvl),
                ]) ?? v.intl.string(v.t["EgWTY+"]),
            ),
        children: (0, l.jsxs)("div", {
            className: y.Co,
            style: i,
            children: [
                (0, l.jsx)(u.D, {
                    role: "radio",
                    "aria-label": S,
                    "aria-checked": m,
                    "aria-disabled": N,
                    tabIndex: A ?? (m ? 0 : -1),
                    className: s()(y.Ni, { [y.wH]: m }, n),
                    onClick: m ? f.tEg : () => a?.(t),
                    children: j,
                }),
                m && (0, l.jsx)(h.H$, {}),
                p &&
                    (0, l.jsx)("div", {
                        className: y.RK,
                        children: (0, l.jsx)(d.LockIcon, { className: y.AA, color: "currentColor" }),
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
                    size: t = x.N8.SIZE_60,
                    icon: n,
                    isSelected: i,
                    disabled: s,
                    tabIndex: a,
                    onSelect: o,
                    locked: c,
                } = e,
                u = r.useMemo(() => ({ "--custom-in-app-icon-selection-size": `${t}px` }), [t]);
            return (0, l.jsx)(A, {
                style: u,
                onSelect: s ? void 0 : o,
                isSelected: i,
                id: n.id,
                className: s ? y.r9 : void 0,
                tabIndex: a,
                locked: c,
                disabled: s,
                children: (0, l.jsx)(m.A, { id: n.id, size: t }),
            });
        },
    },
);
