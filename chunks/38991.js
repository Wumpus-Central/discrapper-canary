var r = n(99302),
    i = n(632516),
    s = n(509185),
    a = n(429397),
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
