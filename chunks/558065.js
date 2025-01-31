n.d(t, { Z: () => h }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(665443),
    s = n.n(a),
    o = n(259443),
    l = n(992774);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let c = new o.Yd('DirectVideo');
class d {
    addref() {
        this.refcount++;
    }
    release() {
        return this.refcount--, 0 === this.refcount;
    }
    constructor(e) {
        u(this, 'refcount', void 0), u(this, 'stream', void 0), (this.refcount = 1), (this.stream = window.createDiscordStream(e));
    }
}
let f = new Map();
function _(e) {
    let t = f.get(e);
    return null == t ? ((t = new d(e)), (0, l.zS)().addDirectVideoOutputSink(e), f.set(e, t)) : t.addref(), t.stream;
}
function p(e) {
    let t = f.get(e);
    null != t && t.release() && ((0, l.zS)().removeDirectVideoOutputSink(e), f.delete(e));
}
function h(e, t) {
    let { streamId: n, paused: a, onReady: o, onResize: l, className: u, ...d } = e,
        f = r.useRef(null),
        h = r.useRef(null),
        m = r.useRef({
            width: 0,
            height: 0
        }),
        g = r.useRef({
            streamId: n,
            paused: a,
            onReady: o,
            onResize: l,
            onContainerResized: t
        });
    return (
        r.useLayoutEffect(() => {
            let { current: e } = f;
            function t() {
                var e, t, n, i, r, a;
                let { width: s, height: o } = m.current,
                    l = null !== (n = null === (e = h.current) || void 0 === e ? void 0 : e.videoWidth) && void 0 !== n ? n : 0,
                    u = null !== (i = null === (t = h.current) || void 0 === t ? void 0 : t.videoHeight) && void 0 !== i ? i : 0;
                if (s !== l || o !== u) {
                    let e = {
                        width: l,
                        height: u
                    };
                    null === (r = (a = g.current).onResize) || void 0 === r || r.call(a, e), (m.current = e);
                }
            }
            function n() {
                var e, t;
                c.info('handleReady for '.concat(g.current.streamId, ', have onReady callback = ').concat(null != g.current.onReady)), null === (e = (t = g.current).onReady) || void 0 === e || e.call(t);
            }
            function i() {
                if (!g.current.paused) {
                    var e;
                    null === (e = h.current) || void 0 === e || e.play();
                }
            }
            let r = new ResizeObserver((e) => {
                for (let i of e) {
                    var t, n;
                    if (i.target !== h.current) continue;
                    let e = window.devicePixelRatio * i.target.clientWidth,
                        r = window.devicePixelRatio * i.target.clientHeight;
                    null === (t = (n = g.current).onContainerResized) || void 0 === t || t.call(n, g.current.streamId, e, r);
                }
            });
            if (null != e) {
                let a = document.createElement('video');
                (a.style.display = 'block'), (a.style.width = '100%'), (a.style.height = '100%'), (a.autoplay = !0), (a.muted = !0), a.addEventListener('pause', i), a.addEventListener('resize', t), a.addEventListener('canplaythrough', n), c.info('create video element for '.concat(g.current.streamId, ', readyState=').concat(a.readyState)), a.readyState > 3 && c.error('video element for '.concat(g.current.streamId, ' was ready before attached')), e.appendChild(a), r.disconnect(), r.observe(a), (h.current = a);
            }
        }, []),
        r.useEffect(() => {
            (g.current.streamId = n), (g.current.paused = a), (g.current.onReady = o), (g.current.onResize = l);
        }),
        r.useEffect(() => {
            let e = h.current;
            if (null != e) {
                if (!a)
                    return (
                        c.info('attaching srcObject for '.concat(n)),
                        (e.srcObject = _(n)),
                        () => {
                            p(n), (e.srcObject = null);
                        }
                    );
                null != e.srcObject && ((e.srcObject = null), p(n));
            }
        }, [a, n]),
        (0, i.jsx)('div', {
            className: s()('media-engine-video', u),
            ref: f,
            ...d
        })
    );
}
h.defaultProps = { paused: !1 };
