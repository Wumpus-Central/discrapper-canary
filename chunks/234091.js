"use strict";
n.d(t, { A: () => b });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    u = n(793574),
    c = n(688810),
    d = n(422936),
    _ = n(234419),
    f = n(811611),
    h = n(954571),
    p = n(256449),
    g = n(679382),
    E = n(148355),
    A = n(320061),
    I = n(823894),
    T = n(652215),
    y = n(788868),
    S = n(985018),
    v = n(48187);
let C = 80;
function b(e) {
    let { className: t, onClose: n } = e;
    (0, p.XQ)();
    let { analyticsLocations: a } = (0, c.Ay)(u.A.EMPTY_STATE),
        b = (0, o.yK)([g.A], () => I.vX.map((e) => g.A.getStickerById(e)));
    i.useEffect(() => {
        h.default.track(T.HAw.PREMIUM_UPSELL_VIEWED, {
            type: y.e.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: T.JJy.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: a,
        });
    }, [a]);
    let N = (0, _.V)(),
        R = (0, d.O)(),
        O = null != N || null != R,
        D = N?.subscription_trial?.sku_id === y.pe.TIER_0;
    return (0, r.jsxs)("div", {
        className: s()(v.p$, t, { [v.Hz]: O }),
        children: [
            O
                ? (0, r.jsx)(f.Ay, {
                      discountOffer: R,
                      trialOffer: N,
                      onClose: n,
                      type: y.e.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: N?.subscription_trial?.sku_id ?? y.pe.TIER_2,
                      children: S.intl.string(S.t.FnNud4),
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.Heading, {
                              className: v.wx,
                              variant: "heading-xl/semibold",
                              children: S.intl.string(S.t.HEm04J),
                          }),
                          (0, r.jsx)(l.Text, {
                              className: v.VA,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: S.intl.string(S.t.FnNud4),
                          }),
                          (0, r.jsx)("div", {
                              className: v.l1,
                              children: b
                                  .filter((e) => null != e)
                                  .map((e) => (0, r.jsx)(E.A, { sticker: e, className: v.yI, size: C }, e?.id)),
                          }),
                      ],
                  }),
            !O &&
                (0, r.jsx)(A.A, {
                    analyticsSection: T.JJy.EXPRESSION_PICKER,
                    buttonText: O ? (D ? S.intl.string(S.t.hz78hE) : S.intl.string(S.t["Gd/XHF"])) : void 0,
                }),
        ],
    });
}
