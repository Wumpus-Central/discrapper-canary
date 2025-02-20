var r = n(668530),
    i = n(974802);
e.exports = function (e, t) {
    var n = i[e + 'Prototype'],
        o = n && n[t];
    if (o) return o;
    var a = r[e],
        s = a && a.prototype;
    return s && s[t];
};
