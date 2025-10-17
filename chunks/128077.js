n.d(t, { f: () => i }), n(388685);
var r = n(647438),
    l = n(751648),
    a = n(388032);
function i() {
    let [e, t] = (0, r.useState)(""),
        [n, i] = (0, r.useState)([]),
        [o, s] = (0, r.useState)(null),
        [c, u] = (0, r.useState)(!1);
    return (
        (0, r.useEffect)(() => {
            if (null != o)
                return void t(
                    a.intl.format(a.t["7gHWra"], {
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
                    a.intl.format(a.t.JxNFam, {
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
                return (0, l.df)({
                    skuId: e,
                    loadId: t,
                    onRedeemStart: () => {
                        u(!0), s(null);
                    },
                    onRedeemSucceed: (e) => {
                        i(e), u(!1), null == n || n(e);
                    },
                    onRedeemFail: (e) => {
                        s(e), u(!1);
                    },
                });
            },
        }
    );
}
