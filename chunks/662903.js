"use strict";
n.d(t, { Ay: () => _, Bu: () => l, OJ: () => o, XY: () => a });
var r = n(64700),
    i = n(771253),
    s = n(876230);
let a = 8e5,
    o = 20,
    l = 30,
    u = 3;
function c(e) {
    return null != e && e.split("?")[0].endsWith(".m3u8");
}
function d(e) {
    switch (e) {
        case i.Ay.ErrorTypes.NETWORK_ERROR:
            return s.SB.HLS_NETWORK_ERROR;
        case i.Ay.ErrorTypes.MEDIA_ERROR:
            return s.SB.HLS_MEDIA_ERROR;
        case i.Ay.ErrorTypes.MUX_ERROR:
            return s.SB.HLS_MUX_ERROR;
        case i.Ay.ErrorTypes.KEY_SYSTEM_ERROR:
            return s.SB.HLS_KEY_SYSTEM_ERROR;
        default:
            return s.SB.HLS_OTHER_ERROR;
    }
}
function _(e, t) {
    let { src: n, initialTimeSec: s = 0, onError: _, onHlsInstance: f } = t,
        h = r.useRef(null),
        p = r.useRef(s);
    p.current = s;
    let m = r.useRef(_),
        E = r.useRef(f);
    r.useEffect(() => {
        m.current = _;
    }, [_]),
        r.useEffect(() => {
            E.current = f;
        }, [f]);
    let g = c(n) && i.Ay.isSupported();
    return (
        r.useEffect(() => {
            if (!g || null == n || null == e.current) return;
            let t = e.current,
                r = new i.Ay({
                    backBufferLength: o,
                    maxBufferLength: l,
                    startPosition: p.current,
                    startFragPrefetch: !0,
                    startLevel: -1,
                });
            (h.current = r), E.current?.(r);
            let s = () => {
                    r.config.minAutoBitrate !== a && (r.config.minAutoBitrate = a);
                },
                c = 0,
                _ = (e, t) => {
                    if ((m.current?.(d(t.type), { errorDetails: t.details, fatal: t.fatal }), t.fatal)) {
                        if (c >= u) {
                            r.destroy(), (h.current = null), E.current?.(null);
                            return;
                        }
                        switch ((c++, t.type)) {
                            case i.Ay.ErrorTypes.NETWORK_ERROR:
                                r.startLoad();
                                break;
                            case i.Ay.ErrorTypes.MEDIA_ERROR:
                                r.recoverMediaError();
                                break;
                            default:
                                r.destroy(), (h.current = null), E.current?.(null);
                        }
                    }
                },
                f = () => {
                    r.mainForwardBufferInfo?.len === 0 &&
                        r.trigger(i.Ay.Events.BUFFER_FLUSHING, {
                            startOffset: t.currentTime,
                            endOffset: 1 / 0,
                            type: "video",
                        });
                };
            return (
                r.on(i.Ay.Events.FRAG_LOADING, s),
                r.on(i.Ay.Events.ERROR, _),
                t.addEventListener("seeking", f),
                r.loadSource(n),
                r.attachMedia(t),
                () => {
                    t.removeEventListener("seeking", f),
                        h.current === r && (r.destroy(), (h.current = null), E.current?.(null)),
                        t.removeAttribute("src"),
                        t.load();
                }
            );
        }, [g, n, e]),
        { isHlsActive: g, hlsRef: h }
    );
}
