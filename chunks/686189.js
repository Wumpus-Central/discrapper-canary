n.d(t, { A: () => i });
var a = n(64700),
    r = n(885386),
    l = n(486020);
function i(e) {
    let { displayProfile: t, size: n, canAnimate: i, pendingBanner: s } = e,
        d = r.kt.getSetting(),
        o = t?.getPreviewBanner(s, i, n),
        [c, u] = (0, a.useState)(t?.banner == null ? "COMPLETE" : "SHOULD_LOAD");
    return (
        (0, a.useEffect)(() => {
            if (null == o || "SHOULD_LOAD" !== c) return;
            u("LOADING");
            let e = new Image();
            (e.src = o), (e.onload = () => u("COMPLETE"));
        }, [o, c]),
        (0, a.useEffect)(() => {
            if (d) return;
            let e = t?.getPreviewBanner(s, !0, n);
            null != e && (0, l.o4)(e) && (new Image().src = e);
        }, [d, t, n, s]),
        { bannerSrc: o, status: c }
    );
}
