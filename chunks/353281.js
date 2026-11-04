var n = t(477900),
    r = t(582128);
let a = (0, r.createContext)(null);
t.d(
    l,
    {},
    {
        H: function () {
            let e = (0, r.useContext)(a);
            return { navigateToStorefrontPage: e?.navigateToStorefrontPage, viewProductDetails: e?.viewProductDetails };
        },
        J: function (e) {
            let { navigateToStorefrontPage: l, viewProductDetails: t, children: i } = e,
                o = r.useMemo(() => ({ navigateToStorefrontPage: l, viewProductDetails: t }), [l, t]);
            return (0, n.jsx)(a.Provider, { value: o, children: i });
        },
    },
);
