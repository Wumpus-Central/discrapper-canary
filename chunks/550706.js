"use strict";
var r = n(834647),
    a = n(280173),
    o = n(463843),
    i = o.get,
    s = o.has,
    l = o.set;
r(
    { target: "Map", proto: !0, real: !0, forced: !0 },
    {
        emplace: function (e, t) {
            var n,
                r,
                o = a(this);
            return s(o, e)
                ? ((n = i(o, e)), "update" in t && ((n = t.update(n, e, o)), l(o, e, n)), n)
                : ((r = t.insert(e, o)), l(o, e, r), r);
        },
    },
);
