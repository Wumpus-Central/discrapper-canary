r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(47120);
var a = r(653041);
var o = r(341702),
    s = r(887490);
let l = new Set(['line', 'blockQuote']),
    u = [];
function c(e, n, r) {
    if (s.bN.areStylesDisabled(e)) return [];
    let [i, a] = n;
    if (1 !== a.length || !s.aj.isInTypes(i, l)) return u;
    let { entries: c, serializedChildren: d } = s.q.markdown(i, r, !0),
        f = [];
    for (let n = 0; n < c.length; n++) {
        let r = c[n];
        if (r.attributes.length > 0 && r.text.length > 0) {
            let i = c[n - 1],
                l = c[n + 1],
                u = (0, o.t)(e, a, d, r.start),
                p = {
                    anchor: u,
                    focus: (0, o.t)(e, a, d, r.start + r.text.length)
                },
                h = s.bN.nodes(e, {
                    at: p,
                    mode: 'lowest',
                    voids: !1
                }),
                _ = {};
            for (let e of r.attributes)
                if (((_[e] = !0), 'syntaxBefore' === e && null != l)) for (let e of l.attributes) _['before_'.concat(e)] = !0;
                else if ('syntaxAfter' === e && null != i) for (let e of i.attributes) _['after_'.concat(e)] = !0;
            for (let [n, r] of h) {
                let n = {
                    anchor: s.bN.start(e, r),
                    focus: s.bN.end(e, r)
                };
                s.Jz.isBefore(n.anchor, p.anchor) && (n.anchor = p.anchor),
                    s.Jz.isAfter(n.focus, p.focus) && (n.focus = p.focus),
                    f.push({
                        ..._,
                        ...n
                    });
            }
        }
    }
    return f;
}
