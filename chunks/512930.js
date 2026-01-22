var r = n(574366),
    i = Object.prototype,
    a = i.hasOwnProperty,
    s = i.toString,
    o = r ? r.toStringTag : void 0;
e.exports = function (e) {
    var t = a.call(e, o),
        n = e[o];
    try {
        e[o] = void 0;
        var r = !0;
    } catch (e) {}
    var i = s.call(e);
    return r && (t ? (e[o] = n) : delete e[o]), i;
};
