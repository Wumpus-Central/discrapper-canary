n.d(t, { Z: () => A, y: () => v });
var a = n(627968),
    r = n(503698),
    l = n.n(r),
    i = n(939249),
    s = n(307301),
    o = n(661531),
    c = n(834730),
    d = n(691540),
    u = n(857250),
    p = n(97483),
    _ = n(459357),
    m = n(156312),
    b = n(99696),
    f = n(580630),
    g = n(327105),
    h = n(985018),
    x = n(513857);
let v = (e) => {
        let { text: t = h.intl.string(g.default["/JKmHB"]), onClick: n, className: r } = e;
        return (0, a.jsxs)(i.D, {
            className: l()(x.U, r),
            onClick: n,
            children: [
                (0, a.jsx)(s.j, { color: o.A.colors.TEXT_BRAND }),
                (0, a.jsx)(c.E, { variant: "text-sm/medium", color: "text-brand", children: t }),
            ],
        });
    },
    A = (e) => {
        let { onComplete: t, onClose: n, text: r, className: l, initialCode: i, stackingBehavior: s } = e,
            { enabled: o } = (0, _.c)({ location: "StatefulCheckoutGiftCardRedemptionModalLink" }),
            { contextMetadata: c } = (0, m.P5)();
        return o
            ? (0, a.jsx)(v, {
                  text: r,
                  onClick: () => {
                      (0, b.HF)({
                          initialCode: i ?? "",
                          onComplete: (e) => {
                              let n = (0, f.$g)(e.amount, e.currency);
                              (0, d.P0)(
                                  (0, u.o)(
                                      h.intl.formatToPlainString(g.default["66Wi6B"], { price: n }),
                                      p.Ck.SUCCESS,
                                      { position: p.xJ.TOP },
                                  ),
                              ),
                                  t?.(e);
                          },
                          onClose: n,
                          source: "payment_modal",
                          loadId: c.loadId,
                          stackingBehavior: s,
                      });
                  },
                  className: l,
              })
            : null;
    };
