n.d(t, { Z: () => s });
var i = n(833880),
    r = n(896416),
    a = n(15568);
function s(e, t) {
    if (e) {
        if ('string' == typeof e) return (0, a.Z)(e, t);
        var n,
            s = i((n = Object.prototype.toString.call(e))).call(n, 8, -1);
        if (('Object' === s && e.constructor && (s = e.constructor.name), 'Map' === s || 'Set' === s)) return r(e);
        if ('Arguments' === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return (0, a.Z)(e, t);
    }
}
