n.d(t, { I: () => o });
var r = n(264181);
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
class o {
    static fromServer(e) {
        return new o(e);
    }
    constructor(e) {
        i(this, 'title', void 0), i(this, 'body', void 0), i(this, 'asset', void 0), i(this, 'popoutAsset', void 0), i(this, 'version', void 0), i(this, 'revertTextColor', void 0), (this.type = r.Z.BANNER), (this.title = e.title), (this.body = e.body), (this.asset = e.asset), (this.popoutAsset = e.popout_asset), (this.version = e.version), (this.revertTextColor = e.revert_text_color);
    }
}
