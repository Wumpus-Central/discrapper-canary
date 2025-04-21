n.d(t, { Z: () => P }), n(388685);
var r = n(200651),
    s = n(192379),
    o = n(772848),
    a = n(442837),
    i = n(481060),
    c = n(359013),
    l = n(120421),
    u = n(284539),
    d = n(67411),
    f = n(26141),
    p = n(3072),
    m = n(81829),
    g = n(892689),
    b = n(477839),
    y = n(622802),
    h = n(388032),
    x = n(81050),
    v = n(255785),
    O = n(938998);
function j(e) {
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
let N = n(748549),
    _ = [b.FK.WEED];
function P(e) {
    var t, n;
    let { height: P, width: C, isPaused: Z } = e,
        [w, E] = (0, s.useState)({}),
        S = (0, s.useRef)(null),
        I = (0, a.e7)([l.Z], () => l.Z.hasPurchasedUpgrade(b.yN.WEEDS, b.uv.WEED_KILLER)),
        k = c.Mq[b.yN.WEEDS],
        [M, R] = (0, u.Z)(b.yN.WEEDS),
        A = null != (t = M.count) ? t : 0;
    (0, d.Z)(_, A);
    let T = (0, p.eR)(N),
        L = (e) => {
            var t;
            null == (t = S.current) || t.removeDrop(e), T(), R({ count: A + 1 });
        },
        B = (e) => {
            delete w[e], E(j({}, w));
        };
    return I
        ? null
        : (0, r.jsx)(g.Z, {
              ref: S,
              isPaused: Z,
              itemId: b.yN.WEEDS,
              chance: 0.2,
              points: null != (n = k.points) ? n : 0,
              height: P,
              width: C,
              dropPadding: 60,
              onPointsAdded: () => {
                  var e, t, n;
                  E(
                      ((t = j({}, w)),
                      (n = n = { [(0, o.Z)()]: null != (e = k.points) ? e : 0 }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(n)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                            }),
                      t)
                  );
              },
              children: (e) =>
                  (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(m.Z, {
                              renderedPoints: w,
                              onRemovePoint: B
                          }),
                          (0, r.jsx)(i.P3F, {
                              onClick: () => L(e),
                              className: x.clickable,
                              children: (0, r.jsx)(f.Z, {
                                  sources: [v, O],
                                  className: x.weed,
                                  'aria-label': h.intl.string(y.default.QBujOj),
                                  isPaused: Z,
                                  interval: 1000
                              })
                          })
                      ]
                  })
          });
}
