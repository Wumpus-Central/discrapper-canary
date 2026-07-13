"use strict";
n.d(t, { A: () => s });
var i = n(64700),
    r = n(885386),
    a = n(486020);
function s(e) {
    let { displayProfile: t, size: n, canAnimate: s, pendingBanner: l } = e,
        o = r.kt.getSetting(),
        d = t?.getPreviewBanner(l, s, n),
        [c, u] = (0, i.useState)(t?.banner == null ? "COMPLETE" : "SHOULD_LOAD");
    return (
        (0, i.useEffect)(() => {
            if (null == d || "SHOULD_LOAD" !== c) return;
            u("LOADING");
            let e = new Image();
            (e.src = d), (e.onload = () => u("COMPLETE"));
        }, [d, c]),
        (0, i.useEffect)(() => {
            if (o) return;
            let e = t?.getPreviewBanner(l, !0, n);
            null != e && (0, a.o4)(e) && (new Image().src = e);
        }, [o, t, n, l]),
        { bannerSrc: d, status: c }
    );
}
