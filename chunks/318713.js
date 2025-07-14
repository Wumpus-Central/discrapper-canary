n.d(t, { Z: () => f });
var r = n(255367),
    o = n(73800),
    l = n(120356),
    i = n.n(l),
    a = n(481060),
    s = n(55935),
    c = n(543388),
    u = n(223021),
    d = n(388032),
    p = n(848697);
let m = o.memo(function (e) {
        let { children: t, className: n, compact: l = !1, timestamp: m, timestampFormat: f, isVisibleOnlyOnHover: b = !1, cozyAlt: h = !1, isInline: O = !0, id: y, isEdited: v = !1, application: j, tooltipPosition: P } = e,
            x = o.useMemo(() => new Date(m), [m]),
            C = o.useMemo(() => (0, s.Hg)(x), [x]),
            w = o.useMemo(() => (null != f ? (0, s.vc)(x, f) : l ? (0, s.vc)(x, 'LT') : (0, s.Y4)(x, !0)), [x, f, l]),
            S = o.useMemo(() => (l ? (0, u.Z)(w) : null), [l, w]),
            E = o.useMemo(() => (v ? d.intl.formatToPlainString(d.t.CDzOFR, { timeFormatted: C }) : C), [v, C]);
        return (0, r.jsx)('span', {
            className: i()(n, S, {
                [p.timestamp]: !0,
                [p.timestampVisibleOnHover]: b,
                [p.timestampInline]: O,
                [p.alt]: h
            }),
            children:
                null == j
                    ? (0, r.jsx)(a.ua7, {
                          text: () => (0, s.vc)(x, 'LLLL'),
                          'aria-label': E,
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
                          application: j,
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
        let { tooltipProps: o, timeFormatted: l, children: i, compact: a, timestamp: s, id: c } = e;
        return (0, r.jsx)(
            'time',
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            ((r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r));
                        }));
                }
                return e;
            })({}, o)),
            (n = n =
                {
                    id: c,
                    dateTime: s.toISOString(),
                    children:
                        null != i
                            ? i
                            : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)('i', {
                                          className: p.separator,
                                          'aria-hidden': !0,
                                          children: a ? '[' : ' \u2014 '
                                      }),
                                      l,
                                      a &&
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
