r.d(n, {
    Z: function () {
        return u;
    }
});
var i,
    a = r(47120);
var o = r(192379),
    s = r(695346),
    l = r(768581);
function u(e) {
    let { displayProfile: n, size: r, canAnimate: i, pendingBanner: a } = e,
        u = s.QK.getSetting(),
        c = null == n ? void 0 : n.getPreviewBanner(a, i, r),
        [d, f] = (0, o.useState)((null == n ? void 0 : n.banner) == null ? 'COMPLETE' : 'SHOULD_LOAD');
    return (
        (0, o.useEffect)(() => {
            if (null == c || 'SHOULD_LOAD' !== d) return;
            f('LOADING');
            let e = new Image();
            (e.src = c), (e.onload = () => f('COMPLETE'));
        }, [c, d]),
        (0, o.useEffect)(() => {
            if (u) return;
            let e = null == n ? void 0 : n.getPreviewBanner(a, !0, r);
            if (null != e && !!(0, l.F8)(e)) new Image().src = e;
        }, [u, n, r, a]),
        {
            bannerSrc: c,
            status: d
        }
    );
}
!(function (e) {
    (e.SHOULD_LOAD = 'SHOULD_LOAD'), (e.LOADING = 'LOADING'), (e.COMPLETE = 'COMPLETE');
})(i || (i = {}));
