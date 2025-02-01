n.d(t, { Z: () => o });
var i = n(816569),
    r = 'object' == typeof exports && exports && !exports.nodeType && exports,
    a = r && 'object' == typeof module && module && !module.nodeType && module,
    s = a && a.exports === r && i.Z.process;
let o = (function () {
    try {
        var e = a && a.require && a.require('util').types;
        if (e) return e;
        return s && s.binding && s.binding('util');
    } catch (e) {}
})();
