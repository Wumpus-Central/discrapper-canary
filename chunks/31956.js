var i = n(582128),
    s = n(164636),
    r = n(741534),
    l = n(590180);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { skuId: t, openedAt: n, context: c, analyticsLocations: a } = e,
                o = (0, s.bG)([l.A], () => l.A.getProductFetch(t)),
                d = (0, i.useRef)(void 0),
                u = (0, i.useRef)(void 0),
                _ = (0, i.useRef)(void 0),
                I = (0, i.useRef)(!1);
            (0, i.useEffect)(() => {
                if (null == t || null == n) return;
                (u.current !== t || _.current !== n) &&
                    ((u.current = t), (_.current = n), (I.current = !1), (d.current = void 0));
                let e = Date.now();
                ((d.current ??= e - n),
                    o?.state !== "success" ||
                        I.current ||
                        ((I.current = !0),
                        (0, r.wd)({
                            profileUi: "PROFILE_FRAME",
                            timeToInteractiveMs: d.current,
                            timeToLoadMs: e - n,
                            timeToFetchMs: null != o.startedAt && null != o.endedAt ? o.endedAt - o.startedAt : void 0,
                            viewStartedAt: n,
                            fetchStartedAt: o.startedAt,
                            analyticsLocations: a,
                            ...c,
                        })));
            }, [t, n, o]);
        },
    },
);
