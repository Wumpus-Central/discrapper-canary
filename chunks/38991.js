var r = n(99302),
    i = n(632516),
    a = n(509185),
    s = n(429397),
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
