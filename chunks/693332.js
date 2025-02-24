r.d(t, { Z: () => f });
var n = r(593007),
    o = r(382855),
    a = r(675717),
    i = r(526389),
    l = /^\[object .+?Constructor\]$/,
    s = Object.prototype,
    u = Function.prototype.toString,
    c = s.hasOwnProperty,
    p = RegExp(
        '^' +
            u
                .call(c)
                .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$'
    );
let f = function (e) {
    return !(!(0, a.Z)(e) || (0, o.Z)(e)) && ((0, n.Z)(e) ? p : l).test((0, i.Z)(e));
};
