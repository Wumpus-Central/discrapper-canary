n.d(t, {
    i: function () {
        return l;
    },
    p: function () {
        return s;
    }
});
var i = n(981631),
    r = n(388032);
function l(e) {
    switch (e) {
        case i.evJ.UNKNOWN_CHANNEL:
            return r.intl.string(r.t.ETCmRU);
        case i.evJ.INVALID_PERMISSIONS:
            return r.intl.string(r.t.lXtut7);
        case i.evJ.INVALID_ACCESS:
            return r.intl.string(r.t.TAXOKy);
        case i.evJ.VANITY_URL_REQUIRED_FOR_PUBLISHED_GUILDS:
            return r.intl.string(r.t.ZpuxVl);
        case i.evJ.VANITY_URL_EMPLOYEE_ONLY_GUILD_DISABLED:
            return r.intl.string(r.t.tSBmIi);
        case i.evJ.VANITY_URL_REQUIREMENTS_NOT_MET:
            return r.intl.string(r.t['w+yGQU']);
        default:
            return r.intl.string(r.t.ckQidX);
    }
}
function s(e) {
    return e.hasFeature(i.oNc.VANITY_URL) || (e.hasFeature(i.oNc.GUILD_WEB_PAGE_VANITY_URL) && null != e.vanityURLCode);
}
