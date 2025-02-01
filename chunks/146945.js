var r = a(466293),
    n = Object.prototype,
    o = n.hasOwnProperty,
    _ = n.toString,
    i = r ? r.toStringTag : void 0;
t.exports = function (t) {
    var e = o.call(t, i),
        a = t[i];
    try {
        t[i] = void 0;
        var r = !0;
    } catch (t) {}
    var n = _.call(t);
    return r && (e ? (t[i] = a) : delete t[i]), n;
};
