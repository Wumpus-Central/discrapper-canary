a.d(i, { default: () => m });
var e = a(477900);
a(582128);
var r = a(772707),
    n = a(834730),
    l = a(503852),
    s = a(689906),
    p = a(743569),
    c = a(568065),
    d = a(930259),
    o = a(105292);
function m(t) {
    let { guildId: i, powerup: a, onClose: m, ...u } = t,
        k = c.HO.has(a.skuId),
        g = (0, s.A)(i, a);
    (0, l.Z)(i, a, l.q.DETAIL);
    let h =
            a.type === c.o9.LEVEL
                ? { type: "rive", rive: p.T[a.skuId], aspectRatio: "16/9" }
                : { type: "image", src: a.animatedImageUrl ?? a.staticImageUrl ?? "", aspectRatio: "16/9" },
        f = o.intl.formatToPlainString(d.default.lFuOFF, { perkName: a.title }),
        v = k
            ? [
                  {
                      text: o.intl.string(d.default.g5Ds69),
                      variant: "primary",
                      size: "md",
                      onClick: (t) => {
                          (g?.(t), m());
                      },
                  },
              ]
            : [
                  {
                      text: o.intl.string(o.t.cpT0Cq),
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
                variant: "text-md/normal",
                children: o.intl.formatToPlainString(d.default.y3wHot, { perkName: a.title }),
            }),
    });
}
