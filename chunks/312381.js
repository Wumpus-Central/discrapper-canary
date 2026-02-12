"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    a = n(317097),
    s = n(311907),
    o = n(397927),
    l = n(775602),
    u = n(985018),
    c = n(441581);
function d(e) {
    let { primaryColor: t } = e,
        n = (0, s.bG)([l.A], () => l.A.desaturateUserColors),
        d = i.useMemo(() => (null != t ? { backgroundColor: (0, a.$k)(t, n) } : void 0), [t, n]);
    return (0, r.jsxs)("div", {
        className: c.v,
        style: d,
        children: [
            (0, r.jsx)(o.XAi, { size: "sm", color: "currentColor" }),
            (0, r.jsx)(o.Text, { variant: "text-sm/semibold", children: u.intl.string(u.t.KPnd2O) }),
        ],
    });
}
