"use strict";
n.d(t, { A: () => r });
let r = class extends Array {
    maxSize;
    constructor(e) {
        super(), (this.maxSize = e);
    }
    push() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        for (let e of t) this.length >= this.maxSize && this.shift(), super.push(e);
        return this.length;
    }
};
