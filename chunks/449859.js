n.d(t, {
    A: () => y,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(990078),
    l = n(405269),
    c = n(355938),
    u = n(943815),
    d = n(985018),
    f = n(679740);

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
                timestamp: p,
                timestampFormat: _,
                isVisibleOnlyOnHover: h = !1,
                cozyAlt: m = !1,
                isInline: E = !0,
                id: y,
                isEdited: O = !1,
                application: A,
                tooltipPosition: v,
            } = e,
            S = i.useMemo(() => g(p), [p]),
            I = i.useMemo(() => (0, l.K7)(S), [S]),
            T = i.useMemo(() => (null != _ ? (0, l.i$)(S, _) : a ? (0, l.i$)(S, "LT") : (0, l.mk)(S, !0)), [S, _, a]),
            C = i.useMemo(() => (a ? (0, u.A)(T) : null), [a, T]),
            N = i.useMemo(
                () =>
                    O
                        ? d.intl.formatToPlainString(d.t.CDzOFd, {
                              timeFormatted: I,
                          })
                        : I,
                [O, I],
            );
        return (0, r.jsx)("span", {
            className: s()(n, C, {
                [f.vE]: !0,
                [f.ET]: h,
                [f.YQ]: E,
                [f.CC]: m,
            }),
            children:
                null == A
                    ? (0, r.jsx)(o.m, {
                          asContainer: !0,
                          __unsupportedReactNodeAsText: (0, l.i$)(S, "LLLL"),
                          "aria-label": N,
                          position: v,
                          delay: 750,
                          children: (0, r.jsx)(b, {
                              timeFormatted: T,
                              timestamp: S,
                              id: y,
                              compact: a,
                              children: t,
                          }),
                      })
                    : (0, r.jsx)(c.A, {
                          application: A,
                          compact: a,
                          children: (0, r.jsx)(b, {
                              timeFormatted: T,
                              timestamp: S,
                              id: y,
                              compact: a,
                              children: t,
                          }),
                      }),
        });
    }),
    b = i.memo(function (e) {
        let { tooltipProps: t, timeFormatted: n, children: i, compact: a, timestamp: s, id: o } = e;
        return (0, r.jsx)(
            "time",
            m(_({}, t), {
                id: o,
                dateTime: s.toISOString(),
                children:
                    null != i
                        ? i
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("i", {
                                      className: f.me,
                                      "aria-hidden": !0,
                                      children: a ? "[" : " — ",
                                  }),
                                  n,
                                  a &&
                                      (0, r.jsxs)("i", {
                                          className: f.me,
                                          "aria-hidden": !0,
                                          children: ["]", " "],
                                      }),
                              ],
                          }),
            }),
        );
    }),
    y = E;
