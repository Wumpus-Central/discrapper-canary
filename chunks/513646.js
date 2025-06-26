n.d(t, { h: () => o }), n(642613);
var r = n(237292),
    i = n(403485),
    l = n(604849);
function o(e) {
    let t = (0, r.y0)({ location: 'safety-tools-button' }),
        n = (0, l.c)(),
        o = (0, i.h)(e);
    if (!t || !n) return;
    let a = o.filter((e) => null != e.dismiss_timestamp);
    if (0 !== a.length) return a.sort((e, t) => (e.type > t.type || e.dismiss_timestamp < t.dismiss_timestamp ? 1 : -1))[0];
}
