n.d(t, { T: () => r }), n(733860);
var i = n(392711),
    l = n.n(i),
    a = n(823379);
function r(e, t) {
    return l()(e)
        .map(t.getUser)
        .unshift(t.getCurrentUser())
        .filter(a.lm)
        .sortBy((e) => e.username.toLowerCase())
        .value();
}
