"use strict";
n.d(t, { A: () => r }), n(423034);
var i = n(228366);
class r {
    initializedCount = 0;
    initialize() {
        this.initializedCount++,
            this.initializedCount > 1 ||
                (this._initialize(),
                Object.entries(this.actions).forEach((e) => {
                    let [t, n] = e;
                    i.h.subscribe(t, "function" == typeof n ? n : n.callback);
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
                    i.h.unsubscribe(t, "function" == typeof n ? n : n.callback);
                }),
                this.stores.forEach((e, t) => {
                    t.removeChangeListener(e);
                })));
    }
    actions = {};
    stores = new Map();
    _initialize() {}
    _terminate() {}
}
