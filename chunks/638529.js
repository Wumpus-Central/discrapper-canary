n.d(t, { b: () => d }), n(321073);
var l = n(64700),
    r = n(311907),
    i = n(665171),
    s = n(588591),
    a = n(513246);
function d(e) {
    let t = (0, r.bG)([s.A], () => s.A.getRegionStateForPingUrl(e)),
        n = l.useRef(null),
        d = l.useCallback(
            async (t) => {
                if ("" === e) return;
                let l = [],
                    r = !1;
                try {
                    if (
                        (await new Promise((e, n) => {
                            let i = () => {
                                    t.readyState === WebSocket.OPEN && t.close();
                                },
                                s = setTimeout(() => {
                                    r || ((r = !0), i(), n(Error("WebSocket timeout")));
                                }, 5e3);
                            (t.onopen = () => {
                                if (t.readyState === WebSocket.OPEN)
                                    for (let e = 0; e < 3; e++) {
                                        let e = performance.now();
                                        t.send(e.toString());
                                    }
                            }),
                                (t.onmessage = (t) => {
                                    if (r) return;
                                    let n = parseFloat(t.data);
                                    if (!isNaN(n)) {
                                        let t = performance.now(),
                                            a = Math.round(t - n);
                                        l.push(a), !r && l.length >= 3 && ((r = !0), clearTimeout(s), i(), e());
                                    }
                                }),
                                (t.onerror = () => {
                                    r || ((r = !0), clearTimeout(s), i(), n(Error("WebSocket error")));
                                }),
                                (t.onclose = () => {
                                    r || ((r = !0), clearTimeout(s), n(Error("WebSocket closed")));
                                });
                        }),
                        l.length > 0)
                    ) {
                        let t = Math.round(l.reduce((e, t) => e + t, 0) / l.length);
                        (0, i.QK)(e, { rtt: t, loading: !1, error: !1 });
                    } else throw Error("No successful pings");
                } catch (t) {
                    (0, i.QK)(e, { rtt: null, loading: !1, error: !0 });
                } finally {
                    n.current === t && (n.current = null);
                }
            },
            [e, n],
        );
    l.useEffect(
        () => () => {
            null != n.current && (n.current.close(), (n.current = null));
        },
        [],
    );
    let c = null != t;
    return (
        l.useEffect(() => {
            if ("" === e || c) return;
            let t = s.A.getRegionStateForPingUrl(e);
            if (t?.rtt != null || t?.loading === !0) return;
            (0, i.QK)(e, { rtt: null, loading: !0, error: !1 });
            let l = new WebSocket(`wss://${e}`);
            (n.current = l), d(l);
        }, [e, d, c]),
        {
            pingText: l.useMemo(
                () => (null == t || t.loading ? "—" : t.error ? "Error" : null !== t.rtt ? `${t.rtt}ms` : "—"),
                [t],
            ),
            pingCircleStyle: l.useMemo(() => {
                if (null == t || t.loading) return a.N5;
                if (t.error) return a.ZK;
                if (null !== t.rtt)
                    if (t.rtt < 50) return a.n5;
                    else if (t.rtt < 100) return a.mM;
                    else if (t.rtt < 200) return a.d9;
                    else return a.Rg;
            }, [t]),
        }
    );
}
