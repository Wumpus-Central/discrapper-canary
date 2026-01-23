n.d(t, {
    b: () => f,
});
var r = n(397927),
    i = n(723702),
    a = n(360619),
    s = n(682262),
    o = n(531525),
    l = n(857266),
    c = n(985018);

function u(e) {
    return [
        {
            id: l.J.MY_GAMES,
            title: c.intl.string(c.t["5DMgp9"]),
            icon: r.LVO,
            predicate: () => !i.isPlatformEmbedded,
            setting: o.H.GAMES_MY_GAMES,
        },
        {
            id: l.J.OVERLAY,
            title: c.intl.string(c.t.bNqkD9),
            icon: r.vH5,
            predicate: () => !e,
            setting: o.H.GAMES_OVERLAY,
        },
        {
            id: l.J.ACTIVITY_PRIVACY,
            title: c.intl.string(c.t.Cq98yL),
            icon: r.gXB,
            setting: o.H.GAMES_ACTIVITY_PRIVACY,
        },
    ];
}

function d(e, t) {
    let n = u(e).filter((e) => null == e.predicate || !e.predicate());
    if (null != t && t.size > 0) {
        let e = n.filter((e) => t.has(e.setting));
        return e.length > 0 ? e : n;
    }
    return n;
}

function f() {
    return d((0, s.b_)(), (0, a.AC)(o.H.GAMES));
}
