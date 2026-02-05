n.d(t, { A: () => r });
var i = n(652215),
    s = n(985018);
function r(e) {
    if (null == e) return null;
    switch (e.type) {
        case i.rbe.GUILD_ANNOUNCEMENT:
            return s.intl.string(s.t.l1dkSD);
        case i.rbe.GUILD_STORE:
            return s.intl.string(s.t["P1/Erq"]);
        case i.rbe.DM:
        case i.rbe.GROUP_DM:
            return s.intl.string(s.t.jN2DfZ);
        case i.rbe.PRIVATE_THREAD:
            return s.intl.string(s.t.F1zyvU);
        case i.rbe.ANNOUNCEMENT_THREAD:
        case i.rbe.PUBLIC_THREAD:
            return s.intl.string(s.t["7Xm5QI"]);
        case i.rbe.GUILD_TEXT:
            return s.intl.string(s.t.Pnajj0);
        case i.rbe.GUILD_FORUM:
            return e.isMediaChannel() ? s.intl.string(s.t.seKITE) : s.intl.string(s.t.GbryDd);
        case i.rbe.GUILD_MEDIA:
            return s.intl.string(s.t.seKITE);
        case i.rbe.GUILD_STAGE_VOICE:
            return s.intl.string(s.t.EErMzA);
        case i.rbe.GUILD_VOICE:
            return s.intl.string(s.t.BVZqJl);
        case i.rbe.GUILD_CATEGORY:
        default:
            return null;
    }
}
