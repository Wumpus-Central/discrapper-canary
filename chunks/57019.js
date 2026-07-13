n.d(t, { Fn: () => h, Gt: () => m, Ru: () => f });
var i = n(64700),
    r = n(717421),
    l = n(518009),
    s = n(626584),
    a = n(567249),
    o = n(287809),
    c = n(531685),
    u = n(365971),
    d = n(392164);
let A = new s.A("NotificationLayoutManager");
class h {
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
            let { offsetHeight: l } = r.element;
            (r.top !== t || r.height !== l || r.index !== n) && (e = !0),
                (r.top = t),
                (r.height = l),
                (r.index = n),
                0 === t && (this.matchHeight !== l && (e = !0), (this.matchHeight = l)),
                (t += l + 8),
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
let m = i.createContext(new h(!0));
function g(e, t, n) {
    return t && 0 !== e ? 20 * Math.max(e / 5, 0) : n;
}
let p = { mass: 0.8, friction: 25, tension: 320 };
function f(e, t, n) {
    let [s, h] = (0, r.z)(
            () => ({ from: { opacity: 0, scale: 1, transform: 0, height: 0, contentOpacity: 1 } }),
            void 0,
            [],
        ),
        f = i.useRef(h),
        E = i.useContext(m),
        b = i.useMemo(() => {
            let t = !1;
            return (n) => {
                null == n
                    ? E.unsubscribe(e)
                    : E.subscribe(e, n, (n) => {
                          let { locked: i, matchHeight: r, height: l, top: s, index: h } = n;
                          if (o.default.getCurrentUser()?.isStaff()) {
                              let t = a.A.getWindow(d.f),
                                  n = null != t ? c.A.windowSize((0, u.Q2)(t)) : void 0;
                              A.info(
                                  "Notification layout update",
                                  { id: e, locked: i, matchHeight: r, height: l, top: s, index: h },
                                  n,
                              );
                          }
                          let { current: m } = f,
                              E = {
                                  opacity: i && h > 4 ? 0 : i ? Math.min(1 - h / 4, 1) : 1,
                                  scale: i ? Math.min(1 - h / 4, 1) : 1,
                                  transform: g(h, i, s),
                                  contentOpacity: i && h > 0 ? 0 : 1,
                                  height: i ? r : l,
                              };
                          m({
                              from: t
                                  ? void 0
                                  : {
                                        opacity: 0,
                                        scale: 1.1,
                                        transform: -((i ? r : l) * 1),
                                        contentOpacity: 1,
                                        height: i ? r : l,
                                    },
                              to: E,
                              config: p,
                          }),
                              (t = !0);
                      });
            };
        }, [e, E]);
    return (
        i.useLayoutEffect(() => {
            if (t === l.wL.YEETED) {
                let t = E.getLayoutSpecs(e);
                if (null == t) return void n();
                f.current({
                    to: {
                        scale: 0.8,
                        opacity: 0,
                        transform: g(t.index, E.locked, t.top) + (E.locked ? 0 : t.height / 2),
                    },
                    config: p,
                }),
                    setTimeout(n, 300);
            }
        }, [t, n, e, E]),
        { ref: b, springs: s }
    );
}
