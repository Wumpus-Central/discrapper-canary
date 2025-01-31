n.d(t, { h: () => r });
var i = n(237292),
    l = n(403485),
    a = n(604849);
function r(e) {
    let t = (0, i.y0)({ location: 'safety-tools-button' }),
        n = (0, a.c)(),
        r = (0, l.h)(e);
    if (!t || !n) return;
    let s = r.filter((e) => null != e.dismiss_timestamp);
    if (0 !== s.length) return s.sort((e, t) => (e.type > t.type ? 1 : e.dismiss_timestamp < t.dismiss_timestamp ? 1 : -1))[0];
}
