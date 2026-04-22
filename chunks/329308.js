"use strict";
n.d(t, { SV: () => d, t1: () => u });
var r,
    i = n(315069),
    s = n(718446),
    a = n(652215),
    o = n(654487),
    l = n(355097),
    u =
        (((r = u || {}).SHOP = "SHOP"),
        (r.SHOP_ORBS_TAB = "SHOP_ORBS_TAB"),
        (r.NITRO_HOME = "NITRO_HOME"),
        (r.QUEST_HOME = "QUEST_HOME"),
        (r.QUEST_ORBS = "QUEST_ORBS"),
        (r.APPS_HOME = "APPS_HOME"),
        (r.SETTINGS = "SETTINGS"),
        (r.PLAYGROUND = "PLAYGROUND"),
        r);
class d extends i.A {
    id;
    path;
    type;
    label;
    collectionId;
    IconComponent;
    static fromType(e, t, n, r, i) {
        switch (e) {
            case "SHOP":
                return new d({ path: a.BVt.COLLECTIBLES_SHOP, type: "SHOP" });
            case "NITRO_HOME":
                return new d({ path: a.BVt.NITRO_HOME, type: "NITRO_HOME" });
            case "QUEST_HOME":
                return new d({ path: a.BVt.QUEST_HOME, type: "QUEST_HOME" });
            case "APPS_HOME":
                return new d({ path: a.BVt.GLOBAL_DISCOVERY_APPS, type: "APPS_HOME" });
            case "SETTINGS":
                return new d({ path: t ?? (0, s.settingsPathToRoute)(l.od.ACCOUNT), label: n, type: "SETTINGS" });
            case "PLAYGROUND":
                return new d({ path: t ?? a.BVt.APP, type: "PLAYGROUND", label: n, collectionId: r, IconComponent: i });
            case "SHOP_ORBS_TAB":
                return new d({ path: a.BVt.COLLECTIBLES_SHOP, type: "SHOP_ORBS_TAB" });
            case "QUEST_ORBS":
                return new d({ path: `${a.BVt.QUEST_HOME}?filter=${o.BQ.VIRTUAL_CURRENCY}`, type: "QUEST_ORBS" });
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
