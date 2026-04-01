e.d(i, { A: () => o });
var t = e(627968);
e(64700);
var l = e(665260),
    s = e(397927),
    r = e(652215),
    a = e(985018),
    d = e(712980);
let u = { size: "md", color: s.LU0.colors.INTERACTIVE_TEXT_DEFAULT };
function o(n) {
    let { subscriptions: i, color: e = "text-default" } = n,
        o = i.some((n) => (0, l.Lt)(n.skuFlags, r.d68.APPLICATION_GUILD_SUBSCRIPTION));
    return (0, t.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        color: e,
        className: d.R,
        children: o
            ? (0, t.jsxs)(t.Fragment, {
                  children: [(0, t.jsx)(s.RR9, { ...u, color: "currentColor" }), a.intl.string(a.t.XIhSoj)],
              })
            : (0, t.jsxs)(t.Fragment, {
                  children: [(0, t.jsx)(s.nys, { ...u, color: "currentColor" }), a.intl.string(a.t.dxfZph)],
              }),
    });
}
