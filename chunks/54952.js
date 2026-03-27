n.d(e, { A: () => c });
var r = n(627968);
n(64700);
var a = n(397927),
    i = n(503852),
    l = n(689906),
    s = n(743569),
    o = n(568065),
    d = n(136708),
    u = n(985018);
function c(t) {
    let { guildId: e, powerup: n, onClose: c, ...p } = t,
        f = o.HO.has(n.skuId),
        _ = (0, l.A)(e, n);
    (0, i.Z)(e, n, i.q.DETAIL);
    let m =
            n.type === o.o9.LEVEL
                ? { type: "rive", rive: s.T[n.skuId], aspectRatio: "16/9" }
                : { type: "image", src: n.animatedImageUrl ?? n.staticImageUrl ?? "", aspectRatio: "16/9" },
        A = u.intl.formatToPlainString(d.default.lFuOFF, { perkName: n.title }),
        v = f
            ? [
                  {
                      text: u.intl.string(d.default.g5Ds69),
                      variant: "primary",
                      size: "md",
                      onClick: (t) => {
                          _?.(t), c();
                      },
                  },
              ]
            : [
                  {
                      text: u.intl.string(u.t.cpT0Cq),
                      variant: "primary",
                      size: "md",
                      onClick: () => {
                          c();
                      },
                  },
              ];
    return (0, r.jsx)(a.kpP, {
        graphic: m,
        title: A,
        actions: v,
        onClose: c,
        ...p,
        children: (0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            children: u.intl.formatToPlainString(d.default.y3wHot, { perkName: n.title }),
        }),
    });
}
