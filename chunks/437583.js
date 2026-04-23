"use strict";
n.d(t, { A: () => i });
var r = n(143733),
    a = n(560041),
    o = n(552292);
function i(e, t) {
    var n = null == e ? null : (void 0 !== r && a(e)) || e["@@iterator"];
    if (null != n) {
        var i,
            s,
            l,
            c,
            u = [],
            d = !0,
            p = !1;
        try {
            if (((l = (n = n.call(e)).next), 0 === t)) {
                if (Object(n) !== n) return;
                d = !1;
            } else for (; !(d = (i = l.call(n)).done) && (o(u).call(u, i.value), u.length !== t); d = !0);
        } catch (e) {
            (p = !0), (s = e);
        } finally {
            try {
                if (!d && null != n.return && ((c = n.return()), Object(c) !== c)) return;
            } finally {
                if (p) throw s;
            }
        }
        return u;
    }
}
