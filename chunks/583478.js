r.d(t, { Z: () => j }), r(388685);
var n = r(951288),
    l = r(647438),
    o = r(120356),
    u = r.n(o),
    a = r(13941),
    c = r(481060),
    i = r(110924),
    s = r(710845),
    b = r(168232),
    f = r(490093),
    p = r(48541),
    O = r(664597);
let y = new s.Z("BalanceCounter"),
    d = (0, b.dU)(void 0) === p.C.PRODUCTION,
    m = (e) => (null == e ? 0 : "".concat(e.toFixed(0)).length),
    g = (e) => {
        var t, r;
        let { value: o, onSetDigitCount: u, onValueChange: i, onValueReached: s, targetTotalCounterTime: b = 3000 } = e,
            [p, O] = (0, l.useState)(0),
            g = (0, l.useRef)(null),
            j = (0, l.useRef)(null);
        (0, l.useEffect)(() => {
            if (null === o) return;
            if (null === g.current) {
                g.current = o;
                return;
            }
            let e = null !== g.current ? o - g.current : o;
            0 !== e && null !== g.current && i(e),
                (j.current = {
                    lastChangedAt: Date.now(),
                    totalDelta: Math.abs(e),
                });
        }, [o, i]);
        let v = null != o ? o : 0,
            h = null != (t = g.current) ? t : v,
            { duration: P, delay: w } = (0, f.nL)(v - h, b),
            { number: D } = (0, c.q_F)({
                from: { number: null != (r = g.current) ? r : v },
                number: v,
                config: {
                    mass: 1,
                    tension: 20,
                    friction: 10,
                    duration: P,
                },
                delay: w,
                onStart: () => {
                    u(m(h));
                },
                onRest: () => {
                    if ((O(p + 1), s(), !d && null !== j.current && null !== g.current)) {
                        let e = Date.now();
                        y.log("Balance Counter finished updating: ", {
                            time: e - j.current.lastChangedAt,
                            delta: v - g.current,
                        });
                    }
                    u(m(v)), (g.current = v);
                },
            }),
            C = m(Math.max(null != o ? o : 0, D.get()));
        return (0, n.jsx)(a.animated.div, {
            style: { width: "calc(".concat(C, "ch)") },
            children: D.to((e) => "".concat(e.toFixed(0))),
        });
    },
    j = (e) => {
        var t,
            { value: r, className: o } = e,
            a = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            l = {},
                            o = Object.keys(e);
                        for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++)
                        (r = o[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                }
                return l;
            })(e, ["value", "className"]);
        let s = null === r,
            [b, f] = (0, l.useState)(null),
            p = (0, l.useMemo)(() => m(r), [r]),
            y = null != (t = (0, i.Z)(p)) ? t : 0,
            d = (0, l.useMemo)(() => (null === b ? Math.max(y, p) : Math.max(p, b)), [y, p, b]);
        return (0, n.jsx)(c.Text, {
            variant: "text-md/semibold",
            className: u()(O.balanceCounterText, s ? void 0 : O.balanceCounterMargin, o),
            style: {
                width: "".concat(s ? 0 : d, "ch"),
                opacity: s ? "0" : 1,
            },
            children: s
                ? null
                : (0, n.jsx)(
                      g,
                      (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = null != arguments[t] ? arguments[t] : {},
                                  n = Object.keys(r);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (n = n.concat(
                                      Object.getOwnPropertySymbols(r).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                      }),
                                  )),
                                  n.forEach(function (t) {
                                      var n;
                                      (n = r[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: n,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[t] = n);
                                  });
                          }
                          return e;
                      })(
                          {
                              onSetDigitCount: (e) => {
                                  e !== b && f(e);
                              },
                              value: r,
                          },
                          a,
                      ),
                  ),
        });
    };
