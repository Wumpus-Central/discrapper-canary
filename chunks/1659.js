n.d(t, { m: () => i });
var a = n(7864);
function i(e, t) {
    let n = e.tags?.guild_connections !== void 0,
        i = t.tags?.guild_connections !== void 0;
    return n && !i ? 1 : !n && i ? -1 : (0, a.AT)(e, t);
}
