n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(782568),
    l = n(583434),
    u = n(124072),
    c = n(692629),
    d = n(626135),
    f = n(981631),
    _ = n(388032),
    p = n(45348);
function h(e) {
    var t;
    let { shopLink: n, skuId: r, onClick: o } = e,
        { product: d } = (0, l.T)(r);
    return (0, i.jsxs)(
        u.Z,
        {
            role: 'link',
            href: n,
            onClick: o,
            children: [
                (0, i.jsx)(s.EOn, {
                    size: 'sm',
                    className: a()(p.icon),
                    color: s.TVs.colors.MENTION_FOREGROUND
                }),
                null !== (t = null == d ? void 0 : d.name) && void 0 !== t ? t : _.intl.string(_.t['Ij+2ra']),
                (0, i.jsx)(c.Z, {})
            ]
        },
        r
    );
}
function m(e) {
    return {
        react(t, n, r) {
            let a = r.noStyleAndInteraction
                ? void 0
                : (n) => {
                      e.shouldStopPropagation && (null == n || n.stopPropagation()), d.default.track(f.rMx.SHOP_LINK_MENTION_CLICKED, { sku_id: t.skuId }), (0, o.Z)(t.shopLink);
                  };
            return (0, i.jsx)(h, {
                shopLink: t.shopLink,
                skuId: t.skuId,
                onClick: a
            });
        }
    };
}
