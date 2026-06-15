n.d(t, { Ay: () => c, Bu: () => o, OJ: () => u, XY: () => s });
var r = n(64700),
    l = n(771253),
    a = n(876230),
    i = n(614269);
let s = 8e5,
    u = 20,
    o = 30;
function c(e, t) {
    let { src: n, initialTimeSec: c = 0, onError: d, onHlsInstance: m, crossOrigin: h = "anonymous" } = t,
        f = r.useRef(null),
        p = r.useRef(c);
    p.current = c;
    let v = r.useRef(d),
        g = r.useRef(m),
        x = r.useRef(h);
    (x.current = h),
        r.useEffect(() => {
            v.current = d;
        }, [d]),
        r.useEffect(() => {
            g.current = m;
        }, [m]);
    let E = i.u.isHlsUrl(n) && l.Ay.isSupported();
    return (
        r.useEffect(() => {
            if (!E || null == n || null == e.current) return;
            let t = e.current,
                r = new l.Ay({
                    backBufferLength: u,
                    maxBufferLength: o,
                    startPosition: p.current,
                    startFragPrefetch: !0,
                    startLevel: -1,
                    xhrSetup: (e) => {
                        e.withCredentials = "use-credentials" === x.current;
                    },
                    fetchSetup: (e, t) => (
                        (t.credentials = (function (e) {
                            switch (e) {
                                case "use-credentials":
                                    return "include";
                                case "anonymous":
                                case null:
                                    return "same-origin";
                            }
                        })(x.current)),
                        new Request(e.url, t)
                    ),
                });
            (f.current = r), g.current?.(r);
            let i = 0,
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
                        (v.current?.(
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
                        if (i >= 3) {
                            r.destroy(), (f.current = null), g.current?.(null);
                            return;
                        }
                        switch ((i++, t.type)) {
                            case l.Ay.ErrorTypes.NETWORK_ERROR:
                                r.startLoad();
                                break;
                            case l.Ay.ErrorTypes.MEDIA_ERROR:
                                r.recoverMediaError();
                                break;
                            default:
                                r.destroy(), (f.current = null), g.current?.(null);
                        }
                    }
                }),
                t.addEventListener("seeking", c),
                r.loadSource(n),
                r.attachMedia(t),
                () => {
                    t.removeEventListener("seeking", c),
                        f.current === r && (r.destroy(), (f.current = null), g.current?.(null)),
                        t.removeAttribute("src"),
                        t.load();
                }
            );
        }, [E, n, e]),
        { isHlsActive: E, hlsRef: f }
    );
}
