r.d(n, {
    t: function () {
        return a;
    }
});
var i = r(887490);
function a(e, n, r, a) {
    var o, s;
    let l = 0;
    for (let o = 0; o < r.length; o++) {
        let s = r[o];
        if (null == s) continue;
        let u = l + s.length;
        if (a <= u) {
            let r = i.C0.child(n, o),
                s = i.bN.node(e, r)[0];
            if (i.LC.isText(s))
                return {
                    path: r,
                    offset: Math.min(Math.max(a - l, 0), s.text.length)
                };
        }
        l = u;
    }
    let u = r.length - 1;
    return {
        path: i.C0.child(n, u),
        offset: null !== (s = null === (o = r[u]) || void 0 === o ? void 0 : o.length) && void 0 !== s ? s : 0
    };
}
