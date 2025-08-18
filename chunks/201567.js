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
        _ = u.intl.string(u.t["IOy+Iy"]);
    if (e instanceof r.Z) {
        (n = 0), (f = e.reason);
        let i = s.Z.getFetchState();
        switch ((o.Sb.getSetting() && i !== s.O.LOADED && (await (0, l.$h)()), e.reason)) {
            case r.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND:
                s.Z.inDevModeForApplication(t) && (_ = u.intl.string(u.t.hXRXf3));
                break;
            case r.Z.Reasons.INVALID_CHANNEL:
                _ = u.intl.string(u.t.j29zCg);
                break;
            case r.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED:
                d = e.detailCode;
        }
    } else if (e instanceof i.Z) {
        var p;
        (n = 1), (f = e.reason), (_ = null != (p = (0, a.A0)(e.reason, t)) ? p : _);
    } else
        switch (((n = 2), (d = e.status), (f = e.code), e.code)) {
            case c.evJ.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                _ = u.intl.string(u.t.Gyzcra);
                break;
            case c.evJ.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                _ = u.intl.string(u.t.zxv7EB);
                break;
            case c.evJ.INVALID_PERMISSIONS:
                _ = u.intl.string(u.t.hHGrW1);
                break;
            case c.evJ.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                _ = u.intl.string(u.t.j29zCg);
                break;
            case c.evJ.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                _ = u.intl.string(u.t["4WuFRE"]);
                break;
            case c.evJ.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                _ = u.intl.string(u.t.RvkXdX);
                break;
            case c.evJ.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM:
                _ = u.intl.string(u.t.uGDCc3);
        }
    return {
        message: _,
        errorType: n,
        errorStatus: d,
        errorCode: f,
    };
}
