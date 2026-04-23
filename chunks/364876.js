n.d(t, { _: () => S });
var l = n(627968);
n(64700);
var i = n(877624),
    r = n(311907),
    s = n(778712),
    a = n(834730),
    o = n(937008),
    u = n(807098),
    d = n(412260),
    c = n(810498),
    p = n(298305),
    m = n(985018),
    E = n(387745);
function S() {
    let e = (0, r.bG)([d.A], () => {
            let e = d.A.getMarketingComponentByType(i.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: t } = (0, o.Pv)(),
        n = (0, u.T)(e?.asset),
        S = (0, u.T)(e?.backgroundAsset),
        _ = e?.gradient,
        I =
            null != _ && null != _.colors && _.colors.length >= 2
                ? (0, c.K5)({ gradient: _.colors, angle: _.angle ?? void 0 })
                : void 0,
        P = (0, c.gc)(S);
    null != P && ((P.backgroundSize = "cover, auto"), (P.backgroundPosition = "right center, 0% 0%"));
    let A = (0, c.x)(P, I);
    return null == e || null == t
        ? null
        : (0, l.jsxs)("div", {
              className: E.qD,
              style: A,
              children: [
                  (0, l.jsx)("div", {
                      className: E.my,
                      children: (0, l.jsx)(p.A, {
                          claimableRewards: t,
                          maxRewardImageSrc: n ?? "",
                          size: s._3.SIZE_40,
                          imageScaling: 1.25,
                      }),
                  }),
                  (0, l.jsx)(a.E, {
                      variant: "text-md/medium",
                      className: E._M,
                      color: "always-white",
                      children: m.intl.string(m.t.Abiuci),
                  }),
              ],
          });
}
