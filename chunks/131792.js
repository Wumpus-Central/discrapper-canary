n.d(t, { Z: () => a });
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
    constructor(e) {
        var t;
        super(), r(this, 'id', void 0), r(this, 'widgets', void 0), r(this, 'version', void 0), (this.version = null !== (t = Number(e.version)) && void 0 !== t ? t : 0), (this.id = e.id || ''), (this.widgets = e.widgets || []);
    }
}
