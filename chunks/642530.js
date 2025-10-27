n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(987209),
    a = n(563132),
    o = n(367074),
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
              copy: c.intl.string(c.t.OejPtl),
              bannerImage: u,
              textColor: "text-invert",
              hideGiftIcon: !0,
          });
};
