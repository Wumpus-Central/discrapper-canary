"use strict";
n.d(t, { A: () => N });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
    E = n(148355),
    g = n(320061),
    A = n(823894),
    I = n(652215),
    T = n(788868),
    S = n(985018),
    y = n(392757);
let v = 80;
function N(e) {
    let { className: t, onClose: n } = e;
    (0, h.XQ)();
    let { analyticsLocations: s } = (0, c.Ay)(u.A.EMPTY_STATE),
        N = (0, o.yK)([m.A], () => A.vX.map((e) => m.A.getStickerById(e)));
    i.useEffect(() => {
        p.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
            type: T.e.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: I.JJy.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: s,
        });
    }, [s]);
    let C = (0, _.V)(),
        R = (0, d.O)(),
        O = null != C || null != R,
        b = C?.subscription_trial?.sku_id === T.pe.TIER_0;
    return (0, r.jsxs)("div", {
        className: a()(y.p$, t, { [y.Hz]: O }),
        children: [
            O
                ? (0, r.jsx)(f.Ay, {
                      discountOffer: R,
                      trialOffer: C,
                      onClose: n,
                      type: T.e.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: C?.subscription_trial?.sku_id ?? T.pe.TIER_2,
                      children: S.intl.string(S.t.FnNud4),
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.Heading, {
                              className: y.wx,
                              variant: "heading-xl/semibold",
                              children: S.intl.string(S.t.HEm04J),
                          }),
                          (0, r.jsx)(l.Text, {
                              className: y.VA,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: S.intl.string(S.t.FnNud4),
                          }),
                          (0, r.jsx)("div", {
                              className: y.l1,
                              children: N.filter((e) => null != e).map((e) =>
                                  (0, r.jsx)(E.A, { sticker: e, className: y.yI, size: v }, e?.id),
                              ),
                          }),
                      ],
                  }),
            !O &&
                (0, r.jsx)(g.A, {
                    analyticsSection: I.JJy.EXPRESSION_PICKER,
                    buttonText: O ? (b ? S.intl.string(S.t.hz78hE) : S.intl.string(S.t["Gd/XHF"])) : void 0,
                }),
        ],
    });
}
