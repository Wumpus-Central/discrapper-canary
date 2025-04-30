r.d(t, { Z: () => b });
var n = r(200651),
    l = r(192379),
    o = r(120356),
    i = r.n(o),
    a = r(481060),
    c = r(55935),
    s = r(543388),
    u = r(223021),
    m = r(388032),
    p = r(848697);
let d = l.memo(function (e) {
        let { children: t, className: r, compact: o = !1, timestamp: d, timestampFormat: b, isVisibleOnlyOnHover: y = !1, cozyAlt: O = !1, isInline: g = !0, id: j, isEdited: v = !1, application: h, tooltipPosition: x } = e,
            P = l.useMemo(() => new Date(d), [d]),
            S = l.useMemo(() => (0, c.Hg)(P), [P]),
            N = l.useMemo(() => (null != b ? (0, c.vc)(P, b) : o ? (0, c.vc)(P, 'LT') : (0, c.Y4)(P, !0)), [P, b, o]),
            T = l.useMemo(() => (o ? (0, u.Z)(N) : null), [o, N]),
            w = l.useMemo(() => (v ? m.intl.formatToPlainString(m.t.CDzOFR, { timeFormatted: S }) : S), [v, S]);
        return (0, n.jsx)('span', {
            className: i()(r, T, {
                [p.timestamp]: !0,
                [p.timestampVisibleOnHover]: y,
                [p.timestampInline]: g,
                [p.alt]: O
            }),
            children:
                null == h
                    ? (0, n.jsx)(a.ua7, {
                          text: () => (0, c.vc)(P, 'LLLL'),
                          'aria-label': w,
                          tooltipClassName: p.timestampTooltip,
                          position: x,
                          delay: 750,
                          children: (e) =>
                              (0, n.jsx)(f, {
                                  tooltipProps: e,
                                  timeFormatted: N,
                                  timestamp: P,
                                  id: j,
                                  compact: o,
                                  children: t
                              })
                      })
                    : (0, n.jsx)(s.Z, {
                          application: h,
                          timestamp: P,
                          compact: o,
                          children: (0, n.jsx)(f, {
                              timeFormatted: N,
                              timestamp: P,
                              id: j,
                              compact: o,
                              children: t
                          })
                      })
        });
    }),
    f = l.memo(function (e) {
        var t, r;
        let { tooltipProps: l, timeFormatted: o, children: i, compact: a, timestamp: c, id: s } = e;
        return (0, n.jsx)(
            'time',
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })
                        )),
                        n.forEach(function (t) {
                            var n;
                            (n = r[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = n);
                        });
                }
                return e;
            })({}, l)),
            (r = r =
                {
                    id: s,
                    dateTime: c.toISOString(),
                    children:
                        null != i
                            ? i
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)('i', {
                                          className: p.separator,
                                          'aria-hidden': !0,
                                          children: a ? '[' : ' \u2014 '
                                      }),
                                      o,
                                      a &&
                                          (0, n.jsxs)('i', {
                                              className: p.separator,
                                              'aria-hidden': !0,
                                              children: [']', ' ']
                                          })
                                  ]
                              })
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                : (function (e, t) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, n);
                      }
                      return r;
                  })(Object(r)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                  }),
            t)
        );
    }),
    b = d;
