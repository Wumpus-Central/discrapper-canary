"use strict";
n.d(t, { n: () => f });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(688810),
    s = n(165823),
    o = n(777595),
    l = n(412463),
    u = n(689614),
    c = n(652215);
let d = (e) => {
        let { skuId: t, isGift: n } = e,
            {
                analyticsLocations: o,
                loadId: u,
                handleClose: d,
                handleComplete: _,
                isFetching: f,
                sku: p,
            } = (0, l.ud)({ skuId: t, isGift: n, applicationId: c.FYj });
        return f || null == p
            ? (0, r.jsx)("div", { children: (0, r.jsx)(i.y$y, { type: i.tVU.SPINNING_CIRCLE }) })
            : (0, r.jsx)(a.f5, {
                  value: o,
                  children: (0, r.jsx)(
                      s.Ay,
                      {
                          onClose: d,
                          onComplete: _,
                          transitionState: i.ip4.ENTERED,
                          loadId: u,
                          skuId: t,
                          isGift: n,
                          analyticsLocations: o,
                      },
                      `${t}-${n}-${u}`,
                  ),
              });
    },
    _ = (0, u.R)(),
    f = {
        title: "Collectibles Checkout",
        stories: [
            {
                name: "Collectibles Checkout",
                id: "collectibles-checkout",
                component: d,
                controls: {
                    skuId: { label: "SKU ID", type: "select", options: _.options, defaultValue: _.defaultValue },
                    isGift: { label: "Is Gift", type: "boolean", defaultValue: !1 },
                },
            },
            o.e,
        ],
    };
