n.d(t, { n: () => d });
var r = n(255367),
    a = n(73800),
    i = n(481060),
    o = n(626135),
    c = n(572004),
    s = n(215023),
    l = n(981631),
    u = n(388032);
function d(e) {
    let { skuId: t, tab: n } = e,
        d = a.useCallback(() => {
            o.default.track(l.rMx.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t });
            let e = ''
                .concat(location.protocol, '//')
                .concat(location.host)
                .concat(l.Z5c.COLLECTIBLES_SHOP)
                .concat((0, s.aK)(n) ? '?tab='.concat(n) : '', '#itemSkuId=')
                .concat(t);
            (0, c.JG)(e, () => (0, i.showToast)((0, i.createToast)(u.intl.string(u.t['L/PwZW']), i.ToastType.SUCCESS)));
        }, [t, n]);
    return (0, r.jsx)(i.hU, {
        'aria-label': u.intl.string(u.t.WqhZsr),
        onClick: d,
        icon: i.xPt,
        variant: 'overlay-secondary',
        size: 'sm'
    });
}
