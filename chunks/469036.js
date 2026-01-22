n.d(t, {
    A: () => l,
}),
    n(228524);
var r = n(526218),
    i = n(139675),
    a = n(257269);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = 512;
class l {
    getAssetURL() {
        return this.type === r.G.MANAGED
            ? (0, i.uD)(this.applicationId, this.assetId, o)
            : this.type === r.G.QUICK
              ? (0, a.VP)(this.assetPath)
              : void 0;
    }
    constructor(e) {
        var t;
        s(this, "type", void 0),
            s(this, "applicationId", void 0),
            s(this, "linkId", void 0),
            s(this, "assetId", void 0),
            s(this, "assetPath", void 0),
            s(this, "title", void 0),
            s(this, "description", void 0),
            s(this, "customId", void 0);
        const n = (0, r.t)(e.link_id);
        (this.type = null != (t = null == n ? void 0 : n.type) ? t : null),
            (this.applicationId = e.application_id),
            (this.linkId = e.link_id),
            (this.assetId = "asset_id" in e ? e.asset_id : void 0),
            (this.assetPath = "asset_path" in e ? e.asset_path : void 0),
            (this.title = e.title),
            (this.description = e.description),
            (this.customId = e.custom_id);
    }
}
