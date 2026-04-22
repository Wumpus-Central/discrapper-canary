i.d(e, { A: () => p });
var t = i(627968);
i(64700);
var l = i(665260),
    s = i(827734),
    r = i(534514),
    a = i(664121),
    d = i(950305),
    u = i(652215),
    o = i(985018),
    c = i(528138);
let m = { size: "md", color: s.A.colors.INTERACTIVE_TEXT_DEFAULT };
function p(n) {
    let { subscriptions: e, color: i = "text-default" } = n,
        s = e.some((n) => (0, l.Lt)(n.skuFlags, u.d68.APPLICATION_GUILD_SUBSCRIPTION));
    return (0, t.jsx)(r.D, {
        variant: "heading-lg/semibold",
        color: i,
        className: c.R,
        children: s
            ? (0, t.jsxs)(t.Fragment, {
                  children: [(0, t.jsx)(a.R, { ...m, color: "currentColor" }), o.intl.string(o.t.XIhSoj)],
              })
            : (0, t.jsxs)(t.Fragment, {
                  children: [(0, t.jsx)(d.n, { ...m, color: "currentColor" }), o.intl.string(o.t.dxfZph)],
              }),
    });
}
