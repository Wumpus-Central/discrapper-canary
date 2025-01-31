n.d(t, {
    HI: () => s.HI,
    Ii: () => s.Ii,
    Jo: () => s.Jo,
    O4: () => s.O4,
    Qc: () => l,
    VG: () => s.VG,
    Wh: () => s.Wh,
    Wi: () => s.Wi,
    pe: () => s.pe,
    rp: () => s.rp,
    uf: () => s.uf,
    wD: () => s.wD,
    yx: () => s.yx
});
var i = n(259630),
    r = n(939990),
    a = n(262291),
    s = n(73745);
function o(e) {
    e.forEach(function (e) {
        if ((delete e.location, (0, s.Wi)(e) || (0, s.Jo)(e))) for (var t in e.options) delete e.options[t].location, o(e.options[t].value);
        else (0, s.uf)(e) && (0, s.Wh)(e.style) ? delete e.style.location : ((0, s.rp)(e) || (0, s.pe)(e)) && (0, s.Ii)(e.style) ? delete e.style.location : (0, s.HI)(e) && o(e.children);
    });
}
function l(e, t) {
    void 0 === t && (t = {}),
        (t = (0, i.pi)(
            {
                shouldParseSkeletons: !0,
                requiresOtherClause: !0
            },
            t
        ));
    var n = new a._(e, t).parse();
    if (n.err) {
        var s = SyntaxError(r.o[n.err.kind]);
        throw ((s.location = n.err.location), (s.originalMessage = n.err.message), s);
    }
    return (null == t ? void 0 : t.captureLocation) || o(n.val), n.val;
}
