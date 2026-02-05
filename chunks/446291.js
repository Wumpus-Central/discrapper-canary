"use strict";
n.d(t, { d: () => r, z: () => l });
var i = n(652215),
    s = n(985018);
function l(e) {
    switch (e) {
        case i.t02.UNKNOWN_CHANNEL:
            return s.intl.string(s.t.ETCmRa);
        case i.t02.INVALID_PERMISSIONS:
            return s.intl.string(s.t.lXtut1);
        case i.t02.INVALID_ACCESS:
            return s.intl.string(s.t.TAXOKw);
        case i.t02.VANITY_URL_REQUIRED_FOR_PUBLISHED_GUILDS:
            return s.intl.string(s.t.ZpuxVs);
        case i.t02.VANITY_URL_EMPLOYEE_ONLY_GUILD_DISABLED:
            return s.intl.string(s.t.tSBmIv);
        case i.t02.VANITY_URL_REQUIREMENTS_NOT_MET:
            return s.intl.string(s.t["w+yGQT"]);
        default:
            return s.intl.string(s.t.ckQidX);
    }
}
function r(e) {
    return (
        e.features.has(i.GuildFeatures.VANITY_URL) ||
        (e.features.has(i.GuildFeatures.GUILD_WEB_PAGE_VANITY_URL) && null != e.vanityURLCode)
    );
}
