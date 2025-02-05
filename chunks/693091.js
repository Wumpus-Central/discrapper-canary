n.d(t, {
    AS: () => a,
    S4: () => s,
    X4: () => c
}),
    n(47120);
var l = n(192379),
    i = n(481060);
function r(e, t, n) {
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
        for (let l of this.items) {
            let i = this.listeners.get(l.notification.id);
            if (null == i) continue;
            let { offsetHeight: r } = i.element;
            (i.top !== t || i.height !== r || i.index !== n) && (e = !0), (i.top = t), (i.height = r), (i.index = n), 0 === t && (this.matchHeight !== r && (e = !0), (this.matchHeight = r)), (t += r + 8), n++;
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
        var l;
        this.listeners.set(e, {
            notificationId: e,
            callback: n,
            element: t,
            height: 0,
            top: 0,
            index: 0
        }),
            null === (l = this.resizeObserver) || void 0 === l || l.observe(t),
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
        r(this, 'resizeObserver', void 0),
            r(this, 'listeners', new Map()),
            r(this, 'queuedCompute', !1),
            r(this, 'items', []),
            r(this, 'matchHeight', 0),
            r(this, 'locked', !0),
            r(this, 'handleResize', (e) => {
                this.computeLayout();
            }),
            (this.locked = e);
    }
}
let s = l.createContext(new a(!0));
function o(e, t, n) {
    return t && 0 !== e ? 20 * Math.max(e / 5, 0) : n;
}
let u = {
    mass: 0.8,
    friction: 25,
    tension: 320
};
function c(e, t, n) {
    let [r, a] = (0, i.q_F)(
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
        c = l.useRef(a),
        d = l.useContext(s),
        m = l.useMemo(() => {
            let t = !1;
            return (n) => {
                null == n
                    ? d.unsubscribe(e)
                    : d.subscribe(e, n, (e) => {
                          let { locked: n, matchHeight: l, height: i, top: r, index: a } = e,
                              { current: s } = c,
                              d = {
                                  opacity: n && a > 4 ? 0 : n ? Math.min(1 - a / 4, 1) : 1,
                                  scale: n ? Math.min(1 - a / 4, 1) : 1,
                                  transform: o(a, n, r),
                                  contentOpacity: n && a > 0 ? 0 : 1,
                                  height: n ? l : i
                              };
                          s({
                              from: t
                                  ? void 0
                                  : {
                                        opacity: 0,
                                        scale: 1.1,
                                        transform: -((n ? l : i) * 1),
                                        contentOpacity: 1,
                                        height: n ? l : i
                                    },
                              to: d,
                              config: u
                          }),
                              (t = !0);
                      });
            };
        }, [e, d]);
    return (
        l.useLayoutEffect(() => {
            if (t === i.pJH.YEETED) {
                let t = d.getLayoutSpecs(e);
                if (null == t) {
                    n();
                    return;
                }
                c.current({
                    to: {
                        scale: 0.8,
                        opacity: 0,
                        transform: o(t.index, d.locked, t.top) + (d.locked ? 0 : t.height / 2)
                    },
                    config: u
                }),
                    setTimeout(n, 300);
            }
        }, [t, n, e, d]),
        {
            ref: m,
            springs: r
        }
    );
}
