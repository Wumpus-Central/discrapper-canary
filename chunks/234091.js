"use strict";
n.d(t, { A: () => C });
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
    p = n(954571),
    h = n(256449),
    m = n(679382),
    g = n(148355),
    E = n(320061),
    A = n(823894),
    I = n(652215),
    T = n(788868),
    y = n(985018),
    S = n(48187);
let v = 80;
function C(e) {
    let { className: t, onClose: n } = e;
    (0, h.XQ)();
    let { analyticsLocations: a } = (0, c.Ay)(u.A.EMPTY_STATE),
        C = (0, o.yK)([m.A], () => A.vX.map((e) => m.A.getStickerById(e)));
    i.useEffect(() => {
        p.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
            type: T.e.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: I.JJy.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: a,
        });
    }, [a]);
    let b = (0, _.V)(),
        N = (0, d.O)(),
        R = null != b || null != N,
        O = b?.subscription_trial?.sku_id === T.pe.TIER_0;
    return (0, r.jsxs)("div", {
        className: s()(S.p$, t, { [S.Hz]: R }),
        children: [
            R
                ? (0, r.jsx)(f.Ay, {
                      discountOffer: N,
                      trialOffer: b,
                      onClose: n,
                      type: T.e.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: b?.subscription_trial?.sku_id ?? T.pe.TIER_2,
                      children: y.intl.string(y.t.FnNud4),
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.Heading, {
                              className: S.wx,
                              variant: "heading-xl/semibold",
                              children: y.intl.string(y.t.HEm04J),
                          }),
                          (0, r.jsx)(l.Text, {
                              className: S.VA,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: y.intl.string(y.t.FnNud4),
                          }),
                          (0, r.jsx)("div", {
                              className: S.l1,
                              children: C.filter((e) => null != e).map((e) =>
                                  (0, r.jsx)(g.A, { sticker: e, className: S.yI, size: v }, e?.id),
                              ),
                          }),
                      ],
                  }),
            !R &&
                (0, r.jsx)(E.A, {
                    analyticsSection: I.JJy.EXPRESSION_PICKER,
                    buttonText: R ? (O ? y.intl.string(y.t.hz78hE) : y.intl.string(y.t["Gd/XHF"])) : void 0,
                }),
        ],
    });
}
