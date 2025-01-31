n.d(t, { Z: () => s });
var i = n(51144),
    r = n(616922),
    a = n(388032);
function s(e, t, n) {
    switch (t) {
        case r.kG.USER_ACTIVITY_PLAY:
            if (e.isCurrentUser) return a.intl.string(a.t.ZpDeUF);
            if (e.playingSameTrack) return a.intl.string(a.t.TYSymZ);
            if (e.notPlayable) return a.intl.formatToPlainString(a.t.SqJBnJ, { name: r.ai });
            return;
        case r.kG.USER_ACTIVITY_SYNC:
            if (e.isCurrentUser) return a.intl.string(a.t['AOU/CQ']);
            if (e.syncingWithUser || e.syncingWithParty) return a.intl.string(a.t.m8CScn);
            if (e.notPlayable) return a.intl.formatToPlainString(a.t.SqJBnJ, { name: r.ai });
            return a.intl.formatToPlainString(a.t.CT9xYG, { name: null != n ? n : i.ZP.getName(e.user) });
        case r.kG.EMBED_SYNC:
            if (e.isCurrentUser) return a.intl.string(a.t['AOU/CQ']);
            if (e.syncingWithUser || e.syncingWithParty) return a.intl.string(a.t.m8CScn);
            if (e.notPlayable) return a.intl.formatToPlainString(a.t.SqJBnJ, { name: r.ai });
            return;
        default:
            return;
    }
}
