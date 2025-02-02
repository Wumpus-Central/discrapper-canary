n.d(t, { Z: () => v }), n(653041), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    o = n(481060),
    a = n(355863),
    s = n(451478),
    d = n(830917),
    c = n(388627),
    u = n(892127),
    h = n(84346),
    _ = n(561064),
    p = n(501787);
function g(e) {
    return e.widget.id;
}
function f(e, t, n, l) {
    return n === o.pJH.YEETED
        ? null
        : (0, i.jsx)(
              u.Z,
              {
                  ...t,
                  transitionState: n,
                  cleanUp: l
              },
              e
          );
}
let m = [],
    v = l.memo(function (e) {
        let { className: t } = e,
            n = (0, _.Z)(),
            u = (0, r.e7)([s.Z], () => s.Z.windowSize((0, d.ZY)(n))),
            v = (0, r.e7)(
                [a.Z],
                () => {
                    let e = a.Z.getLayout(p.OVERLAY_V3_LAYOUT_ID);
                    if (null == e) return m;
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
                c.HP
            ),
            x = l.useCallback(
                (e) =>
                    (0, i.jsx)('div', {
                        className: t,
                        style: u,
                        children: e
                    }),
                [t, u]
            );
        return (0, i.jsx)(o.W3x, {
            items: v,
            renderItem: f,
            getItemKey: g,
            wrapChildren: x
        });
    });
