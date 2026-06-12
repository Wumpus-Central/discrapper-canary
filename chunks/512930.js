var i = n(574366),
    r = Object.prototype,
    s = r.hasOwnProperty,
    a = r.toString,
    o = i ? i.toStringTag : void 0;
e.exports = function (e) {
    var t = s.call(e, o),
        n = e[o];
    try {
        e[o] = void 0;
        var i = !0;
    } catch (e) {}
    var r = a.call(e);
    return i && (t ? (e[o] = n) : delete e[o]), r;
};
