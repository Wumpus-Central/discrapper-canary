t.d(n, { _: () => E });
var l = t(627968);
t(64700);
var i = t(877624),
    r = t(311907),
    s = t(397927),
    a = t(937008),
    o = t(807098),
    u = t(412260),
    d = t(810498),
    c = t(298305),
    p = t(985018),
    m = t(625489);
function E() {
    let e = (0, r.bG)([u.A], () => {
            let e = u.A.getMarketingComponentByType(i.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: n } = (0, a.Pv)(),
        t = (0, o.T)(e?.asset),
        E = (0, o.T)(e?.backgroundAsset),
        _ = e?.gradient,
        x =
            null != _ && null != _.colors && _.colors.length >= 2
                ? (0, d.K5)({ gradient: _.colors, angle: _.angle ?? void 0 })
                : void 0,
        S = (0, d.gc)(E);
    null != S && ((S.backgroundSize = "cover, auto"), (S.backgroundPosition = "right center, 0% 0%"));
    let P = (0, d.x)(S, x);
    return null == e || null == n
        ? null
        : (0, l.jsxs)("div", {
              className: m.qD,
              style: P,
              children: [
                  (0, l.jsx)("div", {
                      className: m.my,
                      children: (0, l.jsx)(c.A, {
                          claimableRewards: n,
                          maxRewardImageSrc: t ?? "",
                          size: s._3J.SIZE_40,
                          imageScaling: 1.25,
                      }),
                  }),
                  (0, l.jsx)(s.Text, {
                      variant: "text-md/medium",
                      className: m._M,
                      color: "always-white",
                      children: p.intl.string(p.t.Abiuci),
                  }),
              ],
          });
}
