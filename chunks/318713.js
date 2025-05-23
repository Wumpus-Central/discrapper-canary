n.d(t, { Z: () => f });
var r = n(255367),
    o = n(73800),
    l = n(120356),
    i = n.n(l),
    s = n(481060),
    a = n(55935),
    c = n(543388),
    u = n(223021),
    d = n(388032),
    p = n(848697);
let m = o.memo(function (e) {
        let { children: t, className: n, compact: l = !1, timestamp: m, timestampFormat: f, isVisibleOnlyOnHover: b = !1, cozyAlt: h = !1, isInline: O = !0, id: y, isEdited: j = !1, application: v, tooltipPosition: P } = e,
            x = o.useMemo(() => new Date(m), [m]),
            C = o.useMemo(() => (0, a.Hg)(x), [x]),
            w = o.useMemo(() => (null != f ? (0, a.vc)(x, f) : l ? (0, a.vc)(x, 'LT') : (0, a.Y4)(x, !0)), [x, f, l]),
            S = o.useMemo(() => (l ? (0, u.Z)(w) : null), [l, w]),
            N = o.useMemo(() => (j ? d.intl.formatToPlainString(d.t.CDzOFR, { timeFormatted: C }) : C), [j, C]);
        return (0, r.jsx)('span', {
            className: i()(n, S, {
                [p.timestamp]: !0,
                [p.timestampVisibleOnHover]: b,
                [p.timestampInline]: O,
                [p.alt]: h
            }),
            children:
                null == v
                    ? (0, r.jsx)(s.ua7, {
                          text: () => (0, a.vc)(x, 'LLLL'),
                          'aria-label': N,
                          tooltipClassName: p.timestampTooltip,
                          position: P,
                          delay: 750,
                          children: (e) =>
                              (0, r.jsx)(g, {
                                  tooltipProps: e,
                                  timeFormatted: w,
                                  timestamp: x,
                                  id: y,
                                  compact: l,
                                  children: t
                              })
                      })
                    : (0, r.jsx)(c.Z, {
                          application: v,
                          timestamp: x,
                          compact: l,
                          children: (0, r.jsx)(g, {
                              timeFormatted: w,
                              timestamp: x,
                              id: y,
                              compact: l,
                              children: t
                          })
                      })
        });
    }),
    g = o.memo(function (e) {
        var t, n;
        let { tooltipProps: o, timeFormatted: l, children: i, compact: s, timestamp: a, id: c } = e;
        return (0, r.jsx)(
            'time',
            ((t = (function (e) {
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
            })({}, o)),
            (n = n =
                {
                    id: c,
                    dateTime: a.toISOString(),
                    children:
                        null != i
                            ? i
                            : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)('i', {
                                          className: p.separator,
                                          'aria-hidden': !0,
                                          children: s ? '[' : ' \u2014 '
                                      }),
                                      l,
                                      s &&
                                          (0, r.jsxs)('i', {
                                              className: p.separator,
                                              'aria-hidden': !0,
                                              children: [']', ' ']
                                          })
                                  ]
                              })
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
            t)
        );
    }),
    f = m;
