var r = n(586443),
    i = n(683715),
    a = n(646344),
    s = n(731214),
    o = /[\\^$.*+?()[\]{}|]/g,
    l = /^\[object .+?Constructor\]$/,
    c = Object.prototype,
    u = Function.prototype.toString,
    d = c.hasOwnProperty,
    f = RegExp(
        "^" +
            u
                .call(d)
                .replace(o, "\\$&")
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
            "$",
    );
e.exports = function (e) {
    return !(!a(e) || i(e)) && (r(e) ? f : l).test(s(e));
};
