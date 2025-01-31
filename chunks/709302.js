n.d(t, { Z: () => s });
var i = n(81825);
function r(e, t, n) {
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
class a extends i.Z {
    static fromPath(e) {
        return new a({
            id: e,
            path: e
        });
    }
    constructor(e) {
        super(), r(this, 'id', void 0), r(this, 'path', void 0), (this.id = e.id), (this.path = e.path);
    }
}
let s = a;
