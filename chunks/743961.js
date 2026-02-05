n.d(t, { A: () => c });
var i = n(627968),
    s = n(64700),
    r = n(397927),
    a = n(641324),
    l = n(577806),
    o = n(279423);
let c = s.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, useTitleTrailingIcon: s, useSubnavLabel: c, useSubtitle: d, layout: u, useInlineNotice: _ } = t,
        m = n?.(),
        A = s?.(),
        g = d?.(),
        E = _?.(),
        h = null != n || null != c;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != m && (0, i.jsx)(l._, { title: m, titleTrailingIcon: A, subtitle: g }),
            (0, i.jsx)("div", {
                "data-settings-category-key": h ? t.key : void 0,
                "aria-hidden": !0,
                style: { height: 1 },
            }),
            (0, i.jsxs)(r.BJc, {
                gap: "md",
                children: [
                    null != E && (0, i.jsx)(o.A, { notice: E }),
                    u.map((e) => (0, i.jsx)(a.A, { node: e }, e.key)),
                ],
            }),
        ],
    });
});
