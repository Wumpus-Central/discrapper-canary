n.d(t, { A: () => p }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    l = n(518009),
    o = n(555528),
    d = n(351906),
    s = n(531685),
    c = n(365971),
    u = n(243612),
    _ = n(582240),
    A = n(295102),
    h = n(545807),
    f = n(644434);
function g(e) {
    return e.widget.id;
}
function m(e, t, n, i) {
    return n === l.wL.YEETED ? null : (0, r.jsx)(_.A, { ...t, transitionState: n, cleanUp: i }, e);
}
let b = [],
    p = i.memo(function (e) {
        let { className: t } = e,
            n = (0, h.A)(),
            _ = (0, a.bG)([s.A], () => s.A.windowSize((0, c.Q2)(n))),
            p = (0, a.bG)(
                [o.A, d.A],
                () => {
                    let e = o.A.getLayout(f.G);
                    if (null == e) return b;
                    let t = [];
                    for (let n of e.widgets) {
                        let e = o.A.getWidget(n);
                        if (null == e) continue;
                        let r = A.A[e.type];
                        null != r &&
                            (null == r.predicate || r.predicate()) &&
                            (d.A.isOverlayWidgetDisabled(e.type) || t.push({ widget: e, ...r }));
                    }
                    return t;
                },
                [],
                u.VC,
            ),
            v = i.useCallback((e) => (0, r.jsx)("div", { className: t, style: _, children: e }), [t, _]);
        return (0, r.jsx)(l.F, { items: p, renderItem: m, getItemKey: g, wrapChildren: v });
    });
