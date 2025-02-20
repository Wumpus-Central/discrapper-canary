n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(782568),
    l = n(583434),
    c = n(124072),
    u = n(692629),
    d = n(626135),
    f = n(981631),
    p = n(388032),
    _ = n(471108);
function h(e) {
    var t;
    let { shopLink: n, skuId: i, onClick: s } = e,
        { product: d } = (0, l.T)(i);
    return (0, r.jsxs)(
        c.Z,
        {
            role: 'link',
            href: n,
            onClick: s,
            children: [
                (0, r.jsx)(a.EOn, {
                    size: 'sm',
                    className: o()(_.icon),
                    color: a.TVs.colors.MENTION_FOREGROUND
                }),
                null !== (t = null == d ? void 0 : d.name) && void 0 !== t ? t : p.NW.string(p.t['Ij+2ra']),
                (0, r.jsx)(u.Z, {})
            ]
        },
        i
    );
}
function m(e) {
    return {
        react(t, n, i) {
            let o = i.noStyleAndInteraction
                ? void 0
                : (n) => {
                      e.shouldStopPropagation && (null == n || n.stopPropagation()), d.default.track(f.rMx.SHOP_LINK_MENTION_CLICKED, { sku_id: t.skuId }), (0, s.Z)(t.shopLink);
                  };
            return (0, r.jsx)(h, {
                shopLink: t.shopLink,
                skuId: t.skuId,
                onClick: o
            });
        }
    };
}
