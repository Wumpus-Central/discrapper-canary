n.d(t, { Z: () => y });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(28664),
    l = n(55935),
    c = n(543388),
    u = n(223021),
    d = n(388032),
    f = n(724913);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    return new Date(e);
}
let E = i.memo(function (e) {
        let {
                children: t,
                className: n,
                compact: a = !1,
                timestamp: p,
                timestampFormat: _,
                isVisibleOnlyOnHover: m = !1,
                cozyAlt: h = !1,
                isInline: E = !0,
                id: y,
                isEdited: O = !1,
                application: v,
                tooltipPosition: S,
            } = e,
            I = i.useMemo(() => g(p), [p]),
            T = i.useMemo(() => (0, l.Hg)(I), [I]),
            C = i.useMemo(() => (null != _ ? (0, l.vc)(I, _) : a ? (0, l.vc)(I, "LT") : (0, l.Y4)(I, !0)), [I, _, a]),
            A = i.useMemo(() => (a ? (0, u.Z)(C) : null), [a, C]),
            N = i.useMemo(() => (O ? d.intl.formatToPlainString(d.t.CDzOFd, { timeFormatted: T }) : T), [O, T]);
        return (0, r.jsx)("span", {
            className: o()(n, A, {
                [f.timestamp]: !0,
                [f.timestampVisibleOnHover]: m,
                [f.timestampInline]: E,
                [f.alt]: h,
            }),
            children:
                null == v
                    ? (0, r.jsx)(s.u, {
                          asContainer: !0,
                          __unsupportedReactNodeAsText: (0, l.vc)(I, "LLLL"),
                          "aria-label": N,
                          position: S,
                          delay: 750,
                          children: (0, r.jsx)(b, {
                              timeFormatted: C,
                              timestamp: I,
                              id: y,
                              compact: a,
                              children: t,
                          }),
                      })
                    : (0, r.jsx)(c.Z, {
                          application: v,
                          compact: a,
                          children: (0, r.jsx)(b, {
                              timeFormatted: C,
                              timestamp: I,
                              id: y,
                              compact: a,
                              children: t,
                          }),
                      }),
        });
    }),
    b = i.memo(function (e) {
        let { tooltipProps: t, timeFormatted: n, children: i, compact: a, timestamp: o, id: s } = e;
        return (0, r.jsx)(
            "time",
            h(_({}, t), {
                id: s,
                dateTime: o.toISOString(),
                children:
                    null != i
                        ? i
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("i", {
                                      className: f.separator,
                                      "aria-hidden": !0,
                                      children: a ? "[" : " \u2014 ",
                                  }),
                                  n,
                                  a &&
                                      (0, r.jsxs)("i", {
                                          className: f.separator,
                                          "aria-hidden": !0,
                                          children: ["]", " "],
                                      }),
                              ],
                          }),
            }),
        );
    }),
    y = E;
