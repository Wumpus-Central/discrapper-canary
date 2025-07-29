var r = n(807419),
    i = n(143283),
    a = n(706627),
    o = n(19235),
    s = /[\\^$.*+?()[\]{}|]/g,
    l = /^\[object .+?Constructor\]$/,
    c = Object.prototype,
    u = Function.prototype.toString,
    d = c.hasOwnProperty,
    _ = RegExp(
        '^' +
            u
                .call(d)
                .replace(s, '\\$&')
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$'
    );
e.exports = function (e) {
    return !(!a(e) || i(e)) && (r(e) ? _ : l).test(o(e));
};
