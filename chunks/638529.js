t.d(n, { b: () => d }), t(321073);
var l = t(64700),
    r = t(311907),
    a = t(665171),
    i = t(588591),
    s = t(919481);
function d(e) {
    let n = (0, r.bG)([i.A], () => i.A.getRegionStateForPingUrl(e)),
        t = l.useRef(null),
        d = l.useCallback(
            async (n) => {
                if ("" === e) return;
                let l = [],
                    r = !1;
                try {
                    if (
                        (await new Promise((e, t) => {
                            let a = () => {
                                    n.readyState === WebSocket.OPEN && n.close();
                                },
                                i = setTimeout(() => {
                                    r || ((r = !0), a(), t(Error("WebSocket timeout")));
                                }, 5e3);
                            (n.onopen = () => {
                                if (n.readyState === WebSocket.OPEN)
                                    for (let e = 0; e < 3; e++) {
                                        let e = performance.now();
                                        n.send(e.toString());
                                    }
                            }),
                                (n.onmessage = (n) => {
                                    if (r) return;
                                    let t = parseFloat(n.data);
                                    if (!isNaN(t)) {
                                        let n = performance.now(),
                                            s = Math.round(n - t);
                                        l.push(s), l.length >= 3 && ((r = !0), clearTimeout(i), a(), e());
                                    }
                                }),
                                (n.onerror = () => {
                                    r || ((r = !0), clearTimeout(i), a(), t(Error("WebSocket error")));
                                }),
                                (n.onclose = () => {
                                    r || ((r = !0), clearTimeout(i), t(Error("WebSocket closed")));
                                });
                        }),
                        l.length > 0)
                    ) {
                        let n = Math.round(l.reduce((e, n) => e + n, 0) / l.length);
                        (0, a.QK)(e, { rtt: n, loading: !1, error: !1 });
                    } else throw Error("No successful pings");
                } catch (n) {
                    (0, a.QK)(e, { rtt: null, loading: !1, error: !0 });
                } finally {
                    t.current === n && (t.current = null);
                }
            },
            [e, t],
        );
    l.useEffect(
        () => () => {
            null != t.current && (t.current.close(), (t.current = null));
        },
        [],
    );
    let o = null != n;
    return (
        l.useEffect(() => {
            if ("" === e || o) return;
            let n = i.A.getRegionStateForPingUrl(e);
            if (n?.rtt != null || n?.loading === !0) return;
            (0, a.QK)(e, { rtt: null, loading: !0, error: !1 });
            let l = new WebSocket(`wss://${e}`);
            (t.current = l), d(l);
        }, [e, d, o]),
        {
            pingText: l.useMemo(
                () => (null == n || n.loading ? "—" : n.error ? "Error" : null !== n.rtt ? `${n.rtt}ms` : "—"),
                [n],
            ),
            pingCircleStyle: l.useMemo(() => {
                if (null == n || n.loading) return s.N5;
                if (n.error) return s.ZK;
                if (null !== n.rtt)
                    if (n.rtt < 50) return s.n5;
                    else if (n.rtt < 100) return s.mM;
                    else if (n.rtt < 200) return s.d9;
                    else return s.Rg;
            }, [n]),
        }
    );
}
