n.d(t, { Z: () => a });
var i = n(392711),
    r = n.n(i);
function a(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
    return r()(e)
        .map((e) => ('null' === e.channel.id ? t[e.channel.id] : [e, t[e.channel.id]]))
        .flattenDeep()
        .filter(n)
        .value();
}
