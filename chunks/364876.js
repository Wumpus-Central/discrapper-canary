t.d(n, {
    _: () => g,
});
var l = t(627968);
t(64700);
var r = t(877624),
    i = t(311907),
    s = t(397927),
    a = t(937008),
    o = t(807098),
    u = t(412260),
    c = t(810498),
    d = t(298305),
    p = t(985018),
    m = t(686046);

function g() {
    var e;
    let n = (0, i.bG)([u.A], () => {
            let e = u.A.getMarketingComponentByType(r.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: t } = (0, a.Pv)(),
        g = (0, o.T)(null == n ? void 0 : n.asset),
        E = (0, o.T)(null == n ? void 0 : n.backgroundAsset),
        f = null == n ? void 0 : n.gradient,
        j =
            null != f && null != f.colors && f.colors.length >= 2
                ? (0, c.K5)(
                      {
                          gradient: f.colors,
                          angle: null != (e = f.angle) ? e : void 0,
                      },
                      {
                          colorStops: [0, 12, 100],
                      },
                  )
                : void 0,
        h = (0, c.gc)(null != E ? E : void 0);
    null != h && ((h.backgroundSize = "cover, auto"), (h.backgroundPosition = "right center, 0% 0%"));
    let x = (0, c.x)(h, j);
    return null == n || null == t
        ? null
        : (0, l.jsxs)("div", {
              className: m.qD,
              style: x,
              children: [
                  (0, l.jsx)("div", {
                      className: m.my,
                      children: (0, l.jsx)(d.A, {
                          claimableRewards: t,
                          maxRewardImageSrc: null != g ? g : "",
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
