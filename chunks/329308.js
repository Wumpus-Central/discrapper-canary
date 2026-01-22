n.d(t, {
    SV: () => l,
    t1: () => o,
}),
    n(65821);
var r = n(315069),
    i = n(652215),
    a = n(654487);
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
var o = (function (e) {
    return (
        (e.SHOP = "SHOP"),
        (e.SHOP_ORBS_TAB = "SHOP_ORBS_TAB"),
        (e.NITRO_HOME = "NITRO_HOME"),
        (e.QUEST_HOME = "QUEST_HOME"),
        (e.QUEST_ORBS = "QUEST_ORBS"),
        (e.APPS_HOME = "APPS_HOME"),
        (e.SETTINGS = "SETTINGS"),
        (e.PLAYGROUND = "PLAYGROUND"),
        e
    );
})(o || {});
class l extends r.A {
    static fromType(e, t, n, r, s) {
        switch (e) {
            case "SHOP":
                return new l({
                    path: i.BVt.COLLECTIBLES_SHOP,
                    type: "SHOP",
                });
            case "NITRO_HOME":
                return new l({
                    path: i.BVt.NITRO_HOME,
                    type: "NITRO_HOME",
                });
            case "QUEST_HOME":
                return new l({
                    path: i.BVt.QUEST_HOME_V2,
                    type: "QUEST_HOME",
                });
            case "APPS_HOME":
                return new l({
                    path: i.BVt.GLOBAL_DISCOVERY_APPS,
                    type: "APPS_HOME",
                });
            case "SETTINGS":
                return new l({
                    path: null != t ? t : i.BVt.SETTINGS("account"),
                    label: n,
                    type: "SETTINGS",
                });
            case "PLAYGROUND":
                return new l({
                    path: null != t ? t : i.BVt.APP,
                    type: "PLAYGROUND",
                    label: n,
                    collectionId: r,
                    IconComponent: s,
                });
            case "SHOP_ORBS_TAB":
                return new l({
                    path: i.BVt.COLLECTIBLES_SHOP,
                    type: "SHOP_ORBS_TAB",
                });
            case "QUEST_ORBS":
                return new l({
                    path: "".concat(i.BVt.QUEST_HOME_V2, "?filter=").concat(a.BQ.VIRTUAL_CURRENCY),
                    type: "QUEST_ORBS",
                });
            default:
                throw Error("Unhandled InAppNavigationType");
        }
    }
    constructor(e) {
        super(),
            s(this, "id", void 0),
            s(this, "path", void 0),
            s(this, "type", void 0),
            s(this, "label", void 0),
            s(this, "collectionId", void 0),
            s(this, "IconComponent", void 0),
            (this.id = null != e.collectionId ? "".concat(e.type, "_").concat(e.collectionId) : e.type),
            (this.path = e.path),
            (this.type = e.type),
            (this.label = e.label),
            (this.collectionId = e.collectionId),
            (this.IconComponent = e.IconComponent);
    }
}
