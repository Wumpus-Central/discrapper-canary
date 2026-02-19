"use strict";
n.d(t, { A: () => r });
var i = n(834757),
    s = n(562153),
    l = n(985018);
function r(e, t, n) {
    let r = (0, i.AO)(n),
        a = s.Ay.getName(e.getGuildId(), e.id, t);
    return null == n
        ? a
        : r?.name != null
          ? l.intl.formatToPlainString(l.t["9jpVOZ"], { applicationName: r?.name, username: a })
          : l.intl.formatToPlainString(l.t["+h0Z59"], { username: a });
}
