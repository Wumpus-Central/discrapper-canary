n.d(t, { k: () => d });
var r = n(233764),
    i = n(375824),
    a = n(188597),
    o = n(695346),
    s = n(115130),
    l = n(566620),
    c = n(981631),
    u = n(388032);
async function d(e, t) {
    let n,
        d,
        f,
        p = u.intl.string(u.t["IOy+I5"]);
    if (e instanceof r.Z) {
        (n = 0), (f = e.reason);
        let i = s.Z.getFetchState();
        switch ((o.Sb.getSetting() && i !== s.O.LOADED && (await (0, l.$h)()), e.reason)) {
            case r.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND:
                s.Z.inDevModeForApplication(t) && (p = u.intl.string(u.t.hXRXfz));
                break;
            case r.Z.Reasons.INVALID_CHANNEL:
                p = u.intl.string(u.t.j29zCr);
                break;
            case r.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED:
                d = e.detailCode;
        }
    } else if (e instanceof i.Z) {
        var _;
        (n = 1), (f = e.reason), (p = null != (_ = (0, a.A0)(e.reason, t)) ? _ : p);
    } else
        switch (((n = 2), (d = e.status), (f = e.code), e.code)) {
            case c.evJ.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                p = u.intl.string(u.t.GyzcrS);
                break;
            case c.evJ.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                p = u.intl.string(u.t.zxv7EF);
                break;
            case c.evJ.INVALID_PERMISSIONS:
                p = u.intl.string(u.t.hHGrWz);
                break;
            case c.evJ.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                p = u.intl.string(u.t.j29zCr);
                break;
            case c.evJ.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                p = u.intl.string(u.t["4WuFRE"]);
                break;
            case c.evJ.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                p = u.intl.string(u.t.RvkXdb);
                break;
            case c.evJ.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM:
                p = u.intl.string(u.t.uGDCcw);
        }
    return {
        message: p,
        errorType: n,
        errorStatus: d,
        errorCode: f,
    };
}
