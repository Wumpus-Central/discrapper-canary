s.d(n, { m: () => c });
var t = s(7864);
function c(i, n) {
    let s = i.tags?.guild_connections !== void 0,
        c = n.tags?.guild_connections !== void 0;
    return s && !c ? 1 : !s && c ? -1 : (0, t.AT)(i, n);
}
