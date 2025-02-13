n.d(t, { B: () => u });
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(626135),
    s = n(572004),
    o = n(981631),
    c = n(388032),
    d = n(408995);
function u(e) {
    let { skuId: t } = e,
        n = l.useCallback(() => {
            a.default.track(o.rMx.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }), (0, s.JG)(''.concat(location.protocol, '//').concat(location.host).concat(o.Z5c.COLLECTIBLES_SHOP, '#itemSkuId=').concat(t)), (0, r.showToast)((0, r.createToast)(c.intl.string(c.t['L/PwZW']), r.ToastType.SUCCESS));
        }, [t]);
    return (0, i.jsx)(r.zxk, {
        'aria-label': c.intl.string(c.t.WqhZsr),
        look: r.zxk.Looks.BLANK,
        size: r.zxk.Sizes.NONE,
        onClick: n,
        innerClassName: d.buttonContent,
        className: d.button,
        children: (0, i.jsx)(r.xPt, {
            size: 'md',
            color: 'currentColor',
            className: d.shareIcon
        })
    });
}
