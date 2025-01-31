n.d(t, { Z: () => s }), n(47120);
var i = n(192379),
    r = n(695346),
    a = n(768581);
function s(e) {
    let { displayProfile: t, size: n, canAnimate: s, pendingBanner: o } = e,
        l = r.QK.getSetting(),
        u = null == t ? void 0 : t.getPreviewBanner(o, s, n),
        [c, d] = (0, i.useState)((null == t ? void 0 : t.banner) == null ? 'COMPLETE' : 'SHOULD_LOAD');
    return (
        (0, i.useEffect)(() => {
            if (null == u || 'SHOULD_LOAD' !== c) return;
            d('LOADING');
            let e = new Image();
            (e.src = u), (e.onload = () => d('COMPLETE'));
        }, [u, c]),
        (0, i.useEffect)(() => {
            if (l) return;
            let e = null == t ? void 0 : t.getPreviewBanner(o, !0, n);
            null != e && (0, a.F8)(e) && (new Image().src = e);
        }, [l, t, n, o]),
        {
            bannerSrc: u,
            status: c
        }
    );
}
