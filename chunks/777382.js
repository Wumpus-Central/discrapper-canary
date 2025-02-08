n.d(t, { Z: () => I }), n(653041), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(481060),
    l = n(355863),
    c = n(237997),
    d = n(451478),
    _ = n(145597),
    u = n(830917),
    s = n(312178),
    h = n(388627),
    f = n(892127),
    p = n(561064),
    C = n(982572);
function m(e) {
    return e.widget.id;
}
function g(e, t, n, i) {
    return n === o.pJH.YEETED
        ? null
        : (0, r.jsx)(
              f.Z,
              {
                  ...t,
                  transitionState: n,
                  cleanUp: i,
                  dragContainerClassName: C.dragContainer,
                  className: C.widget
              },
              e
          );
}
let E = [],
    I = i.memo(function (e) {
        let { className: t } = e,
            n = (0, p.Z)(),
            f = (0, a.e7)([d.Z], () => d.Z.windowSize((0, u.ZY)(n))),
            C = (0, a.e7)([c.Z], () => c.Z.isPreviewingInGame()),
            I = (0, a.e7)(
                [l.Z],
                () => {
                    let e = l.Z.getLayout(_.qU);
                    if (null == e) return E;
                    let t = [];
                    for (let n of e.widgets) {
                        let e = l.Z.getWidget(n);
                        if (null == e) continue;
                        let r = s.p[e.type];
                        null != r &&
                            t.push({
                                widget: e,
                                renderWidget: (t) =>
                                    r({
                                        ...t,
                                        id: e.id,
                                        pinned: e.pinned,
                                        anchor: e.anchor,
                                        isPreviewingInGame: C
                                    })
                            });
                    }
                    return t;
                },
                [C],
                h.HP
            ),
            v = i.useCallback(
                (e) =>
                    (0, r.jsx)('div', {
                        className: t,
                        style: f,
                        children: e
                    }),
                [t, f]
            );
        return (0, r.jsx)(o.W3x, {
            items: I,
            renderItem: g,
            getItemKey: m,
            wrapChildren: v
        });
    });
