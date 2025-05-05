n.d(t, { f: () => l }), n(388685);
var i = n(73800),
    r = n(751648),
    s = n(388032);
function l() {
    let [e, t] = (0, i.useState)(''),
        [n, l] = (0, i.useState)([]),
        [a, o] = (0, i.useState)(null),
        [c, d] = (0, i.useState)(!1);
    return (
        (0, i.useEffect)(() => {
            if (null != a)
                return void t(
                    s.intl.format(s.t['7gHWra'], {
                        amount: '1 orb',
                        errorMessage: a.message
                    })
                );
            if (null != n && n.length > 0) {
                let e = n.map((e) => {
                    var t;
                    return null == (t = e.sku) ? void 0 : t.name;
                });
                t(
                    s.intl.format(s.t.JxNFam, {
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
        }, [n, a]),
        {
            entitlements: n,
            error: a,
            isSubmitting: c,
            responseMessage: e,
            redeemVirtualCurrency: function (e, t) {
                return (0, r.df)({
                    skuId: e,
                    onRedeemStart: () => {
                        d(!0), o(null);
                    },
                    onRedeemSucceed: (e) => {
                        l(e), d(!1), null == t || t(e);
                    },
                    onRedeemFail: (e) => {
                        o(e), d(!1);
                    }
                });
            }
        }
    );
}
