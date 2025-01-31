n.d(t, {
    AS: () => r,
    S4: () => s,
    X4: () => u
}),
    n(47120);
var i = n(192379),
    l = n(481060);
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
class r {
    updateState(e, t) {
        this.items = e;
        let n = this.locked !== t;
        (this.locked = t), this.computeLayout(n);
    }
    initialize(e) {
        if (null == this.resizeObserver) {
            for (let [, { element: n }] of ((this.resizeObserver = new e.ResizeObserver(this.handleResize)), this.listeners)) {
                var t;
                null === (t = this.resizeObserver) || void 0 === t || t.observe(n);
            }
            this.queueCompute();
        }
    }
    cleanUp() {
        var e;
        null === (e = this.resizeObserver) || void 0 === e || e.disconnect(), (this.resizeObserver = void 0), this.listeners.clear();
    }
    queueCompute() {
        this.queuedCompute || ((this.queuedCompute = !0), Promise.resolve().then(() => this.computeLayout()));
    }
    computeLayout() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.queuedCompute = !1;
        let t = 0,
            n = 0;
        for (let i of this.items) {
            let l = this.listeners.get(i.notification.id);
            if (null == l) continue;
            let { offsetHeight: a } = l.element;
            (l.top !== t || l.height !== a || l.index !== n) && (e = !0), (l.top = t), (l.height = a), (l.index = n), 0 === t && (this.matchHeight !== a && (e = !0), (this.matchHeight = a)), (t += a + 8), n++;
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
        var i;
        this.listeners.set(e, {
            notificationId: e,
            callback: n,
            element: t,
            height: 0,
            top: 0,
            index: 0
        }),
            null === (i = this.resizeObserver) || void 0 === i || i.observe(t),
            this.queueCompute();
    }
    unsubscribe(e) {
        var t;
        let n = this.listeners.get(e);
        null != n && (null === (t = this.resizeObserver) || void 0 === t || t.unobserve(n.element), this.listeners.delete(e), this.queueCompute());
    }
    getLayoutSpecs(e) {
        return this.listeners.get(e);
    }
    constructor(e) {
        a(this, 'resizeObserver', void 0),
            a(this, 'listeners', new Map()),
            a(this, 'queuedCompute', !1),
            a(this, 'items', []),
            a(this, 'matchHeight', 0),
            a(this, 'locked', !0),
            a(this, 'handleResize', (e) => {
                this.computeLayout();
            }),
            (this.locked = e);
    }
}
let s = i.createContext(new r(!0));
function o(e, t, n) {
    return t && 0 !== e ? 20 * Math.max(e / 5, 0) : n;
}
let c = {
    mass: 0.8,
    friction: 25,
    tension: 320
};
function u(e, t, n) {
    let [a, r] = (0, l.q_F)(
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
        u = i.useRef(r),
        d = i.useContext(s),
        m = i.useMemo(() => {
            let t = !1;
            return (n) => {
                null == n
                    ? d.unsubscribe(e)
                    : d.subscribe(e, n, (e) => {
                          let { locked: n, matchHeight: i, height: l, top: a, index: r } = e,
                              { current: s } = u,
                              d = {
                                  opacity: n && r > 4 ? 0 : n ? Math.min(1 - r / 4, 1) : 1,
                                  scale: n ? Math.min(1 - r / 4, 1) : 1,
                                  transform: o(r, n, a),
                                  contentOpacity: n && r > 0 ? 0 : 1,
                                  height: n ? i : l
                              };
                          s({
                              from: t
                                  ? void 0
                                  : {
                                        opacity: 0,
                                        scale: 1.1,
                                        transform: -((n ? i : l) * 1),
                                        contentOpacity: 1,
                                        height: n ? i : l
                                    },
                              to: d,
                              config: c
                          }),
                              (t = !0);
                      });
            };
        }, [e, d]);
    return (
        i.useLayoutEffect(() => {
            if (t === l.pJH.YEETED) {
                let t = d.getLayoutSpecs(e);
                if (null == t) {
                    n();
                    return;
                }
                u.current({
                    to: {
                        scale: 0.8,
                        opacity: 0,
                        transform: o(t.index, d.locked, t.top) + (d.locked ? 0 : t.height / 2)
                    },
                    config: c
                }),
                    setTimeout(n, 300);
            }
        }, [t, n, e, d]),
        {
            ref: m,
            springs: a
        }
    );
}
