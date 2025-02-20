n.d(t, {
    AS: () => a,
    S4: () => o,
    X4: () => u
}),
    n(47120);
var r = n(192379),
    l = n(481060);
function i(e, t, n) {
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
class a {
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
        for (let r of this.items) {
            let l = this.listeners.get(r.notification.id);
            if (null == l) continue;
            let { offsetHeight: i } = l.element;
            (l.top !== t || l.height !== i || l.index !== n) && (e = !0), (l.top = t), (l.height = i), (l.index = n), 0 === t && (this.matchHeight !== i && (e = !0), (this.matchHeight = i)), (t += i + 8), n++;
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
        this.listeners.set(e, {
            notificationId: e,
            callback: n,
            element: t,
            height: 0,
            top: 0,
            index: 0
        }),
            null === (r = this.resizeObserver) || void 0 === r || r.observe(t),
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
        i(this, 'resizeObserver', void 0),
            i(this, 'listeners', new Map()),
            i(this, 'queuedCompute', !1),
            i(this, 'items', []),
            i(this, 'matchHeight', 0),
            i(this, 'locked', !0),
            i(this, 'handleResize', (e) => {
                this.computeLayout();
            }),
            (this.locked = e);
    }
}
let o = r.createContext(new a(!0));
function s(e, t, n) {
    return t && 0 !== e ? 20 * Math.max(e / 5, 0) : n;
}
let c = {
    mass: 0.8,
    friction: 25,
    tension: 320
};
function u(e, t, n) {
    let [i, a] = (0, l.q_F)(
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
        u = r.useRef(a),
        d = r.useContext(o),
        f = r.useMemo(() => {
            let t = !1;
            return (n) => {
                null == n
                    ? d.unsubscribe(e)
                    : d.subscribe(e, n, (e) => {
                          let { locked: n, matchHeight: r, height: l, top: i, index: a } = e,
                              { current: o } = u,
                              d = {
                                  opacity: n && a > 4 ? 0 : n ? Math.min(1 - a / 4, 1) : 1,
                                  scale: n ? Math.min(1 - a / 4, 1) : 1,
                                  transform: s(a, n, i),
                                  contentOpacity: n && a > 0 ? 0 : 1,
                                  height: n ? r : l
                              };
                          o({
                              from: t
                                  ? void 0
                                  : {
                                        opacity: 0,
                                        scale: 1.1,
                                        transform: -((n ? r : l) * 1),
                                        contentOpacity: 1,
                                        height: n ? r : l
                                    },
                              to: d,
                              config: c
                          }),
                              (t = !0);
                      });
            };
        }, [e, d]);
    return (
        r.useLayoutEffect(() => {
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
                        transform: s(t.index, d.locked, t.top) + (d.locked ? 0 : t.height / 2)
                    },
                    config: c
                }),
                    setTimeout(n, 300);
            }
        }, [t, n, e, d]),
        {
            ref: f,
            springs: i
        }
    );
}
