n.d(t, {
    b: () => d,
});
var i = n(397927),
    s = n(723702),
    l = n(360619),
    r = n(682262),
    a = n(531525),
    o = n(857266),
    c = n(985018);

function d() {
    let e = (0, r.b_)(),
        t = (0, l.AC)(a.H.GAMES),
        n = [
            {
                id: o.J.MY_GAMES,
                title: c.intl.string(c.t["5DMgp9"]),
                icon: i.LVO,
                predicate: () => !s.isPlatformEmbedded,
                setting: a.H.GAMES_MY_GAMES,
            },
            {
                id: o.J.OVERLAY,
                title: c.intl.string(c.t.bNqkD9),
                icon: i.vH5,
                predicate: () => !e,
                setting: a.H.GAMES_OVERLAY,
            },
            {
                id: o.J.ACTIVITY_PRIVACY,
                title: c.intl.string(c.t.Cq98yL),
                icon: i.gXB,
                setting: a.H.GAMES_ACTIVITY_PRIVACY,
            },
        ].filter((e) => null == e.predicate || !e.predicate());
    if (null != t && t.size > 0) {
        let e = n.filter((e) => t.has(e.setting));
        return e.length > 0 ? e : n;
    }
    return n;
}
