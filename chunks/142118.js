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
        { useTitle: n, useSubnavLabel: i, useSubtitle: u, layout: d, initialize: f, useNotice: p } = t,
        _ = null == n ? void 0 : n(),
        m = null == u ? void 0 : u(),
        h = null == p ? void 0 : p(),
        g = null != n || null != i;
    return (
        (0, s.D)(f),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != _ &&
                    (0, r.jsx)(l.Y, {
                        title: _,
                        subtitle: m,
                    }),
                (0, r.jsx)("div", {
                    "data-settings-category-key": g ? t.key : void 0,
                    "aria-hidden": !0,
                    style: { height: 1 },
                }),
                (0, r.jsxs)(a.Kqy, {
                    gap: 16,
                    children: [
                        null != h && (0, r.jsx)(c.Z, { notice: h }),
                        d.map((e) => (0, r.jsx)(o.Z, { node: e }, e.key)),
                    ],
                }),
            ],
        })
    );
}
let d = i.memo(u);
