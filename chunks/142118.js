n.d(t, { Z: () => d });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(36361),
    s = n(662097),
    l = n(598612),
    c = n(175993);
function u(e) {
    let { node: t } = e,
        { useTitle: n, layout: i, initialize: u, useNotice: d } = t,
        f = null == n ? void 0 : n(),
        p = null == d ? void 0 : d(),
        _ = null != n;
    return (
        (0, s.D)(u),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != f && (0, r.jsx)(l.Y, { title: f }),
                (0, r.jsx)("div", {
                    "data-settings-category-key": _ ? t.key : void 0,
                    "aria-hidden": !0,
                    style: { height: 1 },
                }),
                (0, r.jsxs)(a.Kqy, {
                    gap: 16,
                    children: [
                        null != p && (0, r.jsx)(c.Z, { notice: p }),
                        i.map((e) => (0, r.jsx)(o.Z, { node: e }, e.key)),
                    ],
                }),
            ],
        })
    );
}
let d = i.memo(u);
