"use strict";
n.d(t, { A: () => _ });
var a = n(627968),
    i = n(64700),
    r = n(314116),
    l = n(58149),
    s = n(997509),
    d = n(632738),
    o = n(71393),
    c = n(652215),
    u = n(985018);
let _ = (e) => {
    let { guildId: t, reportId: n } = e,
        [_, m] = i.useState(!1),
        p = o.A.getGuild(t),
        h = null != p;
    i.useEffect(() => {
        m(!h);
    }, [h]);
    let g = i.useCallback(() => {
        m(!0),
            l.Ay.trackWithMetadata(c.HAw.IAR_LEAVE_GUILD_BUTTON_CLICKED, { guild_id: t, report_id: n }),
            s.A.leaveGuild(t);
    }, [t, n]);
    return null == p
        ? null
        : (0, a.jsx)(d.PQ, {
              title: u.intl.string(u.t.cU96ip),
              description: u.intl.formatToPlainString(u.t["26mR6/"], { guildName: p?.name }),
              buttonText: _ ? u.intl.string(u.t["9Ak99h"]) : u.intl.string(u.t.F3qExp),
              buttonDisabled: _,
              buttonVariant: "critical-primary",
              onButtonPress: () => {
                  (0, r.A)({
                      title: u.intl.formatToPlainString(u.t["1GX6P/"], { name: p.name }),
                      subtitle: u.intl.format(u.t.ZEXC0r, { name: p.name }),
                      confirmText: u.intl.string(u.t.J2TBi3),
                      onConfirm: g,
                  });
              },
          });
};
