var i = s(582128),
    u = s(124557),
    d = s(486318);
s.d(
    c,
    {},
    {
        G: function (a) {
            let { userId: c, sku: s, location: e, trackButtonClick: n, onError: p } = a,
                { handleToggle: t, ...h } = (0, u.c)({
                    userId: c,
                    skuId: s.id,
                    nuxGraphic: (0, d.N)(s),
                    location: e,
                    onError: p,
                }),
                r = i.useCallback(async () => {
                    (n?.(), await t());
                }, [n, t]);
            return { ...h, handleToggle: r };
        },
    },
);
