var t = p(762479),
    n = /[\\^$.*+?()[\]{}|]/g,
    s = RegExp(n.source);
r.exports = function (r) {
    return (r = t(r)) && s.test(r) ? r.replace(n, "\\$&") : r;
};
