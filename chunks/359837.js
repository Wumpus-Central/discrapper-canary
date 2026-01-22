n.d(t, {
    A: () => u,
    c: () => d,
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(990078),
    a = n(397927),
    c = n(576705),
    o = n(985018);

function d(e, t, n) {
    let r = (0, l.bG)([c.A], () => !c.A.isRoleHigher(e, t, n), [e, t, n]);
    return i.useMemo(() => r && n.id === (null == t ? void 0 : t.id), [r, n, t])
        ? o.intl.string(o.t.PQylOR)
        : r
          ? o.intl.string(o.t.UGIjx9)
          : null;
}

function u(e) {
    let { className: t, tooltipText: n, width: i = 16, height: l = 16 } = e;
    return (0, r.jsx)(s.m, {
        text: n,
        children: (0, r.jsx)("div", {
            className: t,
            children: (0, r.jsx)(a.XAi, {
                size: "custom",
                color: "currentColor",
                width: i,
                height: l,
            }),
        }),
    });
}
