n.d(t, {
    i: () => s,
    p: () => a
});
var r = n(981631),
    i = n(388032);
function s(e) {
    switch (e) {
        case r.evJ.UNKNOWN_CHANNEL:
            return i.NW.string(i.t.ETCmRU);
        case r.evJ.INVALID_PERMISSIONS:
            return i.NW.string(i.t.lXtut7);
        case r.evJ.INVALID_ACCESS:
            return i.NW.string(i.t.TAXOKy);
        case r.evJ.VANITY_URL_REQUIRED_FOR_PUBLISHED_GUILDS:
            return i.NW.string(i.t.ZpuxVl);
        case r.evJ.VANITY_URL_EMPLOYEE_ONLY_GUILD_DISABLED:
            return i.NW.string(i.t.tSBmIi);
        case r.evJ.VANITY_URL_REQUIREMENTS_NOT_MET:
            return i.NW.string(i.t['w+yGQU']);
        default:
            return i.NW.string(i.t.ckQidX);
    }
}
function a(e) {
    return e.hasFeature(r.oNc.VANITY_URL) || (e.hasFeature(r.oNc.GUILD_WEB_PAGE_VANITY_URL) && null != e.vanityURLCode);
}
