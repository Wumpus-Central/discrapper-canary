n.d(t, {
    g: () => l,
    s: () => c,
});
var r = n(287809),
    i = n(975571),
    a = n(927578),
    s = n(652215),
    o = n(985018);
function l(e) {
    switch (e) {
        case s.t02.TOO_MANY_USER_GUILDS:
            let t = r.default.getCurrentUser(),
                n = a.Ay.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()) ? s.cZu : s.qlD;
            return {
                title: o.intl.formatToPlainString(o.t["ttJ/hj"], { quantity: n }),
                description: o.intl.string(o.t.iLyuDO),
            };
        case s.t02.GUILD_AT_CAPACITY:
            return {
                title: o.intl.string(o.t.ZZlox4),
                description: o.intl.string(o.t.ZUEGFn),
            };
        case s.t02.GUILD_JOIN_INVITE_LIMITED_ACCESS:
            return {
                title: o.intl.string(o.t.kJwpBW),
                description: o.intl.string(o.t.ZUEGFn),
            };
        case s.t02.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED:
            return {
                title: o.intl.string(o.t["u/xsK9"]),
                description: o.intl.string(o.t.SxY4IW),
            };
        default:
            return null;
    }
}
function c(e) {
    switch (e) {
        case s.t02.TOO_MANY_USER_GUILDS:
            return o.intl.string(o.t.iLyuDO);
        case s.t02.GUILD_AT_CAPACITY:
            return o.intl.string(o.t.M6unNJ);
        case s.t02.INVALID_COUNTRY_CODE:
            return o.intl.string(o.t.sRJGR1);
        case s.t02.INVALID_CANNOT_FRIEND_SELF:
            return o.intl.string(o.t["mY2R+F"]);
        case s.t02.INVITES_DISABLED:
            return o.intl.format(o.t.RXSeLl, { articleLink: i.A.getArticleURL(s.MVz.INVITE_DISABLED) });
        default:
            return o.intl.string(o.t.dDZRdy);
    }
}
