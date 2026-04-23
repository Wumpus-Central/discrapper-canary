n.d(t, { A: () => u, c: () => c });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(990078),
    a = n(194261),
    o = n(576705),
    d = n(985018);
function c(e, t, n) {
    let i = (0, s.bG)([o.A], () => !o.A.isRoleHigher(e, t, n), [e, t, n]);
    return l.useMemo(() => i && n.id === t?.id, [i, n, t])
        ? d.intl.string(d.t.PQylOR)
        : i
          ? d.intl.string(d.t.UGIjx9)
          : null;
}
function u(e) {
    let { className: t, tooltipText: n, width: l = 16, height: s = 16 } = e;
    return (0, i.jsx)(r.m, {
        text: n,
        children: (0, i.jsx)("div", {
            className: t,
            children: (0, i.jsx)(a.X, { size: "custom", color: "currentColor", width: l, height: s }),
        }),
    });
}
