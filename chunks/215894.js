var l = n(582128),
    r = n(223311),
    s = n(212137),
    a = n(652215);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, r.A)(a.FYj),
                [n, i] = l.useState(null),
                o = (0, s.rX)(t, e),
                u = o?.endsAt.getTime() ?? null,
                c = l.useCallback(() => {
                    i(u);
                }, [u]);
            return { collectionSale: u !== n ? o : null, handleSaleEnd: c };
        },
    },
);
