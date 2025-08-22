n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(960919),
    l = n(388032),
    c = n(820934);
function u(e) {
    let { orbAmount: t, className: n } = e;
    return (0, r.jsxs)(o.Text, {
        variant: "text-md/semibold",
        className: a()(c.orbPriceTag, n),
        children: [
            (0, r.jsx)(o.nn4, { children: l.intl.format(l.t["a/Y8PD"], { orbAmount: t }) }),
            (0, r.jsx)(s.Z, { shouldUseThemeColor: !0 }),
            (0, r.jsx)("span", {
                "aria-hidden": !0,
                children: t,
            }),
        ],
    });
}
