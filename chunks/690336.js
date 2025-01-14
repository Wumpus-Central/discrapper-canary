n(653041), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    o = n(481060),
    a = n(355863),
    s = n(451478),
    c = n(830917),
    u = n(388627),
    d = n(892127),
    h = n(84346),
    f = n(561064),
    p = n(501787);
function m(e) {
    return e.widget.id;
}
function v(e, t, n, l) {
    return n === o.TransitionStates.YEETED
        ? null
        : (0, i.jsx)(
              d.Z,
              {
                  ...t,
                  transitionState: n,
                  cleanUp: l
              },
              e
          );
}
let g = [];
t.Z = l.memo(function (e) {
    let { className: t } = e,
        n = (0, f.Z)(),
        d = (0, r.e7)([s.Z], () => s.Z.windowSize((0, c.ZY)(n))),
        x = (0, r.e7)(
            [a.Z],
            () => {
                let e = a.Z.getLayout(p.OVERLAY_V3_LAYOUT_ID);
                if (null == e) return g;
                let t = [];
                for (let n of e.widgets) {
                    let e = a.Z.getWidget(n);
                    if (null == e) continue;
                    let i = h.Z[e.type];
                    null != i &&
                        t.push({
                            widget: e,
                            ...i
                        });
                }
                return t;
            },
            [],
            u.HP
        ),
        C = l.useCallback(
            (e) =>
                (0, i.jsx)('div', {
                    className: t,
                    style: d,
                    children: e
                }),
            [t, d]
        );
    return (0, i.jsx)(o.TransitionGroup, {
        items: x,
        renderItem: v,
        getItemKey: m,
        wrapChildren: C
    });
});
