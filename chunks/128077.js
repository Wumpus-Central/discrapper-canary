n.d(t, { f: () => o }), n(388685);
var r = n(473749),
    i = n(751648),
    a = n(388032);
function o() {
    let [e, t] = (0, r.useState)(""),
        [n, o] = (0, r.useState)([]),
        [s, l] = (0, r.useState)(null),
        [c, u] = (0, r.useState)(!1);
    function d(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            a = () => {
                u(!0), l(null);
            },
            s = (e) => {
                o(e), u(!1), null == n || n(e);
            },
            c = (e) => {
                l(e), u(!1);
            };
        return (0, i.df)({
            skuId: e,
            loadId: t,
            onRedeemStart: a,
            onRedeemSucceed: s,
            onRedeemFail: c,
            isRental: r,
        });
    }
    return (
        (0, r.useEffect)(() => {
            if (null != s)
                return void t(
                    a.intl.format(a.t["7gHWrd"], {
                        amount: "1 orb",
                        errorMessage: s.message,
                    }),
                );
            if (null != n && n.length > 0) {
                let e = n.map((e) => {
                    var t;
                    return null == (t = e.sku) ? void 0 : t.name;
                });
                t(
                    a.intl.format(a.t.JxNFav, {
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
        }, [n, s]),
        {
            entitlements: n,
            error: s,
            isSubmitting: c,
            responseMessage: e,
            redeemVirtualCurrency: d,
        }
    );
}
