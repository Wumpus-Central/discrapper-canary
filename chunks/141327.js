r.d(t, { Z: () => l });
var n = r(816569),
    o = 'object' == typeof exports && exports && !exports.nodeType && exports,
    a = o && 'object' == typeof module && module && !module.nodeType && module,
    i = a && a.exports === o && n.Z.process;
let l = (function () {
    try {
        var e = a && a.require && a.require('util').types;
        if (e) return e;
        return i && i.binding && i.binding('util');
    } catch (e) {}
})();
