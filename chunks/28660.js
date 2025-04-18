n.d(t, { Z: () => o }), n(388685);
var r = n(192379),
    i = n(695346),
    a = n(768581);
function o(e) {
    let { displayProfile: t, size: n, canAnimate: o, pendingBanner: s } = e,
        l = i.QK.getSetting(),
        c = null == t ? void 0 : t.getPreviewBanner(s, o, n),
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
            null != e && (0, a.F8)(e) && (new Image().src = e);
        }, [l, t, n, s]),
        {
            bannerSrc: c,
            status: u
        }
    );
}
