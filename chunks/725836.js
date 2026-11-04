var r = n(477900),
    l = n(582128),
    u = n(333007);
let [a, o] = (0, n(786300).A)();
n.d(
    t,
    {},
    {
        I6: function () {
            let e = l.useContext(a);
            return null == e ? null : e.checkoutFooterLineItemNode;
        },
        UY: function (e) {
            let { children: t } = e,
                { checkoutHeaderElementNode: n } = o();
            return null == n ? null : u.createPortal(t, n);
        },
        bx: function (e) {
            let { children: t } = e,
                { checkoutFooterContentNode: n } = o();
            return null == n ? null : u.createPortal(t, n);
        },
        ck: o,
        e0: function (e) {
            let { children: t } = e,
                [n, u] = l.useState(null),
                [o, i] = l.useState(null),
                [c, d] = l.useState(null),
                s = l.useMemo(
                    () => ({
                        setCheckoutFooterContentNode: u,
                        checkoutFooterContentNode: n,
                        checkoutHeaderElementNode: o,
                        setCheckoutHeaderElementNode: i,
                        checkoutFooterLineItemNode: c,
                        setCheckoutFooterLineItemNode: d,
                    }),
                    [n, u, o, i, c, d],
                );
            return (0, r.jsx)(a.Provider, { value: s, children: t });
        },
        gw: function (e) {
            let { children: t } = e,
                { checkoutFooterLineItemNode: n } = o();
            return null == n ? null : u.createPortal(t, n);
        },
    },
);
