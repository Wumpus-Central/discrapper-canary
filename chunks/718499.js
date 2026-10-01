n.d(t, { Ay: () => c, Bu: () => s, OJ: () => o, XY: () => u });
var r = n(582128),
    l = n(876230),
    a = n(614269),
    i = n(53200);
let u = 8e5,
    o = 20,
    s = 30;
function c(e, t) {
    let { src: n, initialTimeSec: c = 0, onError: d, onHlsInstance: m, crossOrigin: f = "anonymous" } = t,
        p = r.useRef(null),
        [h, x] = r.useState(null),
        v = r.useRef(c);
    v.current = c;
    let g = r.useRef(d),
        E = r.useRef(m),
        b = r.useRef(f);
    ((b.current = f),
        r.useEffect(() => {
            g.current = d;
        }, [d]),
        r.useEffect(() => {
            E.current = m;
        }, [m]));
    let [y, S] = r.useState(!1),
        C = !y && a.u.isHlsUrl(n) && (0, i.Ap)();
    return (
        r.useEffect(() => {
            if (!C || null == n || null == e.current) return;
            let t = e.current,
                r = !1,
                a = null,
                c = null;
            return (
                (0, i.E)().then((e) => {
                    if (r) return;
                    if (!e.isSupported()) return void S(!0);
                    let i = (a = new e({
                        backBufferLength: o,
                        maxBufferLength: s,
                        startPosition: v.current,
                        startFragPrefetch: !0,
                        startLevel: -1,
                        xhrSetup: (e) => {
                            e.withCredentials = "use-credentials" === b.current;
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
                            })(b.current)),
                            new Request(e.url, t)
                        ),
                    }));
                    ((p.current = i), x(i), E.current?.(i));
                    let d = 0;
                    ((c = () => {
                        i.mainForwardBufferInfo?.len === 0 &&
                            i.trigger(e.Events.BUFFER_FLUSHING, {
                                startOffset: t.currentTime,
                                endOffset: 1 / 0,
                                type: "video",
                            });
                    }),
                        i.on(e.Events.FRAG_LOADING, function () {
                            i.config.minAutoBitrate !== u && (i.config.minAutoBitrate = u);
                        }),
                        i.on(e.Events.ERROR, function (t, n) {
                            if (
                                (g.current?.(
                                    (function (e, t) {
                                        switch (t) {
                                            case e.ErrorTypes.NETWORK_ERROR:
                                                return l.SB.HLS_NETWORK_ERROR;
                                            case e.ErrorTypes.MEDIA_ERROR:
                                                return l.SB.HLS_MEDIA_ERROR;
                                            case e.ErrorTypes.MUX_ERROR:
                                                return l.SB.HLS_MUX_ERROR;
                                            case e.ErrorTypes.KEY_SYSTEM_ERROR:
                                                return l.SB.HLS_KEY_SYSTEM_ERROR;
                                            default:
                                                return l.SB.HLS_OTHER_ERROR;
                                        }
                                    })(e, n.type),
                                    { errorDetails: n.details, fatal: n.fatal },
                                ),
                                n.fatal)
                            ) {
                                if (d >= 3) {
                                    (i.destroy(), (p.current = null), x(null), E.current?.(null));
                                    return;
                                }
                                switch ((d++, n.type)) {
                                    case e.ErrorTypes.NETWORK_ERROR:
                                        i.startLoad();
                                        break;
                                    case e.ErrorTypes.MEDIA_ERROR:
                                        i.recoverMediaError();
                                        break;
                                    default:
                                        (i.destroy(), (p.current = null), E.current?.(null));
                                }
                            }
                        }),
                        t.addEventListener("seeking", c),
                        i.loadSource(n),
                        i.attachMedia(t));
                }),
                () => {
                    ((r = !0),
                        null != c && t.removeEventListener("seeking", c),
                        null != a &&
                            (p.current === a && (a.destroy(), (p.current = null), x(null), E.current?.(null)),
                            t.removeAttribute("src"),
                            t.load()));
                }
            );
        }, [C, n, e]),
        { isHlsActive: C, hlsRef: p, hls: h }
    );
}
