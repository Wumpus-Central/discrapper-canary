n.d(t, { Z: () => b }), n(653041), n(47120);
var i = n(200651),
    a = n(192379),
    r = n(442837),
    o = n(481060),
    l = n(355863),
    c = n(237997),
    d = n(451478),
    _ = n(145597),
    u = n(830917),
    s = n(312178),
    f = n(388627),
    p = n(892127),
    h = n(561064),
    m = n(982572);
function g(e) {
    return e.widget.id;
}
function v(e, t, n, a) {
    return n === o.pJH.YEETED
        ? null
        : (0, i.jsx)(
              p.Z,
              {
                  ...t,
                  transitionState: n,
                  cleanUp: a,
                  dragContainerClassName: m.dragContainer,
                  className: m.widget
              },
              e
          );
}
let I = [],
    b = a.memo(function (e) {
        let { className: t } = e,
            n = (0, h.Z)(),
            p = (0, r.e7)([d.Z], () => d.Z.windowSize((0, u.ZY)(n))),
            m = (0, r.e7)([c.Z], () => c.Z.isPreviewingInGame()),
            b = (0, r.e7)(
                [l.Z],
                () => {
                    let e = l.Z.getLayout(_.qU);
                    if (null == e) return I;
                    let t = [];
                    for (let n of e.widgets) {
                        let e = l.Z.getWidget(n);
                        if (null == e) continue;
                        let i = s.p[e.type];
                        null != i &&
                            t.push({
                                widget: e,
                                renderWidget: (t) =>
                                    i({
                                        ...t,
                                        id: e.id,
                                        pinned: e.pinned,
                                        anchor: e.anchor,
                                        isPreviewingInGame: m
                                    })
                            });
                    }
                    return t;
                },
                [m],
                f.HP
            ),
            C = a.useCallback(
                (e) =>
                    (0, i.jsx)('div', {
                        className: t,
                        style: p,
                        children: e
                    }),
                [t, p]
            );
        return (0, i.jsx)(o.W3x, {
            items: b,
            renderItem: v,
            getItemKey: g,
            wrapChildren: C
        });
    });
