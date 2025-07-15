n.d(t, { Z: () => f });
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(481060),
    s = n(55935),
    c = n(543388),
    u = n(223021),
    d = n(388032),
    p = n(848697);
let m = l.memo(function (e) {
        let { children: t, className: n, compact: o = !1, timestamp: m, timestampFormat: f, isVisibleOnlyOnHover: b = !1, cozyAlt: h = !1, isInline: O = !0, id: y, isEdited: v = !1, application: j, tooltipPosition: P } = e,
            x = l.useMemo(() => new Date(m), [m]),
            w = l.useMemo(() => (0, s.Hg)(x), [x]),
            C = l.useMemo(() => (null != f ? (0, s.vc)(x, f) : o ? (0, s.vc)(x, 'LT') : (0, s.Y4)(x, !0)), [x, f, o]),
            S = l.useMemo(() => (o ? (0, u.Z)(C) : null), [o, C]),
            E = l.useMemo(() => (v ? d.intl.formatToPlainString(d.t.CDzOFR, { timeFormatted: w }) : w), [v, w]);
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
                                  timeFormatted: C,
                                  timestamp: x,
                                  id: y,
                                  compact: o,
                                  children: t
                              })
                      })
                    : (0, r.jsx)(c.Z, {
                          application: j,
                          timestamp: x,
                          compact: o,
                          children: (0, r.jsx)(g, {
                              timeFormatted: C,
                              timestamp: x,
                              id: y,
                              compact: o,
                              children: t
                          })
                      })
        });
    }),
    g = l.memo(function (e) {
        var t, n;
        let { tooltipProps: l, timeFormatted: o, children: i, compact: a, timestamp: s, id: c } = e;
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
            })({}, l)),
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
                                      o,
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
