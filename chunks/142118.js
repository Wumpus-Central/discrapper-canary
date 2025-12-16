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
        {
            useTitle: n,
            useTitleTrailingIcon: i,
            useSubnavLabel: u,
            useSubtitle: d,
            layout: f,
            initialize: p,
            useNotice: _,
        } = t,
        m = null == n ? void 0 : n(),
        h = null == i ? void 0 : i(),
        g = null == d ? void 0 : d(),
        E = null == _ ? void 0 : _(),
        b = null != n || null != u;
    return (
        (0, s.D)(p),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != m &&
                    (0, r.jsx)(l.Y, {
                        title: m,
                        titleTrailingIcon: h,
                        subtitle: g,
                    }),
                (0, r.jsx)("div", {
                    "data-settings-category-key": b ? t.key : void 0,
                    "aria-hidden": !0,
                    style: { height: 1 },
                }),
                (0, r.jsxs)(a.Kqy, {
                    gap: 16,
                    children: [
                        null != E && (0, r.jsx)(c.Z, { notice: E }),
                        f.map((e) => (0, r.jsx)(o.Z, { node: e }, e.key)),
                    ],
                }),
            ],
        })
    );
}
let d = i.memo(u);
