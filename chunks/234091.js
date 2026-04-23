"use strict";
n.d(t, { A: () => v });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(534514),
    u = n(834730),
    c = n(793574),
    d = n(688810),
    _ = n(422936),
    f = n(234419),
    p = n(811611),
    h = n(954571),
    E = n(256449),
    m = n(679382),
    g = n(148355),
    A = n(320061),
    I = n(823894),
    T = n(652215),
    S = n(788868),
    y = n(985018),
    N = n(83148);
function v(e) {
    let { className: t, onClose: n } = e;
    (0, E.XQ)();
    let { analyticsLocations: s } = (0, d.Ay)(c.A.EMPTY_STATE),
        v = (0, o.yK)([m.A], () => I.vX.map((e) => m.A.getStickerById(e)));
    i.useEffect(() => {
        h.default.track(T.HAw.PREMIUM_UPSELL_VIEWED, {
            type: S.e.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: T.JJy.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: s,
        });
    }, [s]);
    let C = (0, f.V)(),
        O = (0, _.O)(),
        R = null != C || null != O;
    return (0, r.jsxs)("div", {
        className: a()(N.p$, t, { [N.Hz]: R }),
        children: [
            R
                ? (0, r.jsx)(p.Ay, {
                      discountOffer: O,
                      trialOffer: C,
                      onClose: n,
                      type: S.e.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: C?.subscription_trial?.sku_id ?? S.pe.TIER_2,
                      children: y.intl.string(y.t.FnNud4),
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.D, {
                              className: N.wx,
                              variant: "heading-xl/semibold",
                              children: y.intl.string(y.t.HEm04J),
                          }),
                          (0, r.jsx)(u.E, {
                              className: N.VA,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: y.intl.string(y.t.FnNud4),
                          }),
                          (0, r.jsx)("div", {
                              className: N.l1,
                              children: v
                                  .filter((e) => null != e)
                                  .map((e) => (0, r.jsx)(g.A, { sticker: e, className: N.yI, size: 80 }, e?.id)),
                          }),
                      ],
                  }),
            !R && (0, r.jsx)(A.A, { analyticsSection: T.JJy.EXPRESSION_PICKER }),
        ],
    });
}
