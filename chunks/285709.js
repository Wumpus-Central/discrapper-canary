e = n.nmd(e);
var r = n(788255),
    i = t && !t.nodeType && t,
    a = i && e && !e.nodeType && e,
    o = a && a.exports === i && r.process,
    s = (function () {
        try {
            var e = a && a.require && a.require('util').types;
            if (e) return e;
            return o && o.binding && o.binding('util');
        } catch (e) {}
    })();
e.exports = s;
