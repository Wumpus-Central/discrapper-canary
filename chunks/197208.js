var a = t(936733),
    o = t(664417),
    n = t(623012);
(e.exports = function (e, r) {
    if (e) {
        if ('string' == typeof e) return n(e, r);
        var t,
            l = a((t = {}.toString.call(e))).call(t, 8, -1);
        return 'Object' === l && e.constructor && (l = e.constructor.name), 'Map' === l || 'Set' === l ? o(e) : 'Arguments' === l || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l) ? n(e, r) : void 0;
    }
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
