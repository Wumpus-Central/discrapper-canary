"use strict";
n.d(t, { A: () => o });
var i = n(64700),
    r = n(702841),
    s = n(47675),
    a = n(590180);
function o(e) {
    let { skuId: t, openedAt: n, context: o, analyticsLocations: l } = e,
        u = (0, r.bG)([a.A], () => a.A.getProductFetch(t)),
        c = (0, i.useRef)(void 0);
    (0, i.useEffect)(() => {
        if (null == t) return;
        let e = Date.now();
        null == c.current && null != n && (c.current = e - n),
            u?.state === "success" &&
                (0, s.wd)({
                    profileUi: "PROFILE_FRAME",
                    timeToInteractiveMs: c.current,
                    timeToLoadMs: null != n ? e - n : void 0,
                    timeToFetchMs: u?.startedAt != null && u?.endedAt != null ? u.endedAt - u.startedAt : void 0,
                    viewStartedAt: n,
                    fetchStartedAt: u?.startedAt,
                    analyticsLocations: l,
                    ...o,
                });
    }, [t, u]);
}
