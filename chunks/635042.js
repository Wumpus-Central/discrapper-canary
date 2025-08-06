n.d(t, { Z: () => i });
var r = n(625137);
function i(e, t) {
    var n, i;
    let o = (null == (n = e.tags) ? void 0 : n.guild_connections) !== void 0,
        a = (null == (i = t.tags) ? void 0 : i.guild_connections) !== void 0;
    return o && !a ? 1 : !o && a ? -1 : (0, r.y2)(e, t);
}
