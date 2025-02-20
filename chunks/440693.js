var r = n(56135),
    i = Object.prototype,
    o = i.hasOwnProperty,
    a = i.toString,
    s = r ? r.toStringTag : void 0;
function l(e) {
    var t = o.call(e, s),
        n = e[s];
    try {
        e[s] = void 0;
        var r = !0;
    } catch (e) {}
    var i = a.call(e);
    return r && (t ? (e[s] = n) : delete e[s]), i;
}
e.exports = l;
