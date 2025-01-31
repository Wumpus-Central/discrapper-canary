n.d(t, { E: () => a });
var i = n(264181);
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
class a {
    static fromServer(e) {
        return new a({
            ...e,
            dismissibleContent: e.dismissible_content
        });
    }
    constructor(e) {
        r(this, 'dismissibleContent', void 0), r(this, 'version', void 0), (this.type = i.Z.BADGE), (this.dismissibleContent = e.dismissibleContent), (this.version = e.version);
    }
}
