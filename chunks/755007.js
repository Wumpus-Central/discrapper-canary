n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var l = n(120356),
    i = n.n(l),
    a = n(481060),
    o = n(960919),
    s = n(388032),
    c = n(820934);
function u(e) {
    let { orbAmount: t, className: n } = e;
    return (0, r.jsxs)(a.Text, {
        variant: "text-md/semibold",
        className: i()(c.orbPriceTag, n),
        children: [
            (0, r.jsx)(a.nn4, { children: s.intl.format(s.t["a/Y8PD"], { orbAmount: t }) }),
            (0, r.jsx)(o.Z, { shouldUseThemeColor: !0 }),
            (0, r.jsx)("span", {
                "aria-hidden": !0,
                children: t,
            }),
        ],
    });
}
