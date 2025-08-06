n.d(t, { Z: () => y });
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(55935),
    c = n(543388),
    u = n(223021),
    d = n(388032),
    f = n(848697);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
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
                _(e, t, n[t]);
            }));
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
        let { children: t, className: n, compact: o = !1, timestamp: _, timestampFormat: p, isVisibleOnlyOnHover: h = !1, cozyAlt: m = !1, isInline: E = !0, id: y, isEdited: O = !1, application: v, tooltipPosition: I } = e,
            T = i.useMemo(() => g(_), [_]),
            S = i.useMemo(() => (0, l.Hg)(T), [T]),
            A = i.useMemo(() => (null != p ? (0, l.vc)(T, p) : o ? (0, l.vc)(T, 'LT') : (0, l.Y4)(T, !0)), [T, p, o]),
            N = i.useMemo(() => (o ? (0, u.Z)(A) : null), [o, A]),
            C = i.useMemo(() => (O ? d.intl.formatToPlainString(d.t.CDzOFR, { timeFormatted: S }) : S), [O, S]);
        return (0, r.jsx)('span', {
            className: a()(n, N, {
                [f.timestamp]: !0,
                [f.timestampVisibleOnHover]: h,
                [f.timestampInline]: E,
                [f.alt]: m
            }),
            children:
                null == v
                    ? (0, r.jsx)(s.ua7, {
                          text: () => (0, l.vc)(T, 'LLLL'),
                          'aria-label': C,
                          tooltipClassName: f.timestampTooltip,
                          position: I,
                          delay: 750,
                          children: (e) =>
                              (0, r.jsx)(b, {
                                  tooltipProps: e,
                                  timeFormatted: A,
                                  timestamp: T,
                                  id: y,
                                  compact: o,
                                  children: t
                              })
                      })
                    : (0, r.jsx)(c.Z, {
                          application: v,
                          timestamp: T,
                          compact: o,
                          children: (0, r.jsx)(b, {
                              timeFormatted: A,
                              timestamp: T,
                              id: y,
                              compact: o,
                              children: t
                          })
                      })
        });
    }),
    b = i.memo(function (e) {
        let { tooltipProps: t, timeFormatted: n, children: i, compact: o, timestamp: a, id: s } = e;
        return (0, r.jsx)(
            'time',
            m(p({}, t), {
                id: s,
                dateTime: a.toISOString(),
                children:
                    null != i
                        ? i
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)('i', {
                                      className: f.separator,
                                      'aria-hidden': !0,
                                      children: o ? '[' : ' \u2014 '
                                  }),
                                  n,
                                  o &&
                                      (0, r.jsxs)('i', {
                                          className: f.separator,
                                          'aria-hidden': !0,
                                          children: [']', ' ']
                                      })
                              ]
                          })
            })
        );
    }),
    y = E;
