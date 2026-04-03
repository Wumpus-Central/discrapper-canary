"use strict";
n.d(t, { SV: () => u, t1: () => l });
var r = n(315069),
    i = n(718446),
    s = n(652215),
    a = n(654487),
    o = n(355097),
    l = (function (e) {
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
    })(l || {});
class u extends r.A {
    id;
    path;
    type;
    label;
    collectionId;
    IconComponent;
    static fromType(e, t, n, r, l) {
        switch (e) {
            case "SHOP":
                return new u({ path: s.BVt.COLLECTIBLES_SHOP, type: "SHOP" });
            case "NITRO_HOME":
                return new u({ path: s.BVt.NITRO_HOME, type: "NITRO_HOME" });
            case "QUEST_HOME":
                return new u({ path: s.BVt.QUEST_HOME, type: "QUEST_HOME" });
            case "APPS_HOME":
                return new u({ path: s.BVt.GLOBAL_DISCOVERY_APPS, type: "APPS_HOME" });
            case "SETTINGS":
                return new u({ path: t ?? (0, i.settingsPathToRoute)(o.od.ACCOUNT), label: n, type: "SETTINGS" });
            case "PLAYGROUND":
                return new u({ path: t ?? s.BVt.APP, type: "PLAYGROUND", label: n, collectionId: r, IconComponent: l });
            case "SHOP_ORBS_TAB":
                return new u({ path: s.BVt.COLLECTIBLES_SHOP, type: "SHOP_ORBS_TAB" });
            case "QUEST_ORBS":
                return new u({ path: `${s.BVt.QUEST_HOME}?filter=${a.BQ.VIRTUAL_CURRENCY}`, type: "QUEST_ORBS" });
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
