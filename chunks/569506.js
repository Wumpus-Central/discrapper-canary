var i = r(867996),
    a = r(350780),
    o = r(661233),
    s = r(785775),
    l = /[\\^$.*+?()[\]{}|]/g,
    u = /^\[object .+?Constructor\]$/,
    c = Object.prototype,
    d = Function.prototype.toString,
    f = c.hasOwnProperty,
    p = RegExp(
        '^' +
            d
                .call(f)
                .replace(l, '\\$&')
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$'
    );
function h(e) {
    return !(!o(e) || a(e)) && (i(e) ? p : u).test(s(e));
}
e.exports = h;
