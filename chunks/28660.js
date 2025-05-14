n.d(t, { Z: () => a }), n(388685);
var r = n(73800),
    i = n(695346),
    o = n(768581);
function a(e) {
    let { displayProfile: t, size: n, canAnimate: a, pendingBanner: s } = e,
        l = i.QK.getSetting(),
        c = null == t ? void 0 : t.getPreviewBanner(s, a, n),
        [u, d] = (0, r.useState)((null == t ? void 0 : t.banner) == null ? 'COMPLETE' : 'SHOULD_LOAD');
    return (
        (0, r.useEffect)(() => {
            if (null == c || 'SHOULD_LOAD' !== u) return;
            d('LOADING');
            let e = new Image();
            (e.src = c), (e.onload = () => d('COMPLETE'));
        }, [c, u]),
        (0, r.useEffect)(() => {
            if (l) return;
            let e = null == t ? void 0 : t.getPreviewBanner(s, !0, n);
            null != e && (0, o.F8)(e) && (new Image().src = e);
        }, [l, t, n, s]),
        {
            bannerSrc: c,
            status: u
        }
    );
}
