r.d(n, {
    Z: function () {
        return g;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(481060),
    l = r(782568),
    u = r(583434),
    c = r(124072),
    d = r(692629),
    f = r(626135),
    _ = r(981631),
    h = r(388032),
    p = r(45348);
function m(e) {
    var n;
    let { shopLink: r, skuId: a, onClick: l } = e,
        { product: f } = (0, u.T)(a);
    return (0, i.jsxs)(
        c.Z,
        {
            role: 'link',
            href: r,
            onClick: l,
            children: [
                (0, i.jsx)(o.ShopIcon, {
                    size: 'sm',
                    className: s()(p.icon),
                    color: o.tokens.colors.MENTION_FOREGROUND
                }),
                null !== (n = null == f ? void 0 : f.name) && void 0 !== n ? n : h.intl.string(h.t['Ij+2ra']),
                (0, i.jsx)(d.Z, {})
            ]
        },
        a
    );
}
function g(e) {
    return {
        react(n, r, a) {
            let s = a.noStyleAndInteraction
                ? void 0
                : (r) => {
                      e.shouldStopPropagation && (null == r || r.stopPropagation()), f.default.track(_.rMx.SHOP_LINK_MENTION_CLICKED, { sku_id: n.skuId }), (0, l.Z)(n.shopLink);
                  };
            return (0, i.jsx)(m, {
                shopLink: n.shopLink,
                skuId: n.skuId,
                onClick: s
            });
        }
    };
}
