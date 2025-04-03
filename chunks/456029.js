n.d(t, { Z: () => _ }), n(47120);
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
    N = n(255785),
    v = n(938998);
function O(e) {
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
let j = n(748549),
    Z = [b.FK.WEED];
function _(e) {
    var t, n;
    let { height: _, width: P, isPaused: C } = e,
        [w, E] = (0, s.useState)({}),
        S = (0, s.useRef)(),
        I = (0, a.e7)([l.Z], () => l.Z.hasPurchasedUpgrade(b.yN.WEEDS, b.uv.WEED_KILLER)),
        k = c.Mq[b.yN.WEEDS],
        [M, W] = (0, u.Z)(b.yN.WEEDS),
        R = null != (t = M.count) ? t : 0;
    (0, d.Z)(Z, R);
    let A = (0, p.eR)(j),
        T = (e) => {
            var t;
            null == (t = S.current) || t.removeDrop(e), A(), W({ count: R + 1 });
        },
        L = (e) => {
            delete w[e], E(O({}, w));
        };
    return I
        ? null
        : (0, r.jsx)(g.Z, {
              ref: S,
              isPaused: C,
              itemId: b.yN.WEEDS,
              chance: 0.2,
              points: null != (n = k.points) ? n : 0,
              height: _,
              width: P,
              dropPadding: 60,
              onPointsAdded: () => {
                  var e, t, n;
                  E(
                      ((t = O({}, w)),
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
                              onRemovePoint: L
                          }),
                          (0, r.jsx)(i.P3F, {
                              onClick: () => T(e),
                              className: x.clickable,
                              children: (0, r.jsx)(f.Z, {
                                  sources: [N, v],
                                  className: x.weed,
                                  'aria-label': h.NW.string(y.Z.QBujOj),
                                  isPaused: C,
                                  interval: 1000
                              })
                          })
                      ]
                  })
          });
}
