e = n.nmd(e);
var r = n(188716),
    i = t && !t.nodeType && t,
    a = i && e && !e.nodeType && e,
    s = a && a.exports === i && r.process,
    o = (function () {
        try {
            var e = a && a.require && a.require("util").types;
            if (e) return e;
            return s && s.binding && s.binding("util");
        } catch (e) {}
    })();
e.exports = o;
