"use strict";
n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(990078),
    o = n(890856),
    l = n(307301),
    u = n(834730),
    c = n(931991),
    d = n(797179),
    _ = n(985018),
    f = n(757718),
    p = n(508387);
function h(e) {
    let { guild: t, focused: n, onSelectItem: i, ...h } = e,
        { canCreateExpressions: E } = (0, c.nr)(t);
    return (0, r.jsx)(a.m, {
        text: _.intl.string(_.t["fHo+z1"]),
        shouldShow: !E,
        children: (0, r.jsx)("li", {
            className: f.H,
            children: (0, r.jsxs)(o.s, {
                ...h,
                "aria-label": _.intl.formatToPlainString(_.t.c1qVYh, { guildName: t.name }),
                className: s()(p.n4, { [p.in]: n, [p.r9]: !E }),
                onClick: () => (null != i ? i() : (0, d.A)(t.id)),
                children: [
                    (0, r.jsx)(l.j, { size: "sm", color: "currentColor" }),
                    (0, r.jsx)(u.E, {
                        variant: "text-xs/semibold",
                        color: E ? "currentColor" : "text-muted",
                        children: _.intl.string(_.t["8Fu/S7"]),
                    }),
                ],
            }),
        }),
    });
}
