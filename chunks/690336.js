n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(442837),
    l = n(481060),
    a = n(355863),
    s = n(451478),
    c = n(830917),
    d = n(388627),
    u = n(892127),
    h = n(84346),
    m = n(561064),
    p = n(501787);
function x(e) {
    return e.widget.id;
}
function f(e, t, n, r) {
    return n === l.TransitionStates.YEETED
        ? null
        : (0, i.jsx)(
              u.Z,
              {
                  ...t,
                  transitionState: n,
                  cleanUp: r
              },
              e
          );
}
let v = [];
t.Z = r.memo(function (e) {
    let { className: t } = e,
        n = (0, m.Z)(),
        u = (0, o.e7)([s.Z], () => s.Z.windowSize((0, c.ZY)(n))),
        g = (0, o.e7)(
            [a.Z],
            () => {
                let e = a.Z.getLayout(p.OVERLAY_V3_LAYOUT_ID);
                if (null == e) return v;
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
            d.HP
        ),
        C = r.useCallback(
            (e) =>
                (0, i.jsx)('div', {
                    className: t,
                    style: u,
                    children: e
                }),
            [t, u]
        );
    return (0, i.jsx)(l.TransitionGroup, {
        items: g,
        renderItem: f,
        getItemKey: x,
        wrapChildren: C
    });
});
