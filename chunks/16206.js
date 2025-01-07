t.d(n, {
    Z: function () {
        return i;
    }
});
var r = t(981631),
    s = t(388032);
function i(e) {
    if (null == e) return null;
    switch (e.type) {
        case r.d4z.GUILD_ANNOUNCEMENT:
            return s.intl.string(s.t.l1dkSE);
        case r.d4z.GUILD_STORE:
            return s.intl.string(s.t['P1/Erq']);
        case r.d4z.DM:
        case r.d4z.GROUP_DM:
            return s.intl.string(s.t.jN2DfX);
        case r.d4z.PRIVATE_THREAD:
            return s.intl.string(s.t.F1zyvb);
        case r.d4z.ANNOUNCEMENT_THREAD:
        case r.d4z.PUBLIC_THREAD:
            return s.intl.string(s.t['7Xm5QE']);
        case r.d4z.GUILD_TEXT:
            return s.intl.string(s.t.Pnajj4);
        case r.d4z.GUILD_FORUM:
            return e.isMediaChannel() ? s.intl.string(s.t.seKITE) : s.intl.string(s.t.GbryDQ);
        case r.d4z.GUILD_MEDIA:
            return s.intl.string(s.t.seKITE);
        case r.d4z.GUILD_STAGE_VOICE:
            return s.intl.string(s.t.EErMzM);
        case r.d4z.GUILD_VOICE:
            return s.intl.string(s.t.BVZqJi);
        case r.d4z.GUILD_CATEGORY:
        default:
            return null;
    }
}
