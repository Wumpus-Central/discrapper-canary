n.d(t, { A: () => r });
var a = n(427262),
    i = n(272984),
    l = n(985018);
function r(e, t, n) {
    switch (t) {
        case i.Qp.USER_ACTIVITY_PLAY:
            if (e.isCurrentUser) return l.intl.string(l.t.ZpDeUC);
            if (e.playingSameTrack) return l.intl.string(l.t.TYSymS);
            if (e.notPlayable) return l.intl.formatToPlainString(l.t.SqJBnN, { name: i.HD });
            return;
        case i.Qp.USER_ACTIVITY_SYNC:
            if (e.isCurrentUser) return l.intl.string(l.t["AOU/CR"]);
            if (e.syncingWithUser || e.syncingWithParty) return l.intl.string(l.t.m8CScv);
            if (e.notPlayable) return l.intl.formatToPlainString(l.t.SqJBnN, { name: i.HD });
            return l.intl.formatToPlainString(l.t.CT9xYI, { name: n ?? a.Ay.getName(e.user) });
        case i.Qp.EMBED_SYNC:
            if (e.notPlayable) return l.intl.formatToPlainString(l.t.SqJBnN, { name: i.HD });
            return;
        default:
            return;
    }
}
