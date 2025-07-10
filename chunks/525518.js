n.d(t, { B: () => f });
var r = n(255367),
    i = n(73800),
    a = n(755721),
    l = n(481060),
    o = n(626135),
    s = n(572004),
    c = n(215023),
    u = n(981631),
    d = n(388032),
    m = n(108845);
function f(e) {
    let { skuId: t, tab: n } = e,
        f = i.useCallback(() => {
            o.default.track(u.rMx.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t });
            let e = ''
                .concat(location.protocol, '//')
                .concat(location.host)
                .concat(u.Z5c.COLLECTIBLES_SHOP)
                .concat((0, c.aK)(n) ? '?tab='.concat(n) : '', '#itemSkuId=')
                .concat(t);
            (0, s.JG)(e, () => (0, l.showToast)((0, l.createToast)(d.intl.string(d.t['L/PwZW']), l.ToastType.SUCCESS)));
        }, [t, n]);
    return (0, r.jsx)(a.zx, {
        'aria-label': d.intl.string(d.t.WqhZsr),
        look: a.zx.Looks.BLANK,
        size: a.zx.Sizes.NONE,
        onClick: f,
        innerClassName: m.buttonContent,
        className: m.button,
        children: (0, r.jsx)(l.xPt, {
            size: 'md',
            color: 'currentColor',
            className: m.shareIcon
        })
    });
}
