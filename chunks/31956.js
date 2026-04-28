u.d(e, { A: () => l });
var n = u(64700),
    r = u(702841),
    d = u(47675),
    c = u(590180);
function l(t) {
    let { skuId: e, openedAt: u, context: l, analyticsLocations: s } = t,
        i = (0, r.bG)([c.A], () => c.A.getProductFetch(e)),
        a = (0, n.useRef)(void 0);
    (0, n.useEffect)(() => {
        if (null == e) return;
        let t = Date.now();
        null == a.current && null != u && (a.current = t - u),
            i?.state === "success" &&
                (0, d.wd)({
                    profileUi: "PROFILE_FRAME",
                    timeToInteractiveMs: a.current,
                    timeToLoadMs: null != u ? t - u : void 0,
                    timeToFetchMs: i?.startedAt != null && i?.endedAt != null ? i.endedAt - i.startedAt : void 0,
                    viewStartedAt: u,
                    fetchStartedAt: i?.startedAt,
                    analyticsLocations: s,
                    ...l,
                });
    }, [e, i]);
}
