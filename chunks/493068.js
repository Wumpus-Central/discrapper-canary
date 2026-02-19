n.d(t, { a: () => p, d: () => h });
var i = n(627968),
    s = n(64700),
    a = n(311907),
    l = n(732955),
    r = n(397927),
    o = n(813077),
    c = n(500380),
    d = n(518977),
    u = n(419954),
    _ = n(287809),
    m = n(780964),
    A = n(985018),
    g = n(13506);
function h() {
    let e = (0, a.bG)([_.default], () => _.default.getCurrentUser()?.storeCountry),
        t = e?.setAt != null ? A.intl.format(A.t.ZkWzXG, { date: new Date(e.setAt) }) : null,
        n = s.useCallback(() => {}, []);
    if (null == e)
        return (0, i.jsxs)("div", {
            className: g.OO,
            children: [
                (0, i.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: A.intl.string(A.t.jGL0O5),
                }),
                (0, i.jsx)(l.$nd, { variant: "secondary", size: "sm", text: A.intl.string(A.t.EeFkoB), onClick: n }),
            ],
        });
    let o = (0, d.Gw)(e.country);
    return (0, i.jsxs)("div", {
        className: g.OO,
        children: [
            (0, i.jsxs)("div", {
                className: g.wI,
                children: [
                    (0, i.jsx)("div", {
                        className: g.Gh,
                        children: (0, i.jsx)("img", { alt: "", className: g.MY, src: (0, c.t)(e.country) }),
                    }),
                    (0, i.jsxs)("div", {
                        className: g.d0,
                        children: [
                            (0, i.jsx)(r.Text, { variant: "text-md/semibold", children: o }),
                            null != t
                                ? (0, i.jsx)(r.Text, { variant: "text-sm/normal", color: "text-subtle", children: t })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(l.$nd, { variant: "secondary", size: "sm", text: A.intl.string(A.t.EeFkoB), onClick: n }),
        ],
    });
}
let x = (0, u.E2)(m.X.BILLING_STORE_COUNTRY, {
        Component: h,
        usePredicate: () => (0, o.wI)("StoreCountrySetting"),
        useSearchTerms: () => [A.intl.string(A.t["3pIjBH"])],
    }),
    p = (0, u.zZ)(m.X.BILLING_STORE_COUNTRY_CATEGORY, {
        usePredicate: () => (0, o.wI)("StoreCountrySetting"),
        useTitle: () => A.intl.string(A.t["3pIjBH"]),
        buildLayout: () => [x],
    });
