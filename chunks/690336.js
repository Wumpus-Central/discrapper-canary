n.d(t, { Z: () => v }), n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(442837),
    l = n(481060),
    a = n(355863),
    s = n(451478),
    c = n(830917),
    u = n(388627),
    d = n(892127),
    p = n(444982),
    h = n(561064),
    f = n(757744);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function g(e) {
    return e.widget.id;
}
function y(e, t, n, r) {
    var o, a;
    return n === l.pJH.YEETED
        ? null
        : (0, i.jsx)(
              d.Z,
              ((o = m({}, t)),
              (a = a =
                  {
                      transitionState: n,
                      cleanUp: r
                  }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a))
                  : (function (e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, i);
                        }
                        return n;
                    })(Object(a)).forEach(function (e) {
                        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e));
                    }),
              o),
              e
          );
}
let O = [],
    v = r.memo(function (e) {
        let { className: t } = e,
            n = (0, h.Z)(),
            d = (0, o.e7)([s.Z], () => s.Z.windowSize((0, c.ZY)(n))),
            v = (0, o.e7)(
                [a.Z],
                () => {
                    let e = a.Z.getLayout(f.$);
                    if (null == e) return O;
                    let t = [];
                    for (let n of e.widgets) {
                        let e = a.Z.getWidget(n);
                        if (null == e) continue;
                        let i = p.Z[e.type];
                        null != i && (null == i.predicate || i.predicate()) && t.push(m({ widget: e }, i));
                    }
                    return t;
                },
                [],
                u.HP
            ),
            b = r.useCallback(
                (e) =>
                    (0, i.jsx)('div', {
                        className: t,
                        style: d,
                        children: e
                    }),
                [t, d]
            );
        return (0, i.jsx)(l.W3x, {
            items: v,
            renderItem: y,
            getItemKey: g,
            wrapChildren: b
        });
    });
