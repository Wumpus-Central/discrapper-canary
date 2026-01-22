n.d(t, {
    A: () => s,
}),
    n(896048);
var r = n(64700),
    i = n(253932),
    a = n(486020);

function s(e) {
    let { displayProfile: t, size: n, canAnimate: s, pendingBanner: o } = e,
        l = i.kt.getSetting(),
        c = null == t ? void 0 : t.getPreviewBanner(o, s, n),
        [u, d] = (0, r.useState)((null == t ? void 0 : t.banner) == null ? "COMPLETE" : "SHOULD_LOAD");
    return (
        (0, r.useEffect)(() => {
            if (null == c || "SHOULD_LOAD" !== u) return;
            d("LOADING");
            let e = new Image();
            (e.src = c), (e.onload = () => d("COMPLETE"));
        }, [c, u]),
        (0, r.useEffect)(() => {
            if (l) return;
            let e = null == t ? void 0 : t.getPreviewBanner(o, !0, n);
            null != e && (0, a.o4)(e) && (new Image().src = e);
        }, [l, t, n, o]),
        {
            bannerSrc: c,
            status: u,
        }
    );
}
