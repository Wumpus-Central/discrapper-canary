n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(981631),
    r = n(388032);
function s(e) {
    if (null == e) return null;
    switch (e.type) {
        case i.d4z.GUILD_ANNOUNCEMENT:
            return r.intl.string(r.t.l1dkSE);
        case i.d4z.GUILD_STORE:
            return r.intl.string(r.t['P1/Erq']);
        case i.d4z.DM:
        case i.d4z.GROUP_DM:
            return r.intl.string(r.t.jN2DfX);
        case i.d4z.PRIVATE_THREAD:
            return r.intl.string(r.t.F1zyvb);
        case i.d4z.ANNOUNCEMENT_THREAD:
        case i.d4z.PUBLIC_THREAD:
            return r.intl.string(r.t['7Xm5QE']);
        case i.d4z.GUILD_TEXT:
            return r.intl.string(r.t.Pnajj4);
        case i.d4z.GUILD_FORUM:
            return e.isMediaChannel() ? r.intl.string(r.t.seKITE) : r.intl.string(r.t.GbryDQ);
        case i.d4z.GUILD_MEDIA:
            return r.intl.string(r.t.seKITE);
        case i.d4z.GUILD_STAGE_VOICE:
            return r.intl.string(r.t.EErMzM);
        case i.d4z.GUILD_VOICE:
            return r.intl.string(r.t.BVZqJi);
        case i.d4z.GUILD_CATEGORY:
        default:
            return null;
    }
}
