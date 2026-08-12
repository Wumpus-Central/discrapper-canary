"use strict";
n.d(t, { A: () => o, D: () => l });
var i,
    r = n(582128),
    a = n(885386),
    s = n(486020),
    l = (((i = {}).SHOULD_LOAD = "SHOULD_LOAD"), (i.LOADING = "LOADING"), (i.COMPLETE = "COMPLETE"), i);
function o(e) {
    let { displayProfile: t, size: n, canAnimate: i, pendingBanner: l } = e,
        o = a.kt.getSetting(),
        d = t?.getPreviewBanner(l, i, n),
        [c, u] = (0, r.useState)(t?.banner == null ? "COMPLETE" : "SHOULD_LOAD");
    return (
        (0, r.useEffect)(() => {
            if (null == d || "SHOULD_LOAD" !== c) return;
            u("LOADING");
            let e = new Image();
            (e.src = d), (e.onload = () => u("COMPLETE"));
        }, [d, c]),
        (0, r.useEffect)(() => {
            if (o) return;
            let e = t?.getPreviewBanner(l, !0, n);
            null != e && (0, s.o4)(e) && (new Image().src = e);
        }, [o, t, n, l]),
        { bannerSrc: d, status: c }
    );
}
