var r = n(586443),
    i = n(683715),
    s = n(646344),
    a = n(731214),
    o = /^\[object .+?Constructor\]$/,
    l = Object.prototype,
    u = Function.prototype.toString,
    d = l.hasOwnProperty,
    c = RegExp(
        "^" +
            u
                .call(d)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
            "$",
    );
e.exports = function (e) {
    return !(!s(e) || i(e)) && (r(e) ? c : o).test(a(e));
};
