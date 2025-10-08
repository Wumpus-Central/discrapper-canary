n.d(t, { H: () => f });
var r = n(498607),
    i = n.n(r),
    a = n(442837),
    o = n(592125),
    s = n(430824),
    l = n(914010),
    c = n(945577),
    u = n(981631);
function d(e) {
    let { isSearchDesktopXDMExperimentEnabled: t, isGlobalXDMSettingSupported: n } = e;
    return (!!t && !!n) || !!t;
}
function f(e) {
    let { guildId: t, channelId: n } = e,
        r = (0, c.u5)({ location: "useDesktopSearchContext" }),
        f = (0, c.UX)({ location: "useDesktopSearchContext" });
    return (0, a.e7)(
        [s.Z, o.Z, l.Z],
        () => {
            let e = s.Z.getGuild(t),
                i = o.Z.getChannel(n);
            return l.Z.getGuildId() === u.I_8
                ? { type: u.aib.FAVORITES }
                : null != t && null != e
                  ? {
                        type: u.aib.GUILD,
                        guildId: t,
                    }
                  : null != n && null != i && i.isPrivate()
                    ? d({
                          isSearchDesktopXDMExperimentEnabled: f,
                          isGlobalXDMSettingSupported: r,
                      })
                        ? { type: u.aib.DMS }
                        : {
                              type: u.aib.CHANNEL,
                              channelId: n,
                          }
                    : null;
        },
        [n, t, r, f],
        i(),
    );
}
