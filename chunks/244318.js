n.d(t, { R: () => f });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(906732),
    o = n(608579),
    s = n(610005),
    l = n(793202),
    c = n(981631);
let u = (e) => {
        let { skuId: t, isGift: n } = e,
            {
                analyticsLocations: l,
                loadId: u,
                handleClose: d,
                handleComplete: f,
                isFetching: _,
                sku: p,
            } = (0, s.a0)({
                skuId: t,
                isGift: n,
                applicationId: c.XAJ,
            });
        return _ || null == p
            ? (0, r.jsx)("div", { children: (0, r.jsx)(i.$jN, { type: i.RAz.SPINNING_CIRCLE }) })
            : (0, r.jsx)(a.Gt, {
                  value: l,
                  children: (0, r.jsx)(
                      o.Z,
                      {
                          onClose: d,
                          onComplete: f,
                          transitionState: i.Dvm.ENTERED,
                          loadId: u,
                          skuId: t,
                          isGift: n,
                          analyticsLocations: l,
                      },
                      "".concat(t, "-").concat(n, "-").concat(u),
                  ),
              });
    },
    d = (0, l.F)(),
    f = {
        title: "Collectibles Checkout",
        stories: [
            {
                name: "Collectibles Checkout",
                id: "collectibles-checkout",
                component: u,
                controls: {
                    skuId: {
                        label: "SKU ID",
                        type: "select",
                        options: d.options,
                        defaultValue: d.defaultValue,
                    },
                    isGift: {
                        label: "Is Gift",
                        type: "boolean",
                        defaultValue: !1,
                    },
                },
            },
        ],
    };
