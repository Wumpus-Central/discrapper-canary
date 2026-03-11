n.d(t, { Ay: () => u, Bu: () => o, OJ: () => a, XY: () => s });
var r = n(64700),
    l = n(771253),
    i = n(876230);
let s = 8e5,
    a = 20,
    o = 30;
function u(e, t) {
    let { src: n, initialTimeSec: u = 0, onError: c, onHlsInstance: d } = t,
        m = r.useRef(null),
        p = r.useRef(u);
    p.current = u;
    let f = r.useRef(c),
        E = r.useRef(d);
    r.useEffect(() => {
        f.current = c;
    }, [c]),
        r.useEffect(() => {
            E.current = d;
        }, [d]);
    let h = null != n && n.split("?")[0].endsWith(".m3u8") && l.Ay.isSupported();
    return (
        r.useEffect(() => {
            if (!h || null == n || null == e.current) return;
            let t = e.current,
                r = new l.Ay({
                    backBufferLength: a,
                    maxBufferLength: o,
                    startPosition: p.current,
                    startFragPrefetch: !0,
                    startLevel: -1,
                });
            (m.current = r), E.current?.(r);
            let u = 0,
                c = () => {
                    r.mainForwardBufferInfo?.len === 0 &&
                        r.trigger(l.Ay.Events.BUFFER_FLUSHING, {
                            startOffset: t.currentTime,
                            endOffset: 1 / 0,
                            type: "video",
                        });
                };
            return (
                r.on(l.Ay.Events.FRAG_LOADING, () => {
                    r.config.minAutoBitrate !== s && (r.config.minAutoBitrate = s);
                }),
                r.on(l.Ay.Events.ERROR, (e, t) => {
                    if (
                        (f.current?.(
                            (function (e) {
                                switch (e) {
                                    case l.Ay.ErrorTypes.NETWORK_ERROR:
                                        return i.SB.HLS_NETWORK_ERROR;
                                    case l.Ay.ErrorTypes.MEDIA_ERROR:
                                        return i.SB.HLS_MEDIA_ERROR;
                                    case l.Ay.ErrorTypes.MUX_ERROR:
                                        return i.SB.HLS_MUX_ERROR;
                                    case l.Ay.ErrorTypes.KEY_SYSTEM_ERROR:
                                        return i.SB.HLS_KEY_SYSTEM_ERROR;
                                    default:
                                        return i.SB.HLS_OTHER_ERROR;
                                }
                            })(t.type),
                            { errorDetails: t.details, fatal: t.fatal },
                        ),
                        t.fatal)
                    ) {
                        if (u >= 3) {
                            r.destroy(), (m.current = null), E.current?.(null);
                            return;
                        }
                        switch ((u++, t.type)) {
                            case l.Ay.ErrorTypes.NETWORK_ERROR:
                                r.startLoad();
                                break;
                            case l.Ay.ErrorTypes.MEDIA_ERROR:
                                r.recoverMediaError();
                                break;
                            default:
                                r.destroy(), (m.current = null), E.current?.(null);
                        }
                    }
                }),
                t.addEventListener("seeking", c),
                r.loadSource(n),
                r.attachMedia(t),
                () => {
                    t.removeEventListener("seeking", c),
                        m.current === r && (r.destroy(), (m.current = null), E.current?.(null));
                }
            );
        }, [h, n, e]),
        { isHlsActive: h, hlsRef: m }
    );
}
