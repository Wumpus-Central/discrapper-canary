e = r.nmd(e);
var i = r(788255),
    a = n && !n.nodeType && n,
    o = a && e && !e.nodeType && e,
    s = o && o.exports === a && i.process,
    l = (function () {
        try {
            var e = o && o.require && o.require('util').types;
            if (e) return e;
            return s && s.binding && s.binding('util');
        } catch (e) {}
    })();
e.exports = l;
