t.d(e, { Z: () => h, y: () => R });
var n = t(477900),
    a = t(582128),
    r = t(503698),
    d = t.n(r),
    l = t(939249),
    c = t(307301),
    i = t(661531),
    u = t(834730),
    s = t(691540),
    _ = t(857250),
    C = t(97483),
    f = t(459357),
    E = t(99696),
    m = t(580630),
    I = t(87725),
    y = t(925332),
    p = t(375708),
    D = t(685254);
function R(o) {
    let { text: e = p.intl.string(y.default.iBFPMf), onClick: t, className: a, analytics: r } = o;
    return (0, n.jsxs)(l.D, {
        className: d()(D.U, a),
        onClick: function () {
            null != r && (0, E.P6)(r), t();
        },
        children: [
            (0, n.jsx)(c.j, { color: i.A.colors.TEXT_BRAND }),
            (0, n.jsx)(u.E, { variant: "text-sm/medium", color: "text-brand", children: e }),
        ],
    });
}
function h(o) {
    let { onComplete: e, onClose: t, text: r, className: d, initialCode: l, stackingBehavior: c } = o,
        { enabled: i } = (0, f.c)({ location: "StatefulCheckoutGiftCardRedemptionModalLink" }),
        u = (0, I.t4)((o) => o.contextMetadata),
        D = a.useMemo(() => ({ source: "payment_modal", loadId: u.loadId }), [u.loadId]);
    return i
        ? (0, n.jsx)(R, {
              text: r,
              onClick: function () {
                  (0, E.HF)({
                      initialCode: l ?? "",
                      onComplete: (o) => {
                          let t = (0, m.$g)(o.amount, o.currency);
                          (0, s.P0)(
                              (0, _.o)(p.intl.formatToPlainString(y.default["66Wi6B"], { price: t }), C.Ck.SUCCESS, {
                                  position: C.xJ.TOP,
                              }),
                          ),
                              e?.(o);
                      },
                      onClose: t,
                      source: "payment_modal",
                      loadId: u.loadId,
                      stackingBehavior: c,
                  });
              },
              className: d,
              analytics: D,
          })
        : null;
}
