i.d(e, { A: () => p });
var l = i(477900);
i(582128);
var s = i(665260),
    t = i(661531),
    r = i(534514),
    a = i(664121),
    d = i(950305),
    u = i(652215),
    o = i(105292),
    c = i(311595);
let m = { size: "md", color: t.A.colors.INTERACTIVE_TEXT_DEFAULT };
function p(n) {
    let { subscriptions: e, color: i = "text-default" } = n,
        t = e.some((n) => (0, s.Lt)(n.skuFlags, u.d68.APPLICATION_GUILD_SUBSCRIPTION));
    return (0, l.jsx)(r.D, {
        variant: "heading-lg/semibold",
        color: i,
        className: c.R,
        children: t
            ? (0, l.jsxs)(l.Fragment, {
                  children: [(0, l.jsx)(a.R, { ...m, color: "currentColor" }), o.intl.string(o.t.XIhSoj)],
              })
            : (0, l.jsxs)(l.Fragment, {
                  children: [(0, l.jsx)(d.UserIcon, { ...m, color: "currentColor" }), o.intl.string(o.t.dxfZph)],
              }),
    });
}
