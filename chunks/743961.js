n.d(t, { A: () => c });
var i = n(627968),
    s = n(64700),
    a = n(397927),
    l = n(641324),
    r = n(577806),
    o = n(279423);
let c = s.memo(function (e) {
    let { node: t } = e,
        {
            useTitle: n,
            icon: s,
            useSubnavLabel: c,
            useSubtitle: d,
            layout: u,
            useInlineNotice: _,
            useHeaderDecoration: m,
        } = t,
        A = n?.(),
        g = d?.(),
        h = _?.(),
        x = m?.(),
        p = null != n || null != c;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != A && (0, i.jsx)(r._, { title: A, icon: s, subtitle: g, decoration: x }),
            (0, i.jsx)("div", {
                "data-settings-category-key": p ? t.key : void 0,
                "aria-hidden": !0,
                style: { height: 1 },
            }),
            (0, i.jsxs)(a.BJc, {
                gap: "md",
                children: [
                    null != h && (0, i.jsx)(o.A, { notice: h }),
                    u.map((e) => (0, i.jsx)(l.A, { node: e }, e.key)),
                ],
            }),
        ],
    });
});
