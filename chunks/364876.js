t.d(n, {
    _: () => f,
});
var r = t(627968),
    l = t(64700),
    i = t(877624),
    s = t(311907),
    a = t(397927),
    o = t(937008),
    u = t(807098),
    c = t(412260),
    d = t(810498),
    p = t(298305),
    m = t(985018),
    g = t(686046);

function f() {
    var e;
    let n = (0, s.bG)([c.A], () => {
            let e = c.A.getMarketingComponentByType(i.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: t } = (0, o.Pv)(),
        f = (0, u.T)(null == n ? void 0 : n.asset),
        E = (0, u.T)(null == n ? void 0 : n.backgroundAsset),
        j = null == n ? void 0 : n.gradient,
        x =
            null != j && null != j.colors && j.colors.length >= 2
                ? (0, d.K5)(
                      {
                          gradient: j.colors,
                          angle: null != (e = j.angle) ? e : void 0,
                      },
                      {
                          colorStops: [0, 12, 100],
                      },
                  )
                : void 0,
        h = l.useMemo(() => (0, d.gc)(null != E ? E : void 0), [E]),
        T = l.useMemo(
            () =>
                (0, d.x)(h, x, {
                    backgroundSize: "cover, auto",
                    backgroundPosition: "right center, 0% 0%",
                }),
            [h, x],
        );
    return null == n || null == t
        ? null
        : (0, r.jsxs)("div", {
              className: g.qD,
              style: T,
              children: [
                  (0, r.jsx)("div", {
                      className: g.my,
                      children: (0, r.jsx)(p.A, {
                          claimableRewards: t,
                          maxRewardImageSrc: null != f ? f : "",
                          size: a._3J.SIZE_40,
                          imageScaling: 1.9,
                      }),
                  }),
                  (0, r.jsx)(a.Text, {
                      variant: "text-md/medium",
                      className: g._M,
                      color: "always-white",
                      children: m.intl.string(m.t.Abiuci),
                  }),
              ],
          });
}
