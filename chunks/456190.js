n.d(t, { Z: () => o });
var r = n(51144),
    i = n(616922),
    a = n(388032);
function o(e, t, n) {
    switch (t) {
        case i.kG.USER_ACTIVITY_PLAY:
            if (e.isCurrentUser) return a.intl.string(a.t.ZpDeUF);
            if (e.playingSameTrack) return a.intl.string(a.t.TYSymZ);
            if (e.notPlayable) return a.intl.formatToPlainString(a.t.SqJBnJ, { name: i.ai });
            return;
        case i.kG.USER_ACTIVITY_SYNC:
            if (e.isCurrentUser) return a.intl.string(a.t['AOU/CQ']);
            if (e.syncingWithUser || e.syncingWithParty) return a.intl.string(a.t.m8CScn);
            if (e.notPlayable) return a.intl.formatToPlainString(a.t.SqJBnJ, { name: i.ai });
            return a.intl.formatToPlainString(a.t.CT9xYG, { name: null != n ? n : r.ZP.getName(e.user) });
        case i.kG.EMBED_SYNC:
            if (e.isCurrentUser) return a.intl.string(a.t['AOU/CQ']);
            if (e.syncingWithUser || e.syncingWithParty) return a.intl.string(a.t.m8CScn);
            if (e.notPlayable) return a.intl.formatToPlainString(a.t.SqJBnJ, { name: i.ai });
            return;
        default:
            return;
    }
}
