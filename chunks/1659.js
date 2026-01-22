n.d(t, {
    m: () => i,
});
var r = n(7864);

function i(e, t) {
    var n, i;
    let a = (null == (n = e.tags) ? void 0 : n.guild_connections) !== void 0,
        s = (null == (i = t.tags) ? void 0 : i.guild_connections) !== void 0;
    return a && !s ? 1 : !a && s ? -1 : (0, r.AT)(e, t);
}
