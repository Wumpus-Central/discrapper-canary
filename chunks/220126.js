t = a.nmd(t);
var r = a(940151),
    n = e && !e.nodeType && e,
    _ = n && t && !t.nodeType && t,
    o = _ && _.exports === n && r.process,
    i = (function () {
        try {
            var t = _ && _.require && _.require('util').types;
            if (t) return t;
            return o && o.binding && o.binding('util');
        } catch (t) {}
    })();
t.exports = i;
