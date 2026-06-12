var i = n(586443),
    r = n(683715),
    s = n(646344),
    a = n(731214),
    o = /^\[object .+?Constructor\]$/,
    l = Object.prototype,
    u = Function.prototype.toString,
    c = l.hasOwnProperty,
    d = RegExp(
        "^" +
            u
                .call(c)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
            "$",
    );
e.exports = function (e) {
    return !(!s(e) || r(e)) && (i(e) ? d : o).test(a(e));
};
