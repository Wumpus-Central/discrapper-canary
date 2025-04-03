n.d(t, { B: () => m });
var r = n(200651),
    i = n(192379),
    a = n(481060),
    l = n(626135),
    s = n(572004),
    o = n(215023),
    c = n(981631),
    u = n(388032),
    d = n(108845);
function m(e) {
    let { skuId: t, tab: n } = e,
        m = i.useCallback(() => {
            l.default.track(c.rMx.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }),
                (0, s.JG)(
                    ''
                        .concat(location.protocol, '//')
                        .concat(location.host)
                        .concat(c.Z5c.COLLECTIBLES_SHOP)
                        .concat((0, o.aK)(n) ? '?tab='.concat(n) : '', '#itemSkuId=')
                        .concat(t)
                ),
                (0, a.showToast)((0, a.createToast)(u.NW.string(u.t['L/PwZW']), a.ToastType.SUCCESS));
        }, [t, n]);
    return (0, r.jsx)(a.zxk, {
        'aria-label': u.NW.string(u.t.WqhZsr),
        look: a.zxk.Looks.BLANK,
        size: a.zxk.Sizes.NONE,
        onClick: m,
        innerClassName: d.buttonContent,
        className: d.button,
        children: (0, r.jsx)(a.xPt, {
            size: 'md',
            color: 'currentColor',
            className: d.shareIcon
        })
    });
}
