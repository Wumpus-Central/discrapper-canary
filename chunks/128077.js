n.d(t, { f: () => s }), n(388685);
var a = n(647438),
    r = n(751648),
    i = n(388032);
function s() {
    let [e, t] = (0, a.useState)(""),
        [n, s] = (0, a.useState)([]),
        [o, l] = (0, a.useState)(null),
        [c, d] = (0, a.useState)(!1);
    return (
        (0, a.useEffect)(() => {
            if (null != o)
                return void t(
                    i.intl.format(i.t["7gHWra"], {
                        amount: "1 orb",
                        errorMessage: o.message,
                    }),
                );
            if (null != n && n.length > 0) {
                let e = n.map((e) => {
                    var t;
                    return null == (t = e.sku) ? void 0 : t.name;
                });
                t(
                    i.intl.format(i.t.JxNFam, {
                        amountDescription: "1 orb",
                        redeemedItemDescription: ""
                            .concat(1 === e.length ? "SKU" : "SKUs", ": ")
                            .concat(e.join(", "), ". Entitlement ")
                            .concat(1 === n.length ? "ID" : "IDs", ": ")
                            .concat(n.map((e) => e.id).join(", ")),
                    }),
                );
                return;
            }
            t("");
        }, [n, o]),
        {
            entitlements: n,
            error: o,
            isSubmitting: c,
            responseMessage: e,
            redeemVirtualCurrency: function (e, t, n) {
                return (0, r.df)({
                    skuId: e,
                    loadId: t,
                    onRedeemStart: () => {
                        d(!0), l(null);
                    },
                    onRedeemSucceed: (e) => {
                        s(e), d(!1), null == n || n(e);
                    },
                    onRedeemFail: (e) => {
                        l(e), d(!1);
                    },
                });
            },
        }
    );
}
