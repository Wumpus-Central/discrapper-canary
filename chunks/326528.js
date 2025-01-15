n.d(t, {
    b: function () {
        return u;
    }
});
var i = n(481060),
    r = n(358085),
    s = n(991346),
    a = n(295545),
    l = n(168308),
    o = n(726985),
    c = n(332325),
    d = n(388032);
function u() {
    let e = (0, l.bC)(),
        t = (0, s.Gj)(o.s6.GAMES);
    return (function (e, t, n) {
        var s;
        let a = ((s = e),
        [
            {
                id: c.Z.MY_GAMES,
                title: d.intl.string(d.t['5DMgp6']),
                icon: i.DpadIcon,
                predicate: () => !r.isPlatformEmbedded,
                setting: o.s6.GAMES_MY_GAMES
            },
            {
                id: c.Z.CLIPS,
                title: d.intl.string(d.t.z2jK6e),
                icon: i.ClipsIcon,
                setting: o.s6.GAMES_CLIPS
            },
            {
                id: c.Z.OVERLAY,
                title: d.intl.string(d.t.bNqkDw),
                icon: i.ScreenSystemRequirementsIcon,
                predicate: () => !s,
                setting: o.s6.GAMES_OVERLAY
            },
            {
                id: c.Z.ACTIVITY_PRIVACY,
                title: d.intl.string(d.t.Cq98yM),
                icon: i.FlashIcon,
                setting: o.s6.GAMES_ACTIVITY_PRIVACY
            }
        ]).filter((e) => null == e.predicate || !e.predicate());
        if (t && null != n && n.size > 0) {
            let e = a.filter((e) => n.has(e.setting));
            return e.length > 0 ? e : a;
        }
        return a;
    })(e, (0, a.eA)({ location: 'settings' }), t);
}
