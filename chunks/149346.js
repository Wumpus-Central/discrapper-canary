n.d(t, { Z: () => I, y: () => h });
var a = n(627968),
    r = n(503698),
    l = n.n(r),
    i = n(939249),
    s = n(307301),
    o = n(827734),
    u = n(834730),
    c = n(691540),
    d = n(857250),
    m = n(97483),
    p = n(459357),
    _ = n(156312),
    f = n(99696),
    g = n(580630),
    b = n(327105),
    v = n(985018),
    x = n(513857);
let h = (e) => {
        let { text: t = v.intl.string(b.default["/JKmHB"]), onClick: n, className: r } = e;
        return (0, a.jsxs)(i.D, {
            className: l()(x.U, r),
            onClick: n,
            children: [
                (0, a.jsx)(s.j, { color: o.A.colors.TEXT_BRAND }),
                (0, a.jsx)(u.E, { variant: "text-sm/medium", color: "text-brand", children: t }),
            ],
        });
    },
    I = (e) => {
        let { onComplete: t, onClose: n, text: r, className: l, initialCode: i, stackingBehavior: s } = e,
            { enabled: o } = (0, p.c)({ location: "StatefulCheckoutGiftCardRedemptionModalLink" }),
            { contextMetadata: u } = (0, _.P5)();
        return o
            ? (0, a.jsx)(h, {
                  text: r,
                  onClick: () => {
                      (0, f.HF)({
                          initialCode: i ?? "",
                          onComplete: (e) => {
                              let n = (0, g.$g)(e.amount, e.currency);
                              (0, c.P0)(
                                  (0, d.o)(
                                      v.intl.formatToPlainString(b.default["66Wi6B"], { price: n }),
                                      m.Ck.SUCCESS,
                                      { position: m.xJ.TOP },
                                  ),
                              ),
                                  t?.(e);
                          },
                          onClose: n,
                          source: "payment_modal",
                          loadId: u.loadId,
                          stackingBehavior: s,
                      });
                  },
                  className: l,
              })
            : null;
    };
