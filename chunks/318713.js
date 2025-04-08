n.d(t, { Z: () => p });
var a = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    i = n(481060),
    s = n(55935),
    o = n(543388),
    c = n(223021),
    u = n(388032),
    d = n(848697);
function m(e) {
    var t, n;
    let { tooltipProps: r, timeFormatted: l, children: i, compact: s, timestamp: o, id: c } = e;
    return (0, a.jsx)(
        'time',
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    a = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (a = a.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    a.forEach(function (t) {
                        var a;
                        (a = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: a,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = a);
                    });
            }
            return e;
        })({}, r)),
        (n = n =
            {
                id: c,
                dateTime: o.toISOString(),
                children:
                    null != i
                        ? i
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)('i', {
                                      className: d.separator,
                                      'aria-hidden': !0,
                                      children: s ? '[' : ' \u2014 '
                                  }),
                                  l,
                                  s &&
                                      (0, a.jsxs)('i', {
                                          className: d.separator,
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
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
}
let p = function (e) {
    let { children: t, className: n, compact: r = !1, timestamp: p, timestampFormat: h, isVisibleOnlyOnHover: g = !1, cozyAlt: _ = !1, isInline: f = !0, id: b, isEdited: y = !1, application: E, tooltipPosition: I } = e,
        S = new Date(p),
        O = (0, s.Hg)(S),
        C = null != h ? (0, s.vc)(S, h) : r ? (0, s.vc)(S, 'LT') : (0, s.Y4)(S, !0),
        v = r ? (0, c.Z)(C) : null,
        x = y ? u.NW.formatToPlainString(u.t.CDzOFR, { timeFormatted: O }) : O;
    return (0, a.jsx)('span', {
        className: l()(n, v, {
            [d.timestamp]: !0,
            [d.timestampVisibleOnHover]: g,
            [d.timestampInline]: f,
            [d.alt]: _
        }),
        children:
            null == E
                ? (0, a.jsx)(i.ua7, {
                      text: (0, s.vc)(S, 'LLLL'),
                      'aria-label': x,
                      tooltipClassName: d.timestampTooltip,
                      position: I,
                      delay: 750,
                      children: (e) =>
                          (0, a.jsx)(m, {
                              tooltipProps: e,
                              timeFormatted: C,
                              timestamp: S,
                              id: b,
                              compact: r,
                              children: t
                          })
                  })
                : (0, a.jsx)(o.Z, {
                      application: E,
                      timestamp: S,
                      compact: r,
                      children: (0, a.jsx)(m, {
                          timeFormatted: C,
                          timestamp: S,
                          id: b,
                          compact: r,
                          children: t
                      })
                  })
    });
};
