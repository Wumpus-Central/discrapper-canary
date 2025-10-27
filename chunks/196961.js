n.d(t, {
    i: () => l,
    p: () => a,
});
var r = n(981631),
    i = n(388032);
function l(e) {
    switch (e) {
        case r.evJ.UNKNOWN_CHANNEL:
            return i.intl.string(i.t.ETCmRa);
        case r.evJ.INVALID_PERMISSIONS:
            return i.intl.string(i.t.lXtut1);
        case r.evJ.INVALID_ACCESS:
            return i.intl.string(i.t.TAXOKw);
        case r.evJ.VANITY_URL_REQUIRED_FOR_PUBLISHED_GUILDS:
            return i.intl.string(i.t.ZpuxVs);
        case r.evJ.VANITY_URL_EMPLOYEE_ONLY_GUILD_DISABLED:
            return i.intl.string(i.t.tSBmIv);
        case r.evJ.VANITY_URL_REQUIREMENTS_NOT_MET:
            return i.intl.string(i.t["w+yGQT"]);
        default:
            return i.intl.string(i.t.ckQidX);
    }
}
function a(e) {
    return (
        e.features.has(r.GuildFeatures.VANITY_URL) ||
        (e.features.has(r.GuildFeatures.GUILD_WEB_PAGE_VANITY_URL) && null != e.vanityURLCode)
    );
}
