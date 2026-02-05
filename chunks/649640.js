"use strict";
n.d(t, { _3: () => f, aG: () => m, b2: () => _, n6: () => p });
var r = n(64700),
    i = n(458217),
    a = n(397927),
    s = n(724442),
    o = n(654107),
    l = n(486020),
    u = n(835517),
    c = n(652215);
let d = 512;
function _() {
    return (0, a.rdh)(a.LU0.colors.GUILD_PROFILE_BANNER_BACKGROUND_DEFAULT);
}
function f(e) {
    let t = e.customBanner;
    if (null != t && e.features?.includes(c.GuildFeatures.DISCOVERABLE)) {
        if (l.aq.test(t)) return `url(${t}) center / cover`;
        let n = l.Ay.getGuildDiscoverySplashURL({ id: e.id, splash: t, size: d * (0, u.A)() });
        if (null != n) return `url(${n}) center / cover`;
    }
    return null;
}
function p(e) {
    let t = (0, i.Pf)(e, 1.75);
    return `radial-gradient(105.43% 127.05% at 50.1% 127.05%, ${t} 20.65%, ${e} 85.16%)`;
}
function h(e) {
    return null == e.icon
        ? null
        : l.aq.test(e.icon)
          ? e.icon
          : l.Ay.getGuildIconURL({ id: e.id, icon: e.icon, size: 64 });
}
function m(e) {
    let { profile: t, defaultColor: n, forceDefaultColor: i } = e,
        a = i ? null : h(t),
        l = r.useRef(n),
        u = (0, s.A)(l),
        c = (0, o.Ay)(a, u);
    return (r.useEffect(() => {
        l.current = c;
    }, [c]),
    null == t.icon)
        ? n
        : c;
}
