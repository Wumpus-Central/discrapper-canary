n(47120), n(411104);
var r = n(572299),
    a = n(38618),
    l = n(905423),
    i = n(622143),
    o = n(703656),
    s = n(981631);
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
t.Z = new (class e {
    initialize() {
        this.cleanup(), (this.unlistenHistory = (0, o.s1)().listen(this.handleRouteChange));
        let { pathname: e } = (0, o.s1)().location;
        l.Z.getState().resetPath(e), (this.unlistenKeyboardChange = l.Z.subscribe(this.handleKeybindRouteChange)), a.Z.addChangeListener(this.handleConnectionChange);
    }
    executeRouteRewrites(e, t) {
        if (((this.routeChangeCount += 1), this.routeChangeCount < 10))
            for (let n of this.rewrites) {
                let a = (0, o.s1)().location.pathname,
                    l = n(e, t);
                if (null != l)
                    return (
                        (0, r.n)({
                            message: 'RouteManager.handleRouteChange: A route rewrite is replacing the current route',
                            data: {
                                replacePath: l.path,
                                previousPath: a
                            }
                        }),
                        (0, o.dL)(l.path, l.state),
                        !0
                    );
            }
        else throw Error('RouteManager: Something has gone horribly wrong with rewrites');
        return !1;
    }
    cleanup() {
        var e, t;
        null === (e = this.unlistenHistory) || void 0 === e || e.call(this), (this.unlistenHistory = void 0), null === (t = this.unlistenKeyboardChange) || void 0 === t || t.call(this), (this.unlistenKeyboardChange = void 0), a.Z.removeChangeListener(this.handleConnectionChange);
    }
    addRouteChangeListener(e) {
        return null != this.unlistenHistory && e((0, o.s1)().location, 'REPLACE'), this.listeners.add(e), () => this.removeRouteChangeListener(e);
    }
    addRouteRewriter(e) {
        if (null != this.unlistenHistory) {
            let t = e((0, o.s1)().location, (0, o.s1)().action);
            null != t && (0, o.dL)(t.path, t.state);
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
        return (0, o.s1)();
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
                let e = a.Z.isConnected(),
                    t = e && !this.connected;
                (this.connected = e), t && ((this.routeChangeCount = 0), this.executeRouteRewrites((0, o.s1)().location, 'REPLACE'));
            }),
            c(this, 'handleRouteChange', (e, t) => {
                if (this.executeRouteRewrites(e, t)) return;
                if (!(0, i.r)(e)) {
                    (0, o.dL)(s.Z5c.ME);
                    return;
                }
                let n = l.Z.getState();
                for (let r of (n.basePath !== e.pathname && n.resetPath(e.pathname), this.listeners))
                    try {
                        r(e, t);
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
                let e = l.Z.getState();
                null != e.path && (0, o.uL)(e.path);
            });
    }
})();
