t(653041), t(47120);
var i = t(200651),
    r = t(192379),
    l = t(442837),
    o = t(481060),
    a = t(355863),
    c = t(237997),
    u = t(451478),
    d = t(145597),
    s = t(830917),
    f = t(312178),
    _ = t(388627),
    p = t(892127),
    h = t(561064),
    v = t(982572);
function m(e) {
    return e.widget.id;
}
function b(e, n, t, r) {
    return t === o.TransitionStates.YEETED
        ? null
        : (0, i.jsx)(
              p.Z,
              {
                  ...n,
                  transitionState: t,
                  cleanUp: r,
                  dragContainerClassName: v.dragContainer,
                  className: v.widget
              },
              e
          );
}
let g = [];
n.Z = r.memo(function (e) {
    let { className: n } = e,
        t = (0, h.Z)(),
        p = (0, l.e7)([u.Z], () => u.Z.windowSize((0, s.ZY)(t))),
        v = (0, l.e7)([c.Z], () => c.Z.isPreviewingInGame()),
        I = (0, l.e7)(
            [a.Z],
            () => {
                let e = a.Z.getLayout(d.qU);
                if (null == e) return g;
                let n = [];
                for (let t of e.widgets) {
                    let e = a.Z.getWidget(t);
                    if (null == e) continue;
                    let i = f.p[e.type];
                    null != i &&
                        n.push({
                            widget: e,
                            renderWidget: (n) =>
                                i({
                                    ...n,
                                    id: e.id,
                                    pinned: e.pinned,
                                    anchor: e.anchor,
                                    isPreviewingInGame: v
                                })
                        });
                }
                return n;
            },
            [v],
            _.HP
        ),
        Z = r.useCallback(
            (e) =>
                (0, i.jsx)('div', {
                    className: n,
                    style: p,
                    children: e
                }),
            [n, p]
        );
    return (0, i.jsx)(o.TransitionGroup, {
        items: I,
        renderItem: b,
        getItemKey: m,
        wrapChildren: Z
    });
});
