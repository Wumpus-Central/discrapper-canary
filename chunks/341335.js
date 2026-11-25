var r = i(427262),
    e = i(272984),
    l = i(792996);
i.d(
    n,
    {},
    {
        A: function (t, n, i) {
            switch (n) {
                case e.Qp.USER_ACTIVITY_PLAY:
                    if (t.isCurrentUser) return l.intl.string(l.t.ZpDeUC);
                    if (t.playingSameTrack) return l.intl.string(l.t.TYSymS);
                    if (t.notPlayable) return l.intl.formatToPlainString(l.t.SqJBnN, { name: e.HD });
                    return;
                case e.Qp.USER_ACTIVITY_SYNC:
                    if (t.isCurrentUser) return l.intl.string(l.t["AOU/CR"]);
                    if (t.syncingWithUser || t.syncingWithParty) return l.intl.string(l.t.m8CScv);
                    if (t.notPlayable) return l.intl.formatToPlainString(l.t.SqJBnN, { name: e.HD });
                    return l.intl.formatToPlainString(l.t.CT9xYI, { name: i ?? r.Ay.getName(t.user) });
                case e.Qp.EMBED_SYNC:
                    if (t.notPlayable) return l.intl.formatToPlainString(l.t.SqJBnN, { name: e.HD });
                    return;
                default:
                    return;
            }
        },
    },
);
