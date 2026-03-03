"use strict";
n.d(t, { Z: () => p, y: () => f });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(158954),
    o = n(397927),
    l = n(99696),
    u = n(736843),
    c = n(756366),
    d = n(985018),
    _ = n(754316);
let f = (e) => {
        let { text: t = d.intl.string(c.default["/JKmHB"]), onClick: n, className: i } = e;
        return (0, r.jsxs)(a.DUT, {
            className: s()(_.U, i),
            onClick: n,
            children: [
                (0, r.jsx)(a.j96, { color: o.LU0.colors.TEXT_BRAND }),
                (0, r.jsx)(o.Text, { variant: "text-sm/medium", color: "text-brand", children: t }),
            ],
        });
    },
    p = (e) => {
        let { onComplete: t, onClose: n, text: i, className: s, initialCode: a } = e,
            { sharedCheckoutContext: o } = (0, u.jP)(),
            c = () => {
                (0, l.HF)({
                    initialCode: a ?? "",
                    onComplete: t,
                    onClose: n,
                    source: "payment_modal",
                    loadId: o.loadId,
                });
            };
        return (0, r.jsx)(f, { text: i, onClick: c, className: s });
    };
