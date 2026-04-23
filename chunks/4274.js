"use strict";
n.d(t, { g: () => o, s: () => d });
var i = n(287809),
    s = n(975571),
    l = n(927578),
    r = n(652215),
    a = n(985018);
function o(e) {
    switch (e) {
        case r.t02.TOO_MANY_USER_GUILDS:
            let t = i.default.getCurrentUser(),
                n = l.Ay.canUseIncreasedGuildCap(t) || t?.isStaff() ? r.cZu : r.qlD;
            return {
                title: a.intl.formatToPlainString(a.t["ttJ/hj"], { quantity: n }),
                description: a.intl.string(a.t.iLyuDO),
            };
        case r.t02.GUILD_AT_CAPACITY:
            return { title: a.intl.string(a.t.ZZlox4), description: a.intl.string(a.t.ZUEGFn) };
        case r.t02.GUILD_JOIN_INVITE_LIMITED_ACCESS:
            return { title: a.intl.string(a.t.kJwpBW), description: a.intl.string(a.t.ZUEGFn) };
        case r.t02.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED:
            return { title: a.intl.string(a.t["u/xsK9"]), description: a.intl.string(a.t.SxY4IW) };
        default:
            return null;
    }
}
function d(e) {
    switch (e) {
        case r.t02.TOO_MANY_USER_GUILDS:
            return a.intl.string(a.t.iLyuDO);
        case r.t02.GUILD_AT_CAPACITY:
            return a.intl.string(a.t.M6unNJ);
        case r.t02.INVALID_COUNTRY_CODE:
            return a.intl.string(a.t.sRJGR1);
        case r.t02.INVALID_CANNOT_FRIEND_SELF:
            return a.intl.string(a.t["mY2R+F"]);
        case r.t02.INVITES_DISABLED:
            return a.intl.format(a.t.RXSeLl, { articleLink: s.A.getArticleURL(r.MVz.INVITE_DISABLED) });
        default:
            return a.intl.string(a.t.dDZRdy);
    }
}
