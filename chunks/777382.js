n.d(t, { Z: () => E }), n(653041), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(442837),
    o = n(481060),
    _ = n(355863),
    c = n(237997),
    l = n(451478),
    d = n(145597),
    s = n(830917),
    u = n(312178),
    h = n(388627),
    f = n(892127),
    p = n(561064),
    m = n(291508);
function C(e) {
    return e.widget.id;
}
function g(e, t, n, a) {
    return n === o.pJH.YEETED
        ? null
        : (0, r.jsx)(
              f.Z,
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
let b = [],
    E = a.memo(function (e) {
        let { className: t } = e,
            n = (0, p.Z)(),
            f = (0, i.e7)([l.Z], () => l.Z.windowSize((0, s.ZY)(n))),
            m = (0, i.e7)([c.Z], () => c.Z.isPreviewingInGame()),
            E = (0, i.e7)(
                [_.Z],
                () => {
                    let e = _.Z.getLayout(d.qU);
                    if (null == e) return b;
                    let t = [];
                    for (let n of e.widgets) {
                        let e = _.Z.getWidget(n);
                        if (null == e) continue;
                        let r = u.p[e.type];
                        null != r &&
                            t.push({
                                widget: e,
                                renderWidget: (t) =>
                                    r({
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
                h.HP
            ),
            I = a.useCallback(
                (e) =>
                    (0, r.jsx)('div', {
                        className: t,
                        style: f,
                        children: e
                    }),
                [t, f]
            );
        return (0, r.jsx)(o.W3x, {
            items: E,
            renderItem: g,
            getItemKey: C,
            wrapChildren: I
        });
    });
