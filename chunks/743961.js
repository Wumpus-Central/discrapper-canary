n.d(t, {
    A: () => c,
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(641324),
    a = n(577806),
    o = n(279423);
let c = i.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, useTitleTrailingIcon: i, useSubnavLabel: c, useSubtitle: d, layout: u, useInlineNotice: _ } = t,
        p = null == n ? void 0 : n(),
        m = null == i ? void 0 : i(),
        g = null == d ? void 0 : d(),
        A = null == _ ? void 0 : _();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != p &&
                (0, r.jsx)(a._, {
                    title: p,
                    titleTrailingIcon: m,
                    subtitle: g,
                }),
            (0, r.jsx)("div", {
                "data-settings-category-key": null != n || null != c ? t.key : void 0,
                "aria-hidden": !0,
                style: {
                    height: 1,
                },
            }),
            (0, r.jsxs)(l.BJc, {
                gap: 16,
                children: [
                    null != A &&
                        (0, r.jsx)(o.A, {
                            notice: A,
                        }),
                    u.map((e) =>
                        (0, r.jsx)(
                            s.A,
                            {
                                node: e,
                            },
                            e.key,
                        ),
                    ),
                ],
            }),
        ],
    });
});
