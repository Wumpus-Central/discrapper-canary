"use strict";
n.d(t, { Z: () => S, y: () => T });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(939249),
    l = n(307301),
    u = n(661531),
    c = n(834730),
    d = n(691540),
    _ = n(857250),
    h = n(97483),
    f = n(459357),
    p = n(99696),
    E = n(580630),
    m = n(211159),
    g = n(743292),
    A = n(375708),
    I = n(884033);
function T(e) {
    let { text: t = A.intl.string(g.default.iBFPMf), onClick: n, className: r, analytics: s } = e;
    return (0, i.jsxs)(o.D, {
        className: a()(I.U, r),
        onClick: () => {
            null != s && (0, p.P6)(s), n();
        },
        children: [
            (0, i.jsx)(l.j, { color: u.A.colors.TEXT_BRAND }),
            (0, i.jsx)(c.E, { variant: "text-sm/medium", color: "text-brand", children: t }),
        ],
    });
}
function S(e) {
    let { onComplete: t, onClose: n, text: s, className: a, initialCode: o, stackingBehavior: l } = e,
        { enabled: u } = (0, f.c)({ location: "StatefulCheckoutGiftCardRedemptionModalLink" }),
        c = (0, m.t4)((e) => e.contextMetadata),
        I = r.useMemo(() => ({ source: "payment_modal", loadId: c.loadId }), [c.loadId]);
    return u
        ? (0, i.jsx)(T, {
              text: s,
              onClick: function () {
                  (0, p.HF)({
                      initialCode: o ?? "",
                      onComplete: (e) => {
                          let n = (0, E.$g)(e.amount, e.currency);
                          (0, d.P0)(
                              (0, _.o)(A.intl.formatToPlainString(g.default["66Wi6B"], { price: n }), h.Ck.SUCCESS, {
                                  position: h.xJ.TOP,
                              }),
                          ),
                              t?.(e);
                      },
                      onClose: n,
                      source: "payment_modal",
                      loadId: c.loadId,
                      stackingBehavior: l,
                  });
              },
              className: a,
              analytics: I,
          })
        : null;
}
