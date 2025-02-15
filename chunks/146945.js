var r = a(466293),
    n = Object.prototype,
    _ = n.hasOwnProperty,
    o = n.toString,
    i = r ? r.toStringTag : void 0;
t.exports = function (t) {
    var e = _.call(t, i),
        a = t[i];
    try {
        t[i] = void 0;
        var r = !0;
    } catch (t) {}
    var n = o.call(t);
    return r && (e ? (t[i] = a) : delete t[i]), n;
};
