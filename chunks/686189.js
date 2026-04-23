"use strict";
n.d(t, { A: () => a });
var r = n(64700),
    i = n(253932),
    s = n(486020);
function a(e) {
    let { displayProfile: t, size: n, canAnimate: a, pendingBanner: o } = e,
        l = i.kt.getSetting(),
        u = t?.getPreviewBanner(o, a, n),
        [c, d] = (0, r.useState)(t?.banner == null ? "COMPLETE" : "SHOULD_LOAD");
    return (
        (0, r.useEffect)(() => {
            if (null == u || "SHOULD_LOAD" !== c) return;
            d("LOADING");
            let e = new Image();
            (e.src = u), (e.onload = () => d("COMPLETE"));
        }, [u, c]),
        (0, r.useEffect)(() => {
            if (l) return;
            let e = t?.getPreviewBanner(o, !0, n);
            null != e && (0, s.o4)(e) && (new Image().src = e);
        }, [l, t, n, o]),
        { bannerSrc: u, status: c }
    );
}
