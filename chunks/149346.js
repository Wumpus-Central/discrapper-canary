n.d(t, { Z: () => A, y: () => j });
var r = n(627968),
    a = n(503698),
    s = n.n(a),
    l = n(939249),
    i = n(307301),
    c = n(661531),
    u = n(834730),
    o = n(691540),
    d = n(857250),
    m = n(97483),
    x = n(459357),
    p = n(156312),
    v = n(99696),
    h = n(580630),
    g = n(327105),
    f = n(985018),
    b = n(513857);
let j = (e) => {
        let { text: t = f.intl.string(g.default["/JKmHB"]), onClick: n, className: a } = e;
        return (0, r.jsxs)(l.D, {
            className: s()(b.U, a),
            onClick: n,
            children: [
                (0, r.jsx)(i.j, { color: c.A.colors.TEXT_BRAND }),
                (0, r.jsx)(u.E, { variant: "text-sm/medium", color: "text-brand", children: t }),
            ],
        });
    },
    A = (e) => {
        let { onComplete: t, onClose: n, text: a, className: s, initialCode: l, stackingBehavior: i } = e,
            { enabled: c } = (0, x.c)({ location: "StatefulCheckoutGiftCardRedemptionModalLink" }),
            { contextMetadata: u } = (0, p.P5)();
        return c
            ? (0, r.jsx)(j, {
                  text: a,
                  onClick: () => {
                      (0, v.HF)({
                          initialCode: l ?? "",
                          onComplete: (e) => {
                              let n = (0, h.$g)(e.amount, e.currency);
                              (0, o.P0)(
                                  (0, d.o)(
                                      f.intl.formatToPlainString(g.default["66Wi6B"], { price: n }),
                                      m.Ck.SUCCESS,
                                      { position: m.xJ.TOP },
                                  ),
                              ),
                                  t?.(e);
                          },
                          onClose: n,
                          source: "payment_modal",
                          loadId: u.loadId,
                          stackingBehavior: i,
                      });
                  },
                  className: s,
              })
            : null;
    };
