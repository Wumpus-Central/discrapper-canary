"use strict";
n.d(t, { A: () => o });
var r = n(253932),
    i = n(994500),
    s = n(461213),
    a = n(652215);
function o(e) {
    if (!s.A.getActivities(!1).some((e) => e.type === a.$pd.PLAYING)) return !1;
    if (e.isPrivate()) return e.recipients.every((e) => i.A.isFriend(e));
    if (e.isGuildVocalOrThread()) {
        let t = e.guild_id;
        return !r.JG.getSetting().includes(t);
    }
    return !1;
}
