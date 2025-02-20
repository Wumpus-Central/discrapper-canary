i.d(t, { Z: () => d }), i(47120), i(411104);
var n = i(572299),
    r = i(38618),
    o = i(905423),
    s = i(622143),
    l = i(703656),
    a = i(981631);
function c(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = i),
        e
    );
}
let d = new (class {
    initialize() {
        this.cleanup(), (this.unlistenHistory = (0, l.s1)().listen(this.handleRouteChange));
        let { pathname: e } = (0, l.s1)().location;
        o.Z.getState().resetPath(e), (this.unlistenKeyboardChange = o.Z.subscribe(this.handleKeybindRouteChange)), r.Z.addChangeListener(this.handleConnectionChange);
    }
    executeRouteRewrites(e, t) {
        if (((this.routeChangeCount += 1), this.routeChangeCount < 10))
            for (let i of this.rewrites) {
                let r = (0, l.s1)().location.pathname,
                    o = i(e, t);
                if (null != o)
                    return (
                        (0, n.n)({
                            message: 'RouteManager.handleRouteChange: A route rewrite is replacing the current route',
                            data: {
                                replacePath: o.path,
                                previousPath: r
                            }
                        }),
                        (0, l.dL)(o.path, o.state),
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
        return null != this.unlistenHistory && e((0, l.s1)().location, 'REPLACE'), this.listeners.add(e), () => this.removeRouteChangeListener(e);
    }
    addRouteRewriter(e) {
        if (null != this.unlistenHistory) {
            let t = e((0, l.s1)().location, (0, l.s1)().action);
            null != t && (0, l.dL)(t.path, t.state);
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
        return (0, l.s1)();
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
                (this.connected = e), t && ((this.routeChangeCount = 0), this.executeRouteRewrites((0, l.s1)().location, 'REPLACE'));
            }),
            c(this, 'handleRouteChange', (e, t) => {
                if (this.executeRouteRewrites(e, t)) return;
                if (!(0, s.r)(e)) {
                    (0, l.dL)(a.Z5c.ME);
                    return;
                }
                let i = o.Z.getState();
                for (let n of (i.basePath !== e.pathname && i.resetPath(e.pathname), this.listeners))
                    try {
                        n(e, t);
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
                null != e.path && (0, l.uL)(e.path);
            });
    }
})();
