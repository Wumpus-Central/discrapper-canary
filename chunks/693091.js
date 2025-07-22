(n.d(t, {
    AS: () => o,
    S4: () => s,
    X4: () => f
}),
    n(388685));
var r = n(73800),
    i = n(481060);
function a(e, t, n) {
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
class o {
    updateState(e, t) {
        this.items = e;
        let n = this.locked !== t;
        ((this.locked = t), this.computeLayout(n));
    }
    initialize(e) {
        if (null == this.resizeObserver) {
            for (let [, { element: n }] of ((this.resizeObserver = new e.ResizeObserver(this.handleResize)), this.listeners)) {
                var t;
                null == (t = this.resizeObserver) || t.observe(n);
            }
            this.queueCompute();
        }
    }
    cleanUp() {
        var e;
        (null == (e = this.resizeObserver) || e.disconnect(), (this.resizeObserver = void 0), this.listeners.clear());
    }
    queueCompute() {
        this.queuedCompute || ((this.queuedCompute = !0), Promise.resolve().then(() => this.computeLayout()));
    }
    computeLayout() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.queuedCompute = !1;
        let t = 0,
            n = 0;
        for (let r of this.items) {
            let i = this.listeners.get(r.notification.id);
            if (null == i) continue;
            let { offsetHeight: a } = i.element;
            ((i.top !== t || i.height !== a || i.index !== n) && (e = !0), (i.top = t), (i.height = a), (i.index = n), 0 === t && (this.matchHeight !== a && (e = !0), (this.matchHeight = a)), (t += a + 8), n++);
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
                    index: t.index
                });
        }
    }
    subscribe(e, t, n) {
        var r;
        (this.listeners.set(e, {
            notificationId: e,
            callback: n,
            element: t,
            height: 0,
            top: 0,
            index: 0
        }),
            null == (r = this.resizeObserver) || r.observe(t),
            this.queueCompute());
    }
    unsubscribe(e) {
        var t;
        let n = this.listeners.get(e);
        null != n && (null == (t = this.resizeObserver) || t.unobserve(n.element), this.listeners.delete(e), this.queueCompute());
    }
    getLayoutSpecs(e) {
        return this.listeners.get(e);
    }
    constructor(e) {
        (a(this, 'resizeObserver', void 0),
            a(this, 'listeners', new Map()),
            a(this, 'queuedCompute', !1),
            a(this, 'items', []),
            a(this, 'matchHeight', 0),
            a(this, 'locked', !0),
            a(this, 'handleResize', (e) => {
                this.computeLayout();
            }),
            (this.locked = e));
    }
}
let s = r.createContext(new o(!0));
function l(e, t) {
    return t && e > 4 ? 0 : t ? Math.min(1 - e / 4, 1) : 1;
}
function c(e, t) {
    return t ? Math.min(1 - e / 4, 1) : 1;
}
function u(e, t, n) {
    return t && 0 !== e ? 20 * Math.max(e / 5, 0) : n;
}
function d(e, t) {
    return t && e > 0 ? 0 : 1;
}
let _ = {
    mass: 0.8,
    friction: 25,
    tension: 320
};
function f(e, t, n) {
    let [a, o] = (0, i.q_F)(
            () => ({
                from: {
                    opacity: 0,
                    scale: 1,
                    transform: 0,
                    height: 0,
                    contentOpacity: 1
                }
            }),
            void 0,
            []
        ),
        f = r.useRef(o),
        p = r.useContext(s),
        h = r.useMemo(() => {
            let t = !1;
            return (n) => {
                null == n
                    ? p.unsubscribe(e)
                    : p.subscribe(e, n, (e) => {
                          let { locked: n, matchHeight: r, height: i, top: a, index: o } = e,
                              { current: s } = f,
                              p = {
                                  opacity: l(o, n),
                                  scale: c(o, n),
                                  transform: u(o, n, a),
                                  contentOpacity: d(o, n),
                                  height: n ? r : i
                              };
                          (s({
                              from: t
                                  ? void 0
                                  : {
                                        opacity: 0,
                                        scale: 1.1,
                                        transform: -((n ? r : i) * 1),
                                        contentOpacity: 1,
                                        height: n ? r : i
                                    },
                              to: p,
                              config: _
                          }),
                              (t = !0));
                      });
            };
        }, [e, p]);
    return (
        r.useLayoutEffect(() => {
            if (t === i.pJH.YEETED) {
                let t = p.getLayoutSpecs(e);
                if (null == t) return void n();
                (f.current({
                    to: {
                        scale: 0.8,
                        opacity: 0,
                        transform: u(t.index, p.locked, t.top) + (p.locked ? 0 : t.height / 2)
                    },
                    config: _
                }),
                    setTimeout(n, 300));
            }
        }, [t, n, e, p]),
        {
            ref: h,
            springs: a
        }
    );
}
