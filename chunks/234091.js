"use strict";
n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(534514),
    c = n(834730),
    u = n(793574),
    d = n(688810),
    h = n(422936),
    m = n(234419),
    p = n(811611),
    f = n(954571),
    g = n(256449),
    _ = n(679382),
    x = n(148355),
    A = n(320061),
    C = n(823894),
    E = n(652215),
    I = n(788868),
    v = n(985018),
    y = n(456140);
function S(e) {
    let { className: t, onClose: n } = e;
    (0, g.XQ)();
    let { analyticsLocations: s } = (0, d.Ay)(u.A.EMPTY_STATE),
        S = (0, a.yK)([_.A], () => C.vX.map((e) => _.A.getStickerById(e)));
    l.useEffect(() => {
        f.default.track(E.HAw.PREMIUM_UPSELL_VIEWED, {
            type: I.e.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: E.JJy.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: s,
        });
    }, [s]);
    let b = (0, m.V)(),
        N = (0, h.O)(),
        T = null != b || null != N;
    return (0, i.jsxs)("div", {
        className: r()(y.p$, t, { [y.Hz]: T }),
        children: [
            T
                ? (0, i.jsx)(p.Ay, {
                      discountOffer: N,
                      trialOffer: b,
                      onClose: n,
                      type: I.e.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: b?.subscription_trial?.sku_id ?? I.pe.TIER_2,
                      children: v.intl.string(v.t.FnNud4),
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(o.D, {
                              className: y.wx,
                              variant: "heading-xl/semibold",
                              children: v.intl.string(v.t.HEm04J),
                          }),
                          (0, i.jsx)(c.E, {
                              className: y.VA,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: v.intl.string(v.t.FnNud4),
                          }),
                          (0, i.jsx)("div", {
                              className: y.l1,
                              children: S.filter((e) => null != e).map((e) =>
                                  (0, i.jsx)(x.A, { sticker: e, className: y.yI, size: 80 }, e?.id),
                              ),
                          }),
                      ],
                  }),
            !T && (0, i.jsx)(A.A, { analyticsSection: E.JJy.EXPRESSION_PICKER }),
        ],
    });
}
