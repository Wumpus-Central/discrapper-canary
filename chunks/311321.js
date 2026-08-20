i.d(e, { A: () => p });
var l = i(477900);
i(582128);
var t = i(665260),
    s = i(661531),
    r = i(297264),
    a = i(664121),
    u = i(950305),
    d = i(652215),
    o = i(375708),
    c = i(311595);
let m = { size: "md", color: s.A.colors.INTERACTIVE_TEXT_DEFAULT };
function p(n) {
    let { subscriptions: e, color: i = "text-default" } = n,
        s = e.some((n) => (0, t.Lt)(n.skuFlags, d.d68.APPLICATION_GUILD_SUBSCRIPTION));
    return (0, l.jsx)(r.D, {
        variant: "heading-lg/semibold",
        color: i,
        className: c.R,
        children: s
            ? (0, l.jsxs)(l.Fragment, {
                  children: [(0, l.jsx)(a.R, { ...m, color: "currentColor" }), o.intl.string(o.t.XIhSoj)],
              })
            : (0, l.jsxs)(l.Fragment, {
                  children: [(0, l.jsx)(u.UserIcon, { ...m, color: "currentColor" }), o.intl.string(o.t.dxfZph)],
              }),
    });
}
