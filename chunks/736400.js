n.d(t, { Ay: () => l, X3: () => a, n2: () => r });
var i = n(136722);
function l(e) {
    for (let { permissionOverwrites_: t } of e)
        if (null != t)
            for (let e in t) {
                let n = t[e];
                (n.allow = i.iu(n.allow)), (n.deny = i.iu(n.deny));
            }
}
function a(e) {
    for (let [t, n] of e) l(n);
}
function r(e) {
    let { permissionOverwrites_: t } = e;
    if (null != t)
        for (let e in t) {
            let n = t[e];
            (n.allow = i.iu(n.allow)), (n.deny = i.iu(n.deny));
        }
    return e;
}
