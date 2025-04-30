n.d(t, { Z: () => l }), n(953529);
var r = n(666572),
    i = n(81063),
    a = n(649256);
function o(e, t, n) {
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
let s = 512;
class l {
    getAssetURL() {
        return this.type === r.e.MANAGED ? (0, i.xF)(this.applicationId, this.assetId, s) : this.type === r.e.QUICK ? (0, a.xB)(this.assetPath) : void 0;
    }
    constructor(e) {
        var t;
        o(this, 'type', void 0), o(this, 'applicationId', void 0), o(this, 'linkId', void 0), o(this, 'assetId', void 0), o(this, 'assetPath', void 0), o(this, 'title', void 0), o(this, 'description', void 0), o(this, 'customId', void 0);
        let n = (0, r._)(e.link_id);
        (this.type = null != (t = null == n ? void 0 : n.type) ? t : null), (this.applicationId = e.application_id), (this.linkId = e.link_id), (this.assetId = 'asset_id' in e ? e.asset_id : void 0), (this.assetPath = 'asset_path' in e ? e.asset_path : void 0), (this.title = e.title), (this.description = e.description), (this.customId = e.custom_id);
    }
}
