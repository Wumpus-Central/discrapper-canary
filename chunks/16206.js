n.d(t, { Z: () => a });
var r = n(981631),
    i = n(388032);
function a(e) {
    if (null == e) return null;
    switch (e.type) {
        case r.d4z.GUILD_ANNOUNCEMENT:
            return i.intl.string(i.t.l1dkSD);
        case r.d4z.GUILD_STORE:
            return i.intl.string(i.t["P1/Erq"]);
        case r.d4z.DM:
        case r.d4z.GROUP_DM:
            return i.intl.string(i.t.jN2DfZ);
        case r.d4z.PRIVATE_THREAD:
            return i.intl.string(i.t.F1zyvU);
        case r.d4z.ANNOUNCEMENT_THREAD:
        case r.d4z.PUBLIC_THREAD:
            return i.intl.string(i.t["7Xm5QI"]);
        case r.d4z.GUILD_TEXT:
            return i.intl.string(i.t.Pnajj0);
        case r.d4z.GUILD_FORUM:
            return e.isMediaChannel() ? i.intl.string(i.t.seKITE) : i.intl.string(i.t.GbryDd);
        case r.d4z.GUILD_MEDIA:
            return i.intl.string(i.t.seKITE);
        case r.d4z.GUILD_STAGE_VOICE:
            return i.intl.string(i.t.EErMzA);
        case r.d4z.GUILD_VOICE:
            return i.intl.string(i.t.BVZqJl);
        case r.d4z.GUILD_CATEGORY:
        default:
            return null;
    }
}
