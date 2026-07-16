"use strict";
n.d(t, { Ay: () => c, Bu: () => d, OJ: () => o, XY: () => l });
var i = n(64700),
    r = n(876230),
    a = n(614269),
    s = n(53200);
let l = 8e5,
    o = 20,
    d = 30;
function c(e, t) {
    let { src: n, initialTimeSec: c = 0, onError: u, onHlsInstance: _, crossOrigin: E = "anonymous" } = t,
        A = i.useRef(null),
        [h, I] = i.useState(null),
        f = i.useRef(c);
    f.current = c;
    let p = i.useRef(u),
        T = i.useRef(_),
        m = i.useRef(E);
    (m.current = E),
        i.useEffect(() => {
            p.current = u;
        }, [u]),
        i.useEffect(() => {
            T.current = _;
        }, [_]);
    let [g, S] = i.useState(!1),
        N = !g && a.u.isHlsUrl(n) && (0, s.Ap)();
    return (
        i.useEffect(() => {
            if (!N || null == n || null == e.current) return;
            let t = e.current,
                i = !1,
                a = null,
                c = null;
            return (
                (0, s.E)().then((e) => {
                    if (i) return;
                    if (!e.isSupported()) return void S(!0);
                    let s = (a = new e({
                        backBufferLength: o,
                        maxBufferLength: d,
                        startPosition: f.current,
                        startFragPrefetch: !0,
                        startLevel: -1,
                        xhrSetup: (e) => {
                            e.withCredentials = "use-credentials" === m.current;
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
                            })(m.current)),
                            new Request(e.url, t)
                        ),
                    }));
                    (A.current = s), I(s), T.current?.(s);
                    let u = 0;
                    (c = () => {
                        s.mainForwardBufferInfo?.len === 0 &&
                            s.trigger(e.Events.BUFFER_FLUSHING, {
                                startOffset: t.currentTime,
                                endOffset: 1 / 0,
                                type: "video",
                            });
                    }),
                        s.on(e.Events.FRAG_LOADING, function () {
                            s.config.minAutoBitrate !== l && (s.config.minAutoBitrate = l);
                        }),
                        s.on(e.Events.ERROR, function (t, n) {
                            if (
                                (p.current?.(
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
                                if (u >= 3) {
                                    s.destroy(), (A.current = null), I(null), T.current?.(null);
                                    return;
                                }
                                switch ((u++, n.type)) {
                                    case e.ErrorTypes.NETWORK_ERROR:
                                        s.startLoad();
                                        break;
                                    case e.ErrorTypes.MEDIA_ERROR:
                                        s.recoverMediaError();
                                        break;
                                    default:
                                        s.destroy(), (A.current = null), T.current?.(null);
                                }
                            }
                        }),
                        t.addEventListener("seeking", c),
                        s.loadSource(n),
                        s.attachMedia(t);
                }),
                () => {
                    (i = !0),
                        null != c && t.removeEventListener("seeking", c),
                        null != a &&
                            (A.current === a && (a.destroy(), (A.current = null), I(null), T.current?.(null)),
                            t.removeAttribute("src"),
                            t.load());
                }
            );
        }, [N, n, e]),
        { isHlsActive: N, hlsRef: A, hls: h }
    );
}
