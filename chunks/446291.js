n.d(t, { d: () => r, z: () => s });
var i = n(652215),
    l = n(985018);
function s(e) {
    switch (e) {
        case i.t02.UNKNOWN_CHANNEL:
            return l.intl.string(l.t.ETCmRa);
        case i.t02.INVALID_PERMISSIONS:
            return l.intl.string(l.t.lXtut1);
        case i.t02.INVALID_ACCESS:
            return l.intl.string(l.t.TAXOKw);
        case i.t02.VANITY_URL_REQUIRED_FOR_PUBLISHED_GUILDS:
            return l.intl.string(l.t.ZpuxVs);
        case i.t02.VANITY_URL_EMPLOYEE_ONLY_GUILD_DISABLED:
            return l.intl.string(l.t.tSBmIv);
        case i.t02.VANITY_URL_REQUIREMENTS_NOT_MET:
            return l.intl.string(l.t["w+yGQT"]);
        default:
            return l.intl.string(l.t.ckQidX);
    }
}
function r(e) {
    return (
        e.features.has(i.GuildFeatures.VANITY_URL) ||
        (e.features.has(i.GuildFeatures.GUILD_WEB_PAGE_VANITY_URL) && null != e.vanityURLCode)
    );
}
