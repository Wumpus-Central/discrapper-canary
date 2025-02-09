n.d(t, { Z: () => v }), n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    l = n(481060),
    o = n(355863),
    u = n(237997),
    c = n(451478),
    d = n(145597),
    s = n(830917),
    _ = n(312178),
    h = n(388627),
    C = n(892127),
    f = n(561064),
    p = n(988612);
function m(e) {
    return e.widget.id;
}
function E(e, t, n, r) {
    return n === l.pJH.YEETED
        ? null
        : (0, i.jsx)(
              C.Z,
              {
                  ...t,
                  transitionState: n,
                  cleanUp: r,
                  dragContainerClassName: p.dragContainer,
                  className: p.widget
              },
              e
          );
}
let g = [],
    v = r.memo(function (e) {
        let { className: t } = e,
            n = (0, f.Z)(),
            C = (0, a.e7)([c.Z], () => c.Z.windowSize((0, s.ZY)(n))),
            p = (0, a.e7)([u.Z], () => u.Z.isPreviewingInGame()),
            v = (0, a.e7)(
                [o.Z],
                () => {
                    let e = o.Z.getLayout(d.qU);
                    if (null == e) return g;
                    let t = [];
                    for (let n of e.widgets) {
                        let e = o.Z.getWidget(n);
                        if (null == e) continue;
                        let i = _.p[e.type];
                        null != i &&
                            t.push({
                                widget: e,
                                renderWidget: (t) =>
                                    i({
                                        ...t,
                                        id: e.id,
                                        pinned: e.pinned,
                                        anchor: e.anchor,
                                        isPreviewingInGame: p
                                    })
                            });
                    }
                    return t;
                },
                [p],
                h.HP
            ),
            I = r.useCallback(
                (e) =>
                    (0, i.jsx)('div', {
                        className: t,
                        style: C,
                        children: e
                    }),
                [t, C]
            );
        return (0, i.jsx)(l.W3x, {
            items: v,
            renderItem: E,
            getItemKey: m,
            wrapChildren: I
        });
    });
