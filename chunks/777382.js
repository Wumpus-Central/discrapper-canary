t.d(n, { Z: () => v }), t(653041), t(47120);
var i = t(200651),
    r = t(192379),
    a = t(442837),
    l = t(481060),
    o = t(355863),
    d = t(237997),
    u = t(451478),
    c = t(145597),
    s = t(830917),
    _ = t(312178),
    h = t(388627),
    C = t(892127),
    p = t(561064),
    f = t(291508);
function m(e) {
    return e.widget.id;
}
function E(e, n, t, r) {
    return t === l.pJH.YEETED
        ? null
        : (0, i.jsx)(
              C.Z,
              {
                  ...n,
                  transitionState: t,
                  cleanUp: r,
                  dragContainerClassName: f.dragContainer,
                  className: f.widget
              },
              e
          );
}
let g = [],
    v = r.memo(function (e) {
        let { className: n } = e,
            t = (0, p.Z)(),
            C = (0, a.e7)([u.Z], () => u.Z.windowSize((0, s.ZY)(t))),
            f = (0, a.e7)([d.Z], () => d.Z.isPreviewingInGame()),
            v = (0, a.e7)(
                [o.Z],
                () => {
                    let e = o.Z.getLayout(c.qU);
                    if (null == e) return g;
                    let n = [];
                    for (let t of e.widgets) {
                        let e = o.Z.getWidget(t);
                        if (null == e) continue;
                        let i = _.p[e.type];
                        null != i &&
                            n.push({
                                widget: e,
                                renderWidget: (n) =>
                                    i({
                                        ...n,
                                        id: e.id,
                                        pinned: e.pinned,
                                        anchor: e.anchor,
                                        isPreviewingInGame: f
                                    })
                            });
                    }
                    return n;
                },
                [f],
                h.HP
            ),
            I = r.useCallback(
                (e) =>
                    (0, i.jsx)('div', {
                        className: n,
                        style: C,
                        children: e
                    }),
                [n, C]
            );
        return (0, i.jsx)(l.W3x, {
            items: v,
            renderItem: E,
            getItemKey: m,
            wrapChildren: I
        });
    });
