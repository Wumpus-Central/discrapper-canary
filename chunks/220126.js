t = a.nmd(t);
var r = a(940151),
    n = e && !e.nodeType && e,
    o = n && t && !t.nodeType && t,
    _ = o && o.exports === n && r.process,
    i = (function () {
        try {
            var t = o && o.require && o.require('util').types;
            if (t) return t;
            return _ && _.binding && _.binding('util');
        } catch (t) {}
    })();
t.exports = i;
