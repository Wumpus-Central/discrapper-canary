"use strict";
n.d(t, { A: () => a });
var i = n(427262),
    r = n(272984),
    s = n(375708);
function a(e, t, n) {
    switch (t) {
        case r.Qp.USER_ACTIVITY_PLAY:
            if (e.isCurrentUser) return s.intl.string(s.t.ZpDeUC);
            if (e.playingSameTrack) return s.intl.string(s.t.TYSymS);
            if (e.notPlayable) return s.intl.formatToPlainString(s.t.SqJBnN, { name: r.HD });
            return;
        case r.Qp.USER_ACTIVITY_SYNC:
            if (e.isCurrentUser) return s.intl.string(s.t["AOU/CR"]);
            if (e.syncingWithUser || e.syncingWithParty) return s.intl.string(s.t.m8CScv);
            if (e.notPlayable) return s.intl.formatToPlainString(s.t.SqJBnN, { name: r.HD });
            return s.intl.formatToPlainString(s.t.CT9xYI, { name: n ?? i.Ay.getName(e.user) });
        case r.Qp.EMBED_SYNC:
            if (e.notPlayable) return s.intl.formatToPlainString(s.t.SqJBnN, { name: r.HD });
            return;
        default:
            return;
    }
}
