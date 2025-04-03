r.d(t, { Z: () => s });
var n = r(548015),
    o = Object.prototype,
    a = o.hasOwnProperty,
    i = o.toString,
    l = n.Z ? n.Z.toStringTag : void 0;
let s = function (e) {
    var t = a.call(e, l),
        r = e[l];
    try {
        e[l] = void 0;
        var n = !0;
    } catch (e) {}
    var o = i.call(e);
    return n && (t ? (e[l] = r) : delete e[l]), o;
};
