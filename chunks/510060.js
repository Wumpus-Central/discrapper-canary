n.d(t, {
    I8: () => o,
    KW: () => h,
    LT: () => m,
    Lv: () => s,
    Me: () => c,
    eU: () => d,
    rI: () => u,
});
var r,
    i = n(512722),
    l = n.n(i);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var s =
    (((r = {})[(r.THREE_BY_TWO = 2 / 3)] = "THREE_BY_TWO"), (r[(r.SIXTEEN_BY_NINE = 9 / 16)] = "SIXTEEN_BY_NINE"), r);
let o = 12;
class c {
    getWidth(e) {
        return this.getRenderOptions(e).columnWidth;
    }
    getRenderOptions(e) {
        if (e <= this.minWidth)
            return {
                columns: 1,
                columnWidth: this.minWidth,
            };
        let t = e / this.maxWidth,
            n = Math.max(Math.floor(t + (e / this.minWidth - t) / 2), 1),
            r = this.gap * (n - 1);
        return {
            columns: n,
            columnWidth: (e - r) / n,
        };
    }
    constructor({ minWidth: e, maxWidth: t, gap: n }) {
        a(this, "minWidth", void 0),
            a(this, "maxWidth", void 0),
            a(this, "gap", void 0),
            l()(e < t, "minWidth needs to be smaller than maxWidth"),
            (this.minWidth = e),
            (this.maxWidth = t),
            (this.gap = n);
    }
}
let d = {
        columns: 1,
        columnWidth: 450,
    },
    u = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.THREE_BY_TWO,
            n = e - 2,
            r = Math.ceil(n * t);
        return [n, r];
    },
    m = 12,
    h = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.THREE_BY_TWO;
        return 60 + u(e - 2 * m, t)[1] + 24 + 3 * o;
    };
