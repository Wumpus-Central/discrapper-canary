n.d(t, { Z: () => l });
var i = n(548015),
    r = Object.prototype,
    a = r.hasOwnProperty,
    s = r.toString,
    o = i.Z ? i.Z.toStringTag : void 0;
let l = function (e) {
    var t = a.call(e, o),
        n = e[o];
    try {
        e[o] = void 0;
        var i = !0;
    } catch (e) {}
    var r = s.call(e);
    return i && (t ? (e[o] = n) : delete e[o]), r;
};
