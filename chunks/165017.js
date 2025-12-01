n.d(t, { H: () => p });
var r = n(498607),
    i = n.n(r),
    a = n(442837),
    o = n(695346),
    s = n(592125),
    l = n(430824),
    c = n(914010),
    u = n(945577),
    d = n(981631);
function f(e) {
    let {
        isSearchDesktopXDMExperimentEnabled: t,
        crossDMSearchSettingUnsetValue: n,
        isCrossDMSearchEnabledSetting: r,
    } = e;
    return t ? (null != r ? r : n) : !!t;
}
function p(e) {
    let { guildId: t, channelId: n } = e,
        r = (0, u.xy)({ location: "useDesktopSearchContext" }),
        p = f({
            isSearchDesktopXDMExperimentEnabled: (0, u.UX)({ location: "useDesktopSearchContext" }),
            crossDMSearchSettingUnsetValue: r,
            isCrossDMSearchEnabledSetting: o.rR.useSetting(),
        });
    return (0, a.e7)(
        [l.Z, s.Z, c.Z],
        () => {
            let e = l.Z.getGuild(t),
                r = s.Z.getChannel(n);
            return c.Z.getGuildId() === d.I_8
                ? { type: d.aib.FAVORITES }
                : null != t && null != e
                  ? {
                        type: d.aib.GUILD,
                        guildId: t,
                    }
                  : null != n && null != r && r.isPrivate()
                    ? p
                        ? { type: d.aib.DMS }
                        : {
                              type: d.aib.CHANNEL,
                              channelId: n,
                          }
                    : null;
        },
        [n, t, p],
        i(),
    );
}
