n.d(t, { Z: () => f });
var r = n(54381),
    i = n(473749),
    l = n(924826),
    a = n(91192),
    s = n(442837),
    o = n(215569),
    c = n(481060),
    u = n(607070),
    d = n(981631),
    p = n(983703);
let f = function (e) {
    let { rows: t, renderRow: n, renderSection: f, hasSearchQuery: h, sectionFilter: g, footer: m } = e,
        _ = (0, s.e7)([u.Z], () => u.Z.keyboardModeEnabled),
        b = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        E = (0, l.ZP)({
            id: "people",
            isEnabled: _,
            async scrollToStart() {},
            async scrollToEnd() {},
        }),
        O = g !== d.pJs.ONLINE && g !== d.pJs.ALL,
        y = b || h || O,
        v = i.useMemo(
            () =>
                t.map((e, t) =>
                    0 === e.length
                        ? null
                        : y
                          ? (0, r.jsxs)(
                                "div",
                                {
                                    children: [f(t), e.map(n)],
                                },
                                t,
                            )
                          : (0, r.jsxs)(
                                o.W,
                                {
                                    transitionAppear: !1,
                                    component: "div",
                                    children: [f(t), e.map(n)],
                                },
                                t,
                            ),
                ),
            [n, f, t, y],
        );
    return (0, r.jsx)(a.bG, {
        navigator: E,
        children: (0, r.jsx)(a.SJ, {
            children: (e) => {
                var t,
                    n,
                    { ref: i } = e,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = {},
                                    l = Object.keys(e);
                                for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                return i;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var l = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < l.length; r++)
                                (n = l[r]),
                                    !(t.indexOf(n) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                                        (i[n] = e[n]);
                        }
                        return i;
                    })(e, ["ref"]);
                return (0, r.jsxs)(
                    c.w0Z,
                    ((t = (function (e) {
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
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })(
                        {
                            ref: i,
                            className: p.peopleList,
                        },
                        l,
                    )),
                    (n = n =
                        {
                            children: [v, m],
                        }),
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
                    t),
                );
            },
        }),
    });
};
