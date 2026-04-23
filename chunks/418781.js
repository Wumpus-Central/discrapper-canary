var r = n(659671),
    i = /[\\^$.*+?()[\]{}|]/g,
    s = RegExp(i.source);
e.exports = function (e) {
    return (e = r(e)) && s.test(e) ? e.replace(i, "\\$&") : e;
};
