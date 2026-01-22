n.d(t, { A: () => f }), n(896048), n(65821);
var r = n(814121),
    i = n(142120),
    a = n(366811),
    s = n(612716),
    o = n(976860),
    l = n(652215);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let u = 10;
class d {
    initialize() {
        this.cleanup(), (this.unlistenHistory = (0, o.JK)().listen(this.handleRouteChange));
        let { pathname: e } = (0, o.JK)().location;
        a.A.getState().resetPath(e),
            (this.unlistenKeyboardChange = a.A.subscribe(this.handleKeybindRouteChange)),
            i.A.addChangeListener(this.handleConnectionChange);
    }
    executeRouteRewrites(e, t) {
        if (((this.routeChangeCount += 1), this.routeChangeCount < u))
            for (let n of this.rewrites) {
                let i = (0, o.JK)().location.pathname,
                    a = n(e, t);
                if (null != a)
                    return (
                        (0, r.Z)({
                            message: "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
                            data: {
                                replacePath: a.path,
                                previousPath: i,
                            },
                        }),
                        (0, o.bG)(a.path, a.state),
                        !0
                    );
            }
        else throw Error("RouteManager: Something has gone horribly wrong with rewrites");
        return !1;
    }
    cleanup() {
        var e, t, n, r;
        null == (e = (t = this).unlistenHistory) || e.call(t),
            (this.unlistenHistory = void 0),
            null == (n = (r = this).unlistenKeyboardChange) || n.call(r),
            (this.unlistenKeyboardChange = void 0),
            i.A.removeChangeListener(this.handleConnectionChange);
    }
    addRouteChangeListener(e) {
        return (
            null != this.unlistenHistory && e((0, o.JK)().location, "REPLACE"),
            this.listeners.add(e),
            () => this.removeRouteChangeListener(e)
        );
    }
    addRouteRewriter(e) {
        if (null != this.unlistenHistory) {
            let t = e((0, o.JK)().location, (0, o.JK)().action);
            null != t && (0, o.bG)(t.path, t.state);
        }
        return this.rewrites.add(e), () => this.removeRouteRewriter(e);
    }
    removeRouteChangeListener(e) {
        this.listeners.delete(e);
    }
    removeRouteRewriter(e) {
        this.rewrites.delete(e);
    }
    getHistory() {
        return (0, o.JK)();
    }
    constructor() {
        c(this, "unlistenHistory", void 0),
            c(this, "unlistenKeyboardChange", void 0),
            c(this, "rewrites", new Set()),
            c(this, "listeners", new Set()),
            c(this, "routeChangeCount", 0),
            c(this, "timer", -1),
            c(this, "connected", !1),
            c(this, "handleConnectionChange", () => {
                let e = i.A.isConnected(),
                    t = e && !this.connected;
                (this.connected = e),
                    t && ((this.routeChangeCount = 0), this.executeRouteRewrites((0, o.JK)().location, "REPLACE"));
            }),
            c(this, "handleRouteChange", (e, t) => {
                if (this.executeRouteRewrites(e, t)) return;
                if (!(0, s.o)(e)) return void (0, o.bG)(l.BVt.ME);
                let n = a.A.getState();
                for (let r of (n.basePath !== e.pathname && n.resetPath(e.pathname), this.listeners))
                    try {
                        r(e, t);
                    } catch (e) {
                        console.warn("RouteManager.listen: A route listener has caused an error", e.message);
                    }
                this.routeChangeCount = 0;
            }),
            c(this, "handleKeybindRouteChange", (e) => {
                let { path: t } = e;
                -1 !== this.timer && clearTimeout(this.timer),
                    null != t && (this.timer = setTimeout(this.flushRoute, 200));
            }),
            c(this, "flushRoute", () => {
                clearTimeout(this.timer);
                let e = a.A.getState();
                null != e.path && (0, o.pX)(e.path);
            });
    }
}
let f = new d();
