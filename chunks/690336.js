n.d(t, { Z: () => x }), n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(442837),
    a = n(481060),
    l = n(355863),
    s = n(451478),
    c = n(830917),
    d = n(388627),
    u = n(892127),
    h = n(84346),
    _ = n(561064),
    m = n(501787);
function g(e) {
    return e.widget.id;
}
function p(e, t, n, r) {
    return n === a.pJH.YEETED
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
let f = [],
    x = r.memo(function (e) {
        let { className: t } = e,
            n = (0, _.Z)(),
            u = (0, o.e7)([s.Z], () => s.Z.windowSize((0, c.ZY)(n))),
            x = (0, o.e7)(
                [l.Z],
                () => {
                    let e = l.Z.getLayout(m.OVERLAY_V3_LAYOUT_ID);
                    if (null == e) return f;
                    let t = [];
                    for (let n of e.widgets) {
                        let e = l.Z.getWidget(n);
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
            v = r.useCallback(
                (e) =>
                    (0, i.jsx)('div', {
                        className: t,
                        style: u,
                        children: e
                    }),
                [t, u]
            );
        return (0, i.jsx)(a.W3x, {
            items: x,
            renderItem: p,
            getItemKey: g,
            wrapChildren: v
        });
    });
