a.d(t, { A: () => p });
var n = a(627968);
a(64700);
var r = a(772707),
    i = a(834730),
    s = a(503852),
    o = a(689906),
    l = a(743569),
    d = a(568065),
    c = a(853513),
    u = a(985018);
function p(e) {
    let { guildId: t, powerup: a, onClose: p, ...m } = e,
        _ = d.HO.has(a.skuId),
        f = (0, o.A)(t, a);
    (0, s.Z)(t, a, s.q.DETAIL);
    let x =
            a.type === d.o9.LEVEL
                ? { type: "rive", rive: l.T[a.skuId], aspectRatio: "16/9" }
                : { type: "image", src: a.animatedImageUrl ?? a.staticImageUrl ?? "", aspectRatio: "16/9" },
        v = u.intl.formatToPlainString(c.default.lFuOFF, { perkName: a.title }),
        g = _
            ? [
                  {
                      text: u.intl.string(c.default.g5Ds69),
                      variant: "primary",
                      size: "md",
                      onClick: (e) => {
                          f?.(e), p();
                      },
                  },
              ]
            : [
                  {
                      text: u.intl.string(u.t.cpT0Cq),
                      variant: "primary",
                      size: "md",
                      onClick: () => {
                          p();
                      },
                  },
              ];
    return (0, n.jsx)(r.k, {
        graphic: x,
        title: v,
        actions: g,
        onClose: p,
        ...m,
        children:
            _ &&
            (0, n.jsx)(i.E, {
                variant: "text-md/normal",
                children: u.intl.formatToPlainString(c.default.y3wHot, { perkName: a.title }),
            }),
    });
}
