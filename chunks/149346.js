"use strict";
n.d(t, { Z: () => T, y: () => I });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(939249),
    o = n(307301),
    l = n(827734),
    u = n(834730),
    c = n(691540),
    d = n(857250),
    _ = n(97483),
    f = n(459357),
    p = n(156312),
    h = n(99696),
    E = n(580630),
    m = n(327105),
    g = n(985018),
    A = n(513857);
let I = (e) => {
        let { text: t = g.intl.string(m.default["/JKmHB"]), onClick: n, className: i } = e;
        return (0, r.jsxs)(a.D, {
            className: s()(A.U, i),
            onClick: n,
            children: [
                (0, r.jsx)(o.j, { color: l.A.colors.TEXT_BRAND }),
                (0, r.jsx)(u.E, { variant: "text-sm/medium", color: "text-brand", children: t }),
            ],
        });
    },
    T = (e) => {
        let { onComplete: t, onClose: n, text: i, className: s, initialCode: a, stackingBehavior: o } = e,
            { enabled: l } = (0, f.c)({ location: "StatefulCheckoutGiftCardRedemptionModalLink" }),
            { contextMetadata: u } = (0, p.P5)();
        return l
            ? (0, r.jsx)(I, {
                  text: i,
                  onClick: () => {
                      (0, h.HF)({
                          initialCode: a ?? "",
                          onComplete: (e) => {
                              let n = (0, E.$g)(e.amount, e.currency);
                              (0, c.P0)(
                                  (0, d.o)(
                                      g.intl.formatToPlainString(m.default["66Wi6B"], { price: n }),
                                      _.Ck.SUCCESS,
                                      { position: _.xJ.TOP },
                                  ),
                              ),
                                  t?.(e);
                          },
                          onClose: n,
                          source: "payment_modal",
                          loadId: u.loadId,
                          stackingBehavior: o,
                      });
                  },
                  className: s,
              })
            : null;
    };
