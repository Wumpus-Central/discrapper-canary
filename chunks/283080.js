r.d(n, {
    EA: function () {
        return c;
    }
});
var i = r(47120);
function a(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
r(200651), r(192379);
class o {
    addValue(e) {
        var n, r;
        this.count++;
        let i = Math.round(1000 * e);
        (this.totalMicroseconds += i), (this.minMicroseconds = Math.min(null !== (n = this.minMicroseconds) && void 0 !== n ? n : Number.MAX_SAFE_INTEGER, i)), (this.maxMicroseconds = Math.max(null !== (r = this.maxMicroseconds) && void 0 !== r ? r : Number.MIN_SAFE_INTEGER, i));
    }
    get mean() {
        return this.totalMicroseconds / this.count;
    }
    constructor() {
        a(this, 'totalMicroseconds', 0), a(this, 'count', 0), a(this, 'minMicroseconds', null), a(this, 'maxMicroseconds', null);
    }
}
let s = {},
    l = !0;
function u(e, n) {
    let r = e.length > n ? n : e.length;
    return e.substring(0, r).padEnd(n, ' ');
}
function c() {
    if (0 === Object.keys(s).length) return '';
    let e = 'Component Render Stats (microseconds):\n',
        n = '|'.concat(u('id', 20), '|').concat(u('Mounts', 8), '|').concat(u('Mount Mean', 20), '|').concat(u('Updates', 8), '|').concat(u('Update Mean', 20), '|').concat(u('Nested', 8), '|').concat(u('Nested Mean', 20), '|\n');
    return (
        e +
        n +
        Object.entries(s).map((e) => {
            let [n, r] = e;
            return '|'.concat(u(n, 20), '|').concat(u(r.mount.count.toString(), 8), '|').concat(u(r.mount.mean.toString(), 20), '|').concat(u(r.update.count.toString(), 8), '|').concat(u(r.update.mean.toString(), 20), '|').concat(u(r.nestedUpdate.count.toString(), 8), '|').concat(u(r.nestedUpdate.mean.toString(), 20), '|\n');
        })
    );
}
