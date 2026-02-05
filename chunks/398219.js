n.d(t, { F: () => a }), n(667532);
var i = n(735438),
    l = n.n(i),
    s = n(403362);
function a(e, t) {
    return l()(e)
        .map(t.getUser)
        .unshift(t.getCurrentUser())
        .filter(s.Vq)
        .sortBy((e) => e.username.toLowerCase())
        .value();
}
