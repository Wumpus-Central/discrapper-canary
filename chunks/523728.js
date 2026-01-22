n.d(t, {
    A: () => a,
});
var r = n(652215),
    i = n(985018);

function a(e) {
    if (null == e) return null;
    switch (e.type) {
        case r.rbe.GUILD_ANNOUNCEMENT:
            return i.intl.string(i.t.l1dkSD);
        case r.rbe.GUILD_STORE:
            return i.intl.string(i.t["P1/Erq"]);
        case r.rbe.DM:
        case r.rbe.GROUP_DM:
            return i.intl.string(i.t.jN2DfZ);
        case r.rbe.PRIVATE_THREAD:
            return i.intl.string(i.t.F1zyvU);
        case r.rbe.ANNOUNCEMENT_THREAD:
        case r.rbe.PUBLIC_THREAD:
            return i.intl.string(i.t["7Xm5QI"]);
        case r.rbe.GUILD_TEXT:
            return i.intl.string(i.t.Pnajj0);
        case r.rbe.GUILD_FORUM:
            return e.isMediaChannel() ? i.intl.string(i.t.seKITE) : i.intl.string(i.t.GbryDd);
        case r.rbe.GUILD_MEDIA:
            return i.intl.string(i.t.seKITE);
        case r.rbe.GUILD_STAGE_VOICE:
            return i.intl.string(i.t.EErMzA);
        case r.rbe.GUILD_VOICE:
            return i.intl.string(i.t.BVZqJl);
        case r.rbe.GUILD_CATEGORY:
        default:
            return null;
    }
}
