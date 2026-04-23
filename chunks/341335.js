n.d(t, { A: () => r });
var l = n(427262),
    a = n(272984),
    i = n(985018);
function r(e, t, n) {
    switch (t) {
        case a.Qp.USER_ACTIVITY_PLAY:
            if (e.isCurrentUser) return i.intl.string(i.t.ZpDeUC);
            if (e.playingSameTrack) return i.intl.string(i.t.TYSymS);
            if (e.notPlayable) return i.intl.formatToPlainString(i.t.SqJBnN, { name: a.HD });
            return;
        case a.Qp.USER_ACTIVITY_SYNC:
            if (e.isCurrentUser) return i.intl.string(i.t["AOU/CR"]);
            if (e.syncingWithUser || e.syncingWithParty) return i.intl.string(i.t.m8CScv);
            if (e.notPlayable) return i.intl.formatToPlainString(i.t.SqJBnN, { name: a.HD });
            return i.intl.formatToPlainString(i.t.CT9xYI, { name: n ?? l.Ay.getName(e.user) });
        case a.Qp.EMBED_SYNC:
            if (e.notPlayable) return i.intl.formatToPlainString(i.t.SqJBnN, { name: a.HD });
            return;
        default:
            return;
    }
}
