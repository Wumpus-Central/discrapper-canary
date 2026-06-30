"use strict";
n.d(t, { A: () => o });
var i = n(64700),
    r = n(702841),
    s = n(47675),
    a = n(590180);
function o(e) {
    let { skuId: t, openedAt: n, context: o, analyticsLocations: l } = e,
        u = (0, r.bG)([a.A], () => a.A.getProductFetch(t)),
        c = (0, i.useRef)(void 0),
        d = (0, i.useRef)(void 0),
        _ = (0, i.useRef)(void 0),
        h = (0, i.useRef)(!1);
    (0, i.useEffect)(() => {
        if (null == t || null == n) return;
        (d.current !== t || _.current !== n) &&
            ((d.current = t), (_.current = n), (h.current = !1), (c.current = void 0));
        let e = Date.now();
        (c.current ??= e - n),
            u?.state !== "success" ||
                h.current ||
                ((h.current = !0),
                (0, s.wd)({
                    profileUi: "PROFILE_FRAME",
                    timeToInteractiveMs: c.current,
                    timeToLoadMs: e - n,
                    timeToFetchMs: null != u.startedAt && null != u.endedAt ? u.endedAt - u.startedAt : void 0,
                    viewStartedAt: n,
                    fetchStartedAt: u.startedAt,
                    analyticsLocations: l,
                    ...o,
                }));
    }, [t, n, u]);
}
