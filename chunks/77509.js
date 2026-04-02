"use strict";
n.d(t, { A: () => d });
var r = n(984083),
    i = n(142120),
    s = n(366811),
    a = n(612716),
    o = n(976860),
    l = n(652215);
let u = 10;
class c {
    unlistenHistory;
    unlistenKeyboardChange;
    rewrites = new Set();
    listeners = new Set();
    routeChangeCount = 0;
    timer = -1;
    connected = !1;
    initialize() {
        this.cleanup(), (this.unlistenHistory = (0, o.JK)().listen(this.handleRouteChange));
        let { pathname: e } = (0, o.JK)().location;
        s.A.getState().resetPath(e),
            (this.unlistenKeyboardChange = s.A.subscribe(this.handleKeybindRouteChange)),
            i.A.addChangeListener(this.handleConnectionChange);
    }
    handleConnectionChange = () => {
        let e = i.A.isConnected(),
            t = e && !this.connected;
        (this.connected = e),
            t && ((this.routeChangeCount = 0), this.executeRouteRewrites((0, o.JK)().location, "REPLACE"));
    };
    handleRouteChange = (e, t) => {
        if ("POP" !== t) {
            if (this.executeRouteRewrites(e, t)) return;
            if (!(0, a.o)(e)) return void (0, o.bG)(l.BVt.ME);
        }
        let n = s.A.getState();
        for (let r of (n.basePath !== e.pathname && n.resetPath(e.pathname), this.listeners))
            try {
                r(e, t);
            } catch (e) {
                console.warn("RouteManager.listen: A route listener has caused an error", e.message);
            }
        this.routeChangeCount = 0;
    };
    executeRouteRewrites(e, t) {
        if (((this.routeChangeCount += 1), this.routeChangeCount < u))
            for (let n of this.rewrites) {
                let i = (0, o.JK)().location.pathname,
                    s = n(e, t);
                if (null != s)
                    return (
                        (0, r.Z)({
                            message: "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
                            data: { replacePath: s.path, previousPath: i },
                        }),
                        (0, o.bG)(s.path, s.state),
                        !0
                    );
            }
        else throw Error("RouteManager: Something has gone horribly wrong with rewrites");
        return !1;
    }
    handleKeybindRouteChange = (e) => {
        let { path: t } = e;
        -1 !== this.timer && clearTimeout(this.timer), null != t && (this.timer = setTimeout(this.flushRoute, 200));
    };
    flushRoute = () => {
        clearTimeout(this.timer);
        let e = s.A.getState();
        null != e.path && (0, o.pX)(e.path);
    };
    cleanup() {
        this.unlistenHistory?.(),
            (this.unlistenHistory = void 0),
            this.unlistenKeyboardChange?.(),
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
}
let d = new c();
