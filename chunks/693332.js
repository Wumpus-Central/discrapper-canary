var i = r(593007),
    a = r(382855),
    o = r(675717),
    s = r(526389),
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
    return !(!(0, o.Z)(e) || (0, a.Z)(e)) && ((0, i.Z)(e) ? p : u).test((0, s.Z)(e));
}
n.Z = h;
