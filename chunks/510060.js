n.d(t, {
    I8: () => s,
    KW: () => m,
    LT: () => u,
    Me: () => o,
    eU: () => c,
    rI: () => d
});
var r = n(512722),
    a = n.n(r);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let l = 2 / 3,
    s = 12;
class o {
    getWidth(e) {
        return this.getRenderOptions(e).columnWidth;
    }
    getRenderOptions(e) {
        if (e <= this.minWidth)
            return {
                columns: 1,
                columnWidth: this.minWidth
            };
        let t = e / this.maxWidth,
            n = Math.max(Math.floor(t + (e / this.minWidth - t) / 2), 1),
            r = this.gap * (n - 1);
        return {
            columns: n,
            columnWidth: (e - r) / n
        };
    }
    constructor({ minWidth: e, maxWidth: t, gap: n }) {
        i(this, 'minWidth', void 0), i(this, 'maxWidth', void 0), i(this, 'gap', void 0), a()(e < t, 'minWidth needs to be smaller than maxWidth'), (this.minWidth = e), (this.maxWidth = t), (this.gap = n);
    }
}
let c = {
        columns: 1,
        columnWidth: 450
    },
    d = (e) => {
        let t = e - 2,
            n = Math.ceil(t * l);
        return [t, n];
    },
    u = 12,
    m = (e) => 60 + d(e - 2 * u)[1] + 24 + 3 * s;
