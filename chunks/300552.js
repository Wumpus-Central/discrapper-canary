n.d(t, { Z: () => a });
var r = n(833880),
    i = n(896416),
    o = n(15568);
function a(e, t) {
    if (e) {
        if ('string' == typeof e) return (0, o.Z)(e, t);
        var n,
            a = r((n = Object.prototype.toString.call(e))).call(n, 8, -1);
        if (('Object' === a && e.constructor && (a = e.constructor.name), 'Map' === a || 'Set' === a)) return i(e);
        if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return (0, o.Z)(e, t);
    }
}
