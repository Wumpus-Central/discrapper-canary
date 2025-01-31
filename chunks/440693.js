var i = n(56135),
    r = Object.prototype,
    a = r.hasOwnProperty,
    s = r.toString,
    o = i ? i.toStringTag : void 0;
function l(e) {
    var t = a.call(e, o),
        n = e[o];
    try {
        e[o] = void 0;
        var i = !0;
    } catch (e) {}
    var r = s.call(e);
    return i && (t ? (e[o] = n) : delete e[o]), r;
}
e.exports = l;
