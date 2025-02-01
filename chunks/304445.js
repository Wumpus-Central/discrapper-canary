i.d(e, { Z: () => d }), i(47120), i(411104);
var n = i(572299),
    r = i(38618),
    s = i(905423),
    o = i(622143),
    l = i(703656),
    a = i(981631);
function c(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = i),
        t
    );
}
let d = new (class {
    initialize() {
        this.cleanup(), (this.unlistenHistory = (0, l.s1)().listen(this.handleRouteChange));
        let { pathname: t } = (0, l.s1)().location;
        s.Z.getState().resetPath(t), (this.unlistenKeyboardChange = s.Z.subscribe(this.handleKeybindRouteChange)), r.Z.addChangeListener(this.handleConnectionChange);
    }
    executeRouteRewrites(t, e) {
        if (((this.routeChangeCount += 1), this.routeChangeCount < 10))
            for (let i of this.rewrites) {
                let r = (0, l.s1)().location.pathname,
                    s = i(t, e);
                if (null != s)
                    return (
                        (0, n.n)({
                            message: 'RouteManager.handleRouteChange: A route rewrite is replacing the current route',
                            data: {
                                replacePath: s.path,
                                previousPath: r
                            }
                        }),
                        (0, l.dL)(s.path, s.state),
                        !0
                    );
            }
        else throw Error('RouteManager: Something has gone horribly wrong with rewrites');
        return !1;
    }
    cleanup() {
        var t, e;
        null === (t = this.unlistenHistory) || void 0 === t || t.call(this), (this.unlistenHistory = void 0), null === (e = this.unlistenKeyboardChange) || void 0 === e || e.call(this), (this.unlistenKeyboardChange = void 0), r.Z.removeChangeListener(this.handleConnectionChange);
    }
    addRouteChangeListener(t) {
        return null != this.unlistenHistory && t((0, l.s1)().location, 'REPLACE'), this.listeners.add(t), () => this.removeRouteChangeListener(t);
    }
    addRouteRewriter(t) {
        if (null != this.unlistenHistory) {
            let e = t((0, l.s1)().location, (0, l.s1)().action);
            null != e && (0, l.dL)(e.path, e.state);
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
                let t = r.Z.isConnected(),
                    e = t && !this.connected;
                (this.connected = t), e && ((this.routeChangeCount = 0), this.executeRouteRewrites((0, l.s1)().location, 'REPLACE'));
            }),
            c(this, 'handleRouteChange', (t, e) => {
                if (this.executeRouteRewrites(t, e)) return;
                if (!(0, o.r)(t)) {
                    (0, l.dL)(a.Z5c.ME);
                    return;
                }
                let i = s.Z.getState();
                for (let n of (i.basePath !== t.pathname && i.resetPath(t.pathname), this.listeners))
                    try {
                        n(t, e);
                    } catch (t) {
                        console.warn('RouteManager.listen: A route listener has caused an error', t.message);
                    }
                this.routeChangeCount = 0;
            }),
            c(this, 'handleKeybindRouteChange', (t) => {
                let { path: e } = t;
                null != e ? (clearTimeout(this.timer), (this.timer = setTimeout(this.flushRoute, 200))) : null == e && clearTimeout(this.timer);
            }),
            c(this, 'flushRoute', () => {
                clearTimeout(this.timer);
                let t = s.Z.getState();
                null != t.path && (0, l.uL)(t.path);
            });
    }
})();
