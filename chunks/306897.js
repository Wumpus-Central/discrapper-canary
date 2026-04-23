n.d(t, { A: () => m });
var l = n(505779),
    a = n(49381),
    i = n(349361),
    r = n(924895),
    s = n(422688),
    o = n(505200),
    c = n(695250),
    d = n(409626),
    u = n(985018);
let m = function (e) {
    switch (e.category) {
        case l.V.STEAM:
            return {
                icon: a.N,
                text: u.intl.string(u.t.FsANs4),
                ariaLabel: u.intl.string(u.t["P+ePTG"]),
                action: d.Ws.SteamStoreLink,
                url: e.url,
            };
        case l.V.EPICGAMES:
            return {
                icon: i.r,
                text: u.intl.string(u.t.ZbBMHa),
                ariaLabel: u.intl.string(u.t.BwX0UW),
                action: d.Ws.EpicStoreLink,
                url: e.url,
            };
        case l.V.ROBLOX:
            return {
                icon: r.H,
                text: u.intl.string(u.t["pJ+P+h"]),
                ariaLabel: u.intl.string(u.t.tYxpdf),
                action: d.Ws.RobloxStoreLink,
                url: e.url,
            };
        case l.V.BATTLENET:
            return {
                icon: s.a,
                text: u.intl.string(u.t["A7grp+"]),
                ariaLabel: u.intl.string(u.t.x9at20),
                action: d.Ws.BattlenetStoreLink,
                url: e.url,
            };
        case l.V.RIOT:
            return {
                icon: o.A,
                text: u.intl.string(u.t.h6MapL),
                ariaLabel: u.intl.string(u.t["528nvc"]),
                action: d.Ws.RiotStoreLink,
                url: e.url,
            };
        case l.V.MINECRAFT:
            return {
                icon: c.m,
                text: u.intl.string(u.t["HZbmO+"]),
                ariaLabel: u.intl.string(u.t.WWTqYn),
                action: d.Ws.MinecraftStoreLink,
                url: e.url,
            };
    }
    return null;
};
