n.d(t, { h: () => p });
var a = n(627968);
n(64700);
var i = n(311907),
    s = n(397927),
    l = n(296555),
    r = n(83104),
    o = n(904080),
    d = n(244881),
    c = n(501068),
    u = n(922529),
    m = n(53705),
    h = n(154323),
    x = n(628917);
let p = () => {
    let e = (0, i.bG)([h.A], () => h.A.get("shop_disable_cache")),
        t = (0, i.bG)([h.A], () => h.A.get("shop_include_unpublished"));
    return (0, a.jsx)(l.B, {
        children: (0, a.jsxs)("div", {
            className: x.Lm,
            children: [
                (0, a.jsxs)("div", {
                    className: x.gf,
                    children: [
                        (0, a.jsx)(s.dOG, {
                            label: "Disable collectibles cache",
                            checked: e,
                            onChange: (e) => (0, m.L)("shop_disable_cache", e),
                        }),
                        (0, a.jsx)(s.dOG, {
                            label: "Show unpublished collectibles",
                            checked: t,
                            onChange: (e) => (0, m.L)("shop_include_unpublished", e),
                        }),
                    ],
                }),
                (0, a.jsx)(c.p, { className: x._l }),
                (0, a.jsxs)("div", {
                    className: x._l,
                    children: [
                        (0, a.jsx)(s.Heading, { variant: "heading-md/semibold", children: "Shop Overrides" }),
                        (0, a.jsx)(o.R, {}),
                        (0, a.jsx)(u.A, { className: x.yF }),
                        (0, a.jsx)(d.e, {}),
                        (0, a.jsx)(u.A, { className: x.yF }),
                        (0, a.jsx)(r.N, {}),
                        (0, a.jsx)(u.A, { className: x.yF }),
                        (0, a.jsx)(l.G, {}),
                    ],
                }),
            ],
        }),
    });
};
