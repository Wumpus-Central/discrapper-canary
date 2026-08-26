n.d(t, { A: () => o, D: () => i });
var a,
    l = n(582128),
    r = n(885386),
    s = n(486020),
    i = (((a = {}).SHOULD_LOAD = "SHOULD_LOAD"), (a.LOADING = "LOADING"), (a.COMPLETE = "COMPLETE"), a);
function o(e) {
    let { displayProfile: t, size: n, canAnimate: a, pendingBanner: i } = e,
        o = r.kt.getSetting(),
        d = t?.getPreviewBanner(i, a, n),
        [c, u] = (0, l.useState)(t?.banner == null ? "COMPLETE" : "SHOULD_LOAD");
    return (
        (0, l.useEffect)(() => {
            if (null == d || "SHOULD_LOAD" !== c) return;
            u("LOADING");
            let e = new Image();
            (e.src = d), (e.onload = () => u("COMPLETE"));
        }, [d, c]),
        (0, l.useEffect)(() => {
            if (o) return;
            let e = t?.getPreviewBanner(i, !0, n);
            null != e && (0, s.o4)(e) && (new Image().src = e);
        }, [o, t, n, i]),
        { bannerSrc: d, status: c }
    );
}
