n.d(t, {
    f: function () {
        return o;
    }
}),
    n(47120);
var i = n(192379),
    r = n(442837),
    s = n(751648),
    a = n(479766),
    l = n(388032);
function o() {
    let [e, t] = (0, i.useState)(''),
        {
            entitlements: n,
            error: o,
            isSubmitting: c
        } = (0, r.cj)([a.Z], () => {
            var e;
            return {
                entitlements: null !== (e = a.Z.entitlements) && void 0 !== e ? e : [],
                error: a.Z.redeemError,
                isSubmitting: a.Z.isRedeeming
            };
        });
    return (
        (0, i.useEffect)(() => {
            if (null != o) {
                t(
                    l.intl.format(l.t['7gHWra'], {
                        amount: '1 orb',
                        errorMessage: o.message
                    })
                );
                return;
            }
            if (null != n && n.length > 0) {
                let e = n.map((e) => {
                    var t;
                    return null === (t = e.sku) || void 0 === t ? void 0 : t.name;
                });
                t(
                    l.intl.format(l.t.JxNFam, {
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
        }, [n, o]),
        {
            entitlements: n,
            error: o,
            isSubmitting: c,
            responseMessage: e,
            redeemVirtualCurrency: function (e) {
                return (0, s.d)(e);
            }
        }
    );
}
