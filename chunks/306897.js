n.d(t, { A: () => m });
var a = n(505779),
    l = n(49381),
    i = n(349361),
    r = n(924895),
    s = n(422688),
    o = n(505200),
    d = n(695250),
    c = n(409626),
    u = n(985018);
let m = function (e) {
    switch (e.category) {
        case a.V.STEAM:
            return {
                icon: l.N,
                text: u.intl.string(u.t.FsANs4),
                ariaLabel: u.intl.string(u.t["P+ePTG"]),
                action: c.Ws.SteamStoreLink,
                url: e.url,
            };
        case a.V.EPICGAMES:
            return {
                icon: i.r,
                text: u.intl.string(u.t.ZbBMHa),
                ariaLabel: u.intl.string(u.t.BwX0UW),
                action: c.Ws.EpicStoreLink,
                url: e.url,
            };
        case a.V.ROBLOX:
            return {
                icon: r.H,
                text: u.intl.string(u.t["pJ+P+h"]),
                ariaLabel: u.intl.string(u.t.tYxpdf),
                action: c.Ws.RobloxStoreLink,
                url: e.url,
            };
        case a.V.BATTLENET:
            return {
                icon: s.a,
                text: u.intl.string(u.t["A7grp+"]),
                ariaLabel: u.intl.string(u.t.x9at20),
                action: c.Ws.BattlenetStoreLink,
                url: e.url,
            };
        case a.V.RIOT:
            return {
                icon: o.A,
                text: u.intl.string(u.t.h6MapL),
                ariaLabel: u.intl.string(u.t["528nvc"]),
                action: c.Ws.RiotStoreLink,
                url: e.url,
            };
        case a.V.MINECRAFT:
            return {
                icon: d.m,
                text: u.intl.string(u.t["HZbmO+"]),
                ariaLabel: u.intl.string(u.t.WWTqYn),
                action: c.Ws.MinecraftStoreLink,
                url: e.url,
            };
    }
    return null;
};
