i.d(t, { A: () => a });
var n = i(64700),
    s = i(702841),
    r = i(47675),
    l = i(590180);
function a(e) {
    let { skuId: t, openedAt: i, context: a, analyticsLocations: c } = e,
        o = (0, s.bG)([l.A], () => l.A.getProductFetch(t)),
        d = (0, n.useRef)(void 0);
    (0, n.useEffect)(() => {
        if (null == t) return;
        let e = Date.now();
        null == d.current && null != i && (d.current = e - i),
            o?.state === "success" &&
                (0, r.wd)({
                    profileUi: "PROFILE_FRAME",
                    timeToInteractiveMs: d.current,
                    timeToLoadMs: null != i ? e - i : void 0,
                    timeToFetchMs: o?.startedAt != null && o?.endedAt != null ? o.endedAt - o.startedAt : void 0,
                    viewStartedAt: i,
                    fetchStartedAt: o?.startedAt,
                    analyticsLocations: c,
                    ...a,
                });
    }, [t, o]);
}
