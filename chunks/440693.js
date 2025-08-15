var r = n(56135),
    i = Object.prototype,
    a = i.hasOwnProperty,
    o = i.toString,
    s = r ? r.toStringTag : void 0;
e.exports = function (e) {
    var t = a.call(e, s),
        n = e[s];
    try {
        e[s] = void 0;
        var r = !0;
    } catch (e) {}
    var i = o.call(e);
    return r && (t ? (e[s] = n) : delete e[s]), i;
};
