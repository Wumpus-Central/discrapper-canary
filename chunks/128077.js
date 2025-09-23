r.d(t, { f: () => a }), r(388685);
var n = r(647438),
    l = r(751648),
    i = r(388032);
function a() {
    let [e, t] = (0, n.useState)(""),
        [r, a] = (0, n.useState)([]),
        [o, s] = (0, n.useState)(null),
        [c, u] = (0, n.useState)(!1);
    return (
        (0, n.useEffect)(() => {
            if (null != o)
                return void t(
                    i.intl.format(i.t["7gHWra"], {
                        amount: "1 orb",
                        errorMessage: o.message,
                    }),
                );
            if (null != r && r.length > 0) {
                let e = r.map((e) => {
                    var t;
                    return null == (t = e.sku) ? void 0 : t.name;
                });
                t(
                    i.intl.format(i.t.JxNFam, {
                        amountDescription: "1 orb",
                        redeemedItemDescription: ""
                            .concat(1 === e.length ? "SKU" : "SKUs", ": ")
                            .concat(e.join(", "), ". Entitlement ")
                            .concat(1 === r.length ? "ID" : "IDs", ": ")
                            .concat(r.map((e) => e.id).join(", ")),
                    }),
                );
                return;
            }
            t("");
        }, [r, o]),
        {
            entitlements: r,
            error: o,
            isSubmitting: c,
            responseMessage: e,
            redeemVirtualCurrency: function (e, t, r) {
                return (0, l.df)({
                    skuId: e,
                    loadId: t,
                    onRedeemStart: () => {
                        u(!0), s(null);
                    },
                    onRedeemSucceed: (e) => {
                        a(e), u(!1), null == r || r(e);
                    },
                    onRedeemFail: (e) => {
                        s(e), u(!1);
                    },
                });
            },
        }
    );
}
