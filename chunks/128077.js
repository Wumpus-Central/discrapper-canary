r.d(t, { f: () => i }), r(388685);
var n = r(73800),
    a = r(751648),
    l = r(388032);
function i() {
    let [e, t] = (0, n.useState)(''),
        [r, i] = (0, n.useState)([]),
        [o, u] = (0, n.useState)(null),
        [c, s] = (0, n.useState)(!1);
    return (
        (0, n.useEffect)(() => {
            if (null != o)
                return void t(
                    l.intl.format(l.t['7gHWra'], {
                        amount: '1 orb',
                        errorMessage: o.message
                    })
                );
            if (null != r && r.length > 0) {
                let e = r.map((e) => {
                    var t;
                    return null == (t = e.sku) ? void 0 : t.name;
                });
                t(
                    l.intl.format(l.t.JxNFam, {
                        amountDescription: '1 orb',
                        redeemedItemDescription: ''
                            .concat(1 === e.length ? 'SKU' : 'SKUs', ': ')
                            .concat(e.join(', '), '. Entitlement ')
                            .concat(1 === r.length ? 'ID' : 'IDs', ': ')
                            .concat(r.map((e) => e.id).join(', '))
                    })
                );
                return;
            }
            t('');
        }, [r, o]),
        {
            entitlements: r,
            error: o,
            isSubmitting: c,
            responseMessage: e,
            redeemVirtualCurrency: function (e, t) {
                return (0, a.df)({
                    skuId: e,
                    onRedeemStart: () => {
                        s(!0), u(null);
                    },
                    onRedeemSucceed: (e) => {
                        i(e), s(!1), null == t || t(e);
                    },
                    onRedeemFail: (e) => {
                        u(e), s(!1);
                    }
                });
            }
        }
    );
}
