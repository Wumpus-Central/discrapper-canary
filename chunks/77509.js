i.d(e, { A: () => d });
var n = i(814121),
    r = i(142120),
    a = i(366811),
    s = i(612716),
    l = i(976860),
    o = i(652215);
class c {
    unlistenHistory;
    unlistenKeyboardChange;
    rewrites = new Set();
    listeners = new Set();
    routeChangeCount = 0;
    timer = -1;
    connected = !1;
    initialize() {
        this.cleanup(), (this.unlistenHistory = (0, l.JK)().listen(this.handleRouteChange));
        let { pathname: t } = (0, l.JK)().location;
        a.A.getState().resetPath(t),
            (this.unlistenKeyboardChange = a.A.subscribe(this.handleKeybindRouteChange)),
            r.A.addChangeListener(this.handleConnectionChange);
    }
    handleConnectionChange = () => {
        let t = r.A.isConnected(),
            e = t && !this.connected;
        (this.connected = t),
            e && ((this.routeChangeCount = 0), this.executeRouteRewrites((0, l.JK)().location, "REPLACE"));
    };
    handleRouteChange = (t, e) => {
        if ("POP" !== e) {
            if (this.executeRouteRewrites(t, e)) return;
            if (!(0, s.o)(t)) return void (0, l.bG)(o.BVt.ME);
        }
        let i = a.A.getState();
        for (let n of (i.basePath !== t.pathname && i.resetPath(t.pathname), this.listeners))
            try {
                n(t, e);
            } catch (t) {
                console.warn("RouteManager.listen: A route listener has caused an error", t.message);
            }
        this.routeChangeCount = 0;
    };
    executeRouteRewrites(t, e) {
        if (((this.routeChangeCount += 1), this.routeChangeCount < 10))
            for (let i of this.rewrites) {
                let r = (0, l.JK)().location.pathname,
                    a = i(t, e);
                if (null != a)
                    return (
                        (0, n.Z)({
                            message: "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
                            data: { replacePath: a.path, previousPath: r },
                        }),
                        (0, l.bG)(a.path, a.state),
                        !0
                    );
            }
        else throw Error("RouteManager: Something has gone horribly wrong with rewrites");
        return !1;
    }
    handleKeybindRouteChange = (t) => {
        let { path: e } = t;
        -1 !== this.timer && clearTimeout(this.timer), null != e && (this.timer = setTimeout(this.flushRoute, 200));
    };
    flushRoute = () => {
        clearTimeout(this.timer);
        let t = a.A.getState();
        null != t.path && (0, l.pX)(t.path);
    };
    cleanup() {
        this.unlistenHistory?.(),
            (this.unlistenHistory = void 0),
            this.unlistenKeyboardChange?.(),
            (this.unlistenKeyboardChange = void 0),
            r.A.removeChangeListener(this.handleConnectionChange);
    }
    addRouteChangeListener(t) {
        return (
            null != this.unlistenHistory && t((0, l.JK)().location, "REPLACE"),
            this.listeners.add(t),
            () => this.removeRouteChangeListener(t)
        );
    }
    addRouteRewriter(t) {
        if (null != this.unlistenHistory) {
            let e = t((0, l.JK)().location, (0, l.JK)().action);
            null != e && (0, l.bG)(e.path, e.state);
        }
        return this.rewrites.add(t), () => this.removeRouteRewriter(t);
    }
    removeRouteChangeListener(t) {
        this.listeners.delete(t);
    }
    removeRouteRewriter(t) {
        this.rewrites.delete(t);
    }
    getHistory() {
        return (0, l.JK)();
    }
}
let d = new c();
