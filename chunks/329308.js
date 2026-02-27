"use strict";
n.d(t, { SV: () => o, t1: () => a });
var r = n(315069),
    i = n(652215),
    s = n(654487),
    a = (function (e) {
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
    })(a || {});
class o extends r.A {
    id;
    path;
    type;
    label;
    collectionId;
    IconComponent;
    static fromType(e, t, n, r, a) {
        switch (e) {
            case "SHOP":
                return new o({ path: i.BVt.COLLECTIBLES_SHOP, type: "SHOP" });
            case "NITRO_HOME":
                return new o({ path: i.BVt.NITRO_HOME, type: "NITRO_HOME" });
            case "QUEST_HOME":
                return new o({ path: i.BVt.QUEST_HOME, type: "QUEST_HOME" });
            case "APPS_HOME":
                return new o({ path: i.BVt.GLOBAL_DISCOVERY_APPS, type: "APPS_HOME" });
            case "SETTINGS":
                return new o({ path: t ?? i.BVt.SETTINGS("account"), label: n, type: "SETTINGS" });
            case "PLAYGROUND":
                return new o({ path: t ?? i.BVt.APP, type: "PLAYGROUND", label: n, collectionId: r, IconComponent: a });
            case "SHOP_ORBS_TAB":
                return new o({ path: i.BVt.COLLECTIBLES_SHOP, type: "SHOP_ORBS_TAB" });
            case "QUEST_ORBS":
                return new o({ path: `${i.BVt.QUEST_HOME}?filter=${s.BQ.VIRTUAL_CURRENCY}`, type: "QUEST_ORBS" });
            default:
                throw Error("Unhandled InAppNavigationType");
        }
    }
    constructor(e) {
        super(),
            (this.id = null != e.collectionId ? `${e.type}_${e.collectionId}` : e.type),
            (this.path = e.path),
            (this.type = e.type),
            (this.label = e.label),
            (this.collectionId = e.collectionId),
            (this.IconComponent = e.IconComponent);
    }
}
