t.d(n, { i: () => s }), t(415506), t(539854);
var i = t(647438),
    r = t(442837),
    a = t(744993),
    l = t(166098),
    o = t(149671);
function s(e) {
    let n = (0, r.e7)([l.Z], () => l.Z.getLocationStateForPingUrl(e)),
        t = i.useRef(null),
        s = i.useCallback(
            async (n) => {
                if (null == e) return;
                let i = [],
                    r = !1;
                try {
                    if (
                        (await new Promise((e, t) => {
                            let a = () => {
                                    n.readyState === WebSocket.OPEN && n.close();
                                },
                                l = setTimeout(() => {
                                    r || ((r = !0), a(), t(Error("WebSocket timeout")));
                                }, 5000);
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
                                            o = Math.round(n - t);
                                        i.push(o), !r && i.length >= 3 && ((r = !0), clearTimeout(l), a(), e());
                                    }
                                }),
                                (n.onerror = () => {
                                    r || ((r = !0), clearTimeout(l), a(), t(Error("WebSocket error")));
                                }),
                                (n.onclose = () => {
                                    r || ((r = !0), clearTimeout(l), t(Error("WebSocket closed")));
                                });
                        }),
                        i.length > 0)
                    ) {
                        let n = Math.round(i.reduce((e, n) => e + n, 0) / i.length);
                        (0, a.LG)(e, {
                            rtt: n,
                            loading: !1,
                            error: !1,
                        });
                    } else throw Error("No successful pings");
                } catch (n) {
                    (0, a.LG)(e, {
                        rtt: null,
                        loading: !1,
                        error: !0,
                    });
                } finally {
                    t.current === n && (t.current = null);
                }
            },
            [e, t],
        );
    i.useEffect(
        () => () => {
            null != t.current && (t.current.close(), (t.current = null));
        },
        [],
    );
    let c = null != n;
    return (
        i.useEffect(() => {
            if (null == e || c) return;
            let n = l.Z.getLocationStateForPingUrl(e);
            if ((null == n ? void 0 : n.rtt) != null || (null == n ? void 0 : n.loading) === !0) return;
            (0, a.LG)(e, {
                rtt: null,
                loading: !0,
                error: !1,
            });
            let i = new WebSocket("wss://".concat(e));
            (t.current = i), s(i);
        }, [e, s, c]),
        {
            pingText: i.useMemo(
                () =>
                    null == n || n.loading
                        ? "\u2014"
                        : n.error
                          ? "Error"
                          : null !== n.rtt
                            ? "".concat(n.rtt, "ms")
                            : "\u2014",
                [n],
            ),
            pingCircleStyle: i.useMemo(() => {
                if (null == n || n.loading) return o.pingCircleLoading;
                if (n.error) return o.pingCircleError;
                if (null !== n.rtt)
                    if (n.rtt < 50) return o.pingCircleExcellent;
                    else if (n.rtt < 100) return o.pingCircleGood;
                    else if (n.rtt < 200) return o.pingCircleFair;
                    else return o.pingCirclePoor;
            }, [n]),
        }
    );
}
