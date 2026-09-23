n.d(t, { Z: () => b, y: () => N });
var l = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    i = n(939249),
    o = n(307301),
    c = n(661531),
    d = n(834730),
    u = n(691540),
    m = n(857250),
    x = n(97483),
    j = n(459357),
    h = n(99696),
    v = n(580630),
    f = n(263532),
    p = n(693351),
    g = n(375708),
    E = n(685254);
function N(e) {
    let { text: t = g.intl.string(p.default.iBFPMf), onClick: n, className: r, analytics: s } = e;
    return (0, l.jsxs)(i.D, {
        className: a()(E.U, r),
        onClick: function () {
            (null != s && (0, h.P6)(s), n());
        },
        children: [
            (0, l.jsx)(o.j, { color: c.A.colors.TEXT_BRAND }),
            (0, l.jsx)(d.E, { variant: "text-sm/medium", color: "text-brand", children: t }),
        ],
    });
}
function b(e) {
    let { onComplete: t, onClose: n, text: s, className: a, initialCode: i, stackingBehavior: o } = e,
        { enabled: c } = (0, j.c)({ location: "StatefulCheckoutGiftCardRedemptionModalLink" }),
        d = (0, f.t4)((e) => e.contextMetadata),
        E = r.useMemo(() => ({ source: "payment_modal", loadId: d.loadId }), [d.loadId]);
    return c
        ? (0, l.jsx)(N, {
              text: s,
              onClick: function () {
                  (0, h.HF)({
                      initialCode: i ?? "",
                      onComplete: (e) => {
                          let n = (0, v.$g)(e.amount, e.currency);
                          ((0, u.P0)(
                              (0, m.o)(g.intl.formatToPlainString(p.default["66Wi6B"], { price: n }), x.Ck.SUCCESS, {
                                  position: x.xJ.TOP,
                              }),
                          ),
                              t?.(e));
                      },
                      onClose: n,
                      source: "payment_modal",
                      loadId: d.loadId,
                      stackingBehavior: o,
                  });
              },
              className: a,
              analytics: E,
          })
        : null;
}
