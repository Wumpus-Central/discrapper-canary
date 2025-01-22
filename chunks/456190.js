r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(51144),
    a = r(616922),
    o = r(388032);
function s(e, n, r) {
    switch (n) {
        case a.kG.USER_ACTIVITY_PLAY:
            if (e.isCurrentUser) return o.intl.string(o.t.ZpDeUF);
            if (e.playingSameTrack) return o.intl.string(o.t.TYSymZ);
            if (e.notPlayable) return o.intl.formatToPlainString(o.t.SqJBnJ, { name: a.ai });
            return;
        case a.kG.USER_ACTIVITY_SYNC:
            if (e.isCurrentUser) return o.intl.string(o.t['AOU/CQ']);
            if (e.syncingWithUser || e.syncingWithParty) return o.intl.string(o.t.m8CScn);
            if (e.notPlayable) return o.intl.formatToPlainString(o.t.SqJBnJ, { name: a.ai });
            return o.intl.formatToPlainString(o.t.CT9xYG, { name: null != r ? r : i.ZP.getName(e.user) });
        case a.kG.EMBED_SYNC:
            if (e.isCurrentUser) return o.intl.string(o.t['AOU/CQ']);
            if (e.syncingWithUser || e.syncingWithParty) return o.intl.string(o.t.m8CScn);
            if (e.notPlayable) return o.intl.formatToPlainString(o.t.SqJBnJ, { name: a.ai });
            return;
        default:
            return;
    }
}
