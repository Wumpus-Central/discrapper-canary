n.d(t, {
    B: function () {
        return d;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(626135),
    o = n(572004),
    s = n(981631),
    c = n(388032),
    u = n(898069);
function d(e) {
    let { skuId: t } = e,
        n = l.useCallback(() => {
            a.default.track(s.rMx.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }), (0, o.JG)(''.concat(location.protocol, '//').concat(location.host).concat(s.Z5c.COLLECTIBLES_SHOP, '#itemSkuId=').concat(t)), (0, r.showToast)((0, r.createToast)(c.intl.string(c.t['L/PwZW']), r.ToastType.SUCCESS));
        }, [t]);
    return (0, i.jsx)(r.Button, {
        'aria-label': c.intl.string(c.t.WqhZsr),
        look: r.Button.Looks.BLANK,
        size: r.Button.Sizes.NONE,
        onClick: n,
        innerClassName: u.buttonContent,
        className: u.button,
        children: (0, i.jsx)(r.LinkIcon, {
            size: 'md',
            color: 'currentColor',
            className: u.shareIcon
        })
    });
}
