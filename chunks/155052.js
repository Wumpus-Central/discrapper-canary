n.d(t, { A: () => _ }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(397927),
    r = n(555528),
    o = n(531685),
    d = n(365971),
    u = n(243612),
    c = n(582240),
    h = n(295102),
    A = n(545807),
    m = n(644434);
function g(e) {
    return e.widget.id;
}
function p(e, t, n, l) {
    return n === s.wLy.YEETED ? null : (0, i.jsx)(c.A, { ...t, transitionState: n, cleanUp: l }, e);
}
let f = [],
    _ = l.memo(function (e) {
        let { className: t } = e,
            n = (0, A.A)(),
            c = (0, a.bG)([o.A], () => o.A.windowSize((0, d.Q2)(n))),
            _ = (0, a.bG)(
                [r.A],
                () => {
                    let e = r.A.getLayout(m.G);
                    if (null == e) return f;
                    let t = [];
                    for (let n of e.widgets) {
                        let e = r.A.getWidget(n);
                        if (null == e) continue;
                        let i = h.A[e.type];
                        null != i && (null == i.predicate || i.predicate()) && t.push({ widget: e, ...i });
                    }
                    return t;
                },
                [],
                u.VC,
            ),
            E = l.useCallback((e) => (0, i.jsx)("div", { className: t, style: c, children: e }), [t, c]);
        return (0, i.jsx)(s.Fai, { items: _, renderItem: p, getItemKey: g, wrapChildren: E });
    });
