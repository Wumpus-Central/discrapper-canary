"use strict";
n.d(t, { Q: () => i });
var r = n(711371);
function i(e, t, n, i) {
    let s = 0;
    for (let a = 0; a < n.length; a++) {
        let o = n[a];
        if (null == o) continue;
        let l = s + o.length;
        if (i <= l) {
            let n = r.PW.child(t, a),
                o = r.VW.node(e, n)[0];
            if (r.l5.isText(o)) return { path: n, offset: Math.min(Math.max(i - s, 0), o.text.length) };
        }
        s = l;
    }
    let a = n.length - 1;
    return { path: r.PW.child(t, a), offset: n[a]?.length ?? 0 };
}
