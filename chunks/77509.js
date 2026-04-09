n.d(t, { A: () => d });
var i = n(984083),
    a = n(142120),
    r = n(366811),
    s = n(612716),
    l = n(976860),
    o = n(652215);
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
        let { pathname: e } = (0, l.JK)().location;
        r.A.getState().resetPath(e),
            (this.unlistenKeyboardChange = r.A.subscribe(this.handleKeybindRouteChange)),
            a.A.addChangeListener(this.handleConnectionChange);
    }
    handleConnectionChange = () => {
        let e = a.A.isConnected(),
            t = e && !this.connected;
        (this.connected = e),
            t && ((this.routeChangeCount = 0), this.executeRouteRewrites((0, l.JK)().location, "REPLACE"));
    };
    handleRouteChange = (e, t) => {
        if ("POP" !== t) {
            if (this.executeRouteRewrites(e, t)) return;
            if (!(0, s.o)(e)) return void (0, l.bG)(o.BVt.ME);
        }
        let n = r.A.getState();
        for (let i of (n.basePath !== e.pathname && n.resetPath(e.pathname), this.listeners))
            try {
                i(e, t);
            } catch (e) {
                console.warn("RouteManager.listen: A route listener has caused an error", e.message);
            }
        this.routeChangeCount = 0;
    };
    executeRouteRewrites(e, t) {
        if (((this.routeChangeCount += 1), this.routeChangeCount < 10))
            for (let n of this.rewrites) {
                let a = (0, l.JK)().location.pathname,
                    r = n(e, t);
                if (null != r)
                    return (
                        (0, i.Z)({
                            message: "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
                            data: { replacePath: r.path, previousPath: a },
                        }),
                        (0, l.bG)(r.path, r.state),
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
        let e = r.A.getState();
        null != e.path && (0, l.pX)(e.path);
    };
    cleanup() {
        this.unlistenHistory?.(),
            (this.unlistenHistory = void 0),
            this.unlistenKeyboardChange?.(),
            (this.unlistenKeyboardChange = void 0),
            a.A.removeChangeListener(this.handleConnectionChange);
    }
    addRouteChangeListener(e) {
        return (
            null != this.unlistenHistory && e((0, l.JK)().location, "REPLACE"),
            this.listeners.add(e),
            () => this.removeRouteChangeListener(e)
        );
    }
    addRouteRewriter(e) {
        if (null != this.unlistenHistory) {
            let t = e((0, l.JK)().location, (0, l.JK)().action);
            null != t && (0, l.bG)(t.path, t.state);
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
        return (0, l.JK)();
    }
}
let d = new c();
