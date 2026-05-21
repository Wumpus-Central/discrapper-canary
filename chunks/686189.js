t.d(a, { A: () => n });
var s = t(64700),
    c = t(885386),
    d = t(486020);
function n(e) {
    let { displayProfile: a, size: t, canAnimate: n, pendingBanner: E } = e,
        _ = c.kt.getSetting(),
        r = a?.getPreviewBanner(E, n, t),
        [f, i] = (0, s.useState)(a?.banner == null ? "COMPLETE" : "SHOULD_LOAD");
    return (
        (0, s.useEffect)(() => {
            if (null == r || "SHOULD_LOAD" !== f) return;
            i("LOADING");
            let e = new Image();
            (e.src = r), (e.onload = () => i("COMPLETE"));
        }, [r, f]),
        (0, s.useEffect)(() => {
            if (_) return;
            let e = a?.getPreviewBanner(E, !0, t);
            null != e && (0, d.o4)(e) && (new Image().src = e);
        }, [_, a, t, E]),
        { bannerSrc: r, status: f }
    );
}
