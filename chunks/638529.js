n.d(t, { b: () => d }), n(321073);
var l = n(64700),
    r = n(311907),
    a = n(665171),
    i = n(588591),
    s = n(182505);
function d(e) {
    let t = (0, r.bG)([i.A], () => i.A.getRegionStateForPingUrl(e)),
        n = l.useRef(null),
        d = l.useCallback(
            async (t) => {
                if ("" === e) return;
                let l = [],
                    r = !1;
                try {
                    if (
                        (await new Promise((e, n) => {
                            let a = () => {
                                    t.readyState === WebSocket.OPEN && t.close();
                                },
                                i = setTimeout(() => {
                                    r || ((r = !0), a(), n(Error("WebSocket timeout")));
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
                                            s = Math.round(t - n);
                                        l.push(s), l.length >= 3 && ((r = !0), clearTimeout(i), a(), e());
                                    }
                                }),
                                (t.onerror = () => {
                                    r || ((r = !0), clearTimeout(i), a(), n(Error("WebSocket error")));
                                }),
                                (t.onclose = () => {
                                    r || ((r = !0), clearTimeout(i), n(Error("WebSocket closed")));
                                });
                        }),
                        l.length > 0)
                    ) {
                        let t = Math.round(l.reduce((e, t) => e + t, 0) / l.length);
                        (0, a.QK)(e, { rtt: t, loading: !1, error: !1 });
                    } else throw Error("No successful pings");
                } catch (t) {
                    (0, a.QK)(e, { rtt: null, loading: !1, error: !0 });
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
    let o = null != t;
    return (
        l.useEffect(() => {
            if ("" === e || o) return;
            let t = i.A.getRegionStateForPingUrl(e);
            if (t?.rtt != null || t?.loading === !0) return;
            (0, a.QK)(e, { rtt: null, loading: !0, error: !1 });
            let l = new WebSocket(`wss://${e}`);
            (n.current = l), d(l);
        }, [e, d, o]),
        {
            pingText: l.useMemo(
                () => (null == t || t.loading ? "—" : t.error ? "Error" : null !== t.rtt ? `${t.rtt}ms` : "—"),
                [t],
            ),
            pingCircleStyle: l.useMemo(() => {
                if (null == t || t.loading) return s.N5;
                if (t.error) return s.ZK;
                if (null !== t.rtt)
                    if (t.rtt < 50) return s.n5;
                    else if (t.rtt < 100) return s.mM;
                    else if (t.rtt < 200) return s.d9;
                    else return s.Rg;
            }, [t]),
        }
    );
}
