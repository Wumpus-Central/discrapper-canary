"use strict";
n.d(t, { Fn: () => f, Gt: () => E, Ru: () => m });
var r = n(64700),
    i = n(717421),
    s = n(518009),
    a = n(626584),
    o = n(87001),
    l = n(287809),
    u = n(531685),
    d = n(365971),
    c = n(392164);
let _ = new a.A("NotificationLayoutManager");
class f {
    resizeObserver;
    listeners = new Map();
    queuedCompute = !1;
    items = [];
    matchHeight = 0;
    locked = !0;
    constructor(e) {
        this.locked = e;
    }
    updateState(e, t) {
        this.items = e;
        let n = this.locked !== t;
        (this.locked = t), this.computeLayout(n);
    }
    initialize(e) {
        if (null == this.resizeObserver) {
            for (let [, { element: t }] of ((this.resizeObserver = new e.ResizeObserver(this.handleResize)),
            this.listeners))
                this.resizeObserver.observe(t);
            this.queueCompute();
        }
    }
    cleanUp() {
        this.resizeObserver?.disconnect(), (this.resizeObserver = void 0), this.listeners.clear();
    }
    queueCompute() {
        this.queuedCompute || ((this.queuedCompute = !0), Promise.resolve().then(() => this.computeLayout()));
    }
    handleResize = (e) => {
        this.computeLayout();
    };
    computeLayout() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.queuedCompute = !1;
        let t = 0,
            n = 0;
        for (let r of this.items) {
            let i = this.listeners.get(r.notification.id);
            if (null == i) continue;
            let { offsetHeight: s } = i.element;
            (i.top !== t || i.height !== s || i.index !== n) && (e = !0),
                (i.top = t),
                (i.height = s),
                (i.index = n),
                0 === t && (this.matchHeight !== s && (e = !0), (this.matchHeight = s)),
                (t += s + 8),
                n++;
        }
        e && this.broadcastLayoutUpdates();
    }
    broadcastLayoutUpdates() {
        for (let e of this.items) {
            let t = this.listeners.get(e.notification.id);
            null != t &&
                t.callback({
                    locked: this.locked,
                    matchHeight: this.matchHeight,
                    height: t.height,
                    top: t.top,
                    index: t.index,
                });
        }
    }
    subscribe(e, t, n) {
        this.listeners.set(e, { notificationId: e, callback: n, element: t, height: 0, top: 0, index: 0 }),
            this.resizeObserver?.observe(t),
            this.queueCompute();
    }
    unsubscribe(e) {
        let t = this.listeners.get(e);
        null != t && (this.resizeObserver?.unobserve(t.element), this.listeners.delete(e), this.queueCompute());
    }
    getLayoutSpecs(e) {
        return this.listeners.get(e);
    }
}
let E = r.createContext(new f(!0));
function h(e, t, n) {
    return t && 0 !== e ? 20 * Math.max(e / 5, 0) : n;
}
let p = { mass: 0.8, friction: 25, tension: 320 };
function m(e, t, n) {
    let [a, f] = (0, i.z)(
            () => ({ from: { opacity: 0, scale: 1, transform: 0, height: 0, contentOpacity: 1 } }),
            void 0,
            [],
        ),
        m = r.useRef(f),
        g = r.useContext(E),
        A = r.useMemo(() => {
            let t = !1;
            return (n) => {
                null == n
                    ? g.unsubscribe(e)
                    : g.subscribe(e, n, (n) => {
                          let { locked: r, matchHeight: i, height: s, top: a, index: f } = n;
                          if (l.default.getCurrentUser()?.isStaff()) {
                              let t = o.A.getWindow(c.f),
                                  n = null != t ? u.A.windowSize((0, d.Q2)(t)) : void 0;
                              _.info(
                                  "Notification layout update",
                                  { id: e, locked: r, matchHeight: i, height: s, top: a, index: f },
                                  n,
                              );
                          }
                          let { current: E } = m,
                              g = {
                                  opacity: r && f > 4 ? 0 : r ? Math.min(1 - f / 4, 1) : 1,
                                  scale: r ? Math.min(1 - f / 4, 1) : 1,
                                  transform: h(f, r, a),
                                  contentOpacity: r && f > 0 ? 0 : 1,
                                  height: r ? i : s,
                              };
                          E({
                              from: t
                                  ? void 0
                                  : {
                                        opacity: 0,
                                        scale: 1.1,
                                        transform: -((r ? i : s) * 1),
                                        contentOpacity: 1,
                                        height: r ? i : s,
                                    },
                              to: g,
                              config: p,
                          }),
                              (t = !0);
                      });
            };
        }, [e, g]);
    return (
        r.useLayoutEffect(() => {
            if (t === s.wL.YEETED) {
                let t = g.getLayoutSpecs(e);
                if (null == t) return void n();
                m.current({
                    to: {
                        scale: 0.8,
                        opacity: 0,
                        transform: h(t.index, g.locked, t.top) + (g.locked ? 0 : t.height / 2),
                    },
                    config: p,
                }),
                    setTimeout(n, 300);
            }
        }, [t, n, e, g]),
        { ref: A, springs: a }
    );
}
