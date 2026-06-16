"use strict";
n.d(t, { A: () => a });
var i = n(64700),
    r = n(885386),
    s = n(486020);
function a(e) {
    let { displayProfile: t, size: n, canAnimate: a, pendingBanner: o } = e,
        l = r.kt.getSetting(),
        u = t?.getPreviewBanner(o, a, n),
        [c, d] = (0, i.useState)(t?.banner == null ? "COMPLETE" : "SHOULD_LOAD");
    return (
        (0, i.useEffect)(() => {
            if (null == u || "SHOULD_LOAD" !== c) return;
            d("LOADING");
            let e = new Image();
            (e.src = u), (e.onload = () => d("COMPLETE"));
        }, [u, c]),
        (0, i.useEffect)(() => {
            if (l) return;
            let e = t?.getPreviewBanner(o, !0, n);
            null != e && (0, s.o4)(e) && (new Image().src = e);
        }, [l, t, n, o]),
        { bannerSrc: u, status: c }
    );
}
