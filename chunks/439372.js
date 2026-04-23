"use strict";
n.d(t, { A: () => i }), n(423034);
var r = n(73153);
class i {
    initializedCount = 0;
    initialize() {
        this.initializedCount++,
            this.initializedCount > 1 ||
                (this._initialize(),
                Object.entries(this.actions).forEach((e) => {
                    let [t, n] = e;
                    r.h.subscribe(t, "function" == typeof n ? n : n.callback);
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
                    r.h.unsubscribe(t, "function" == typeof n ? n : n.callback);
                })));
    }
    actions = {};
    stores = new Map();
    _initialize() {}
    _terminate() {}
}
