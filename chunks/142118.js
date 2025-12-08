n.d(t, { Z: () => u });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(36361),
    s = n(598612),
    l = n(175993);
function c(e) {
    let { node: t } = e,
        { useTitle: n, layout: c, init: u, useNotice: d } = t,
        f = null == n ? void 0 : n(),
        p = null == d ? void 0 : d(),
        _ = null != n;
    return (
        i.useEffect(() => {
            null == u || u();
        }, [u]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != f && (0, r.jsx)(s.Y, { title: f }),
                (0, r.jsx)("div", {
                    "data-settings-category-key": _ ? t.key : void 0,
                    "aria-hidden": !0,
                    style: { height: 1 },
                }),
                (0, r.jsxs)(a.Kqy, {
                    gap: 16,
                    children: [
                        null != p && (0, r.jsx)(l.Z, { notice: p }),
                        c.map((e) => (0, r.jsx)(o.Z, { node: e }, e.key)),
                    ],
                }),
            ],
        })
    );
}
let u = i.memo(c);
