n.d(t, { A: () => O }), n(321073), n(896048);
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(397927),
    o = n(555528),
    s = n(531685),
    c = n(365971),
    u = n(243612),
    d = n(582240),
    p = n(295102),
    h = n(545807),
    f = n(644434);
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
    return n === a.wLy.YEETED
        ? null
        : (0, i.jsx)(
              d.A,
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
let A = [],
    O = r.memo(function (e) {
        let { className: t } = e,
            n = (0, h.A)(),
            d = (0, l.bG)([s.A], () => s.A.windowSize((0, c.Q2)(n))),
            O = (0, l.bG)(
                [o.A],
                () => {
                    let e = o.A.getLayout(f.G);
                    if (null == e) return A;
                    let t = [];
                    for (let n of e.widgets) {
                        let e = o.A.getWidget(n);
                        if (null == e) continue;
                        let i = p.A[e.type];
                        null != i && (null == i.predicate || i.predicate()) && t.push(m({ widget: e }, i));
                    }
                    return t;
                },
                [],
                u.VC,
            ),
            E = r.useCallback(
                (e) =>
                    (0, i.jsx)("div", {
                        className: t,
                        style: d,
                        children: e,
                    }),
                [t, d],
            );
        return (0, i.jsx)(a.Fai, {
            items: O,
            renderItem: y,
            getItemKey: g,
            wrapChildren: E,
        });
    });
