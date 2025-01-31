n.d(t, { Z: () => o }), n(47120), n(653041);
var i = n(341702),
    r = n(887490);
let a = new Set(['line', 'blockQuote']),
    s = [];
function o(e, t, n) {
    if (r.bN.areStylesDisabled(e)) return [];
    let [o, l] = t;
    if (1 !== l.length || !r.aj.isInTypes(o, a)) return s;
    let { entries: u, serializedChildren: c } = r.q.markdown(o, n, !0),
        d = [];
    for (let t = 0; t < u.length; t++) {
        let n = u[t];
        if (n.attributes.length > 0 && n.text.length > 0) {
            let a = u[t - 1],
                s = u[t + 1],
                o = {
                    anchor: (0, i.t)(e, l, c, n.start),
                    focus: (0, i.t)(e, l, c, n.start + n.text.length)
                },
                f = r.bN.nodes(e, {
                    at: o,
                    mode: 'lowest',
                    voids: !1
                }),
                _ = {};
            for (let e of n.attributes)
                if (((_[e] = !0), 'syntaxBefore' === e && null != s)) for (let e of s.attributes) _['before_'.concat(e)] = !0;
                else if ('syntaxAfter' === e && null != a) for (let e of a.attributes) _['after_'.concat(e)] = !0;
            for (let [t, n] of f) {
                let t = {
                    anchor: r.bN.start(e, n),
                    focus: r.bN.end(e, n)
                };
                r.Jz.isBefore(t.anchor, o.anchor) && (t.anchor = o.anchor),
                    r.Jz.isAfter(t.focus, o.focus) && (t.focus = o.focus),
                    d.push({
                        ..._,
                        ...t
                    });
            }
        }
    }
    return d;
}
