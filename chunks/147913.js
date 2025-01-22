r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(411104);
var a = r(47120);
var o = r(570140);
function s(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class l {
    initialize() {
        this.initializedCount++,
            !(this.initializedCount > 1) &&
                (this._initialize(),
                Object.entries(this.actions).forEach((e) => {
                    let [n, r] = e;
                    o.Z.subscribe(n, 'function' == typeof r ? r : r.callback);
                }),
                this.stores.forEach((e, n) => {
                    n.addChangeListener(e), e();
                }));
    }
    terminate(e) {
        !(this.initializedCount <= 0) &&
            (e ? (this.initializedCount = 0) : this.initializedCount--,
            0 === this.initializedCount &&
                (this._terminate(),
                Object.entries(this.actions).forEach((e) => {
                    let [n, r] = e;
                    o.Z.unsubscribe(n, 'function' == typeof r ? r : r.callback);
                })));
    }
    _initialize() {}
    _terminate() {}
    constructor() {
        s(this, 'initializedCount', 0), s(this, 'actions', {}), s(this, 'stores', new Map());
    }
}
