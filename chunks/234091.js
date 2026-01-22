n.d(t, {
    A: () => I,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(793574),
    u = n(688810),
    d = n(422936),
    f = n(234419),
    p = n(811611),
    _ = n(954571),
    h = n(256449),
    m = n(679382),
    g = n(148355),
    E = n(320061),
    b = n(823894),
    y = n(652215),
    O = n(788868),
    A = n(985018),
    v = n(48187);
let S = 80;

function I(e) {
    var t, n, a;
    let { className: I, onClose: T } = e;
    (0, h.XQ)();
    let { analyticsLocations: C } = (0, u.Ay)(c.A.EMPTY_STATE),
        N = (0, o.yK)([m.A], () => b.vX.map((e) => m.A.getStickerById(e)));
    i.useEffect(() => {
        _.default.track(y.HAw.PREMIUM_UPSELL_VIEWED, {
            type: O.e.EMPTY_STICKER_PICKER_UPSELL,
            source: {
                section: y.JJy.EMPTY_STICKER_PICKER_UPSELL,
            },
            location_stack: C,
        });
    }, [C]);
    let R = (0, f.V)(),
        w = (0, d.O)(),
        P = null != R || null != w,
        D = (null == R || null == (n = R.subscription_trial) ? void 0 : n.sku_id) === O.pe.TIER_0;
    return (0, r.jsxs)("div", {
        className: s()(v.p$, I, {
            [v.Hz]: P,
        }),
        children: [
            P
                ? (0, r.jsx)(p.Ay, {
                      discountOffer: w,
                      trialOffer: R,
                      onClose: T,
                      type: O.e.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier:
                          null != (t = null == R || null == (a = R.subscription_trial) ? void 0 : a.sku_id)
                              ? t
                              : O.pe.TIER_2,
                      children: A.intl.string(A.t.FnNud4),
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.Heading, {
                              className: v.wx,
                              variant: "heading-xl/semibold",
                              children: A.intl.string(A.t.HEm04J),
                          }),
                          (0, r.jsx)(l.Text, {
                              className: v.VA,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: A.intl.string(A.t.FnNud4),
                          }),
                          (0, r.jsx)("div", {
                              className: v.l1,
                              children: N.filter((e) => null != e).map((e) =>
                                  (0, r.jsx)(
                                      g.A,
                                      {
                                          sticker: e,
                                          className: v.yI,
                                          size: S,
                                      },
                                      null == e ? void 0 : e.id,
                                  ),
                              ),
                          }),
                      ],
                  }),
            !P &&
                (0, r.jsx)(E.A, {
                    analyticsSection: y.JJy.EXPRESSION_PICKER,
                    buttonText: P ? (D ? A.intl.string(A.t.hz78hE) : A.intl.string(A.t["Gd/XHF"])) : void 0,
                }),
        ],
    });
}
