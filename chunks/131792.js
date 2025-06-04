n.d(t, { Z: () => o });
var r = n(81825);
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
class o extends r.Z {
    constructor(e) {
        var t;
        super(), i(this, 'id', void 0), i(this, 'widgets', void 0), i(this, 'version', void 0), (this.version = null != (t = Number(e.version)) ? t : 0), (this.id = e.id || ''), (this.widgets = e.widgets || []);
    }
}
