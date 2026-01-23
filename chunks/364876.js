n.d(t, {
    _: () => f,
});
var r = n(627968),
    l = n(64700),
    i = n(877624),
    s = n(311907),
    a = n(397927),
    o = n(937008),
    u = n(807098),
    c = n(412260),
    d = n(810498),
    p = n(298305),
    m = n(985018),
    g = n(686046);

function f() {
    var e;
    let t = (0, s.bG)([c.A], () => {
            let e = c.A.getMarketingComponentByType(i.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: n } = (0, o.Pv)(),
        f = (0, u.T)(null == t ? void 0 : t.asset),
        y = (0, u.T)(null == t ? void 0 : t.backgroundAsset),
        j = null == t ? void 0 : t.gradient,
        b =
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
        h = l.useMemo(() => (0, d.gc)(null != y ? y : void 0), [y]),
        v = l.useMemo(
            () =>
                (0, d.x)(h, b, {
                    backgroundSize: "cover, auto",
                    backgroundPosition: "right center, 0% 0%",
                }),
            [h, b],
        );
    return null == t || null == n
        ? null
        : (0, r.jsxs)("div", {
              className: g.qD,
              style: v,
              children: [
                  (0, r.jsx)("div", {
                      className: g.my,
                      children: (0, r.jsx)(p.A, {
                          claimableRewards: n,
                          maxRewardImageSrc: null != f ? f : "",
                          size: a._3J.SIZE_40,
                          imageScaling: 1.25,
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
