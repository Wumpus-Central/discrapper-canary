n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(987209),
    a = n(563132),
    o = n(346497),
    s = n(196567),
    l = n(474936),
    c = n(388032),
    u = n(430597);
let d = () => {
    let e = (0, o.Vi)(),
        { selectedSkuId: t } = (0, a.JL)(),
        { isGift: n } = (0, i.wD)();
    return n || t !== l.Si.TIER_2 || !e
        ? null
        : (0, r.jsx)(s.Z, {
              copy: c.intl.string(c.t.xk8bIi),
              bannerImage: u,
              hideGiftIcon: !0
          });
};
