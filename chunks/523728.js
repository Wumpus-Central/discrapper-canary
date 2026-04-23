n.d(t, { A: () => r });
var i = n(652215),
    l = n(985018);
function r(e) {
    if (null == e) return null;
    switch (e.type) {
        case i.rbe.GUILD_ANNOUNCEMENT:
            return l.intl.string(l.t.l1dkSD);
        case i.rbe.GUILD_STORE:
            return l.intl.string(l.t["P1/Erq"]);
        case i.rbe.DM:
        case i.rbe.GROUP_DM:
            return l.intl.string(l.t.jN2DfZ);
        case i.rbe.PRIVATE_THREAD:
            return l.intl.string(l.t.F1zyvU);
        case i.rbe.ANNOUNCEMENT_THREAD:
        case i.rbe.PUBLIC_THREAD:
            return l.intl.string(l.t["7Xm5QI"]);
        case i.rbe.GUILD_TEXT:
            return l.intl.string(l.t.Pnajj0);
        case i.rbe.GUILD_FORUM:
            return e.isMediaChannel() ? l.intl.string(l.t.seKITE) : l.intl.string(l.t.GbryDd);
        case i.rbe.GUILD_MEDIA:
            return l.intl.string(l.t.seKITE);
        case i.rbe.GUILD_STAGE_VOICE:
            return l.intl.string(l.t.EErMzA);
        case i.rbe.GUILD_VOICE:
            return l.intl.string(l.t.BVZqJl);
        case i.rbe.GUILD_CATEGORY:
        default:
            return null;
    }
}
