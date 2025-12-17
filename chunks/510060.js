n.d(t, {
    I8: () => o,
    KW: () => f,
    LT: () => m,
    Lv: () => s,
    Me: () => c,
    eU: () => d,
    rI: () => u,
});
var a,
    r = n(512722),
    i = n.n(r);
function l(e, t, n) {
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
    (((a = {})[(a.THREE_BY_TWO = 2 / 3)] = "THREE_BY_TWO"), (a[(a.SIXTEEN_BY_NINE = 9 / 16)] = "SIXTEEN_BY_NINE"), a);
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
            a = this.gap * (n - 1);
        return {
            columns: n,
            columnWidth: (e - a) / n,
        };
    }
    constructor({ minWidth: e, maxWidth: t, gap: n }) {
        l(this, "minWidth", void 0),
            l(this, "maxWidth", void 0),
            l(this, "gap", void 0),
            i()(e < t, "minWidth needs to be smaller than maxWidth"),
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
            a = Math.ceil(n * t);
        return [n, a];
    },
    m = 12,
    f = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.THREE_BY_TWO;
        return 60 + u(e - 2 * m, t)[1] + 24 + 3 * o;
    };
