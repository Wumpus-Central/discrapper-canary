n.d(e, {
    ch: () => k.c,
    DH: () => u.DH,
    Z4: () => x,
    v7: () => d.v,
    y: () => A,
    _D: () => o._,
    I0: () => c.I,
    s7: () => M.s,
    Lo: () => l.Lo,
    me: () => r.m,
    Vm: () => i.Vm,
    ec: () => a.e,
    a6: () => u.a6,
    JW: () => u.JW,
    vW: () => L.v,
    q7: () => l.q7,
    _P: () => c._,
    f7: () => u.f7,
    oo: () => u.oo,
    jw: () => u.jw,
});
var i = n(270537),
    l = n(757284),
    r = n(895295),
    a = n(440570),
    o = n(669510),
    u = n(241989),
    d = n(6151);
n(165272);
var c = n(596034),
    s = n(477900),
    m = n(582128),
    f = n(503698),
    p = n.n(f),
    T = n(939249),
    I = n(307301),
    v = n(661531),
    D = n(834730),
    b = n(691540),
    y = n(857250),
    P = n(97483),
    E = n(459357),
    C = n(99696),
    g = n(580630),
    _ = n(206441),
    h = n(986485),
    w = n(375708),
    R = n(685254);
function A(t) {
    let { text: e = w.intl.string(h.default.iBFPMf), onClick: n, className: i, analytics: l } = t;
    return (0, s.jsxs)(T.D, {
        className: p()(R.U, i),
        onClick: function () {
            null != l && (0, C.P6)(l), n();
        },
        children: [
            (0, s.jsx)(I.j, { color: v.A.colors.TEXT_BRAND }),
            (0, s.jsx)(D.E, { variant: "text-sm/medium", color: "text-brand", children: e }),
        ],
    });
}
function x(t) {
    let { onComplete: e, onClose: n, text: i, className: l, initialCode: r, stackingBehavior: a } = t,
        { enabled: o } = (0, E.c)({ location: "StatefulCheckoutGiftCardRedemptionModalLink" }),
        u = (0, _.t4)((t) => t.contextMetadata),
        d = m.useMemo(() => ({ source: "payment_modal", loadId: u.loadId }), [u.loadId]);
    return o
        ? (0, s.jsx)(A, {
              text: i,
              onClick: function () {
                  (0, C.HF)({
                      initialCode: r ?? "",
                      onComplete: (t) => {
                          let n = (0, g.$g)(t.amount, t.currency);
                          (0, b.P0)(
                              (0, y.o)(w.intl.formatToPlainString(h.default["66Wi6B"], { price: n }), P.Ck.SUCCESS, {
                                  position: P.xJ.TOP,
                              }),
                          ),
                              e?.(t);
                      },
                      onClose: n,
                      source: "payment_modal",
                      loadId: u.loadId,
                      stackingBehavior: a,
                  });
              },
              className: l,
              analytics: d,
          })
        : null;
}
var L = n(666281),
    M = n(454666);
n(87730);
var k = n(900730);
n(451636);
