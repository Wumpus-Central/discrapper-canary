"use strict";
n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(990078),
    a = n(890856),
    o = n(307301),
    c = n(834730),
    u = n(931991),
    d = n(797179),
    h = n(985018),
    m = n(757718),
    p = n(508387);
function f(e) {
    let { guild: t, focused: n, onSelectItem: l, ...f } = e,
        { canCreateExpressions: g } = (0, u.nr)(t);
    return (0, i.jsx)(r.m, {
        text: h.intl.string(h.t["fHo+z1"]),
        shouldShow: !g,
        children: (0, i.jsx)("li", {
            className: m.H,
            children: (0, i.jsxs)(a.s, {
                ...f,
                "aria-label": h.intl.formatToPlainString(h.t.c1qVYh, { guildName: t.name }),
                className: s()(p.n4, { [p.in]: n, [p.r9]: !g }),
                onClick: () => (null != l ? l() : (0, d.A)(t.id)),
                children: [
                    (0, i.jsx)(o.j, { size: "sm", color: "currentColor" }),
                    (0, i.jsx)(c.E, {
                        variant: "text-xs/semibold",
                        color: g ? "currentColor" : "text-muted",
                        children: h.intl.string(h.t["8Fu/S7"]),
                    }),
                ],
            }),
        }),
    });
}
