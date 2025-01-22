var i = r(668530),
    a = r(974802);
e.exports = function (e, n) {
    var r = a[e + 'Prototype'],
        o = r && r[n];
    if (o) return o;
    var s = i[e],
        l = s && s.prototype;
    return l && l[n];
};
