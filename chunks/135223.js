n.d(t, { Z: () => c }), n(388685), n(539854);
var r = n(341702),
    i = n(887490);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
let s = new Set(['line', 'blockQuote']),
    l = [];
function c(e, t, n) {
    if (i.bN.areStylesDisabled(e)) return [];
    let [a, c] = t;
    if (1 !== c.length || !i.aj.isInTypes(a, s)) return l;
    let { entries: u, serializedChildren: d } = i.q.markdown(a, n, !0),
        f = [];
    for (let t = 0; t < u.length; t++) {
        let n = u[t];
        if (n.attributes.length > 0 && n.text.length > 0) {
            let a = u[t - 1],
                s = u[t + 1],
                l = {
                    anchor: (0, r.t)(e, c, d, n.start),
                    focus: (0, r.t)(e, c, d, n.start + n.text.length)
                },
                _ = i.bN.nodes(e, {
                    at: l,
                    mode: 'lowest',
                    voids: !1
                }),
                p = {};
            for (let e of n.attributes)
                if (((p[e] = !0), 'syntaxBefore' === e && null != s)) for (let e of s.attributes) p['before_'.concat(e)] = !0;
                else if ('syntaxAfter' === e && null != a) for (let e of a.attributes) p['after_'.concat(e)] = !0;
            for (let [t, n] of _) {
                let t = {
                    anchor: i.bN.start(e, n),
                    focus: i.bN.end(e, n)
                };
                i.Jz.isBefore(t.anchor, l.anchor) && (t.anchor = l.anchor), i.Jz.isAfter(t.focus, l.focus) && (t.focus = l.focus), f.push(o({}, p, t));
            }
        }
    }
    return f;
}
