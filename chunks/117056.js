n.d(t, {
    A: () => m,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    a = n(314116),
    i = n(58149),
    s = n(997509),
    o = n(632738),
    c = n(71393),
    d = n(652215),
    u = n(985018);
let m = (e) => {
    let { guildId: t, reportId: n } = e,
        [m, b] = r.useState(!1),
        p = c.A.getGuild(t),
        x = null != p;
    r.useEffect(() => {
        b(!x);
    }, [x]);
    let g = r.useCallback(() => {
        b(!0),
            i.Ay.trackWithMetadata(d.HAw.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
                guild_id: t,
                report_id: n,
            }),
            s.A.leaveGuild(t);
    }, [t, n]);
    return null == p
        ? null
        : (0, l.jsx)(o.PQ, {
              title: u.intl.string(u.t.cU96ip),
              description: u.intl.formatToPlainString(u.t["26mR6/"], {
                  guildName: null == p ? void 0 : p.name,
              }),
              buttonText: m ? u.intl.string(u.t["9Ak99h"]) : u.intl.string(u.t.F3qExp),
              buttonDisabled: m,
              buttonVariant: "critical-primary",
              onButtonPress: () => {
                  (0, a.A)({
                      title: u.intl.formatToPlainString(u.t["1GX6P/"], {
                          name: p.name,
                      }),
                      subtitle: u.intl.format(u.t.ZEXC0r, {
                          name: p.name,
                      }),
                      confirmText: u.intl.string(u.t.J2TBi3),
                      onConfirm: g,
                  });
              },
          });
};
