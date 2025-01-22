var i = r(200651);
r(192379);
var a = r(987209),
    o = r(563132),
    s = r(346497),
    l = r(196567),
    u = r(474936),
    c = r(388032),
    d = r(430597);
let f = () => {
    let e = (0, s.Vi)(),
        { selectedSkuId: n } = (0, o.usePaymentContext)(),
        { isGift: r } = (0, a.wD)();
    return r || n !== u.Si.TIER_2 || !e
        ? null
        : (0, i.jsx)(l.Z, {
              copy: c.intl.string(c.t.xk8bIi),
              bannerImage: d,
              hideGiftIcon: !0
          });
};
n.Z = f;
