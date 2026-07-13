n.d(t, { A: () => s });
var a = n(64700),
    l = n(885386),
    r = n(486020);
function s(e) {
    let { displayProfile: t, size: n, canAnimate: s, pendingBanner: i } = e,
        d = l.kt.getSetting(),
        o = t?.getPreviewBanner(i, s, n),
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
            let e = t?.getPreviewBanner(i, !0, n);
            null != e && (0, r.o4)(e) && (new Image().src = e);
        }, [d, t, n, i]),
        { bannerSrc: o, status: c }
    );
}
