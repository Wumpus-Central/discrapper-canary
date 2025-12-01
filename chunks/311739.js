n.d(t, { Z: () => _ });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(782568),
    o = n(583434),
    s = n(124072),
    l = n(891984),
    c = n(626135),
    u = n(981631),
    d = n(388032),
    f = n(104844);
function p(e) {
    var t;
    let { shopLink: n, skuId: a, onClick: c } = e,
        { product: u } = (0, o.T)(a);
    return (0, r.jsxs)(
        s.Z,
        {
            role: "link",
            href: n,
            onClick: c,
            children: [
                (0, r.jsx)(i.EOn, {
                    size: "sm",
                    className: f.icon,
                    color: i.TVs.colors.MENTION_FOREGROUND,
                }),
                null != (t = null == u ? void 0 : u.name) ? t : d.intl.string(d.t["Ij+2rZ"]),
                (0, r.jsx)(l.Z, {}),
            ],
        },
        a,
    );
}
function _(e) {
    return {
        react(t, n, i) {
            let o = i.noStyleAndInteraction
                ? void 0
                : (n) => {
                      e.shouldStopPropagation && (null == n || n.stopPropagation()),
                          c.default.track(u.rMx.SHOP_LINK_MENTION_CLICKED, { sku_id: t.skuId }),
                          (0, a.Z)(t.shopLink);
                  };
            return (0, r.jsx)(p, {
                shopLink: t.shopLink,
                skuId: t.skuId,
                onClick: o,
            });
        },
    };
}
