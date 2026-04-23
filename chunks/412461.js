a.d(t, { DB: () => h, TR: () => u, dG: () => p, jL: () => m }), a(323874), a(14289), a(35956);
var n = a(323125),
    l = a(311907),
    i = a(976860),
    s = a(961350),
    r = a(287809),
    o = a(954571),
    c = a(310419),
    d = a(652215);
function u(e, t) {
    let a = c.h.getField("sessionId"),
        n = c.h.getField("guildId"),
        l = c.h.getField("entrypoint")?.name,
        i = r.default.getCurrentUser(),
        s = { ...t, guild_id: n, directory_session_id: a, source: l, user_id: i?.id };
    return o.default.track(e, s);
}
function h() {
    return (0, l.bG)([s.default], () => s.default.isAuthenticated());
}
function m() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = new URL(location.href);
    for (let a in e) {
        let n = e[a];
        t.searchParams.set(a, n);
    }
    let a = t.pathname + t.search,
        l = (0, n.T2)(a, !1);
    (0, i.pX)(l);
}
function p() {
    let e = new URL(location.href),
        t = `?redirect_to=${encodeURIComponent(e.pathname + e.search)}`;
    (0, i.pX)(d.BVt.REGISTER + t);
}
