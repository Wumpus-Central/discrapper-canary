"use strict";
n.d(t, { A: () => u, c: () => c });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(990078),
    a = n(397927),
    o = n(576705),
    d = n(985018);
function c(e, t, n) {
    let i = (0, l.bG)([o.A], () => !o.A.isRoleHigher(e, t, n), [e, t, n]);
    return s.useMemo(() => i && n.id === t?.id, [i, n, t])
        ? d.intl.string(d.t.PQylOR)
        : i
          ? d.intl.string(d.t.UGIjx9)
          : null;
}
function u(e) {
    let { className: t, tooltipText: n, width: s = 16, height: l = 16 } = e;
    return (0, i.jsx)(r.m, {
        text: n,
        children: (0, i.jsx)("div", {
            className: t,
            children: (0, i.jsx)(a.XAi, { size: "custom", color: "currentColor", width: s, height: l }),
        }),
    });
}
