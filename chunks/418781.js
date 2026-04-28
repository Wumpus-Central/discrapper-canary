var n = e(659671),
    o = /[\\^$.*+?()[\]{}|]/g,
    i = RegExp(o.source);
t.exports = function (t) {
    return (t = n(t)) && i.test(t) ? t.replace(o, "\\$&") : t;
};
