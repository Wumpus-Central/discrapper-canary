n.d(t, { Z: () => i });
var r = n(625137);
function i(e, t) {
    var n, i;
    let a = (null == (n = e.tags) ? void 0 : n.guild_connections) !== void 0,
        o = (null == (i = t.tags) ? void 0 : i.guild_connections) !== void 0;
    return a && !o ? 1 : !a && o ? -1 : (0, r.y2)(e, t);
}
