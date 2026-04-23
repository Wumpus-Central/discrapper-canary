n.d(t, { A: () => _ });
var l = n(627968),
    a = n(64700),
    i = n(314116),
    r = n(58149),
    s = n(997509),
    d = n(632738),
    o = n(71393),
    c = n(652215),
    u = n(985018);
let _ = (e) => {
    let { guildId: t, reportId: n } = e,
        [_, m] = a.useState(!1),
        h = o.A.getGuild(t),
        g = null != h;
    a.useEffect(() => {
        m(!g);
    }, [g]);
    let p = a.useCallback(() => {
        m(!0),
            r.Ay.trackWithMetadata(c.HAw.IAR_LEAVE_GUILD_BUTTON_CLICKED, { guild_id: t, report_id: n }),
            s.A.leaveGuild(t);
    }, [t, n]);
    return null == h
        ? null
        : (0, l.jsx)(d.PQ, {
              title: u.intl.string(u.t.cU96ip),
              description: u.intl.formatToPlainString(u.t["26mR6/"], { guildName: h?.name }),
              buttonText: _ ? u.intl.string(u.t["9Ak99h"]) : u.intl.string(u.t.F3qExp),
              buttonDisabled: _,
              buttonVariant: "critical-primary",
              onButtonPress: () => {
                  (0, i.A)({
                      title: u.intl.formatToPlainString(u.t["1GX6P/"], { name: h.name }),
                      subtitle: u.intl.format(u.t.ZEXC0r, { name: h.name }),
                      confirmText: u.intl.string(u.t.J2TBi3),
                      onConfirm: p,
                  });
              },
          });
};
