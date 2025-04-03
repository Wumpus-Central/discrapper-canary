n.d(t, { Z: () => u }), n(47120), n(411104);
var i = n(572299),
    r = n(38618),
    o = n(905423),
    l = n(622143),
    s = n(703656),
    a = n(981631);
function c(e, t, n) {
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
let u = new (class {
    initialize() {
        this.cleanup(), (this.unlistenHistory = (0, s.s1)().listen(this.handleRouteChange));
        let { pathname: e } = (0, s.s1)().location;
        o.Z.getState().resetPath(e), (this.unlistenKeyboardChange = o.Z.subscribe(this.handleKeybindRouteChange)), r.Z.addChangeListener(this.handleConnectionChange);
    }
    executeRouteRewrites(e, t) {
        if (((this.routeChangeCount += 1), this.routeChangeCount < 10))
            for (let n of this.rewrites) {
                let r = (0, s.s1)().location.pathname,
                    o = n(e, t);
                if (null != o)
                    return (
                        (0, i.n)({
                            message: 'RouteManager.handleRouteChange: A route rewrite is replacing the current route',
                            data: {
                                replacePath: o.path,
                                previousPath: r
                            }
                        }),
                        (0, s.dL)(o.path, o.state),
                        !0
                    );
            }
        else throw Error('RouteManager: Something has gone horribly wrong with rewrites');
        return !1;
    }
    cleanup() {
        var e, t;
        null == (e = this.unlistenHistory) || e.call(this), (this.unlistenHistory = void 0), null == (t = this.unlistenKeyboardChange) || t.call(this), (this.unlistenKeyboardChange = void 0), r.Z.removeChangeListener(this.handleConnectionChange);
    }
    addRouteChangeListener(e) {
        return null != this.unlistenHistory && e((0, s.s1)().location, 'REPLACE'), this.listeners.add(e), () => this.removeRouteChangeListener(e);
    }
    addRouteRewriter(e) {
        if (null != this.unlistenHistory) {
            let t = e((0, s.s1)().location, (0, s.s1)().action);
            null != t && (0, s.dL)(t.path, t.state);
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
        return (0, s.s1)();
    }
    constructor() {
        c(this, 'unlistenHistory', void 0),
            c(this, 'unlistenKeyboardChange', void 0),
            c(this, 'rewrites', new Set()),
            c(this, 'listeners', new Set()),
            c(this, 'routeChangeCount', 0),
            c(this, 'timer', -1),
            c(this, 'connected', !1),
            c(this, 'handleConnectionChange', () => {
                let e = r.Z.isConnected(),
                    t = e && !this.connected;
                (this.connected = e), t && ((this.routeChangeCount = 0), this.executeRouteRewrites((0, s.s1)().location, 'REPLACE'));
            }),
            c(this, 'handleRouteChange', (e, t) => {
                if (this.executeRouteRewrites(e, t)) return;
                if (!(0, l.r)(e)) return void (0, s.dL)(a.Z5c.ME);
                let n = o.Z.getState();
                for (let i of (n.basePath !== e.pathname && n.resetPath(e.pathname), this.listeners))
                    try {
                        i(e, t);
                    } catch (e) {
                        console.warn('RouteManager.listen: A route listener has caused an error', e.message);
                    }
                this.routeChangeCount = 0;
            }),
            c(this, 'handleKeybindRouteChange', (e) => {
                let { path: t } = e;
                null != t ? (clearTimeout(this.timer), (this.timer = setTimeout(this.flushRoute, 200))) : null == t && clearTimeout(this.timer);
            }),
            c(this, 'flushRoute', () => {
                clearTimeout(this.timer);
                let e = o.Z.getState();
                null != e.path && (0, s.uL)(e.path);
            });
    }
})();
