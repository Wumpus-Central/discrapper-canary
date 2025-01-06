n(47120), n(411104);
var i = n(572299),
    r = n(38618),
    l = n(905423),
    u = n(622143),
    a = n(703656),
    s = n(981631);
function o(e, t, n) {
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
        this.cleanup(), (this.unlistenHistory = (0, a.s1)().listen(this.handleRouteChange));
        let { pathname: e } = (0, a.s1)().location;
        l.Z.getState().resetPath(e), (this.unlistenKeyboardChange = l.Z.subscribe(this.handleKeybindRouteChange)), r.Z.addChangeListener(this.handleConnectionChange);
    }
    executeRouteRewrites(e, t) {
        if (((this.routeChangeCount += 1), this.routeChangeCount < 10))
            for (let n of this.rewrites) {
                let r = (0, a.s1)().location.pathname,
                    l = n(e, t);
                if (null != l)
                    return (
                        (0, i.n)({
                            message: 'RouteManager.handleRouteChange: A route rewrite is replacing the current route',
                            data: {
                                replacePath: l.path,
                                previousPath: r
                            }
                        }),
                        (0, a.dL)(l.path, l.state),
                        !0
                    );
            }
        else throw Error('RouteManager: Something has gone horribly wrong with rewrites');
        return !1;
    }
    cleanup() {
        var e, t;
        null === (e = this.unlistenHistory) || void 0 === e || e.call(this), (this.unlistenHistory = void 0), null === (t = this.unlistenKeyboardChange) || void 0 === t || t.call(this), (this.unlistenKeyboardChange = void 0), r.Z.removeChangeListener(this.handleConnectionChange);
    }
    addRouteChangeListener(e) {
        return null != this.unlistenHistory && e((0, a.s1)().location, 'REPLACE'), this.listeners.add(e), () => this.removeRouteChangeListener(e);
    }
    addRouteRewriter(e) {
        if (null != this.unlistenHistory) {
            let t = e((0, a.s1)().location, (0, a.s1)().action);
            null != t && (0, a.dL)(t.path, t.state);
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
        return (0, a.s1)();
    }
    constructor() {
        o(this, 'unlistenHistory', void 0),
            o(this, 'unlistenKeyboardChange', void 0),
            o(this, 'rewrites', new Set()),
            o(this, 'listeners', new Set()),
            o(this, 'routeChangeCount', 0),
            o(this, 'timer', -1),
            o(this, 'connected', !1),
            o(this, 'handleConnectionChange', () => {
                let e = r.Z.isConnected(),
                    t = e && !this.connected;
                (this.connected = e), t && ((this.routeChangeCount = 0), this.executeRouteRewrites((0, a.s1)().location, 'REPLACE'));
            }),
            o(this, 'handleRouteChange', (e, t) => {
                if (this.executeRouteRewrites(e, t)) return;
                if (!(0, u.r)(e)) {
                    (0, a.dL)(s.Z5c.ME);
                    return;
                }
                let n = l.Z.getState();
                for (let i of (n.basePath !== e.pathname && n.resetPath(e.pathname), this.listeners))
                    try {
                        i(e, t);
                    } catch (e) {
                        console.warn('RouteManager.listen: A route listener has caused an error', e.message);
                    }
                this.routeChangeCount = 0;
            }),
            o(this, 'handleKeybindRouteChange', (e) => {
                let { path: t } = e;
                null != t ? (clearTimeout(this.timer), (this.timer = setTimeout(this.flushRoute, 200))) : null == t && clearTimeout(this.timer);
            }),
            o(this, 'flushRoute', () => {
                clearTimeout(this.timer);
                let e = l.Z.getState();
                null != e.path && (0, a.uL)(e.path);
            });
    }
})();
