"use strict";
n.d(t, { A: () => a });
var r = n(526218),
    i = n(139675),
    s = n(257269);
class a {
    type;
    applicationId;
    linkId;
    assetId;
    assetPath;
    title;
    description;
    customId;
    constructor(e) {
        const t = (0, r.t)(e.link_id);
        (this.type = t?.type ?? null),
            (this.applicationId = e.application_id),
            (this.linkId = e.link_id),
            (this.assetId = "asset_id" in e ? e.asset_id : void 0),
            (this.assetPath = "asset_path" in e ? e.asset_path : void 0),
            (this.title = e.title),
            (this.description = e.description),
            (this.customId = e.custom_id);
    }
    getAssetURL() {
        return this.type === r.G.MANAGED
            ? (0, i.uD)(this.applicationId, this.assetId, 512)
            : this.type === r.G.QUICK
              ? (0, s.VP)(this.assetPath)
              : void 0;
    }
}
