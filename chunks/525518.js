n.d(t, { B: () => m });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(626135),
    o = n(572004),
    s = n(215023),
    c = n(981631),
    u = n(388032),
    d = n(108845);
function m(e) {
    let { skuId: t, tab: n } = e,
        m = i.useCallback(() => {
            a.default.track(c.rMx.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t });
            let e = ''
                .concat(location.protocol, '//')
                .concat(location.host)
                .concat(c.Z5c.COLLECTIBLES_SHOP)
                .concat((0, s.aK)(n) ? '?tab='.concat(n) : '', '#itemSkuId=')
                .concat(t);
            (0, o.JG)(e, () => (0, l.showToast)((0, l.createToast)(u.intl.string(u.t['L/PwZW']), l.ToastType.SUCCESS)));
        }, [t, n]);
    return (0, r.jsx)(l.zxk, {
        'aria-label': u.intl.string(u.t.WqhZsr),
        look: l.zxk.Looks.BLANK,
        size: l.zxk.Sizes.NONE,
        onClick: m,
        innerClassName: d.buttonContent,
        className: d.button,
        children: (0, r.jsx)(l.xPt, {
            size: 'md',
            color: 'currentColor',
            className: d.shareIcon
        })
    });
}
