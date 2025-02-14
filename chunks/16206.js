n.d(t, { Z: () => r });
var i = n(981631),
    s = n(388032);
function r(e) {
    if (null == e) return null;
    switch (e.type) {
        case i.d4z.GUILD_ANNOUNCEMENT:
            return s.intl.string(s.t.l1dkSE);
        case i.d4z.GUILD_STORE:
            return s.intl.string(s.t['P1/Erq']);
        case i.d4z.DM:
        case i.d4z.GROUP_DM:
            return s.intl.string(s.t.jN2DfX);
        case i.d4z.PRIVATE_THREAD:
            return s.intl.string(s.t.F1zyvb);
        case i.d4z.ANNOUNCEMENT_THREAD:
        case i.d4z.PUBLIC_THREAD:
            return s.intl.string(s.t['7Xm5QE']);
        case i.d4z.GUILD_TEXT:
            return s.intl.string(s.t.Pnajj4);
        case i.d4z.GUILD_FORUM:
            return e.isMediaChannel() ? s.intl.string(s.t.seKITE) : s.intl.string(s.t.GbryDQ);
        case i.d4z.GUILD_MEDIA:
            return s.intl.string(s.t.seKITE);
        case i.d4z.GUILD_STAGE_VOICE:
            return s.intl.string(s.t.EErMzM);
        case i.d4z.GUILD_VOICE:
            return s.intl.string(s.t.BVZqJi);
        case i.d4z.GUILD_CATEGORY:
        default:
            return null;
    }
}
