"use strict";
n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(990078),
    o = n(397927),
    l = n(931991),
    u = n(797179),
    c = n(985018),
    d = n(125049),
    _ = n(113112);
function f(e) {
    let { guild: t, focused: n, onSelectItem: i, ...f } = e,
        { canCreateExpressions: p } = (0, l.nr)(t);
    return (0, r.jsx)(s.m, {
        text: c.intl.string(c.t["fHo+z1"]),
        shouldShow: !p,
        children: (0, r.jsx)("li", {
            className: d.H,
            children: (0, r.jsxs)(o.sqX, {
                ...f,
                "aria-label": c.intl.formatToPlainString(c.t.c1qVYh, { guildName: t.name }),
                className: a()(_.n4, { [_.in]: n, [_.r9]: !p }),
                onClick: () => (null != i ? i() : (0, u.A)(t.id)),
                children: [
                    (0, r.jsx)(o.j96, { size: "sm", color: "currentColor" }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-xs/semibold",
                        color: p ? "currentColor" : "text-muted",
                        children: c.intl.string(c.t["8Fu/S7"]),
                    }),
                ],
            }),
        }),
    });
}
