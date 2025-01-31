n.d(t, { t: () => r });
var i = n(887490);
function r(e, t, n, r) {
    var a, s;
    let o = 0;
    for (let a = 0; a < n.length; a++) {
        let s = n[a];
        if (null == s) continue;
        let l = o + s.length;
        if (r <= l) {
            let n = i.C0.child(t, a),
                s = i.bN.node(e, n)[0];
            if (i.LC.isText(s))
                return {
                    path: n,
                    offset: Math.min(Math.max(r - o, 0), s.text.length)
                };
        }
        o = l;
    }
    let l = n.length - 1;
    return {
        path: i.C0.child(t, l),
        offset: null !== (s = null === (a = n[l]) || void 0 === a ? void 0 : a.length) && void 0 !== s ? s : 0
    };
}
