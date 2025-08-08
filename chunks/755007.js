n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var l = n(120356),
    a = n.n(l),
    i = n(481060),
    o = n(960919),
    s = n(388032),
    c = n(595392);
function u(e) {
    let { orbAmount: t, className: n } = e;
    return (0, r.jsxs)(i.Text, {
        variant: "text-md/semibold",
        className: a()(c.orbPriceTag, n),
        children: [
            (0, r.jsx)(i.nn4, { children: s.intl.format(s.t["a/Y8PD"], { orbAmount: t }) }),
            (0, r.jsx)(o.Z, { shouldUseThemeColor: !0 }),
            (0, r.jsx)("span", {
                "aria-hidden": !0,
                children: t,
            }),
        ],
    });
}
