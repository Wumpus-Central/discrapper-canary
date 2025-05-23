n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(782568),
    a = n(583434),
    s = n(124072),
    l = n(891984),
    c = n(626135),
    u = n(981631),
    d = n(388032),
    f = n(897384);
function _(e) {
    var t;
    let { shopLink: n, skuId: o, onClick: c } = e,
        { product: u } = (0, a.T)(o);
    return (0, r.jsxs)(
        s.Z,
        {
            role: 'link',
            href: n,
            onClick: c,
            children: [
                (0, r.jsx)(i.EOn, {
                    size: 'sm',
                    className: f.icon,
                    color: i.TVs.colors.MENTION_FOREGROUND
                }),
                null != (t = null == u ? void 0 : u.name) ? t : d.intl.string(d.t['Ij+2ra']),
                (0, r.jsx)(l.Z, {})
            ]
        },
        o
    );
}
function p(e) {
    return {
        react(t, n, i) {
            let a = i.noStyleAndInteraction
                ? void 0
                : (n) => {
                      e.shouldStopPropagation && (null == n || n.stopPropagation()), c.default.track(u.rMx.SHOP_LINK_MENTION_CLICKED, { sku_id: t.skuId }), (0, o.Z)(t.shopLink);
                  };
            return (0, r.jsx)(_, {
                shopLink: t.shopLink,
                skuId: t.skuId,
                onClick: a
            });
        }
    };
}
