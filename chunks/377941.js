var s = r(762479),
    c = /[\\^$.*+?()[\]{}|]/g,
    t = RegExp(c.source);
p.exports = function (p) {
    return (p = s(p)) && t.test(p) ? p.replace(c, "\\$&") : p;
};
