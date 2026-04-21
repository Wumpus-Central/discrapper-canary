"use strict";
n.d(t, { Z: () => m, y: () => h });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(158954),
    o = n(397927),
    l = n(459357),
    u = n(156312),
    c = n(99696),
    d = n(580630),
    _ = n(327105),
    f = n(985018),
    p = n(513857);
let h = (e) => {
        let { text: t = f.intl.string(_.default["/JKmHB"]), onClick: n, className: i } = e;
        return (0, r.jsxs)(a.DUT, {
            className: s()(p.U, i),
            onClick: n,
            children: [
                (0, r.jsx)(a.j96, { color: o.LU0.colors.TEXT_BRAND }),
                (0, r.jsx)(o.Text, { variant: "text-sm/medium", color: "text-brand", children: t }),
            ],
        });
    },
    m = (e) => {
        let { onComplete: t, onClose: n, text: i, className: s, initialCode: a, stackingBehavior: p } = e,
            { enabled: m } = (0, l.c)({ location: "StatefulCheckoutGiftCardRedemptionModalLink" }),
            { contextMetadata: E } = (0, u.P5)();
        if (!m) return null;
        let g = () => {
            (0, c.HF)({
                initialCode: a ?? "",
                onComplete: (e) => {
                    let n = (0, d.$g)(e.amount, e.currency);
                    (0, o.showToast)(
                        (0, o.createToast)(
                            f.intl.formatToPlainString(_.default["66Wi6B"], { price: n }),
                            o.ToastType.SUCCESS,
                            { position: o.ToastPosition.TOP },
                        ),
                    ),
                        t?.(e);
                },
                onClose: n,
                source: "payment_modal",
                loadId: E.loadId,
                stackingBehavior: p,
            });
        };
        return (0, r.jsx)(h, { text: i, onClick: g, className: s });
    };
