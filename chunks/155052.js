n.d(t, { A: () => v }), n(321073);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    o = n(555528),
    d = n(351906),
    s = n(531685),
    u = n(365971),
    c = n(243612),
    A = n(582240),
    h = n(295102),
    f = n(545807),
    g = n(644434);
function m(e) {
    return e.widget.id;
}
function y(e, t, n, i) {
    return n === a.wLy.YEETED ? null : (0, r.jsx)(A.A, { ...t, transitionState: n, cleanUp: i }, e);
}
let p = [],
    v = i.memo(function (e) {
        let { className: t } = e,
            n = (0, f.A)(),
            A = (0, l.bG)([s.A], () => s.A.windowSize((0, u.Q2)(n))),
            v = (0, l.bG)(
                [o.A, d.A],
                () => {
                    let e = o.A.getLayout(g.G);
                    if (null == e) return p;
                    let t = [];
                    for (let n of e.widgets) {
                        let e = o.A.getWidget(n);
                        if (null == e) continue;
                        let r = h.A[e.type];
                        null != r &&
                            (null == r.predicate || r.predicate()) &&
                            (d.A.isOverlayWidgetDisabled(e.type) || t.push({ widget: e, ...r }));
                    }
                    return t;
                },
                [],
                c.VC,
            ),
            _ = i.useCallback((e) => (0, r.jsx)("div", { className: t, style: A, children: e }), [t, A]);
        return (0, r.jsx)(a.Fai, { items: v, renderItem: y, getItemKey: m, wrapChildren: _ });
    });
