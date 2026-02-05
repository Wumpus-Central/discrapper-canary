"use strict";
n.d(t, { Q: () => i });
var r = n(711371);
function i(e, t, n, i) {
    let a = 0;
    for (let s = 0; s < n.length; s++) {
        let o = n[s];
        if (null == o) continue;
        let l = a + o.length;
        if (i <= l) {
            let n = r.PW.child(t, s),
                o = r.VW.node(e, n)[0];
            if (r.l5.isText(o)) return { path: n, offset: Math.min(Math.max(i - a, 0), o.text.length) };
        }
        a = l;
    }
    let s = n.length - 1;
    return { path: r.PW.child(t, s), offset: n[s]?.length ?? 0 };
}
