r.d(n, {
    ZP: function () {
        return o;
    },
    _$: function () {
        return s;
    },
    d7: function () {
        return l;
    }
});
var i = r(47120);
var a = r(149765);
function o(e) {
    for (let { permissionOverwrites_: n } of e)
        if (null != n)
            for (let e in n) {
                let r = n[e];
                (r.allow = a.vB(r.allow)), (r.deny = a.vB(r.deny));
            }
}
function s(e) {
    for (let [n, r] of e) o(r);
}
function l(e) {
    let { permissionOverwrites_: n } = e;
    if (null != n)
        for (let e in n) {
            let r = n[e];
            (r.allow = a.vB(r.allow)), (r.deny = a.vB(r.deny));
        }
    return e;
}
