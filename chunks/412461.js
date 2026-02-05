a.d(t, { DB: () => h, TR: () => u, dG: () => p, jL: () => m }), a(323874), a(14289), a(35956);
var n = a(323125),
    i = a(311907),
    s = a(976860),
    l = a(961350),
    r = a(287809),
    o = a(954571),
    c = a(310419),
    d = a(652215);
function u(e, t) {
    let a = c.h.getField("sessionId"),
        n = c.h.getField("guildId"),
        i = c.h.getField("entrypoint")?.name,
        s = r.default.getCurrentUser(),
        l = { ...t, guild_id: n, directory_session_id: a, source: i, user_id: s?.id };
    return o.default.track(e, l);
}
function h() {
    return (0, i.bG)([l.default], () => l.default.isAuthenticated());
}
function m() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = new URL(location.href);
    for (let a in e) {
        let n = e[a];
        t.searchParams.set(a, n);
    }
    let a = t.pathname + t.search,
        i = (0, n.T2)(a, !1);
    (0, s.pX)(i);
}
function p() {
    let e = new URL(location.href),
        t = `?redirect_to=${encodeURIComponent(e.pathname + e.search)}`;
    (0, s.pX)(d.BVt.REGISTER + t);
}
