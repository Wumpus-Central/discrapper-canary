n.d(t, {
    ZP: () => i,
    _$: () => o,
    d7: () => a
}),
    n(47120);
var r = n(149765);
function i(e) {
    for (let { permissionOverwrites_: t } of e)
        if (null != t)
            for (let e in t) {
                let n = t[e];
                (n.allow = r.vB(n.allow)), (n.deny = r.vB(n.deny));
            }
}
function o(e) {
    for (let [t, n] of e) i(n);
}
function a(e) {
    let { permissionOverwrites_: t } = e;
    if (null != t)
        for (let e in t) {
            let n = t[e];
            (n.allow = r.vB(n.allow)), (n.deny = r.vB(n.deny));
        }
    return e;
}
