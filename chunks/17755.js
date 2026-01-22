var r = n(446474),
    i = n(101968),
    a = n(339626),
    s = n(647055),
    o = n(221748),
    l = TypeError;
e.exports = function (e, t) {
    var n = e.exec;
    if (a(n)) {
        var c = r(n, e, t);
        return null !== c && i(c), c;
    }
    if ("RegExp" === s(e)) return r(o, e, t);
    throw new l("RegExp#exec called on incompatible receiver");
};
