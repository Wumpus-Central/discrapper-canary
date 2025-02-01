n.d(t, { Z: () => _ });
var i = n(593007),
    r = n(382855),
    a = n(675717),
    s = n(526389),
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
let _ = function (e) {
    return !(!(0, a.Z)(e) || (0, r.Z)(e)) && ((0, i.Z)(e) ? f : l).test((0, s.Z)(e));
};
