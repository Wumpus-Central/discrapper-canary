n.d(t, { a: () => x, d: () => h });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(732955),
    r = n(397927),
    o = n(813077),
    d = n(500380),
    c = n(518977),
    u = n(419954),
    _ = n(287809),
    g = n(780964),
    m = n(985018),
    A = n(103128);
function h() {
    let e = (0, l.bG)([_.default], () => _.default.getCurrentUser()?.storeCountry),
        t = e?.setAt != null ? m.intl.format(m.t.ZkWzXG, { date: new Date(e.setAt) }) : null,
        n = s.useCallback(() => {}, []);
    if (null == e)
        return (0, i.jsxs)("div", {
            className: A.OO,
            children: [
                (0, i.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: m.intl.string(m.t.jGL0O5),
                }),
                (0, i.jsx)(a.$nd, { variant: "secondary", size: "sm", text: m.intl.string(m.t.EeFkoB), onClick: n }),
            ],
        });
    let o = (0, c.Gw)(e.country);
    return (0, i.jsxs)("div", {
        className: A.OO,
        children: [
            (0, i.jsxs)("div", {
                className: A.wI,
                children: [
                    (0, i.jsx)("div", {
                        className: A.Gh,
                        children: (0, i.jsx)("img", { alt: "", className: A.MY, src: (0, d.t)(e.country) }),
                    }),
                    (0, i.jsxs)("div", {
                        className: A.d0,
                        children: [
                            (0, i.jsx)(r.Text, { variant: "text-md/semibold", children: o }),
                            null != t
                                ? (0, i.jsx)(r.Text, { variant: "text-sm/normal", color: "text-subtle", children: t })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(a.$nd, { variant: "secondary", size: "sm", text: m.intl.string(m.t.EeFkoB), onClick: n }),
        ],
    });
}
let p = (0, u.E2)(g.X.BILLING_STORE_COUNTRY, {
        Component: h,
        usePredicate: () => (0, o.wI)("StoreCountrySetting"),
        useSearchTerms: () => [m.intl.string(m.t["3pIjBH"])],
    }),
    x = (0, u.zZ)(g.X.BILLING_STORE_COUNTRY_CATEGORY, {
        usePredicate: () => (0, o.wI)("StoreCountrySetting"),
        useTitle: () => m.intl.string(m.t["3pIjBH"]),
        buildLayout: () => [p],
    });
