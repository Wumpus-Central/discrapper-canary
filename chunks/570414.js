n.d(t, { $: () => a }), n(388685), n(539854);
var r = n(74538),
    i = n(388032);
let a = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { addTaxLineItem: !0 },
        { manualLineItems: n, addTaxLineItem: a } = t,
        o = [];
    return (
        (o =
            null != n
                ? [...n]
                : e.invoiceItems.map((e) => ({
                      id: e.id,
                      label: (0, r.Gf)(e.subscriptionPlanId),
                      amount: e.amount * e.quantity,
                  }))),
        !1 !== a &&
            o.push({
                id: "tax",
                label: i.intl.string(i.t.jiRvC7),
                amount: e.tax,
            }),
        o
    );
};
