var r = n(263604),
    i = /[\\^$.*+?()[\]{}|]/g,
    a = RegExp(i.source);
e.exports = function (e) {
    return (e = r(e)) && a.test(e) ? e.replace(i, "\\$&") : e;
};
