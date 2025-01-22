r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(833880),
    a = r(896416),
    o = r(15568);
function s(e, n) {
    if (e) {
        if ('string' == typeof e) return (0, o.Z)(e, n);
        var r,
            s = i((r = Object.prototype.toString.call(e))).call(r, 8, -1);
        if (('Object' === s && e.constructor && (s = e.constructor.name), 'Map' === s || 'Set' === s)) return a(e);
        if ('Arguments' === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return (0, o.Z)(e, n);
    }
}
