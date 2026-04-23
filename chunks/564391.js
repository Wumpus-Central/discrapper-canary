"use strict";
function a(e, t) {
    var r = null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (null != r) {
        var a,
            n,
            o,
            s,
            i = [],
            l = !0,
            c = !1;
        try {
            if (((o = (r = r.call(e)).next), 0 === t)) {
                if (Object(r) !== r) return;
                l = !1;
            } else for (; !(l = (a = o.call(r)).done) && (i.push(a.value), i.length !== t); l = !0);
        } catch (e) {
            (c = !0), (n = e);
        } finally {
            try {
                if (!l && null != r.return && ((s = r.return()), Object(s) !== s)) return;
            } finally {
                if (c) throw n;
            }
        }
        return i;
    }
}
r.d(t, { A: () => a });
