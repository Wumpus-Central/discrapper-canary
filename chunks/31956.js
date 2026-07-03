n.d(t, { A: () => c });
var i = n(64700),
    r = n(702841),
    l = n(47675),
    s = n(590180);
function c(e) {
    let { skuId: t, openedAt: n, context: c, analyticsLocations: a } = e,
        o = (0, r.bG)([s.A], () => s.A.getProductFetch(t)),
        u = (0, i.useRef)(void 0),
        d = (0, i.useRef)(void 0),
        _ = (0, i.useRef)(void 0),
        I = (0, i.useRef)(!1);
    (0, i.useEffect)(() => {
        if (null == t || null == n) return;
        (d.current !== t || _.current !== n) &&
            ((d.current = t), (_.current = n), (I.current = !1), (u.current = void 0));
        let e = Date.now();
        (u.current ??= e - n),
            o?.state !== "success" ||
                I.current ||
                ((I.current = !0),
                (0, l.wd)({
                    profileUi: "PROFILE_FRAME",
                    timeToInteractiveMs: u.current,
                    timeToLoadMs: e - n,
                    timeToFetchMs: null != o.startedAt && null != o.endedAt ? o.endedAt - o.startedAt : void 0,
                    viewStartedAt: n,
                    fetchStartedAt: o.startedAt,
                    analyticsLocations: a,
                    ...c,
                }));
    }, [t, n, o]);
}
