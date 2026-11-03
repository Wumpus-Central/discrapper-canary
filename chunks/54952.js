a.d(i, { default: () => m });
var e = a(477900);
a(582128);
var r = a(772707),
    n = a(834730),
    l = a(503852),
    s = a(689906),
    d = a(743569),
    o = a(568065),
    p = a(959456),
    c = a(105292);
function m(t) {
    let { guildId: i, powerup: a, onClose: m, ...u } = t,
        k = o.HO.has(a.skuId),
        g = (0, s.A)(i, a);
    (0, l.Z)(i, a, l.q.DETAIL);
    let h =
            a.type === o.o9.LEVEL
                ? { type: "rive", rive: d.T[a.skuId], aspectRatio: "16/9" }
                : { type: "image", src: a.animatedImageUrl ?? a.staticImageUrl ?? "", aspectRatio: "16/9" },
        f = c.intl.formatToPlainString(p.default.lFuOFF, { perkName: a.title }),
        v = k
            ? [
                  {
                      text: c.intl.string(p.default.g5Ds69),
                      variant: "primary",
                      size: "md",
                      onClick: (t) => {
                          (g?.(t), m());
                      },
                  },
              ]
            : [
                  {
                      text: c.intl.string(c.t.cpT0Cq),
                      variant: "primary",
                      size: "md",
                      onClick: () => {
                          m();
                      },
                  },
              ];
    return (0, e.jsx)(r.k, {
        graphic: h,
        title: f,
        actions: v,
        onClose: m,
        ...u,
        children:
            k &&
            (0, e.jsx)(n.E, {
                variant: "body-md/normal",
                children: c.intl.formatToPlainString(p.default.y3wHot, { perkName: a.title }),
            }),
    });
}
