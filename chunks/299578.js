var r = a(807419),
    n = a(143283),
    o = a(706627),
    _ = a(19235),
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
    return !(!o(t) || n(t)) && (r(t) ? l : i).test(_(t));
};
