t.d(n, { Z: () => R }), t(653041), t(47120);
var r = t(200651),
    i = t(192379),
    a = t(442837),
    o = t(481060),
    l = t(355863),
    c = t(237997),
    d = t(451478),
    s = t(145597),
    u = t(830917),
    _ = t(312178),
    h = t(388627),
    C = t(892127),
    m = t(561064),
    p = t(291508);
function E(e) {
    return e.widget.id;
}
function g(e, n, t, i) {
    return t === o.pJH.YEETED
        ? null
        : (0, r.jsx)(
              C.Z,
              {
                  ...n,
                  transitionState: t,
                  cleanUp: i,
                  dragContainerClassName: p.dragContainer,
                  className: p.widget
              },
              e
          );
}
let f = [],
    R = i.memo(function (e) {
        let { className: n } = e,
            t = (0, m.Z)(),
            C = (0, a.e7)([d.Z], () => d.Z.windowSize((0, u.ZY)(t))),
            p = (0, a.e7)([c.Z], () => c.Z.isPreviewingInGame()),
            R = (0, a.e7)(
                [l.Z],
                () => {
                    let e = l.Z.getLayout(s.qU);
                    if (null == e) return f;
                    let n = [];
                    for (let t of e.widgets) {
                        let e = l.Z.getWidget(t);
                        if (null == e) continue;
                        let r = _.p[e.type];
                        null != r &&
                            n.push({
                                widget: e,
                                renderWidget: (n) =>
                                    r({
                                        ...n,
                                        id: e.id,
                                        pinned: e.pinned,
                                        anchor: e.anchor,
                                        isPreviewingInGame: p
                                    })
                            });
                    }
                    return n;
                },
                [p],
                h.HP
            ),
            b = i.useCallback(
                (e) =>
                    (0, r.jsx)('div', {
                        className: n,
                        style: C,
                        children: e
                    }),
                [n, C]
            );
        return (0, r.jsx)(o.W3x, {
            items: R,
            renderItem: g,
            getItemKey: E,
            wrapChildren: b
        });
    });
