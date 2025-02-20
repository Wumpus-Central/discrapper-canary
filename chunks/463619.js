n.d(t, { Z: () => l });
var r = n(548015),
    i = Object.prototype,
    o = i.hasOwnProperty,
    a = i.toString,
    s = r.Z ? r.Z.toStringTag : void 0;
let l = function (e) {
    var t = o.call(e, s),
        n = e[s];
    try {
        e[s] = void 0;
        var r = !0;
    } catch (e) {}
    var i = a.call(e);
    return r && (t ? (e[s] = n) : delete e[s]), i;
};
