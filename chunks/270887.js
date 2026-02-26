n.d(t, { A: () => I });
var i = n(735438),
    r = n.n(i),
    a = n(181079),
    s = n(957300),
    l = n(616075),
    o = n(832275),
    d = n(366811),
    _ = n(309010),
    c = n(711014),
    u = n(287809),
    A = n(619921),
    g = n(265422),
    E = n(652215);
let I = r().throttle(function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = c.Ay.getFlattenedGuildIds(),
        n = s.E.getState().isPreviewMode,
        { enabled: i, hasHigherPrivileges: r } = l.w.getConfig({ location: "navigateToServer" }),
        I = (function (e) {
            let t = d.A.getState().guildId;
            if (null == t) return -2;
            if (t === E.YYv) return -1;
            let n = e.indexOf(t);
            return -1 === n ? -2 : n;
        })(t);
    if (
        (-1 !== (I += e) || (0, o.J)(a.A, u.default, n, i, r) || (I += e),
        -3 === I && (I = t.length - 1),
        I >= t.length || -2 === I)
    )
        return void (0, g.a)(A.A.getHomeLink());
    let h = -1 === I ? E.YYv : t[I],
        C = _.A.getChannelId(h);
    (0, g.i)(h, C === h ? null : C, !1);
}, E.ugG);
