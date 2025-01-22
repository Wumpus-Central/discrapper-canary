r.d(n, {
    I: function () {
        return o;
    }
});
var i = r(264181);
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
class o {
    static fromServer(e) {
        return new o(e);
    }
    constructor(e) {
        a(this, 'title', void 0), a(this, 'body', void 0), a(this, 'asset', void 0), a(this, 'popoutAsset', void 0), a(this, 'version', void 0), a(this, 'revertTextColor', void 0), (this.type = i.Z.BANNER), (this.title = e.title), (this.body = e.body), (this.asset = e.asset), (this.popoutAsset = e.popout_asset), (this.version = e.version), (this.revertTextColor = e.revert_text_color);
    }
}
