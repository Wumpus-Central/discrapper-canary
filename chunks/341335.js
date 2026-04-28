r.d(n, { A: () => l });
var i = r(427262),
    a = r(272984),
    e = r(985018);
function l(t, n, r) {
    switch (n) {
        case a.Qp.USER_ACTIVITY_PLAY:
            if (t.isCurrentUser) return e.intl.string(e.t.ZpDeUC);
            if (t.playingSameTrack) return e.intl.string(e.t.TYSymS);
            if (t.notPlayable) return e.intl.formatToPlainString(e.t.SqJBnN, { name: a.HD });
            return;
        case a.Qp.USER_ACTIVITY_SYNC:
            if (t.isCurrentUser) return e.intl.string(e.t["AOU/CR"]);
            if (t.syncingWithUser || t.syncingWithParty) return e.intl.string(e.t.m8CScv);
            if (t.notPlayable) return e.intl.formatToPlainString(e.t.SqJBnN, { name: a.HD });
            return e.intl.formatToPlainString(e.t.CT9xYI, { name: r ?? i.Ay.getName(t.user) });
        case a.Qp.EMBED_SYNC:
            if (t.notPlayable) return e.intl.formatToPlainString(e.t.SqJBnN, { name: a.HD });
            return;
        default:
            return;
    }
}
