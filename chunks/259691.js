l.d(t, { A: () => x });
var n = l(477900),
    a = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(939249),
    u = l(256905),
    o = l(666476),
    d = l(989145),
    c = l(932111),
    f = l(161431),
    m = l(407653),
    g = l(248675),
    h = l(105292),
    p = l(587041);
function x(e) {
    let { attachmentId: t } = e,
        l = a.useContext(c.Fu),
        r = (0, f.Od)(l, t),
        x = r?.name ?? h.intl.string(g.default.ff9Q4C),
        v = (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(m.A, { projectId: l, file: r, className: p.xn }), x] });
    if (null == l || null == r || !o.XB.has(r.content_type))
        return (0, n.jsx)("span", { className: p.Pq, children: v });
    let b = async () => {
        let e;
        try {
            e = await (0, d.PK)(l, r.id);
        } catch {
            return;
        }
        (0, u.R)({
            items: [{ type: "IMAGE", url: e, alt: r.name }],
            startingIndex: 0,
            shouldHideMediaOptions: !0,
            location: "ConjureChat",
        });
    };
    return (0, n.jsx)(s.D, {
        tag: "span",
        className: i()(p.Pq, p.Td),
        onClick: b,
        "aria-label": h.intl.formatToPlainString(g.default.GtNukg, { name: r.name }),
        children: v,
    });
}
