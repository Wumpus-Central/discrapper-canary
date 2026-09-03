n.d(t, { A: () => u });
var i = n(17928),
    r = n(228366),
    a = n(526218),
    s = n(970928),
    l = n(257269);
class o {
    type;
    applicationId;
    linkId;
    assetId;
    assetPath;
    title;
    description;
    customId;
    constructor(e) {
        const t = (0, a.t)(e.link_id);
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
        return this.type === a.G.MANAGED
            ? (0, s.uD)(this.applicationId, this.assetId, 512)
            : this.type === a.G.QUICK
              ? (0, l.VP)(this.assetPath)
              : void 0;
    }
}
let d = {};
class c extends i.Ay.Store {
    static displayName = "CustomActivityLinksStore";
    getOne(e, t) {
        if (null != d[e]) return d[e][t];
    }
}
let u = new c(r.h, {
    CUSTOM_ACTIVITY_LINK_FETCH_SUCCESS: function (e) {
        let { applicationId: t, link: n } = e;
        null == d[t] && (d[t] = Object.create(null)), (d[t][n.link_id] = new o(n));
    },
    LOGOUT: function () {
        d = {};
    },
});
