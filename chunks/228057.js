e = r.nmd(e);
var i = r(573401),
    a = n && !n.nodeType && n,
    o = a && e && !e.nodeType && e,
    s = o && o.exports === a ? i.Buffer : void 0,
    l = s ? s.allocUnsafe : void 0;
function u(e, n) {
    if (n) return e.slice();
    var r = e.length,
        i = l ? l(r) : new e.constructor(r);
    return e.copy(i), i;
}
e.exports = u;
