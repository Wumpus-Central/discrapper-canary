a.d(t, { h: () => g });
var n = a(627968);
a(64700);
var l = a(311907),
    i = a(243721),
    s = a(534514),
    r = a(296555),
    o = a(83104),
    d = a(904080),
    c = a(244881),
    u = a(501068),
    m = a(922529),
    h = a(53705),
    p = a(154323),
    x = a(628917);
let g = () => {
    let e = (0, l.bG)([p.A], () => p.A.get("shop_disable_cache")),
        t = (0, l.bG)([p.A], () => p.A.get("shop_include_unpublished"));
    return (0, n.jsx)(r.B, {
        children: (0, n.jsxs)("div", {
            className: x.Lm,
            children: [
                (0, n.jsxs)("div", {
                    className: x.gf,
                    children: [
                        (0, n.jsx)(i.d, {
                            label: "Disable collectibles cache",
                            checked: e,
                            onChange: (e) => (0, h.L)("shop_disable_cache", e),
                        }),
                        (0, n.jsx)(i.d, {
                            label: "Show unpublished collectibles",
                            checked: t,
                            onChange: (e) => (0, h.L)("shop_include_unpublished", e),
                        }),
                    ],
                }),
                (0, n.jsx)(u.p, { className: x._l }),
                (0, n.jsxs)("div", {
                    className: x._l,
                    children: [
                        (0, n.jsx)(s.D, { variant: "heading-md/semibold", children: "Shop Overrides" }),
                        (0, n.jsx)(d.R, {}),
                        (0, n.jsx)(m.A, { className: x.yF }),
                        (0, n.jsx)(c.e, {}),
                        (0, n.jsx)(m.A, { className: x.yF }),
                        (0, n.jsx)(o.N, {}),
                        (0, n.jsx)(m.A, { className: x.yF }),
                        (0, n.jsx)(r.G, {}),
                    ],
                }),
            ],
        }),
    });
};
