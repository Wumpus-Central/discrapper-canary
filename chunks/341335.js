"use strict";
n.d(t, { A: () => l });
var a = n(427262),
    i = n(272984),
    r = n(985018);
function l(e, t, n) {
    switch (t) {
        case i.Qp.USER_ACTIVITY_PLAY:
            if (e.isCurrentUser) return r.intl.string(r.t.ZpDeUC);
            if (e.playingSameTrack) return r.intl.string(r.t.TYSymS);
            if (e.notPlayable) return r.intl.formatToPlainString(r.t.SqJBnN, { name: i.HD });
            return;
        case i.Qp.USER_ACTIVITY_SYNC:
            if (e.isCurrentUser) return r.intl.string(r.t["AOU/CR"]);
            if (e.syncingWithUser || e.syncingWithParty) return r.intl.string(r.t.m8CScv);
            if (e.notPlayable) return r.intl.formatToPlainString(r.t.SqJBnN, { name: i.HD });
            return r.intl.formatToPlainString(r.t.CT9xYI, { name: n ?? a.Ay.getName(e.user) });
        case i.Qp.EMBED_SYNC:
            if (e.notPlayable) return r.intl.formatToPlainString(r.t.SqJBnN, { name: i.HD });
            return;
        default:
            return;
    }
}
