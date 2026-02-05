"use strict";
n.d(t, {
    Aq: () => c,
    HP: () => o,
    KE: () => i,
    Lp: () => _,
    M4: () => u,
    Mz: () => l,
    eM: () => r,
    nF: () => d,
    t$: () => s,
});
let r = "data-list-item-id",
    i = "data-list-id",
    a = "___";
function s(e, t) {
    return `${e}${a}${t}`;
}
function o(e) {
    return e.split(a)[1];
}
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
    return `[${t}="${e}"]`;
}
function u(e, t) {
    return `${e}-${t}`;
}
function c(e, t, n) {
    return `${e}-${t}-${n}`;
}
function d(e, t) {
    let n = !1;
    return function () {
        for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
        n || (e(...i), (n = !0), setTimeout(() => (n = !1), t));
    };
}
class _ {
    makeHandler;
    handlers = new Map();
    constructor(e) {
        (this.makeHandler = e), (this.makeHandler = e);
    }
    get(e) {
        let t = this.handlers.get(e);
        return null == t && ((t = this.makeHandler(e)), this.handlers.set(e, t)), t;
    }
    clean() {
        delete this.handlers, (this.handlers = new Map());
    }
}
