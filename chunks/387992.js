var e = n(668530),
    o = n(974802);
t.exports = function (t, r) {
    var n = o[t + 'Prototype'],
        i = n && n[r];
    if (i) return i;
    var u = e[t],
        s = u && u.prototype;
    return s && s[r];
};
