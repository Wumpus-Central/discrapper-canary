n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(355863),
    c = n(237997),
    s = n(451478),
    u = n(145597),
    d = n(830917),
    f = n(312178),
    _ = n(388627),
    h = n(892127),
    p = n(561064),
    v = n(982572);
function m(e) {
    return e.widget.id;
}
function g(e, t, n, r) {
    return n === o.TransitionStates.YEETED
        ? null
        : (0, i.jsx)(
              h.Z,
              {
                  ...t,
                  transitionState: n,
                  cleanUp: r,
                  dragContainerClassName: v.dragContainer,
                  className: v.widget
              },
              e
          );
}
let I = [];
t.Z = r.memo(function (e) {
    let { className: t } = e,
        n = (0, p.Z)(),
        h = (0, l.e7)([s.Z], () => s.Z.windowSize((0, d.ZY)(n))),
        v = (0, l.e7)([c.Z], () => c.Z.isPreviewingInGame()),
        b = (0, l.e7)(
            [a.Z],
            () => {
                let e = a.Z.getLayout(u.qU);
                if (null == e) return I;
                let t = [];
                for (let n of e.widgets) {
                    let e = a.Z.getWidget(n);
                    if (null == e) continue;
                    let i = f.p[e.type];
                    null != i &&
                        t.push({
                            widget: e,
                            renderWidget: (t) =>
                                i({
                                    ...t,
                                    id: e.id,
                                    pinned: e.pinned,
                                    anchor: e.anchor,
                                    isPreviewingInGame: v
                                })
                        });
                }
                return t;
            },
            [v],
            _.HP
        ),
        E = r.useCallback(
            (e) =>
                (0, i.jsx)('div', {
                    className: t,
                    style: h,
                    children: e
                }),
            [t, h]
        );
    return (0, i.jsx)(o.TransitionGroup, {
        items: b,
        renderItem: g,
        getItemKey: m,
        wrapChildren: E
    });
});
