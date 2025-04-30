n.d(t, { t: () => i });
var r = n(887490);
function i(e, t, n, i) {
    var a, o;
    let s = 0;
    for (let a = 0; a < n.length; a++) {
        let o = n[a];
        if (null == o) continue;
        let l = s + o.length;
        if (i <= l) {
            let n = r.C0.child(t, a),
                o = r.bN.node(e, n)[0];
            if (r.LC.isText(o))
                return {
                    path: n,
                    offset: Math.min(Math.max(i - s, 0), o.text.length)
                };
        }
        s = l;
    }
    let l = n.length - 1;
    return {
        path: r.C0.child(t, l),
        offset: null != (o = null == (a = n[l]) ? void 0 : a.length) ? o : 0
    };
}
