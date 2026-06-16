e = n.nmd(e);
var i = n(237050),
    r = t && !t.nodeType && t,
    s = r && e && !e.nodeType && e,
    a = s && s.exports === r ? i.Buffer : void 0,
    o = a ? a.allocUnsafe : void 0;
e.exports = function (e, t) {
    if (t) return e.slice();
    var n = e.length,
        i = o ? o(n) : new e.constructor(n);
    return e.copy(i), i;
};
