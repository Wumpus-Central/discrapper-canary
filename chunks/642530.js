var i = t(200651);
t(192379);
var l = t(987209),
    r = t(563132),
    s = t(346497),
    a = t(196567),
    c = t(474936),
    o = t(388032),
    u = t(927617);
n.Z = () => {
    let e = (0, s.Vi)(),
        { selectedSkuId: n } = (0, r.usePaymentContext)(),
        { isGift: t } = (0, l.wD)();
    return t || n !== c.Si.TIER_2 || !e
        ? null
        : (0, i.jsx)(a.Z, {
              copy: o.intl.string(o.t.xk8bIi),
              bannerImage: u,
              hideGiftIcon: !0
          });
};
