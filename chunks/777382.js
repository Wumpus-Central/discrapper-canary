n.d(t, { Z: () => E }), n(653041), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(481060),
    l = n(355863),
    c = n(237997),
    s = n(451478),
    u = n(145597),
    d = n(830917),
    _ = n(312178),
    f = n(388627),
    p = n(892127),
    h = n(561064),
    b = n(29281);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e) {
    return e.widget.id;
}
function O(e, t, n, i) {
    return n === o.pJH.YEETED
        ? null
        : (0, r.jsx)(
              p.Z,
              m(g({}, t), {
                  transitionState: n,
                  cleanUp: i,
                  dragContainerClassName: b.dragContainer,
                  className: b.widget
              }),
              e
          );
}
let y = [],
    E = i.memo(function (e) {
        let { className: t } = e,
            n = (0, h.Z)(),
            p = (0, a.e7)([s.Z], () => s.Z.windowSize((0, d.ZY)(n))),
            b = (0, a.e7)([c.Z], () => c.Z.isPreviewingInGame()),
            E = (0, a.e7)(
                [l.Z],
                () => {
                    let e = l.Z.getLayout(u.qU);
                    if (null == e) return y;
                    let t = [];
                    for (let n of e.widgets) {
                        let e = l.Z.getWidget(n);
                        if (null == e) continue;
                        let r = _.p[e.type];
                        null != r &&
                            t.push({
                                widget: e,
                                renderWidget: (t) =>
                                    r(
                                        m(g({}, t), {
                                            id: e.id,
                                            pinned: e.pinned,
                                            anchor: e.anchor,
                                            isPreviewingInGame: b
                                        })
                                    )
                            });
                    }
                    return t;
                },
                [b],
                f.HP
            ),
            v = i.useCallback(
                (e) =>
                    (0, r.jsx)('div', {
                        className: t,
                        style: p,
                        children: e
                    }),
                [t, p]
            );
        return (0, r.jsx)(o.W3x, {
            items: E,
            renderItem: O,
            getItemKey: C,
            wrapChildren: v
        });
    });
