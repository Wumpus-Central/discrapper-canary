n.d(t, { I: () => a });
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
        return new a(e);
    }
    constructor(e) {
        r(this, 'title', void 0), r(this, 'body', void 0), r(this, 'asset', void 0), r(this, 'popoutAsset', void 0), r(this, 'version', void 0), r(this, 'revertTextColor', void 0), (this.type = i.Z.BANNER), (this.title = e.title), (this.body = e.body), (this.asset = e.asset), (this.popoutAsset = e.popout_asset), (this.version = e.version), (this.revertTextColor = e.revert_text_color);
    }
}
