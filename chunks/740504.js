n.d(t, { Z: () => o });
var r = n(392711),
    i = n.n(r);
function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
    return i()(e)
        .map((e) => ('null' === e.channel.id ? t[e.channel.id] : [e, t[e.channel.id]]))
        .flattenDeep()
        .filter(n)
        .value();
}
