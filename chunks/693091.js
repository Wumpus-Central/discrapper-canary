n.d(t, {
    AS: () => o,
    S4: () => s,
    X4: () => u
}),
    n(388685);
var i = n(192379),
    r = n(481060);
function l(e, t, n) {
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
        (this.locked = t), this.computeLayout(n);
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
        null == (e = this.resizeObserver) || e.disconnect(), (this.resizeObserver = void 0), this.listeners.clear();
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
            let r = this.listeners.get(i.notification.id);
            if (null == r) continue;
            let { offsetHeight: l } = r.element;
            (r.top !== t || r.height !== l || r.index !== n) && (e = !0), (r.top = t), (r.height = l), (r.index = n), 0 === t && (this.matchHeight !== l && (e = !0), (this.matchHeight = l)), (t += l + 8), n++;
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
            null == (i = this.resizeObserver) || i.observe(t),
            this.queueCompute();
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
        l(this, 'resizeObserver', void 0),
            l(this, 'listeners', new Map()),
            l(this, 'queuedCompute', !1),
            l(this, 'items', []),
            l(this, 'matchHeight', 0),
            l(this, 'locked', !0),
            l(this, 'handleResize', (e) => {
                this.computeLayout();
            }),
            (this.locked = e);
    }
}
let s = i.createContext(new o(!0));
function c(e, t, n) {
    return t && 0 !== e ? 20 * Math.max(e / 5, 0) : n;
}
let a = {
    mass: 0.8,
    friction: 25,
    tension: 320
};
function u(e, t, n) {
    let [l, o] = (0, r.q_F)(
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
        u = i.useRef(o),
        d = i.useContext(s),
        h = i.useMemo(() => {
            let t = !1;
            return (n) => {
                null == n
                    ? d.unsubscribe(e)
                    : d.subscribe(e, n, (e) => {
                          let { locked: n, matchHeight: i, height: r, top: l, index: o } = e,
                              { current: s } = u,
                              d = {
                                  opacity: n && o > 4 ? 0 : n ? Math.min(1 - o / 4, 1) : 1,
                                  scale: n ? Math.min(1 - o / 4, 1) : 1,
                                  transform: c(o, n, l),
                                  contentOpacity: n && o > 0 ? 0 : 1,
                                  height: n ? i : r
                              };
                          s({
                              from: t
                                  ? void 0
                                  : {
                                        opacity: 0,
                                        scale: 1.1,
                                        transform: -((n ? i : r) * 1),
                                        contentOpacity: 1,
                                        height: n ? i : r
                                    },
                              to: d,
                              config: a
                          }),
                              (t = !0);
                      });
            };
        }, [e, d]);
    return (
        i.useLayoutEffect(() => {
            if (t === r.pJH.YEETED) {
                let t = d.getLayoutSpecs(e);
                if (null == t) return void n();
                u.current({
                    to: {
                        scale: 0.8,
                        opacity: 0,
                        transform: c(t.index, d.locked, t.top) + (d.locked ? 0 : t.height / 2)
                    },
                    config: a
                }),
                    setTimeout(n, 300);
            }
        }, [t, n, e, d]),
        {
            ref: h,
            springs: l
        }
    );
}
