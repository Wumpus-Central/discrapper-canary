n.d(t, { Z: () => i });
var r = n(833880),
    o = n(896416),
    a = n(15568);
function i(e, t) {
    if (e) {
        if ('string' == typeof e) return (0, a.Z)(e, t);
        var n,
            i = r((n = Object.prototype.toString.call(e))).call(n, 8, -1);
        if (('Object' === i && e.constructor && (i = e.constructor.name), 'Map' === i || 'Set' === i)) return o(e);
        if ('Arguments' === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return (0, a.Z)(e, t);
    }
}
