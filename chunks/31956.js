"use strict";
n.d(t, { A: () => s });
var i = n(64700),
    l = n(702841),
    r = n(47675),
    a = n(590180);
function s(e) {
    let { skuId: t, openedAt: n, context: s, analyticsLocations: o } = e,
        c = (0, l.bG)([a.A], () => a.A.getProductFetch(t)),
        d = (0, i.useRef)(void 0);
    (0, i.useEffect)(() => {
        if (null == t) return;
        let e = Date.now();
        null == d.current && null != n && (d.current = e - n),
            c?.state === "success" &&
                (0, r.wd)({
                    profileUi: "PROFILE_FRAME",
                    timeToInteractiveMs: d.current,
                    timeToLoadMs: null != n ? e - n : void 0,
                    timeToFetchMs: c?.startedAt != null && c?.endedAt != null ? c.endedAt - c.startedAt : void 0,
                    viewStartedAt: n,
                    fetchStartedAt: c?.startedAt,
                    analyticsLocations: o,
                    ...s,
                });
    }, [t, c]);
}
