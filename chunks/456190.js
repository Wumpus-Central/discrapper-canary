n.d(t, { Z: () => a });
var r = n(51144),
    i = n(616922),
    o = n(388032);
function a(e, t, n) {
    switch (t) {
        case i.kG.USER_ACTIVITY_PLAY:
            if (e.isCurrentUser) return o.NW.string(o.t.ZpDeUF);
            if (e.playingSameTrack) return o.NW.string(o.t.TYSymZ);
            if (e.notPlayable) return o.NW.formatToPlainString(o.t.SqJBnJ, { name: i.ai });
            return;
        case i.kG.USER_ACTIVITY_SYNC:
            if (e.isCurrentUser) return o.NW.string(o.t['AOU/CQ']);
            if (e.syncingWithUser || e.syncingWithParty) return o.NW.string(o.t.m8CScn);
            if (e.notPlayable) return o.NW.formatToPlainString(o.t.SqJBnJ, { name: i.ai });
            return o.NW.formatToPlainString(o.t.CT9xYG, { name: null != n ? n : r.ZP.getName(e.user) });
        case i.kG.EMBED_SYNC:
            if (e.isCurrentUser) return o.NW.string(o.t['AOU/CQ']);
            if (e.syncingWithUser || e.syncingWithParty) return o.NW.string(o.t.m8CScn);
            if (e.notPlayable) return o.NW.formatToPlainString(o.t.SqJBnJ, { name: i.ai });
            return;
        default:
            return;
    }
}
