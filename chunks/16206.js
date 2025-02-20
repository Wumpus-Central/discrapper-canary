n.d(t, { Z: () => s });
var r = n(981631),
    i = n(388032);
function s(e) {
    if (null == e) return null;
    switch (e.type) {
        case r.d4z.GUILD_ANNOUNCEMENT:
            return i.NW.string(i.t.l1dkSE);
        case r.d4z.GUILD_STORE:
            return i.NW.string(i.t['P1/Erq']);
        case r.d4z.DM:
        case r.d4z.GROUP_DM:
            return i.NW.string(i.t.jN2DfX);
        case r.d4z.PRIVATE_THREAD:
            return i.NW.string(i.t.F1zyvb);
        case r.d4z.ANNOUNCEMENT_THREAD:
        case r.d4z.PUBLIC_THREAD:
            return i.NW.string(i.t['7Xm5QE']);
        case r.d4z.GUILD_TEXT:
            return i.NW.string(i.t.Pnajj4);
        case r.d4z.GUILD_FORUM:
            return e.isMediaChannel() ? i.NW.string(i.t.seKITE) : i.NW.string(i.t.GbryDQ);
        case r.d4z.GUILD_MEDIA:
            return i.NW.string(i.t.seKITE);
        case r.d4z.GUILD_STAGE_VOICE:
            return i.NW.string(i.t.EErMzM);
        case r.d4z.GUILD_VOICE:
            return i.NW.string(i.t.BVZqJi);
        case r.d4z.GUILD_CATEGORY:
        default:
            return null;
    }
}
