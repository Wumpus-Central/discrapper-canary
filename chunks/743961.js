n.d(t, {
    A: () => d,
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(641324),
    a = n(112715),
    o = n(577806),
    c = n(279423);
let d = i.memo(function (e) {
    let { node: t } = e,
        {
            useTitle: n,
            useTitleTrailingIcon: i,
            useSubnavLabel: d,
            useSubtitle: u,
            layout: _,
            initialize: p,
            useNotice: m,
        } = t,
        g = null == n ? void 0 : n(),
        A = null == i ? void 0 : i(),
        f = null == u ? void 0 : u(),
        h = null == m ? void 0 : m();
    return (
        (0, a.Z)(p),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != g &&
                    (0, r.jsx)(o._, {
                        title: g,
                        titleTrailingIcon: A,
                        subtitle: f,
                    }),
                (0, r.jsx)("div", {
                    "data-settings-category-key": null != n || null != d ? t.key : void 0,
                    "aria-hidden": !0,
                    style: {
                        height: 1,
                    },
                }),
                (0, r.jsxs)(l.BJc, {
                    gap: 16,
                    children: [
                        null != h &&
                            (0, r.jsx)(c.A, {
                                notice: h,
                            }),
                        _.map((e) =>
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
        })
    );
});
