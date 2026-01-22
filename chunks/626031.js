n.d(t, { A: () => S }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(432022),
    l = n(397927),
    c = n(475743),
    u = n(626584),
    d = n(572009),
    f = n(14115),
    p = n(115093),
    _ = n(467043);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = E(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let b = new u.A("BalanceCounter"),
    y = (0, d._$)(void 0) === p.B.PRODUCTION,
    O = (e) => (null == e ? 0 : "".concat(e.toFixed(0)).length),
    A = (e, t, n) => (null === n ? Math.max(e, t) : Math.max(t, n)),
    v = (e) => {
        var t, n;
        let { value: a, onSetDigitCount: s, onValueChange: c, onValueReached: u, targetTotalCounterTime: d = 3000 } = e,
            [p, _] = (0, i.useState)(0),
            h = (0, i.useRef)(null),
            m = (0, i.useRef)(null);
        (0, i.useEffect)(() => {
            if (null === a) return;
            if (null === h.current) {
                h.current = a;
                return;
            }
            let e = null !== h.current ? a - h.current : a;
            0 !== e && null !== h.current && c(e),
                (m.current = {
                    lastChangedAt: Date.now(),
                    totalDelta: Math.abs(e),
                });
        }, [a, c]);
        let g = null != a ? a : 0,
            E = null != (t = h.current) ? t : g,
            { duration: A, delay: v } = (0, f.Y)(g - E, d),
            { number: S } = (0, l.zhh)({
                from: { number: null != (n = h.current) ? n : g },
                number: g,
                config: {
                    mass: 1,
                    tension: 20,
                    friction: 10,
                    duration: A,
                },
                delay: v,
                onStart: () => {
                    s(O(E));
                },
                onRest: () => {
                    if ((_(p + 1), u(), !y && null !== m.current && null !== h.current)) {
                        let e = Date.now();
                        b.log("Balance Counter finished updating: ", {
                            time: e - m.current.lastChangedAt,
                            delta: g - h.current,
                        });
                    }
                    s(O(g)), (h.current = g);
                },
            }),
            I = O(Math.max(null != a ? a : 0, S.get()));
        return (0, r.jsx)(o.animated.div, {
            style: { width: "calc(".concat(I, "ch)") },
            children: S.to((e) => "".concat(e.toFixed(0))),
        });
    },
    S = (e) => {
        var t;
        let { value: n, className: a } = e,
            o = g(e, ["value", "className"]),
            u = null === n,
            [d, f] = (0, i.useState)(null),
            p = (0, i.useMemo)(() => O(n), [n]),
            h = null != (t = (0, c.A)(p)) ? t : 0,
            E = (0, i.useMemo)(() => A(h, p, d), [h, p, d]),
            b = "".concat(u ? 0 : E, "ch");
        return (0, r.jsx)(l.Text, {
            variant: "text-md/semibold",
            className: s()(_.S, u ? void 0 : _.r, a),
            style: {
                width: b,
                opacity: u ? "0" : 1,
            },
            children: u
                ? null
                : (0, r.jsx)(
                      v,
                      m(
                          {
                              onSetDigitCount: (e) => {
                                  e !== d && f(e);
                              },
                              value: n,
                          },
                          o,
                      ),
                  ),
        });
    };
