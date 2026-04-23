"use strict";
n.d(t, { CV: () => d, IZ: () => u, JT: () => o, PL: () => i, iX: () => m, qf: () => r, tm: () => c });
var l,
    a = n(284009),
    s = n.n(a),
    i =
        (((l = {})[(l.THREE_BY_TWO = 2 / 3)] = "THREE_BY_TWO"),
        (l[(l.SIXTEEN_BY_NINE = 9 / 16)] = "SIXTEEN_BY_NINE"),
        l);
let r = 12;
class o {
    minWidth;
    maxWidth;
    gap;
    constructor({ minWidth: e, maxWidth: t, gap: n }) {
        s()(e < t, "minWidth needs to be smaller than maxWidth"),
            (this.minWidth = e),
            (this.maxWidth = t),
            (this.gap = n);
    }
    getWidth(e) {
        return this.getRenderOptions(e).columnWidth;
    }
    getRenderOptions(e) {
        if (e <= this.minWidth) return { columns: 1, columnWidth: this.minWidth };
        let t = e / this.maxWidth,
            n = Math.max(Math.floor(t + (e / this.minWidth - t) / 2), 1),
            l = this.gap * (n - 1);
        return { columns: n, columnWidth: (e - l) / n };
    }
}
let d = { columns: 1, columnWidth: 450 },
    c = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.THREE_BY_TWO,
            n = e - 2,
            l = Math.ceil(n * t);
        return [n, l];
    },
    u = 12,
    m = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.THREE_BY_TWO;
        return 60 + c(e - 2 * u, t)[1] + 24 + 3 * r;
    };
