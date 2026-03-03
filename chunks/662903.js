n.d(t, { A: () => s });
var r = n(64700),
    l = n(771253),
    i = n(876230);
function s(e, t) {
    let { src: n, initialTimeSec: s = 0, onError: a } = t,
        o = r.useRef(null),
        u = r.useRef(s);
    u.current = s;
    let c = r.useRef(a);
    r.useEffect(() => {
        c.current = a;
    }, [a]);
    let d = null != n && n.split("?")[0].endsWith(".m3u8") && l.Ay.isSupported();
    return (
        r.useEffect(() => {
            if (!d || null == n || null == e.current) return;
            let t = e.current,
                r = new l.Ay({
                    backBufferLength: 20,
                    maxBufferLength: 30,
                    startPosition: u.current,
                    startFragPrefetch: !0,
                    startLevel: -1,
                });
            o.current = r;
            let s = 0,
                a = () => {
                    r.mainForwardBufferInfo?.len === 0 &&
                        r.trigger(l.Ay.Events.BUFFER_FLUSHING, {
                            startOffset: t.currentTime,
                            endOffset: 1 / 0,
                            type: "video",
                        });
                };
            return (
                r.on(l.Ay.Events.FRAG_LOADING, () => {
                    8e5 !== r.config.minAutoBitrate && (r.config.minAutoBitrate = 8e5);
                }),
                r.on(l.Ay.Events.ERROR, (e, t) => {
                    if (
                        (c.current?.(
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
                        ),
                        t.fatal)
                    ) {
                        if (s >= 3) {
                            r.destroy(), (o.current = null);
                            return;
                        }
                        switch ((s++, t.type)) {
                            case l.Ay.ErrorTypes.NETWORK_ERROR:
                                r.startLoad();
                                break;
                            case l.Ay.ErrorTypes.MEDIA_ERROR:
                                r.recoverMediaError();
                                break;
                            default:
                                r.destroy(), (o.current = null);
                        }
                    }
                }),
                t.addEventListener("seeking", a),
                r.loadSource(n),
                r.attachMedia(t),
                () => {
                    t.removeEventListener("seeking", a), r.destroy(), (o.current = null);
                }
            );
        }, [d, n, e]),
        { isHlsActive: d, hlsRef: o }
    );
}
