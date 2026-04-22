t.d(n, { A: () => c });
var l = t(627968),
    r = t(64700),
    i = t(331322),
    s = t(641324),
    a = t(577806),
    o = t(279423);
let c = r.memo(function (e) {
    let { node: n } = e,
        {
            useTitle: t,
            icon: r,
            useSubnavLabel: c,
            useSubtitle: d,
            layout: u,
            useInlineNotice: x,
            useHeaderDecoration: j,
        } = n,
        h = t?.(),
        m = d?.(),
        f = x?.(),
        p = j?.(),
        y = null != t || null != c;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != h && (0, l.jsx)(a._, { title: h, icon: r, subtitle: m, decoration: p }),
            (0, l.jsx)("div", {
                "data-settings-category-key": y ? n.key : void 0,
                "aria-hidden": !0,
                style: { height: 1 },
            }),
            (0, l.jsxs)(i.B, {
                gap: "xs",
                children: [
                    null != f && (0, l.jsx)(o.A, { notice: f }),
                    u.map((e) => (0, l.jsx)(s.A, { node: e }, e.key)),
                ],
            }),
        ],
    });
});
