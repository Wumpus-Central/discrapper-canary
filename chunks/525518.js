n.d(t, { B: () => p });
var r = n(255367),
    i = n(73800),
    l = n(755721),
    a = n(481060),
    o = n(626135),
    s = n(572004),
    c = n(215023),
    u = n(981631),
    d = n(388032),
    m = n(108845);
function p(e) {
    let { skuId: t, tab: n } = e,
        p = i.useCallback(() => {
            o.default.track(u.rMx.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t });
            let e = ''
                .concat(location.protocol, '//')
                .concat(location.host)
                .concat(u.Z5c.COLLECTIBLES_SHOP)
                .concat((0, c.aK)(n) ? '?tab='.concat(n) : '', '#itemSkuId=')
                .concat(t);
            (0, s.JG)(e, () => (0, a.showToast)((0, a.createToast)(d.intl.string(d.t['L/PwZW']), a.ToastType.SUCCESS)));
        }, [t, n]);
    return (0, r.jsx)(l.zx, {
        'aria-label': d.intl.string(d.t.WqhZsr),
        look: l.zx.Looks.BLANK,
        size: l.zx.Sizes.NONE,
        onClick: p,
        innerClassName: m.buttonContent,
        className: m.button,
        children: (0, r.jsx)(a.xPt, {
            size: 'md',
            color: 'currentColor',
            className: m.shareIcon
        })
    });
}
