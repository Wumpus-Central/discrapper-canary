n.d(t, { Z: () => v }), n(653041), n(47120);
var i = n(200651),
    a = n(192379),
    r = n(442837),
    o = n(481060),
    _ = n(355863),
    c = n(237997),
    l = n(451478),
    d = n(145597),
    s = n(830917),
    u = n(312178),
    f = n(388627),
    p = n(892127),
    h = n(561064),
    m = n(982572);
function g(e) {
    return e.widget.id;
}
function b(e, t, n, a) {
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
    v = a.memo(function (e) {
        let { className: t } = e,
            n = (0, h.Z)(),
            p = (0, r.e7)([l.Z], () => l.Z.windowSize((0, s.ZY)(n))),
            m = (0, r.e7)([c.Z], () => c.Z.isPreviewingInGame()),
            v = (0, r.e7)(
                [_.Z],
                () => {
                    let e = _.Z.getLayout(d.qU);
                    if (null == e) return I;
                    let t = [];
                    for (let n of e.widgets) {
                        let e = _.Z.getWidget(n);
                        if (null == e) continue;
                        let i = u.p[e.type];
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
            items: v,
            renderItem: b,
            getItemKey: g,
            wrapChildren: C
        });
    });
