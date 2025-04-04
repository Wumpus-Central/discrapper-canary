n.d(t, { Z: () => i });
var r = n(944371),
    o = n(127214),
    a = n(970720);
function i(e, t) {
    if (e) {
        if ('string' == typeof e) return (0, a.Z)(e, t);
        var n,
            i = r((n = {}.toString.call(e))).call(n, 8, -1);
        return 'Object' === i && e.constructor && (i = e.constructor.name), 'Map' === i || 'Set' === i ? o(e) : 'Arguments' === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? (0, a.Z)(e, t) : void 0;
    }
}
