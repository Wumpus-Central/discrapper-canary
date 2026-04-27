n.d(t, { Ay: () => c, Bu: () => o, OJ: () => s, XY: () => u });
var r = n(64700),
    l = n(771253),
    a = n(876230),
    i = n(614269);
let u = 8e5,
    s = 20,
    o = 30;
function c(e, t) {
    let { src: n, initialTimeSec: c = 0, onError: d, onHlsInstance: m, crossOrigin: f = "anonymous" } = t,
        h = r.useRef(null),
        p = r.useRef(c);
    p.current = c;
    let E = r.useRef(d),
        v = r.useRef(m),
        x = r.useRef(f);
    (x.current = f),
        r.useEffect(() => {
            E.current = d;
        }, [d]),
        r.useEffect(() => {
            v.current = m;
        }, [m]);
    let b = i.u.isHlsUrl(n) && l.Ay.isSupported();
    return (
        r.useEffect(() => {
            if (!b || null == n || null == e.current) return;
            let t = e.current,
                r = new l.Ay({
                    backBufferLength: s,
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
            (h.current = r), v.current?.(r);
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
                    r.config.minAutoBitrate !== u && (r.config.minAutoBitrate = u);
                }),
                r.on(l.Ay.Events.ERROR, (e, t) => {
                    if (
                        (E.current?.(
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
                            r.destroy(), (h.current = null), v.current?.(null);
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
                                r.destroy(), (h.current = null), v.current?.(null);
                        }
                    }
                }),
                t.addEventListener("seeking", c),
                r.loadSource(n),
                r.attachMedia(t),
                () => {
                    t.removeEventListener("seeking", c),
                        h.current === r && (r.destroy(), (h.current = null), v.current?.(null)),
                        t.removeAttribute("src"),
                        t.load();
                }
            );
        }, [b, n, e]),
        { isHlsActive: b, hlsRef: h }
    );
}
