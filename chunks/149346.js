e.d(n, { Z: () => B, y: () => y });
var r = e(477900),
    o = e(582128),
    t = e(503698),
    l = e.n(t),
    i = e(939249),
    s = e(307301),
    d = e(661531),
    u = e(834730),
    c = e(691540),
    _ = e(857250),
    k = e(97483),
    b = e(459357),
    p = e(99696),
    h = e(580630),
    A = e(87725),
    f = e(776409),
    g = e(375708),
    m = e(766025);
function y(a) {
    let { text: n = g.intl.string(f.default.iBFPMf), onClick: e, className: o, analytics: t } = a;
    return (0, r.jsxs)(i.D, {
        className: l()(m.U, o),
        onClick: function () {
            null != t && (0, p.P6)(t), e();
        },
        children: [
            (0, r.jsx)(s.j, { color: d.A.colors.TEXT_BRAND }),
            (0, r.jsx)(u.E, { variant: "text-sm/medium", color: "text-brand", children: n }),
        ],
    });
}
function B(a) {
    let { onComplete: n, onClose: e, text: t, className: l, initialCode: i, stackingBehavior: s } = a,
        { enabled: d } = (0, b.c)({ location: "StatefulCheckoutGiftCardRedemptionModalLink" }),
        u = (0, A.t4)((a) => a.contextMetadata),
        m = o.useMemo(() => ({ source: "payment_modal", loadId: u.loadId }), [u.loadId]);
    return d
        ? (0, r.jsx)(y, {
              text: t,
              onClick: function () {
                  (0, p.HF)({
                      initialCode: i ?? "",
                      onComplete: (a) => {
                          let e = (0, h.$g)(a.amount, a.currency);
                          (0, c.P0)(
                              (0, _.o)(g.intl.formatToPlainString(f.default["66Wi6B"], { price: e }), k.Ck.SUCCESS, {
                                  position: k.xJ.TOP,
                              }),
                          ),
                              n?.(a);
                      },
                      onClose: e,
                      source: "payment_modal",
                      loadId: u.loadId,
                      stackingBehavior: s,
                  });
              },
              className: l,
              analytics: m,
          })
        : null;
}
