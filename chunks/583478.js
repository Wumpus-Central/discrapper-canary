r.d(t, { Z: () => m }), r(388685);
var n = r(951288),
    o = r(647438),
    l = r(120356),
    u = r.n(l),
    a = r(137317),
    c = r(481060),
    i = r(110924),
    s = r(710845),
    b = r(168232),
    f = r(490093),
    O = r(48541),
    p = r(664597);
let y = new s.Z("BalanceCounter"),
    g = (0, b.dU)(void 0) === O.C.PRODUCTION,
    j = (e) => (null === e ? 0 : "".concat(e.toFixed(0)).length),
    d = (e) => {
        var t, r;
        let { value: l, onSetDigitCount: u, onValueChange: i, onValueReached: s, targetTotalCounterTime: b = 3000 } = e,
            [O, p] = (0, o.useState)(0),
            d = (0, o.useRef)(null),
            m = (0, o.useRef)(null);
        (0, o.useEffect)(() => {
            if (null === l) return;
            if (null === d.current) {
                d.current = l;
                return;
            }
            let e = null !== d.current ? l - d.current : l;
            0 !== e && null !== d.current && i(e),
                (m.current = {
                    lastChangedAt: Date.now(),
                    totalDelta: Math.abs(e),
                });
        }, [l, i]);
        let v = null != l ? l : 0,
            P = null != (t = d.current) ? t : v,
            { duration: h, delay: w } = (0, f.nL)(v - P, b),
            { number: S } = (0, c.q_F)({
                from: { number: null != (r = d.current) ? r : v },
                number: v,
                config: {
                    mass: 1,
                    tension: 20,
                    friction: 10,
                    duration: h,
                },
                delay: w,
                onStart: () => {
                    u(j(P));
                },
                onRest: () => {
                    if ((p(O + 1), s(), !g && null !== m.current && null !== d.current)) {
                        let e = Date.now();
                        y.log("Balance Counter finished updating: ", {
                            time: e - m.current.lastChangedAt,
                            delta: v - d.current,
                        });
                    }
                    u(j(v)), (d.current = v);
                },
            }),
            D = j(Math.max(null != l ? l : 0, S.get()));
        return (0, n.jsx)(a.animated.div, {
            style: { width: "calc(".concat(D, "ch)") },
            children: S.to((e) => "".concat(e.toFixed(0))),
        });
    },
    m = (e) => {
        var t,
            { value: r, className: l } = e,
            a = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    o = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            o = {},
                            l = Object.keys(e);
                        for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                        return o;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < l.length; n++)
                        (r = l[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                }
                return o;
            })(e, ["value", "className"]);
        let s = null === r,
            [b, f] = (0, o.useState)(null),
            O = (0, o.useMemo)(() => j(r), [r]),
            y = null != (t = (0, i.Z)(O)) ? t : 0,
            g = (0, o.useMemo)(() => (null === b ? Math.max(y, O) : Math.max(O, b)), [y, O, b]);
        return (0, n.jsx)(c.Text, {
            variant: "text-md/semibold",
            className: u()(p.balanceCounterText, s ? void 0 : p.balanceCounterMargin, l),
            style: {
                width: "".concat(s ? 0 : g, "ch"),
                opacity: s ? "0" : 1,
            },
            children: s
                ? null
                : (0, n.jsx)(
                      d,
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
