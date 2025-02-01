e = n.nmd(e);
var i = n(788255),
    r = t && !t.nodeType && t,
    a = r && e && !e.nodeType && e,
    s = a && a.exports === r && i.process,
    o = (function () {
        try {
            var e = a && a.require && a.require('util').types;
            if (e) return e;
            return s && s.binding && s.binding('util');
        } catch (e) {}
    })();
e.exports = o;
