r.d(t, { Z: () => c });
var n = r(548015),
    o = r(204188),
    a = r(315162),
    i = r(906024),
    l = 1 / 0,
    s = n.Z ? n.Z.prototype : void 0,
    u = s ? s.toString : void 0;
let c = function e(t) {
    if ('string' == typeof t) return t;
    if ((0, a.Z)(t)) return (0, o.Z)(t, e) + '';
    if ((0, i.Z)(t)) return u ? u.call(t) : '';
    var r = t + '';
    return '0' == r && 1 / t == -l ? '-0' : r;
};
