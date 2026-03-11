n.d(t, { a: () => E, d: () => p });
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
    A = n(798572),
    m = n(985018),
    h = n(103128);
function p() {
    let e = (0, l.bG)([_.default], () => _.default.getCurrentUser()?.storeCountry),
        t = e?.setAt != null ? m.intl.format(m.t.ZkWzXG, { date: new Date(e.setAt) }) : null,
        n = s.useCallback(() => {
            (0, A.b)(e?.country ?? null);
        }, [e?.country]);
    if (null == e)
        return (0, i.jsxs)("div", {
            className: h.OO,
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
        className: h.OO,
        children: [
            (0, i.jsxs)("div", {
                className: h.wI,
                children: [
                    (0, i.jsx)("div", {
                        className: h.Gh,
                        children: (0, i.jsx)("img", { alt: "", className: h.MY, src: (0, d.t)(e.country) }),
                    }),
                    (0, i.jsxs)("div", {
                        className: h.d0,
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
let x = (0, u.E2)(g.X.BILLING_STORE_COUNTRY, {
        Component: p,
        usePredicate: () => (0, o.wI)("StoreCountrySetting"),
        useSearchTerms: () => [m.intl.string(m.t["3pIjBH"])],
    }),
    E = (0, u.zZ)(g.X.BILLING_STORE_COUNTRY_CATEGORY, {
        usePredicate: () => (0, o.wI)("StoreCountrySetting"),
        useTitle: () => m.intl.string(m.t["3pIjBH"]),
        buildLayout: () => [x],
    });
