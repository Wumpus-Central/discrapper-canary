n.d(t, { Z: () => E }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(579092),
    l = n(992774);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = f(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let p = new s.Yd("DirectVideo");
class _ {
    addref() {
        this.refcount++;
    }
    release() {
        return this.refcount--, 0 === this.refcount;
    }
    constructor(e) {
        c(this, "refcount", void 0),
            c(this, "stream", void 0),
            (this.refcount = 1),
            (this.stream = window.createDiscordStream(e));
    }
}
let m = new Map();
function h(e) {
    let t = m.get(e);
    return null == t ? ((t = new _(e)), (0, l.zS)().addDirectVideoOutputSink(e), m.set(e, t)) : t.addref(), t.stream;
}
function g(e) {
    let t = m.get(e);
    null != t && t.release() && ((0, l.zS)().removeDirectVideoOutputSink(e), m.delete(e));
}
function E(e, t) {
    var { streamId: n, paused: a = !1, onReady: s, onResize: l, reportContainerResized: c = !0, className: f } = e,
        _ = d(e, ["streamId", "paused", "onReady", "onResize", "reportContainerResized", "className"]);
    let m = i.useRef(null),
        E = i.useRef(null),
        b = i.useRef({
            width: 0,
            height: 0,
        }),
        y = i.useRef({
            streamId: n,
            paused: a,
            onReady: s,
            onResize: l,
            onContainerResized: t,
        });
    return (
        i.useLayoutEffect(() => {
            let { current: e } = m;
            function t() {
                var e, t, n, r, i, a;
                let { width: o, height: s } = b.current,
                    l = null != (n = null == (e = E.current) ? void 0 : e.videoWidth) ? n : 0,
                    c = null != (r = null == (t = E.current) ? void 0 : t.videoHeight) ? r : 0;
                if (o !== l || s !== c) {
                    let e = {
                        width: l,
                        height: c,
                    };
                    null == (i = (a = y.current).onResize) || i.call(a, e), (b.current = e);
                }
            }
            function n() {
                var e, t;
                p.info(
                    "handleReady for "
                        .concat(y.current.streamId, ", have onReady callback = ")
                        .concat(null != y.current.onReady),
                ),
                    null == (e = (t = y.current).onReady) || e.call(t);
            }
            function r() {
                if (!y.current.paused) {
                    var e;
                    null == (e = E.current) || e.play();
                }
            }
            let i = new ResizeObserver((e) => {
                if (c)
                    for (let r of e) {
                        var t, n;
                        if (r.target !== E.current) continue;
                        let e = window.devicePixelRatio * r.target.clientWidth,
                            i = window.devicePixelRatio * r.target.clientHeight;
                        null == (t = (n = y.current).onContainerResized) || t.call(n, y.current.streamId, e, i);
                    }
            });
            if (null != e) {
                let a = document.createElement("video");
                (a.style.display = "block"),
                    (a.style.width = "100%"),
                    (a.style.height = "100%"),
                    (a.autoplay = !0),
                    (a.muted = !0),
                    a.addEventListener("pause", r),
                    a.addEventListener("resize", t),
                    a.addEventListener("canplaythrough", n),
                    p.info(
                        "create video element for ".concat(y.current.streamId, ", readyState=").concat(a.readyState),
                    ),
                    a.readyState > 3 &&
                        p.error("video element for ".concat(y.current.streamId, " was ready before attached")),
                    e.appendChild(a),
                    i.disconnect(),
                    i.observe(a),
                    (E.current = a);
            }
        }, [c]),
        i.useEffect(() => {
            (y.current.streamId = n), (y.current.paused = a), (y.current.onReady = s), (y.current.onResize = l);
        }),
        i.useEffect(() => {
            let e = E.current;
            if (null != e)
                if (!a)
                    return (
                        p.info("attaching srcObject for ".concat(n)),
                        (e.srcObject = h(n)),
                        () => {
                            g(n), (e.srcObject = null);
                        }
                    );
                else null != e.srcObject && ((e.srcObject = null), g(n));
        }, [a, n]),
        (0, r.jsx)(
            "div",
            u(
                {
                    className: o()("media-engine-video", f),
                    ref: m,
                },
                _,
            ),
        )
    );
}
