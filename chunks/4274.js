n.d(i, { g: () => _, s: () => c });
var r = n(287809),
    e = n(975571),
    s = n(158045),
    l = n(652215),
    I = n(375708);
function _(t) {
    switch (t) {
        case l.t02.TOO_MANY_USER_GUILDS:
            let i = r.default.getCurrentUser(),
                n = s.Ay.canUseIncreasedGuildCap(i) || i?.isStaff() ? l.cZu : l.qlD;
            return {
                title: I.intl.formatToPlainString(I.t["ttJ/hj"], { quantity: n }),
                description: I.intl.string(I.t.iLyuDO),
            };
        case l.t02.GUILD_AT_CAPACITY:
            return { title: I.intl.string(I.t.ZZlox4), description: I.intl.string(I.t.ZUEGFn) };
        case l.t02.GUILD_JOIN_INVITE_LIMITED_ACCESS:
            return { title: I.intl.string(I.t.kJwpBW), description: I.intl.string(I.t.ZUEGFn) };
        case l.t02.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED:
            return { title: I.intl.string(I.t["u/xsK9"]), description: I.intl.string(I.t.SxY4IW) };
        case l.t02.UNDER_MINIMUM_AGE:
            return { title: I.intl.string(I.t["2yTd7D"]), description: I.intl.string(I.t.vRw5lm) };
        case l.t02.AGE_GROUP_UNVERIFIED:
            return { title: I.intl.string(I.t.TCXgZL), description: I.intl.string(I.t["8Ow7Xi"]) };
        default:
            return null;
    }
}
function c(t) {
    switch (t) {
        case l.t02.TOO_MANY_USER_GUILDS:
            return I.intl.string(I.t.iLyuDO);
        case l.t02.GUILD_AT_CAPACITY:
            return I.intl.string(I.t.M6unNJ);
        case l.t02.INVALID_COUNTRY_CODE:
            return I.intl.string(I.t.sRJGR1);
        case l.t02.INVALID_CANNOT_FRIEND_SELF:
            return I.intl.string(I.t["mY2R+F"]);
        case l.t02.INVITES_DISABLED:
            return I.intl.format(I.t.RXSeLl, { articleLink: e.A.getArticleURL(l.MVz.INVITE_DISABLED) });
        case l.t02.UNDER_MINIMUM_AGE:
            return I.intl.string(I.t.vRw5lm);
        case l.t02.AGE_GROUP_UNVERIFIED:
            return I.intl.string(I.t["8Ow7Xi"]);
        default:
            return I.intl.string(I.t.dDZRdy);
    }
}
