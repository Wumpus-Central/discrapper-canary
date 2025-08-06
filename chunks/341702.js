n.d(t, { t: () => i });
var r = n(887490);
function i(e, t, n, i) {
    var o, a;
    let s = 0;
    for (let o = 0; o < n.length; o++) {
        let a = n[o];
        if (null == a) continue;
        let l = s + a.length;
        if (i <= l) {
            let n = r.C0.child(t, o),
                a = r.bN.node(e, n)[0];
            if (r.LC.isText(a))
                return {
                    path: n,
                    offset: Math.min(Math.max(i - s, 0), a.text.length)
                };
        }
        s = l;
    }
    let l = n.length - 1;
    return {
        path: r.C0.child(t, l),
        offset: null != (a = null == (o = n[l]) ? void 0 : o.length) ? a : 0
    };
}
