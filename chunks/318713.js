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
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
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
                timestamp: _,
                timestampFormat: p,
                isVisibleOnlyOnHover: h = !1,
                cozyAlt: m = !1,
                isInline: E = !0,
                id: y,
                isEdited: O = !1,
                application: v,
                tooltipPosition: I,
            } = e,
            T = i.useMemo(() => g(_), [_]),
            S = i.useMemo(() => (0, l.Hg)(T), [T]),
            A = i.useMemo(() => (null != p ? (0, l.vc)(T, p) : a ? (0, l.vc)(T, "LT") : (0, l.Y4)(T, !0)), [T, p, a]),
            C = i.useMemo(() => (a ? (0, u.Z)(A) : null), [a, A]),
            N = i.useMemo(() => (O ? d.intl.formatToPlainString(d.t.CDzOFd, { timeFormatted: S }) : S), [O, S]);
        return (0, r.jsx)("span", {
            className: o()(n, C, {
                [f.timestamp]: !0,
                [f.timestampVisibleOnHover]: h,
                [f.timestampInline]: E,
                [f.alt]: m,
            }),
            children:
                null == v
                    ? (0, r.jsx)(s.u, {
                          asContainer: !0,
                          __unsupportedReactNodeAsText: (0, l.vc)(T, "LLLL"),
                          "aria-label": N,
                          position: I,
                          delay: 750,
                          children: (0, r.jsx)(b, {
                              timeFormatted: A,
                              timestamp: T,
                              id: y,
                              compact: a,
                              children: t,
                          }),
                      })
                    : (0, r.jsx)(c.Z, {
                          application: v,
                          compact: a,
                          children: (0, r.jsx)(b, {
                              timeFormatted: A,
                              timestamp: T,
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
            m(p({}, t), {
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
