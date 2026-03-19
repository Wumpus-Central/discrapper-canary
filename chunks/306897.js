n.d(t, { A: () => s });
var a = n(505779),
    l = n(397927),
    i = n(409626),
    r = n(985018);
let s = function (e) {
    switch (e.category) {
        case a.V.STEAM:
            return {
                icon: l.NXQ,
                text: r.intl.string(r.t.FsANs4),
                ariaLabel: r.intl.string(r.t["P+ePTG"]),
                action: i.Ws.SteamStoreLink,
                url: e.url,
            };
        case a.V.EPICGAMES:
            return {
                icon: l.r_I,
                text: r.intl.string(r.t.ZbBMHa),
                ariaLabel: r.intl.string(r.t.BwX0UW),
                action: i.Ws.EpicStoreLink,
                url: e.url,
            };
        case a.V.ROBLOX:
            return {
                icon: l.H0M,
                text: r.intl.string(r.t["pJ+P+h"]),
                ariaLabel: r.intl.string(r.t.tYxpdf),
                action: i.Ws.RobloxStoreLink,
                url: e.url,
            };
        case a.V.BATTLENET:
            return {
                icon: l.aG0,
                text: r.intl.string(r.t["A7grp+"]),
                ariaLabel: r.intl.string(r.t.x9at20),
                action: i.Ws.BattlenetStoreLink,
                url: e.url,
            };
        case a.V.RIOT:
            return {
                icon: l.ALT,
                text: r.intl.string(r.t.h6MapL),
                ariaLabel: r.intl.string(r.t["528nvc"]),
                action: i.Ws.RiotStoreLink,
                url: e.url,
            };
        case a.V.MINECRAFT:
            return {
                icon: l.mP8,
                text: r.intl.string(r.t["HZbmO+"]),
                ariaLabel: r.intl.string(r.t.WWTqYn),
                action: i.Ws.MinecraftStoreLink,
                url: e.url,
            };
    }
    return null;
};
