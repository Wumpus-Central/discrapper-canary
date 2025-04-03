n.d(t, { f: () => a }), n(47120);
var r = n(192379),
    i = n(751648),
    s = n(388032);
function a() {
    let [e, t] = (0, r.useState)(''),
        [n, a] = (0, r.useState)([]),
        [l, o] = (0, r.useState)(null),
        [c, d] = (0, r.useState)(!1);
    return (
        (0, r.useEffect)(() => {
            if (null != l)
                return void t(
                    s.NW.format(s.t['7gHWra'], {
                        amount: '1 orb',
                        errorMessage: l.message
                    })
                );
            if (null != n && n.length > 0) {
                let e = n.map((e) => {
                    var t;
                    return null == (t = e.sku) ? void 0 : t.name;
                });
                t(
                    s.NW.format(s.t.JxNFam, {
                        amountDescription: '1 orb',
                        redeemedItemDescription: ''
                            .concat(1 === e.length ? 'SKU' : 'SKUs', ': ')
                            .concat(e.join(', '), '. Entitlement ')
                            .concat(1 === n.length ? 'ID' : 'IDs', ': ')
                            .concat(n.map((e) => e.id).join(', '))
                    })
                );
                return;
            }
            t('');
        }, [n, l]),
        {
            entitlements: n,
            error: l,
            isSubmitting: c,
            responseMessage: e,
            redeemVirtualCurrency: function (e, t) {
                return (0, i.df)({
                    skuId: e,
                    onRedeemStart: () => {
                        d(!0), o(null);
                    },
                    onRedeemSucceed: (e) => {
                        a(e), d(!1), null == t || t(e);
                    },
                    onRedeemFail: (e) => {
                        o(e), d(!1);
                    }
                });
            }
        }
    );
}
