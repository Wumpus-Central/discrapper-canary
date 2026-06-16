"use strict";
n.d(t, { Q: () => i });
var l = n(820066);
function i(e, t, n, i) {
    let r = 0;
    for (let s = 0; s < n.length; s++) {
        let a = n[s];
        if (null == a) continue;
        let o = r + a.length;
        if (i <= o) {
            let n = l.PW.child(t, s),
                a = l.VW.node(e, n)[0];
            if (l.l5.isText(a)) return { path: n, offset: Math.min(Math.max(i - r, 0), a.text.length) };
        }
        r = o;
    }
    let s = n.length - 1;
    return { path: l.PW.child(t, s), offset: n[s]?.length ?? 0 };
}
