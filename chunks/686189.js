e.d(_, { A: () => r });
var t = e(64700),
    R = e(253932),
    A = e(486020);
function r(E) {
    let { displayProfile: _, size: e, canAnimate: r, pendingBanner: s } = E,
        T = R.kt.getSetting(),
        n = _?.getPreviewBanner(s, r, e),
        [N, a] = (0, t.useState)(_?.banner == null ? "COMPLETE" : "SHOULD_LOAD");
    return (
        (0, t.useEffect)(() => {
            if (null == n || "SHOULD_LOAD" !== N) return;
            a("LOADING");
            let E = new Image();
            (E.src = n), (E.onload = () => a("COMPLETE"));
        }, [n, N]),
        (0, t.useEffect)(() => {
            if (T) return;
            let E = _?.getPreviewBanner(s, !0, e);
            null != E && (0, A.o4)(E) && (new Image().src = E);
        }, [T, _, e, s]),
        { bannerSrc: n, status: N }
    );
}
