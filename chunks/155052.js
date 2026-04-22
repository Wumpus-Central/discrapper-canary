"use strict";
n.d(t, { A: () => p }), n(321073);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(518009),
    s = n(555528),
    o = n(351906),
    d = n(531685),
    u = n(365971),
    c = n(243612),
    A = n(582240),
    h = n(295102),
    g = n(545807),
    f = n(644434);
function m(e) {
    return e.widget.id;
}
function v(e, t, n, i) {
    return n === a.wL.YEETED ? null : (0, r.jsx)(A.A, { ...t, transitionState: n, cleanUp: i }, e);
}
let y = [],
    p = i.memo(function (e) {
        let { className: t } = e,
            n = (0, g.A)(),
            A = (0, l.bG)([d.A], () => d.A.windowSize((0, u.Q2)(n))),
            p = (0, l.bG)(
                [s.A, o.A],
                () => {
                    let e = s.A.getLayout(f.G);
                    if (null == e) return y;
                    let t = [];
                    for (let n of e.widgets) {
                        let e = s.A.getWidget(n);
                        if (null == e) continue;
                        let r = h.A[e.type];
                        null != r &&
                            (null == r.predicate || r.predicate()) &&
                            (o.A.isOverlayWidgetDisabled(e.type) || t.push({ widget: e, ...r }));
                    }
                    return t;
                },
                [],
                c.VC,
            ),
            _ = i.useCallback((e) => (0, r.jsx)("div", { className: t, style: A, children: e }), [t, A]);
        return (0, r.jsx)(a.F, { items: p, renderItem: v, getItemKey: m, wrapChildren: _ });
    });
