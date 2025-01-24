n.d(t, {
    AS: function () {
        return a;
    },
    S4: function () {
        return s;
    },
    X4: function () {
        return u;
    }
}),
    n(47120);
var i = n(192379),
    l = n(481060);
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
        !this.queuedCompute && ((this.queuedCompute = !0), Promise.resolve().then(() => this.computeLayout()));
    }
    computeLayout() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.queuedCompute = !1;
        let t = 0,
            n = 0;
        for (let i of this.items) {
            let l = this.listeners.get(i.notification.id);
            if (null == l) continue;
            let { offsetHeight: r } = l.element;
            (l.top !== t || l.height !== r || l.index !== n) && (e = !0), (l.top = t), (l.height = r), (l.index = n), 0 === t && (this.matchHeight !== r && (e = !0), (this.matchHeight = r)), (t += r + 8), n++;
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
let s = i.createContext(new a(!0));
function o(e, t, n) {
    return t && 0 !== e ? 20 * Math.max(e / 5, 0) : n;
}
let c = {
    mass: 0.8,
    friction: 25,
    tension: 320
};
function u(e, t, n) {
    let [r, a] = (0, l.useSpring)(
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
        u = i.useRef(a),
        d = i.useContext(s),
        m = i.useMemo(() => {
            let t = !1;
            return (n) => {
                null == n
                    ? d.unsubscribe(e)
                    : d.subscribe(e, n, (e) => {
                          var n, i, l, r;
                          let { locked: a, matchHeight: s, height: d, top: m, index: f } = e,
                              { current: p } = u;
                          let h = {
                              opacity: ((n = f), (i = a) && n > 4 ? 0 : i ? Math.min(1 - n / 4, 1) : 1),
                              scale: ((l = f), a ? Math.min(1 - l / 4, 1) : 1),
                              transform: o(f, a, m),
                              contentOpacity: ((r = f), a ? (r > 0 ? 0 : 1) : 1),
                              height: a ? s : d
                          };
                          p({
                              from: t
                                  ? void 0
                                  : {
                                        opacity: 0,
                                        scale: 1.1,
                                        transform: -((a ? s : d) * 1),
                                        contentOpacity: 1,
                                        height: a ? s : d
                                    },
                              to: h,
                              config: c
                          }),
                              (t = !0);
                      });
            };
        }, [e, d]);
    return (
        i.useLayoutEffect(() => {
            if (t === l.TransitionStates.YEETED) {
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
            springs: r
        }
    );
}
