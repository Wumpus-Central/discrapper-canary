n.d(t, { H: () => p });
var r = n(498607),
    i = n.n(r),
    a = n(442837),
    o = n(695346),
    s = n(592125),
    l = n(430824),
    c = n(914010),
    u = n(945577),
    d = n(125085),
    f = n(981631);
function _(e) {
    let {
        isSearchDesktopXDMExperimentEnabled: t,
        isGlobalXDMSettingSupported: n,
        isCrossDMSearchEnabledSetting: r,
    } = e;
    return t && n ? (null != r ? r : d.K) : !!t;
}
function p(e) {
    let { guildId: t, channelId: n } = e,
        r = (0, u.u5)({ location: "useDesktopSearchContext" }),
        d = _({
            isSearchDesktopXDMExperimentEnabled: (0, u.UX)({ location: "useDesktopSearchContext" }),
            isGlobalXDMSettingSupported: r,
            isCrossDMSearchEnabledSetting: o.rR.useSetting(),
        });
    return (0, a.e7)(
        [l.Z, s.Z, c.Z],
        () => {
            let e = l.Z.getGuild(t),
                r = s.Z.getChannel(n);
            return c.Z.getGuildId() === f.I_8
                ? { type: f.aib.FAVORITES }
                : null != t && null != e
                  ? {
                        type: f.aib.GUILD,
                        guildId: t,
                    }
                  : null != n && null != r && r.isPrivate()
                    ? d
                        ? { type: f.aib.DMS }
                        : {
                              type: f.aib.CHANNEL,
                              channelId: n,
                          }
                    : null;
        },
        [n, t, d],
        i(),
    );
}
