n.d(t, { A: () => p });
var i = n(735438),
    r = n.n(i),
    a = n(554146),
    l = n(771781),
    s = n(826673),
    o = n(181079),
    d = n(379587),
    _ = n(832275),
    c = n(366811),
    u = n(309010),
    A = n(967198),
    I = n(711014),
    E = n(287809),
    g = n(619921),
    C = n(265422),
    h = n(652215);
let p = r().throttle(function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = I.Ay.getFlattenedGuildIds(),
        { enabled: n, hasHigherPrivileges: i } = d.o.getConfig({ location: "navigateToServer" }),
        r = (0, l.dD)(a.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM),
        p = (0, s.k8)(a.M.FAVORITES_SERVER_ONBOARDING_INTRO),
        S = (function (e) {
            let t = c.A.getState().guildId;
            if (null == t) return -2;
            if (t === h.YYv) return -1;
            let n = e.indexOf(t);
            return -1 === n ? -2 : n;
        })(t);
    if (
        (-1 !== (S += e) ||
            (0, _.J)(o.A, E.default, A.A, {
                favoritesGuildXPEnabled: n,
                hasHigherPrivileges: i,
                isMenuItemDCSelected: r,
                isIntroDCDismissed: p,
            }) ||
            (S += e),
        -3 === S && (S = t.length - 1),
        S >= t.length || -2 === S)
    )
        return void (0, C.a)(g.A.getHomeLink());
    let f = -1 === S ? h.YYv : t[S],
        T = u.A.getChannelId(f);
    (0, C.i)(f, T === f ? null : T, !1);
}, h.ugG);
