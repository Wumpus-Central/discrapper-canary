n.d(t, { b: () => c });
var i = n(397927),
    l = n(723702),
    s = n(360619),
    a = n(682262),
    r = n(531525),
    o = n(857266),
    d = n(985018);
function c() {
    let e = (0, a.b_)(),
        t = (0, s.AC)(r.H.GAMES),
        n = [
            {
                id: o.J.MY_GAMES,
                title: d.intl.string(d.t["5DMgp9"]),
                icon: i.LVO,
                predicate: () => !l.isPlatformEmbedded,
                setting: r.H.GAMES_MY_GAMES,
            },
            {
                id: o.J.OVERLAY,
                title: d.intl.string(d.t.bNqkD9),
                icon: i.vH5,
                predicate: () => !e,
                setting: r.H.GAMES_OVERLAY,
            },
            {
                id: o.J.ACTIVITY_PRIVACY,
                title: d.intl.string(d.t.Cq98yL),
                icon: i.gXB,
                setting: r.H.GAMES_ACTIVITY_PRIVACY,
            },
        ].filter((e) => null == e.predicate || !e.predicate());
    if (null != t && t.size > 0) {
        let e = n.filter((e) => t.has(e.setting));
        return e.length > 0 ? e : n;
    }
    return n;
}
