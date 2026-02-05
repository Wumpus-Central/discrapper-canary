"use strict";
n.d(t, { Fn: () => _, Gt: () => f, Ru: () => A });
var r = n(64700),
    i = n(397927),
    a = n(626584),
    s = n(87001),
    o = n(287809),
    l = n(531685),
    u = n(365971),
    c = n(392164);
let d = new a.A("NotificationLayoutManager");
class _ {
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
            let { offsetHeight: a } = i.element;
            (i.top !== t || i.height !== a || i.index !== n) && (e = !0),
                (i.top = t),
                (i.height = a),
                (i.index = n),
                0 === t && (this.matchHeight !== a && (e = !0), (this.matchHeight = a)),
                (t += a + 8),
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
let f = r.createContext(new _(!0));
function p(e, t) {
    return t && e > 4 ? 0 : t ? Math.min(1 - e / 4, 1) : 1;
}
function h(e, t) {
    return t ? Math.min(1 - e / 4, 1) : 1;
}
function m(e, t, n) {
    return t && 0 !== e ? 20 * Math.max(e / 5, 0) : n;
}
function g(e, t) {
    return t && e > 0 ? 0 : 1;
}
let E = { mass: 0.8, friction: 25, tension: 320 };
function A(e, t, n) {
    let [a, _] = (0, i.zhh)(
            () => ({ from: { opacity: 0, scale: 1, transform: 0, height: 0, contentOpacity: 1 } }),
            void 0,
            [],
        ),
        A = r.useRef(_),
        I = r.useContext(f),
        T = r.useMemo(() => {
            let t = !1;
            return (n) => {
                null == n
                    ? I.unsubscribe(e)
                    : I.subscribe(e, n, (n) => {
                          let { locked: r, matchHeight: i, height: a, top: _, index: f } = n;
                          if (o.default.getCurrentUser()?.isStaff()) {
                              let t = s.A.getWindow(c.f),
                                  n = null != t ? l.A.windowSize((0, u.Q2)(t)) : void 0;
                              d.info(
                                  "Notification layout update",
                                  { id: e, locked: r, matchHeight: i, height: a, top: _, index: f },
                                  n,
                              );
                          }
                          let { current: I } = A,
                              T = {
                                  opacity: p(f, r),
                                  scale: h(f, r),
                                  transform: m(f, r, _),
                                  contentOpacity: g(f, r),
                                  height: r ? i : a,
                              };
                          I({
                              from: t
                                  ? void 0
                                  : {
                                        opacity: 0,
                                        scale: 1.1,
                                        transform: -((r ? i : a) * 1),
                                        contentOpacity: 1,
                                        height: r ? i : a,
                                    },
                              to: T,
                              config: E,
                          }),
                              (t = !0);
                      });
            };
        }, [e, I]);
    return (
        r.useLayoutEffect(() => {
            if (t === i.wLy.YEETED) {
                let t = I.getLayoutSpecs(e);
                if (null == t) return void n();
                A.current({
                    to: {
                        scale: 0.8,
                        opacity: 0,
                        transform: m(t.index, I.locked, t.top) + (I.locked ? 0 : t.height / 2),
                    },
                    config: E,
                }),
                    setTimeout(n, 300);
            }
        }, [t, n, e, I]),
        { ref: T, springs: a }
    );
}
