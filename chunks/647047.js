n.d(t, { n: () => p });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(688810),
    s = n(165823),
    o = n(777595),
    l = n(412463),
    c = n(689614),
    u = n(652215);
let d = (e) => {
        let { skuId: t, isGift: n } = e,
            {
                analyticsLocations: o,
                loadId: c,
                handleClose: d,
                handleComplete: f,
                isFetching: p,
                sku: _,
            } = (0, l.ud)({
                skuId: t,
                isGift: n,
                applicationId: u.FYj,
            });
        return p || null == _
            ? (0, r.jsx)("div", { children: (0, r.jsx)(i.y$y, { type: i.tVU.SPINNING_CIRCLE }) })
            : (0, r.jsx)(a.f5, {
                  value: o,
                  children: (0, r.jsx)(
                      s.Ay,
                      {
                          onClose: d,
                          onComplete: f,
                          transitionState: i.ip4.ENTERED,
                          loadId: c,
                          skuId: t,
                          isGift: n,
                          analyticsLocations: o,
                      },
                      "".concat(t, "-").concat(n, "-").concat(c),
                  ),
              });
    },
    f = (0, c.R)(),
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
            o.e,
        ],
    };
