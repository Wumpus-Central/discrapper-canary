n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(248514),
    a = n(367907),
    s = n(434404),
    o = n(138201),
    d = n(430824),
    c = n(981631),
    u = n(388032);
let m = (e) => {
    let { guildId: t, reportId: n } = e,
        [m, p] = l.useState(!1),
        g = d.Z.getGuild(t),
        _ = null != g;
    l.useEffect(() => {
        p(!_);
    }, [_]);
    let x = l.useCallback(() => {
        p(!0),
            a.ZP.trackWithMetadata(c.rMx.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
                guild_id: t,
                report_id: n,
            }),
            s.Z.leaveGuild(t);
    }, [t, n]);
    return null == g
        ? null
        : (0, r.jsx)(o.JZ, {
              title: u.intl.string(u.t.cU96ip),
              description: u.intl.formatToPlainString(u.t["26mR6/"], { guildName: null == g ? void 0 : g.name }),
              buttonText: m ? u.intl.string(u.t["9Ak99h"]) : u.intl.string(u.t.F3qExp),
              buttonDisabled: m,
              buttonVariant: "critical-primary",
              onButtonPress: () => {
                  (0, i.Z)({
                      title: u.intl.formatToPlainString(u.t["1GX6P/"], { name: g.name }),
                      subtitle: u.intl.format(u.t.ZEXC0r, { name: g.name }),
                      confirmText: u.intl.string(u.t.J2TBi3),
                      onConfirm: x,
                  });
              },
          });
};
