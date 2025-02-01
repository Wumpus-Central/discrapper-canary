var i = n(668530),
    r = n(974802);
e.exports = function (e, t) {
    var n = r[e + 'Prototype'],
        a = n && n[t];
    if (a) return a;
    var s = i[e],
        o = s && s.prototype;
    return o && o[t];
};
