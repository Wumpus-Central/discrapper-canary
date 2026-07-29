t.d(r, { b: () => a }), t(321073);
var n = t(582128),
    l = t(17928),
    o = t(498480),
    i = t(42957),
    u = t(67539);
function a(e) {
    let r = (0, l.bG)([i.A], () => i.A.getRegionStateForPingUrl(e)),
        t = n.useRef(null),
        a = n.useCallback(
            async (r) => {
                if ("" === e) return;
                let n = [],
                    l = !1;
                try {
                    if (
                        (await new Promise((e, t) => {
                            function o() {
                                r.readyState === WebSocket.OPEN && r.close();
                            }
                            let i = setTimeout(() => {
                                l || ((l = !0), o(), t(Error("WebSocket timeout")));
                            }, 5e3);
                            (r.onopen = () => {
                                if (r.readyState === WebSocket.OPEN)
                                    for (let e = 0; e < 3; e++) {
                                        let e = performance.now();
                                        r.send(e.toString());
                                    }
                            }),
                                (r.onmessage = (r) => {
                                    if (l) return;
                                    let t = parseFloat(r.data);
                                    if (!isNaN(t)) {
                                        let r = performance.now(),
                                            u = Math.round(r - t);
                                        n.push(u), n.length >= 3 && ((l = !0), clearTimeout(i), o(), e());
                                    }
                                }),
                                (r.onerror = () => {
                                    l || ((l = !0), clearTimeout(i), o(), t(Error("WebSocket error")));
                                }),
                                (r.onclose = () => {
                                    l || ((l = !0), clearTimeout(i), t(Error("WebSocket closed")));
                                });
                        }),
                        n.length > 0)
                    ) {
                        let r = Math.round(n.reduce((e, r) => e + r, 0) / n.length);
                        (0, o.QK)(e, { rtt: r, loading: !1, error: !1 });
                    } else throw Error("No successful pings");
                } catch (r) {
                    (0, o.QK)(e, { rtt: null, loading: !1, error: !0 });
                } finally {
                    t.current === r && (t.current = null);
                }
            },
            [e, t],
        );
    n.useEffect(
        () => () => {
            null != t.current && (t.current.close(), (t.current = null));
        },
        [],
    );
    let s = null != r;
    return (
        n.useEffect(() => {
            if ("" === e || s) return;
            let r = i.A.getRegionStateForPingUrl(e);
            if (r?.rtt != null || r?.loading === !0) return;
            (0, o.QK)(e, { rtt: null, loading: !0, error: !1 });
            let n = new WebSocket(`wss://${e}`);
            (t.current = n), a(n);
        }, [e, a, s]),
        {
            pingText: n.useMemo(
                () =>
                    null == r || r.loading ? "\u2014" : r.error ? "Error" : null !== r.rtt ? `${r.rtt}ms` : "\u2014",
                [r],
            ),
            pingCircleStyle: n.useMemo(() => {
                if (null == r || r.loading) return u.N5;
                if (r.error) return u.ZK;
                if (null !== r.rtt)
                    if (r.rtt < 50) return u.n5;
                    else if (r.rtt < 100) return u.mM;
                    else if (r.rtt < 200) return u.d9;
                    else return u.Rg;
            }, [r]),
        }
    );
}
