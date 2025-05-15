n.d(t, { Z: () => a }), n(415506), n(388685), n(17089);
var r = n(570140);
function i(e, t, n) {
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
class a {
    initialize() {
        this.initializedCount++,
            this.initializedCount > 1 ||
                (this._initialize(),
                Object.entries(this.actions).forEach((e) => {
                    let [t, n] = e;
                    r.Z.subscribe(t, 'function' == typeof n ? n : n.callback);
                }),
                this.stores.forEach((e, t) => {
                    t.addChangeListener(e), e();
                }));
    }
    terminate(e) {
        this.initializedCount <= 0 ||
            (e ? (this.initializedCount = 0) : this.initializedCount--,
            0 === this.initializedCount &&
                (this._terminate(),
                Object.entries(this.actions).forEach((e) => {
                    let [t, n] = e;
                    r.Z.unsubscribe(t, 'function' == typeof n ? n : n.callback);
                })));
    }
    _initialize() {}
    _terminate() {}
    constructor() {
        i(this, 'initializedCount', 0), i(this, 'actions', {}), i(this, 'stores', new Map());
    }
}
