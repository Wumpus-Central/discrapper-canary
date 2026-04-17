"use strict";
n.d(t, { Z: () => h, y: () => p });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(158954),
    o = n(397927),
    l = n(459357),
    u = n(156312),
    c = n(99696),
    d = n(327105),
    _ = n(985018),
    f = n(513857);
let p = (e) => {
        let { text: t = _.intl.string(d.default["/JKmHB"]), onClick: n, className: i } = e;
        return (0, r.jsxs)(a.DUT, {
            className: s()(f.U, i),
            onClick: n,
            children: [
                (0, r.jsx)(a.j96, { color: o.LU0.colors.TEXT_BRAND }),
                (0, r.jsx)(o.Text, { variant: "text-sm/medium", color: "text-brand", children: t }),
            ],
        });
    },
    h = (e) => {
        let { onComplete: t, onClose: n, text: i, className: s, initialCode: a, stackingBehavior: o } = e,
            { enabled: d } = (0, l.c)({ location: "StatefulCheckoutGiftCardRedemptionModalLink" }),
            { contextMetadata: _ } = (0, u.P5)();
        if (!d) return null;
        let f = () => {
            (0, c.HF)({
                initialCode: a ?? "",
                onComplete: t,
                onClose: n,
                source: "payment_modal",
                loadId: _.loadId,
                stackingBehavior: o,
            });
        };
        return (0, r.jsx)(p, { text: i, onClick: f, className: s });
    };
