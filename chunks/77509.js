i.d(t, { A: () => d });
var n = i(984083),
    r = i(142120),
    l = i(366811),
    a = i(612716),
    s = i(976860),
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
        this.cleanup(), (this.unlistenHistory = (0, s.JK)().listen(this.handleRouteChange));
        let { pathname: e } = (0, s.JK)().location;
        l.A.getState().resetPath(e),
            (this.unlistenKeyboardChange = l.A.subscribe(this.handleKeybindRouteChange)),
            r.A.addChangeListener(this.handleConnectionChange);
    }
    handleConnectionChange = () => {
        let e = r.A.isConnected(),
            t = e && !this.connected;
        (this.connected = e),
            t && ((this.routeChangeCount = 0), this.executeRouteRewrites((0, s.JK)().location, "REPLACE"));
    };
    handleRouteChange = (e, t) => {
        if ("POP" !== t) {
            if (this.executeRouteRewrites(e, t)) return;
            if (!(0, a.o)(e)) return void (0, s.bG)(o.BVt.ME);
        }
        let i = l.A.getState();
        for (let n of (i.basePath !== e.pathname && i.resetPath(e.pathname), this.listeners))
            try {
                n(e, t);
            } catch (e) {
                console.warn("RouteManager.listen: A route listener has caused an error", e.message);
            }
        this.routeChangeCount = 0;
    };
    executeRouteRewrites(e, t) {
        if (((this.routeChangeCount += 1), this.routeChangeCount < 10))
            for (let i of this.rewrites) {
                let r = (0, s.JK)().location.pathname,
                    l = i(e, t);
                if (null != l)
                    return (
                        (0, n.Z)({
                            message: "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
                            data: { replacePath: l.path, previousPath: r },
                        }),
                        (0, s.bG)(l.path, l.state),
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
        let e = l.A.getState();
        null != e.path && (0, s.pX)(e.path);
    };
    cleanup() {
        this.unlistenHistory?.(),
            (this.unlistenHistory = void 0),
            this.unlistenKeyboardChange?.(),
            (this.unlistenKeyboardChange = void 0),
            r.A.removeChangeListener(this.handleConnectionChange);
    }
    addRouteChangeListener(e) {
        return (
            null != this.unlistenHistory && e((0, s.JK)().location, "REPLACE"),
            this.listeners.add(e),
            () => this.removeRouteChangeListener(e)
        );
    }
    addRouteRewriter(e) {
        if (null != this.unlistenHistory) {
            let t = e((0, s.JK)().location, (0, s.JK)().action);
            null != t && (0, s.bG)(t.path, t.state);
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
        return (0, s.JK)();
    }
}
let d = new c();
