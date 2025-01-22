var i = r(548015),
    a = Object.prototype,
    o = a.hasOwnProperty,
    s = a.toString,
    l = i.Z ? i.Z.toStringTag : void 0;
function u(e) {
    var n = o.call(e, l),
        r = e[l];
    try {
        e[l] = void 0;
        var i = !0;
    } catch (e) {}
    var a = s.call(e);
    return i && (n ? (e[l] = r) : delete e[l]), a;
}
n.Z = u;
