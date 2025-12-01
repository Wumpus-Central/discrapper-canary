n.d(t, { Z: () => E }), n(539854), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(442837),
    a = n(481060),
    o = n(355863),
    s = n(451478),
    u = n(830917),
    c = n(388627),
    d = n(892127),
    h = n(444982),
    p = n(561064),
    f = n(757744);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
    var l, o;
    return n === a.pJH.YEETED
        ? null
        : (0, i.jsx)(
              d.Z,
              ((l = m({}, t)),
              (o = o =
                  {
                      transitionState: n,
                      cleanUp: r,
                  }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                  : (function (e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, i);
                        }
                        return n;
                    })(Object(o)).forEach(function (e) {
                        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                    }),
              l),
              e,
          );
}
let O = [],
    E = r.memo(function (e) {
        let { className: t } = e,
            n = (0, p.Z)(),
            d = (0, l.e7)([s.Z], () => s.Z.windowSize((0, u.ZY)(n))),
            E = (0, l.e7)(
                [o.Z],
                () => {
                    let e = o.Z.getLayout(f.$S);
                    if (null == e) return O;
                    let t = [];
                    for (let n of e.widgets) {
                        let e = o.Z.getWidget(n);
                        if (null == e) continue;
                        let i = h.Z[e.type];
                        null != i && (null == i.predicate || i.predicate()) && t.push(m({ widget: e }, i));
                    }
                    return t;
                },
                [],
                c.HP,
            ),
            v = r.useCallback(
                (e) =>
                    (0, i.jsx)("div", {
                        className: t,
                        style: d,
                        children: e,
                    }),
                [t, d],
            );
        return (0, i.jsx)(a.W3x, {
            items: E,
            renderItem: y,
            getItemKey: g,
            wrapChildren: v,
        });
    });
