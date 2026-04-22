"use strict";
n.d(t, {
    Aq: () => u,
    HP: () => a,
    KE: () => i,
    Lp: () => c,
    M4: () => l,
    Mz: () => o,
    eM: () => r,
    nF: () => d,
    t$: () => s,
});
let r = "data-list-item-id",
    i = "data-list-id";
function s(e, t) {
    return `${e}___${t}`;
}
function a(e) {
    return e.split("___")[1];
}
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
    return `[${t}="${e}"]`;
}
function l(e, t) {
    return `${e}-${t}`;
}
function u(e, t, n) {
    return `${e}-${t}-${n}`;
}
function d(e, t) {
    let n = !1;
    return function () {
        for (var r = arguments.length, i = Array(r), s = 0; s < r; s++) i[s] = arguments[s];
        n || (e(...i), (n = !0), setTimeout(() => (n = !1), t));
    };
}
class c {
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
