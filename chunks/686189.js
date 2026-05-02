t.d(e, { A: () => n });
var _ = t(64700),
    a = t(885386),
    r = t(486020);
function n(E) {
    let { displayProfile: e, size: t, canAnimate: n, pendingBanner: R } = E,
        A = a.kt.getSetting(),
        s = e?.getPreviewBanner(R, n, t),
        [i, T] = (0, _.useState)(e?.banner == null ? "COMPLETE" : "SHOULD_LOAD");
    return (
        (0, _.useEffect)(() => {
            if (null == s || "SHOULD_LOAD" !== i) return;
            T("LOADING");
            let E = new Image();
            (E.src = s), (E.onload = () => T("COMPLETE"));
        }, [s, i]),
        (0, _.useEffect)(() => {
            if (A) return;
            let E = e?.getPreviewBanner(R, !0, t);
            null != E && (0, r.o4)(E) && (new Image().src = E);
        }, [A, e, t, R]),
        { bannerSrc: s, status: i }
    );
}
