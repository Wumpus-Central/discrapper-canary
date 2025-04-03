var a = t(962908),
    o = t(991813),
    n = t(169690);
(e.exports = function (e, r) {
    if (e) {
        if ('string' == typeof e) return n(e, r);
        var t,
            l = a((t = Object.prototype.toString.call(e))).call(t, 8, -1);
        if (('Object' === l && e.constructor && (l = e.constructor.name), 'Map' === l || 'Set' === l)) return o(e);
        if ('Arguments' === l || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)) return n(e, r);
    }
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
