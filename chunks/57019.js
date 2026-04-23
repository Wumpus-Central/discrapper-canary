"use strict";
n.d(t, { Fn: () => E, Gt: () => h, Ru: () => g });
var i = n(64700),
    r = n(717421),
    s = n(518009),
    a = n(626584),
    o = n(567249),
    l = n(287809),
    d = n(531685),
    _ = n(365971),
    u = n(392164);
let c = new a.A("NotificationLayoutManager");
class E {
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
        for (let i of this.items) {
            let r = this.listeners.get(i.notification.id);
            if (null == r) continue;
            let { offsetHeight: s } = r.element;
            (r.top !== t || r.height !== s || r.index !== n) && (e = !0),
                (r.top = t),
                (r.height = s),
                (r.index = n),
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
let h = i.createContext(new E(!0));
function m(e, t, n) {
    return t && 0 !== e ? 20 * Math.max(e / 5, 0) : n;
}
let f = { mass: 0.8, friction: 25, tension: 320 };
function g(e, t, n) {
    let [a, E] = (0, r.z)(
            () => ({ from: { opacity: 0, scale: 1, transform: 0, height: 0, contentOpacity: 1 } }),
            void 0,
            [],
        ),
        g = i.useRef(E),
        p = i.useContext(h),
        A = i.useMemo(() => {
            let t = !1;
            return (n) => {
                null == n
                    ? p.unsubscribe(e)
                    : p.subscribe(e, n, (n) => {
                          let { locked: i, matchHeight: r, height: s, top: a, index: E } = n;
                          if (l.default.getCurrentUser()?.isStaff()) {
                              let t = o.A.getWindow(u.f),
                                  n = null != t ? d.A.windowSize((0, _.Q2)(t)) : void 0;
                              c.info(
                                  "Notification layout update",
                                  { id: e, locked: i, matchHeight: r, height: s, top: a, index: E },
                                  n,
                              );
                          }
                          let { current: h } = g,
                              p = {
                                  opacity: i && E > 4 ? 0 : i ? Math.min(1 - E / 4, 1) : 1,
                                  scale: i ? Math.min(1 - E / 4, 1) : 1,
                                  transform: m(E, i, a),
                                  contentOpacity: i && E > 0 ? 0 : 1,
                                  height: i ? r : s,
                              };
                          h({
                              from: t
                                  ? void 0
                                  : {
                                        opacity: 0,
                                        scale: 1.1,
                                        transform: -((i ? r : s) * 1),
                                        contentOpacity: 1,
                                        height: i ? r : s,
                                    },
                              to: p,
                              config: f,
                          }),
                              (t = !0);
                      });
            };
        }, [e, p]);
    return (
        i.useLayoutEffect(() => {
            if (t === s.wL.YEETED) {
                let t = p.getLayoutSpecs(e);
                if (null == t) return void n();
                g.current({
                    to: {
                        scale: 0.8,
                        opacity: 0,
                        transform: m(t.index, p.locked, t.top) + (p.locked ? 0 : t.height / 2),
                    },
                    config: f,
                }),
                    setTimeout(n, 300);
            }
        }, [t, n, e, p]),
        { ref: A, springs: a }
    );
}
