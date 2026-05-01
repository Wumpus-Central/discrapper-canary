"use strict";
n.d(t, { A: () => o });
var i = n(253932),
    r = n(994500),
    s = n(461213),
    a = n(652215);
function o(e) {
    if (!s.A.getActivities(!1).some((e) => e.type === a.$pd.PLAYING)) return !1;
    if (e.isPrivate()) return e.recipients.every((e) => r.A.isFriend(e));
    if (e.isGuildVocalOrThread()) {
        let t = e.guild_id;
        return !i.JG.getSetting().includes(t);
    }
    return !1;
}
