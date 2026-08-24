n.d(t, { A: () => d, D: () => i });
var a,
    l = n(582128),
    r = n(885386),
    s = n(486020),
    i = (((a = {}).SHOULD_LOAD = "SHOULD_LOAD"), (a.LOADING = "LOADING"), (a.COMPLETE = "COMPLETE"), a);
function d(e) {
    let { displayProfile: t, size: n, canAnimate: a, pendingBanner: i } = e,
        d = r.kt.getSetting(),
        o = t?.getPreviewBanner(i, a, n),
        [c, u] = (0, l.useState)(t?.banner == null ? "COMPLETE" : "SHOULD_LOAD");
    return (
        (0, l.useEffect)(() => {
            if (null == o || "SHOULD_LOAD" !== c) return;
            u("LOADING");
            let e = new Image();
            (e.src = o), (e.onload = () => u("COMPLETE"));
        }, [o, c]),
        (0, l.useEffect)(() => {
            if (d) return;
            let e = t?.getPreviewBanner(i, !0, n);
            null != e && (0, s.o4)(e) && (new Image().src = e);
        }, [d, t, n, i]),
        { bannerSrc: o, status: c }
    );
}
