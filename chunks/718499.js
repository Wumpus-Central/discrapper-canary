"use strict";
n.d(t, { Ay: () => c, Bu: () => u, OJ: () => l, XY: () => o });
var i = n(64700),
    r = n(876230),
    s = n(614269),
    a = n(53200);
let o = 8e5,
    l = 20,
    u = 30;
function c(e, t) {
    let { src: n, initialTimeSec: c = 0, onError: d, onHlsInstance: _, crossOrigin: h = "anonymous" } = t,
        f = i.useRef(null),
        [E, p] = i.useState(null),
        m = i.useRef(c);
    m.current = c;
    let g = i.useRef(d),
        A = i.useRef(_),
        I = i.useRef(h);
    (I.current = h),
        i.useEffect(() => {
            g.current = d;
        }, [d]),
        i.useEffect(() => {
            A.current = _;
        }, [_]);
    let [T, S] = i.useState(!1),
        N = !T && s.u.isHlsUrl(n) && (0, a.Ap)();
    return (
        i.useEffect(() => {
            if (!N || null == n || null == e.current) return;
            let t = e.current,
                i = !1,
                s = null,
                c = null;
            return (
                (0, a.E)().then((e) => {
                    if (i) return;
                    if (!e.isSupported()) return void S(!0);
                    let a = (s = new e({
                        backBufferLength: l,
                        maxBufferLength: u,
                        startPosition: m.current,
                        startFragPrefetch: !0,
                        startLevel: -1,
                        xhrSetup: (e) => {
                            e.withCredentials = "use-credentials" === I.current;
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
                            })(I.current)),
                            new Request(e.url, t)
                        ),
                    }));
                    (f.current = a), p(a), A.current?.(a);
                    let d = 0;
                    (c = () => {
                        a.mainForwardBufferInfo?.len === 0 &&
                            a.trigger(e.Events.BUFFER_FLUSHING, {
                                startOffset: t.currentTime,
                                endOffset: 1 / 0,
                                type: "video",
                            });
                    }),
                        a.on(e.Events.FRAG_LOADING, () => {
                            a.config.minAutoBitrate !== o && (a.config.minAutoBitrate = o);
                        }),
                        a.on(e.Events.ERROR, (t, n) => {
                            if (
                                (g.current?.(
                                    (function (e, t) {
                                        switch (t) {
                                            case e.ErrorTypes.NETWORK_ERROR:
                                                return r.SB.HLS_NETWORK_ERROR;
                                            case e.ErrorTypes.MEDIA_ERROR:
                                                return r.SB.HLS_MEDIA_ERROR;
                                            case e.ErrorTypes.MUX_ERROR:
                                                return r.SB.HLS_MUX_ERROR;
                                            case e.ErrorTypes.KEY_SYSTEM_ERROR:
                                                return r.SB.HLS_KEY_SYSTEM_ERROR;
                                            default:
                                                return r.SB.HLS_OTHER_ERROR;
                                        }
                                    })(e, n.type),
                                    { errorDetails: n.details, fatal: n.fatal },
                                ),
                                n.fatal)
                            ) {
                                if (d >= 3) {
                                    a.destroy(), (f.current = null), p(null), A.current?.(null);
                                    return;
                                }
                                switch ((d++, n.type)) {
                                    case e.ErrorTypes.NETWORK_ERROR:
                                        a.startLoad();
                                        break;
                                    case e.ErrorTypes.MEDIA_ERROR:
                                        a.recoverMediaError();
                                        break;
                                    default:
                                        a.destroy(), (f.current = null), A.current?.(null);
                                }
                            }
                        }),
                        t.addEventListener("seeking", c),
                        a.loadSource(n),
                        a.attachMedia(t);
                }),
                () => {
                    (i = !0),
                        null != c && t.removeEventListener("seeking", c),
                        null != s &&
                            (f.current === s && (s.destroy(), (f.current = null), p(null), A.current?.(null)),
                            t.removeAttribute("src"),
                            t.load());
                }
            );
        }, [N, n, e]),
        { isHlsActive: N, hlsRef: f, hls: E }
    );
}
