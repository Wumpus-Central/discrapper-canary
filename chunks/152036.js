"use strict";
n.d(t, { E: () => r });
class r {
    listeners = new Set();
    add = (e) => {
        this.listeners.add(e);
    };
    remove = (e) => {
        this.listeners.delete(e);
    };
    addConditional = (() => {
        var e = this;
        return function (t) {
            let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (n && !1 === t()) return;
            let r = () => {
                !1 === t() && e.remove(r);
            };
            e.add(r);
        };
    })();
    has(e) {
        return this.listeners.has(e);
    }
    hasAny() {
        return this.listeners.size > 0;
    }
    invokeAll() {
        this.listeners.forEach((e) => e());
    }
}
