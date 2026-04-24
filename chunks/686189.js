r.d(t, { A: () => s });
var n = r(64700),
    E = r(253932),
    l = r(486020);
function s(e) {
    let { displayProfile: t, size: r, canAnimate: s, pendingBanner: a } = e,
        o = E.kt.getSetting(),
        _ = t?.getPreviewBanner(a, s, r),
        [i, u] = (0, n.useState)(t?.banner == null ? "COMPLETE" : "SHOULD_LOAD");
    return (
        (0, n.useEffect)(() => {
            if (null == _ || "SHOULD_LOAD" !== i) return;
            u("LOADING");
            let e = new Image();
            (e.src = _), (e.onload = () => u("COMPLETE"));
        }, [_, i]),
        (0, n.useEffect)(() => {
            if (o) return;
            let e = t?.getPreviewBanner(a, !0, r);
            null != e && (0, l.o4)(e) && (new Image().src = e);
        }, [o, t, r, a]),
        { bannerSrc: _, status: i }
    );
}
