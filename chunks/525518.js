n.d(t, { B: () => d });
var i = n(200651),
    r = n(192379),
    l = n(481060),
    o = n(626135),
    s = n(572004),
    a = n(981631),
    c = n(388032),
    u = n(191221);
function d(e) {
    let { skuId: t } = e,
        n = r.useCallback(() => {
            o.default.track(a.rMx.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }), (0, s.JG)(''.concat(location.protocol, '//').concat(location.host).concat(a.Z5c.COLLECTIBLES_SHOP, '#itemSkuId=').concat(t)), (0, l.showToast)((0, l.createToast)(c.NW.string(c.t['L/PwZW']), l.ToastType.SUCCESS));
        }, [t]);
    return (0, i.jsx)(l.zxk, {
        'aria-label': c.NW.string(c.t.WqhZsr),
        look: l.zxk.Looks.BLANK,
        size: l.zxk.Sizes.NONE,
        onClick: n,
        innerClassName: u.buttonContent,
        className: u.button,
        children: (0, i.jsx)(l.xPt, {
            size: 'md',
            color: 'currentColor',
            className: u.shareIcon
        })
    });
}
