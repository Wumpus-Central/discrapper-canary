e = n.nmd(e);
var r = n(237050),
    i = t && !t.nodeType && t,
    a = i && e && !e.nodeType && e,
    s = a && a.exports === i ? r.Buffer : void 0,
    o = s ? s.allocUnsafe : void 0;

function l(e, t) {
    if (t) return e.slice();
    var n = e.length,
        r = o ? o(n) : new e.constructor(n);
    return e.copy(r), r;
}
e.exports = l;
