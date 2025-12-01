n.d(t, { R: () => p });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(906732),
    o = n(608579),
    s = n(127759),
    l = n(155992),
    c = n(3383),
    u = n(981631);
let d = (e) => {
        let { skuId: t, isGift: n } = e,
            {
                analyticsLocations: s,
                loadId: c,
                handleClose: d,
                handleComplete: f,
                isFetching: p,
                sku: _,
            } = (0, l.a0)({
                skuId: t,
                isGift: n,
                applicationId: u.XAJ,
            });
        return p || null == _
            ? (0, r.jsx)("div", { children: (0, r.jsx)(i.$jN, { type: i.RAz.SPINNING_CIRCLE }) })
            : (0, r.jsx)(a.Gt, {
                  value: s,
                  children: (0, r.jsx)(
                      o.Z,
                      {
                          onClose: d,
                          onComplete: f,
                          transitionState: i.Dvm.ENTERED,
                          loadId: c,
                          skuId: t,
                          isGift: n,
                          analyticsLocations: s,
                      },
                      "".concat(t, "-").concat(n, "-").concat(c),
                  ),
              });
    },
    f = (0, c.F)(),
    p = {
        title: "Collectibles Checkout",
        stories: [
            {
                name: "Collectibles Checkout",
                id: "collectibles-checkout",
                component: d,
                controls: {
                    skuId: {
                        label: "SKU ID",
                        type: "select",
                        options: f.options,
                        defaultValue: f.defaultValue,
                    },
                    isGift: {
                        label: "Is Gift",
                        type: "boolean",
                        defaultValue: !1,
                    },
                },
            },
            s._,
        ],
    };
