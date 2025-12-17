n.d(t, { Z: () => O }), n(539854), n(388685);
var i = n(54381),
    r = n(473749),
    a = n(442837),
    l = n(481060),
    o = n(355863),
    s = n(451478),
    c = n(830917),
    u = n(388627),
    d = n(892127),
    f = n(444982),
    h = n(561064),
    p = n(757744);
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
function b(e, t, n, r) {
    var a, o;
    return n === l.pJH.YEETED
        ? null
        : (0, i.jsx)(
              d.Z,
              ((a = m({}, t)),
              (o = o =
                  {
                      transitionState: n,
                      cleanUp: r,
                  }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
                  : (function (e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, i);
                        }
                        return n;
                    })(Object(o)).forEach(function (e) {
                        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
                    }),
              a),
              e,
          );
}
let y = [],
    O = r.memo(function (e) {
        let { className: t } = e,
            n = (0, h.Z)(),
            d = (0, a.e7)([s.Z], () => s.Z.windowSize((0, c.ZY)(n))),
            O = (0, a.e7)(
                [o.Z],
                () => {
                    let e = o.Z.getLayout(p.$S);
                    if (null == e) return y;
                    let t = [];
                    for (let n of e.widgets) {
                        let e = o.Z.getWidget(n);
                        if (null == e) continue;
                        let i = f.Z[e.type];
                        null != i && (null == i.predicate || i.predicate()) && t.push(m({ widget: e }, i));
                    }
                    return t;
                },
                [],
                u.HP,
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
        return (0, i.jsx)(l.W3x, {
            items: O,
            renderItem: b,
            getItemKey: g,
            wrapChildren: v,
        });
    });
