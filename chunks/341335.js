"use strict";
n.d(t, { A: () => l });
var a = n(427262),
    r = n(272984),
    i = n(985018);
function l(e, t, n) {
    switch (t) {
        case r.Qp.USER_ACTIVITY_PLAY:
            if (e.isCurrentUser) return i.intl.string(i.t.ZpDeUC);
            if (e.playingSameTrack) return i.intl.string(i.t.TYSymS);
            if (e.notPlayable) return i.intl.formatToPlainString(i.t.SqJBnN, { name: r.HD });
            return;
        case r.Qp.USER_ACTIVITY_SYNC:
            if (e.isCurrentUser) return i.intl.string(i.t["AOU/CR"]);
            if (e.syncingWithUser || e.syncingWithParty) return i.intl.string(i.t.m8CScv);
            if (e.notPlayable) return i.intl.formatToPlainString(i.t.SqJBnN, { name: r.HD });
            return i.intl.formatToPlainString(i.t.CT9xYI, { name: n ?? a.Ay.getName(e.user) });
        case r.Qp.EMBED_SYNC:
            if (e.notPlayable) return i.intl.formatToPlainString(i.t.SqJBnN, { name: r.HD });
            return;
        default:
            return;
    }
}
