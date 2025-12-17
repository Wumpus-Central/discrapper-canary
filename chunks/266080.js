n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(248514),
    a = n(367907),
    s = n(434404),
    o = n(138201),
    c = n(430824),
    d = n(981631),
    u = n(388032);
let m = (e) => {
    let { guildId: t, reportId: n } = e,
        [m, b] = l.useState(!1),
        p = c.Z.getGuild(t),
        g = null != p;
    l.useEffect(() => {
        b(!g);
    }, [g]);
    let f = l.useCallback(() => {
        b(!0),
            a.ZP.trackWithMetadata(d.rMx.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
                guild_id: t,
                report_id: n,
            }),
            s.Z.leaveGuild(t);
    }, [t, n]);
    return null == p
        ? null
        : (0, r.jsx)(o.JZ, {
              title: u.intl.string(u.t.cU96ip),
              description: u.intl.formatToPlainString(u.t["26mR6/"], { guildName: null == p ? void 0 : p.name }),
              buttonText: m ? u.intl.string(u.t["9Ak99h"]) : u.intl.string(u.t.F3qExp),
              buttonDisabled: m,
              buttonVariant: "critical-primary",
              onButtonPress: () => {
                  (0, i.Z)({
                      title: u.intl.formatToPlainString(u.t["1GX6P/"], { name: p.name }),
                      subtitle: u.intl.format(u.t.ZEXC0r, { name: p.name }),
                      confirmText: u.intl.string(u.t.J2TBi3),
                      onConfirm: f,
                  });
              },
          });
};
