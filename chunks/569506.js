var i = n(867996),
    r = n(350780),
    a = n(661233),
    s = n(785775),
    o = /[\\^$.*+?()[\]{}|]/g,
    l = /^\[object .+?Constructor\]$/,
    u = Object.prototype,
    c = Function.prototype.toString,
    d = u.hasOwnProperty,
    f = RegExp(
        '^' +
            c
                .call(d)
                .replace(o, '\\$&')
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$'
    );
function _(e) {
    return !(!a(e) || r(e)) && (i(e) ? f : l).test(s(e));
}
e.exports = _;
