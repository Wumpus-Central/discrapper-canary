n.d(t, {
    A: () => d,
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(641324),
    o = n(112715),
    l = n(577806),
    c = n(279423);

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
        h = null == n ? void 0 : n(),
        m = null == i ? void 0 : i(),
        g = null == d ? void 0 : d(),
        E = null == _ ? void 0 : _(),
        b = null != n || null != u;
    return (
        (0, o.Z)(p),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != h &&
                    (0, r.jsx)(l._, {
                        title: h,
                        titleTrailingIcon: m,
                        subtitle: g,
                    }),
                (0, r.jsx)("div", {
                    "data-settings-category-key": b ? t.key : void 0,
                    "aria-hidden": !0,
                    style: {
                        height: 1,
                    },
                }),
                (0, r.jsxs)(a.BJc, {
                    gap: 16,
                    children: [
                        null != E &&
                            (0, r.jsx)(c.A, {
                                notice: E,
                            }),
                        f.map((e) =>
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
}
let d = i.memo(u);
