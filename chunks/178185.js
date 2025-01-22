r.d(n, {
    E: function () {
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
        return new o({
            ...e,
            dismissibleContent: e.dismissible_content
        });
    }
    constructor(e) {
        a(this, 'dismissibleContent', void 0), a(this, 'version', void 0), (this.type = i.Z.BADGE), (this.dismissibleContent = e.dismissibleContent), (this.version = e.version);
    }
}
