var r = a(807419),
    n = a(143283),
    _ = a(706627),
    o = a(19235),
    i = /^\[object .+?Constructor\]$/,
    c = Object.prototype,
    s = Function.prototype.toString,
    E = c.hasOwnProperty,
    l = RegExp(
        '^' +
            s
                .call(E)
                .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$'
    );
t.exports = function (t) {
    return !(!_(t) || n(t)) && (r(t) ? l : i).test(o(t));
};
