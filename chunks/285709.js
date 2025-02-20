e = n.nmd(e);
var r = n(788255),
    i = t && !t.nodeType && t,
    o = i && e && !e.nodeType && e,
    a = o && o.exports === i && r.process,
    s = (function () {
        try {
            var e = o && o.require && o.require('util').types;
            if (e) return e;
            return a && a.binding && a.binding('util');
        } catch (e) {}
    })();
e.exports = s;
