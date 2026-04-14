n.d(t, { Ay: () => o, Bu: () => u, OJ: () => s, XY: () => i });
var r = n(64700),
    l = n(771253),
    a = n(876230);
let i = 8e5,
    s = 20,
    u = 30;
function o(e, t) {
    let { src: n, initialTimeSec: o = 0, onError: c, onHlsInstance: d } = t,
        m = r.useRef(null),
        f = r.useRef(o);
    f.current = o;
    let h = r.useRef(c),
        p = r.useRef(d);
    r.useEffect(() => {
        h.current = c;
    }, [c]),
        r.useEffect(() => {
            p.current = d;
        }, [d]);
    let x = null != n && n.split("?")[0].endsWith(".m3u8") && l.Ay.isSupported();
    return (
        r.useEffect(() => {
            if (!x || null == n || null == e.current) return;
            let t = e.current,
                r = new l.Ay({
                    backBufferLength: s,
                    maxBufferLength: u,
                    startPosition: f.current,
                    startFragPrefetch: !0,
                    startLevel: -1,
                });
            (m.current = r), p.current?.(r);
            let o = 0,
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
                    r.config.minAutoBitrate !== i && (r.config.minAutoBitrate = i);
                }),
                r.on(l.Ay.Events.ERROR, (e, t) => {
                    if (
                        (h.current?.(
                            (function (e) {
                                switch (e) {
                                    case l.Ay.ErrorTypes.NETWORK_ERROR:
                                        return a.SB.HLS_NETWORK_ERROR;
                                    case l.Ay.ErrorTypes.MEDIA_ERROR:
                                        return a.SB.HLS_MEDIA_ERROR;
                                    case l.Ay.ErrorTypes.MUX_ERROR:
                                        return a.SB.HLS_MUX_ERROR;
                                    case l.Ay.ErrorTypes.KEY_SYSTEM_ERROR:
                                        return a.SB.HLS_KEY_SYSTEM_ERROR;
                                    default:
                                        return a.SB.HLS_OTHER_ERROR;
                                }
                            })(t.type),
                            { errorDetails: t.details, fatal: t.fatal },
                        ),
                        t.fatal)
                    ) {
                        if (o >= 3) {
                            r.destroy(), (m.current = null), p.current?.(null);
                            return;
                        }
                        switch ((o++, t.type)) {
                            case l.Ay.ErrorTypes.NETWORK_ERROR:
                                r.startLoad();
                                break;
                            case l.Ay.ErrorTypes.MEDIA_ERROR:
                                r.recoverMediaError();
                                break;
                            default:
                                r.destroy(), (m.current = null), p.current?.(null);
                        }
                    }
                }),
                t.addEventListener("seeking", c),
                r.loadSource(n),
                r.attachMedia(t),
                () => {
                    t.removeEventListener("seeking", c),
                        m.current === r && (r.destroy(), (m.current = null), p.current?.(null)),
                        t.removeAttribute("src"),
                        t.load();
                }
            );
        }, [x, n, e]),
        { isHlsActive: x, hlsRef: m }
    );
}
