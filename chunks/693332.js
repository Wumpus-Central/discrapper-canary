n.d(t, { Z: () => p });
var r = n(593007),
    i = n(382855),
    o = n(675717),
    a = n(526389),
    s = /[\\^$.*+?()[\]{}|]/g,
    l = /^\[object .+?Constructor\]$/,
    c = Object.prototype,
    u = Function.prototype.toString,
    d = c.hasOwnProperty,
    f = RegExp(
        '^' +
            u
                .call(d)
                .replace(s, '\\$&')
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$'
    );
let p = function (e) {
    return !(!(0, o.Z)(e) || (0, i.Z)(e)) && ((0, r.Z)(e) ? f : l).test((0, a.Z)(e));
};
