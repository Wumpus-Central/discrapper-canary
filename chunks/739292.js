r.d(n, {
    HI: function () {
        return s.HI;
    },
    Ii: function () {
        return s.Ii;
    },
    Jo: function () {
        return s.Jo;
    },
    O4: function () {
        return s.O4;
    },
    Qc: function () {
        return u;
    },
    VG: function () {
        return s.VG;
    },
    Wh: function () {
        return s.Wh;
    },
    Wi: function () {
        return s.Wi;
    },
    pe: function () {
        return s.pe;
    },
    rp: function () {
        return s.rp;
    },
    uf: function () {
        return s.uf;
    },
    wD: function () {
        return s.wD;
    },
    yx: function () {
        return s.yx;
    }
});
var i = r(259630),
    a = r(939990),
    o = r(262291),
    s = r(73745);
function l(e) {
    e.forEach(function (e) {
        if ((delete e.location, (0, s.Wi)(e) || (0, s.Jo)(e))) for (var n in e.options) delete e.options[n].location, l(e.options[n].value);
        else (0, s.uf)(e) && (0, s.Wh)(e.style) ? delete e.style.location : ((0, s.rp)(e) || (0, s.pe)(e)) && (0, s.Ii)(e.style) ? delete e.style.location : (0, s.HI)(e) && l(e.children);
    });
}
function u(e, n) {
    void 0 === n && (n = {}),
        (n = (0, i.pi)(
            {
                shouldParseSkeletons: !0,
                requiresOtherClause: !0
            },
            n
        ));
    var r = new o._(e, n).parse();
    if (r.err) {
        var s = SyntaxError(a.o[r.err.kind]);
        throw ((s.location = r.err.location), (s.originalMessage = r.err.message), s);
    }
    return !(null == n ? void 0 : n.captureLocation) && l(r.val), r.val;
}
