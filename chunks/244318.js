n.d(t, { R: () => _ });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(906732),
    o = n(608579),
    s = n(683144),
    l = n(610005),
    c = n(793202),
    u = n(981631);
let d = (e) => {
        let { skuId: t, isGift: n } = e,
            {
                analyticsLocations: s,
                loadId: c,
                handleClose: d,
                handleComplete: f,
                isFetching: _,
                sku: p,
            } = (0, l.a0)({
                skuId: t,
                isGift: n,
                applicationId: u.XAJ,
            });
        return _ || null == p
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
    _ = {
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
